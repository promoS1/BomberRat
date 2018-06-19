//=========================================================================
// Traitement de "req_inscrire"
// Auteur : P. Thiré
// Version : 09/10/2015
//=========================================================================

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {
	

	var marqueurs;
	var pseudo;
	var password;
	var password2;
	var page;
	var nouveauMembre;
	var contenu_fichier;
	var listeMembres;
	var i;
	var trouve;
	var mdp;
	var pseudo_valide;
	var mdp_valide;

	// ON LIT LES COMPTES EXISTANTS

	contenu_fichier = fs.readFileSync("membres.json", 'utf-8');    
	listeMembres = JSON.parse(contenu_fichier);

	// ON VERIFIE QUE LE COMPTE N'EXISTE PAS DEJA

	trouve = false;
	i = 0;
	while(i<listeMembres.length && trouve === false) {
		if(listeMembres[i].pseudo === query.pseudo) {
			trouve = true;
		}
		i++;
	}

	//VERIFICATION MOT DE PASSE 
		if(query.password === query.password2){
			mdp = "identique"
		} else {
			mdp = "different"
		}
		
	// VERICATION DES CHAMPS SI ILS SONT VIDE OU PAS 
	if (query.pseudo.length > 0) {
		pseudo_valide = "oui"
	} else {
		pseudo_valide = "non"
	}
	if (query.password.length > 0) {
		mdp_valide = "oui"
	} else { 
		mdp_valide = "non"
	}


		

	// SI PAS TROUVE, ON AJOUTE LE NOUVEAU COMPTE DANS LA LISTE DES COMPTES

	if(trouve === false && mdp === "identique" && pseudo_valide ===  "oui"
	&& mdp_valide === "oui") {
		nouveauMembre = {};
		nouveauMembre.pseudo = query.pseudo;
		nouveauMembre.password = query.password;
		nouveauMembre.v = 0;
		nouveauMembre.d = 0;
		listeMembres[listeMembres.length] = nouveauMembre;

		contenu_fichier = JSON.stringify(listeMembres);

		fs.writeFileSync("membres.json", contenu_fichier, 'utf-8');
	}


	// ON RENVOIT UNE PAGE HTML 

	if(trouve === true || mdp === "different" || pseudo_valide === "non" ||
	mdp_valide === "non") {
		// SI CREATION PAS OK, ON REAFFICHE PAGE FORMULAIRE AVEC ERREUR MDP DIFERENTS

		page = fs.readFileSync('modele_formulaire_inscription.html', 'utf-8');

		marqueurs = {};
		if (trouve === true){
		marqueurs.erreur = "ERREUR : ce compte existe déjà";
		}else if (mdp === "different"){
		marqueurs.erreur = "ERREUR : les mots de passe ne sont pas identiques";
		}else if (pseudo_valide === "non") {
		marqueurs.erreur = "ERREUR : le champ pseudo est vide";
		}else if (mdp_valide === "non") {
		marqueurs.erreur = "ERREUR : le champ mot de passe est vide";
		}
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);

	} else {
		
		// SI CREATION OK, ON ENVOIE PAGE DE CONFIRMATION

		page = fs.readFileSync('modele_confirmation_inscription.html', 'UTF-8');

		marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		marqueurs.password = query.password;
		page = page.supplant(marqueurs);
	}

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//---------------------------------------------------------------------------

module.exports = trait;

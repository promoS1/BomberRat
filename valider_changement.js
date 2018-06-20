"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var nouveauMembre;
	var contenu_fichier;
	var listeMembres;
	var i;
	var trouve;
	var pseudo_valide;
	var indexJoueur;

	// ON LIT LES COMPTES EXISTANTS

	contenu_fichier = fs.readFileSync("membres.json", 'utf-8');
	listeMembres = JSON.parse(contenu_fichier);

	// ON VERIFIE QUE LE COMPTE EXISTE

	trouve = false;
	i = 0;
	while(i<listeMembres.length && trouve === false) {
		if(listeMembres[i].pseudo === query.pseudo) {
			trouve = true;
			indexJoueur = i;
		}
		i++;
	}

	listeMembres[indexJoueur].pseudo = query.userInput;

	// ECRIRE DANS LE JSON
	listeMembres = JSON.stringify(listeMembres);
	fs.writeFileSync("membres.json",listeMembres, 'utf-8');



	page = fs.readFileSync('confirmation_changement_pseudo.html', 'UTF-8');

	marqueurs = {};
	marqueurs.pseudo = query.pseudo;
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();

	};
//------------------------------------------------------------

module.exports = trait;

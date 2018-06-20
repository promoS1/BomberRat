//=========================================================================
// Site WEB demo PI
// Auteur : P. Thiré
// Version : 09/03/2018
//=========================================================================

"use strict";

var http = require("http");
var url = require("url");
var mon_serveur;
var port;

//-------------------------------------------------------------------------
// DECLARATION DES DIFFERENTS MODULES CORRESPONDANT A CHAQUE ACTION
//-------------------------------------------------------------------------

var req_commencer = require("./req_commencer.js");
var req_afficher_formulaire_inscription = require("./req_afficher_formulaire_inscription.js");
var req_inscrire = require("./req_inscrire.js");
var req_identifier = require("./req_identifier.js");
var req_facile = require("./req_facile.js");
var req_inter = require("./req_inter.js");
var req_hard = require("./req_hard.js");
var req_regle = require("./req_regle.js");
var req_deco = require("./req_deco.js");
var req_erreur = require("./req_erreur.js");
var req_statique = require("./req_statique.js");
var req_jeufacile = require("./req_jeufacile.js");
var req_retour = require("./req_retour.js");
var req_jeuinter = require("./req_jeuinter.js");
var req_jeuhard = require("./req_jeuhard.js");
var req_leader = require("./req_leader.js");
var req_changer_pseudo = require("./req_changer_pseudo.js");
var valider_changement =  require("./valider_changement.js");
//-------------------------------------------------------------------------
// FONCTION DE CALLBACK APPELLEE POUR CHAQUE REQUETE
//-------------------------------------------------------------------------

var traite_requete = function (req, res) {

	var ressource;
	var requete;
	var pathname;
	var query;

	console.log("URL reçue : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;

	// ROUTEUR

	try {
		switch (pathname) {
			case '/':
			case '/req_commencer':
				req_commencer(req, res, query);
				break;
			case '/req_afficher_formulaire_inscription':
				req_afficher_formulaire_inscription(req, res, query);
				break;
			case '/req_inscrire':
				req_inscrire(req, res, query);
				break;
			case '/req_identifier':
				req_identifier(req, res, query);
				break;
			case '/req_facile':
				req_facile(req, res, query);
				break;
			case '/req_retour':
				req_retour(req, res, query);
				break;
			case '/req_inter':
				req_inter(req, res, query);
				break
			case '/req_jeuinter':
				req_jeuinter(req, res, query);
				break;
			case '/req_hard':
				req_hard(req, res, query);
				break
			case '/req_jeuhard':
				req_jeuhard(req,res, query);
				break;
			case '/req_regle':
				req_regle(req, res, query);
				break;
			case '/req_deco':
				req_deco(req, res, query);
				break;
			case '/req_jeufacile':
				req_jeufacile(req, res, query);
				break;
			case '/req_creer_grille':
				req_creer_grille(req, res, query);
				break;
			case '/req_leader':
				req_leader(req, res, query);
				break;
			case '/req_changer_pseudo' :
				req_changer_pseudo(req, res, query);
				break;
			case '/valider_changement' : 
				valider_changement(req, res, query);
				break;

			default:
				req_statique(req, res, pathname);
				break;
		}
	} catch (e) {
		console.log('Erreur : ' + e.stack);
		console.log('Erreur : ' + e.message);
		//console.trace();
		req_erreur(req, res, query);
	}
};

//-------------------------------------------------------------------------
// CREATION ET LANCEMENT DU SERVEUR
//-------------------------------------------------------------------------

mon_serveur = http.createServer(traite_requete);
port = 5000;
//port = process.argv[2];
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);

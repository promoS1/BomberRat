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
			case '/req_inter':
				req_inter(req, res, query);
				break;
			case '/req_hard':
				req_hard(req, res, query);
				break;
			case '/req_regle':
				req_regle(req, res, query);
				break;
			case '/req_deco':
				req_deco(req, res, query);
				break;
			default:
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
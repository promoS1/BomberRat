// Requete quitter pour le mode facile 


"use strict"

var fs = require("fs");
require('remedial');

var trait = function (req ,res ,query) {
var page;
var marqueur = {};

	page = fs.readFileSync("modele_accueil_membre.html","utf-8");
	
	marqueur.chang_pseudo = "";
	marqueur.pseudo = query.pseudo;
	page = page.supplant(marqueur);


	res.writeHead(200,{"Content-Type": "text/html"});
	res.write(page);
	res.end();
};

module.exports = trait;

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueur;
	var page;
	var mod_grille = require("./modules/mod_grille.js")
	var mod_value = require("./modules/mod_value.js")

	
	mod_grille(8,8,10);
	mod_value(8,8);


	// AFFICHAGE NIVEAU FACILE
	page = fs.readFileSync("./level_facile.html","UTF-8");
	marqueur = {};
	marqueur.pseudo = query.pseudo;
	page = page.supplant(marqueur);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;

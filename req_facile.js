"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var fs = require("fs");
	var marqueur;
	var page;
	var mod_grille = require("./modules/mod_grille.js");
	var mod_value = require("./modules/mod_value.js");
	var x;
	var y;
	var pseudo;
	var repJSON;
	var fun_aff = require("./modules/fun_aff.js");
	var grille;

	mod_grille(8,8,6, query.pseudo);
	mod_value(8,8, query.pseudo);


	// AFFICHAGE NIVEAU FACILE
    repJSON = fs.readFileSync("./modules/grille_" + query.pseudo + ".json", "UTF-8");
	grille = JSON.parse(repJSON);

	page = fs.readFileSync("./level_facile.html","UTF-8");
	marqueur = fun_aff(query.pseudo,grille);
	marqueur.lose = "";
	page = page.supplant(marqueur);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();

};
//--------------------------------------------------------------------------

module.exports = trait;

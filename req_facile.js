"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueur;
	var page;
	var mod_grille = require("./modules/mod_grille.js")
	var mod_value = require("./modules/mod_value.js")
	var x;
	var y;
	var pseudo;

	mod_grille(8,8,10);
	mod_value(8,8);


	// AFFICHAGE NIVEAU FACILE
	page = fs.readFileSync("./level_facile.html","UTF-8");
	marqueur = {};
	marqueur.pseudo = query.pseudo;

	marqueur.lagrille = "";
	for (x = 0;x < 8; x++) {
		for (y = 0; y < 8; y++) {
			marqueur.lagrille += "<a href='http://localhost:5000/req_facile?bouton=facile&pseudo=" + query.pseudo + "&l=" + (x+1) + "&c=" + (y+1) + "'><img src='./images/carre.png'></a>\n";

		}
		marqueur.lagrille += "<br>"
	}
	page = page.supplant(marqueur);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;

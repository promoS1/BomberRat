"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var grille = require("./modules/grille.json");
	var fs = require("fs");
	var repJSON;

	repJSON = fs.readFileSync("./modules/grille.json", "UTF-8");
	grille = JSON.parse(repJSON);


	// AFFICHAGE DE LA PAGE DU JEU AVEC CHANGEMENT AU NIVEAU FACIKLE


	page = fs.readFileSync('./level_facile.html', 'utf-8');

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.pseudo = query.pseudo;
	marqueur.lagrille = "";
	for (x = 0;x < 8; x++) {
		for (y = 0; y < 8; y++) {
			marqueur.lagrille += "<a href='http://localhost:5000/req_jeufacile?bouton=facile&pseudo=" + query.pseudo + "&l=" + (x+1) + "&c=" + (y+1) + "'><img src='./images/carre.png'></a>\n";
		}
		marqueur.lagrille += "<br>\n"
	}

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;


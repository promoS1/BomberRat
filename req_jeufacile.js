"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueur;
	var page;
	var grille;
	var fs = require("fs");
	var repJSON;
	var vnb;
	var x;
	var y;
	var click = require("./modules/mod_click.js");
	var resultat;

	query.c = Number(query.c);
	query.l = Number(query.l);

	repJSON = fs.readFileSync("./modules/grille_" + query.pseudo + ".json", "UTF-8");
	grille = JSON.parse(repJSON);
	resultat = click(grille, query.l, query.c);

	// faire les mods ici
	if (grille[query.l][query.c].b === true){
		//fin de la partie
	} else if (grille[query.l][query.c].d === true){
		grille[query.l][query.c].d = false;
	} else if (grille[query.l][query.c].show === false) {
		click(grille, query.l, query.c);
	}

	repJSON = JSON.stringify(grille);
	fs.writeFileSync("./modules/grille_" + query.pseudo + ".json", repJSON, "UTF-8");

	// AFFICHAGE DE LA PAGE DU JEU AVEC CHANGEMENT AU NIVEAU FACILE
	//repJSON= fs.readFileSync("./modules/grille_" + query.pseudo + ".json", "UTF-8");
	//grille = JSON.parse(repJSON);


	page = fs.readFileSync('./level_facile.html', 'utf-8');

	marqueur = {};
	marqueur.erreur = "";
	marqueur.pseudo = query.pseudo;
	marqueur.lagrille = "";
	for (x = 0;x < 8; x++) {
		for (y = 0; y < 8; y++) {
			if (grille[x][y].show === false) {
				marqueur.lagrille += "<a href='http://localhost:5000/req_jeufacile?bouton=facile&pseudo=" + query.pseudo + "&l=" + (x) + "&c=" + (y) + "'><img src='./images/carre.png'></a>\n";

			} else {

				if(grille[x][y].d === true) {
					marqueur.lagrille += "<a href='http://localhost:5000/req_jeufacile?bouton=facile&pseudo=" + query.pseudo + "&l=" + (x) + "&c=" + (y) + "'><img src='./images/flag.png'></a>\n";

				
				} else {
					marqueur.lagrille += "<img src='./images/vv" + grille[x][y].v + ".png'>\n";
				}
			}
		}
		marqueur.lagrille += "<br>\n";
	}

	page = page.supplant(marqueur);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;


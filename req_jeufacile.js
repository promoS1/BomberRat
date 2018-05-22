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

	repJSON = fs.readFileSync("./modules/grille_" + query.pseudo + ".json", "UTF-8");
	grille = JSON.parse(repJSON);
	// faire les mods ici
	if (grille[query.l][query.c].b === true){
		//fin de la partie
	} else if (grille[query.l][query.c].d === true){
		grille[query.l][query.c].d = false;
	} else if (grille[query.l][query.c].show === false) {
		grille[query.l][query.c].show = true;	
	}

	if(grille[query.l][query.c].show === true && grille[query.l][query.c].v === "0") {
		//montrer les cases autours
	}


	repJSON = JSON.stringify(grille);
	fs.writeFileSync("./modules/grille_" + query.pseudo + ".json", repJSON, "UTF-8");

	// AFFICHAGE DE LA PAGE DU JEU AVEC CHANGEMENT AU NIVEAU FACIKLE
	repJSON= fs.readFileSync("./modules/grille_" + query.pseudo + ".json", "UTF-8");
	grille = JSON.parse(repJSON);


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
					marqueur.lagrille += "<img src='./images/v" + grille[x][y].v + ".png'>";
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


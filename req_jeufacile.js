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
	var posi = require("./modules/mod_pos.js");
	var pos;
	var fun_aff = require("./modules/fun_aff.js");
	var lost;

		pos = posi(query);
	//	console.log(pos);
	//	console.log(pos.l);

		repJSON = fs.readFileSync("./modules/grille_" + query.pseudo + ".json", "UTF-8");
		grille = JSON.parse(repJSON);

	if (query.act === "disc") {
		lost = click(grille, pos.l, pos.c, 8);

	} else if (query.act === "flag") {
		if (grille.cells[pos.l][pos.c].d === true) {
			grille.cells[pos.l][pos.c].d = false;

		} else { 
			grille.cells[pos.l][pos.c].d = true;
			console.log("drapo");
		}

	}

	repJSON = JSON.stringify(grille);
	fs.writeFileSync("./modules/grille_" + query.pseudo + ".json", repJSON, "UTF-8");

	// AFFICHAGE DE LA PAGE DU JEU AVEC CHANGEMENT AU NIVEAU FACILE

	page = fs.readFileSync('./level_facile.html', 'utf-8');

	marqueur = fun_aff( query.pseudo, grille);
	marqueur.lose = "";
	if(lost === true){
		marqueur.lose = "Vous avez perdu!"
	}
	page = page.supplant(marqueur);
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;


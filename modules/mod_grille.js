//MODULE POUR LE PI GRILLE

"use strict";

var mod_grille = function(nb_lig, nb_col, bratio, pseudo) {
	var fs = require("fs");
	var grille;
	var repJSON;
	var l;
	var c;
	var p;
	var bratio; //ratio de bombe
	var bcompt;
	
	grille = {};
	grille.cells = [];
	bcompt = 0;
	for(l=0; l<nb_lig; l++) {
		grille.cells[l] = [];
		for(c=0; c<nb_col; c++) {
			grille.cells[l][c] = {"d": false, "show": false, "v" : 0};
			p = Math.floor(Math.random() * bratio);
			if(p === 0) {
				grille.cells[l][c].b = true;
				bcompt++;
			} else {
				grille.cells[l][c].b = false;
			}
		}
	}
	grille.nb_lig = nb_lig;
	grille.nb_col = nb_col;
	grille.nb_bomb = bcompt;
	repJSON = JSON.stringify(grille);
	fs.writeFileSync("./modules/grille_" + pseudo + ".json", repJSON, "UTF-8");

}

module.exports = mod_grille;

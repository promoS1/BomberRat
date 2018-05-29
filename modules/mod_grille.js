//MODULE POUR LE PI GRILLE

"use strict";

var mod_grille = function(nb_lig, nb_col, bratio) {
	var fs = require("fs");
	var grille;
	var repJSON;
	var l;
	var c;
	var p;
	var bratio; //ratio de bombe
	var bcompt;
	
	fs.writeFileSync("./modules"+ query.pseudo+ ".json",repJSON, "UTF-8");
	repJSON = fs.readFileSync("./modules/grille.json", "UTF-8");

	grille = JSON.parse(repJSON);
	bcompt = 0;
	for(l=0; l<nb_lig; l++) {
		grille[l] = [];
		for(c=0; c<nb_col; c++) {
			grille[l][c] = {"d": false, "show": false, "v" : 0};
			p = Math.floor(Math.random() * bratio);
			if(p === 0) {
				grille[l][c].b = true;
				bcompt++;
			} else {
				grille[l][c].b = false;
			}
		}
	}

	repJSON = JSON.stringify(grille);
	return bcompt;
}

module.exports = mod_grille;

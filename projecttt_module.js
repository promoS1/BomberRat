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

	repJSON = fs.readFileSync("grille_json.json" , "UTF-8");
	grille = JSON.parse(repJSON);
	for(l=0; l<nb_lig; l++) {
		grille[l] = [];
		for(c=0; c<nb_col; c++) {
			grille[l][c] = {"d": false, "show": false, "v" : 0};
			p = Math.floor(Math.random() * bratio);
			if(p === 0) {
				grille[l][c].b = true;
			} else {
				grille[l][c].b = false;
			}
		}
	}

	repJSON = JSON.stringify(grille);
	fs.writeFileSync("grille_json.json" , repJSON , "utf-8");
}

module.exports = mod_grille;

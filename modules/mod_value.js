//FONCTION POUR LE PI VALUE

"use strict";

var mod_value = function(nb_lig, nb_col, pseudo) {
	var fs = require("fs");
	var grille;
	var repJSON;
	var x;
	var y;
	var l;
	var c;

	repJSON = fs.readFileSync("./modules/grille_" + pseudo + ".json", "UTF-8");
	grille = JSON.parse(repJSON);


	for(l=0; l<nb_lig; l++) {
		for(c=0; c<nb_col; c++) {
			if (grille.cells[l][c].b === true) {
				for (x=-1;x<2;x++) {
					for (y=-1; y<2;y++) {
						if(x !== 0 || y !== 0) {
							if (l+x>=0 && l+x<nb_lig && c+y>=0 && c+y<nb_col) {
								grille.cells[l+x][c+y].v = grille.cells[l+x][c+y].v +1
							}
						}
					}
				}
			}
		}
	}
	repJSON = JSON.stringify(grille);
	fs.writeFileSync("./modules/grille_" + pseudo + ".json", repJSON, "UTF-8");
}

module.exports = mod_value;


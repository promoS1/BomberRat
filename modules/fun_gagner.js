"use strict";

//	gagner

var win = function(grille, size){	
	var compteur;
	var gg;
	var x;
	var y;
	var nb;

	gg = false;
	compteur = 0;

	for(x=0; x < size; x++) {
		for(y=0; y < size; y++) {
			if(grille.cells[x][y].b === false && grille.cells[x][y].show === true) {
				compteur++;
			}
		}
	}
	if(size * size - grille.nb_bomb === compteur) {
		gg = true;

		for(x=0; x < size; x++) {
			for(y=0; y < size; y++) {
				grille.cells[x][y].show = true;
				grille.cells[x][y].d = false;
			}
		}
	}
	console.log(gg);
	return(gg);
}
module.exports = win;

"use strict";

var l;
var c;
var grille;
var nb_lig;
var nb_col;
var prob;
var p;

nb_lig = 10;
nb_col = 10;
prob = 10;

grille = [];
for(l=0; l<nb_lig; l++) {
	grille[l] = [];
	for(c=0; c<nb_col; c++) {
		//console.log("on remplit la case de ligne " + l + "et de colonne " + c);
		grille[l][c] = {"d": false, "show": false};
		p = Math.floor(Math.random() * 10);
		if(p === 0) {
			grille[l][c].b = true;
		} else {
			grille[l][c].b = false;
		}
	}
}

console.log(grille);

for(l=0; l<nb_lig; l++) {
	for(c=0; c<nb_col; c++) {
		if(grille[l][c].b === true) {
			process.stdout.write("x ");
		} else {
			process.stdout.write(". ");
		}
	}
	console.log("");
}


// remplir la propriete "v"



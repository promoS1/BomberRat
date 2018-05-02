"use strict";

var l;
var c;
var grille;
var nb_lig;
var nb_col;
var prob;
var p;
var x;
var y;

nb_lig = 10;
nb_col = 10;
prob = 10;

grille = [];
for(l=0; l<nb_lig; l++) {
	grille[l] = [];
	for(c=0; c<nb_col; c++) {
		//console.log("on remplit la case de ligne " + l + "et de colonne " + c);
		grille[l][c] = {"d": false, "show": false, "v" : 0};
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

for(l=0; l<nb_lig; l++) {
	for(c=0; c<nb_col; c++) {
		if (grille[l][c].b === true) {
			for (x=-1;x<2;x++) {
				for (y=-1; y<2;y++) {
					if(x !== 0 || y !== 0) {
						if (l+x>=0 && l+x<nb_lig && c+y>=0 && c+y<nb_col) {
							grille[l+x][c+y].v = grille[l+x][c+y].v +1 
						}
					}
				}	
			}
			//	if (l-1 < -1 && l+1 <= nb_lig) {
			//		if ( c-1 < -1 && l+1 <= nb_col) {
		}
	}
}


console.log(grille)

for(l=0; l<nb_lig; l++) {
	for(c=0; c<nb_col; c++) {
		if (grille[l][c].b === true) {
			process.stdout.write("B ");
		} else {
			process.stdout.write(". ");
		}
	}
	console.log("");
}

console.log("");

for(l=0; l<nb_lig; l++) {
	for(c=0; c<nb_col; c++) {
		process.stdout.write(grille[l][c].v + " ");
	}
	console.log("");
}

console.log("");

for(l=0; l<nb_lig; l++) {
	for(c=0; c<nb_col; c++) {
		if (grille[l][c].b === true) {
			process.stdout.write("B ");
		} else {
			process.stdout.write(grille[l][c].v + " ");
		}
	}
	console.log("");
}

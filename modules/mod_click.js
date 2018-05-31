// FONCTION pour affichage des cases blanches

"use strict";

function click(grille, l, c) {
	const areValidCoordinates = l >= 0 && l <= 7 && c >= 0 && c <= 7;
	if (!areValidCoordinates) {return; }
	
	console.log("=====> " ,l, c);
	if (grille.cells[l][c].d === true){
		grille.cells[l][c].d = false;
	
	} else if (grille.cells[l][c].b === true){
		//fin de la partie
		console.log("hello");
		//afficher la page html de la défaite
	} else if (grille.cells[l][c].show === false) {
		grille.cells[l][c].show = true;

		if (typeof grille.cells[l][c].v !== "number") { throw new Error("value is not a number"); }
		
		// If cell value === 0
		else if (grille.cells[l][c].v === 0) {
			click(grille, l - 1, c - 1);
			click(grille, l - 1, c );
			click(grille, l - 1, c + 1);

			click(grille, l , c - 1);
			//click(grille, l , c); car case milieu
			click(grille, l , c + 1);

			click(grille, l +1 , c - 1);
			click(grille, l +1 , c );
			click(grille, l +1 , c + 1);

		}
	}
}

module.exports = click;

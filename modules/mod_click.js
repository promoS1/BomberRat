// FONCTION pour affichage des cases blanches

"use strict";

function click(grille, l, c, size) {
	var lost;
	var x;
	var y;

	const areValidCoordinates = l >= 0 && l <= (size - 1) && c >= 0 && c <= (size - 1);
	if (!areValidCoordinates) {return; }
	lost = false;
	
//	console.log("=====> " ,l, c);
	
	
	
// drapeaux

	if (grille.cells[l][c].d === true){
		grille.cells[l][c].d = false;

// perdre

	} else if (grille.cells[l][c].b === true){
		//fin de la partie
		lost = true;
		
		for(x=0; x < size; x++) {
			for(y=0; y < size; y++) {
				grille.cells[x][y].show = true;
				grille.cells[x][y].d = false;
			}
		}
		
		console.log("hello");
	
	// retourner une case

	} else if (grille.cells[l][c].show === false) {
		grille.cells[l][c].show = true;

		if (typeof grille.cells[l][c].v !== "number") { throw new Error("value is not a number"); }
		
		// If cell value === 0
		else if (grille.cells[l][c].v === 0) {
			console.log("===============0--------");
			click(grille, l - 1, c - 1, size);
			click(grille, l - 1, c, size );
			click(grille, l - 1, c + 1, size);

			click(grille, l , c - 1, size);
			//click(grille, l , c, size); car case milieu
			click(grille, l , c + 1, size);

			click(grille, l +1 , c - 1, size);
			click(grille, l +1 , c , size);
			click(grille, l +1 , c + 1, size);

		}
	}
	return(lost);
}

module.exports = click;

// FONCTION pour affichage des cases blanches

"use strict";
var fs = require("fs");
var repJSON;
var grille;
// var click;

//rep JSON = fs.readFileSync("./grille_" + query.pseudo + ".json", "UTF-8");
//grille = JSON. parse(repJSON);

function click(grille, l, c) {
	const areValidCoordinates = l >= 0 && l <= 7 && c >= 0 && c <= 7;
	if (!areValidCoordinates) {return; }
	if (grille[l][c].show === false) {
		grille[l][c].show = true;

		if (typeof grille[l][c].v !== "number") { throw new Error("value is not a number"); }

		// If cell value === 0
		if (grille[l][c].v === 0) {
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

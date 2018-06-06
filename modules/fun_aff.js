// fonction pour affichage du JSON

"use strict";

var fun_aff = function (pseudo, grille) {

	var marqueur;
	var x;
	var y;

	marqueur = {};
	marqueur.erreur = "";
	marqueur.pseudo = pseudo;
	marqueur.lagrille = "";
	for (x = 0;x < 8; x++) {
		for (y = 0; y < 8; y++) {
			if(grille.cells[x][y].d === true) {
				marqueur.lagrille += "<input type='image' src='./images/flag.png' name= 'case." + x + "." + y + "' >\n";
				} else if (grille.cells[x][y].show === false) {
					marqueur.lagrille += "<input type='image' src='./images/carre.png' name= 'case." + x + "." + y + "' >\n";

				} else {

					//if(grille.cells[x][y].d === true) {
					//	marqueur.lagrille += "<input type='image' src='./images/flag.png' name= 'case." + x + "." + y + "' >\n";

					//} else {
					marqueur.lagrille += "<img src='./images/vv" + grille.cells[x][y].v + ".png'>\n";
					//}
				}
			}
			marqueur.lagrille += "<br>\n";
		}

		return(marqueur);
	}

	module.exports = fun_aff; 

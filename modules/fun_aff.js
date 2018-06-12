// fonction pour affichage du JSON

"use strict";

var fun_aff = function (pseudo, grille,size) {

	var marqueur;
	var x;
	var y;

	marqueur = {};
	marqueur.erreur = "";
	marqueur.pseudo = pseudo;
	marqueur.lagrille = "";
	for (x = 0;x < size; x++) {
		for (y = 0; y < size; y++) {
			if(grille.cells[x][y].d === true) {
				marqueur.lagrille += "<input type='image' src='./images/flag.png' name= 'case." + x + "." + y + "' >\n";
			} else if (grille.cells[x][y].show === false) {
				marqueur.lagrille += "<input type='image' src='./images/carre.png' name= 'case." + x + "." + y + "' >\n";
				
			} else if (grille.cells[x][y].b === true) {
				marqueur.lagrille += "<img src='./images/bombe2.png'>\n";

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

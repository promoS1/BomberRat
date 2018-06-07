// fonction pour afficher le nb de b restantei

var fun_cptb = function(grille, size) {
	var x;
	var y;
	var nbi;
	var nbb;
	
	nbb = 0;
	nbi = grille.nb_bomb;
	for(x = 0; x < size; x++) {
		for(y = 0; y < size; y++) {
			if (grille.cells[x][y].d === true) {
				nbb++
			}
		}
	}
nbb = nbi - nbb;
return(nbb)
}
module.exports = fun_cptb;

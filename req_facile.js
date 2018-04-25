"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;

	// AFFICHAGE NIVEAU FACILE
	page = fs.readFileSync('level_facile.html', 'utf-8');
	marqueurs = {};
//FOR MARQUEURS
//marqueurs.lanu = "bigzeolkz";
	//for(x=0;x<10;x++) { 
	//  for(y=0;y<10;y++) {
	//      process.stdout.write("# ");
	//  }           
	//  console.log(" ");
	//}
	marqueurs.erreur = "";
	marqueurs.pseudo = "";
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;

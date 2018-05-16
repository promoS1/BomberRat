"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueur;
	var page;

	// AFFICHAGE NIVEAU FACILE
	page = fs.readFileSync('level_facile.html', 'utf-8');
	marqueur = {};
	marqueur.pseudo = query.pseudo;
	page = page.supplant(marqueur);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;

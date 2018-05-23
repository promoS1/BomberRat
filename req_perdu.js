"use strict";

var fs = require("fs");
require('remedial');

var trait= function (req, res, query) {

	var page; 

	// AFFICHAGE DE LA PAGE DE DEFAITE

	page = fs.readFileSync('perdu.html', 'utf-8');

	marqueurs = {};
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//------------------------------------------------------------------------

module.exports = trait;

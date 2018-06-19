
"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {
	var fs = require("fs");
	var membresjson;
	var membres;
	var leadclass = require("./modules/fun_leadclass.js");
	var page;
	var marqueur;
	var board;
	var x;
	
	membresjson = fs.readFileSync("./membres.json");
	membres = JSON.parse(membresjson);

	board = [];

	for (x=0; x< membres.length; x++) {
		board[x] = {};
		board[x].pseudo = membres[x].pseudo;
		board[x].victoire = membres[x].v;
		board[x].defaite = membres[x].d;
	}
	board.sort(function (a, b) {
		return b.victoire - a.victoire;
	});

	// AFFICHAGE DU LEADERBOARD
	marqueur = {};
	marqueur.leaderboard = "";
	page = fs.readFileSync("./lead.html","UTF-8");
	marqueur.pseudo = query.pseudo;
	for(x = 0; x<10;x++) {
		if(x < membres.length){
			marqueur.leaderboard += (x+1) + "er = " + board[x].pseudo + " avec " + board[x].victoire + " victoires </br> ";
		}
	}
	page = page.supplant(marqueur);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();

};
//--------------------------------------------------------------------------

module.exports = trait;



// fonction pour le leaderboard

"use strict";
var x;
var fun_leadclass = function(){
	var membres;
	var membresjson;
	var fs = require("fs");
	var x;
	var y;
	var board;

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
		return a.victoire - b.victoire;
	});
	return(board);
}

module.exports = fun_leadclass;


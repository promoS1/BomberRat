// ACTIONS SUR LA GRILLE FACILE

"use strict";

// DECLARATION DES VARIABLES

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueur;
	var page;
	var grille;
	var fs = require("fs");
	var repJSON;
	var vnb;
	var x;
	var y;
	var click = require("./modules/mod_click.js");
	var posi = require("./modules/mod_pos.js");
	var pos;
	var fun_aff = require("./modules/fun_aff.js");
	var lost;
	var fun_cptb = require("./modules/fun_cptb.js");
	var win = require("./modules/fun_gagner.js");	
	var winner;	
	var leader = require("./modules/fun_leader.js");

	pos = posi(query);
	
	// LECTURE DES FICHIERS

	repJSON = fs.readFileSync("./modules/grille_" + query.pseudo + ".json", "UTF-8");
	grille = JSON.parse(repJSON);

	// MODE ACTION DECOUVERTE/DRAPEAU

	if (query.act === "disc") {
		lost = click(grille, pos.l, pos.c, 6);

	} else if (query.act === "flag") {
		if (grille.cells[pos.l][pos.c].d === true) {
			grille.cells[pos.l][pos.c].d = false;

		} else { 
			grille.cells[pos.l][pos.c].d = true;
		}

	}
	
	// ECRITURE DANS LES FICHIERS

	repJSON = JSON.stringify(grille);
	fs.writeFileSync("./modules/grille_" + query.pseudo + ".json", repJSON, "UTF-8");

	winner = win(grille, 6);

	// AFFICHAGE DE LA PAGE DU JEU AVEC CHANGEMENT AU NIVEAU FACILE

	page = fs.readFileSync('./level_facile.html', 'utf-8');

	marqueur = fun_aff( query.pseudo, grille, 6);
	marqueur.lose = "";
  
  	leader(winner,lost,query.pseudo);

	if(lost === true){
		marqueur.lose = "Vous avez perdu ! <br/> <a href='http://localhost:5000/req_facile?pseudo=" + query.pseudo + "&boutons='> Rejouer?</a> <img src='./images/art_mouse.png'>";
	}

	marqueur.win = "";
	if(lost === false){
		if(winner === true){
			marqueur.win = "Vous avez survécu ! <br/> <a href='http://localhost:5000/req_facile?pseudo=" + query.pseudo + "&boutons='>Rejouer?</a> <img src='./images/art_mouse.png'>";
		}
	}
	
	marqueur.cptb = fun_cptb(grille, 6);
	page = page.supplant(marqueur);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;

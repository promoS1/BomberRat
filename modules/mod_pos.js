// fonction pour récupérer l et c de l'img choisie

"use strict"

mod_pos = function (query) {
	var listeProp;
	var position;
	var pos;

	listeProp = Object.getOwnPropertyNames(requete.query);
	
	position = listeProp.find(function(element) {
		return element.match(/case.*/);
	});
	
	position = position.split (".");
	pos = {};
	pos.l = position[1];
	pos.c = position[2];

	return pos;
	
}

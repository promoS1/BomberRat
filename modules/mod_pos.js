// fonction pour récupérer l et c de l'img choisie

"use strict"

var mod_pos = function (query) {
	var listeProp;
	var position;
	var pos;

	listeProp = Object.getOwnPropertyNames(query);
	
	position = listeProp.find(function(element) {
		return element.match(/case.*/);
	});
	
	position = position.split (".");
	pos = {};
	pos.l = Number(position[1]);
	pos.c = Number(position[2]);

	return pos;
	
}

module.exports = mod_pos;

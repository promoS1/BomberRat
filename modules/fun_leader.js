
// fonction pour le leaderboard

"use strict";

var fun_leader = function (winner, lost, pseudo) {
	var membres;
	var membresjson;
	var fs = require("fs");
	var trouve;
	var i;

	membresjson = fs.readFileSync("./membres.json");
	membres = JSON.parse(membresjson);

	i = 0;
	trouve=false;
	while (i < membres.length && trouve === false) {
		if ( pseudo === membres[i].pseudo){
			console.log(winner);
			console.log(lost);

			if(lost === false) {	
				if(winner === true) {
					membres[i].v = membres[i].v + 1;
				}
			}
			if(lost === true) {
				membres[i].d = membres[i].d + 1;
			}
			trouve = true;
		}
		i++;
	}

	membresjson = JSON.stringify(membres);
	fs.writeFileSync("./membres.json", membresjson,"UTF-8");
}
module.exports = fun_leader; 

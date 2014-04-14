
window.addEventListener("load",init);


function init(){
	if (!game) {
		var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameContainer');
		game.state.add('classicMode' , WD_game);
		game.state.start('classicMode');
	};
}



var WD_game = function (game) {	}
WD_game.prototype = {

	preload : function(game) {
		game.load.image('tache_ordinateur', 'Projet/Sources/assets/turret-1-cannon.gif');
		game.load.image('tache_dossier', 'Projet/Sources/assets/turret-2-cannon.gif');
		game.load.image('tache_telephone', 'Projet/Sources/assets/turret-6-cannon.gif');
		//game.load.spritesheet('effect_dot', 'Projet/Sources/assets/effect_dot.png',40,40);
	},

	//__________________________________________CREATE____________________________________________________________________________________

	create : function (game) {

		// ################################### CONFIG ########################################
		game.config = httpGetData('Projet/Sources/config/config.json');
		game.taches = [];
		
		game.time.events.loop(1000, popTache, this, game);



  		//game.style = {font: "bold 15pt Arial", fill: "#ffffff", align: "center", stroke: "#258acc", strokeThickness: 3};
		//game.hud.life =  game.add.text(10, 10, "Life: "+ game.player.health, game.style);
	},

	//__________________________________________UPDATE____________________________________________________________________________________

	update : function (game) {

		for (var i = game.taches.length - 1; i >= 0; i--) {
			game.taches[i].update(game)
		};

	},







	//__________________________________________RENDER____________________________________________________________________________________

	render: function  (game) { 

	}

}


//__________________________________________MISC____________________________________________________________________________________


/*
	plus tard on fera que ca pop un tache aléatoirement
*/
function popTache (game) {
	var tacheAvaible = Object.keys(game.config.taches);
	var tache = tacheAvaible[(Math.random()*tacheAvaible.length)|0];
	var possiblePosition = [[50,550],[50,600],[50,650]]
	var pos = possiblePosition[(Math.random()*possiblePosition.length)|0];
	game.taches.push(new Tache(game,pos,tache));
}


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
		game.load.image('enemy_normal', 'Projet/Sources/assets/turret-2-cannon.gif');
		game.load.spritesheet('effect_dot', 'Projet/Sources/assets/effect_dot.png',40,40);
	},

	//__________________________________________CREATE____________________________________________________________________________________

	create : function (game) {

		// ################################### CONFIG ########################################
		game.config = httpGetData('Projet/Sources/config/config.json');
		

  		//game.style = {font: "bold 15pt Arial", fill: "#ffffff", align: "center", stroke: "#258acc", strokeThickness: 3};
		//game.hud.life =  game.add.text(10, 10, "Life: "+ game.player.health, game.style);
	},

	//__________________________________________UPDATE____________________________________________________________________________________

	update : function (game) {

	
	},







	//__________________________________________RENDER____________________________________________________________________________________

	render: function  (game) { 

	}

}


//__________________________________________MISC____________________________________________________________________________________



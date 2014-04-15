window.addEventListener("load",init);


function init(){
	if (!game) {
		var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameContainer');
		game.state.add('debut' , WD_begin);
		game.state.add('charger' , WD_load);
		game.state.add('menu' , WD_menu);
		game.state.add('jeu' , WD_game);
		game.state.add('fin' , WD_end);
		game.state.start('debut');
	};
}


var WD_game = function (game) {	}
WD_game.prototype = {

	preload : function(game) {

	},

	//__________________________________________CREATE____________________________________________________________________________________

	create : function (game) {

		// ################################### CONFIG ########################################
		game.config = httpGetData('Projet/Sources/config/config.json');
		game.taches = [];
		game.employees = [];

		game.time.events.loop(1000, popTache, this, game);

		nbEmployees = Object.keys(game.config.employees);
			
		game.employees.push(new Employee(game,[100,61],nbEmployees[2], "red"));
		game.employees.push(new Employee(game,[game.employees[0].sprite.width+70,50],nbEmployees[1], "blue"));
		game.employees.push(new Employee(game,[game.employees[0].sprite.width+game.employees[1].sprite.width+65,54],nbEmployees[0], "yellow"));

  		game.employees[1].sprite.bringToTop();
  		//game.style = {font: "bold 15pt Arial", fill: "#ffffff", align: "center", stroke: "#258acc", strokeThickness: 3};
		//game.hud.life =  game.add.text(10, 10, "Life: "+ game.player.health, game.style);

		line1 = new Phaser.Line(50, 550, 1000, 550);
	    line2 = new Phaser.Line(50, 600, 1000, 600);
	    line3 = new Phaser.Line(50, 650, 1000, 650);
	    line4 = new Phaser.Line(50, 700, 1000, 700);
	},

	//__________________________________________UPDATE____________________________________________________________________________________

	update : function (game) {
		for (var i = game.taches.length - 1; i >= 0; i--) {
			game.taches[i].update(game)
		};
		for (var i = game.employees.length - 1; i >= 0; i--) {
			game.employees[i].update(game)
		};
	
	},

	//__________________________________________RENDER____________________________________________________________________________________

	render: function  (game) { 
		game.debug.geom(line1);
		game.debug.geom(line2);
		game.debug.geom(line3);
		game.debug.geom(line4);

		showJauges(game)
	}

}
//__________________________________________MISC____________________________________________________________________________________


/*
	plus tard on fera que ca pop un tache aléatoirement
*/
function popTache (game) {
	this.tacheAvaible = this.tacheAvaible || Object.keys(game.config.taches)
	this.possiblePosition = this.possiblePosition || [[50,550],[50,600],[50,650],[50,700]];
	var rand = (Math.random()*this.tacheAvaible.length)|0;
	var tache = this.tacheAvaible[rand];
	var pos = this.possiblePosition[rand];
	game.taches.push(new Tache(game,pos,tache,"red"));
}

function showJauges (game) {
	var j = 0
	var i = 0
	for(employee in game.config.employees)
	{
		for (caract in game.config.employees[employee]) {
			game.context.fillStyle = '#F22'
			game.context.fillRect(150+j*350,475+i*20,game.config.maxCaract*2,5);
			game.context.fillStyle = '#2F2'
			game.context.fillRect(150+j*350,475+i*20, game.config.employees[employee][caract]*2,5)
			i++
		};
		j++;
		i = 0;
	}	
}

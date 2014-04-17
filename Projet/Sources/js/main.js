window.addEventListener("load",init);


function init(){
	if (!game) {
		var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameContainer');
		game.state.add('debut' , WD_begin);
		game.state.add('charger' , WD_load);
		game.state.add('menu' , WD_menu);
		// game.state.add('tuto' , WD_tuto);
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

		game.add.sprite(0, 0, "arriere_plan");

		game.Theme1 = game.add.audio('m1');
		game.Theme2 = game.add.audio('m2');
		game.Theme3 = game.add.audio('m3');
		game.Theme4 = game.add.audio('m4');
		game.clavier = game.add.audio('m5');
		game.cafe = game.add.audio('m6');
		game.pillule = game.add.audio('m7');
		game.baillementF = game.add.audio('m8');
		game.baillementM = game.add.audio('m9');
		
		game.mainTheme = game.Theme1;
		game.mainTheme.play('', 0, 1, true);

		game.add.sprite(30, 520, "rail_power_up");
		game.add.sprite(30, 570, "rail_concentration");
		game.add.sprite(30, 620, "rail_sommeil");
		game.add.sprite(30, 670, "rail_stress");

		game.add.sprite(50, 10, "jauge_boss_production");
		game.add.sprite(50, 30, "jauge_boss_stress");

		game.add.sprite(1185, 200, "horloge").anchor.setTo(0.5, 0.5);
		game.petiteAiguille = game.add.sprite(1185, 200, "horloge_petite_aiguille");
		game.petiteAiguille.anchor.setTo(0.5, 0.5);

		game.grandeAiguille = game.add.sprite(1185, 200, "horloge_grande_aiguille");
		game.grandeAiguille.anchor.setTo(0.5, 0.5);

		game.add.sprite(1105, 300, "calendrier");
		game.add.sprite(1113, 320, "croix");

		game.boutonSound = game.add.button(1205, 560, 'son_on', cutSound, this, 0, 1, 1);
		game.boutonSound.anchor.setTo(0.5, 0.5);
		game.boutonReset = game.add.button(1205, 620, 'reset', resetGame, this, 2, 0, 1);
		game.boutonReset.anchor.setTo(0.5, 0.5);
		game.boutonReset.scale.setTo(0.8,0.8);
		game.boutonSortie = game.add.button(1205, 680, 'sortie', goMenu, this, 2, 0, 1);
		game.boutonSortie.anchor.setTo(0.5, 0.5);
		game.boutonSortie.scale.setTo(0.8,0.8);

		// ################################### CONFIG ########################################
		game.config = httpGetData('Projet/Sources/config/config.json');
		game.taches = [];
		game.bonus = [];
		game.employees = [];
		game.devJauge = 0;
		game.tachesDone = 0;

		game.time.events.loop(2000, popTache, this, game);
		game.time.events.loop(7500, popBonus, this, game);
		game.time.events.loop(1000, reduceCaract, this, game);
		game.time.events.loop(100, addSec, this, game);
		game.time.events.loop(10, addMin, this, game);


		nbEmployees = Object.keys(game.config.employees);
		nbColors = ["yellow","blue","red"];

		for (var i = 3 - 1; i >= 0; i--) {
			game.employees.push(new Employee(game,[20,75],nbEmployees[i], nbColors[i]));

			// game.add.sprite(130+i*320, 472, "picto_concentration");
			// game.add.sprite(130+i*320, 488, "picto_sommeil");
			// game.add.sprite(130+i*320, 502, "picto_stress");
		};
		for (var i = game.employees.length - 1; i >= 0; i--) {
			game.employees[i].sprite.x += i*(game.employees[i].sprite.width-27);
		};
  		game.employees[1].sprite.bringToTop();
  		//game.style = {font: "bold 15pt Arial", fill: "#ffffff", align: "center", stroke: "#258acc", strokeThickness: 3};
		//game.hud.life =  game.add.text(10, 10, "Life: "+ game.player.health, game.style);
	},

	//__________________________________________UPDATE____________________________________________________________________________________

	update : function (game) {

		game.devJauge = game.tachesDone * game.config.valeurTache;
		if (game.devJauge > game.config.maxDevJauge)
			game.devJauge = game.config.maxDevJauge;

		for (var i = game.employees.length - 1; i >= 0; i--) {
			for(caract in game.config.employees.trainee){
				if (game.employees[i][caract] < 0) 
					game.employees[i][caract] = 0;
			}
		};

		for (var i = game.taches.length - 1; i >= 0; i--) {
			game.taches[i].update(game)
		};
		for (var i = game.employees.length - 1; i >= 0; i--) {
			game.employees[i].update(game)
		};

		if(this.retour){
			this.retour = 0;
			game.mainTheme.stop();
			game.state.start('menu');
		}

		if(this.ecoute && game.mainTheme.isPlaying){
			game.mainTheme.pause();
		}
		else if(!this.ecoute && !game.mainTheme.isPlaying){
			game.mainTheme.play();
		}

		game.totalStress=0;
		for (caract in game.config.employees.secretary) {
			for (var i = game.employees.length - 1; i >= 0; i--) {
				game.totalStress += game.employees[i][caract];
			};
		}
		if(game.totalStress < 300){
			game.mainTheme.onLoop.add(function (){
				if(!game.zip){
					game.mainTheme.stop();
					game.mainTheme = game.Theme1;
					game.mainTheme.play('',0,1,true);
					game.zip = true;
					game.zup = game.zap = game.zop = false;
				}
			});
		}
		else if(game.totalStress >= 300 && game.totalStress < 500){
			game.mainTheme.onLoop.add(function (){
				if(!game.zup){
					game.mainTheme.stop();
					game.mainTheme = game.Theme2;
					game.mainTheme.play('',0,1,true);
					game.zup = true;
					game.zip = game.zap = game.zop = false;
				}
			});
		}
		else if(game.totalStress >= 500 && game.totalStress < 600){
			game.mainTheme.onLoop.add(function (){
				if(!game.zap){
					game.mainTheme.stop();
					game.mainTheme = game.Theme3;
					game.mainTheme.play('',0,1,true);
					game.zap = true;
					game.zip = game.zup = game.zop = false;
				}
			});
		}
		else if(game.totalStress >= 600){
			game.mainTheme.onLoop.add(function (){
				if(!game.zop){
					game.mainTheme.stop();
					game.mainTheme = game.Theme4;
					game.mainTheme.play('',0,1,true);
					game.zop = true;
					game.zip = game.zup = game.zap = false;
				}
			});
		}
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
	this.tacheAvaible = this.tacheAvaible || Object.keys(game.config.taches);
	this.possiblePosition = this.possiblePosition || [[50,590],[50,640],[50,690]];
	this.colors = this.colors || ["red","blue","yellow"];
	var color = this.colors[(Math.random()*3)|0]
	var rand = (Math.random()*this.tacheAvaible.length)|0;
	var tache = this.tacheAvaible[rand];
	var pos = this.possiblePosition[rand];
	game.taches.push(new Tache(game,pos,tache,color));
}

function popBonus (game) {
	this.bonusAvaible = this.bonusAvaible || Object.keys(game.config.bonus)
	this.rail = this.rail || [50,540];
	var rand = (Math.random()*this.bonusAvaible.length)|0;
	var bonus = this.bonusAvaible[rand];
	var pos = this.rail;
	game.taches.push(new Bonus(game,pos,bonus));
}

function reduceCaract (game) {	
	for (var i = game.employees.length - 1; i >= 0; i--) {
		for(caract in game.config.employees.trainee){
			game.employees[i][caract]--;
			if (game.employees[i][caract] < 0) 
				game.employees[i][caract] = 0;
		}
	};
}

function goMenu(game){
	this.retour = 1;
}

function cutSound(game){
	if (this.ecoute) {;
		this.muted = 0;
		game.boutonSound = this.add.button(1205, 560, 'son_on', cutSound, this, 0, 1, 1);
		game.boutonSound.anchor.setTo(0.5, 0.5);
		console.log("SON", this.muted);
	}
	else{
		this.muted = 1;
		game.boutonSound = this.add.button(1205, 560, 'son_off', cutSound, this, 0, 1, 1);
		game.boutonSound.anchor.setTo(0.5, 0.5);
		console.log("MUTE", this.muted);
	}
	this.ecoute = !this.ecoute;
}

function resetGame(game){
	this.restart = 1;
}

function addSec (game) {
	game.petiteAiguille.rotation += (Math.PI*0.01) + game.totalStress / 1800;
}

function addMin (game) {
	game.grandeAiguille.rotation += (Math.PI*0.01) + game.totalStress / 1800;
}

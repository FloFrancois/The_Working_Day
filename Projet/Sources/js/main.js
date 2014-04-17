window.addEventListener("load",init);


function init(){
	// if (!game) {
	// 	var 
		game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameContainer');
		game.state.add('debut' , WD_begin);
		game.state.add('charger' , WD_load);
		game.state.add('menu' , WD_menu);
		// game.state.add('option' , WD_option);
		game.state.add('jeu' , WD_game);
		game.state.add('fin' , WD_end);
		game.state.start('debut');
	// };
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
		game.add.sprite(0,0,"arriere_plan_bureau").scale.setTo(0.970,1);
		game.add.sprite(10, 520, "rail_power_up");
		game.add.sprite(10, 570, "rail_concentration");
		game.add.sprite(10, 620, "rail_sommeil");
		game.add.sprite(10, 670, "rail_stress");

		game.add.sprite(50,10,"conteneur_boss_production");
		game.add.sprite(50,40,"conteneur_boss_stress");
		game.jaugeBossProd = game.add.sprite(50, 10, "jauge_boss_production");
		game.jaugeBossStress = game.add.sprite(50, 40, "jauge_boss_stress");

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
		game.time.events.loop(100, reduceCaract, this, game);
		game.time.events.loop(100, addSec, this, game);
		game.time.events.loop(10, addMin, this, game);


		nbEmployees = Object.keys(game.config.employees);
		nbColors = ["yellow","blue","red"];

		for (var i = 3 - 1; i >= 0; i--) {
			game.employees.push(new Employee(game,[-18,45],nbEmployees[i], nbColors[i]));
		};
		for (var i = game.employees.length - 1; i >= 0; i--) {
			game.employees[i].sprite.x += i*(game.employees[i].sprite.width-27);
		};
  		game.employees[1].sprite.bringToTop();
		game.employees[1].persoSprite.bringToTop();
		game.employees[1].frontSprite.bringToTop();
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

		game.totalStress=0;
		for (caract in game.config.employees.secretary) {
			for (var i = game.employees.length - 1; i >= 0; i--) {
				game.totalStress += game.employees[i][caract];
			};
		}
		game.jaugeBossProd.scale.x = game.devJauge/game.config.maxDevJauge;
		game.jaugeBossStress.scale.x = game.totalStress/700;
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
		else if(game.totalStress >= 600 && game.totalStress < 700){
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
		else if(game.totalStress >= 700 && !game.gameOverSprite){
			game.gameOverSprite = game.add.sprite(0,0,'gameOver')
			game.gameOverSprite.alpha = 0;
			game.gameOverSprite.bringToTop();
			game.add.tween(game.gameOverSprite).to({alpha:1},3000,null,true).onComplete.add(function(){gameOver = true})
			game.dying = true;
		}
		if (typeof gameOver !== "undefined") {
			game.dying = false;
			game.mainTheme.stop();
			game.state.start('fin');
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
	if (!game.dying) {
		this.tacheAvaible = this.tacheAvaible || Object.keys(game.config.taches);
		this.possiblePosition = this.possiblePosition || [[50,590],[50,640],[50,690]];
		this.colors = this.colors || ["red","blue","yellow"];
		var color = this.colors[(Math.random()*3)|0]
		var rand = (Math.random()*this.tacheAvaible.length)|0;
		var tache = this.tacheAvaible[rand];
		var pos = this.possiblePosition[rand];
		game.taches.push(new Tache(game,pos,tache,color));
	}
}

function popBonus (game) {
	if (!game.dying) {
		this.bonusAvaible = this.bonusAvaible || Object.keys(game.config.bonus)
		this.rail = this.rail || [50,540];
		var rand = (Math.random()*this.bonusAvaible.length)|0;
		var bonus = this.bonusAvaible[rand];
		var pos = this.rail;
		game.taches.push(new Bonus(game,pos,bonus));
	};
}


function reduceCaract (game) {	
	for (var i = game.employees.length - 1; i >= 0; i--) {
		for(caract in game.config.employees.trainee){
			game.employees[i][caract]-=0.1;
			if (game.employees[i][caract] < 0) 
				game.employees[i][caract] = 0;
		}
	};
}

function goMenu(game){
	this.retour = 1;
}

function cutSound(game){
	if (this.ecoute) {
		game.boutonSound = this.add.button(1205, 560, 'son_on', cutSound, this, 0, 1, 1);
		game.boutonSound.anchor.setTo(0.5, 0.5);
	}
	else{
		game.boutonSound = this.add.button(1205, 560, 'son_off', cutSound, this, 0, 1, 1);
		game.boutonSound.anchor.setTo(0.5, 0.5);
	}
	this.ecoute = !this.ecoute;
}

function resetGame(game){
	this.restart = 1;
}

function addSec (game) {
	game.petiteAiguille.rotation += Math.PI*0.001 +Math.PI*(0.1 * (game.totalStress / 900));
}

function addMin (game) {
	game.grandeAiguille.rotation += Math.PI*(0.1 * (game.totalStress / 900));
}

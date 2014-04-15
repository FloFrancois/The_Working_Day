var WD_begin = function (game) { }
WD_begin.prototype = {

	preload : function(game) {
		game.stage.backgroundColor = '#222';

		game.load.image('arriere_plan', 'Projet/Sources/assets/Fond.png');

		game.load.image('calendrier', 'Projet/Sources/assets/calendrier.png');
		game.load.image('croix', 'Projet/Sources/assets/calendrier_croix.png');

		game.load.image('horloge', 'Projet/Sources/assets/horlorge.png');
		game.load.image('horloge_grande', 'Projet/Sources/assets/horlorge__aiguille_grande.png');
		game.load.image('horloge_petite', 'Projet/Sources/assets/horlorge__aiguille_petite.png');

		game.load.image('rail_power_up', 'Projet/Sources/assets/rail_power_up.png');
		game.load.image('rail_concentration', 'Projet/Sources/assets/rail_concentration.png');
		game.load.image('rail_sommeil', 'Projet/Sources/assets/rail_sommeil.png');
		game.load.image('rail_stress', 'Projet/Sources/assets/rail_stress.png');

		game.load.image('tache_ordinateur_red', 'Projet/Sources/assets/concentration_rouge.png');
		game.load.image('tache_ordinateur_blue', 'Projet/Sources/assets/concentration_bleu.png');
		game.load.image('tache_ordinateur_yellow', 'Projet/Sources/assets/concentration_jaune.png');

		game.load.image('tache_dossier_red', 'Projet/Sources/assets/sommeil_rouge.png');
		game.load.image('tache_dossier_blue', 'Projet/Sources/assets/sommeil_bleu.png');
		game.load.image('tache_dossier_yellow', 'Projet/Sources/assets/sommeil_jaune.png');

		game.load.image('tache_telephone_red', 'Projet/Sources/assets/stress_rouge.png');
		game.load.image('tache_telephone_blue', 'Projet/Sources/assets/stress_bleu.png');
		game.load.image('tache_telephone_yellow', 'Projet/Sources/assets/stress_jaune.png');
		
		game.load.image('bonus_cafe', 'Projet/Sources/assets/sommeil_power_up.png');
		game.load.image('bonus_clope', 'Projet/Sources/assets/stress_power_up.png');
		game.load.image('bonus_pillule', 'Projet/Sources/assets/concentration_power_up.png');
				
		game.load.image('employee_trainee', 'Projet/Sources/assets/employee_trainee.png');
		game.load.image('employee_secretary', 'Projet/Sources/assets/employee_secretary.png');
		game.load.image('employee_sedentary', 'Projet/Sources/assets/employee_sedentary.png');

		game.load.spritesheet('option', 'Projet/Sources/assets/option_button.png',70,70);
		game.load.spritesheet('reset', 'Projet/Sources/assets/reset_button.png',70,70);
		game.load.spritesheet('sortie', 'Projet/Sources/assets/sortie_button.png',70,70);
	},

	//__________________________________________CREATE____________________________________________________________________________________

	create : function (game) {
		game.state.start('charger');
	}
}

var WD_load = function (game) {}
WD_load.prototype = {

	preload : function(game) {
		var w = 1280;
		var h = 720;
		label1 = game.add.text(Math.floor(w/2), Math.floor(h/2)-20, 'The Working Day',
			{ font: '30px Arial', fill: '#fff' });
		label2 = game.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)+20+0.5, 'loading...',
			{ font: '16px Arial', fill: '#fff' });
		label1.anchor.setTo(0.5, 0.5);
		label2.anchor.setTo(0.5, 0.5);
	},

	//__________________________________________CREATE____________________________________________________________________________________

	create : function (game) {
  		setTimeout(function () {
			game.state.start('menu');
		},100);
	}
}

var WD_menu = function (game) {}
WD_menu.prototype = {

	create: function (game){
		var w = 1280;
		var h = 720;
		label1 = game.add.text(Math.floor(w/2), Math.floor(h/2)-200, 'The Working Day',
			{ font: '80px Arial', fill: '#fff' });
		label2 = game.add.text(Math.floor(w/2)-200, Math.floor(h/2)+120+0.5, 'Jouer',
			{ font: '16px Arial', fill: '#fff' });
		label3 = game.add.text(Math.floor(w/2)+200, Math.floor(h/2)+120+0.5, 'Credits',
			{ font: '16px Arial', fill: '#fff' });
		label1.anchor.setTo(0.5, 0.5);
		label2.anchor.setTo(0.5, 0.5);
		label3.anchor.setTo(0.5, 0.5);

		this.boutonJouer = this.add.button(this.world.width / 2 - 200, this.world.height / 2 + 200,
			'sortie', this.startGame, this, 2, 0, 1);
		this.boutonJouer.anchor.setTo(0.5, 0.5);

		this.boutonCredits = this.add.button(this.world.width / 2 + 200, this.world.height / 2 + 200,
			'option', this.goCredits, this, 2, 0, 1);
		this.boutonCredits.anchor.setTo(0.5, 0.5);
	},
	update: function(game){
		if(this.ouvert){
			game.state.start('jeu');
		}
		if(this.merci){
			game.state.start('fin');
		}
	},

	startGame: function(game){
		this.ouvert = 1;
	},

	goCredits: function(game){
		this.merci = 1;
	}
}

var WD_end = function (game) {}
WD_end.prototype = {

	create : function(game) {
		var w = 1280;
		var h = 720;
		label1 = game.add.text(Math.floor(w/2), Math.floor(h/2)+0.5, 'The End',
			{ font: '16px Arial', fill: '#fff' });
		label1.anchor.setTo(0.5, 0.5);

		this.boutonJouer = this.add.button(this.world.width / 2, this.world.height / 2 + 50,
			'sortie', this.goMenu, this, 2, 0, 1);
		this.boutonJouer.anchor.setTo(0.5, 0.5);
	},

	update: function(game){
		if(this.retour){
			game.state.start('menu');
		}
	},

	goMenu: function(game){
		this.retour = 1;
	}
}
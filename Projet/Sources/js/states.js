var WD_begin = function (game) { }
WD_begin.prototype = {

	preload : function(game) {
		game.stage.backgroundColor = '#222';
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

		game.load.image('button', 'Projet/Sources/assets/turret-3-cannon.gif');
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
		this.boutonJouer = this.add.button(this.world.width / 2, this.world.height / 2 + 200,
			'button', this.startGame, this, 0, 1, 2);
		this.boutonJouer.anchor.setTo(0.5, 0.5);
	},
	update: function(game){
		if(this.salopard){
			game.state.start('jeu');
		}	
	},

	startGame: function(game){
		this.salopard = 1;
	}
}

var WD_end = function (game) {}
WD_end.prototype = {

	preload : function(game) {
		
	},

	create : function (game) {
		game.state.start('menu');
	}
}
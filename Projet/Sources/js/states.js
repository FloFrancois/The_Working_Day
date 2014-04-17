var WD_begin = function (game) { }
WD_begin.prototype = {

	preload : function(game) {
		game.stage.backgroundColor = '#222';

		game.load.audio('m1', [ 'Projet/Sources/sounds/musique.ogg']);
		game.load.audio('m2', [ 'Projet/Sources/sounds/musique2.ogg']);
		game.load.audio('m3', [ 'Projet/Sources/sounds/musique3.ogg']);
		game.load.audio('m4', [ 'Projet/Sources/sounds/musique4.ogg']);
		game.load.audio('m5', 'Projet/Sources/sounds/Clavier.mp3');
		game.load.audio('m6', 'Projet/Sources/sounds/CAFE.mp3');
		game.load.audio('m7', 'Projet/Sources/sounds/PILLULE.mp3');
		game.load.audio('m8', 'Projet/Sources/sounds/Baillement fille.mp3');
		game.load.audio('m9', 'Projet/Sources/sounds/Baillement homme.mp3');

		game.load.image('arriere_plan', 'Projet/Sources/assets/Fond.png');
		game.load.image('arriere_plan_bureau', 'Projet/Sources/assets/Fond_bureau.png');
		game.load.image('gameOver', 'Projet/Sources/assets/Fond_blanc.png');

		game.load.image('calendrier', 'Projet/Sources/assets/calendrier.png');
		game.load.image('croix', 'Projet/Sources/assets/calendrier_croix.png');

		game.load.image('conteneur_boss_production', 'Projet/Sources/assets/conteneur_boss_production.png');
		game.load.image('conteneur_boss_stress', 'Projet/Sources/assets/conteneur_boss_stress.png');



		game.load.image('horloge', 'Projet/Sources/assets/horlorge.png');
		game.load.image('horloge_grande_aiguille', 'Projet/Sources/assets/horlorge__aiguille_grande.png');
		game.load.image('horloge_petite_aiguille', 'Projet/Sources/assets/horlorge__aiguille_petite.png');

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

		game.load.image('picto_concentration', 'Projet/Sources/assets/conteneur_focus_01.png');
		game.load.image('picto_sommeil', 'Projet/Sources/assets/conteneur_dodo_03.png');
		game.load.image('picto_stress', 'Projet/Sources/assets/conteneur_stress_03.png');
		
		game.load.image('bonus_cafe', 'Projet/Sources/assets/sommeil_power_up.png');
		game.load.image('bonus_clope', 'Projet/Sources/assets/stress_power_up.png');
		game.load.image('bonus_pillule', 'Projet/Sources/assets/concentration_power_up.png');
				
		game.load.image('employee_trainee', 'Projet/Sources/assets/employee_trainee.png');
		
		game.load.image('jauge_secretary_concentration', 'Projet/Sources/assets/jauge_fille_focus_01.png');
		game.load.image('jauge_secretary_sommeil', 'Projet/Sources/assets/jauge_fille_dodo_02.png');
		game.load.image('jauge_secretary_stress', 'Projet/Sources/assets/jauge_fille_stress_03.png');

		game.load.image('jauge_trainee_concentration', 'Projet/Sources/assets/jauge_stagiaire_focus_01.png');
		game.load.image('jauge_trainee_sommeil', 'Projet/Sources/assets/jauge_stagiaire_dodo_02.png');
		game.load.image('jauge_trainee_stress', 'Projet/Sources/assets/jauge_stagiaire_stress_03.png');

		game.load.image('jauge_sedentary_concentration', 'Projet/Sources/assets/jauge_quadra_focus_01.png');
		game.load.image('jauge_sedentary_sommeil', 'Projet/Sources/assets/jauge_quadra_dodo_02.png');
		game.load.image('jauge_sedentary_stress', 'Projet/Sources/assets/jauge_quadra_stress_03.png');

		game.load.image('jauge_boss_production', 'Projet/Sources/assets/jauge_boss_production.png');
		game.load.image('jauge_boss_stress', 'Projet/Sources/assets/jauge_boss_stress.png');

		game.load.image('employee_secretary1', 'Projet/Sources/assets/employee_secretary/bureau_rouge0001.png');
		game.load.image('employee_secretary2', 'Projet/Sources/assets/employee_secretary/bureau_rouge0002.png');
		game.load.image('employee_secretary3', 'Projet/Sources/assets/employee_secretary/bureau_rouge0003.png');
		game.load.image('employee_secretary4', 'Projet/Sources/assets/employee_secretary/bureau_rouge0004.png');
		game.load.image('employee_secretaryOverlay', 'Projet/Sources/assets/employee_secretary/overlay_bureau0001.png');
		game.load.image('employee_secretaryFront1', 'Projet/Sources/assets/employee_secretary/premier_plan0001.png');
		game.load.image('employee_secretaryFront2', 'Projet/Sources/assets/employee_secretary/premier_plan0002.png');
		game.load.image('employee_secretaryFront3', 'Projet/Sources/assets/employee_secretary/premier_plan0003.png');
		game.load.image('employee_secretaryFront4', 'Projet/Sources/assets/employee_secretary/premier_plan0004.png');
		game.load.spritesheet('employee_secretaryPerso1', 'Projet/Sources/assets/employee_secretary/Fille/fille1.png',136,249,24,0,3);
		game.load.spritesheet('employee_secretaryPerso2', 'Projet/Sources/assets/employee_secretary/Fille/fille2.png',136,249,24,0,3);
		game.load.spritesheet('employee_secretaryPerso3', 'Projet/Sources/assets/employee_secretary/Fille/fille3.png',136,249,9,0,3);
		game.load.spritesheet('employee_secretaryPerso4', 'Projet/Sources/assets/employee_secretary/Fille/fille4.png',136,249,8,0,3);

		game.load.image('employee_trainee1', 'Projet/Sources/assets/employee_trainee/jaune0001.png');
		game.load.image('employee_trainee2', 'Projet/Sources/assets/employee_trainee/jaune0002.png');
		game.load.image('employee_trainee3', 'Projet/Sources/assets/employee_trainee/jaune0003.png');
		game.load.image('employee_trainee4', 'Projet/Sources/assets/employee_trainee/jaune0004.png');
		game.load.image('employee_traineeOverlay', 'Projet/Sources/assets/employee_trainee/cachepied.png');
		game.load.image('employee_traineeFront1', 'Projet/Sources/assets/employee_trainee/premierplan0001.png');
		game.load.image('employee_traineeFront2', 'Projet/Sources/assets/employee_trainee/premierplan0002.png');
		game.load.image('employee_traineeFront3', 'Projet/Sources/assets/employee_trainee/premierplan0003.png');
		game.load.image('employee_traineeFront4', 'Projet/Sources/assets/employee_trainee/premierplan0004.png');
		game.load.spritesheet('employee_traineePerso1', 'Projet/Sources/assets/employee_trainee/trainee/stagiaire1.png',160,238,28);
		game.load.spritesheet('employee_traineePerso2', 'Projet/Sources/assets/employee_trainee/trainee/stagiaire2.png',160,239,28,0,-1);
		game.load.spritesheet('employee_traineePerso3', 'Projet/Sources/assets/employee_trainee/trainee/stagiaire3.png',160,239,19,0,-1);
		game.load.spritesheet('employee_traineePerso4', 'Projet/Sources/assets/employee_trainee/trainee/stagiaire4.png',160,239,59,0,-1);

		game.load.image('employee_sedentary1', 'Projet/Sources/assets/employee_sedentary/blue0001.png');
		game.load.image('employee_sedentary2', 'Projet/Sources/assets/employee_sedentary/blue0002.png');
		game.load.image('employee_sedentary3', 'Projet/Sources/assets/employee_sedentary/blue0003.png');
		game.load.image('employee_sedentary4', 'Projet/Sources/assets/employee_sedentary/blue0004.png');
		game.load.image('employee_sedentaryFront1', 'Projet/Sources/assets/employee_sedentary/overlay0001.png');
		game.load.image('employee_sedentaryFront2', 'Projet/Sources/assets/employee_sedentary/overlay0002.png');
		game.load.image('employee_sedentaryFront3', 'Projet/Sources/assets/employee_sedentary/overlay0003.png');
		game.load.image('employee_sedentaryFront4', 'Projet/Sources/assets/employee_sedentary/overlay0004.png');
		game.load.spritesheet('employee_sedentaryPerso1', 'Projet/Sources/assets/employee_sedentary/stress/stress1.png',175,258,28,0,4);
		game.load.spritesheet('employee_sedentaryPerso2', 'Projet/Sources/assets/employee_sedentary/stress/stress2.png',175,258,48,0,4);
		game.load.spritesheet('employee_sedentaryPerso3', 'Projet/Sources/assets/employee_sedentary/stress/stress3.png',175,258,24,0,4);
		game.load.spritesheet('employee_sedentaryPerso4', 'Projet/Sources/assets/employee_sedentary/stress/stress4.png',175,258,24,0,4);

		game.load.spritesheet('son_on', 'Projet/Sources/assets/sound_on_01.png',70,70);
		game.load.spritesheet('son_off', 'Projet/Sources/assets/sound_off_01.png',70,70);
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
		label1 = game.add.text(this.world.width / 2, this.world.height / 2 - 200, 'The Working Day',
			{ font: '80px Arial', fill: '#fff' });
		label2 = game.add.text(this.world.width / 2 - 200, this.world.height / 2 + 120 + 0.5, 'Jouer',
			{ font: '16px Arial', fill: '#fff' });
		label3 = game.add.text(this.world.width / 2 + 200, this.world.height / 2 + 120 + 0.5, 'Credits',
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
			this.ouvert = 0
			game.state.start('jeu');
		}
		if(this.merci){
			this.merci = 0
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
		if (typeof gameOver !== "undefined") 
			gameOver = undefined;
		var w = 1280;
		var h = 720;
		label1 = game.add.text(Math.floor(w/2), Math.floor(h/2)+0.5, 'The End',
			{ font: '16px Arial', fill: '#fff' });
		label1.anchor.setTo(0.5, 0.5);

		this.boutonJouer = this.add.button(game.width *0.8, game.height *0.8 + 50,'sortie', this.goMenu, this, 2, 0, 1);
		this.boutonJouer.anchor.setTo(0.5, 0.5);
	},

	update: function(game){
		if(this.retour){
			this.retour = 0;
			game.state.start('menu');
		}
	},

	goMenu: function(game){
		this.retour = 1;
	}
}
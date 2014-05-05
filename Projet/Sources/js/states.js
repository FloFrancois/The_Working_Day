var WD_begin = function (game) { }
WD_begin.prototype = {

	preload : function(game) {
		game.stage.backgroundColor = '#222';

		game.load.audio('m1', [ 'Projet/Sources/sounds/musique.ogg']);
		game.load.audio('m2', [ 'Projet/Sources/sounds/musique2.ogg']);
		game.load.audio('m3', [ 'Projet/Sources/sounds/musique3.ogg']);
		game.load.audio('m4', [ 'Projet/Sources/sounds/musique4.ogg']);

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

		game.load.spritesheet('picto_secretary', 'Projet/Sources/assets/Anim_Medal/anim_medal_fille.png',385, 387, 24);
		game.load.spritesheet('picto_trainee', 'Projet/Sources/assets/Anim_Medal/anim_medal_stagiaire.png',385, 396, 24);
		game.load.spritesheet('picto_sedentary', 'Projet/Sources/assets/Anim_Medal/anim_medal_quadra.png',385, 390, 24);
		game.load.spritesheet('cadre', 'Projet/Sources/assets/cadre/cadre_blink_01.png',300, 300, 8);
		
		game.load.image('bonus_cafe', 'Projet/Sources/assets/sommeil_power_up.png');
		game.load.image('bonus_clope', 'Projet/Sources/assets/stress_power_up.png');
		game.load.image('bonus_pillule', 'Projet/Sources/assets/concentration_power_up.png');

		game.load.image('bonus_sudoku', 'Projet/Sources/assets/sudoku_power_up.png');
		game.load.image('bonus_musique', 'Projet/Sources/assets/music_power_up.png');
		game.load.image('bonus_lipStick', 'Projet/Sources/assets/rouge_a_levre_power_up.png');


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
				
		game.load.image('employee_trainee1', 'Projet/Sources/assets/employee_trainee/jaune0001.png');
		game.load.image('employee_trainee2', 'Projet/Sources/assets/employee_trainee/jaune0002.png');
		game.load.image('employee_trainee3', 'Projet/Sources/assets/employee_trainee/jaune0003.png');
		game.load.image('employee_trainee4', 'Projet/Sources/assets/employee_trainee/jaune0004.png');
		game.load.image('employee_trainee5', 'Projet/Sources/assets/employee_trainee/jaune0004.png');
		game.load.image('employee_traineeOverlay', 'Projet/Sources/assets/employee_trainee/cachepied.png');
		game.load.image('employee_traineeFront1', 'Projet/Sources/assets/employee_trainee/premierplan0001.png');
		game.load.image('employee_traineeFront2', 'Projet/Sources/assets/employee_trainee/premierplan0002.png');
		game.load.image('employee_traineeFront3', 'Projet/Sources/assets/employee_trainee/premierplan0003.png');
		game.load.image('employee_traineeFront4', 'Projet/Sources/assets/employee_trainee/premierplan0004.png');
		game.load.image('employee_traineeFront5', 'Projet/Sources/assets/employee_trainee/premierplan0004.png');
		game.load.spritesheet('employee_traineePerso1', 'Projet/Sources/assets/employee_trainee/trainee/stagiaire1.png',160,238,28);
		game.load.spritesheet('employee_traineePerso2', 'Projet/Sources/assets/employee_trainee/trainee/stagiaire2.png',160,239,28,0,-1);
		game.load.spritesheet('employee_traineePerso3', 'Projet/Sources/assets/employee_trainee/trainee/stagiaire3.png',160,239,19,0,-1);
		game.load.spritesheet('employee_traineePerso4', 'Projet/Sources/assets/employee_trainee/trainee/stagiaire4.png',160,239,59,0,-1);
		game.load.spritesheet('employee_traineePerso5', 'Projet/Sources/assets/employee_trainee/trainee/stagiairemort.png',160,243,60,0,-1);

		game.load.image('employee_secretary1', 'Projet/Sources/assets/employee_secretary/bureau_rouge0001.png');
		game.load.image('employee_secretary2', 'Projet/Sources/assets/employee_secretary/bureau_rouge0002.png');
		game.load.image('employee_secretary3', 'Projet/Sources/assets/employee_secretary/bureau_rouge0003.png');
		game.load.image('employee_secretary4', 'Projet/Sources/assets/employee_secretary/bureau_rouge0004.png');
		game.load.image('employee_secretary5', 'Projet/Sources/assets/employee_secretary/bureau_rouge0004.png');
		game.load.image('employee_secretaryOverlay', 'Projet/Sources/assets/employee_secretary/overlay_bureau0001.png');
		game.load.image('employee_secretaryFront1', 'Projet/Sources/assets/employee_secretary/premier_plan0001.png');
		game.load.image('employee_secretaryFront2', 'Projet/Sources/assets/employee_secretary/premier_plan0002.png');
		game.load.image('employee_secretaryFront3', 'Projet/Sources/assets/employee_secretary/premier_plan0003.png');
		game.load.image('employee_secretaryFront4', 'Projet/Sources/assets/employee_secretary/premier_plan0004.png');
		game.load.image('employee_secretaryFront5', 'Projet/Sources/assets/employee_secretary/premier_plan0004.png');
		game.load.spritesheet('employee_secretaryPerso1', 'Projet/Sources/assets/employee_secretary/Fille/fille1.png',136,249,24,0,3);
		game.load.spritesheet('employee_secretaryPerso2', 'Projet/Sources/assets/employee_secretary/Fille/fille2.png',136,249,24,0,3);
		game.load.spritesheet('employee_secretaryPerso3', 'Projet/Sources/assets/employee_secretary/Fille/fille3.png',136,249,9,0,3);
		game.load.spritesheet('employee_secretaryPerso4', 'Projet/Sources/assets/employee_secretary/Fille/fille4.png',136,249,8,0,3);
		game.load.spritesheet('employee_secretaryPerso5', 'Projet/Sources/assets/employee_secretary/Fille/fillemort.png',136,249,54,0,3);

		game.load.image('employee_sedentary1', 'Projet/Sources/assets/employee_sedentary/blue0001.png');
		game.load.image('employee_sedentary2', 'Projet/Sources/assets/employee_sedentary/blue0002.png');
		game.load.image('employee_sedentary3', 'Projet/Sources/assets/employee_sedentary/blue0003.png');
		game.load.image('employee_sedentary4', 'Projet/Sources/assets/employee_sedentary/blue0004.png');
		game.load.image('employee_sedentary5', 'Projet/Sources/assets/employee_sedentary/blue0004.png');
		game.load.image('employee_sedentaryFront1', 'Projet/Sources/assets/employee_sedentary/overlay0001.png');
		game.load.image('employee_sedentaryFront2', 'Projet/Sources/assets/employee_sedentary/overlay0002.png');
		game.load.image('employee_sedentaryFront3', 'Projet/Sources/assets/employee_sedentary/overlay0003.png');
		game.load.image('employee_sedentaryFront4', 'Projet/Sources/assets/employee_sedentary/overlay0004.png');
		game.load.image('employee_sedentaryFront5', 'Projet/Sources/assets/employee_sedentary/overlay0004.png');
		game.load.spritesheet('employee_sedentaryPerso1', 'Projet/Sources/assets/employee_sedentary/stress/stress1.png',175,258,28,0,4);
		game.load.spritesheet('employee_sedentaryPerso2', 'Projet/Sources/assets/employee_sedentary/stress/stress2.png',175,258,48,0,4);
		game.load.spritesheet('employee_sedentaryPerso3', 'Projet/Sources/assets/employee_sedentary/stress/stress3.png',175,258,24,0,4);
		game.load.spritesheet('employee_sedentaryPerso4', 'Projet/Sources/assets/employee_sedentary/stress/stress4.png',175,258,24,0,4);
		game.load.spritesheet('employee_sedentaryPerso5', 'Projet/Sources/assets/employee_sedentary/stress/stressmort.png',201,260,48,0,3);

		game.load.spritesheet('bordel', 'Projet/Sources/assets/rideau.png',455,508,18,0,3);

		game.load.image('fin1', 'Projet/Sources/assets/the_end_1.png');
		game.load.image('fin2', 'Projet/Sources/assets/the_end_2.png');
		game.load.image('fin3', 'Projet/Sources/assets/the_end_3.png');
		game.load.image('fin4', 'Projet/Sources/assets/the_end_4.png');
		game.load.image('isart', 'Projet/Sources/assets/logoIsart.png');

		game.load.image('nom_charlotte', 'Projet/Sources/assets/charlotte.png');
		game.load.image('nom_maureen', 'Projet/Sources/assets/maureen.png');
		game.load.image('nom_nicolas', 'Projet/Sources/assets/nicolas.png');
		game.load.image('nom_florian', 'Projet/Sources/assets/florian.png');
		game.load.image('nom_theo', 'Projet/Sources/assets/theo.png');

		game.load.image('menu_titre', 'Projet/Sources/assets/titre.png');
		game.load.image('menu_fond', 'Projet/Sources/assets/menu_1.png');
		game.load.image('exit', 'Projet/Sources/assets/post_it_exit.png');
		game.load.image('play', 'Projet/Sources/assets/post_it_play.png');
		game.load.image('stylo', 'Projet/Sources/assets/stylo_tuto.png');
		game.load.image('pic_charlotte', 'Projet/Sources/assets/pic_cha.png');
		game.load.image('pic_maureen', 'Projet/Sources/assets/pic_maureen.png');
		game.load.image('pic_nicolas', 'Projet/Sources/assets/pic_nico.png');
		game.load.image('pic_florian', 'Projet/Sources/assets/pic_flo.png');
		game.load.image('pic_theo', 'Projet/Sources/assets/pic_theo.png');


		game.load.image('tuto_01', 'Projet/Sources/assets/tuto/tuto_01.png');
		game.load.image('tuto_02', 'Projet/Sources/assets/tuto/tuto_02.png');
		game.load.image('tuto_03', 'Projet/Sources/assets/tuto/tuto_03.png');
		game.load.image('tuto_04', 'Projet/Sources/assets/tuto/tuto_04.png');
		game.load.image('tuto_05', 'Projet/Sources/assets/tuto/tuto_05.png');
		game.load.image('tuto_06', 'Projet/Sources/assets/tuto/tuto_06.png');

		game.load.spritesheet('son_on', 'Projet/Sources/assets/sound_on_01.png',70,70);
		game.load.spritesheet('son_off', 'Projet/Sources/assets/sound_off_01.png',70,70);
		game.load.spritesheet('option', 'Projet/Sources/assets/option_button.png',70,70);
		game.load.spritesheet('reset', 'Projet/Sources/assets/reset_button.png',70,70);
		game.load.spritesheet('sortie', 'Projet/Sources/assets/sortie_button.png',70,70);
		game.load.spritesheet('flecheD', 'Projet/Sources/assets/tuto/fleche_droite.png',70,70);
		game.load.spritesheet('flecheG', 'Projet/Sources/assets/tuto/fleche_gauche.png',70,70);
	},

	//__________________________________________CREATE____________________________________________________________________________________

	create : function (game) {
		game.state.start('charger');
	}
}

var WD_load = function (game) {}
WD_load.prototype = {

	preload: function(game) {
		label1 = game.add.text(game.width * 0.5, game.height *0.5-20, 'The Working Day',
			{ font: '30px Arial', fill: '#fff' });
		label2 = game.add.text(game.width * 0.5+0.5, game.height *0.5+20+0.5, 'loading...',
			{ font: '16px Arial', fill: '#fff' });
		label1.anchor.setTo(0.5, 0.5);
		label2.anchor.setTo(0.5, 0.5);
	},

	//__________________________________________CREATE____________________________________________________________________________________

	create: function (game) {
  		setTimeout(function () {
			game.state.start('menu');
		},1000);
	}
}

var WD_menu = function (game) {}
WD_menu.prototype = {

	create: function (game){
		game.add.sprite(0, 0, 'menu_fond');
		titre = game.add.sprite(275, 95, 'menu_titre');
		titre.scale.setTo(0.9, 0.9);

		this.boutonJouer = this.add.button(game.width * 0.5 - 50, game.height *0.3 + 225,
			'play', this.startGame, this, 2, 0, 1);
		this.boutonJouer.anchor.setTo(0.5, 0.5);
		this.boutonJouer.scale.setTo(0.9, 0.9);

		this.boutonCredits = this.add.button(game.width * 0.8 + 275, game.height *0.3 + 100,
			'exit', this.goCredits, this, 2, 0, 1);
		this.boutonCredits.anchor.setTo(0.5, 0.5);

		this.boutonTuto = this.add.button(game.width * 0.5, game.height *0.6 + 225,
			'stylo', this.goTuto, this, 2, 0, 1);
		this.boutonTuto.anchor.setTo(0.5, 0.5);
	},
	update: function(game){
		if(this.ouvert){
			this.ouvert = 0;
			game.state.start('jeu');
			this.boutonJouer.kill();
			this.boutonCredits.kill();
			this.boutonTuto.kill();
		}
		if(this.merci){
			this.merci = 0;
			game.state.start('credits');
			this.boutonJouer.kill();
			this.boutonCredits.kill();
			this.boutonTuto.kill();
		}
		if(this.learn){
			this.learn = 0;
			game.state.start('tuto');
			this.boutonJouer.kill();
			this.boutonCredits.kill();
			this.boutonTuto.kill();
		}
	},

	startGame: function(game){
		this.ouvert = 1;
	},

	goCredits: function(game){
		this.merci = 1;
	},

	goTuto: function(game){
		this.learn = 1;
	}
}

var WD_tuto = function (game) {this.pages = 1;}
WD_tuto.prototype = {

	create: function(game) {
		
		page = game.add.sprite(0,0,'tuto_01');

		this.boutonDroite = this.add.button(game.width *0.935, game.height *0.9,
			'flecheD', this.tutoPlus, this, 2, 0, 1);
		this.boutonDroite.anchor.setTo(0.5, 0.5);
		this.boutonDroite.scale.setTo(1.2, 1.2);
	},

	update: function(game){
		if(this.retour){
			this.retour = 0;
			this.pages = 1;
			game.state.start('menu');
			this.boutonMenu.kill();
		}

		if(this.chang){
			this.changePicture(game);
			this.chang = 0;
		}
	},

	changePicture: function(game) {
		switch(this.pages){
			case 2:
				page.kill();
				this.boutonDroite.kill();
				page = game.add.sprite(0,0,'tuto_02');
				this.boutonDroite = this.add.button(game.width *0.935, game.height *0.9,
					'flecheD', this.tutoPlus, this, 2, 0, 1);
				this.boutonDroite.anchor.setTo(0.5, 0.5);
				this.boutonDroite.scale.setTo(1.2, 1.2);
			break;
			case 3:
				page.kill();
				this.boutonDroite.kill();
				page = game.add.sprite(0,0,'tuto_03');
				this.boutonDroite = this.add.button(game.width *0.935, game.height *0.9,
					'flecheD', this.tutoPlus, this, 2, 0, 1);
				this.boutonDroite.anchor.setTo(0.5, 0.5);
				this.boutonDroite.scale.setTo(1.2, 1.2);
			break;
			case 4:
				page.kill();
				this.boutonDroite.kill();
				page = game.add.sprite(0,0,'tuto_04');
				this.boutonDroite = this.add.button(game.width *0.935, game.height *0.9,
					'flecheD', this.tutoPlus, this, 2, 0, 1);
				this.boutonDroite.anchor.setTo(0.5, 0.5);
				this.boutonDroite.scale.setTo(1.2, 1.2);
			break;
			case 5:
				page.kill();
				this.boutonDroite.kill();
				page = game.add.sprite(0,0,'tuto_05');
				this.boutonDroite = this.add.button(game.width *0.935, game.height *0.9,
					'flecheD', this.tutoPlus, this, 2, 0, 1);
				this.boutonDroite.anchor.setTo(0.5, 0.5);
				this.boutonDroite.scale.setTo(1.2, 1.2);
			break;
			case 6:
				page.kill();
				this.boutonDroite.kill();
				page = game.add.sprite(0,0,'tuto_06');
				this.boutonMenu = this.add.button(game.width *0.935, game.height *0.9,
					'sortie', this.goMenu, this, 2, 0, 1);
				this.boutonMenu.anchor.setTo(0.5, 0.5);
				this.boutonMenu.scale.setTo(1.2, 1.2);
			break;
		}
	},

	goMenu: function(game){
		this.retour = 1;
	},

	tutoPlus: function(game){
		this.chang = 1;
		this.pages ++;
	}
}

var WD_end = function (game) {}
WD_end.prototype = {

	create: function(game) {
		if (typeof gameOver !== "undefined") 
			gameOver = undefined;
		if(game.days <= 3){
			fond = game.add.sprite(0, 0, 'fin4');
		}
		else if(game.days >= 4 && game.days <= 5){
			fond = game.add.sprite(0, 0, 'fin3');
		}
		else if(game.days >= 6 && game.days <= 9){
			fond = game.add.sprite(0, 0, 'fin2');
		}
		else if(game.days >= 10){
			fond = game.add.sprite(0, 0, 'fin1');
		}

		this.boutonJouer = this.add.button(game.width *0.925, game.height *0.9,
			'sortie', this.goMenu, this, 2, 0, 1);
		this.boutonJouer.anchor.setTo(0.5, 0.5);
	},

	update: function(game){
		if(this.retour){
			this.retour = 0;
			game.state.start('menu');
			fond.kill();
			this.boutonJouer.kill();
		}
	},

	goMenu: function(game){
		this.retour = 1;
	}
}

var WD_credits = function (game) {}
WD_credits.prototype = {

	create: function(game) {
		fond = game.add.sprite(0, 0, 'menu_fond');

				logoIsart = game.add.sprite(game.width *0.5, game.height *0.9, 'isart');
		logoIsart.anchor.setTo(0.5, 0.5);

		picto_charlotte = game.add.sprite(game.width *0.55 + 135, game.height *0.15, 'pic_charlotte');
		charlotte = game.add.sprite(game.width *0.555, game.height *0.15, 'nom_charlotte');
		picto_charlotte.anchor.setTo(0.5, 0.5);
		charlotte.anchor.setTo(0.5, 0.5);
		charlotte.scale.setTo(0.7, 0.7);

		picto_maureen = game.add.sprite(game.width *0.55 + 135, game.height *0.45, 'pic_maureen');
		maureen = game.add.sprite(game.width *0.565, game.height *0.45, 'nom_maureen');
		picto_maureen.anchor.setTo(0.5, 0.5);
		maureen.anchor.setTo(0.5, 0.5);
		maureen.scale.setTo(0.7, 0.7);

		picto_nicolas = game.add.sprite(game.width *0.55 + 135, game.height *0.75, 'pic_nicolas');
		nicolas = game.add.sprite(game.width *0.575, game.height *0.75, 'nom_nicolas');
		picto_nicolas.anchor.setTo(0.5, 0.5);
		nicolas.anchor.setTo(0.5, 0.5);
		nicolas.scale.setTo(0.7, 0.7);

		picto_florian = game.add.sprite(game.width *0.45 - 175, game.height *0.3, 'pic_florian');
		florian = game.add.sprite(game.width *0.585, game.height *0.3, 'nom_florian');
		picto_florian.anchor.setTo(0.5, 0.5);
		florian.anchor.setTo(0.5, 0.5);
		florian.scale.setTo(0.7, 0.7);

		picto_theo = game.add.sprite(game.width *0.45 - 175, game.height *0.6, 'pic_theo');
		theo = game.add.sprite(game.width *0.585, game.height *0.6, 'nom_theo');
		picto_theo.anchor.setTo(0.5, 0.5);
		theo.anchor.setTo(0.5, 0.5);
		theo.scale.setTo(0.7, 0.7);


		this.boutonSortie = this.add.button(game.width *0.925, game.height *0.9,
			'sortie', this.goMenu, this, 2, 0, 1);
		this.boutonSortie.anchor.setTo(0.5, 0.5);
	},

	update: function(game){
		if(this.retour){
			this.retour = 0;
			window.open('', '_self', ''); 
			window.close(); 
		}
	},

	goMenu: function(game){
		this.retour = 1;
	}
}
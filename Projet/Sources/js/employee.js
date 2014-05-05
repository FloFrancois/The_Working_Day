function Employee (game,pos,type,color) {
	this.type = "employee_"+type;
	this.color = color;
	this.levelStress = 1;
	this.levelStressSave = 1;
	this.sprite = game.add.sprite(pos[0],pos[1],this.type+this.levelStress,0);
	if (this.type == "employee_sedentary") 
		this.sprite.bringToTop();
	this.persoSprite = game.add.sprite(pos[0]+195,pos[1]+250,this.type+"Perso"+this.levelStress,0);
	this.persoSprite.anchor.setTo(0.5,0.5)
	if (this.type != "employee_sedentary") 
		this.overlaySprite = game.add.sprite(pos[0],pos[1],this.type+"Overlay",0);
	this.frontSprite = game.add.sprite(pos[0]-4,pos[1]-34,this.type+"Front"+this.levelStress,0);
	this.frontSprite.bringToTop();
	this.persoSprite.animations.add("go");
	this.persoSprite.animations.play("go",20,true);

	this.picto = game.add.sprite(this.sprite.x+this.sprite.width*0.16,430,'picto_'+type,0);
	this.picto.scale.setTo(0.2, 0.2);
	this.picto.bringToTop();
	this.picto.animations.add('tourne');
	
	this.jauge_concentration = game.add.sprite(-1000, 440, "jauge_"+type+"_concentration");
	this.jauge_fatigue = game.add.sprite(-1000, 459, "jauge_"+type+"_sommeil");
	this.jauge_stress = game.add.sprite(-1000, 478, "jauge_"+type+"_stress");

	this.jauge_concentration.scale.y = 0.94;
	this.jauge_fatigue.scale.y = 0.94;
	this.jauge_stress.scale.y = 0.94;
	for(var attribute in game.config.employees[type]) 
		this[attribute] = game.config.employees[type][attribute];
	
	game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.penalty = 1;
	this.resistance = 1;
}

Employee.prototype.update = function(game) {
		if (this.levelStressSave != this.levelStress) {
			this.levelStressSave = this.levelStress;
			this.persoSprite.animations.destroy();
			this.sprite.loadTexture(this.type+this.levelStress,0);
			this.persoSprite.loadTexture(this.type+"Perso"+this.levelStress,0);
			if (this.type != "employee_sedentary")
				this.overlaySprite.loadTexture(this.type+"Overlay",0);
			this.frontSprite.loadTexture(this.type+"Front"+this.levelStress,0);
			if (this.levelStress < 5) {
				this.persoSprite.animations.add("go");
				this.persoSprite.animations.play("go",20,true);
			}
			else
			{
				if (this.type == "employee_sedentary") 
					this.persoSprite.x += 15 ; 
				this.persoSprite.animations.add("go");
				this.persoSprite.animations.play("go",30,false);
				spriteX = this.sprite.x
				spriteY = this.sprite.y
				this.persoSprite.kill();
				// this.sprite.kill();
				this.frontSprite.kill();
			// 	this.persoSprite.animations.getAnimation("go").onComplete.add(function () {
			// 		this.bordelSprite = game.add.sprite(spriteX-45,spriteY-100,"bordel",0)
			// 		this.bordelSprite.animations.add("tombe");
			// 		this.bordelSprite.animations.play("tombe",14,false);
			// 	})
			}
		};
		totalAttributes = 0

	if (!this.sucetteALaViande) { // EASTER EGG !
		this.sucetteALaViande = true;
		this.persoSprite.x = this.sprite.x+195;
		if (this.type == "employee_secretary")
			this.persoSprite.y = this.sprite.y+250;
		else if (this.type == "employee_trainee")
			this.persoSprite.x = this.sprite.x+165;		
		else
			this.persoSprite.y = this.sprite.y + 255;

		if (this.type != "employee_sedentary") {
			this.overlaySprite.x = this.sprite.x;
			this.overlaySprite.y = this.sprite.y;
		}
		this.picto.x = this.sprite.x+this.sprite.width*0.14;
		this.frontSprite.x = this.sprite.x-4;
		this.frontSprite.y = this.sprite.y-34;
		this.jauge_concentration.x = this.sprite.x+this.sprite.width*0.38;
		this.jauge_fatigue.x = this.sprite.x+this.sprite.width*0.38;
		this.jauge_stress.x = this.sprite.x+this.sprite.width*0.38;		
		game.add.sprite(this.sprite.x+this.sprite.width*0.32, 440, "picto_concentration");
		game.add.sprite(this.sprite.x+this.sprite.width*0.32, 459, "picto_sommeil");
		game.add.sprite(this.sprite.x+this.sprite.width*0.32, 478, "picto_stress");

		this.jauge_concentration.bringToTop();
		this.jauge_fatigue.bringToTop();
		this.jauge_stress.bringToTop();
	}

	for(attribute in game.config.employees[this.type.substr(9)]){
		if (this[attribute] > game.config.maxCaract)
			this[attribute] = game.config.maxCaract
			totalAttributes += this[attribute];
			this["jauge_"+attribute].scale.x = this[attribute]/game.config.maxCaract;
		};
	if (totalAttributes <= 50)
		this.levelStress = 1;
	if (totalAttributes > 100) 
		this.levelStress = 2;
	if (totalAttributes > 150) 
		this.levelStress = 3;
	if (totalAttributes > 200)
		this.levelStress = 4;
	if (totalAttributes > 250) 
		this.levelStress = 5;


	if(this.levelStress == 5 && !this.animEnd){
		this.picto.animations.play('tourne', 23, false);
		this.animEnd = true;
		game.mecMort++;
	}




	for (var i = game.taches.length - 1; i >= 0; i--) {
		if (game.taches[i].sprite.input.isDragged == false) {
			if (game.physics.arcade.overlap(game.taches[i].sprite,this.sprite) && this.levelStress < 5) {
					switch(this.type){
					case "employee_trainee":
						if (game.taches[i].type == "ordinateur") 
							this.penalty = 0.5;
					break;

					case "employee_secretary":
						if (game.taches[i].type == "telephone") 
							this.penalty = 0.5;
					break;

					case "employee_sedentary":
						if (game.taches[i].type == "dossier") 
							this.penalty = 0.5;
					break;
				}

				if (game.taches[i].color == this.color) 
					this.penalty *= 1;
				else
					this.penalty *= 3;
				if ((game.taches[i].type.substr(6) == "musique" && this.type == "employee_trainee")
				 || (game.taches[i].type.substr(6) == "lipStick" && this.type == "employee_secretary") 
				 || (game.taches[i].type.substr(6) == "sudoku" && this.type == "employee_seden"))
					this.resistance = game.taches[i].resistance;

				for(effect in game.taches[i].effects)
				{
					this[effect] += game.taches[i].effects[effect]*this.penalty*this.resistance;
					if (this[effect] > game.config.maxCaract)
						this[effect] = game.config.maxCaract;
					else if (this[effect] < 0)
						this[effect] = 0;
				}
				if (this.resistance < 1) 
					this.resistance+=0.1;
				this.penalty = 1;
				game.taches[i].die(game,1);

			};
		};
	};
}
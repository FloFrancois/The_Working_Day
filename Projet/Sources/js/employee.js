function Employee (game,pos,type,color) {
	this.type = "employee_"+type;
	this.color = color;
	this.levelStress = 1;
	this.levelStressSave = 1;
	if (this.type == "employee_secretary") {
		this.sprite = game.add.sprite(pos[0],pos[1],this.type+this.levelStress,0);
		this.persoSprite = game.add.sprite(pos[0]+195,pos[1]+250,this.type+"Perso"+this.levelStress,0);
		this.persoSprite.anchor.setTo(0.5,0.5)
		this.overlaySprite = game.add.sprite(pos[0],pos[1],this.type+"Overlay",0);
		this.frontSprite = game.add.sprite(pos[0]-4,pos[1]-34,this.type+"Front"+this.levelStress,0);
		this.persoSprite.animations.add("go");
		this.persoSprite.animations.play("go",20,true);
	}
	else
		this.sprite = game.add.sprite(pos[0],pos[1],this.type,0);


	for(var attribute in game.config.employees[type]) 
		this[attribute] = game.config.employees[type][attribute];
	
	game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.penalty = 1;
}

Employee.prototype.update = function(game) {
		if (this.type == "employee_secretary" && this.levelStressSave != this.levelStress) {
			this.levelStressSave = this.levelStress;
			this.persoSprite.animations.destroy();
			this.sprite.loadTexture(this.type+this.levelStress,0);
			this.persoSprite.loadTexture(this.type+"Perso"+this.levelStress,0)
			this.overlaySprite.loadTexture(this.type+"Overlay",0);
			this.frontSprite.loadTexture(this.type+"Front"+this.levelStress,0);
			this.persoSprite.animations.add("go");
			this.persoSprite.animations.play("go",20,true);
		};
		totalAttributes = 0

	for(attribute in game.config.employees[this.type.substr(9)]){
		if (this[attribute] > game.config.maxCaract)
			this[attribute] = game.config.maxCaract
		totalAttributes += this[attribute];
	}
	if (totalAttributes <= 100)
		this.levelStress = 1;
	if (totalAttributes > 100) 
		this.levelStress = 2;
	if (totalAttributes > 150) 
		this.levelStress = 3;
	if (totalAttributes > 200)
		this.levelStress = 4;

	for (var i = game.taches.length - 1; i >= 0; i--) {
		if (game.taches[i].sprite.input.isDragged == false) {
			if (game.physics.arcade.overlap(game.taches[i].sprite,this.sprite)) {
					switch(this.type){
					case "employee_trainee":
						if (game.taches[i].type == "telephone") 
							this.penalty = 0.5;
					break;

					case "employee_secretary":
						if (game.taches[i].type == "ordinateur") 
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
					for(effect in game.taches[i].effects)
					{
							this[effect] += game.taches[i].effects[effect]*this.penalty;
						
						if (this[effect] > game.config.maxCaract)
							this[effect] = game.config.maxCaract;
						else if (this[effect] < 0)
							this[effect] = 0;
					}
					this.penalty = 1;
					game.taches[i].die(game,1);
			};
		};
	};
}
function Employee (game,pos,type,color) {
	this.type = "employee_"+type;
	this.color = color;
	this.sprite = game.add.sprite(pos[0],pos[1],this.type,0);

	for(var attribute in game.config.employees[type]) 
		this[attribute] = game.config.employees[type][attribute];
	
	game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.penalty = 1;
}

Employee.prototype.update = function(game) {
	for(attribute in game.config.employees[this.type.substr(9)]){
		if (this[attribute] > game.config.maxCaract)
			this[attribute] = game.config.maxCaract
	}
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
						console.log("penalty :",game.taches[i].effects[effect]*this.penalty)
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
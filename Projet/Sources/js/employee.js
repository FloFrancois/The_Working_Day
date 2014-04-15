function Employee (game,pos,type,color) {
	this.type = "employee_"+type;
	this.color = color;
	this.sprite = game.add.sprite(pos[0],pos[1],this.type,0);

	for(var attribute in game.config.employees[type]) 
		this[attribute] = game.config.employees[type][attribute];
	
	game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

}

Employee.prototype.update = function(game) {
	for(attribute in game.config.employees[this.type.substr(9)]){
		if (this[attribute] > game.config.maxCaract)
			this[attribute] = game.config.maxCaract
	}
	for (var i = game.taches.length - 1; i >= 0; i--) {
		if (game.taches[i].sprite.input.isDragged == false) {
			if (game.physics.arcade.overlap(game.taches[i].sprite,this.sprite)) {
				if (game.taches[i].color == this.color) 
					var penalty = 1;
				else
					var penalty = 3;
					for(effect in game.taches[i].effects)
					{
							this[effect] += game.taches[i].effects[effect]*penalty;
						
						if (this[effect] > game.config.maxCaract)
							this[effect] = game.config.maxCaract;
						else if (this[effect] < 0)
							this[effect] = 0;
					}
					game.taches[i].die(game,1);
			};
		};
	};
}
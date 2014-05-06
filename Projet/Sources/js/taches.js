function Tache (game,position,type,color) {
	this.color = color;
	this.typeSprite = "tache_"+type+"_"+color;
	this.type = type;
	this.sprite = game.add.sprite(position[0],position[1],this.typeSprite);

	this.sprite.bringToTop();
	this.sprite.anchor.setTo(0.5,0.5);

	game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.sprite.inputEnabled = true;
	this.sprite.input.enableDrag();

	this.savePos={};
	this.savePos.x = this.sprite.x;
	this.savePos.y = this.sprite.y;
	this.resistance = 1;


	for(var attribute in game.config.taches[type]) 
		this[attribute] = game.config.taches[type][attribute];
}
Tache.prototype.update = function(game) {
	if (this.sprite.input.isDragged == false){
		if (this.sprite.x > 1100) 
			this.die(game,"hehe t'es mort salope biatch");
		if(this.sprite.y < 500){
			this.sprite.x = this.savePos.x;
			this.sprite.y = this.savePos.y;
			this.sprite.x += game.speed;
			this.savePos.x = this.sprite.x;
			this.savePos.y = this.sprite.y;
		}
		else {
			this.sprite.x += game.speed;
			this.sprite.y = this.savePos.y;
		}	
	}
	else {
		if (!game.isDragging)
			game.isDragging = true;
		this.savePos.x += game.speed;
	}
}
		
	
Tache.prototype.die = function(game,type) {
	if (typeof type === "number")
		game.tachesDone++;
	if (typeof type === "string"){
		if (game.tachesDone)
			game.tachesDone--;
		for (var i = game.employees.length - 1; i >= 0; i--) {
			for(caract in game.config.employees.trainee){
				if (game.employees[i][caract] + 5 < game.config.maxCaract){
					game.employees[i].totalAttributes += 5/3
					game.employees[i][caract]+=5;
				}
				else
					game.employees[i][caract] = game.config.maxCaract;
				if (game.employees[i][caract] < 0) 
					game.employees[i][caract] = 0;
		}
	};
	}

	this.sprite.kill()
	game.taches.splice(game.taches.indexOf(this),1)
	
}
function Employee (game,pos,color) {
	this.type = "employee_"+color;
	this.color = color;
	this.sprite = game.add.sprite(pos[0],pos[1],this.type,0);
	this.sprite.anchor.setTo(0.5,0.5);

	for(var attribute in game.config.employees[color]) 
		this[attribute] = game.config.employees[color][attribute];
	
	game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

}

Employee.prototype.update = function(game) {
	for (var i = game.taches.length - 1; i >= 0; i--) {
		if (game.taches[i].sprite.input.isDragged == false && game.taches[i].color == this.color) {
			if (game.physics.arcade.overlap(game.taches[i].sprite,this.sprite)) {
				console.log("effet actives :",game.taches[i].effects)
				game.taches[i].die(game);
			};
		};
	};
}
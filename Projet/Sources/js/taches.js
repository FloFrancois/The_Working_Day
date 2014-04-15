function Tache (game,position,type) {
	this.type = "tache_"+type;
	this.sprite = game.add.sprite(position[0],position[1],this.type);
	this.sprite.bringToTop();
	this.sprite.anchor.setTo(0.5,0.5);

	game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.sprite.inputEnabled = true;
	this.sprite.input.enableDrag();

	this.savePos={};
	this.savePos.x = this.sprite.x;
	this.savePos.y = this.sprite.y


	for(var attribute in game.config.taches[type]) 
		this[attribute] = game.config.taches[type][attribute];
}
Tache.prototype.update = function(game) {
	if (this.sprite.input.isDragged == false){
		if(this.sprite.y < 500){
			this.sprite.x = this.savePos.x;
			this.sprite.y = this.savePos.y;
			this.sprite.x += 1;
			this.savePos.x = this.sprite.x;
			this.savePos.y = this.sprite.y;
		}
		else {
			this.sprite.x += 1;
			this.savePos.x = this.sprite.x;
			this.sprite.y = this.savePos.y;
		}	
	}
	else {
		this.savePos.x += 1;
	}
		
	if (this.sprite.x > 1000) 
		this.die(game);
}
Tache.prototype.die = function(game) {
	this.sprite.kill()
	game.taches.splice(game.taches.indexOf(this),1)
}
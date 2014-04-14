function Tache (game,position,type) {
	this.type = "tache_"+type;
	this.sprite = game.add.sprite(position[0],position[1],this.type);
	this.sprite.bringToTop();
	this.sprite.anchor.setTo(0.5,0.5);

	game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.sprite.inputEnabled = true;

	for(var attribute in game.config.taches[type]) 
		this[attribute] = game.config.taches[type][attribute];
}
Tache.prototype.update = function(game) {
	this.sprite.x += 1;
}
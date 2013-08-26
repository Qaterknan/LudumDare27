function Jetpack( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "jetpack", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.jetpack.attack;
		this.health += game.player.units.jetpack.health;
		this.speed += game.player.units.jetpack.speed;
	}
	this.projectileLife = this.shootingRange/this.projectileSpeed;
};
Jetpack.prototype = Object.create(Unit.prototype);
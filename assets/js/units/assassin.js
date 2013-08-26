function Assassin( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "assassin", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.assassin.attack;
		this.health += game.player.units.assassin.health;
		this.cadency -= game.player.units.assassin.cadency;
	}
	this.projectileLife = this.shootingRange/this.projectileSpeed;
	
};
Assassin.prototype = Object.create(Unit.prototype);
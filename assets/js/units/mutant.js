function Mutant( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "mutant", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.mutant.attack;
		this.speed += game.player.units.mutant.speed;
		this.health += game.player.units.mutant.health;
	}
	
	this.blood.particleOptions.color = new Color(0x71A818);
	this.projectileLife = this.shootingRange/this.projectileSpeed;
};
Mutant.prototype = Object.create(Unit.prototype);
function Helicopter( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "helicopter", this.type);
	
	if(this.team == 1){
		this.health += game.player.units.helicopter.health;
		this.cadency -= game.player.units.helicopter.cadency;
		this.defence -= game.player.units.helicopter.defence;
	}
	
	this.blood.particleOptions.color = new Color(0x878284);
	this.projectileLife = this.shootingRange/this.projectileSpeed;
};
Helicopter.prototype = Object.create(Unit.prototype);
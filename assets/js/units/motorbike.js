function Motorbike( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "motorbike", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.motorbike.attack;
		this.health += game.player.units.motorbike.health;
		this.reloadTime -= game.player.units.motorbike.reloadTime;
	}
	this.blood.particleOptions.color = new Color(0x878284);
	this.projectileLife = this.shootingRange/this.projectileSpeed;
};
Motorbike.prototype = Object.create(Unit.prototype);
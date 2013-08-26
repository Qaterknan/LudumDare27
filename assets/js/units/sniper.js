function Sniper( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "sniper", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.sniper.attack;
		this.reloadTime -= game.player.units.sniper.reloadTime;
		this.cadency -= game.player.units.sniper.cadency;
	}
	this.projectileLife = this.shootingRange/this.projectileSpeed;
};
Sniper.prototype = Object.create(Unit.prototype);
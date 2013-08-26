function Cannon( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "cannon", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.cannon.attack;
		this.health += game.player.units.cannon.health;
		this.defence -= game.player.units.cannon.defence;
	}
};
Cannon.prototype = Object.create(Unit.prototype);
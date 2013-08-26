function Mutant( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "mutant", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.mutant.attack;
		this.speed += game.player.units.mutant.speed;
		this.health += game.player.units.mutant.health;
	}
};
Mutant.prototype = Object.create(Unit.prototype);
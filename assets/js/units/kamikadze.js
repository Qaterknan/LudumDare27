function Kamikadze( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "kamikadze", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.kamikadze.attack;
		this.health += game.player.units.kamikadze.health;
		this.speed += game.player.units.kamikadze.speed;
	}
};
Kamikadze.prototype = Object.create(Unit.prototype);
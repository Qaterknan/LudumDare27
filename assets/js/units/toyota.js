function Toyota( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "toyota", this.type);
	
	if(this.team == 1){
		this.defence -= game.player.units.toyota.defence;
		this.speed += game.player.units.toyota,speed;
		this.cadency -= game.player.units.toyota.cadency;
	}
};
Toyota.prototype = Object.create(Unit.prototype);
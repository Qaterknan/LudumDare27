function Toyota( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "toyota", this.type);
	
};
Toyota.prototype = Object.create(Unit.prototype);
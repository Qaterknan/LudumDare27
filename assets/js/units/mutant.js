function Mutant( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "mutant", this.type);
};
Mutant.prototype = Object.create(Unit.prototype);
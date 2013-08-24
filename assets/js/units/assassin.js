function Assassin( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "assassin", this.type);
	
};
Assassin.prototype = Object.create(Unit.prototype);
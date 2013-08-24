function Motorbike( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "motorbike", this.type);
	
};
Motorbike.prototype = Object.create(Unit.prototype);
function Cannon( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "cannon", this.type);
	
};
Cannon.prototype = Object.create(Unit.prototype);
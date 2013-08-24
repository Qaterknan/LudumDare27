function Helicopter( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "helicopter", this.type);
	
};
Helicopter.prototype = Object.create(Unit.prototype);
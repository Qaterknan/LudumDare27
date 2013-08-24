function Rifleman( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "rifleman", this.type);
	
};
Rifleman.prototype = Object.create(Unit.prototype);
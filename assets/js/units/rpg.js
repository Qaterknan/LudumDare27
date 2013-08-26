function RPG( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "rpg", this.type);
	
};
RPG.prototype = Object.create(Unit.prototype);
function Kamikadze( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "kamikadze", this.type);
	
};
Kamikadze.prototype = Object.create(Unit.prototype);
function Sniper( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "sniper", this.type);
	
};
Sniper.prototype = Object.create(Unit.prototype);
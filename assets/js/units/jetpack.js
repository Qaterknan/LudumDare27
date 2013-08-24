function Jetpack( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "jetpack", this.type);
	
};
Jetpack.prototype = Object.create(Unit.prototype);
function Robot( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "iso" : options.type;
	
	game.NPCs.give(this, "robot", this.type);
	
};
Robot.prototype = Object.create(Unit.prototype);
function Robot( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "robot", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.robot.attack;
		this.health += game.player.units.robot.health;
		this.defence -= game.player.units.robot.defence;
	}
};
Robot.prototype = Object.create(Unit.prototype);
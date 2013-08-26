function RPG( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "rpg", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.robot.attack;
		this.speed += game.player.units.robot.speed;
		this.reloadTime -= game.player.units.robot.reloadTime;
	}
};
RPG.prototype = Object.create(Unit.prototype);
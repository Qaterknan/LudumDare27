function Robot( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "robot", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.robot.attack;
		this.health += game.player.units.robot.health;
		this.defence -= game.player.units.robot.defence;
	}
	
	this.blood.particleOptions.color = new Color(0x878284);
	this.projectileLife = this.shootingRange/this.projectileSpeed;
};
Robot.prototype = Object.create(Unit.prototype);
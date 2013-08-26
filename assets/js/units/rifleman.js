function Rifleman( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "rifleman", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.rifleman.attack;
		this.reloadTime -= game.player.units.rifleman.reloadTime;
		this.defence -= game.player.units.rifleman.defence;
	}
	
};
Rifleman.prototype = Object.create(Unit.prototype);
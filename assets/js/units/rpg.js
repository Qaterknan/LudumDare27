function RPG( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "rpg", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.robot.attack;
		this.speed += game.player.units.robot.speed;
		this.reloadTime -= game.player.units.robot.reloadTime;
	}
	
	this.areaOfDamage = 25;
	this.projectileLife = this.shootingRange/this.projectileSpeed;
};
RPG.prototype = Object.create(Unit.prototype);
RPG.prototype.strike = function ( cil ){ // Sem později přidat particle effects
	this.texture.switchAnimation("striking");
	if(!this.recharging){
		for(var i in game.children){
			if(game.children[i] instanceof Unit){
				if(cil.position.distanceToSquared( game.children[i].position ) < this.areaOfDamage*this.areaOfDamage){
					game.children[i].takeDamage(this);
				}
			}
		};
		this.recharging = true;
		this.addTimeEvent(this.cadency, function (ja){ja.recharging = false;}, false);
	}
};
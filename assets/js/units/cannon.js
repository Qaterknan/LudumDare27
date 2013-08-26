function Cannon( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "cannon", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.cannon.attack;
		this.health += game.player.units.cannon.health;
		this.defence -= game.player.units.cannon.defence;
	}
	
	this.areaOfDamage = 80;
};
Cannon.prototype = Object.create(Unit.prototype);
Cannon.prototype.strike = function ( cil ){ // Sem později přidat particle effects
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
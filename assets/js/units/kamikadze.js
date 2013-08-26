function Kamikadze( options ){
	Unit.call(this, options);
	
	this.type = options.type === undefined ? "flat" : options.type;
	
	game.NPCs.give(this, "kamikadze", this.type);
	
	if(this.team == 1){
		this.attack += game.player.units.kamikadze.attack;
		this.health += game.player.units.kamikadze.health;
		this.speed += game.player.units.kamikadze.speed;
	}
	
	this.areaOfDamage = 100;
	this.blood.particleOptions.color = new Color(0x878284);
	this.projectileLife = this.shootingRange/this.projectileSpeed;
};
Kamikadze.prototype = Object.create(Unit.prototype);
Kamikadze.prototype.strike = function ( cil ){ // Sem později přidat particle effects
	this.texture.switchAnimation("striking");
	for(var i in game.children){
		if(game.children[i] instanceof Unit){
			if(this.position.distanceToSquared( game.children[i].position ) < this.areaOfDamage*this.areaOfDamage){
				game.children[i].takeDamage(this);
			}
		}
	};
	this.dying = true;
};
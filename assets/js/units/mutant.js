function Mutant( options ){
	Unit.call(this, options);
	
	this.name = "mutant";
	this.width = 54;
	this.height = 79;
	
	this.texture = new Texture(game.textures.mutant,{
		totalFrames : 5,
		currentAnimation : "walking",
		animations : {
			walking : {
				start : 0,
				end : 3,
				speed : 200,
			},
			standing : {
				start:0,
				end:0,
				speed : 200,
			},
		},
	});
	
	this.health = 150;
	this.attack = 30;
	this.speed = 0.5;
	this.cadency = 250;
	this.defence = 0.75;
	
	this.shootingRange = false;
	
	this.criticals = {
		toyota : 1.5,
		canon : 2,
		motorbike : 2,
		rpg : 2,
	};
};
Mutant.prototype = Object.create(Unit.prototype);
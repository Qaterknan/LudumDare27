function Rifleman( options ){
	Unit.call(this, options);
	
	this.name = "rifleman";
	this.width = 65;
	this.height = 81;
	
	this.texture = new Texture(game.textures.rifleman,{
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
			shooting : {
				start:3,
				end:4,
				speed:200
			},
		},
	});
	
	this.health = 100;
	this.attack = 2;
	this.speed = 0.8;
	this.cadency = 70;
	this.defence = 0.8;
	
	this.shootingRange = 200;
	this.scanRange = 250;
	this.reloadTime = 200;
	this.clipSize = 32;
	
};
Rifleman.prototype = Object.create(Unit.prototype);
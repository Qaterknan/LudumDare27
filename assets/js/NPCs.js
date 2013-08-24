function NPCs( textures ){
	
	// MUTANT
	
	var mutantTextureIso = new Texture(textures.mutIso, {
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
	var mutantTextureFlat = new Texture(textures.mutFlat);
	this.mutant = {
		name : "Mutant",
		description : "Random mutant",
		isoWidth : 54,
		isoHeight : 79,
		flatWidth : 40,
		flatHeight : 40,
		health : 150,
		attack : 30,
		speed : 0.5,
		cadency : 250,
		defence : 0.75,
		shootingRange : false,
		scanRange : 100,
		reloadTime : false,
		clipSize : false,
		criticals : {
			Toyota : 1.5,
			Canon : 2,
			Motorbike : 2,
			RPG : 2,
		},
		isoTexture : mutantTextureIso,
		flatTexture : mutantTextureFlat,
	};
	
	// RIFLEMAN
	
	var riflemanTextureIso = new Texture(textures.rifleIso,{
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
	var riflemanTextureFlat = new Texture(textures.rifleFlat);
	this.rifleman = {
		name : "Rifleman",
		description : "Random rifleman",
		isoWidth : 65,
		isoHeight : 81,
		flatWidth : 40,
		flatHeight : 40,
		health : 100,
		attack : 2,
		speed : 1,
		cadency : 70,
		defence : 0.8,
		shootingRange : 200,
		scanRange : 250,
		reloadTime : 200,
		clipSize : 32,
		criticals : {
			Mutant : 1.5,
			Jetpack : 1.5,
			RPG : 1.5,
			Kamikadze : 2,
		},
		isoTexture : riflemanTextureIso,
		flatTexture : riflemanTextureFlat,
	};
	
	// ASSASSIN
	
	var assassinTextureIso = new Texture(textures.assinIso, {
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
			striking : {
				start:3,
				end:4,
				speed:200
			},
		},
	});
	var assassinTextureFlat = new Texture(textures.assinFlat);
	this.assassin = {
		name : "Assassin",
		description : "Deadly assassin",
		isoWidth : 74,
		isoHeight : 80,
		flatWidth : 40,
		flatHeight : 40,
		health : 200,
		attack : 50,
		speed : 0.4,
		cadency : 330,
		defence : 0.7,
		shootingRange : false,
		scanRange : 200,
		reloadTime : false,
		clipSize : false,
		criticals : {
			Rifleman : 1.5,
			Toyota : 1.5,
			Canon : 1.5,
			RPG : 2,
			Sniper : 1.5,
		},
		isoTexture : assassinTextureIso,
		flatTexture : assassinTextureFlat,
	};
	
	// CANNON
	
	var cannonTextureIso = new Texture(textures.cannonIso, {
		totalFrames : 4,
		currentAnimation : "walking",
		animations : {
			walking : {
				start : 0,
				end : 1,
				speed : 200,
			},
			standing : {
				start:0,
				end:0,
				speed : 200,
			},
			striking : {
				start:2,
				end:3,
				speed:200
			},
		},
	});
	var cannonTextureFlat = new Texture(textures.cannonFlat);
	this.cannon = {
		name : "Cannon",
		description : "Mighty cannon",
		isoWidth : 115,
		isoHeight : 62,
		flatWidth : 40,
		flatHeight : 40,
		health : 350,
		attack : 300,
		speed : 0.25,
		cadency : 2500,
		defence : 0.5,
		shootingRange : 500,
		scanRange : 500,
		reloadTime : 1500,
		clipSize : 1,
		criticals : {
			Rifleman : 1.5,
			Toyota : 1.5,
			Helicopter : 2,
			Motorbike : 1.5,
			Sniper : 1.5,
			Robot : 1.5,
		},
		isoTexture : cannonTextureIso,
		flatTexture : cannonTextureFlat,
	};
	
	// JETPACK
	
	var jetpackTextureIso = new Texture(textures.jetIso, {
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
			striking : {
				start:3,
				end:4,
				speed:200
			},
		},
	});
	var jetpackTextureFlat = new Texture(textures.jetFlat);
	this.jetpack = {
		name : "Jetpack",
		description : "Dominate the skies!",
		isoWidth : 58,
		isoHeight : 59,
		flatWidth : 40,
		flatHeight : 40,
		health : 80,
		attack : 3,
		speed : 5,
		cadency : 80,
		defence : 0.9,
		shootingRange : 50,
		scanRange : 75,
		reloadTime : 200,
		clipSize : 32,
		criticals : {
			Mutant : 2,
			Assassin : 1.5,
			Motorbike : 1.5,
			RPG : 2,
			Kamikadze : 1.5,
			Robot : 2,
		},
		isoTexture : jetpackTextureIso,
		flatTexture : jetpackTextureFlat,
	};
	
	// TOYOTA
	
	var toyotaTextureIso = new Texture(textures.toyIso, {
		totalFrames : 6,
		currentAnimation : "walking",
		animations : {
			walking : {
				start : 0,
				end : 1,
				speed : 200,
			},
			standing : {
				start:0,
				end:0,
				speed : 200,
			},
			shooting : {
				start:2,
				end:5,
				speed:200
			},
		},
	});
	var toyotaTextureFlat = new Texture(textures.toyFlat);
	this.toyota = {
		name : "Toyota",
		description : "Dakadakadakadaka!",
		isoWidth : 147,
		isoHeight : 103,
		flatWidth : 40,
		flatHeight : 40,
		health : 300,
		attack : 2,
		speed : 8,
		cadency : 50,
		defence : 0.5,
		shootingRange : 300,
		scanRange : 325,
		reloadTime : 1000,
		clipSize : 128,
		criticals : {
			Rifleman : 1.5,
			Jetpack : 1.5,
			Kamikadze : 1.5,
			Sniper : 1.5,
		},
		isoTexture : toyotaTextureIso,
		flatTexture : toyotaTextureFlat,
	};
	
	// HELICOPTER
	
	var helicopterTextureIso = new Texture(textures.heliIso, {
		totalFrames : 8,
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
				start:4,
				end:7,
				speed:200
			},
		},
	});
	var helicopterTextureFlat = new Texture(textures.heliFlat);
	this.helicopter = {
		name : "Helicopter",
		description : "Because planes are too mainstream!",
		isoWidth : 154,
		isoHeight : 82,
		flatWidth : 40,
		flatHeight : 40,
		health : 250,
		attack : 8,
		speed : 10,
		cadency : 70,
		defence : 0.7,
		shootingRange : 250,
		scanRange : 280,
		reloadTime : 2000,
		clipSize : 256,
		criticals : {
			Mutant : 2,
			Assassin : 1.5,
			Rifleman : 1.5,
			Toyota : 1.5,
			Motorbike : 1.5,
			Kamikadze : 2,
			Robot : 2,
		},
		isoTexture : helicopterTextureIso,
		flatTexture : helicopterTextureFlat,
	};
	
	// MOTORBIKE
	
	var motorbikeTextureIso = new Texture(textures.motoIso, {
		totalFrames : 4,
		currentAnimation : "walking",
		animations : {
			walking : {
				start : 0,
				end : 1,
				speed : 200,
			},
			standing : {
				start:0,
				end:0,
				speed : 200,
			},
			shooting : {
				start:2,
				end:3,
				speed:200
			},
		},
	});
	var motorbikeTextureFlat = new Texture(textures.motoFlat);
	this.motorbike = {
		name : "Motorbike",
		description : "Side carts are not out-dated!",
		isoWidth : 80,
		isoHeight : 80,
		flatWidth : 40,
		flatHeight : 40,
		health : 200,
		attack : 3,
		speed : 10,
		cadency : 70,
		defence : 0.7,
		shootingRange : 250,
		scanRange : 280,
		reloadTime : 500,
		clipSize : 64,
		criticals : {
			Assassin : 1.5,
			Rifleman : 1.5,
			Toyota : 1.5,
			Robot : 1.5,
		},
		isoTexture : motorbikeTextureIso,
		flatTexture : motorbikeTextureFlat,
	};
};

NPCs.prototype.switchType = function (context, type){
	context.type = type;
	if(type == "iso"){
		context.width = context.isoWidth;
		context.height = context.isoHeight;
		context.texture = context.isoTexture;
	}
	else{
		context.width = context.flatWidth;
		context.height = context.flatHeight;
		context.texture = context.flatTexture;
	}
};
NPCs.prototype.give = function ( context,which, type ){
	for(var i in this[which]){
		context[i] = this[which][i];
	};
	this.switchType(context, type);
};
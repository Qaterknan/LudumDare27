function NPCs( textures ){
	
	// MUTANT
	
	var mutantTextureIso = new Texture(textures.mutIso, {
		totalFrames : 5,
		currentAnimation : "walking",
		animations : {
			walking : {
				start : 0,
				end : 4,
				speed : 200,
			},
			standing : {
				start:0,
				end:0,
				speed : 200,
			},
			striking : {
				start : 3,
				end : 4,
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
		flatWidth : 65,
		flatHeight : 65,
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
			Cannon : 2,
			Motorbike : 2,
			RPG : 2,
		},
		price : 1,
		amountPerSquad : 15,
		powerUps : {
			attack : {
				price : 1,
				increase : 2,
				maximum : 3,
				bonus : 3,
			},
			health : {
				price : 1,
				increase : 1,
				maximum : 6,
				bonus : 5,
			},
			speed : {
				price : 5,
				increase : 2,
				maximum : 2,
				bonus : 0.02,
			},
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
		description : "I used to shoot rabbits",
		isoWidth : 65,
		isoHeight : 81,
		flatWidth : 70,
		flatHeight : 70,
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
		price : 10,
		amountPerSquad : 10,
		powerUps : {
			attack : {
				price : 1,
				increase : 2,
				maximum : 3,
				bonus : 0.5,
			},
			reloadTime : {
				price : 3,
				increase : 2,
				maximum : 4,
				bonus : 5
			},
			defence : {
				price : 1,
				increase : 1,
				maximum : 3,
				bonus:0.01,
			},
		},
		isoTexture : riflemanTextureIso,
		flatTexture : riflemanTextureFlat,
	};
	
	// ASSASSIN
	
	var assassinTextureIso = new Texture(textures.assinIso, {
		totalFrames : 6,
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
				start:4,
				end:5,
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
		flatWidth : 75,
		flatHeight : 75,
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
			Cannon : 1.5,
			RPG : 2,
			Sniper : 1.5,
		},
		price : 40,
		amountPerSquad : 5,
		powerUps : {
			attack : {
				price : 3,
				increase : 4,
				maximum : 3,
				bonus : 8,
			},
			health : {
				price : 1,
				increase : 1,
				maximum : 5,
				bonus : 5,
			},
			cadency : {
				price : 2,
				increase : 2,
				maximum : 2,
				bonus : 10,
			},
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
			shooting : {
				start:2,
				end:3,
				speed:300,
			},
		},
	});
	var cannonTextureFlat = new Texture(textures.cannonFlat);
	this.cannon = {
		name : "Cannon",
		description : "Mighty cannon",
		isoWidth : 115,
		isoHeight : 62,
		flatWidth : 85,
		flatHeight : 85,
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
		price : 800,
		amountPerSquad : 1,
		powerUps : {
			attack : {
				price : 5,
				increase : 6,
				maximum : 4,
				bonus : 5,
			},
			health : {
				price : 5,
				increase : 4,
				maximum : 3,
				bonus : 5,
			},
			defence : {
				price : 5,
				increase : 7,
				maximum : 5,
				bonus : 0.01,
			},
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
				end : 4,
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
	var jetpackTextureFlat = new Texture(textures.jetFlat);
	this.jetpack = {
		name : "Jetpack",
		description : "Dominate the skies!",
		isoWidth : 58,
		isoHeight : 59,
		flatWidth : 60,
		flatHeight : 60,
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
		price : 150,
		amountPerSquad : 4,
		powerUps : {
			attack : {
				price : 3,
				increase : 2,
				maximum : 3,
				bonus : 1,
			},
			health : {
				price : 5,
				increase : 10,
				maximum : 2,
				bonus : 5,
			},
			speed : {
				price : 1,
				increase : 3,
				maximum : 5,
				bonus : 0.01,
			},
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
				end : 2,
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
				speed:125
			},
		},
	});
	var toyotaTextureFlat = new Texture(textures.toyFlat);
	this.toyota = {
		name : "Toyota",
		description : "Dakadakadakadaka!",
		isoWidth : 147,
		isoHeight : 103,
		flatWidth : 125,
		flatHeight : 125,
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
		price : 600,
		amountPerSquad : 2,
		powerUps : {
			cadency : {
				price : 5,
				increase : 8,
				maximum : 4,
				bonus : 2,
			},
			speed : {
				price : 5,
				increase : 4,
				maximum : 5,
				bonus : 0.02,
			},
			defence : {
				price : 12,
				increase : 8,
				maximum : 2,
				bonus : 0.05,
			},
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
				end : 4,
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
				speed:75,
			},
		},
	});
	var helicopterTextureFlat = new Texture(textures.heliFlat);
	this.helicopter = {
		name : "Helicopter",
		description : "Because planes are too mainstream!",
		isoWidth : 154,
		isoHeight : 82,
		flatWidth : 110,
		flatHeight : 110,
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
		price : 750,
		amountPerSquad : 1,
		powerUps : {
			health : {
				price : 4,
				increase : 10,
				maximum : 3,
				bonus : 5,
			},
			cadency : {
				price : 10,
				increase : 5,
				maximum : 3,
				bonus : 2,
			},
			defence : {
				price : 5,
				increase : 7,
				maximum : 5,
				bonus : 0.01,
			},
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
				end : 2,
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
		flatWidth : 80,
		flatHeight : 80,
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
		price : 500,
		amountPerSquad : 5,
		powerUps : {
			attack : {
				price : 5,
				increase : 6,
				maximum : 4,
				bonus : 0.5,
			},
			health : {
				price : 5,
				increase : 4,
				maximum : 3,
				bonus : 5,
			},
			reloadTime : {
				price : 5,
				increase : 7,
				maximum : 5,
				bonus : 10,
			},
		},
		isoTexture : motorbikeTextureIso,
		flatTexture : motorbikeTextureFlat,
	};
	
	// RPG
	
	var rpgTextureIso = new Texture(textures.rpgIso, {
		totalFrames : 8,
		currentAnimation : "walking",
		animations : {
			walking : {
				start : 0,
				end : 4,
				speed : 200,
			},
			standing : {
				start:0,
				end:0,
				speed : 200,
			},
			shooting : {
				start:5,
				end:7,
				speed:200
			},
		},
	});
	var rpgTextureFlat = new Texture(textures.rpgFlat);
	this.rpg = {
		name : "RPG",
		description : "Too bad you were sitting in the car",
		isoWidth : 99,
		isoHeight : 77,
		flatWidth : 90,
		flatHeight : 90,
		health : 100,
		attack : 250,
		speed : 0.3,
		cadency : 6500,
		defence : 1,
		shootingRange : 300,
		scanRange : 320,
		reloadTime : 2000,
		clipSize : 1,
		criticals : {
			Toyota : 2,
			Cannon : 2,
			Helicopter : 2,
			Motorbike : 1.5,
			Robot : 2,
		},
		price : 300,
		amountPerSquad : 4,
		powerUps : {
			attack : {
				price : 5,
				increase : 6,
				maximum : 4,
				bonus : 5,
			},
			speed : {
				price : 5,
				increase : 4,
				maximum : 3,
				bonus : 0.1,
			},
			reloadTime : {
				price : 7,
				increase : 7,
				maximum : 7,
				bonus : 100,
			},
		},
		isoTexture : rpgTextureIso,
		flatTexture : rpgTextureFlat,
	};
	
	// KAMIKADZE
	
	var kamikadzeTextureIso = new Texture(textures.kamiIso, {
		totalFrames : 3,
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
				start:1,
				end:2,
				speed:200
			},
		},
	});
	var kamikadzeTextureFlat = new Texture(textures.kamiFlat);
	this.kamikadze = {
		name : "Kamikadze",
		description : "Explodes on contact!",
		isoWidth : 33,
		isoHeight : 36,
		flatWidth : 40,
		flatHeight : 40,
		health : 200,
		attack : 400,
		speed : 7,
		cadency : 1,
		defence : 0.9,
		shootingRange : false,
		scanRange : 300,
		reloadTime : false,
		clipSize : false,
		criticals : {
			Mutant : 2,
			Assassin : 1.5,
			Cannon : 1.5,
			Motorbike : 1.5,
			RPG : 1.5,
			Robot : 1.5,
		},
		price : 500,
		amountPerSquad : 1,
		powerUps : {
			attack : {
				price : 3,
				increase : 4,
				maximum : 4,
				bonus : 20,
			},
			health : {
				price : 5,
				increase : 5,
				maximum : 5,
				bonus : 5,
			},
			speed : {
				price : 3,
				increase : 7,
				maximum : 3,
				bonus : 0.03,
			},
		},
		isoTexture : kamikadzeTextureIso,
		flatTexture : kamikadzeTextureFlat,
	};
	
	// SNIPER
	
	var sniperTextureIso = new Texture(textures.sniIso, {
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
	var sniperTextureFlat = new Texture(textures.sniFlat);
	this.sniper = {
		name : "Sniper",
		description : "You can't kill what you can't see.",
		isoWidth : 74,
		isoHeight : 70,
		flatWidth : 70,
		flatHeight : 70,
		health : 150,
		attack : 150,
		speed : 0.75,
		cadency : 2500,
		defence : 1,
		shootingRange : 600,
		scanRange : 600,
		reloadTime : 1000,
		clipSize : 6,
		criticals : {
			Mutant : 1.5,
			Rifleman : 1.5,
			Jetpack : 2,
			Helicopter : 1.5,
			Motorbike : 1.5,
			RPG : 2,
			Kamikadze : 1.5,
		},
		price : 700,
		amountPerSquad : 1,
		powerUps : {
			attack : {
				price : 4,
				increase : 6,
				maximum : 5,
				bonus : 5,
			},
			reloadTime : {
				price : 8,
				increase : 6,
				maximum : 5,
				bonus : 20,
			},
			cadency : {
				price : 10,
				increase : 7,
				maximum : 5,
				bonus : 100,
			},
		},
		isoTexture : sniperTextureIso,
		flatTexture : sniperTextureFlat,
	};
	
	// ROBOT
	
	var robotTextureIso = new Texture(textures.roboIso, {
		totalFrames : 6,
		currentAnimation : "walking",
		animations : {
			walking : {
				start : 0,
				end : 5,
				speed : 200,
			},
			standing : {
				start:0,
				end:0,
				speed : 200,
			},
			shooting : {
				start:0,
				end:5,
				speed:200
			},
		},
	});
	var robotTextureFlat = new Texture(textures.roboFlat);
	this.robot = {
		name : "Robot",
		description : "Quicker than animation sequence!",
		isoWidth : 74,
		isoHeight : 51,
		flatWidth : 60,
		flatHeight : 60,
		health : 160,
		attack : 4,
		speed : 2.5,
		cadency : 10,
		defence : 0.5,
		shootingRange : 350,
		scanRange : 350,
		reloadTime : 300,
		clipSize : 256,
		criticals : {
			Mutant : 1.5,
			Assassin : 2,
			Rifleman : 1.5,
			Toyota : 1.5,
			Sniper : 2,
		},
		price : 1000,
		amountPerSquad : 2,
		powerUps : {
			attack : {
				price : 15,
				increase : 13,
				maximum : 4,
				bonus : 0.25,
			},
			health : {
				price : 5,
				increase : 8,
				maximum : 3,
				bonus : 5,
			},
			defence : {
				price : 6,
				increase : 7,
				maximum : 5,
				bonus : 0.01,
			},
		},
		isoTexture : robotTextureIso,
		flatTexture : robotTextureFlat,
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
		if(i == "isoTexture" || i == "flatTexture"){
			console.log("nový objekt?");
			context[i] = Object.create( this[which][i] );
			continue;
		}
		context[i] = this[which][i];
	};
	this.switchType(context, type);
};
NPCs.prototype.getUnitByName = function ( which ){
	return this[which.toLowerCase()];
};
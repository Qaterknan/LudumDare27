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
		flatWidth : 20,
		flatHeight : 20,
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
		flatWidth : 20,
		flatHeight : 20,
		health : 100,
		attack : 2,
		speed : 0.8,
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
};
NPCs.prototype.give = function ( context,which, mode ){
	for(var i in this[which]){
		context[i] = this[which][i];
	};
	if(mode == "iso"){
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

function Enviroment(textures , options ){
	GUIObject.call(this, options);
	
	this.possibleTextures = {
		bush : new Texture(textures.bush),
		acidPool : new Texture(textures.acidPool),
		tires : new Texture(textures.tires),
		tree : new Texture(textures.tree),
		trap : new Texture(textures.trap),
		wire : new Texture(textures.wire),
		wreck : new Texture(textures.wreck),
	};
	
	this.possibleDimensions = {
		bush : [47,40],
		acidPool : [161,95],
		tires : [100,91],
		tree : [36,91],
		trap : [41,38],
		wire : [59,48],
		wreck : [109,50],
	};
	
};
Enviroment.prototype = Object.create( GUIObject.prototype );
Enviroment.prototype.getRandom = function (positionMin, positionMax){
	var num = Math.round(Math.random()*6);
	var nyni = 0;
	var obj = new Object2({});
	for(var i in this.possibleTextures){
		if(nyni == num){
			obj.texture = this.possibleTextures[i];
			obj.width = this.possibleDimensions[i][0];
			obj.height = this.possibleDimensions[i][1];
			break;
		}
		nyni++;
	};
	obj.position.x = (positionMax.x-positionMin.x)*Math.random()+positionMin.x;
	obj.position.y = (positionMax.y-positionMin.y)*Math.random()+positionMin.y;console.log(obj);
	return obj;
};
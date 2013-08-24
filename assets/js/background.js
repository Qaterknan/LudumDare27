function Background( options ){
	Object2.call(this, options);
	
	this.color = options.color === undefined ? "#556000" : options.color;
	this.position = new Vector2(20,20);
	this.zIndex = -1;
	this.collidable = false;
	this.id = "BG";
	this.width = options.width === undefined ? game.width-40 : options.width;
	this.height = options.height === undefined ? game.height-40 : options.height;
};
Background.prototype = Object.create( Object2.prototype );

Background.prototype.tick = function (){
	return;
};

Background.prototype.render = function (ctx){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.position.x,this.position.y,this.width, this.height);
};

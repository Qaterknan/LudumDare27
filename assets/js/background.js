function Background( options ){
	Object2.call(this, options);
	
	this.color = options.color === undefined ? "#556000" : options.color;
	this.position = new Vector2(20,20);
	this.zIndex = -1;
	this.collidable = false;
	this.id = "BG";
};
Background.prototype = Object.create( Object2.prototype );
Background.prototype.tick = function (){
	this.width = game.canvas.width-40;
	this.height = game.canvas.height-40;
};
Background.prototype.render = function (ctx){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.position.x,this.position.y,this.width, this.height);
};

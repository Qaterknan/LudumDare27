function Background( options ){
	Object2.call(this, options);
	
	this.color = options.color === undefined ? "#556000" : options.color;
	this.position = options.position === undefined ? new Vector2() : options.position;
	this.zIndex = -1000;
	this.collidable = false;
	this.id = "BG";
	this.width = options.width === undefined ? game.width : options.width;
	this.height = options.height === undefined ? game.height : options.height;
	
	// Because fuck you!
	this.playerHealth = 100;
	this.enemyHealth = 100;
	
};
Background.prototype = Object.create( Object2.prototype );

Background.prototype.tick = function (){
};

Background.prototype.render = function (ctx){
	ctx.fillStyle = this.color;
	ctx.save();
	ctx.translate(-this.width/2,-this.height/2);
	if(!this.texture)
		ctx.fillRect(this.position.x,this.position.y,this.width, this.height);
	else
		this.texture.draw(ctx,this.width,this.height);
	ctx.restore();
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(this.position.x,this.position.y, 10,10);
};

Background.prototype.damage = function (howMuch, who){
	if(who.position.x > 0 && who.team == 1){
		this.enemyHealth -= Math.ceil(10/who.amountPerSquad);
		who.parent.remove(who);
		for(var i in game.children){
			if(game.children[i] instanceof Unit){
				if(game.children[i].target == who){
					game.children[i].target = false;
				}
			}
		};
	}
	if(who.position.x < 0 && who.team == 2)
		this.playerHealth -= Math.ceil(10/who.amountPerSquad);
		who.parent.remove(who);
		for(var i in game.children){
			if(game.children[i] instanceof Unit){
				if(game.children[i].target == who){
					game.children[i].target = false;
				}
			}
		};
};
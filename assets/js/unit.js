function Unit( options ){
	Object2.call(this, options);
	
	this.color = options.color === undefined ? "#ff0000" : options.color;
	this.team = options.team === undefined ? 0 : options.team;
	
	this.health = options.health === undefined ? 10 : options.health;
	this.attack = options.attack === undefined ? 1 : options.attack;
	this.speed = options.speed === undefined ? 1 : options.speed;
	
	this.scanRange = options.scanRange === undefined ? 100 : options.scanRange;
	this.collisionType = "hitbox";
	this.hitbox.x = -this.width/2;
	this.hitbox.y = -this.height/2;
	this.logged = false;
	this.dying = false;
	this.target = false;
};
Unit.prototype = Object.create( Object2.prototype );
Unit.prototype.render = function (ctx){
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.translate(this.position.x,this.position.y);
		ctx.save();
		ctx.translate(-this.width/2,-this.height/2);
		ctx.rotate(this.rotation);
		ctx.fillRect(-this.width/2,-this.height/2,this.width,this.height);
		ctx.restore();
	ctx.restore();
};
Unit.prototype.move = function (){
	if(this.target) var vecT = this.lookAt(this.target.position);
	if(!this.logged && vecT !== undefined){
		this.logged = true;
		console.log(this.color, vecT);
	}
	var dx = Math.cos(this.rotation)*this.speed;
	var dy = Math.sin(this.rotation)*this.speed;
	this.position.x += dx;
	this.position.y += dy;
	var colls = game.checkCollisions(this);
	if(colls.length){
		this.position.x -= dx;
		this.position.y -= dy;
		for(var i in colls){
			if(colls[i] == this.target){
				this.target.takeDamage(this.attack);
				if(this.target.dying) this.target = false;
			}
		}
	}
};
Unit.prototype.scan = function (){
	var readyToGo = false;
	for(var i in game.children){
		var child = game.children[i];
		if(!(child instanceof Unit)) continue;
		if(child.team == this.team || child == this) continue;
		if(child.position.distanceToSquared( this.position ) < this.scanRange*this.scanRange){
			if(child == this.target) continue;
			this.addTarget(child);
		}
	};
	if(!this.target){
		if(this.team == 1){
			this.rotation = 0;
			readyToGo = true;
		}
		if(this.team == 2){
			this.rotation = PI;
			readyToGo = true;
		}
	}
	else{
		readyToGo = true;
	}
	if(readyToGo) this.move();
};
Unit.prototype.tick = function (){
	if(this.dying){
		this.parent.remove(this);
	}
	this.scan();
};
Unit.prototype.takeDamage = function ( amount ){
	this.health -= amount;
	if(this.health <= 0) this.dying = true;
};
Unit.prototype.addTarget = function ( cil ){
	if(!this.target){
		this.target = cil;
		console.log(this.color, this.target);
	}
	else {
		var vzdalenost1 = new Vector2().subVectors(cil.position, this.position);
		var vzdalenost2 = new Vector2().subVectors(this.target.position, this.position);
		if(vzdalenost1.lengthSq() > vzdalenost2.lengthSq){
			this.target = cil;
			console.log(this, this.target);
		}
	}
};
function Unit( options ){
	Object2.call(this, options);
	
	this.color = options.color === undefined ? "#ff0000" : options.color;
	this.team = options.team === undefined ? 0 : options.team;
	this.angle = 0;
	
	this.health = options.health === undefined ? 10 : options.health;
	this.attack = options.attack === undefined ? 1 : options.attack;
	this.speed = options.speed === undefined ? 1 : options.speed;
	this.cadency = options.cadency === undefined ? 100 : options.cadency;
	this.recharging = false;
	this.shootingRange = options.shootingRange === undefined ? false : options.shootingRange;
	this.reloadTime = options.reloadTime === undefined ? 100 : options.reloadTime;
	this.reloading = false;
	this.clipSize = options.clipSize === undefined ? 30 : options.clipSize;
	this.clip = this.clipSize;
	this.defence = options.defence === undefined ? 1 : options.defence;
	this.criticals = {};
	
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
	if(this.texture){
		if(this.team == 2) this.texture.flip = "x";
		Object2.prototype.render.call(this,ctx);
		return;
	};
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.translate(this.position.x,this.position.y);
		ctx.save();
		ctx.rotate(this.rotation);
		ctx.translate(-this.width/2,-this.height/2);
		ctx.fillRect(0,0,this.width,this.height);
		ctx.restore();
	ctx.restore();
};
Unit.prototype.move = function (){
	if(this.target) this.angle = this.getAngle(this.target.position);
	var dx = Math.cos(this.angle)*this.speed;
	var dy = Math.sin(this.angle)*this.speed;
	this.position.x += dx;
	this.position.y += dy;
	var colls = game.checkCollisions(this);
	//~ if(!this.logged){
		//~ this.logged = true;
	//~ }
	if(colls.length){
		this.position.x -= dx;
		this.position.y -= dy;
		for(var i in colls){
			if(colls[i] == this.target){
				this.strike(this.target);
			}
		}
	}
	var bg = game.getChild("BG");
	var inX = this.width/2+this.position.x < bg.width/2 && this.position.x-this.width/2 > -bg.width/2;
	var inY = this.height/2+this.position.y < bg.height/2 && this.position.y-this.height/2 > -bg.height/2;
	if( !(inX && inY) ){
		this.position.x -= dx;
		this.position.y -= dy;
	}
};
Unit.prototype.scan = function (){
	var readyToGo = false;
	var shooting = false;
	for(var i in game.children){
		var child = game.children[i];
		if(!(child instanceof Unit)) continue;
		if(child.team == this.team || child == this) continue;
		if(child.position.distanceToSquared( this.position ) < this.scanRange*this.scanRange){
			if(child == this.target){
				if(!this.shootingRange) continue;
				if(child.position.distanceToSquared( this.position ) < this.shootingRange*this.shootingRange){
					this.shoot(child);
					shooting = true;
				}
				continue;
			}
			this.addTarget(child);
		}
	};
	if(!this.target){
		if(this.team == 1){
			this.angle = 0;
			readyToGo = true;
		}
		if(this.team == 2){
			this.angle = PI;
			readyToGo = true;
		}
	}
	else if(!shooting){
		readyToGo = true;
	}
	if(readyToGo) this.move();
};
Unit.prototype.tick = function (){
	if(game.paused) return;
	if(this.dying){
		this.parent.remove(this);
	}
	this.scan();
};
Unit.prototype.takeDamage = function ( attacker ){// Sem později přidat particle effects
	var critical = attacker.criticals[this.name] === undefined ? 1 : attacker.criticals[this.name];
	var damage = attacker.attack*this.defence*critical;
	if(damage < 0.1) damage = 0.1;
	this.health -= damage;
	if(this.health <= 0){
		this.dying = true;
		console.log("death loop");
		for(var i in game.children){
			if(game.children[i] instanceof Unit){
				if(game.children[i].target == this){
					game.children[i].target = false;
				}
			}
		};
	}
};
Unit.prototype.strike = function ( cil ){ // Sem později přidat particle effects
	if(!this.recharging){
		cil.takeDamage(this);
		this.recharging = true;
		this.addTimeEvent(this.cadency, function (ja){ja.recharging = false;}, false);
	}
};
Unit.prototype.shoot = function ( cil ){ // Sem později přidat particle effects
	if(!this.reloading){
		if(this.clip > 0){
			this.strike( cil );
			this.clip--;
		}
		if(this.clip <= 0){
			this.reloading = true;
			this.addTimeEvent(this.reloadTime, function (ja){ja.reloading = false; ja.clip = ja.clipSize;}, false);
		}
	}
};
Unit.prototype.addTarget = function ( cil ){
	if(cil.dying) return;
	if(!this.target){
		this.target = cil;
	}
	else {
		var vzdalenost1 = new Vector2().subVectors(cil.position, this.position);
		var vzdalenost2 = new Vector2().subVectors(this.target.position, this.position);
		if(vzdalenost1.lengthSq() > vzdalenost2.lengthSq){
			this.target = cil;
		}
	}
};
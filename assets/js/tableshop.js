function TableShop( unit, options ){
	Rectangle.call(this, options);
	var _this =this;
	this.visible = true;
	this.unit = unit;
	// Nadpis
	this.add(new Text({
		position : new Vector2(100,0),
		size : 20,
		value : _this.unit.name,
		color : "#000000",
		font : "sans-serif",
	}));
	// Description
	this.add(new Text({
		position : new Vector2(100,20),
		size : 10,
		value : _this.unit.description,
		color : "#000000",
		font : "sans-serif",
	}));
	// Staty
	this.add(new Text({
		position : new Vector2(100,40),
		size : 16,
		value : "Attack: "+_this.unit.attack+" Defence: "+_this.unit.defence,
		color : "#000000",
		font : "sans-serif",
	}));
	this.add(new Text({
		position : new Vector2(100,60),
		size : 16,
		value : "Health: "+_this.unit.health+" Speed: "+_this.unit.speed,
		color : "#000000",
		font : "sans-serif",
	}));
	var shot = this.unit.shootingRange ? this.unit.shootingRange : "-----";
	this.add(new Text({
		position : new Vector2(100,80),
		size : 16,
		value : "Shooting Range: "+shot,
		color : "#000000",
		font : "sans-serif",
	}));
	// Criticals
	var effective = "";
	var deadly = "";
	for(var i in this.unit.criticals){
		if(this.unit.criticals[i] == 2){
			deadly = deadly + i + " ";
			if(deadly.length > 20){
				deadly = deadly.substr(0,17);
				deadly = deadly + "...";
			}
		}
		else{
			effective = effective + i + " ";
			if(effective.length > 19){
				effective = effective.substr(0,16);
				effective = effective + "...";
			}
		}
	};
	this.add(new Text({
		position : new Vector2(100,100),
		size : 14,
		value : "Effective: "+effective,
		color : "#000000",
		font : "sans-serif",
	}));
	this.add(new Text({
		position : new Vector2(100,120),
		size : 14,
		value : "Deadly: "+deadly,
		color : "#000000",
		font : "sans-serif",
	}));
};
TableShop.prototype = Object.create( Rectangle.prototype );
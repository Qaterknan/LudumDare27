function TableShop( unit, options ){
	Rectangle.call(this, options);
	var _this =this;
	this.visible = true;
	this.unit = unit;
	this.bought = false;
	// Nadpis
	this.add(new Text({
		position : new Vector2(100,0),
		size : 20,
		value : _this.unit.name,
		color : "#000000",
		font : "sans-serif",
	}), "nadpis");
	// Description
	this.add(new Text({
		position : new Vector2(100,20),
		size : 10,
		value : _this.unit.description,
		color : "#000000",
		font : "sans-serif",
		width : 150,
	}), "description");
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
			//~ if(deadly.length > 20){
				//~ deadly = deadly.substr(0,17);
				//~ deadly = deadly + "...";
			//~ }
		}
		else{
			effective = effective + i + " ";
			//~ if(effective.length > 19){
				//~ effective = effective.substr(0,16);
				//~ effective = effective + "...";
			//~ }
		}
	};
	this.add(new Text({
		position : new Vector2(100,107),
		size : 10,
		value : "Effective: "+effective,
		color : "#C77100",
		font : "sans-serif",
		width : 190,
	}), "effective");
	this.add(new Text({
		position : new Vector2(100,128),
		size : 10,
		value : "Deadly: "+deadly,
		color : "#FF0400",
		font : "sans-serif",
		width : 190,
	}), "deadly");
};
TableShop.prototype = Object.create( Rectangle.prototype );
TableShop.prototype.switchMode = function ( bought ){
	if(bought){
		for(var i in this.children){
			this.children[i].visible = (i == "description" || i == "nadpis" || i == "effective" || i == "deadly");
		};
		this.bought = true;
	}
	else{
		for(var i in this.children){
			this.children[i].visible = true;
		};
		this.bought = false;
	}
};
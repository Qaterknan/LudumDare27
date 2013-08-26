function PlacingButton( unit, options ){
	GUIObject.call(this, options);
	
	this.width = 300;
	this.height = 150;
	
	this.pressed = false;
	this.bought = false;
	
	this.rectangle = new Rectangle({
		width : 300,
		height : 150,
		color : "#BFAF99",
	});
	this.add(this.rectangle);
	
	this.secondColor = options.pressedColor === undefined ? "#565656" : options.pressedColor;
	this.unit = unit;
	var pic = options.picture === undefined ? {} : options.picture;
	var pPos = pic.position === undefined ? new Vector2(10,20) : pic.position;
	var pwidth = pic.width === undefined ? 80 : pic.width;
	var pheight = pic.height === undefined ? 100 : pic.height;
	this.picture = new Rectangle({
		position : pPos,
		width : pwidth,
		height : pheight,
		zaIndex : 1,
		texture : Object.create( unit.isoTexture ),
	});
	this.add(this.picture);
	this.ikona = new Rectangle({
		position : new Vector2(260,5),
		width:32,
		height:32,
		texture:Object.create(unit.flatTexture),
	});
	this.add(this.ikona);
	this.ikona.add(new Text({
		value : unit.amountPerSquad,
		color : "#ffffff",
		size : 20,
		position : new Vector2(-10,-5),
		font : "sans-serif",
	}));
	//~ Různé výstupy pro koupenou a nekoupenou jednotku
	this.price = new Text({
		position : new Vector2(0,0),
		value : "Worth "+unit.price+" scrap",
		size : 20,
		color : "#FFF129",
		font : "sans-serif",
		rotation : PI/4,
	});
	this.add(this.price);
		
	this.mouseup = function (){
		for(var i in this.parent.children){
			var sibling = this.parent.children[i];
			if(sibling.pressed){
				sibling.pressed = false;
				sibling.switchColor();
			}
		}
		this.pressed = !this.pressed;
		this.switchColor();
		this.parent.buying(this.unit.name);
	};
	
	this.table = new TableShop(this.unit);
	this.add(this.table, "tableShop");
	
	this.makeIt = new Text({
		position : new Vector2(100,30),
		size : 20,
		value : "Make it: ",
		color: "#000000",
		font : "sans-serif",
		visible : false,
	});
	this.add(this.makeIt);
	this.powerUps = [];
	var poradi = 0;
	for(var i in this.unit.powerUps){
		this.powerUps.push(new PowerUpRow(this.unit, i, {
			position : new Vector2(100,50+20*poradi),
			visible : false,
		}));
		this.add(this.powerUps[poradi]);
		poradi++;
	};
	
	this.switchMode(game.player.hasUnit(unit.name.toLowerCase()));
};
PlacingButton.prototype = Object.create( GUIObject.prototype );
PlacingButton.prototype.switchColor = function (){
	var cashe = this.rectangle.color;
	this.rectangle.color = this.secondColor;
	this.secondColor = cashe;
};
PlacingButton.prototype.switchMode = function ( bought ){
	if(bought){
		this.bought = true;
		this.price.changeText("BOUGHT!");
		this.rectangle.color = "#565656";
		this.secondColor = "#565656";
		this.makeIt.visible = true;
		for(var i = 0; i < this.powerUps.length;i++){
			this.powerUps[i].visible =true;
		};
	}
	else{
		this.bought = false;
		this.price.changeText("Worth "+this.unit.price+" scrap");
		this.rectangle.color = "#BFAF99";
		this.secondColor = "#565656";
		this.makeIt.visible = false;
		for(var i = 0; i < this.powerUps.length;i++){
			this.powerUps[i].visible =false;
		};
	}
	this.table.switchMode(bought);
};
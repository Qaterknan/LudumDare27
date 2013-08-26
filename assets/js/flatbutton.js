function FlatButton( unit, options ){
	GUIObject.call(this, options);
	this.unit = unit;
	this.amount = this.unit.amountPerSquad;
	this.npcsID = this.unit.name.toLowerCase();
	
	this.width = 150,
	this.height = 99,
	this.add(new Rectangle({
		position : new Vector2(0,0),
		color:"#313131",
		width : 150,
		height : 99,
	}));
	
	this.picture = new Rectangle({
		position : new Vector2(5,5),
		texture : Object.create(unit.flatTexture),
		width : 32,
		height : 32,
	});
	this.add(this.picture);
	
	this.add(new Text({
		value : unit.amountPerSquad,
		color : "#ffffff",
		size : 30,
		font : "sans-serif",
		position : new Vector2(70,0),
	}), "unitsLeft");
	var effective = new Rectangle({
		width:150,
		height : 27,
		position : new Vector2(0,38),
		color:"#C77100",
		alpha : 0.5,
	});
	this.add(effective);
	var deadly = new Rectangle({
		width:150,
		height : 27,
		position : new Vector2(0,71),
		color:"#FF0400",
		alpha : 0.5,
	});
	this.add(deadly);
	var effectives = 0;
	var deadlies = 0
	for(var i in this.unit.criticals){
		if(this.unit.criticals[i] == 2){
			deadly.add(new Rectangle({
				position : new Vector2(1+deadlies*26,1),
				width:25,
				height:25,
				texture:Object.create(game.NPCs[i.toLowerCase()].flatTexture),
			}));
			deadlies++;
		}
		else{
			effective.add(new Rectangle({
				position : new Vector2(1+effectives*26,1),
				width:25,
				height:25,
				texture:Object.create(game.NPCs[i.toLowerCase()].flatTexture),
			}));
			effectives++;
		}
	};
	
	this.mouseup = function (){
		if(this.amount > 0){
			game.gui.children.cursor.texture = Object.create(this.unit.flatTexture);
			game.gui.children.cursor.currentName = this.unit.name;
			game.gui.children.cursor.currentHolder = this;
			game.gui.children.cursor.visible = true;
		}
	};
	
};
FlatButton.prototype = Object.create( GUIObject.prototype );
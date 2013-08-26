function Ground( options ){
	Rectangle.call(this, options);
	
	this.width = game.getChild("BG").width*0.4*game.camera.zoom;
	this.height = game.getChild("BG").height*game.camera.zoom;
	this.color = "#ff0000";
	this.alpha = 0.15;
	this.id = "ground";
	
	this.mouseup = function (x,y){
		var curs = game.gui.children.cursor;
		var druh = curs.currentName;
		if(!druh) return;
		var konst = game.NTC[druh];
		var un = new konst({
			position : new Vector2(
				x/game.camera.zoom-game.getChild("BG").width/2,
				y/game.camera.zoom-game.getChild("BG").height/2
			),
			team : 1,
		});
		game.NPCs.switchType(un, "flat");
		game.add(un);
		curs.currentHolder.amount--;
		curs.currentHolder.children.unitsLeft.changeText(curs.currentHolder.amount+"");
		if(curs.currentHolder.amount <= 0){
			curs.currentName = false;
			curs.currentHolder = false;
			curs.visible = false;
		}
	};
	
};
Ground.prototype = Object.create( Rectangle.prototype );
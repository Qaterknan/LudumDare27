function Belt( options ){
	GUIObject.call(this, options);
	
	this.width = 152;
	
	var pocet = 0;
	for(var i in game.player.units){
		this.add(new FlatButton( game.NPCs[i], {
			position : new Vector2(1,1+pocet*100),
		}));
		pocet++;
	};
	this.height = pocet*100;
	this.minimumY = game.canvas.height - this.height;
};
Belt.prototype = Object.create( GUIObject.prototype );
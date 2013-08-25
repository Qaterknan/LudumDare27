{
	preload : function(game){
		game.eventhandler.addMouseControl(1,undefined, function (x,y){
			var pozice = new Vector2(x,y).sub(game.camera.position);
			var bg = game.getChild("BG");
			var inX = pozice.x > bg.position.x && pozice.x < bg.position.x+bg.width;
			var inY = pozice.y > bg.position.y && pozice.y <bg.position.y+bg.height;
			if(inX && inY){
				for(var i in game.gui.children){
					if(game.gui.children[i].pressed){
						game.add(new Unit({
							position : pozice,
							width : 20,
							height : 20,
							team : 1,
							color : "#ff0000",
						}));
					}
				};
			}
		});
	},
	objects : function(game){
		return;
	},
	afterload : function(){
		return;
	},
}
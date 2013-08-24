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
		game.gui.add( new Button({
			id:"TimeTrigger",
			position : new Vector2(game.width/2-60,390),
			width : 130,
			height : 35,
			rectangle : {
				visible : true,
				color : "#787878",
			},
			text : {
				size : 40,
				value : "FIGHT!",
				color : "#000000",
				font : "sans-sarif",
				position : new Vector2(0,-10),
			},
			mouseup : function (){
				game.paused = !game.paused;
			},
		}) );
		
		var redFighter =  new Button({
			id : "redFighter",
			position : new Vector2(game.width/2-150,390),
			width : 80,
			height : 80,
			rectangle : {
				visible : true,
				color : "#787878",
			},
			mouseup : function (){
				this.pressed = !this.pressed;
				if(this.color == "#787878"){
					this.children[0].color = "#565656";
				}
				else{
					this.children[0].color = "#787878";
				}
			},
		});
		redFighter.add(new Rectangle({
			color : "#ff0000",
			width : 40,
			height : 40,
			position : new Vector2(20,20),
		}));
		game.gui.add(redFighter);
	},
	afterload : function(){
		return;
	},
}
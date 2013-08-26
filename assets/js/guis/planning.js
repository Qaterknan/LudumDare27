{
	preload : function(game){
		//~ game.eventhandler.addMouseControl(1,undefined, function (x,y){
			//~ var pozice = new Vector2(x,y).sub(game.camera.position);
			//~ var bg = game.getChild("BG");
			//~ var inX = pozice.x > bg.position.x && pozice.x < bg.position.x+bg.width;
			//~ var inY = pozice.y > bg.position.y && pozice.y <bg.position.y+bg.height;
			//~ if(inX && inY){
				//~ for(var i in game.gui.children){
					//~ if(game.gui.children[i].pressed){
						//~ game.add(new Unit({
							//~ position : pozice,
							//~ width : 20,
							//~ height : 20,
							//~ team : 1,
							//~ color : "#ff0000",
						//~ }));
					//~ }
				//~ };
			//~ }
		//~ });
		game.eventhandler.addMouseControl(0,function (x,y){
			game.gui.children.cursor.position.set(x,y);
		});
		game.eventhandler.addKeyboardControl("S", undefined, undefined, function (){
			if(game.gui.children.belt.minimumY <= game.gui.children.belt.position.y-10)
				game.gui.children.belt.position.y -= 10;
		});
		game.eventhandler.addKeyboardControl("W", undefined, undefined, function (){
			if(0 >= game.gui.children.belt.position.y+10)
				game.gui.children.belt.position.y += 10;
		});
		game.camera.zoom = 0.35;
		game.camera.position.x = game.camera.origin.x = -45;
	},
	objects : function(game){
		//~ game.gui.add(new Rectangle({
			//~ position : new Vector2(0,0),
			//~ width : game.canvas.width,
			//~ height : game.canvas.height,
			//~ color : "#00ff00",
			//~ alpha : 0.15,
		//~ }), "radar");
		var bg = game.getChild("BG");
		game.gui.add(new Rectangle({
			position : new Vector2(game.canvas.width/2-bg.width/2*game.camera.zoom+45,game.canvas.height/2-bg.height/2*game.camera.zoom),
			width : bg.width*game.camera.zoom,
			height : bg.height*game.camera.zoom,
			color : "#ff0000",
			alpha : 0.15,
		}), "land");
		game.gui.add(new Ground({
			position : new Vector2(game.canvas.width/2-bg.width/2*game.camera.zoom+45,game.canvas.height/2-bg.height/2*game.camera.zoom),
		}));
		
		game.gui.add(new Belt({}), "belt");
		
		game.gui.add(new Text({
			value : "10",
			color : "#ff0000",
			position : new Vector2(250,50),
			size : 300,
			font : "sans-serif",
		}), "countdown");
		
		game.gui.add(new Rectangle({
			color : "#ffffff",
			width : 25,
			height : 25,
			position : new Vector2(),
			visible : false,
		}), "cursor");
	},
	afterload : function(game){
		game.player.countdown = 10;
		game.jukebox.objects.tenSeconds.loop = false;
		game.jukebox.objects.tenSeconds.play();
		var interval = window.setInterval(function (){
			game.player.countdown -= 1;
			game.gui.children.countdown.changeText(game.player.countdown+"");
			if(game.player.countdown <= 0){
				window.clearInterval(interval);
				game.gui.GUILoad(game.loader.scripts["assets/js/guis/planning.js"]);
				//~ game.paused = false;
			}
		}, 1000);
	},
}
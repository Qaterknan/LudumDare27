new function Level(){
	this.textures = {};
	this.sounds = {
		
	};
	this.scripts = {
		"shopGUI" : "assets/js/guis/shop.js",
		"observing" : "assets/js/guis/observing.js",
		"planning" : "assets/js/guis/planning.js",
	};
	this.afterLoad = function(){
		var _this = this;
		game.paused = true;
		if(game.fromPlay){
			game.gui.GUILoad(this.scripts.shopGUI);
			game.jukebox.objects.shop.loop = true;
			game.jukebox.objects.shop.play();
			game.fromPlay = false;
		}
		else {
			game.camera.position.set(0,0);
			game.camera.zoom = 0;
			game.clearColor = "#786446";
			var bgWidth = 1600;
			var bgHeight = 1200;
			game.add(new Background({
				collidable : false,
				width : bgWidth,
				height : bgHeight,
				position : new Vector2(0,0),
				color : "#0a0a0a",
			}));
			game.gui.GUILoad(this.scripts.observing);
			
			var mut = new Mutant({position : new Vector2(-100,-100), team : 2});
			game.NPCs.switchType(mut, "flat");
			game.add(mut);
		}
	};
};
new function Level(){
	this.textures = {};
	this.sounds = {
		
	};
	this.scripts = {
		"shopGUI" : "assets/js/guis/shop.js",
		"observing" : "assets/js/guis/observing.js",
	};
	this.afterLoad = function(){
		var _this = this;
		game.paused = true;
		if(game.firstTime){
			game.gui.GUILoad(this.scripts.shopGUI);
			game.jukebox.objects.shop.loop = true;
			game.jukebox.objects.shop.play();
			game.firstTime = false;
		}
		else {
			game.gui.GUILoad(this.scripts.observing);
			
			var bgWidth = 1000;
			var bgHeight = 600;
			
			game.add(new Mutant({
				position : new Vector2(-50,0),
				team : 1,
			}));
			
			game.add(new Background({
				collidable : false,
				width : bgWidth,
				height : bgHeight,
				position : new Vector2(0,0),
			}));
			
		}
	};
};
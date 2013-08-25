new function Level(){
	this.textures = {};
	this.sounds = {};
	this.scripts = {
		"shopGUI" : "assets/js/guis/shop.js",
		"isometric" : "assets/js/guis/isometric.js",
	};
	this.afterLoad = function(){
		var _this = this;
		game.paused = true;
		game.gui.GUILoad(this.scripts.shopGUI);
		
		//~ game.add(new Mutant({
			//~ position : new Vector2(100,100),
			//~ team : 1,
		//~ }));
		//~ game.add(new Toyota({
			//~ position : new Vector2(100,300),
			//~ team : 1,
		//~ }));
		//~ game.add(new Helicopter({
			//~ position : new Vector2(700,200),
			//~ team : 2,
		//~ }));
		//~ game.add(new Rifleman({
			//~ position : new Vector2(500,300),
			//~ team : 2,
		//~ }));
		
		game.add(new Background({collidable : false,height : game.height - 120}));
	};
};
new function Level(){
	this.textures = {};
	this.sounds = {};
	this.scripts = {
		"shopGUI" : "assets/js/guis/shop.js",
	};
	this.afterLoad = function(){
		var _this = this;
		game.paused = true;
		game.gui.GUILoad(this.scripts.shopGUI);
		
		game.add(new Background({collidable : false,height : game.height - 120}));
	};
};
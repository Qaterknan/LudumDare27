new function Level(){
	this.textures = {};
	this.sounds = {};
	this.scripts = {
		"menuGUI" : "assets/js/guis/menu.js",
	};
	this.afterLoad = function(){
		game.gui.GUILoad(this.scripts.menuGUI);
	};
};
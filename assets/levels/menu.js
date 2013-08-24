new function Level(){
	this.textures = {
		"mutant" : "assets/textures/mutant.png",
		"rifleman" : "assets/textures/rifleman.png",
	};
	this.sounds = {};
	this.scripts = {
		"menuGUI" : "assets/js/guis/menu.js",
	};
	this.afterLoad = function(){
		game.gui.GUILoad(this.scripts.menuGUI);
		
		//~ A nyní nejodpornější věc na světě:
		game.textures = this.textures;
	};
};
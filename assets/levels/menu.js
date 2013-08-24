new function Level(){
	this.textures = {
		"mutIso" : "assets/textures/mutant.png",
		"rifleIso" : "assets/textures/rifleman.png",
		"mutFlat" : "assets/textures/mutant_icon.png",
		"rifleFlat" : "assets/textures/rifleman_icon.png",
	};
	this.sounds = {};
	this.scripts = {
		"menuGUI" : "assets/js/guis/menu.js",
	};
	this.afterLoad = function(){
		game.gui.GUILoad(this.scripts.menuGUI);
		
		game.NPCs = new NPCs(this.textures);
	};
};
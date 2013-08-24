new function Level(){
	this.textures = {
		"mutIso" : "assets/textures/mutant.png",
		"rifleIso" : "assets/textures/rifleman.png",
		"mutFlat" : "assets/textures/mutant_icon.png",
		"rifleFlat" : "assets/textures/rifleman_icon.png",
		"assinIso" : "assets/textures/assassin.png",
		"assinFlat" : "assets/textures/assassin_icon.png",
		"jetIso" : "assets/textures/jetpack.png",
		"jetFlat" : "assets/textures/jetpack_icon.png",
		"cannonIso" : "assets/textures/cannon.png",
		"cannonFlat" : "assets/textures/cannon_icon.png",
		"toyIso" : "assets/textures/toyota.png",
		"toyFlat" : "assets/textures/toyota_icon.png",
		"heliIso" : "assets/textures/helicopter.png",
		"heliFlat" : "assets/textures/helicopter_icon.png",
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
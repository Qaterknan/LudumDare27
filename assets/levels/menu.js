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
		"motoIso" : "assets/textures/motorbike.png",
		"motoFlat" : "assets/textures/motorbike_icon.png",
		"rpgIso" : "assets/textures/rpg.png",
		"rpgFlat" : "assets/textures/rpg_icon.png",
		"roboIso" : "assets/textures/robot.png",
		"roboFlat" : "assets/textures/robot_icon.png",
		"sniIso" : "assets/textures/sniper.png",
		"sniFlat" : "assets/textures/sniper_icon.png",
		"kamiIso" : "assets/textures/kamikadze.png",
		"kamiFlat" : "assets/textures/kamikadze_icon.png",
		
		"mainScreen" : "assets/textures/main_screen1.png",
	};
	this.sounds = {
		"shop" : "assets/sounds/store.wav",
		"tenSeconds" : "assets/sounds/10sekund.wav",
	};
	this.scripts = {
		"menuGUI" : "assets/js/guis/menu.js",
	};
	this.afterLoad = function(){
		game.gui.GUILoad(this.scripts.menuGUI);
		game.jukebox.addSounds(this.sounds);
		game.NPCs = new NPCs(this.textures);
	};
};
new function Level(){
	this.textures = {
		"mutIso" : "assets/textures/mutant.png",
		"rifleIso" : "assets/textures/rifleman.png",
		"mutFlat" : "assets/textures/mutant_icon.png",
		"rifleFlat" : "assets/textures/rifleman_icon.png",
		"assinIso" : "assets/textures/assassin2.png",
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
		"storeBack" : "assets/textures/store_background.jpg",
		
		"bush" : "assets/textures/bush.png",
		"acidPool" : "assets/textures/nature1.png",
		"tires" : "assets/textures/nature2.png",
		"tree" : "assets/textures/nature3.png",
		"trap" : "assets/textures/trap.png",
		"wire" : "assets/textures/wire.png",
		"wreck" : "assets/textures/wreck.png",
	};
	this.sounds = {
		"shop" : "assets/sounds/store.wav",
		"tenSeconds" : "assets/sounds/10sekund.wav",
		"boj" : "assets/sounds/boj.wav",
		"valka" : "assets/sounds/valka2.wav",
		
		"strela1" : "assets/sounds/strela3.wav",
		"strela2" : "assets/sounds/strela4.wav",
		"strela3" : "assets/sounds/strela5.wav",
		"strela4" : "assets/sounds/zbran.wav",
		"vybuch" : "assets/sounds/vybuch2.wav",
	};
	this.scripts = {
		"menuGUI" : "assets/js/guis/menu.js",
	};
	this.afterLoad = function(){
		game.gui.GUILoad(this.scripts.menuGUI);
		game.jukebox.addSounds(this.sounds);
		game.jukebox.objects.strela1.volume = 0.4;
		game.jukebox.objects.strela1.loop = false;
		game.jukebox.objects.strela2.volume = 0.4;
		game.jukebox.objects.strela2.loop = false;
		game.jukebox.objects.strela3.volume = 0.4;
		game.jukebox.objects.strela3.loop = false;
		game.jukebox.objects.strela4.volume = 0.4;
		game.jukebox.objects.strela4.loop = false;
		game.jukebox.objects.vybuch.volume = 0.4;
		game.jukebox.objects.vybuch.loop = false;
		game.NPCs = new NPCs(this.textures);
		game.enviroment = new Enviroment(this.textures);
	};
};
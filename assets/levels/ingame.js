new function Level(){
	this.textures = {};
	this.sounds = {};
	this.scripts = {
		"ingameGUI" : "assets/js/guis/ingame.js",
	};
	this.afterLoad = function(){
		game.gui.GUILoad(this.scripts.ingameGUI);
		
		game.add( new Unit({
			position : new Vector2(100,100),
			opaque : true,
			width : 20,
			height : 20,
		}) );
		
		game.add( new Unit({
			position : new Vector2(500,100),
			opaque : true,
			width : 20,
			height : 20,
			team : 2,
			color : "#0000ff",
		}) );
		
		game.add( new Unit({
			position : new Vector2(500,300),
			opaque : true,
			width : 20,
			height : 20,
			team : 2,
			color : "#ff0000",
		}) );
		
		game.add( new Unit({
			position : new Vector2(100,150),
			opaque : true,
			width : 20,
			height : 20,
			team : 1,
			color : "#00ff00",
			health : 20,
		}) );
	};
};
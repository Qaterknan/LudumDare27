function onStart(){
	console.log("Initialized!");
	game.adjustCanvas(800,480);
	game.levelLoad("assets/levels/menu.js", true);
	
	game.player = new Player();
	game.NTC = new nameToConstructor();
	game.firstTime = true;
	game.fromPlay = true;
};
{
	preload : function(){
		return;
	},
	objects : function(game){
		game.gui.add( new Button({
			id : "Start",
			position : new Vector2(game.width/2-50,150),
			width : 80,
			height : 30,
			rectangle : {
				visible : true,
				color : "#000000",
			},
			text : {
				size : 36,
				value : "Start",
				color : "#ffffff",
				font : "sans-sarif",
				position : new Vector2(0,-10),
			},
			mouseup : function(){
				game.levelLoad("assets/levels/ingame.js");
			},
		}) );
	},
	afterload : function(){
		return;
	},
}
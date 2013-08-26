{
	preload : function(){
		return;
	},
	objects : function(game){
		
		game.gui.add(new Rectangle({
			position : new Vector2(0,0),
			width : game.canvas.width,
			height : game.canvas.height,
			texture : new Texture(game.loader.textures["assets/textures/main_screen1.png"],{}),
		}));
		
		game.gui.add(new Button({
			position : new Vector2(50,50),
			width : 600,
			height : 300,
			rectangle : {
				visible : true,
				color : "#000000",
				alpha : 0.5,
			},
			text : {
				size : 36,
				value : "They say a few seconds can change the fate of mankind. I used to believe that it's not true, but The Fall changed my mind. Now, my life everyday rests on few seconds of energy that are left for our computer to find out winning strategy. It's dawn, I should get my mutants ready ... ",
				color : "#ffffff",
				font : "sans-serif",
				position : new Vector2(0,-10),
			},
		}));
		
		game.gui.add( new Button({
			id : "Start",
			position : new Vector2(game.width/2+300,360),
			width : 120,
			height : 100,
			rectangle : {
				visible : true,
				color : "#000000",
				alpha : 0.5,
			},
			text : {
				size : 36,
				value : "Get ready >>",
				color : "#ffffff",
				font : "sans-serif",
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
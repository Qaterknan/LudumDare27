{
	preload : function(game){
		game.eventhandler.resetControls();
		game.camera.zoom = 0.35;
		game.camera.position.x = game.camera.origin.x = -45;
		
		game.eventhandler.addKeyboardControl(32, function (){
			game.gui.children.zPas.visible = false;
			game.gui.children.zPopis.children[1].changeText("Units can be placed by clicking on the cell with their icon on the belt (which will cause the unit's icon to folow your mouse) and then clicking to the position somewhere in red rectangular area. The number of units of given type rest is indicated by white number next to icon of the unit. Unit's effectives are indicated by icons highlighted yellow, deadly by red. So, that's all you need to know about planning, the most important phase of each battle. Once you are ready to start placing units, press Escape (be aware that next time you will enter this mode from shop, the countdown will start immediately) ... ");
		});
		
		game.eventhandler.addKeyboardControl(27, function (){
			game.eventhandler.resetControls();
			game.gui.addControls();
			game.gui.GUILoad(game.loader.scripts["assets/js/guis/planning.js"]);
		});
	},
	objects : function(game){
		
		//~ PŮVODNÍ OBJEKTY
		var bg = game.getChild("BG");
		game.gui.add(new Rectangle({
			position : new Vector2(game.canvas.width/2-bg.width/2*game.camera.zoom+45,game.canvas.height/2-bg.height/2*game.camera.zoom),
			width : bg.width*game.camera.zoom,
			height : bg.height*game.camera.zoom,
			color : "#ff0000",
			alpha : 0.15,
		}), "land");
		game.gui.add(new Ground({
			position : new Vector2(game.canvas.width/2-bg.width/2*game.camera.zoom+45,game.canvas.height/2-bg.height/2*game.camera.zoom),
		}));
		
		game.gui.add(new Belt({}), "belt");
		
		game.gui.add(new Text({
			value : "10",
			color : "#ff0000",
			position : new Vector2(400,50),
			size : 300,
			font : "sans-serif",
			alpha : 0.5,
		}), "countdown");
		
		game.gui.add(new Rectangle({
			position : new Vector2(0,0),
			width : game.canvas.width,
			height : game.canvas.height,
			color : "#000000",
			alpha : 0.4,
		}), "zPozadi");
		
		game.gui.add(new Rectangle({
			position : new Vector2(0,0),
			width : 152,
			height : game.canvas.height,
			color : "#00ff00",
			alpha : 0.4,
		}), "zPas");
		
		game.gui.add(new Button({
			position : new Vector2(410,30),
			width : 350,
			height : 300,
			rectangle: {
				color : "#000000",
				alpha : 0.6,
			},
			text : {
				value : "This is the prebattle GUI, where your computer visualizes combat situation and lets you decide which units to place where. Unfortunately, running a computer is very expensice and you can afford to run it only 10 seconds before each battle. After that time, you will not be able to interact with your units at all. You can only place units in red highlighted area of a map (between this text and green rectangle). All your units are listed on the belt - highlighted by green. Once you will have enough units, you can move the belt using W and S keys. Press Space to continue ... ",
				size : 18,
				position : new Vector2(0,0),
				color : "#ffffff",
				font : "sans-serif",
			},
		}), "zPopis");
	},
	afterload : function(game){
		return;
	},
}
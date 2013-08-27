{
	preload : function(game){
		game.eventhandler.resetControls();
		game.eventhandler.addKeyboardControl(27, function (){
			game.eventhandler.resetControls();
			game.gui.addControls();
			game.gui.GUILoad(game.loader.scripts["assets/js/guis/shop.js"]);
		});
		game.eventhandler.addKeyboardControl(32, function (){
			if(game.gui.children.zScrap.visible){
				game.gui.children.zScreen.children[1].size = 18;
				game.gui.children.zScreen.children[1].changeText("Now lets have a look at units. You can buy units for amount of scrap written by yellow. Each unit has few different characteristics. First, right in the highlighted white box, is the number of units you can deploy each raid. Second are the physical characteristics of unit, which can be seen before purchasing. And last is the units ability to interact with other different unit types, giving it possibility to be effective or deadly when fighting against these. Press Space to continue ... ");
				game.gui.children.zaklad.visible = true;
				game.gui.children.zJednotka.visible = true;
				game.gui.children.zScrap.visible = false;
				return;
			}
			if(game.gui.children.zaklad.visible){
				game.gui.children.zaklad.visible = false;
				game.gui.children.zJednotka.visible = false;
				game.gui.children.zScreen.children[1].changeText("Unit can be bought by cliking on its card and pressing Buy IT button in top right corner. Your bought units' characteristics can be upgraded by spending scrap. To do so, click on the wanted upgrade's price in little white rectangle. The price keeps increasing with level of upgrade. To list between pages of the store and access new units, use D and A keys. Once you are ready to go, press Lets fight! button. To exit shop tutorial, press Escape ... ");
			}
		});
	},
	objects : function(game){
		
		//~ PŮVODNÍ OBJEKTY
		game.gui.add(new Rectangle({
			position : new Vector2(0,0),
			width : game.canvas.width,
			height : game.canvas.height,
			color : "#1E2838",//~ ,texture : new Texture(game.loader.textures["assets/textures/store_background.jpg"], {})
			alpha : 0.8,
		}));
		
		game.gui.add(new Text({
			value : "Store",
			size : 60,
			position : new Vector2(game.canvas.width/2-70,0),
			font : "sans-serif",
			color : "#ffffff",
		}));
		
		var trezor = new Rectangle({
			color : "#ffffff",
			position : new Vector2(game.canvas.width/2-100,70),
			width : 200,
			height : 50,
		});
		var hotovost = new Text({
			value : "Scrap : "+game.player.scrap,
			position : new Vector2(0,10),
			size : 30,
			font : "sans-serif",
			color : "#000000",
		});
		hotovost.lastValue = game.player.scrap;
		hotovost.tick = function (){
			if(game.player.scrap != this.lastValue)
				this.changeText("Scrap: "+game.player.scrap);
		};
		trezor.add(hotovost);
		game.gui.add(trezor);
		
		var buyIT = new Button({
			position : new Vector2(20,20),
			width : 100,
			height : 30,
			rectangle :{
				color : "#777777",
				width : 100,
				height : 30,
			},
			text : {
				value : "Buy IT!",
				size : 25,
				position : new Vector2(10,-5),
				color : "#000000",
				font : "sans-serif",
			},
			mouseup : function (){console.log("BOUGHT!");
				if(this.thingToBuy){
					game.player.buy(this.thingToBuy);
					this.children[0].color = "#777777";
					for(var i in this.parent.children.strana.children){
						var child = this.parent.children.strana.children[i];
						if(child.unit.name.toLowerCase() == this.thingToBuy) child.switchMode(true);
					};
					this.thingToBuy = false;
				}
			},
		});
		buyIT.thingToBuy = false;
		game.gui.add(buyIT);
		
		game.gui.add(new Button({
			position : new Vector2(600,20),
			width : 160,
			height : 40,
			rectangle : {
				color : "#ffffff",
			},
			text : {
				size : 35,
				color : "#000000",
				font : "sans-serif",
				value : "Lets fight!",
				position : new Vector2(0,0),
			},
			mouseup : function (){
				game.jukebox.objects.shop.stop();
				game.levelLoad("assets/levels/ingame.js");
			},
		}));
		
		// Vojáci
		game.gui.add(new Rectangle(), "strana");
		game.gui.children.strana.cislo = undefined;
		
		game.gui.children.strana.buying = function ( name ){
			var npcsID = name.toLowerCase();
			if(game.player.checkBuy(npcsID)){
				buyIT.children[0].color = "#ffffff";
				buyIT.thingToBuy = npcsID;
			}
			else{
				buyIT.children[0].color = "#777777";
				buyIT.thingToBuy = false;
			}
		};
		
		this.loadPage(0, game);
		
		
		//~ TUTORIAL
		
		game.gui.add(new Rectangle({
			position : new Vector2(0,0),
			width : game.canvas.width,
			height : game.canvas.height,
			color : "#000000",
			alpha : 0.4,
		}), "zPozadi");
		
		game.gui.add(new Rectangle({
			position : new Vector2(70,130),
			width : 320,
			height : 170,
			color : "#ff0000",
			alpha : 0.3,
			visible : false,
		}), "zJednotka");
		
		game.gui.add(new Rectangle({
			position : new Vector2(170,140),
			width : 205,
			height : 37,
			color : "#ffffff",
			alpha : 0.3,
			visible : false,
		}), "zaklad");
		
		game.gui.add(new Rectangle({
			position : new Vector2(290,60),
			width : 220,
			height : 70,
			color : "#00ff00",
			alpha : 0.3,
			visible : true,
		}), "zScrap");
		
		game.gui.add(new Button({
			position : new Vector2(400,130),
			width : 300,
			height : 300,
			rectangle: {
				color : "#000000",
				alpha : 0.6,
			},
			text : {
				value : "Welcome to Store! Here you can purchase new crew units every time you return from scrap hunts. Your overall scrap amount is highlighted in green rectangle. This is what you buy units for. Press Space to continue ... ",
				size : 25,
				position : new Vector2(0,0),
				color : "#ffffff",
				font : "sans-serif",
			},
		}), "zScreen");
	},
	afterload : function(game){
		return;
	},
	loadPage : function (which, game){
		if(game.gui.children.strana.cislo == which) return;
		// Vojáci
		for(var i in game.NPCs){if(game.NPCs[i].isoTexture === undefined) continue;
			game.NPCs[i].isoTexture.switchAnimation("standing");
		};
		for(var i in game.gui.children.strana.children){
			game.gui.children.strana.remove(game.gui.children.strana.children[i]);
		};
		var pages = [["mutant","assassin","rifleman","jetpack"],
			["toyota","cannon","helicopter","motorbike"],
			["rpg","kamikadze","sniper","robot"]];
		game.gui.children.strana.add( new PlacingButton(game.NPCs[pages[which][0]], {
			position : new Vector2(80,140),
		}));
		
		game.gui.children.strana.add( new PlacingButton(game.NPCs[pages[which][1]], {
			position : new Vector2(400,140),
		}));
		
		game.gui.children.strana.add( new PlacingButton(game.NPCs[pages[which][2]], {
			position : new Vector2(80,300),
		}));
		
		game.gui.children.strana.add( new PlacingButton(game.NPCs[pages[which][3]], {
			position : new Vector2(400,300),
		}));
		game.gui.children.strana.cislo = which;
	},
}
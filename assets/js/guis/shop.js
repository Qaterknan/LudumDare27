{
	preload : function(game){
		return;
	},
	objects : function(game){
		game.gui.add(new Rectangle({
			position : new Vector2(0,0),
			width : game.canvas.width,
			height : game.canvas.height,
			color : "#1E2838",
			alpha : 0.3,
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
				value : "Let's fight!",
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
	},
	afterload : function(game){
		var _this = this;
		game.eventhandler.addKeyboardControl(65, undefined, function(){
			if(game.gui.children.strana.cislo > 0) 
				_this.loadPage(game.gui.children.strana.cislo-1, game);
		});
		game.eventhandler.addKeyboardControl(68, undefined, function(){
			if(game.gui.children.strana.cislo < 1) 
				_this.loadPage(game.gui.children.strana.cislo+1, game);
		});
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
		 ["toyota","cannon","helicopter","motorbike"]];
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
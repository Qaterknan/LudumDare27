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
		trezor.add(hotovost);
		game.gui.add(trezor);
		// Vojáci
		game.gui.add(new Rectangle(), "strana");
		game.gui.children.strana.cislo = undefined;
		this.loadPage(0, game);
	},
	afterload : function(game){
		var _this = this;
		game.eventhandler.addKeyboardControl(65, undefined, function(){
			if(game.gui.children.strana.cislo > 0) 
				_this.loadPage(game.gui.children.strana.cislo-1, game);
		});
		game.eventhandler.addKeyboardControl(68, undefined, function(){
			console.log(game);
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
new function Level(){
	this.textures = {};
	this.sounds = {};
	this.scripts = {
		"ingameGUI" : "assets/js/guis/shop.js",
	};
	this.afterLoad = function(){
		var _this = this;
		game.paused = true;
		game.gui.GUILoad(this.scripts.ingameGUI);
		
		game.add(new Mutant({
			position : new Vector2(100,300),
			team : 1,
		}));
		
		game.add(new Rifleman({
			position : new Vector2(400,300),
			team : 2,
			type : "flat",
		}));
		
		game.gui.add(new Rectangle({
			width:40,
			height:40,
			texture:game.NPCs.mutant.flatTexture,
			position: new Vector2(100,100),
		}));
		
		game.add(new Background({collidable : false,height : game.height - 120}));
	};
};
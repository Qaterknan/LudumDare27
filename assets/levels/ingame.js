new function Level(){
	this.textures = {
		"bgtexture" : "assets/textures/ground.png",
	};
	this.sounds = {
		
	};
	this.scripts = {
		"shopGUI" : "assets/js/guis/shop.js",
		"observing" : "assets/js/guis/observing.js",
		"planning" : "assets/js/guis/planning.js",
		"shopGUIfirst" : "assets/js/guis/shopFirst.js",
		"planningFirst" : "assets/js/guis/planningFirst.js",
		"observingFirst" : "assets/js/guis/observingFirst.js",
	};
	this.afterLoad = function(){
		var _this = this;
		game.paused = true;
		if(game.fromPlay){
			if(game.firstTime){
				game.gui.GUILoad(this.scripts.shopGUIfirst);
				game.jukebox.objects.shop.loop = true;
				game.jukebox.objects.shop.play();
				game.fromPlay = false;
			}
			else{
				game.gui.GUILoad(this.scripts.shopGUI);
				game.jukebox.objects.shop.loop = true;
				game.jukebox.objects.shop.play();
				game.fromPlay = false;
			}
		}
		else {
			game.camera.position.set(0,0);
			game.camera.zoom = 1;
			game.clearColor = "#786446";
			var bgWidth = 1600;
			var bgHeight = 1200;
			game.add(new Background({
				collidable : false,
				width : bgWidth,
				height : bgHeight,
				position : new Vector2(0,0),
				color : "#0a0a0a",
				texture : new Texture(_this.textures.bgtexture, {
					repeat : true,
				}),
			}));
			if(game.firstTime){
				game.gui.GUILoad(this.scripts.planningFirst);
				for(var i = 0; i < 5; i++){
					game.add(new Mutant({
						position : new Vector2(100,-160+70*i),
						team : 2,
					}));
				};
			}
			else{
				game.gui.GUILoad(this.scripts.planning);
				//~ Vytváření nepřátelského vojska
				var actualScrap = game.player.enemyScrap;
				for(var i in game.NPCs){
					if(!game.NPCs[i].name) continue;
					if(game.NPCs[i].price <= game.player.enemyScrap){
						var konst = game.NTC[game.NPCs[i].name];
						for(var j = 0; j < game.NPCs[i].amountPerSquad;j++){
							if(game.NPCs[i].price <= actualScrap && Math.random() < (game.NPCs[i].amountPerSquad - j)/game.NPCs[i].amountPerSquad){
								game.add(new konst({
									team : 2,
									position : new Vector2((Math.random()*1.2-0.2)*bgWidth*0.4, 10+(Math.random()*2-1)*bgHeight*0.40),
								}));
								actualScrap -= game.NPCs[i].price;
							}
						};
					};
				};
			}
			game.add(new Object2({
				texture : new Texture(_this.textures.bgtexture, {
					repeat : true,
				}),
				width : 5000,
				height : 3000,
				zIndex : -1001,
				collidable : false,
			}));
			game.add(new Object2({
				collidable : false,
				width : bgWidth,
				height : bgHeight,
				color : "#786446",
				alpha : 0.5,
				zIndex : -999,
			}));
			for(var i = 0; i < 30; i++){
				game.add(game.enviroment.getRandom(new Vector2(-bgWidth,-bgHeight),new Vector2(bgWidth,bgHeight)));
			};
		}
	};
};
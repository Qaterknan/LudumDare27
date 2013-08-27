{
	preload : function(game){
		game.eventhandler.addKeyboardControl("W", undefined, undefined, function (){
			//~ if(game.camera.position.y-10 > game.canvas.height*game.camera.zoom/2-game.getChild("BG").height/2){
				game.camera.position.y -= 10;
				game.camera.origin.y -= 10;
			//~ }
		});
		
		game.eventhandler.addKeyboardControl("S", undefined, undefined, function (){
			//~ if(game.camera.position.y+10 < game.getChild("BG").height*game.camera.zoom/2-game.canvas.height/2){
				game.camera.position.y += 10;
				game.camera.origin.y += 10;
			//~ }
		});
		
		game.eventhandler.addKeyboardControl("A", undefined, undefined, function (){
			//~ if(game.camera.position.x-10 > game.canvas.width*game.camera.zoom/2-game.getChild("BG").width/2){
				game.camera.position.x -= 10;
				game.camera.origin.x -= 10;
			//~ }
		});
		
		game.eventhandler.addKeyboardControl("D", undefined, undefined, function (){
			//~ if(game.camera.position.x+10 < game.getChild("BG").width*game.camera.zoom/2-game.canvas.width/2){
				game.camera.position.x += 10;
				game.camera.origin.x += 10;
			//~ }
		});
		
		game.eventhandler.addKeyboardControl("Q", undefined, undefined, function (){
			if(game.camera.zoom > 0.2){
				game.camera.zoom -= 0.01;
			}
		});
		
		game.eventhandler.addKeyboardControl("E", undefined, undefined, function (){
			if(game.camera.zoom < 5){
				game.camera.zoom += 0.01;
			}
		});
		
		game.eventhandler.addKeyboardControl(27, function (){
			if(game.player.won){
				game.player.scrap += game.player.currentScrap;
				game.player.currentScrap = 0;
				game.player.enemyScrap += 200;
				game.player.won = false;
				game.camera.position.set(0,0);
				game.camera.origin.set(0,0);
				game.jukebox.silence();
				game.levelLoad("assets/levels/ingame.js");
			}
		});
	},
	objects : function(game){
		game.fromPlay = true;
		game.gui.add(new Text({
			value : game.getChild("BG").playerHealth+"",
			position : new Vector2(0,400),
			color : "#ff0000",
			size : 60,
			font : "sans-serif",
		}), "playerHealth");
		game.gui.children.playerHealth.tick = function  (){
			if(game.getChild("BG").playerHealth+"" != this.value)
				this.changeText(game.getChild("BG").playerHealth+"");
		};
		game.gui.add(new Text({
			value : game.getChild("BG").enemyHealth+"",
			position : new Vector2(700,400),
			color : "#ff0000",
			size : 60,
			font : "sans-serif",
		}), "enemyHealth");
		game.gui.children.enemyHealth.tick = function  (){
			if(game.getChild("BG").enemyHealth+"" != this.value)
				this.changeText(game.getChild("BG").enemyHealth+"");
		};
		game.player.currentScrap = 0;
		game.gui.add(new Button({
			position : new Vector2(270,400),
			width : 210,
			height : 20,
			rectangle : {
				
			},
			text : {
				position : new Vector2(),
				value : "Current scrap: "+game.player.currentScrap,
				color : "#000000",
				size : 20,
				font : "sans-serif",
			},
		}), "currentScrap");
		game.gui.children.currentScrap.currentScrap = 0;
		game.gui.children.currentScrap.tick = function (){
			if(this.currentScrap != game.player.currentScrap)
				this.children[1].changeText("Current scrap: "+game.player.currentScrap);
		};
		game.gui.add(new Text({
			visible : false,
			size : 200,
			color : "#000000",
			position : new Vector2(10,100),
			font : "sans-serif",
			value : "You won!"
		}),"goShop");
		game.gui.children.goShop.tick = function (){
			var teamPlayer = false;
			var teamEnemy = false;
			for(var i in game.children){
				if(!(game.children[i] instanceof Unit)) continue;
				if(game.children[i].team == 1)
					teamPlayer = true;
				if(game.children[i].team == 2)
					teamEnemy = true;
			};
			if((!teamPlayer && !teamEnemy) && !game.player.won){
				var bg = game.getChild("BG");
				if(bg.playerHealth > bg.enemyHealth){
					game.player.currentScrap += 100-bg.enemyHealth;
					game.player.won = true;
					game.gui.children.goShop.changeText("You won!");
				}
				else if(bg.playerHealth == bg.enemyHealth){
					game.player.enemyScrap -= 100;
					game.player.won = true;
					game.player.currentScrap = 0;
					game.gui.children.goShop.changeText("Draw!");
				}
				else{
					game.player.enemyScrap -= 100;
					game.player.won = true;
					game.player.currentScrap = 0;
					game.gui.children.goShop.changeText("You lost!");
				}
				game.gui.children.goShop.visible = true;
				game.gui.children.pressEsc.visible = true;
			}
		};
		game.gui.add(new Text({
			position : new Vector2(265,300),
			color : "#000000",
			value : "Press escape to continue",
			size : 20,
			font : "sans-serif",
			visible : false,
		}), "pressEsc");
	},
	afterload : function(){
		if(Math.random() > 0.5){
			game.jukebox.objects.boj.loop = true;
			game.jukebox.objects.boj.play();
		}
		else{
			game.jukebox.objects.valka.loop = true;
			game.jukebox.objects.valka.play();
		}
	},
}
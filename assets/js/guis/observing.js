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
				game.player.won = false;
				game.camera.position.set(0,0);
				game.camera.origin.set(0,0);
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
				this.changeText("Current scrap: "+game.player.currentScrap);
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
			if(!teamPlayer || !teamEnemy){
				var bg = game.getChild("BG");
				if(bg.playerHealth > bg.enemyHealth){
					game.player.won = true;
					game.gui.children.goShop.changeText("You won!");
				}
				else if(bg.playerHealth == bg.enemyHealth){
					if(teamPlayer){
						game.player.won = true;
						game.gui.children.goShop.changeText("You won!");
					}
					else{
						game.player.won = true;
						game.player.currentScrap = 0;
						game.gui.children.goShop.changeText("You lost!");
					}
				}
				else{
					game.player.won = true;
					game.player.currentScrap = 0;
					game.gui.children.goShop.changeText("You lost!");
				}
				game.gui.children.goShop.visible = true;
			}
		};
	},
	afterload : function(){
		return;
	},
}
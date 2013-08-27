{
	preload : function(game){
		
		game.eventhandler.addKeyboardControl(27, function (){
			game.eventhandler.resetControls();
			game.gui.addControls();
			game.jukebox.silence();
			game.gui.GUILoad(game.loader.scripts["assets/js/guis/observing.js"]);
			game.paused = false;
		});
	},
	objects : function(game){
		
		//~ PŮVODNÍ OBJEKTY
		
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
		
		//~ TUTORIAL
		
		game.gui.add(new Rectangle({
			position : new Vector2(0,0),
			width : game.canvas.width,
			height : game.canvas.height,
			color : "#000000",
			alpha : 0.4,
		}), "zPozadi");
		
		game.gui.add(new Button({
			position : new Vector2(100,80),
			width : 600,
			height : 300,
			rectangle: {
				color : "#000000",
				alpha : 0.6,
			},
			text : {
				value : "Last but not least, this is the observing mode, where you can see the progress of battle. To move around the battlefield use WSAD keys. To zoom in, use E, to zoom out Q. In the bottom left corner is your health, in bottom right is your opponents health. The battle ends when there are no more units on the ground. Units move forward and try to reach the other side of the ground, where they disappear, as they start to loot your/your opponent's camp, causing your health to decrease. Different units decrease your health by different amount. In the middle of the screen, you can see Current Scrap button. It stands for scrap you have found in the battlefield. This scrap is only aquired if you manage to win the battle, which will give you also the bonus scrap for health you took from your opponent. Press Escape to see, how the battle goes ... ",
				size : 18,
				position : new Vector2(0,0),
				color : "#ffffff",
				font : "sans-serif",
			},
		}), "zPopis");
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
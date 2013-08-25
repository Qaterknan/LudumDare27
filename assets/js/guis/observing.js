{
	preload : function(game){
		game.eventhandler.addKeyboardControl("W", undefined, undefined, function (){
			if(game.camera.position.y-10 > game.canvas.height/2-game.getChild("BG").height/2){
				game.camera.position.y -= 10;
				game.camera.origin.y -= 10;
			}
		});
		
		game.eventhandler.addKeyboardControl("S", undefined, undefined, function (){
			if(game.camera.position.y+10 < game.getChild("BG").height/2-game.canvas.height/2){
				game.camera.position.y += 10;
				game.camera.origin.y += 10;
			}
		});
		
		game.eventhandler.addKeyboardControl("A", undefined, undefined, function (){
			if(game.camera.position.x-10 > game.canvas.width/2-game.getChild("BG").width/2){
				game.camera.position.x -= 10;
				game.camera.origin.x -= 10;
			}
		});
		
		game.eventhandler.addKeyboardControl("D", undefined, undefined, function (){
			if(game.camera.position.x+10 < game.getChild("BG").width/2-game.canvas.width/2){
				game.camera.position.x += 10;
				game.camera.origin.x += 10;
			}
		});
	},
	objects : function(game){
		return;
	},
	afterload : function(){
		return;
	},
}
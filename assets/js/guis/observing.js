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
	},
	objects : function(game){
		return;
	},
	afterload : function(){
		return;
	},
}
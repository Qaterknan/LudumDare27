function Player (){
	this.mode = "flat"; // flat/isometric/shopping
	this.scrap = 100;
	this.units = { 
		// mutant : { attack : 1,}, => hráč má zpřístupněného mutanta a
		// koupil vylepšení útoku o jeden bod
	};
	this.countdown = false;
};
Player.prototype.checkBuy = function ( npcsID ){
	var possibleToBuy = !this.hasUnit( npcsID );
	if(game.NPCs[npcsID].price > this.scrap)
		possibleToBuy = false;
	return possibleToBuy;
};
Player.prototype.buy = function ( npcsID ){
	var ups = {};
	for(var i in game.NPCs[npcsID].powerUps){
		ups[i] = 0;
	};
	this.units[npcsID] = ups;
	this.scrap -= game.NPCs[npcsID].price;
};
Player.prototype.hasUnit = function ( npcsID ){
	var has = false;
	for(var i in this.units){
		if(i == npcsID) has = true;
	};
	return has;
};
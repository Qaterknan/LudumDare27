function Player (){
	this.mode = "flat"; // flat/isometric/shopping
	this.scrap = 100;
	this.currentScrap = 0;
	this.units = { 
		// mutant : { attack : 1,}, => hráč má zpřístupněného mutanta a
		// koupil vylepšení útoku o jeden bod
		mutant : {
			attack : 0,
			health : 0,
			speed : 0,
		},
		rifleman : {
			attack : 0,
		},
		assassin : {
			attack : 0,
		},
		jetpack : {
			attack : 0,
		},
		cannon : {
			attack : 0,
		},
		motorbike : {
			attack : 0,
		},
		robot : {
			attack : 0,
		},
	};
	this.countdown = false;
	this.won = false;
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
Player.prototype.checkPowerUp = function ( npcsID , which ){console.log(game.NPCs[npcsID], npcsID)
	var powerUp = game.NPCs[npcsID].powerUps[which];
	if(powerUp === undefined){
		console.warn("Nedefinovaný powerUp "+npcsID+" -> "+which);
		return false;
	}
	var level = this.getPowerUpLevel(npcsID, which);
	if( powerUp.maximum > level ){
		if(Math.pow(powerUp.increase+1, level)*powerUp.price > this.scrap){
			return false;
		}
		else return true;
	}
	else{
		return false;
	}
};
Player.prototype.buyPowerUp = function ( npcsID, which ){
	var cena = this.getPowerUpPrice(npcsID, which);
	this.scrap -= cena;
	this.units[npcsID][which] += game.NPCs[npcsID].powerUps[which].bonus;
	return cena;
};
Player.prototype.getPowerUpPrice = function ( npcsID, which ){
	var powerUp = game.NPCs[npcsID].powerUps[which];
	if(powerUp === undefined){
		console.warn("Nedefinovaný powerUp "+npcsID+" -> "+which);
		return false;
	}
	if(this.units[npcsID] === undefined){
		return powerUp.price;
	}
	var level = this.getPowerUpLevel(npcsID,which);
	return Math.pow(powerUp.increase+1, level)*powerUp.price;
};
Player.prototype.getPowerUpLevel = function ( npcsID, which ){
	if(this.units[npcsID] === undefined){
		return 0;
	}
	return this.units[npcsID][which]/game.NPCs[npcsID].powerUps[which].bonus;
};
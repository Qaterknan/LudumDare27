function PowerUpRow( unit, aspect, options ){
	GUIObject.call(this, options);
	var _this = this;
	this.unit = unit;
	this.npcsID = unit.name.toLowerCase();
	this.aspect = unit.powerUps[aspect];
	this.aspectName = aspect;
	this.aspectLevel = 0;
	
	this.bars = [];
	for(var i = 0; i < this.aspect.maximum;i++){
		this.bars.push(new Rectangle({
			color : "#000000",
			width : 7,
			height : 15,
			position : new Vector2(70+10*i,2),
		}));
		this.add(this.bars[i]);
	};
	
	var prevod = {
		attack : "Stronger",
		health : "Tougher",
		speed : "Faster",
	};
	this.text = new Text({
		color : "#000000",
		font : "sans-serif",
		size : 16,
		value : prevod[_this.aspectName],
		position : new Vector2(0,0),
	});
	this.add(this.text);
	var cena = game.player.getPowerUpPrice(this.npcsID, this.aspectName);
	this.price = new Button({
		width:35,
		height : 18,
		position : new Vector2(150,0),
		text : {
			value : cena+"",
			font : "sans-serif",
			size : 16,
			color : "#000000",
			position : new Vector2(0,0),
		},
		rectangle : {
			color : "#ffffff",
		},
		mouseup : function (){
			if(!this.visible) return;
			if(game.player.checkPowerUp(_this.npcsID, _this.aspectName)){
				game.player.buyPowerUp(_this.npcsID, _this.aspectName);
				_this.update();
			}
		},
	});
	this.add(this.price);
	this.update();
};
PowerUpRow.prototype = Object.create( GUIObject.prototype );
PowerUpRow.prototype.tick = function (){
	this.update();
};
PowerUpRow.prototype.update = function (){
	var level = game.player.getPowerUpLevel(this.npcsID, this.aspectName);
	if(game.player.getPowerUpPrice(this.npcsID, this.aspectName) > game.player.scrap || level == this.aspect.maximum){
		this.price.children[0].color = "#787878";
	}
	else{
		this.price.children[0].color = "#ffffff";
	}
	if( level != this.aspectLevel){
		for(var i = 0; i < level;i++){
			this.bars[i].color = "#F5FF30";
		};
		this.price.children[1].changeText(game.player.getPowerUpPrice(this.npcsID,this.aspectName)+"");
	}
	if( level == this.aspect.maximum && this.price.children[1].value != "MAX"){
		this.price.children[1].changeText("MAX");
		this.price.children[0]
	}
};
function PlacingButton( unit, options ){
	GUIObject.call(this, options);
	
	this.rectangle = new Rectangle({
		width : 300,
		height : 150,
		color : "#BFAF99",
	});
	this.add(this.rectangle);
	
	this.secondColor = options.pressedColor === undefined ? "#565656" : options.pressedColor;
	this.unit = unit;
	var pic = options.picture === undefined ? {} : options.picture;
	var pPos = pic.position === undefined ? new Vector2(10,20) : pic.position;
	var pwidth = pic.width === undefined ? 80 : pic.width;
	var pheight = pic.height === undefined ? 100 : pic.height;
	this.picture = new Rectangle({
		position : pPos,
		width : pwidth,
		height : pheight,
		zaIndex : 1,
		texture : unit.isoTexture,
	});
	this.add(this.picture);
		
	this.mouseup = function (){
		this.pressed = !this.pressed;
		this.switchColor();
	};
	
	this.add(new TableShop(this.unit));
	
};
PlacingButton.prototype = Object.create( GUIObject.prototype );
PlacingButton.prototype.switchColor = function (){
	var cashe = this.rectangle.color;
	this.rectangle.color = this.secondColor;
	this.secondColor = cashe;
};
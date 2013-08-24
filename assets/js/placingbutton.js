function PlacingButton( options ){
	GUIObject.call(this, options);
	
	if(options.rectangle !== false){
		options.rectangle = options.rectangle === undefined ? {} : options.rectangle;
		
		var inheritedKeys = ["width", "height", "color"];
		for(var i in inheritedKeys){
			var key = inheritedKeys[i];
			if(options.rectangle[key] === undefined){
				options.rectangle[key] = options[key];
			}
		}
		this.rectangle = new Rectangle(options.rectangle);
		this.add(this.rectangle);
	}
	
	if(options.texture !== undefined){
		this.texture = options.texture;
		this.texture.zIndex = 1;
		this.add(this.texture);
	}
	else{
		this.texture = new Rectangle({
			position : new Vector2(20,20),
			width : 40,
			height : 40,
			color : "#000000",
			zIndex : 1,
		});
	}
	this.add(this.texture);
	
	this.secondColor = options.pressedColor === undefined ? "#565656" : options.pressedColor;
	this.unit = options.unit === undefined ? {} : options.unit;
		
	this.mouseup = function (){
		this.pressed = !this.pressed;
		var cashe = this.rectangle.color;
		this.rectangle.color = this.secondColor;
		this.secondColor = cashe;
	};
	
};
PlacingButton.prototype = Object.create( GUIObject.prototype );
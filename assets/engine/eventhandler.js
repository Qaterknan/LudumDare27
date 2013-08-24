function Eventhandler( dom ) {
	var _this = this;

	this.dom = $(dom);
	this.offset = this.dom.offset();

	this.keyboardControls = {};
	this.mouseControls = {};

	this.mouse = new Vector2();
	this.mouse.projected = new Vector2();

	document.body.addEventListener( "keydown", function(ev){ _this.keyboardhandler(ev); }, true );
	document.body.addEventListener( "keyup", function(ev){ _this.keyboardhandler(ev); }, true );

	document.body.addEventListener( "mousemove", function(ev){ _this.mousehandler(ev); }, true );
	document.body.addEventListener( "mousedown", function(ev){ _this.mousehandler(ev); }, true );
	document.body.addEventListener( "mouseup", function(ev){ _this.mousehandler(ev); }, true );
	document.body.addEventListener( "contextmenu", function(ev){ _this.mousehandler(ev); }, true );
}

function Key(keydown, keyup, continuous) {
	this.keydown = keydown === undefined ? [] : [keydown];
	this.keyup = keyup === undefined ? [] : [keyup];
	this.continuous = continuous === undefined ? [] : [continuous];
	this.down = false;
	
};
Key.prototype.add = function(func, type){
	if(typeof(func) == "function")
		this[type].push(func);
};
Key.prototype.exec = function(type){
	if (this[type].length === 0)
		return

	for(var i in this[type]){
		this[type][i]();
	}
};

function Mouse(mousedown, mouseup, continuous) {
	this.mousedown = mousedown === undefined ? [] : [mousedown];
	this.mouseup = mouseup === undefined ? [] : [mouseup];
	this.continuous = continuous === undefined ? [] : [continuous];
	this.down = false;
};
Mouse.prototype.add = function(func, type){
	if(typeof(func) == "function")
		this[type].push(func);
};
Mouse.prototype.exec = function(type, x, y){
	if (this[type].length === 0)
		return
	for(var i in this[type]){
		this[type][i](x, y, type);
	}
};

Eventhandler.prototype.addKeyboardControl = function(_key, down, up, continuous) {
	if(typeof(_key) == "string"){
		key = _key.charCodeAt(0);
	}
	else {
		key = _key;
	}
	if(!this.keyboardControls[ key ])
		this.keyboardControls[ key ] = new Key( down, up, continuous );
	else{
		this.keyboardControls[ key ].add(down, "keydown");
		this.keyboardControls[ key ].add(up, "keyup");
		this.keyboardControls[ key ].add(continuous, "continuous");
	}
};

Eventhandler.prototype.addMouseControl = function(which, down, up, continuous) {
	if(!this.mouseControls[ which ])
		this.mouseControls[ which ] = new Mouse( down, up, continuous );
	else{
		this.mouseControls[ which ].add(down, "mousedown");
		this.mouseControls[ which ].add(up, "mouseup");
		this.mouseControls[ which ].add(continuous, "continuous");
	}
	
};

Eventhandler.prototype.keyboardhandler = function(e) {
	var keycode = e.keyCode,
		type = e.type;
	if( this.keyboardControls[ keycode ]){
		if( type == "keydown" && this.keyboardControls[ keycode ].down )
			return;
		this.keyboardControls[ keycode ].down = (type == "keydown");
		this.keyboardControls[ keycode ].exec(type);
	}
	 else{
	 	console.log([type, keycode, String.fromCharCode(keycode)]);
	 }
}

Eventhandler.prototype.mousehandler = function(e) {
	var which = e.which,
		type = e.type;

	e.preventDefault();

	if(type == "contextmenu")
		return;

	var x = e.clientX - this.offset.left,
		y = e.clientY - this.offset.top;

	this.updateMouseXY(x,y);

	if( this.mouseControls[ which ] ){
		if( type == "mousedown" || (this.mouseControls[ which ].down && type == "mousemove") ){
			this.mouseControls[ which ].down = true;
		}
		else {
			this.mouseControls[ which ].down = false;
		}
		if(type != "mousemove"){
			this.mouseControls[ which ].exec(type, x, y)
		}

		if( (which == 0 && this.mouseControls[ which ]) || (this.mouseControls[ which ].down == false && type == "mousemove") ){
			this.mouseControls[ 0 ].exec("mousedown", x, y);
		}
	}
	else{
		// console.log([which,type]);
	}
};
Eventhandler.prototype.updateMouseXY = function(x,y) {
	this.mouse.x = x;
	this.mouse.y = y;

	this.mouse.clamp(0, game.width);

	this.mouse.projected.addVectors(this.mouse, game.camera.position);
};
Eventhandler.prototype.loop = function() {
	for(var k in this.keyboardControls){
		if( this.keyboardControls[ k ].down ){
			this.keyboardControls[ k ].exec("continuous");
		}
	}
	for(var m in this.mouseControls){
		if( this.mouseControls[ m ].down ){
			this.mouseControls[ m ].exec("continuous", this.mouse.x, this.mouse.y);
		}
	}
	if(this.mouseControls[0])
		this.mouseControls[0].exec("mousedown", this.mouse.x, this.mouse.y)
}

Eventhandler.prototype.resetControls = function() {
	this.keyboardControls = {};
	this.mouseControls = {};
}
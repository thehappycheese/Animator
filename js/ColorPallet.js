function ColorPallet(cname){
	"use strict";
	Widget.call(this);
	
	
	this.colors = [];
	this.saved = [];
	this.cursor = 0;
	this.sw = 10;
	
	
	
	
	
	
	this.canvas = new Canvas();
	this.ctx = this.canvas.ctx;
	this.appendChild(this.canvas.canvas);
	
	this.b1 = document.createElement("input");
	this.b1.type = "color";
	this.b1.value = "b1";
	this.b1.className = "nerf";
	this.appendChild(this.b1);
	
	this.b2 = document.createElement("input");
	this.b2.type = "color";
	this.b2.value = "b1";
	this.b2.className = "nerf";
	this.appendChild(this.b2);
	
	this.on("DOMNodeInserted", (function(){
		this.canvas.fillContainer();
		this.canvas.canvas.height-=30;
	}).bind(this));
	
	
	
	
	
	this.fill = (function(){
		/*var divs = 5;
		var r;
		var g;
		var b;
		for(r = 0; r <= divs; r++){
			for(g = 0; g <= divs; g++){
				for(b = 0; b <= divs; b++){
					var col = {
						r:Math.round(r/divs*255),
						g:Math.round(g/divs*255),
						b:Math.round(b/divs*255)
					}
					this.colors.push(col);
				}
			}
		}*/
		
	}).bind(this);
	
	
	
	this.drawSquare = (function(m){
		var p = this.getCoords(m);
		var c = this.colors[m];
		
		this.ctx.fillStyle = "rgb(" + c.r + "," + c.g + "," + c.b + ")";
		this.ctx.fillRect(p.x, p.y, this.sw, this.sw);
	}).bind(this);
	
	
	
	this.drawAll = (function(){
		for(var i = 0; i < this.colors.length; i++){
			this.drawSquare(i);
		}
	}).bind(this);
	
	
	
	this.getCoords = (function(ind){
		var xw = Math.floor(this.c.w/this.sw);
		//var xw = 18;
		var res = {x:0,y:0};
		res.x = (ind%xw) * this.sw;
		res.y = (ind-(ind%xw))/xw*this.sw;
		return res;
	}).bind(this);
	
	
	this.fill();
	this.drawAll()
	
	
}
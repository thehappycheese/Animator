function ColorPallet(cname){
	"use strict";
	Widget.call(this);
	
	
	this.colors = [];
	this.saved = [];
	this.cursor = 0;
	this.sw = 10;
	
	this.primary = new color.Color(255,255,255,255);
	this.secondary = new color.Color(0,0,0,255);
	
	
	
	this.canvas = new Canvas();
	this.canvas.width = 290;
	this.canvas.height = 290;
	this.canvas.ctx.translate(1,1);
	this.ctx = this.canvas.ctx;
	this.appendChild(this.canvas.canvas);
	
	
	this.sliderMain = document.createElement("input");
	this.sliderMain.type = "range";
	this.sliderMain.value = "0";
	this.sliderMain.min = 0;
	this.sliderMain.max = 255;
	this.sliderMain.style.margin = "0px";
	this.sliderMain.style.width = "100%";	
	this.sliderMain.addEventListener("change",(function(){
		this.drawPicker();
	}).bind(this));
	this.appendChild(this.sliderMain);
	
	this.canvas.on("mousedown",(function(e){
		var buff = this.canvas.ctx.getImageData(this.canvas.mouseX, this.canvas.mouseY,1,1).data;
		if(e.button==0){
			this.primary.r = buff[0];
			this.primary.g = buff[1];
			this.primary.b = buff[2];
		}else if(e.button==2){
			this.secondary.r = buff[0];
			this.secondary.g = buff[1];
			this.secondary.b = buff[2];
		}
		this.drawPrimarySecondary()
	}).bind(this));
	
	this.setPrimary = (function(c){
		this.primary = c;
	}).bind(this);
	this.setSecondary = (function(c){
		this.primary = c;
	}).bind(this);
	
	
	this.drawPicker = (function(){
		var r = Math.round(parseFloat(this.sliderMain.value));
		var g = 0;
		var b = 0;
		for(g=0; g<=8; g++){
			for(b=0; b<=8; b++){
				this.ctx.fillStyle = "rgb("+(r).toFixed(0)+","+(255-g*32).toFixed(0)+","+(255-b*32).toFixed(0)+")";
				this.ctx.fillRect(g*16,b*16,16,16);
			
			}
		}
		
		for(g=0; g<=8; g++){
			for(b=0; b<=8; b++){
				this.ctx.fillStyle = "rgb("+(g*32).toFixed(0)+","+(255-b*32).toFixed(0)+","+(r).toFixed(0)+")";
				this.ctx.fillRect(g*16+128+16,b*16,16,16);
			
			}
		}
		
		for(g=0; g<=8; g++){
			for(b=0; b<=8; b++){
				this.ctx.fillStyle = "rgb("+(b*32).toFixed(0)+","+(r).toFixed(0)+","+(255-g*32).toFixed(0)+")";
				this.ctx.fillRect(g*16,b*16+128+16,16,16);
			
			}
		}
		
		
	}).bind(this);
	
	this.drawPrimarySecondary = (function(){
		var m = 128+16;
		var b = 20;
		this.canvas.ctx.fillStyle = this.secondary.toString();
		this.canvas.ctx.fillRect(m+b*3,m+b*3,m-4*b,m-4*b);
				this.canvas.ctx.fillStyle = this.primary.toString();
		this.canvas.ctx.fillRect(m+b,m+b,m-4*b,m-4*b);
	}).bind(this);
	
	this.drawPicker();
	this.drawPrimarySecondary();
}
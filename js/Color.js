

var color = new (function(){
	
	this.Color = function(ar, ag, ab, aa){
		this.r = ar || 0;
		this.g = ag || 0;
		this.b = ab || 0;
		this.a = aa || 255;
		
		this.r = Math.round(this.r);
		this.g = Math.round(this.g);
		this.b = Math.round(this.b);
		this.a = Math.round(this.a);
		
		this.toString = (function(){
			var result = ((this.r << 16) | (this.g << 8) | this.b).toString(16);
			while(result.length<6){
				result= "0"+result;
			}
			return result;
		}).bind(this);
	}
	
	this.fromAngle = (function(ang){
		
		var angDiff = function(a,b){
			var d = a - b;
			while(d>180){
				d-=360;
			}
			while(d<-180){
				d+=360;
			}
			return d;
		}
		
		var r = Math.max(0,(120-Math.abs(angDiff(0,ang)))/120*255);
		var g = Math.max(0,(120-Math.abs(angDiff(120,ang)))/120*255);
		var b = Math.max(0,(120-Math.abs(angDiff(-120,ang)))/120*255);
		var cf = 255/Math.max(r,b,g);
		
		return new this.Color(r*cf, g*cf, b*cf)
		
	}).bind(this);
	
	// 360, 255, 1;
	this.HSB = (function(h, s, b){
		this.fromAngle(h)
	}).bind(this);
	
	this.rgbToHex = function(r, g, b) {
		if (r > 255 || g > 255 || b > 255)
			throw "Invalid color component";
		var result = ((r << 16) | (g << 8) | b).toString(16);
		while(result.length<6){
			result= "0"+result;
		}
		return result;
	}

})();
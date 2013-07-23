

var color = new (function(){
	
	this.Color = function(ar, ag, ab, aa){
		this.r = ar || 0;
		this.g = ag || 0;
		this.b = ab || 0;
		this.a = aa || 0;
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
	

})();
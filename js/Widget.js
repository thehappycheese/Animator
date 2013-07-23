

function Widget(){
	EventDispatcher.call(this);
	
	this.body = document.createElement("div");
	this.style = this.body.style;
	this.appendChild = (this.body.appendChild).bind(this.body);
	
	this.style.width = "100%";
	this.style.height = "100%";
	
	this.container = null;
	
	this.placeMeIn = (function(parentId){
		this.container = document.getElementById(parentId);
		this.container.appendChild(this.body);
		this.dispatch("DOMNodeInserted");
	}).bind(this);

}
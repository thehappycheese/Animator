

function Widget(){
	EventDispatcher.call(this);
	
	this.element = document.createElement("div");
	this.style = this.element.style;
	this.appendChild = (this.element.appendChild).bind(this.element);
	
	this.style.width = "100%";
	this.style.height = "100%";
	
	this.container = null;
	
	this.place = (function(parentId){
		this.container = document.getElementById(parentId);
		this.container.appendChild(this.element);
		this.dispatch("placed");
	}).bind(this);

}
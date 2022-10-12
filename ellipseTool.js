function ellipseTool(){
	this.icon = "assets/ellipse.jpg";
	this.name = "Ellipse";

	//mouse coordinates for the line starting point
	//set it to -1 to begin with
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
	//if the mouse is pressed
		if(mouseIsPressed){
			//check if starMouseX and Y are -1. 
			//set them to the current mouse X and Y if they are.
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
			//draw the starting point of the line
				drawing = true;
				loadPixels();
			}

			//if startMouseX is not equal to -1,
			//draw a line between starMouseX, Y to the current mouse X and Y.
			else{
				//keep the last line that was drawn.
				updatePixels();
				noFill();
				this.selectItem = select('#strokeWeight');
				this.selectItem = this.selectItem.value();
				var w = this.selectItem;
				strokeWeight(w);
				ellipse(startMouseX, startMouseY, (mouseX - startMouseX) *2, (mouseY - startMouseY) *2);
			}

		}

		else if(drawing){
			//if the status of drawing is fales (the mouse is not pressed), set startMouse X and Y to -1.
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
	
	this.populateOptions = function() {
		select(".options").html
		(
			"<div> Ellipse stroke size: </div><input type = 'number' id = 'strokeWeight' name = 'number' value = '1'>"	
		)};
	
	this.unselectTool = function()
	{
		select(".options").html("");
	}


}

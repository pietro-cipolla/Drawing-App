function rectangleTool(){
	this.icon = "assets/rectangle.jpg";
	this.name = "Rectangle";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function()
	{

		if(mouseIsPressed)
		{
			if(startMouseX == -1)
			{
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//loadPixels is a p5.js property that loads the pixels 
				//data for the display window into the pixels[] array.
				loadPixels();
			}

			else
			{
				//Updates the display window with the data in the pixels[] array. 
				//Necessary only to apply changes. 
				updatePixels();
				noFill();
				this.selectItem = select('#strokeWeight');
				this.selectItem = this.selectItem.value();
				var w = this.selectItem;
				strokeWeight(w);
				rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
				
			}

		}
		// This part allows user to draw more than one line on canvas.
		//Otherwise it will be possible just to manipulate with mouseX, mouseY point,
		// not to start a new line
		else if(drawing)
		{
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
	
	this.populateOptions = function() 
	{
		select(".options").html
		(
			"<div> Rectangle stroke size: </div><input type = 'number' id = 'strokeWeight' name = 'number' value = '1' >"	
		)
	};
	
	this.unselectTool = function()
	{
		select(".options").html("");
	}
}



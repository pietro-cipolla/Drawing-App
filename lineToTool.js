//it is a tool for drawing straight lines. 
function LineToTool()
{
//set an icon and a name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

//Those values store the locations from the last frame. They are set both to -1 because the drawing has not yet begun.
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function()
	{
//when mouse is presse draw a line 
		if(mouseIsPressed)
		{
//check if X coordinate are equal to -1.
//set them to the current X and Y if they are.                         
        	if(startMouseX == -1)
			{
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true
//loadPixels() function saves the current pixel Array
				loadPixels();
			}

			else
			{
//updatePixels() function takes the saved pixels with loadPixels() and make the main image again
				updatePixels();
				this.selectItem = select('#strokeWeight');
				this.selectItem = this.selectItem.value();
				var w = this.selectItem;
				strokeWeight(w);
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing)
		{
//save the pixels with the recent line and reset the drawing tool and start locations
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
	
	this.populateOptions = function() 
	{
		select(".options").html
		(
			"<div> Line size: </div><input type = 'number' id = 'strokeWeight' name = 'number' value = '1'>"	
		)
	};
	
	this.unselectTool = function()
	{
		select(".options").html("");
	}


}

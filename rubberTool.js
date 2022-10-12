function rubberTool(){
    //Set icon and name of tool
    this.name = "rubber";
    this.icon = "assets/rubber.png";


    var previousMouseX = -1;
	var previousMouseY = -1; 

    this.draw = function()
	{
       if(mouseIsPressed)
	   {
       		push();
            stroke(255,255,255);
			this.selectItem = select('#strokeWeight');
			this.selectItem = this.selectItem.value();
			var w = this.selectItem;
			strokeWeight(w);

            if(previousMouseX == -1)
			{
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            else
			{
               line(previousMouseX,previousMouseY,mouseX,mouseY);
               previousMouseX = mouseX;
               previousMouseY = mouseY; 
            }
            
            pop();
        }
        else
		{
            previousMouseX = -1;
            previousMouseY = -1; 
        }
    
    }
	
	this.populateOptions = function() 
	{
		select(".options").html
		(
			"<div> Rubber size: </div><input type = 'number' id = 'strokeWeight' name = 'number' value = '10'>"	
		)
	};
	
	this.unselectTool = function()
	{
		select(".options").html("");
	}
  
}
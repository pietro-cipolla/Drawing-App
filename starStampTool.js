this.preload =function() 
{
	star = loadImage('./assets/star.png');
}


function starStampTool()
{
	this.icon = "./assets/star.png";
    this.name = "Star";

    var star = loadImage("./assets/star.png");
    var starSize = 30;
    var nStarSlider;
    var starSizeSlider = createSlider(5, 50, 20);
    starSizeSlider.parent("#sizeOfStampControl");
   	var nStarSlider = createSlider(1, 20, 5);
    nStarSlider.parent("#numberOfStampControl");  
        
    this.draw = function()
    {
		if(mouseIsPressed)
    	{
    		for(var i = 0; i < nStarSlider.value(); i++)
			{	
        		var starSize = starSizeSlider.value();
            	var starX = random((mouseX - starSize/2)-10, (mouseX - starSize/2)+10);
            	var starY = random((mouseY - starSize/2)-10, (mouseY - starSize/2)+10);
            	image(star, starX, starY, starSize, starSize);
         	}
            
     	}
		

	}
		
	this.populateOptions = function()
	{
		select(".options").html
		(
			"<div> Number of Stars: </text><input type = 'range' id = 'NumberOfStars' name = 'NumberOfStars' min = '1' max = '100'<div> <div> Size of Stars: </text><input type = 'range' id = 'SizeOfStars' name = 'SizeOfStars' min = '1' max = '100'<div> " 
		)
	}
	this.unselectTool = function()
	{
		select(".options").html("");
	}
	
}
        
    
       
                                                
        
        
    
       
     
	
    
    

this.preload =function() 
{
	star = loadImage('./assets/heart.png');
}

function heartStampTool()
{
    this.icon = "./assets/heart.png";
    this.name = "Heart";

    var heart = loadImage("./assets/heart.png");
    var heartSize = 30;
    var nHeartSlider;
    var heartSizeSlider = createSlider(5, 50, 20);
    heartSizeSlider.parent("#sizeOfStampControl");
    var nHeartSlider = createSlider(1, 20, 5);
    nHeartSlider.parent("#numberOfStampControl");  
        
    this.draw = function()
    {
		
    	if(mouseIsPressed)
        {
           for(var i = 0; i < nHeartSlider.value(); i++)
           {
           		var heartSize = heartSizeSlider.value();
                var heartX = random((mouseX - heartSize/2)-10, (mouseX - heartSize/2)+10);
                var heartY = random((mouseY - heartSize/2)-10, (mouseY - heartSize/2)+10);
                image(heart, heartX, heartY, heartSize, heartSize);
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
        
    
       
                                                
        
        
    
       
     
	
    
    

function textTool()
{
	this.icon = "assets/text.png";
	this.name = "Text"
	
	this.draw = function()
	{
		if(mouseIsPressed)
		{
			this.selectItem = select('#textInput');
			this.selectItem = this.selectItem.value();
			var t = this.selectItem;
			text(t, mouseX, mouseY);
		}
	}
	
	this.populateOptions = function()
	{
		select(".options").html
		(
			"<div> Type text here: </text><input type = 'text' id = 'textInput' name = 'text'> <div>" 
		)
	}
	
	this.unselectTool = function()
	{
		select(".options").html("");
	}

}


 
 
 

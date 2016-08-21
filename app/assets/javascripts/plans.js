
$(function(){
	
	$("#bars li .bar").attr("data-percentage", loadData())
	
	
	function loadData(){
		
		var data = [12, 32, 53, 64, 34, 23]
		
		for(var i = 0; i <  data.length; i++){
			return i;
		}
		
		
	}
	
	
});
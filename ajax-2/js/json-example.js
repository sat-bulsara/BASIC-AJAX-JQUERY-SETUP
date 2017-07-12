// jquery call to wait for DOM to load
$(document).ready(function(){
	// container to output data
	var container = "";
	// API call as variable
	var jokeUrl = "https://api.icndb.com/jokes/random/15/";

	// jquery ajax 
	$.ajax({
		url: jokeUrl,
		type: "GET",
		// datatype can be json or json p
		dataType: "json",
			success: function (data){
			// UL to hold list 
			var output="<ul>";
			// loop through json file to output each joke as an individual list item
	        for (var x in data.value) {
	            container += "<li>" + "<a href="+ jokeUrl + data.value[x].joke +">" + data.value[x].joke + "</a>" + "</li>";
	        }
	        // UL closing tagto hold list 
	        output+="</ul>";
	        $('#output').html(container);
	    }
	});
});








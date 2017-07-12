$(document).ready(function(){
    var container = "";
    var firstRoot = "https://jsonplaceholder.typicode.com/comments";
    var secondRoot = "https://jsonplaceholder.typicode.com/todos";

    var firstData, secondData;
	$.when(
	    $.getJSON(firstRoot, function(data) {
	        firstData = data;

	    }),
	    $.getJSON(secondRoot, function(data) {
	        secondData = data;
	    })
	).then(function() {
	    if (secondData) {
	        var output="<ul>";
	        // loop through json file 
	        for (var x in secondData) {
	            container += "<li>"
	            + "<p>" + secondData[x].title + "</p>" 
				"</li>";
	        }
	        // UL closing tagto hold list 
	        output+="</ul>";
	    }
	    else {
	        var output="<p>error</p>";
	    }
	    if (firstData) {
	        var output="<ul>";
	        // loop through json file 
	        for (var x in firstData) {
	            container += "<p>" + firstData[x].name + "</p>";
	        }
	        // UL closing tagto hold list 
	        output+="</ul>";
	    }
	    else {
	        var output="<p>error</p>";
	    }

	    $('#output').html(container);
	});

});









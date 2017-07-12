$(document).ready(function(){
    var container = "";
    var root = "https://jsonplaceholder.typicode.com/photos/";

    $.ajax({
      url: root,
      method: "GET"
    }).then(function(data) {
      console.log(data);
      var output="<ul>";
        // loop through json file to output each joke as an individual list item
        for (var x in data) {
            container += "<li>" + "<a href="+ data[x].thumbnailUrl +" target='_blank'>" 
            + "<p>" + data[x].title + "</p>" 
            + "<img src='" + data[x].thumbnailUrl + "' />"
            + "</a>" + "</li>";
        }
        // UL closing tagto hold list 
        output+="</ul>";
        $('#output').html(container);
    });

});









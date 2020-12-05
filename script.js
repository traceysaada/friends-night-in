
//search recipe search button
$(document).ready(function(){
  $("#recipeBtn").on("click", function(){
    var recipeSearch = $("#recipeInput").val();
    recipeData(recipeSearch);

  });
  // recipe button funciton/ API call
function recipeData(recipeSearch){
  $.ajax({
    url: "https://api.edamam.com/search?app_id=40897fdb&app_key=e7085ffc3bbf333e4fcc1dfd79fa54fd&q=" + recipeSearch,
    method: "GET",
  }).then(function(response){
    console.log("I am the ", response);
  });
}

//search movie button 
$("#movieBtn").on("click", function (){
  var movieSearch = $("#movieInput").val(); 
  movieData(movieSearch);

});

// movie button function/ API call
function movieData(movieSearch) {
  $.ajax({
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=e7dd88c3" + movieSearch,
    method: "GET",
  }).then(function (response){
    console.log("I am the ", response);
  });
}


})
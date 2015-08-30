// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  getItems();
});


$("form").on("submit", function(e){
  e.preventDefault();
  var $name = $("#name");
  var $category = $("#category");

  $.ajax({
    method: "POST",
    url: "/api/v1/list",
    data: {
      name: $name.val(),
      category: $category.val()
    }
  }).done(function(data){
    $name.val("");
    $category.val("");
    $("#fail").hide();
    $("#success").show().html("Success!");
    $("#results").empty();
    getItems();
  }).fail(function(err){
    // do stuff with error message
  })
});

// rewrite results delete to handle delete or put

$("#results").on("mouseenter", "a p", function(){
});

$("#results").on("click", "a p", function(){
  var id = $(this).attr("id");
  console.log(id);
  $.ajax({
    method: "DELETE",
    url: ("/api/v1/list/"+id)
  }).done(function(err, data){
    console.log(data);
    getItems();
  }).fail(function(err){
    return;
  });
});


function getItems(){
  $("#results").empty();
  $.ajax({
    method: "GET",
    url: "/api/v1/list"
  }).done(function(data){
    data.forEach(function(item){
      $("#results").prepend("<a><p id='"+item._id+"''>"+item.name+" -- "+item.category+"</p></a>");
    })
  }).fail(function(err, data){
    console.log("Client Side Fail: "+data || err)
  })
}




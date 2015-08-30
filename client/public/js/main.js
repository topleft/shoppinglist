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
    $("#fail").hide();
    $("#success").show().html(data.message);
    $("#results").empty();
    getItems();
    // data.list.forEach(function(item){
    // $("#results").prepend("<p id='"+item.id+"''>"+item.name+" -- "+item.category+"</p>");
    // })
  }).fail(function(err){
    // do stuff with error message
  })
})

function getItems(){
  $.ajax({
    method: "GET",
    url: "/api/v1/list"
  }).done(function(data){
    data.forEach(function(item){
      $("#results").prepend("<p>"+item.name+" -- "+item.category+"</p>");
    })
  }).fail(function(err, data){
    console.log("Client Side Fail: "+data || err)
  })
}






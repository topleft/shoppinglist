// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
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
    console.log(data);
    $("#fail").hide();
    $("#success").show().html(data.message);
    $("#results").empty();
    data.list.forEach(function(item){
    $("#results").prepend("<p id='"+item.id+"''>"+item.name+" -- "+item.category+"</p>");
    })
  }).fail(function(err){
    // do stuff with error message
  })
})
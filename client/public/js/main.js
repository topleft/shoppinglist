// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  getList();
});

function getList(){
  $.ajax({
    method: "GET",
    url: "/api/v1/list"
  }).done(function(data){
    data.list.forEach(function(item){
      $("#results").prepend("<p id='"+item.id+"''>"+item.name+" -- "+item.category+"</p>");
    })
  })
}


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
      $name.val("");
      $category.val("")
      data.list.forEach(function(item){
        $("#results").prepend("<p id='"+item.id+"''>"+item.name+" -- "+item.category+"</p>");
    })
  }).fail(function(err){
      $("#fail").show().html(err.responseJSON.error);
      $("#success").hide();
      $("#results").empty();
  })
})
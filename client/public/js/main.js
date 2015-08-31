// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  getItems();
});


$("#main-form").on("submit", function(e){
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
    $("#place-holder").hide();
    $("#success").show().html("Success!");
    $("#results").empty();
    getItems();
  }).fail(function(err){
    // do stuff with error message
  })
});

// manipulate single items within modal
$("#results").on("click", "tr", function(e){
  e.stopPropagation();

  var $this = $(this)
  $(".modal").modal("show");
  var id = $this.attr("id");
  var row = $this.closest("tr").clone()[0]
  $("#modal-item").empty().append(row);

});

$("#delete").on("click", function(e){
  e.stopPropagation();
  var id = $("#modal-item tr")[0];
  id = $(id).attr("id");
  $.ajax({
  method: "DELETE",
  url: ("/api/v1/list/"+id)
}).done(function(err, data){
    $(".modal").modal("hide");
    getItems();
  }).fail(function(err){
  return;
  });
});



$("#update").one("click", function(e){
  e.stopPropagation();
  var id = $("#modal-item tr")[0];
  id = $(id).attr("id");
  $.ajax({
  method: "PUT",
  url: ("/api/v1/list/"+id),
  data: {
    category: $("#input-update-category").val()
  }
}).done(function(err, data){
    getItems();
    $(".modal").modal("hide");
  }).fail(function(err){
    console.log("fail")
    return;
  });
});





function getItems(){
  console.log("once")
  $("#results").empty();
  $.ajax({
    method: "GET",
    url: "/api/v1/list"
  }).done(function(data){
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(i)
      $("#results").append("<tr id='"+data[i]._id+"'><td><a>"+data[i].name+"</a></td><td><a>"+data[i].category+"</a></td></tr>");
    };

    // data.forEach(function(item){
    //   $("#results").prepend("<a><p id='"+item._id+"''>"+item.name+" -- "+item.category+"</p></a>");
    // })
  }).fail(function(err, data){
    console.log("Client Side Fail: "+err)
  })
}




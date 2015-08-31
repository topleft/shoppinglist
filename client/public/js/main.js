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
    $("#success").show().html("Success!");
    $("#results").empty();
    getItems();
  }).fail(function(err){
    // do stuff with error message
  })
});

// rewrite results delete to handle delete or put
// try to pull delete button outside of modal

$("#results").on("click", "a p", function(e){
  e.stopPropagation();
  $(".modal").modal("show");
  var id = $(this).attr("id");

  $("#delete").one("click", function(e){
    console.log(e)
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


  $("#modal-form").on("submit", function(e){
    e.preventDefault();
    console.log($('#input-update-category').val());

    $.ajax({
    method: "PUT",
    url: ("/api/v1/list/"+id),
    data: {
      category: $("#input-update-category").val()
    }
  }).done(function(err, data){
      console.log(data);
      getItems();
    }).fail(function(err){
      console.log("fail")
      return;
    });
  });
});


// $("#results").on("click", "a p", function(){
//   console.log(id);
//   $.ajax({
//     method: "DELETE",
//     url: ("/api/v1/list/"+id)
//   }).done(function(err, data){
//     console.log(data);
//     getItems();
//   }).fail(function(err){
//     return;
//   });
// });


function getItems(){
  $("#results").html('');
  $.ajax({
    method: "GET",
    url: "/api/v1/list"
  }).done(function(data){
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(i)
      $("#results").prepend("<a><p id='"+data[i]._id+"''>"+data[i].name+" -- "+data[i].category+"</p></a>");
    };

    // data.forEach(function(item){
    //   $("#results").prepend("<a><p id='"+item._id+"''>"+item.name+" -- "+item.category+"</p></a>");
    // })
  }).fail(function(err, data){
    console.log("Client Side Fail: "+err)
  })
}




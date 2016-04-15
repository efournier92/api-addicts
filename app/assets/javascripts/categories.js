window.onload = init();
var category;
function init(){
  var categories = $('#categories').children();
  for (var i = 0; i < categories.length; i++) {
    document.getElementById(categories[i].id).addEventListener("click", changeApis);
  }
  // $.ajaxSetup({
  //             'beforeSend': function (xhr){
  //             xhr.setRequestHeader("Accept", "text/javascript")}
  // });

}

function changeApis() {
  category = event.currentTarget.id;
  var request = $.ajax({
    method: "GET",
    url: "/v1/change/" + event.currentTarget.id
    // data: { api_id: id }
  });

  request.done(function(data) {
    debugger;
    destroyCurrent();
    $('.trending-section').append( "<div class='large-title'>" + category + "</div>" );
    $('.trending-section').append(data)
  });
}

function destroyCurrent(){
  $('.trending-section').children().remove();
}

// function attachNewApi(){
//   $('.trending-section').append("<%= escape_javascript(render '/apis/index.html.erb' ) %>")
// }
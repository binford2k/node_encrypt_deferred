$(document).ready(function(){
  $("body").bind("showoff:loaded", function (event) {
    $(".content.animate").bind("showoff:show", function (event) {
      $(event.target).find(".animate").hide();
      $(event.target).find(".animate").slideDown(900);
    });
  });
});
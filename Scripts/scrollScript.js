$(function () {
    $(document).scroll(function(){
      var $nav = $("#topNav");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
  })
$(document).ready(function() {
      $(".Clickable").click(function() {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
      });
      $(".btn1").click(function(){
        $("img").slideDown();
      });
      $(".btn2").click(function(){
        $("img").slideUp();
      });
      $(".btn3").click(function(){
        $("img").slideToggle();
      });
      $(".btn4").click(function(){
        $("img").fadeIn();
      });
      $(".btn5").click(function(){
        $("img").fadeOut();
      });
     });
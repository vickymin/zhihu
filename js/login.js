$(document).ready(function(){
  var links = $(".slider").children("a");
  var views = $(".view");
  if(links.length != views.length){
    return;
  }
  function change(i) {
    links.eq(i).on("click", function(){
      //清除所有a的class
      links.removeClass("active");
      views.css("display", "none");
      $(links[i]).addClass("active");
      views.eq(links[i].index).css("display", "block");
      if(links[i].index == 1){
        $(".slider-bar").css("transform", "translate3d(76px,0,0)");
      }else{
        $(".slider-bar").css("transform", "translate3d(0,0,0)");
      }
    });
  }
  for(var i = 0; i < views.length; i++){
    links[i].index = i;
    change(i);
  }
  $(".qrcode").on("mouseover",function(){
    $(".qrcode-download").css("display","none");
    $(".qrcode-scane").css("display","block");
  });
  $(".qrcode").on("mouseout",function(){
    $(".qrcode-scane").css("display","none");
    $(".qrcode-download").css("display","block");
  });
});

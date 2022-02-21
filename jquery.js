$(function(){
  console.log("tezt")
});

  //ex01
  $(function(){
    $('#show').on('click', function(){
      $('#name').css('visibility', 'visible');
    });
  });

  $(function(){
    $('#colorChange').on('click', function() {
      $('#name').toggleClass('chang');
    });
  });

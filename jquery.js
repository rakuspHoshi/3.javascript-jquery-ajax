$(function(){
  console.log("tezt")
});

  //ex01
  $(function(){
    $('#show').on('click', function(){
      $('#name').css('visibility', 'visible');
    });
  });

  //ex02
  $(function(){
    $('#colorChange').on('click', function() {
      $('#name').toggleClass('chang');
    });
  });

  //ex03
  
  $(function(){
    $('#hobby').on('change', function() {
      if($('#hobby').val() == '2'){
        $('.3').css('display', 'none')
        $('.2').css('display', 'block');
      } else if($('#hobby').val() == '3') {
        $('.2').css('display', 'none');
        $('.3').css('display', 'block');
      } else {
        $('.2').css('display', 'none');
        $('.3').css('display', 'none')
      }
    });
  });

  //ex04
  $(function () {
    $('#ex04').submit(function () {
      $(this).find(':submit').prop('disabled', 'true');
    });
  });

  //ex05
  $(function(){
    $('#ex05').find(':submit').on('click', function(){
      if($('#inputEmail').val() === ''){
        alert('メールアドレスを入力してください！');
      }
    });
  });

  

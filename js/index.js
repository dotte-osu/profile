//for startting page
$(function () {
  setTimeout(function () {
    $('#start').fadeOut(500);
  }, 8000);
});

//for color change
$(function () {
  var secArr = new Array();
  var current = -1;
  var secColor = new Array('rgb(255, 20, 147)', 'rgb(189, 20, 255)', 'rgb(227, 224, 43)', 'rgb(21, 198, 86)');
  $('.colorchange').each(function (i) {
    secArr[i] = $(this).offset().top;
  });
  function chengeBG(secNum) {
    if (secNum != current) {
      current = secNum;
      $('.wrapper').css({ backgroundColor: secColor[current] });
      $('.title').css({ color: secColor[current] });
      if (current === 0) {
        $('#nav1').css({ color: "white" });
        $('#nav2').css({ color: "rgb(57,62,70)" });
        $('#nav3').css({ color: "rgb(57,62,70)" });
        $('#nav4').css({ color: "rgb(57,62,70)" });
      } else if (current === 1) {
        $('#nav1').css({ color: "rgb(57,62,70)" });
        $('#nav2').css({ color: "white" });
        $('#nav3').css({ color: "rgb(57,62,70)" });
        $('#nav4').css({ color: "rgb(57,62,70)" });
      } else if (current === 2) {
        $('#nav1').css({ color: "rgb(57,62,70)" });
        $('#nav2').css({ color: "rgb(57,62,70)" });
        $('#nav3').css({ color: "white" });
        $('#nav4').css({ color: "rgb(57,62,70)" });
      } else {
        $('#nav1').css({ color: "rgb(57,62,70)" });
        $('#nav2').css({ color: "rgb(57,62,70)" });
        $('#nav3').css({ color: "rgb(57,62,70)" });
        $('#nav4').css({ color: "white" });
      }
    }
  }
  $(window).on('load scroll resize', function () {
    for (var i = secArr.length - 1; i >= 0; i--) {
      if ($(window).scrollTop() > secArr[i]) {
        chengeBG(i);
        break;
      }
    }
  });
});
//for scrollins
$(function () {
  $(window).scroll(function () {
    $('.projectfadein').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 80) {
        $(this).addClass('scrollin');
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $('.timeline').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 80) {
        $(this).addClass('scrollin');
      }
    });
  });
});
$(function () {
  $(window).scroll(function () {
    $('.timeline-work').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 80) {
        $(this).addClass('scrollin');
      }
    });
  });
});
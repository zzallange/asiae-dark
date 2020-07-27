/*
$(document).ready(function(){
  $("input[type=search]").focus(function(){
    //$("span").css("display", "inline").fadeOut(2000);
    $('.btn_cls').show();
  });

  $("input[type=search]").blur(function(){
    //$("span").css("display", "inline").fadeOut(2000);
    $('.btn_cls').hide();
  });
});
*/

$(document).ready(function () {
    //var mfURL = window.location.href;
    var clearBtn = $('.btn_cls');
    /*
    if ( mfURL.indexOf('https://m.asiae.co.kr/search.html') > -1) {
        $("input[type=search]").focus();
        $("input[type=search]").trigger('click');
    } else {
        
    };
    */
    //clear butotn - clear func
    $('.btn_cls').click(function (e) { 
        e.preventDefault();
        $(this).hide();
        $('.lnb_srarch').val('');
    });

    //clear butotn - page load show?
    if ( $('.lnb_srarch').val().length > 0 ) {
        clearBtn.show();
    };

    //clear butotn - search input on focus
    $('.lnb_srarch').on('focusin', function () {
        if( $(this).val().length > 0 ) {
            clearBtn.show();
        } else {
            clearBtn.hide();
        }
    });

    //clear butotn - type show and hide
    $('.lnb_srarch').on('keyup', function () {
        if( $(this).val().length > 0 ) {
            // Enable submit button
            clearBtn.show();
       } else {
            // Disable submit button
            clearBtn.hide();
       }
    });
});

//Top Button
$(window).scroll(function() {
    if($(window).scrollTop() > $('header').height()){
        $('.btn_top').addClass('on');
    } else {
        $('.btn_top').removeClass('on');
    }
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  fortune_tab01 = document.getElementsByClassName("fortune_tab01");
  for (i = 0; i < fortune_tab01.length; i++) {
    fortune_tab01[i].className = fortune_tab01[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
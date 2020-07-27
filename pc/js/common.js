$(document).ready(function () {
  //레이어 열림/닫힘
  var mainAlloBtn = $("#btn_main_menu"), //메인 메뉴 햄버거 버튼
    menuOpenBtn = $("#btn_menu_id"), //메뉴 햄버거 버튼
    menuOpenflBtn = $("#btn_float_menu"), //플로팅메뉴 햄버거 버튼
    menuOpenlayer = $("#menu_all_id"), // 메뉴 레이어
    menuCloseBtn = $("#btn_memu_close_id"); // 메뉴 레이어에 X 닫기버튼
  
  
  mainAlloBtn.on('click', function (e) {
    e.preventDefault();
    if (menuOpenlayer.hasClass('vis_main')) {
      menuOpenlayer.add(mainAlloBtn).removeClass('vis_main');
      $('html').css({ overflow: 'auto', height: 'auto' });
      
    } else {
      menuOpenlayer.add(mainAlloBtn).addClass('vis_main');
      $('html').css({ overflow: 'hidden', height: '100%' });
    }
  });

  menuOpenBtn.on('click', function (e) {
    e.preventDefault();
    if (menuOpenlayer.hasClass('vis')) {
      menuOpenlayer.add(menuOpenBtn).removeClass('vis');
      $('html').css({ overflow: 'auto', height: 'auto' });

    } else {
      menuOpenlayer.add(menuOpenBtn).addClass('vis');
      $('html').css({ overflow: 'hidden', height: '100%' });
    }
  });

  menuOpenflBtn.on('click', function (e) {
    e.preventDefault();
    if (menuOpenlayer.hasClass('visflt_m')) {
      menuOpenlayer.add(menuOpenflBtn).removeClass('visflt_m');
      $('html').css({ overflow: 'auto', height: 'auto' });

    } else {
      menuOpenlayer.add(menuOpenflBtn).addClass('visflt_m');
      $('html').css({ overflow: 'hidden', height: '100%' });
    }
  });

  menuCloseBtn.on('click', function (e) {
    e.preventDefault();
    menuOpenlayer.removeClass('vis_main');
    menuOpenlayer.removeClass('visflt_m');
    menuOpenlayer.removeClass('vis');
    mainAlloBtn.removeClass('vis_main');
    menuOpenBtn.removeClass('vis');
    menuOpenflBtn.removeClass('visflt_m');
    $('html').css({ overflow: 'auto', height: 'auto' });
  }); // 메뉴 레이어 팝업
  

});

/* head 상단 롤링배너 */
$(function() {
    var time = 500;
    var idx = idx2 = 0;
    var slide_width = $(".roll_img > ul").width();
    var slide_count = $(".roll_img > ul li").size();
    $(".roll_img > ul li:first").css("display", "block");
    if(slide_count > 1)
        //$(".btn").css("display", "inline");

    $("#prev_btn").click(function() {
        if(slide_count > 1) {
            idx2 = (idx - 1) % slide_count;
            if(idx2 < 0)
                idx2 = slide_count - 1;
            $(".roll_img > ul li:hidden").css("left", "-"+slide_width+"px");
            $(".roll_img > ul li:eq("+idx+")").animate({ left: "+="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", "-"+slide_width+"px");
            });
            $(".roll_img > ul li:eq("+idx2+")").css("display", "block").animate({ left: "+="+slide_width+"px" }, time);
            idx = idx2;
        }
    });

    $("#next_btn").click(function() {
        if(slide_count > 1) {
            idx2 = (idx + 1) % slide_count;
            $(".roll_img > ul li:hidden").css("left", slide_width+"px");
            $(".roll_img > ul li:eq("+idx+")").animate({ left: "-="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", slide_width+"px");
            });
            $(".roll_img > ul li:eq("+idx2+")").css("display", "block").animate({ left: "-="+slide_width+"px" }, time);
            idx = idx2;
        }
    });
});



$(document).ready(function(){
	// 검색창 오픈
    $('a.btn_search').click(function(){ // ID가 toggleButton인 요소를 클릭하면
        var state = $('.header_sear').css('display'); // state 변수에 ID가 moreMenu인 요소의 display의 속성을 '대입'
        if(state == 'none'){ // state가 none 상태일경우
            $(this).attr('class','btn_searchon') 
            $('.header_sear').show(); // ID가 moreMenu인 요소를 show();
        }else{
            $(this).attr('class','btn_search') 
            $('.header_sear').hide(); // ID가 moreMenu인 요소를 hide();         
        }
    });
    
//                        $('body').on('click', function () {
//                            $('.btn_search').show();
//                            $('.headerSearch').hide();
//                        });
});

$(document).ready(function(){
    $('.gnlc_marea').hover(
        function(){
            $(this).css({'display':'block'});
            $('.depth_3 > a').addClass('active');
            $('.depth_3 > a').css("color", "#ed1d25");
        },
        function(){
            $(this).css({'display':'none'});
            $('.depth_3 > a').removeClass('active');
            $('.depth_3 > a').css("color", "#777");
            $('.on.depth_3 > a').css("color", "#ed1d25");
        }
    );
	

    $('a.btn_title').hover(
        function(){
            $('.lc_marea').css({'display':'block'});
        },
        function(){
            $('.lc_marea').css({'display':'none'});
        }
    );

    $('.lc_marea').hover(
        function(){
            $(this).css({'display':'block'});
            $('a.btn_title').addClass('on');
        },
        function(){
            $(this).css({'display':'none'});
            $('a.btn_title').removeClass('on');
        }
    );

    $('.depth_3 > a').hover(
        function(){
            $('.gnlc_marea').css({'display':'block'});
            $(this).css("color", "#000");
        },
        function(){
            $('.gnlc_marea').css({'display':'none'});
            $(this).css("color", "#777");
            $('.on.depth_3 > a').css("color", "#ed1d25");
        }
    );    
 });




/* 특징주 레이어 */
$(document).ready(function(){
    $('.btn_open').attr('class','btn_open');
    $('.lay_feature').css('display','none');
    $(".btn_open").click(function() {
        var display=$(this).next('.lay_feature').css('display');
        $('.btn_open').attr('class','btn_open');
        $('.lay_feature').css('display','none');
        if (display == "none") {
            $(this).attr('class','btn_open sub_on');
            $(this).next('.lay_feature').css('display', 'block');
        } else {
            $(this).attr('class','btn_open');
            $(this).next('.lay_feature').css('display', 'none');
        }
    });

    $(".lay_feature .btn_close").click(function() {
        $('.lay_feature').css('display','none');
    });
});


/* 오피니언 롤링배너 */
$(function() {
    var time = 500;
    var idx = idx2 = 0;
    var slide_width = $(".toon_rollimg > ul").width();
    var slide_count = $(".toon_rollimg > ul li").size();
    $(".toon_rollimg > ul li:first").css("display", "block");
    if(slide_count > 1)
        //$(".btn").css("display", "inline");

    $(".btn_prev").click(function() {
        if(slide_count > 1) {
            idx2 = (idx - 1) % slide_count;
            if(idx2 < 0)
                idx2 = slide_count - 1;
            $(".toon_rollimg > ul li:hidden").css("left", "-"+slide_width+"px");
            $(".toon_rollimg > ul li:eq("+idx+")").animate({ left: "+="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", "-"+slide_width+"px");
            });
            $(".toon_rollimg > ul li:eq("+idx2+")").css("display", "block").animate({ left: "+="+slide_width+"px" }, time);
            idx = idx2;
        }
    });

    $(".btn_next").click(function() {
        if(slide_count > 1) {
            idx2 = (idx + 1) % slide_count;
            $(".toon_rollimg > ul li:hidden").css("left", slide_width+"px");
            $(".toon_rollimg > ul li:eq("+idx+")").animate({ left: "-="+slide_width+"px" }, time, function() {
                $(this).css("display", "none").css("left", slide_width+"px");
            });
            $(".toon_rollimg > ul li:eq("+idx2+")").css("display", "block").animate({ left: "-="+slide_width+"px" }, time);
            idx = idx2;
        }
    });
});

/* 포토영상 상단 슬라이드 */
$(document).ready(function() {

    var $panel = $(".rolling_panel").find("ul");

    var itemWidth = $panel.children().outerWidth(); // 아이템 가로 길이
    var itemLength = $panel.children().length;      // 아이템 수

    // Auto 롤링 아이디
    var rollingId;

    auto();

    // 배너 마우스 오버 이벤트
    $panel.mouseover(function() {
        clearInterval(rollingId);
    });

    // 배너 마우스 아웃 이벤트
    $panel.mouseout(function() {
        auto();
    });

    // 이전 이벤트
    $("#prev").on("click", prev);

    $("#prev").mouseover(function(e) {
        clearInterval(rollingId);
    });

    $("#prev").mouseout(auto);

    // 다음 이벤트
    $("#next").on("click", next);

    $("#next").mouseover(function(e) {
        clearInterval(rollingId);
    });

    $("#next").mouseout(auto);


    function auto() {

        /* 2초마다 start 호출
        rollingId = setInterval(function() {
            start();
        }, 2000);
        */
    }

    function start() {
        $panel.css("width", itemWidth * itemLength);
        $panel.animate({"left": - itemWidth + "px"}, function() {

            // 첫번째 아이템을 마지막에 추가하기
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

            // 첫번째 아이템을 삭제하기
            $(this).find("li:first").remove();

            // 좌측 패널 수치 초기화
            $(this).css("left", 0);
        });
    }

    // 이전 이벤트 실행
    function prev(e) {
        $panel.css("left", - itemWidth);
        $panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
        $panel.animate({"left": "0px"}, function() {
            $(this).find("li:last").remove();
        });
    }

    // 다음 이벤트 실행
    function next(e) {
        $panel.animate({"left": - itemWidth + "px"}, function() {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
});


/* 뉴스 기사뷰 공유 더보기 레이어팝업 */
$(document).ready(function(){
    $('.btn_frame').click( function(e) {
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('.area_floatbarn .frame_box').toggle();
    });
    
    /*
    $('.area_floatbarn .frame_box').click( function(e) {        
        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too        
    });
    */

    $('.btn_goback').click( function(e) {
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('.tit_sns .frame_box').toggle();
    });

    /*    
    $('.tit_sns .frame_box').click( function(e) {        
        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too        
    });
    */

    $('.btn_iframe').click( function(e) {
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('.g_photo .util_com .frame_box').toggle();
    });

    $('.btn_iframe02').click( function(e) {
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('.util_com .frame_box').toggle();
    });

    $('.btn_share').click( function(e) {
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('.toon_sns .frame_box').toggle();
    });

    $('.btn_google > a').click( function(e) {
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('.util_menu .flag_layerbox').toggle();
    });
    
    $('body').click( function() {       
        $('.area_floatbarn .frame_box').hide();
        $('.tit_sns .frame_box').hide();
        $('.photo_txt .frame_box').hide();
        $('.util_com .frame_box').hide();
        $('.g_photo .util_com .frame_box').hide();
        $('.toon_sns .frame_box').hide();
        $('.util_menu .flag_layerbox').hide();
    });
    
    /* 2020.05.19 공유하기버튼 */
    $('.sns_area .share').click(function(){
        $('.share_box').toggleClass('on');
    });
    /*$('.btn_comment').click(function(){
        $(this).toggleClass('on');
    })*/
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

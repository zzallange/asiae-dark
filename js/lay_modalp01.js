/* layer모달 popup 열기 공유하기 메인등 */
$('.t_share').click(function(e){
	e.preventDefault();
	$('.wrapsns_layer').addClass('active');
});

/* layer모달 popup close sns */
$('.wrapsns_layer .btn_close').click(function(){
	$('.wrapsns_layer').removeClass('active');
	//$('html').css({'overflow':'', 'height':''});
	$('html, body').css({'overflow':''});
});

$('.wrapsns_layer .btn_close').click(function(){
	$('.wrapsns_layer').removeClass('active');
	//$('html').css({'overflow':'', 'height':''});
	$('html, body').css({'overflow':''});
});

$('.wrapsns_layer').click(function () {  
    $(this).removeClass('active');
    $('html, body').css({'overflow':''});
});


/* layer모달 popup 열기 sns 기사뷰 */
$('.btn_snsshare').click(function(e){
	e.preventDefault();
	$('.wrapsns_layer').addClass('active');
});

/* layer모달 popup close sns */
$('.wrapsns_layer .btn_close').click(function(){
	$('.wrapsns_layer').removeClass('active');
	//$('html').css({'overflow':'', 'height':''});
	$('html, body').css({'overflow':''});
});

$('.wrapsns_layer .btn_close').click(function(){
	$('.wrapsns_layer').removeClass('active');
	//$('html').css({'overflow':'', 'height':''});
	$('html, body').css({'overflow':''});
});

$('.wrapsns_layer').click(function () {  
    $(this).removeClass('active');
    $('html, body').css({'overflow':''});
});

/* layer모달 popup 열기 font */
$('.btn_font').click(function(e){
	e.preventDefault();
	$('.wrapfont_layer').addClass('active');
});

/* layer모달 popup close font */
$('.wrapfont_layer .btn_close').click(function(){
	$('.wrapfont_layer').removeClass('active');
	//$('html').css({'overflow':'', 'height':''});
	$('html, body').css({'overflow':''});
});

/*
$(document).on('mouseup touchend',function(e){
	if(!$(e.target).hasClass('sns_layer') && !$(e.target).parents().hasClass('sns_layer')){
		$('.wrapsns_layer').removeClass('active');
		$('html, body').css({'overflow':''});
	}

	if(!$(e.target).hasClass('font_layer') && !$(e.target).parents().hasClass('font_layer')){
		$('.wrapfont_layer').removeClass('active');
		$('html, body').css({'overflow':''});
	}
});
*/


$('.btn_snsall').click(function(){
    var state = $('.wrapsns_tit').css('display'); // state 변수에 ID가 moreMenu인 요소의 display의 속성을 '대입'
    if(state == 'none'){ // state가 none 상태일경우 
        $('.wrapsns_tit').show(); // ID가 moreMenu인 요소를 show();
        $('body').css({'overflow':'hidden', 'height':'100%'});
    }else{ // 그 외에는
        $('.wrapsns_tit').hide(); // ID가 moreMenu인 요소를 hide();  
        $('body').css({'overflow':'', 'height':''});
    }
});

/* layer모달 popup close tit sns */
$('.wrapsns_tit .btn_shut').click(function(e){
	e.preventDefault();
	$('.wrapsns_tit').css({'display':'none'});
	$('body').css({'overflow':'', 'height':''});
});

$(document).on("click", function(e){  
    if( $(".wrapsns_tit").is(e.target)) {
        $('.wrapsns_tit').css({'display':'none'});
        $('body').css({'overflow':'', 'height':''});
    }
});

$(document).ready(function(){
    $('.inner_bx a').click( function() {       
        $('.wrapsns_tit').css({'display':'none'});
        $('body').css({'overflow':'', 'height':''});
    });
    
});

/* 검색창레이어 열기 */
$('.btn_search').click(function(e){
	e.preventDefault();
	$('.sharch_layerwp').addClass('active');
	$('body').css({'overflow':'hidden', 'height':'100%'});
});

/* layer모달 popup close sns */
$('.sharch_layerwp .btn_close').click(function(){
	$('.sharch_layerwp').removeClass('active');
	$('body').css({'overflow':'', 'height':''});
});

/* input 텍스트 입력시 버튼활성화, 비활성화 */
$(document).ready(function () {
    var clearBtn2 = $('.btn_incls');

    //clear butotn - clear func
    $('.btn_incls').click(function (e) { 
        e.preventDefault();
        $(this).hide();
        $('.in_incls').val('');
    });

    //clear butotn - page load show?
    if ( $('.in_incls').val().length > 0 ) {
        clearBtn2.show();
    };

    //clear butotn - search input on focus
    $('.in_incls').on('focusin', function () {
        if( $(this).val().length > 0 ) {
            clearBtn2.show();
        } else {
            clearBtn2.hide();
        }
    });

    //clear butotn - type show and hide
    $('.in_incls').on('keyup', function () {
        if( $(this).val().length > 0 ) {
            // Enable submit button
            clearBtn2.show();
       } else {
            // Disable submit button
            clearBtn2.hide();
       }
    });
});

/* google layer모달 popup close */
$('.wrapgootrans_layer .btn_closetr').click(function(){
    $('.wrapgootrans_layer').removeClass('active');
    $('html, body').css({'overflow':''});
});

/* google layer모달 popup 열기 */
$('.btn_gootrans').click(function(e){
    e.preventDefault();
    $('.wrapgootrans_layer').addClass('active');
});

$('.wrapgootrans_layer').click(function () {  
    $(this).removeClass('active');
    $('html, body').css({'overflow':''});
});
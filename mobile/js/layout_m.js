(function (window, document, $) {
$(function () {
    var $content = $('#container'),
        $head = $('#head'),
        //$externalIframe = $('#loadExternalPage'),
        menuCode = '',
        $mainContainer = $content.find('.cont_wrapswipe'),
        activeIndex = 0,
        deviceHeight = $(window).height(),
        //플리킹 메뉴제거 favoriteDatas = utils.favoriteMenus.getListToString().split(','),
        favoriteDatas = ["visualnews"],
        isBindEventSlick = false, //home의 view 의 slick 이벤트가 바인드 유무
        isLogin = false,
		listType = "image",
		beforeActiveSlideId = "",
		afterActiveSlideId = "";
	(function init() {
        //home 탭메뉴 이동
		$('.homeSlickGoTo').click(function () {
			var index = getSlickSliderIndex($(this).parent("li").attr("id").replace("li_", ""));
		    $mainContainer.slick('slickGoTo', index, true);
		});
		//init view slider
        if ($mainContainer.children().length > 1) {
            // main container swipe event start
        	$mainContainer.slick({
        		slidesToShow: 1, 
                infinite: true,
                arrows: false,
                adaptiveHeight: true,
                accessibility: false,
                mobileFirst: true,
        		//swipeToSlide: true,
				//touchThreshold: 100,
				speed: 100,
                waitForAnimate: false,
                verticalSwiping: false,
        	}).on('beforeChange', function (event, slick, currentSlide) {
        		beforeActiveSlideId = $(slick.$slides[currentSlide]).attr('id');
        	}).on('afterChange', function (event, slick, currentSlide) {
		        event.stopPropagation();
		        event.preventDefault();
				
		        var $activeSlide = $(slick.$slides[currentSlide]);
		        var activeSlideId = $activeSlide.attr('id');
		        afterActiveSlideId = $activeSlide.attr('id');
		        if (activeSlideId !== undefined) {
		        	activeSlideId = activeSlideId.replace('div_', '');
		        	$('.li_nav').removeClass();
		        	$('#li_' + activeSlideId).addClass('on li_nav');
		        	
		        	if (beforeActiveSlideId !== afterActiveSlideId) {
		        		var scrollElm = document.scrollingElement || window;
		        		$(scrollElm).scrollTop(0);
		        	}
		        }

		        scrollAlign();
		    });
        	//-- main container swipe event end

		    var scrollDisableSwipeTimer = null;

		    isBindEventSlick = true;

		    if (isBindEventSlick) {
		    	var scrollTimer;
		        $(window).bind('scroll', function () {
		            clearTimeout(scrollTimer);
		            scrollTimer = setTimeout(scrollCallback, 100);
		        });
		        var scrollCallback = function () {
		            $mainContainer.slick('setPosition', 0);
		        }
		    }
		    $mainContainer.slick('slickGoTo', getSlickSliderIndex(), true); //이동	    
		    $(".slick-slide").show();
		}

        var contentSlideTimer = null;
	    $content.on('touchstart', '*[data-trigger="flicking"]', function (e) {
			e.stopPropagation();
			if (isBindEventSlick) {
				$mainContainer.slick('slickSetOption', 'swipe', false);
			}
	    }).on('touchmove', '*[data-trigger="flicking"]', function (e) {
			e.stopPropagation();
			if (isBindEventSlick) {
				$mainContainer.slick('slickSetOption', 'swipe', false);
			}
	    }).on('touchend', '*[data-trigger="flicking"]', function (e) {
			e.stopPropagation();
			if (isBindEventSlick) {
				clearTimeout(contentSlideTimer);
				contentSlideTimer = setTimeout(function () {
					$mainContainer.slick('slickSetOption', 'swipe', true);
				}, 100);
			}
		});
    })();

    function scrollAlign(){
        var scrollMenuOn = $(".scroll_wrap .scroller ul li.on"),
            scroller = $(".scroll_wrap .scroller");
        scroller.animate({
            scrollLeft : scrollMenuOn.offset().left + scroller.scrollLeft() + scrollMenuOn.width()/2 - scroller.width()/2 
        }, 500);
    }

    function getSlickSliderIndex(menuId) {
	    try {
	        return $("div#" + "div_" + menuId).index() - 1;
	    }
	    catch (e) {
	        return 0;
	    }
	}
});
})(window, document, jQuery);
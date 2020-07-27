function onswipe(selector, callback) {
    $(document).on('touchstart mousedown', selector, function(e) {
        if (e.originalEvent.touches && e.originalEvent.touches.length > 1) {
            $(this).data({
                start: null,
                swiping: null
            });
            return;
        }
    }).on('touchmove mousemove', selector, function(e) {
        var $this = $(this);
        var start = $this.data('start');
        if (start) {
            var current = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0] : e;
            var diffX = Math.abs(current.clientX - start.clientX);
            var diffY = Math.abs(current.clientY - start.clientY);
            if (diffX <= 10 && !$this.data('swiping'))
                return;
            $this.data('swiping', true);
            if (diffY <= 10)
                e.preventDefault();
            if (diffY > 70 || diffX > 60) {
                $this.data({
                    start: null,
                    swiping: null
                });
                if (diffY < 70 && diffX > 60) {
                    e.preventDefault();
                    if (callback && "function" == $.type(callback)) {
                        callback(current.clientX < start.clientX, this);
                    }
                }
            }
        }
    }).on('touchend mouseup', selector, function(e) {
        $(this).data({
            start: null,
            swiping: null
        });
    });
}

$(function() {
    $(window).load(function() {
        $('.btn_allmenu').click(function() {
            if (history.replaceState) {
                history.replaceState({
                    gnb: 'close'
                }, '');
                history.pushState({
                    gnb: 'open'
                }, '');
            }
            return gnb_open();
        });
        onswipe('.head_logo', function(swipeRight) {
            if (swipeRight) {
                gnb_close();
            }
        });
        $('.lnb_lay .btn_close').click(function() {
            return gnb_close();
        });
    });

    function gnb_open() {
        try {
            window.android.setPullToRefresh(false);
        } catch (e) {}
        $('.lnb_lay').animate({
            right: '0px'
        }, 300);
        $('.head_logo > .m_dim').height($(window).height() + 'px').fadeIn();
        $('.head_logo > .m_dim').click(function() {
            return gnb_close();
        });
        $('.lnb_lay').scrollTop('0');
        $('html, body, #wrap').css({
            'height': '100%'
        });
        return false;
    }

    function gnb_close() {
        try {
            window.android.setPullToRefresh(true);
        } catch (e) {}
        $('.lnb_lay').animate({
            right: '-100%'
        }, 300, function() {
            $('html, body, #wrap').css({
                'height': 'auto'
            });
        });
        $('.head_logo > .m_dim').fadeOut();
        return false;
    }
});
(function ($) {

    'use strict';

    let scrollPosi = 0;

    window.onload = function () {
        var f = 0;
        for (f = 0; f < 10; f++) {
            $('#main_title').before('<div class="firefly"></div>');
        }
        scroll_effect();
        $('.effect_fadeT').addClass('effect_scroll');
        $(window).scroll(function () {
            scrollPosi = $(document).scrollTop();
            $('#main_image_inner').stop(true, true).animate({
                'background-position-y': -scrollPosi / 3 + 'px'
            }, 100);
            scroll_effect();
        });
    }


    function scroll_effect() {
        $('.effect_fade').each(function (i) {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50) {
                $(this).addClass('effect_scroll');
            } else {
                $(this).removeClass('effect_scroll');
            }
        });
    }

})(jQuery);
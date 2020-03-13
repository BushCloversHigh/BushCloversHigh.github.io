(function ($) {

    'use strict';

    let scrollPosi = 0;

    $(function () {
        var h = $(window).height();
        $('#page').css('display', 'none');
        $('#loader-bg ,#loader').height(h).css('display', 'block');
    });

    $(window).on('load', function () { //全ての読み込みが完了したら実行
        setTimeout(stopload, 1000);
    });

    //10秒たったら強制的にロード画面を非表示
    $(function () {
        setTimeout(stopload, 10000);
    });

    function stopload() {
        $('#loader-bg').delay(1000).fadeOut(800);
        $('#loaderanim').delay(500).fadeOut(300);
        $('#nowloading').delay(500).fadeOut(300);
        $('#nowloading').text('Completed!');
        $('#page').css('display', 'block');
    }

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
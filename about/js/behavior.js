var clickNum = 0;
var isMiniGame = false;
function myclick() {
    if (clickNum < 5) {
        clickNum++;
    } else {
        if (!isMiniGame) {
            isMiniGame = true;
            $('#minigame').append('<div class="heading gray effect_fade"><h1>Secret</h1><h2>ゲームを隠しておきました。</h2><h2>見つけてくださりありがとうございます！</h2></div>');
            $('#minigame').append('<iframe id="gamescreen" src="/SuperMiniGame2/index.html" width="900" height="300" frameborder="0"></iframe>');
            $("html,body").animate({scrollTop:$('footer p').offset().top});
        }
    }
}

(function ($) {

    'use strict';

    let scrollPosi = 0;

    var isLoaded = false;

    function handleTouchMove(event) {
        event.preventDefault();
    }
    function scroll_enable(Boolean) {
        if (Boolean) {
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            $('html, body').css('overflow', 'visible');
        } else {
            document.removeEventListener('touchmove', handleTouchMove, { passive: false });
            $('html, body').css('overflow', 'hidden');
        }
    }

    $(function () {
        var h = $(window).height();
        $('#page').css('display', 'none');
        $('#loader-bg ,#loader').height(h).css('display', 'block');
    });

    $(window).on('load', function () {
        isLoaded = true;
        setTimeout(load_complete, 1000);
    });

    $(function () {
        setTimeout(stop_load, 10000);
    });

    function stop_load() {
        if (isLoaded) { return };
        $('#page').css('display', 'block');
        $('#loader-bg').delay(1000).fadeOut(800);
        $('#loaderanim').delay(500).fadeOut(300);
        $('#nowloading').delay(500).fadeOut(300);
        $('#nowloading').text('待たせてすみません。ロード中ですが表示します。');
        setTimeout(start_scroll_effect, 1000);
    }

    function load_complete() {
        $('#loader-bg').delay(1000).fadeOut(800);
        $('#loaderanim').delay(500).fadeOut(300);
        $('#nowloading').delay(500).fadeOut(300);
        $('#nowloading').text('Completed !');
        $('#page').css('display', 'block');
        setTimeout(start_scroll_effect, 1000);
    }

    function start_scroll_effect() {
        setTimeout(scroll_enable, 3000, true);
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
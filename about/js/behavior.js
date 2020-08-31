var isLoaded = false;
var isScrollable = false;
var clickNum = 0;
var isMiniGame = false;

function myclick() {
    if (clickNum < 5) {
        clickNum++;
    } else {
        if (!isMiniGame) {
            isMiniGame = true;
            $('#secret').append('<div class="heading gray fadein up"><h1>Secret</h1><h2>ゲームを隠しておきました。</h2><h2>見つけてくださりありがとうございます！</h2></div>');
            if (window.matchMedia('(max-width: 480px)').matches) {
                $('#secret').append('<iframe id="gamescreen" src="/SuperMiniGame2/index.html" width="370" height="124" frameborder="0"></iframe>');
            } else {
                $('#secret').append('<iframe id="gamescreen" src="/SuperMiniGame2/index.html" width="900" height="300" frameborder="0"></iframe>');
            }
            $('#menu_secret').text('Secret');
            $("html,body").animate({ scrollTop: $('#copyright p').offset().top });
        }
    }
}

function clickScroll(id) {
    if (isScrollable) {
        $("html,body").animate({ scrollTop: $('#' + id).offset().top - 175 });
    }
}

function handleTouchMove(event) {
    event.preventDefault();
}

var scrollPosition;

function scroll_enable(Boolean) {
    if (Boolean) {
        isScrollable = true;
        $(window).off('.noScroll');
        $('body').removeClass('fixed').css({ 'top': 0 });
        window.scrollTo(0, scrollPosition);
    } else {
        isScrollable = false;
        $(window).on('touchmove.noScroll', function (e) {
            e.preventDefault();
        });
        scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({ 'top': -scrollPosition });
    }
}

function show_popup_game(id) {
    scroll_enable(false);
    $('.popup').addClass('is-show');
    $('.popup-inner').append('<iframe id="popup_window" src="./details/games/' + id + '.html" frameborder="0"></iframe>');
}

function show_popup_illust(id) {
    scroll_enable(false);
    $('.popup').addClass('is-show');
    $('.popup-inner').append('<iframe id="popup_window" src="./details/illusts/' + id + '.html" frameborder="0"></iframe>');
}

function show_popup_model(id) {
    scroll_enable(false);
    $('.popup').addClass('is-show');
    $('.popup-inner').append('<iframe id="popup_window" src="./details/models/' + id + '.html" frameborder="0"></iframe>');
}

function close_popup() {
    scroll_enable(true);
    setTimeout(function () {
        $('#popup_window').remove();
    }, 600);
    $('.popup').removeClass('is-show');
}


(function ($) {

    'use strict';

    let scrollPosi = 0;

    $(function () {
        var h = $(window).height();
        $('#page').css('display', 'none');
        $('#loader-bg ,#loader').height(h).css('display', 'block');
    });

    $(window).on('load', function () {
        setTimeout(load_complete, 1000);
    });

    $(function () {
        // setTimeout(load_complete, 10000);
    });

    function load_complete() {
        if (isLoaded) { return };
        isLoaded = true;
        $('#loader-bg').delay(1000).fadeOut(800);
        $('#loaderanim').delay(500).fadeOut(300);
        $('#nowloading').delay(500).fadeOut(300);
        $('#nowloading').text('Completed !');
        $('#page').css('display', 'block');
        scroll_enable(false);
        setTimeout(start_scroll_effect, 1000);
    }

    function start_scroll_effect() {
        setTimeout(scroll_enable, 1000, true);
        var f = 0;
        for (f = 0; f < 10; f++) {
            $('#main_title').before('<div class="firefly"></div>');
        }
        scroll_effect();
        $('.fadein.long').addClass('effector');
        $(window).scroll(function () {
            scrollPosi = $(document).scrollTop();
            $('#main_image_inner').stop(true, true).animate({
                'background-position-y': -scrollPosi / 3 + 'px'
            }, 100);
            scroll_effect();
        });
    }

    function scroll_effect() {
        $('.fadein').each(function (i) {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50) {
                $(this).addClass('effector');
            } else {
                $(this).removeClass('effector');
            }
        });
    }

    $(window).scroll(function () {
        scrollPosi = $(document).scrollTop();
        if (scrollPosi > $(window).height() * 1.1) {
            $('.top_header').addClass('visible');
        } else {
            $('.top_header').removeClass('visible');
        }
    });

})(jQuery);
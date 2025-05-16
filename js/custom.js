$(function () {

    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        speed: 1000,
    });


    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .play').off('click').on('click', function () {
        var $btn = $(this);
        if ($btn.hasClass('on')) {

            $('.main_visual_slide').slick('slickPlay');
        } else {

            $('.main_visual_slide').slick('slickPause');
        }
        $btn.toggleClass('on');
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext');
    });
});


$(function () {
    $(".main_sec02_slide").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        spaceBetween: 20,
        arrows: true,
        prevArrow: $(".main_sec02 .arrows .prev"),
        nextArrow: $(".main_sec02 .arrows .next"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

$(function () {
    const MIS = new Swiper('.main_sec04_slide', {
        loop: true,
        effect: 'fade',
        pagination: {
            el: '.main_sec04 .page',
            clickable: true,
        },


        navigation: {
            nextEl: '.main_sec04 .next',
            prevEl: '.main_sec04 .prev',
        },
    });

});
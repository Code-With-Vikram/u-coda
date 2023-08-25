$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 55) {
            $('#header').addClass('fixed')
        }
        else {
            $('#header').removeClass('fixed')
        }
    });
    $('.bar-btn').click(function () {
        $('.menu').toggleClass('nav-on');
        $('.menu ul').slideToggle();
    });





});






$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        centerMode: true,
        responsive:[
            {
                breakpoint:1365,
                settings:{
                    slidesToShow:3
                }
            },
            {
                breakpoint:767,
                settings:{
                    slidesToShow:2
                }

            },
            {

                breakpoint:575,
                settings:{
                    slidesToShow:1
                }
            }
        ]

    })

});



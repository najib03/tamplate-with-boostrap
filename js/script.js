$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    $('.jumbotron .display').css({
        'transform': 'translate(0px,' + wScroll / 3 + '%)'
    })

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 3 + '%)'
    })
    $('.jumbotron a').css({
        'transform': 'translate(0px,' + wScroll / 1.5 + '%)'
    })


    if (wScroll > $('.portofolio').offset().top - 100) {
        $('.portofolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portofolio .thumbnail').eq(i).addClac('muncul');

            }, 300 * i);
        })
    }
});
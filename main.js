
$(document).ready(function () {
    $('body').on('click', 'ul li a', function () {
        var mood = $(this).data('mood');
        $('body').find('ul p').text(mood);
        $('ul').addClass('stop');
        $('body').find('ul li a').removeClass('active');
        $(this).addClass('active');
        $(this).children('img.smoke').fadeIn(0, function() {
            $(this).delay(1800).fadeOut(200, function(){
                $('ul').removeClass('stop')
            });
        });
    });
});
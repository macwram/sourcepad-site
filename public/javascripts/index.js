(function($) {
    $('.down-arrow').on('click', function(){
         $('html, body').animate({
            scrollTop: $(".clients").offset().top - 50
        }, 1000);
    });
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $('.down-arrow').fadeOut('slow')
        }
    });
})(jQuery);
(function($) {
    $('.square').first().addClass('active');
    $('.thumb').on('click', '.square', function(){
        var a = $(this).attr('style')
        var b = $('.single').attr('style')
        $('.single').attr('style', a)
        $('.square').removeClass('active')
        $(this).addClass('active')
    })
})(jQuery);
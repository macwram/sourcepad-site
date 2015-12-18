(function($){
    $('.navbar-toggle').on('click', function(){
        $('.overlay').toggleClass('hide')
        $('body').toggleClass('hidescroll')
    });
    $('.overlay').on('click', function(){
        $('.navbar-toggle').click()
    });
})(jQuery);
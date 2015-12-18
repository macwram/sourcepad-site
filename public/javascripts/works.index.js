(function($) {
    function setlink(page, link){
        $('.icon-ellipsis').attr('href', page);
        $('.icon-open').attr('href', link);

    }
	$('.links').on('click', function(event){
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = this.getElementsByTagName('a');
            setlink($(link).attr('info'), $(link).attr('link'))
            console.log($(link).attr('link'))
        blueimp.Gallery(links, options);
        $('#blueimp-gallery').data('useBootstrapModal', false);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);
    })

    $('.prev, .next').on('click', function(){
        var clas = $(this).attr('class');
        $('.slides .slide').each(function(x, y){
            if($(y).css('transform') == 'matrix(1, 0, 0, 1, 0, 0)'){
                if(clas == 'next'){
                    y = $(y).next()
                }else{
                    y = $(y).prev()
                }
                var link = $('.links a[title="'+y.find('img').attr('title')+'"]')[0]
                setlink($(link).attr('info'), $(link).attr('link'))
            }
        })
    })

})(jQuery);
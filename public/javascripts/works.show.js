(function($) {
	var insert = function(data){
		return '<div class="item" id="'+data.title+'">'
					+'<div class="plr10 works">'
					+'<h2 class="text-center fs3 pbtm40 ptop50">'+data.name+'</h2>'
					+'<div class="col-md-12 single pno"><img src="/images/works/'+data.title+'.jpg"/></div>'
					+'<div class="clearfix"></div>'
					+'<div class="desc ptop50">'
					+'<p>Having great taste is one of the most important characteristics of designers, programmers, and managers alike. Being able to discern what’s good from that which is important characteristics of designers, programmers, and managers alike. Being able to discern what’s good from that which</p>'
					+'<p>If the most important characteristics of designers, programmers, and managers alike. Being able to discern what’s good from that ristics of designers, programmers, and managers alike. Being able to discern what’s good from that whichristics of designers, programmers, and managers alike. Being able to discern</p>'
					+'</div>'
					+'<div class="ptop100"></div>'
					+'<div class="col-md-12 pno">'
					+'<a href="http://'+data.link+'" class="btn btn-default btn-md" target="_blank">http://'+data.link+'</a>'
					+'</div>'
					+'</div>'
				+'</div>'
	}
    $('.nav').on('click', 'a', function(){
    	var carousel = $('#carousel')
    	var href = window.location.href.split('?')[0]
    	var to = href.lastIndexOf('/') +1
		var newurl =  href.substring(0,to)
		var active = carousel.find('.item.active')
		var id = active.attr('id')
    	var type = $(this).attr('class')
    	var sibling;
    	if(type == 'next'){
    		sibling = active.next()
    	}else{
    		sibling = active.prev()
    	}
    	if(sibling.length){
    		carousel.carousel(type)
    	}else{
    		$.post(
	    		'/navigatework/'+type+'/'+id,
	    		{},
	    		function(data){
	    			if(data){
	    				var html = insert(data)
		    			if(type == 'next'){
		    				active.after(html)
		    			}else{
		    				active.before(html)
		    			}
		    			carousel.carousel(type)
		    			var newtitle = data.name+' | SourcePad';
		    			history.pushState({}, newtitle, newurl+data.title)
		    			document.title = newtitle
	    			}else{

	    			}
	    			
	    		}
	    	)
    	}
    })
})(jQuery);
function random(num){
    var text = "";
    var possible = "!@+=][}{|;:.<>,?/#$%^&*()-+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < num; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
function replaceAt(s, n, t){
    return s.substring(0, n) + t + s.substring(n + 1);
}
function randomstring(string){
	return replaceAt(replaceAt(random(string.length), 2, ' '),8, ' ')
}
function randstringnum(string){
	return Math.floor((Math.random()*string.length) + 1)
}
function finish(string){
	$('.loading').html(string).promise().done(function(){
		setInterval(function(){
			$('.th').css('opacity', '1')
			$('body').css('overflow', 'scroll')
			setTimeout(function(){
		    	$('.down-arrow').addClass('bounce')
		    }, 1500);
		}, 1200);
	});
}
function replacestring(newstring, rands, string){
	$.each(rands, function(i, x){
		newstring = replaceAt(newstring, x, string.charAt(x))
	})
	return newstring
}
function five(rands,string){
	setTimeout(function(){
    	rands.push(11)
    	rands.push(13)
        $('.loading').html(replacestring(randomstring(string), rands, string))
        finish(string);
    }, 300);
}
function four(rands,string){
	setTimeout(function(){
    	rands.push(9)
    	rands.push(10)
    	rands.push(12)
        $('.loading').html(replacestring(randomstring(string), rands, string))
        five(rands, string);
    }, 300);
}
function three(rands,string){
	setTimeout(function(){
    	rands.push(5)
    	rands.push(7)
        $('.loading').html(replacestring(randomstring(string), rands, string))
        four(rands, string);
    }, 300);
}
function two(rands,string){
	setTimeout(function(){
    	rands.push(3)
    	rands.push(4)
    	rands.push(6)
        $('.loading').html(replacestring(randomstring(string), rands, string))
        three(rands, string);
    }, 300);
}
function one(rands,string){
    setTimeout(function(){
    	rands.push(0)
    	rands.push(1)
        $('.loading').html(replacestring(randomstring(string), rands, string))
        two(rands, string);
    }, 300);
}


function init(){
	$("html,body").scrollTop(0);
	var string = "We Build Ideas"
	$('.th').css('opacity', '0');
	$('.loading').html('').removeClass('th').css('opacity', '1');
	$('body').css('overflow', 'hidden')
	var rands = []

	// var t= setInterval(function(){
	// 	var n = 0
	// 	while (n < 3) {
	// 		rands.push(randstringnum(string))
	// 		rands.push(0)
	// 		n++;
	// 	}
	// 	$('.loading').html(replacestring(randomstring(string), rands, string))
	// }, 400);
	$('.loading').html(replacestring(randomstring(string), rands, string))
	one(rands, string);

	setInterval(function(){
		// clearInterval(t);
		
	}, 3000);
}
init();


// should me moved to another page
$('.down-arrow').on('click', function(){
	 $('html, body').animate({
        scrollTop: $(".clients").offset().top - 50
    }, 1000);

});

window.addEventListener("scroll", function(event) {
    var top = this.scrollY,
        left =this.scrollX;
        // console.log(top)
}, false);

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
	if(scroll > 100){
		$('.down-arrow').fadeOut('slow')
	}
});


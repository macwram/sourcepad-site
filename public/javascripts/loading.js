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
function finish(t, string){
	clearInterval(t);
	$('.loading').html(string).promise().done(function(){
		setInterval(function(){
			$('.th').css('opacity', '1')
			$('body').css('overflow', 'scroll')
		}, 2000);
	});
}
function replacestring(newstring, rands, string){
	$.each(rands, function(i, x){
		newstring = replaceAt(newstring, x, string.charAt(x))
	})
	console.log(newstring)
	return newstring
}
function init(){
	$("html,body").scrollTop(0);
	var string = "We Build Ideas"
	$('.th').css('opacity', '0')
	$('body').css('overflow', 'hidden')
	var rands = []

	var t= setInterval(function(){
		var n = 0
		while (n < 3) {
			rands.push(randstringnum(string))
			n++;
		}
		$('.loading').html(replacestring(randomstring(string), rands, string))
	}, 400);

	setInterval(function(){
		finish(t, string)
	}, 3000);
}
init();


// should me moved to another page
$('.down-arrow').on('click', function(){
	 $('html, body').animate({
        scrollTop: $(".clients").offset().top - 50
    }, 1000);

});


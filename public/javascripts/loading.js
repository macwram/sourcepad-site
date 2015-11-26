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

function init(){
	var string = "We Build Ideas"

	$('.th').css('opacity', '0')
	$('body').css('overflow', 'hidden')
	$(window).scrollTop(0)

	var t= setInterval(function(){
		$('.loading').html(replaceAt(replaceAt(random(string.length), 2, ' '),8, ' '))
	}, 400);

	setInterval(function(){
		clearInterval(t);
		$('.loading').html(string).promise().done(function(){
			setInterval(function(){
				$('.th').css('opacity', '1')
				$('body').css('overflow', 'scroll')
			}, 2000);
		});
	}, 3000);
}
init();
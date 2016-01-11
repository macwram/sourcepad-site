var d =			document,
	string =	"We Build Ideas",
	l = d.getElementById("load"),
	rands = [],
	bo = d.body.style

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
function replacestring(newstring, rands){
	for (i = 0; i < rands.length; i++) {
		newstring = replaceAt(newstring, rands[i], string.charAt(rands[i]))
	}
	return newstring
}
function timeout(array, callback){
	setTimeout(function(){
		array.forEach(function(arr){
			rands.push(arr)
		})
    	l.innerHTML = replacestring(randomstring(string), rands)
        callback()
    }, 300);
}
function done(){
	setTimeout(function(){
		var ths = d.getElementsByClassName('th')
		for (i = 0; i < ths.length; i++) {
			ths[i].style.opacity = '1'
		}
		
		bo.overflow = 'scroll'
	}, 100);
}
function init(){
	window.onbeforeunload = function(){
		window.scrollTo(0,0);
	}
	l.innerHTML = replacestring(randomstring(string), rands)
	l.style.opacity = '1'
	bo.overflow = 'hidden'
	timeout([0,1], function(){
		timeout([3,4,6], function(){
			timeout([5,7], function(){
				timeout([9,10,12], function(){
					timeout([11,13], function(){
						done()
					})
				})
			})
		})
	})
}
// init();
done();

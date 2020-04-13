let autoScroll = false;

$(function () {
    let number = 3000;
    let pixel = 500;
    setInterval(() => {
    	if(autoScroll){;
        	$("html, body").animate({ scrollTop: pixel }, 3000);
        	pixel += 500;
    	}
    }, 10000);
});


function toggleAS(){
	autoScroll=!autoScroll;
	console.log("auto scroll now is "+autoScroll);
	if(autoScroll)
	{
				$("body").css("background","rgb(230, 230, 230)");
		$("#auto-scroll-button").html("turn off auto scroll");
	}else{
		$("body").css("background","rgb(255,255,255)");
		$("#auto-scroll-button").html("turn on auto scroll");
	}
}


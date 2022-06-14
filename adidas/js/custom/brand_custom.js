$(document).ready(function(){


	$(".box").on("mouseover",function(){	
		var vid = $(this).children("video").get(0);
		vid.currentTime=0;
		vid.play();
		$(this).find("h3").stop().animate({"right":"10px"},400);
        $(this).find("p").stop().animate({"right":"10px"},800);
    
	});
	
	
	$(".box").on("mouseout",function(){		
		var vid = $(this).children("video").get(0);
		vid.pause();
        $(this).find("h3").stop().animate({"right":"-310px"},200);
        $(this).find("p").stop().animate({"right":"-310px"},500);		
	});
	
	$(".content_box_table>div").on("mouseover",function(){	
		var i = $(this).index();
		$(".content_box_table>div").removeClass("on");
		$(".content_box_table").removeClass("on");
		$(".content_box_table>div").eq(i).addClass("on");
		});
	
});















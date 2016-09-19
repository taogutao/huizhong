//导航栏





//图片轮播
var midObj={
		midNode:$(".mid"),
		midleftNode:$(".mid .mid_left"),
		midrightNode:$(".mid .mid_right"),
		ulNode:$("#mid_lunbo_ul"),
		spanNode:$("#mid_span span"),
		currentNode:'.mid_span #mid_span .current',
		spanCurName:"current",
		liNode:$("#mid_lunbo_ul li"),
		movePic:function(oldPos,newPos){
			midObj.spanNode.eq(oldPos).removeClass();
			midObj.spanNode.eq(newPos).addClass(midObj.spanCurName);
			midObj.liNode.eq(oldPos).stop(false,true).fadeOut();
			midObj.liNode.eq(newPos).stop(false,true).fadeIn();
		},
		
	}
midObj.midNode.hover(
	function(){
		midObj.midleftNode.show();
		midObj.midrightNode.show();
		window.clearInterval(midObj.mouseenter)
	},function(){
		midObj.midleftNode.hide();
		midObj.midrightNode.hide();
		midObj.mouseenter=window.setInterval(function(){
	midObj.midrightNode.click();
},1000)
	}
)
midObj.spanNode.mouseenter(function(){
	if($(this).hasClass(midObj.currentNode)){
		return;
	}
	
	var oldPos=$(midObj.currentNode).index();
	var newPos=$(this).index();
	
	midObj.movePic(oldPos,newPos);

})

midObj.midleftNode.click(function(){
	var oldPos=$(midObj.currentNode).index();
	var newPos=oldPos==0?midObj.spanNode.length-1:oldPos-1;
	
	midObj.movePic(oldPos,newPos);
})

midObj.midrightNode.click(function(){
	var oldPos=$(midObj.currentNode).index();
	var newPos=oldPos==midObj.spanNode.length-1?0:oldPos+1;
	
	midObj.movePic(oldPos,newPos);
})
midObj.mouseenter=window.setInterval(function(){
	midObj.midrightNode.click();
},2000)






//移动图标

var lisNode=document.querySelectorAll("#main_top_ul li");

for(var i=0;i<lisNode.length;i++){
	lisNode[i].index=i;
	lisNode[i].onmouseover=function(){
		var oldPos;
		
		for(var j=0;j<lisNode.length;j++)
		{
			if(lisNode[j].className=="current")
			{
				oldPos=j;
				break;
			}
		}
		var newclass="main_top_1_"+(this.index+1)
		var oldClass="main_top_"+(oldPos+1);
		lisNode[oldPos].className="";
		lisNode[oldPos].getElementsByTagName("i")[0].className=oldClass;
		this.className="current";
		
		var newclass="main_top_1_"+(this.index+1)
		this.getElementsByTagName("i")[0].className=newclass;
	}
}
//图标放大，文字移动
$(".main_mid_left").mouseenter(function(){
	$(".main_mid_left img").animate({width:"600px", height:"300px", margin:"-50px 0 0 -50px"},1000);
	$(".main_mid_left_wen").removeClass("dis").animate({bottom:"0px"},1000);
})

$(".main_mid_left").mouseleave(function(){
	$(".main_mid_left img").animate({width:"491px", height:"241px", margin:"0px"},1000);
	$(".main_mid_left_wen").animate({bottom:"-116px"},1000);
})







//切换文字
var ppObj={
	leftNode:$("#left"),
	ppNode:$("#pp p"),
	rightNode:$("#right"),
	disNodes:$("#pp .dis"),
	disNode:'dis',
	move:function(newPos,oldPos){
		ppObj.ppNode.eq(newPos).removeClass(ppObj.disNode);
		ppObj.ppNode.eq(oldPos).addClass(ppObj.disNode);
	}
}

ppObj.rightNode.click(function(){
	var newPos=$(ppObj.disNodes).index();
	var oldPos=newPos==ppObj.ppNode.length-1?0:newPos+1;
	alert(newPos);
	ppObj.move(newPos,oldPos);
})
ppObj.leftNode.click(function(){
	var newPos=$(ppObj.disNodes).index();
	var oldPos=newPos==0?ppObj.ppNode.length-1:newPos-1;
	alert(newPos);
	ppObj.move(newPos,oldPos);
})

//小火箭飞回顶部

$(window).scroll(function(){
	var winHeight=$(window).height();
	var scrollTop=$(window).scrollTop();
	if(scrollTop>winHeight){
		$(".return").show();
	}
	if(scrollTop<winHeight){
			$(".return").hide();
	}
})
$("#return").click(function(){
	
	$("body,html").animate({scrollTop:0},500);
})

/*列表*/
$('.main').isotope({
	itemSelector: '.main li'
});

$('.nav li').click(function(){
	$(this).addClass('current').siblings('li').removeClass('current');
	var dataValue=$(this).attr('data');
	$('.main').isotope({
		itemSelector: '.main li',
		filter:dataValue
	});
});


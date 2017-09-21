/*
* @Author: YaYu
* @Date:   2017-09-06 19:01:12
* @Last Modified by:   YaYu
* @Last Modified time: 2017-09-12 11:30:54
*/
$(function(){
	/*购物车下拉卡*/
	$(".header-right2").hover(function(){
		$(".gouwuche-card").height("98px");
	},function(){
		$(".gouwuche-card").height("0px");
	})
	/*导航下拉卡*/
	$(".navUl").mouseenter(function(){
		$(".navCardBox").height("230px").addClass('jsNavCardBox');
	}).mouseleave(function(){
		$(".navCardBox").height("0px").removeClass('jsNavCardBox');
	})
	$(".navUl>li").mouseenter(function(){
		let i = $(this).index();
		$(".navCard").hide();
		$(".navCard:eq("+i+")").show();
	})
	$(".navCardBox").hover(function(){
		$(this).height("230px").addClass('jsNavCardBox')
	},function(){
		$(this).height("0px").removeClass('jsNavCardBox')
	})
	/*搜索下拉卡*/
	$('.sousuo').click(function(){
		$(".sousuo-list").show();
		$(".sousuo").addClass('sousuoclick');
		$(".sousuo-tu").addClass('sousuo-tuclick');
		$(".mix").hide();
		$(".tv").hide();
	})
	$('.sousuo').blur(function(){
		$(".sousuo-list").hide();
		$(".sousuo").removeClass('sousuoclick');
		$(".sousuo-tu").removeClass('sousuo-tuclick');
		$(".mix").show();
		$(".tv").show();
	})
	/*小米banner图*/
	let t;
	let lNum = 0;
	t = setInterval(function(){
		lunboFn("right")
	},3000);
	$(".lunbodian").eq(0).addClass("lunbochange")
	$(".banner").mouseenter(function(){
		clearInterval(t);
	}).mouseleave(function(){
		t = setInterval(function(){
			lunboFn("right")
		},3000)
	})
	function lunboFn(dir){
		let imgLis = $(".img-box>li");
		if(dir == "left"){
			lNum--;
			if(lNum == -1){
				lNum = $(".img-box>li").length-1;
			}
		}else if(dir == "right"){
			lNum++;
			if(lNum == $(".img-box>li").length){
				lNum = 0;
			}
		}
		imgLis.finish();
		imgLis.eq(lNum).css("z-index","2").fadeIn('slow');
		imgLis.not(imgLis.eq(lNum)).css("z-index","1").fadeOut('slow');
		$(".lunbodian").removeClass("lunbochange").eq(lNum).addClass('lunbochange');

	}
	$(".banner-right").click(function(){
		lunboFn("right");
	});
	$(".banner-left").click(function(){
		lunboFn("left")
	});
	$(".lunbodian").click(function(){
		let i = $(this).index();
		if(lNum == i){
			return;
		}
		lNum = i;
		lunboFn();
	})
	/*侧导航选项卡*/
	$(".asside").mouseenter(function(){
		$(this).children('.asside-card').show();
	}).mouseleave(function(){
		$(this).children('.asside-card').hide();
	})
	/*单品切换*/
	let dp;
	let dpFlag = true;
	dp = setInterval(dpFn,3000);
	$(".dphead-right2").addClass('dphead-color');
	$(".danpinbox").hover(function(){
		clearInterval(dp);
	},function(){
		dp = setInterval(dpFn,3000);
	})
	$(".dphead-right").hover(function(){
		clearInterval(dp);
	},function(){
		dp = setInterval(dpFn,3000);
	})
	function dpFn(){
		if(dpFlag){
			$(".danpin-body").css("transform","translateX(-100%)");
			$(".danpin-body2").css("transform","translateX(-100%)");
			$(".dphead-right1").addClass('dphead-color');
			$(".dphead-right2").removeClass('dphead-color');
		}else{
			$(".danpin-body").css("transform","translateX(0)");
			$(".danpin-body2").css("transform","translateX(0)");
			$(".dphead-right2").addClass('dphead-color');
			$(".dphead-right1").removeClass('dphead-color');
		}
		dpFlag = !dpFlag;
	}
	$(".dphead-right2").hover(function(){
		if(dpFlag){
			$(this).addClass('dphead-color2');
		}
	},function(){
		$(this).removeClass('dphead-color2');
	}).click(function(){
		if(dpFlag){
			$(".danpin-body").css("transform","translateX(-100%)");
			$(".danpin-body2").css("transform","translateX(-100%)");
			$(".dphead-right1").addClass('dphead-color');
			$(".dphead-right2").removeClass('dphead-color');
			dpFlag = !dpFlag;
		}	
	})
	$(".dphead-right1").click(function(){
		if(!dpFlag){
			$(".danpin-body").css("transform","translateX(0)");
			$(".danpin-body2").css("transform","translateX(0)");
			$(".dphead-right2").addClass('dphead-color');
			$(".dphead-right1").removeClass('dphead-color');
			dpFlag = !dpFlag;
		}
	}).hover(function() {
		if(!dpFlag){
			$(this).addClass('dphead-color2');
		}
	}, function() {
		$(this).removeClass('dphead-color2');
	});
	/*家电、智能、搭配切换*/
	function cutover (num){
		let indexObj = $(".jdhead-right:eq("+num+")>li");
		let cutObj = $(".zn-box:eq("+(num-1)+")>.zhineng-box");
		if(num == 0){
			cutObj = $(".jiadian-right");
		}
		indexObj.eq(0).addClass('jdhead-righthover')
		indexObj.mouseenter(function(){
			let index = $(this).index();
			cutObj.hide();
			cutObj.eq(index).show();
			indexObj.removeClass('jdhead-righthover');
			indexObj.eq(index).addClass('jdhead-righthover')
		})
	}
	cutover(0);
	cutover(1);
	cutover(2);
	/*推荐卡片切换*/
	let tjNow = 0;
	let tjNext = 0;
	let tjFlag = true;
	let tjWidth = $(".tuijian-box").width();
	let tjLeft = $(".tjhead-right1")
	let tjRight = $(".tjhead-right2");
	let tjCards = $(".tuijiancard");
	tjRight.addClass('tjhead-color');
	tjRight.click(function(){
		if(tjNow == tjCards.length-1){
			return;
		}
		if(tjFlag){
			tjFlag = false;
			tjNext++;
			tjCards.eq(tjNow).animate({left:-tjWidth},1000);
			tjCards.eq(tjNext).animate({left:0},1000,function(){tjFlag = true;});
			tjLeft.addClass('tjhead-color');
			tjNow = tjNext;
		}
		if(tjNow == tjCards.length-1){
			tjRight.removeClass('tjhead-color');
		}
	}).hover(function(){
		if(tjNow < tjCards.length-1){
			$(this).addClass('tjhead-color2')
		}
	},function(){
		$(this).removeClass('tjhead-color2')
	})
	tjLeft.click(function(){
		if(tjNow == 0){
			return;
		}
		if(tjFlag){
			tjFlag = false;
			tjNext--;
			tjCards.eq(tjNow).animate({left:tjWidth},1000);
			tjCards.eq(tjNext).animate({left:0},1000,function(){tjFlag = true;});
			tjRight.addClass('tjhead-color');
			tjNow = tjNext;
		}
		if(tjNow == 0){
			tjLeft.removeClass('tjhead-color');
		}
	}).hover(function(){
		if(tjNow < tjCards.length && tjNow > 0){
			$(this).addClass('tjhead-color2')
		}
	},function(){
		$(this).removeClass('tjhead-color2')
	})
	$(".tuijian").hover(function(){
		$(this).addClass('jstuijian');
	},function(){
		$(this).removeClass('jstuijian');
	})
	/*内容盒子切换*/
	function contentFn (num) {
		let content = $(".content").eq(num);
		let contentCard = $(".contentCards").eq(num);
		let contentBtn = $(".contentBtn:eq("+num+")>li");
		let conLeft = $(".contentLeft").eq(num);
		let conRight = $(".contentRight").eq(num);

		let cardNum = contentCard.children().length;
		let contWidth = cardNum*contentCard.children(0).width();
		contentCard.width(contWidth)

		let contNow = 0;
		content.hover(function(){
			conLeft.css({"opacity":0.5})
			conRight.css({"opacity":0.5})
		},function(){
			conLeft.css({"opacity":0})
			conRight.css({"opacity":0})
		})
		contentBtn.eq(0).addClass('jsconBtnLi');
		conLeft.click(function(){
			if(contNow == 2){
  				return;
  			}
  			contentBtn.eq(contNow).removeClass('jsconBtnLi');
  			contNow++;
  			contentBtn.eq(contNow).addClass('jsconBtnLi');
  			contentCard.css({"margin-left":-contNow*296})
		}).hover(function(){
			$(this).css({"opacity":1})
		},function(){
			$(this).css({"opacity":0.5})
		})
		conRight.click(function(){
			if(contNow == 0){
  				return;
  			}
  			contentBtn.eq(contNow).removeClass('jsconBtnLi');
  			contNow--;
  			contentBtn.eq(contNow).addClass('jsconBtnLi');
  			contentCard.css({"margin-left":-contNow*296})
		}).hover(function(){
			$(this).css({"opacity":1})
		},function(){
			$(this).css({"opacity":0.5})
		})
		contentBtn.click(function(){
			let index = $(this).index();
			contentCard.css({"margin-left":-index*296})
			contentBtn.eq(contNow).removeClass('jsconBtnLi');
			contentBtn.eq(index).addClass('jsconBtnLi');
			contNow = index;
		})

	}
	contentFn(0)
	contentFn(1)
	contentFn(2)
	contentFn(3)
})
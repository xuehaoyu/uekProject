/*
* @Author: YaYu
* @Date:   2017-09-12 11:00:55
* @Last Modified by:   YaYu
* @Last Modified time: 2017-09-12 13:49:00
*/
$(function(){
	/*banner动效*/
	let bNum = 0;
	let flag = true;
	let self;
	self = setInterval(function(){
		selfFn("t")
	},3000);
	$(".banner-box").hover(function(){
		clearInterval(self);
	},function(){
		self = setInterval(function(){
			selfFn("t")
		},3000);
	})
	$(".lunbo>li").eq(0).addClass('lunbochange');
	function selfFn(dir){
		if(dir == "t"){
			bNum++;
			if(bNum == $(".imgbox>li").length){
				bNum = 0;
			}
		}
		$(".imgbox>li").hide();
		$(".lunbo>li").removeClass('lunbochange');
		$(".imgbox>li").eq(bNum).show(0,function(){flag = true;});
		$(".lunbo>li").eq(bNum).addClass('lunbochange');
	}
	$(".lunbo>li").mouseenter(function(){
		let index = $(this).index();
		if(bNum == index){
			return;
		}
		bNum = index;
		if(flag){
			flag  = false;
			selfFn();
		}
		
	});
	/*侧导航选项卡*/
	$(".aside-box>li").hover(function(){
		let index = $(this).index();
		$(".assidecard").eq(index).show();
	},function(){
		let index = $(this).index();
		$(".assidecard").eq(index).hide();
	})
	/*头部选项卡*/
	$(".header-right1").hover(function(){
		$(".hdright1-card").show();
	},function(){
		$(".hdright1-card").hide();
	})
	$(".header-right4").hover(function(){
		$(".hdright4-card").show();
	},function(){
		$(".hdright4-card").hide();
	})
	/*头部浮动栏效果*/
	let headSearch = $(".headSearch");
	console.log(headSearch.height())
	let leftSearch = $(".leftSearch");
	let mc = $(".mc");
	let mcTop = mc.offset().top;
	let sFlag = true;
	$(window).scroll(function () {
		let overH = $("body").scrollTop();
		if(overH >= mcTop){
			if(sFlag){
				sFlag = false;
				headSearch.css({"top":0});
				leftSearch.css({"left":"2px","bottom":"51px"});
			}
		}else{
			if(!sFlag){
				sFlag = true;
				headSearch.css({"top":"-50px"});
				leftSearch.css({"left":"-36px","bottom":"-207"});
			}
			
		}
	})
	/*左侧导航栏效果*/
	let leftToTop = $(".leftToTop");
	let floors = $(".floor");
	let floorLis = $(".floorLi")
	let floorArr = [];
	let floorColor = ["#ea5f8d","#0aa6e8","#64c333","#f15453","#000000"];
	floors.each(function(index,obj) {
		floorArr.push(obj.offsetTop);
	});
	console.log(floors.eq(0).offset().top)
	leftToTop.click(function(){
		$("body").animate({scrollTop:0},500);
	})
	floorLis.click(function(){
		let index = $(this).index();
		$("body").animate({scrollTop:floorArr[index-1]-headSearch.height()},500);
	})
	$(window).scroll(function(){
		let overH = $("body").scrollTop();
		floorArr.forEach((value,index) =>{
			if(overH >= value-headSearch.height()){
				floorLis.css({"background":"#626262"});
				floorLis.eq(index).css({"background":`${floorColor[index]}`})
			}			
		})
	})
	
})
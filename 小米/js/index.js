/*
* @Author: YaYu
* @Date:   2017-08-10 18:56:58
* @Last Modified by:   YaYu
* @Last Modified time: 2017-09-12 10:36:13
*/

'use strict';
window.onload = function () {
	// 购物车下拉卡
/*	let headerRight2 = document.getElementsByClassName("header-right2");
	let gouWuCheCard = document.getElementsByClassName("gouwuche-card");
	headerRight2[0].onmouseenter = function () {
		gouWuCheCard[0].style.height = "98px";
	}
	headerRight2[0].onmouseleave = function () {
		gouWuCheCard[0].style.height = 0;
	}*/
	// 导航下拉卡
/*	let navUl = document.querySelector(".navUl")
	let navLis = navUl.getElementsByTagName("li");
	let navLiAs = navUl.getElementsByTagName("a");
	let navCardBox = document.querySelector(".navCardBox");
	let navCard= document.querySelectorAll(".navCard");
	navUl.onmouseenter = function(){
		navCardBox.style.height = `230px`;
		navCardBox.classList.add("jsNavCardBox");
	}
	navUl.onmouseleave = function(){
		navCardBox.style.height = 0;
		navCardBox.classList.remove("jsNavCardBox");
	}
	for(let i = 0;i < navCard.length;i++){
		navLis[i].onmouseenter = function (){
			for(let j = 0;j < navCard.length;j++){
				navCard[j].style.display = "none";
			}
			navCard[i].style.display = "block";
		}
	}
	navCardBox.onmouseenter = function(){
		navCardBox.style.height = `230px`;
		navCardBox.classList.add("jsNavCardBox");
	}
	navCardBox.onmouseleave = function(){
		navCardBox.style.height = 0;
		navCardBox.classList.remove("jsNavCardBox")
	}*/
	// 搜索框下拉单
/*	let souSuo = document.getElementsByClassName("sousuo")[0];
	let souSuoTu = document.getElementsByClassName("sousuo-tu")[0];
	let souSuoList = document.getElementsByClassName("sousuo-list")[0];
	let mix = document.getElementsByClassName("mix")[0];
	let tv = document.getElementsByClassName("tv")[0];
	souSuo.onclick = function(){
		souSuoList.style.display = "block";
		souSuo.classList.add('sousuoclick');
		souSuoTu.classList.add('sousuo-tuclick');
		mix.style.opacity = 0;
		tv.style.opacity = 0;
	}
	souSuo.onblur = function(){
		souSuoList.style.display = "none";
		mix.style.opacity = 1;
		tv.style.opacity = 1;
		souSuo.classList.remove('sousuoclick');
		souSuoTu.classList.remove('sousuo-tuclick');
	}
	let boxRight = document.querySelector(".box-right");
	boxRight.onmouseenter = function () {
		souSuo.classList.add("sousuoEnter");
		souSuoTu.classList.add("sousuo-tuEnter");
	}
	boxRight.onmouseleave = function () {
		souSuo.classList.remove("sousuoEnter");
		souSuoTu.classList.remove("sousuo-tuEnter");
	}*/
	// 轮播图
	let imgBox = document.getElementsByClassName("img-box")[0];
	let imgBoxLi = imgBox.getElementsByTagName("li");
	let lunBo = document.getElementsByClassName("lunbo")[0];
	let lunBoLi = lunBo.getElementsByTagName("li");
	let banner = document.getElementsByClassName('banner')[0];
	let bannerLeft =document.getElementsByClassName("banner-left")[0];
	let bannerRight =document.getElementsByClassName("banner-right")[0];
	let lunBoNum = 0;
/*	for (let i = 0;i < lunBoLi.length;i++){
		lunBoLi[i].onclick = function () {
			for(let j=0;j < imgBoxLi.length;j++ ){
				imgBoxLi[j].style.display = "none";
				lunBoLi[j].classList.remove("lunbochange");
			}
		imgBoxLi[i].style.display = "block";
		lunBoLi[i].classList.add("lunbochange");
		}

	}*/
	//  方法2  num为当前窗口显示的图片，i代表点击的图片，需要对图片定出层级排序
	//  控制两张图片
	/*	 let num = 0;
	 for (let i = 0;i < lunBoLi.length;i++){
	 	lunBoLi[i].onclick = function (){
	 		imgBoxLi[num].style.display = "none";
	 		imgBoxLi[i].style.display = "block";
	 		num = i;
	 	}
	 }*/
	 // 自动轮播
/*	 let t;
	 lunBoLi[0].classList.add('lunbochange');
	 t = setInterval(lunBoFn,3000);
	 banner.onmouseenter = function () {
	 	clearInterval(t);
	 }
	 banner.onmouseleave = function () {
	 	 t = setInterval(lunBoFn,3000);
	 }*/
/*	 function lunBoFn() {
	 	lunBoNum++;
	 	if(lunBoNum == imgBoxLi.length){
	 		lunBoNum = 0;
	 	}
	 	for(let i = 0;i < imgBoxLi.length; i ++){
	 		imgBoxLi[i].style.display = "none";
	 		lunBoLi[i].classList.remove('lunbochange')
	 	}
	 	imgBoxLi[lunBoNum].style.display = "block";
	 	lunBoLi[lunBoNum].classList.add('lunbochange')
	 }
	 console.log(lunBoNum)
	 // 点击 切换
	 bannerRight.onclick = lunBoFn;
	 bannerLeft.onclick = function () {
	 	lunBoNum--;
	 	if(lunBoNum == -1){
	 		lunBoNum = imgBoxLi.length-1;
	 	}
	 	for(let i = 0;i < imgBoxLi.length; i ++){
	 		imgBoxLi[i].style.display = "none";
	 		lunBoLi[i].classList.remove('lunbochange')
	 	}
	 	imgBoxLi[lunBoNum].style.display = "block";
	 	lunBoLi[lunBoNum].classList.add('lunbochange')
	 }*/
	// 侧导航选项卡
/*	let asside = document.getElementsByClassName("asside");
	let assideBoxDiv = document.getElementsByClassName("asside-card");
	for(let i = 0;i < assideBoxDiv.length;i ++){
		asside[i].onmouseenter = function () {
		assideBoxDiv[i].style.display = "block";
		}
		asside[i].onmouseleave = function () {
		assideBoxDiv[i].style.display = "none";
		}
	}*/
	// 单品切换
/*	let dpHeadRight = document.getElementsByClassName("dphead-right")[0];
	let dpHeadRight1 = document.getElementsByClassName("dphead-right1")[0];
	let dpHeadRight2 = document.getElementsByClassName("dphead-right2")[0];
	let danpinBox = document.getElementsByClassName("danpinbox")[0];
	let danpinBody = document.getElementsByClassName("danpin-body")[0];
	let danpinBody2 = document.getElementsByClassName("danpin-body2")[0];
	let dp;
	dpHeadRight2.classList.add("dphead-color");
	let dpFnTran = true;
	dp = setInterval(dpFn,3000);*/
	// 消除自动切换
	/*danpinBox.onmouseenter = function () {
		clearInterval(dp);
	}
	danpinBox.onmouseleave = function () {
		dp = setInterval(dpFn,3000);
	}
	dpHeadRight.onmouseenter = function () {
		clearInterval(dp);
	}
	dpHeadRight.onmouseleave = function () {
		dp = setInterval(dpFn,3000);
	}
	function dpFn () {
		if(dpFnTran){
			danpinBody.style.transform = "translateX(-100%)";
			danpinBody2.style.transform = "translateX(-100%)";
			dpHeadRight1.classList.add("dphead-color");
			dpHeadRight2.classList.remove("dphead-color");
		}else{
			danpinBody.style.transform = "translateX(0)";
			danpinBody2.style.transform = "translateX(0)";
			dpHeadRight2.classList.add("dphead-color");
			dpHeadRight1.classList.remove("dphead-color");
		}
		dpFnTran = !dpFnTran;
	}
	dpHeadRight2.onclick = function(){
		if(dpFnTran == true){
			danpinBody.style.transform = "translateX(-100%)";
			danpinBody2.style.transform = "translateX(-100%)";
			dpHeadRight1.classList.add("dphead-color");
			dpHeadRight2.classList.remove("dphead-color");
			dpFnTran = !dpFnTran;
		}
	}
	dpHeadRight2.onmouseenter = function(){
		if(dpFnTran == true){
			dpHeadRight2.classList.add("dphead-color2");
		}
	}
	dpHeadRight2.onmouseleave = function(){
			dpHeadRight2.classList.remove("dphead-color2");
		}
	dpHeadRight1.onclick = function(){
		if(dpFnTran == false){
			danpinBody.style.transform = "translateX(0)";
			danpinBody2.style.transform = "translateX(0)";
			dpHeadRight2.classList.add("dphead-color");
			dpHeadRight1.classList.remove("dphead-color");
			dpFnTran = !dpFnTran;
		}
	}	
	dpHeadRight1.onmouseenter = function(){
		if(dpFnTran == false){
			dpHeadRight1.classList.add("dphead-color2");
		}
	}
	dpHeadRight1.onmouseleave = function(){
			dpHeadRight1.classList.remove("dphead-color2");
	}
	// 家电选项卡切换
	let jdHead = document.getElementsByClassName("jdhead-right")[0];
	let jdHeadLis = jdHead.getElementsByTagName("li");
	let jiaDianRight = document.getElementsByClassName("jiadian-right");
	jdHeadLis[0].classList.add('jdhead-righthover');
	for(let i = 0;i < jdHeadLis.length;i ++){
		jdHeadLis[i].onmouseenter = function () {
			for(let j =0; j <jdHeadLis.length;j++){
				jiaDianRight[j].style.display = "none";
				jdHeadLis[j].classList.remove('jdhead-righthover');
			}
			jiaDianRight[i].style.display = "block";
			jdHeadLis[i].classList.add('jdhead-righthover');
		}
	}*/
   // 智能切换
/*   let znHead = document.getElementsByClassName("jdhead-right")[1];
   let znHeadLis = znHead.getElementsByTagName("li");
   let znBox = document.getElementsByClassName("zn-box")[0];
   let zhiNengBox = znBox.getElementsByClassName("zhineng-box");
   znHeadLis[0].classList.add('jdhead-righthover');
   for(let i = 0;i < znHeadLis.length;i ++){
		znHeadLis[i].onmouseenter = function () {
			for(let j =0; j <znHeadLis.length;j++){
				zhiNengBox[j].style.display = "none";
				znHeadLis[j].classList.remove('jdhead-righthover');
			}
		  zhiNengBox[i].style.display = "block";
		  znHeadLis[i].classList.add('jdhead-righthover');
		}
	}*/
	// 搭配切换
/*	let daPeiHead = document.getElementsByClassName("jdhead-right")[2];
   let daPeiHeadLis = daPeiHead.getElementsByTagName("li");
   let daPeiBox = document.getElementsByClassName("zn-box")[1];
   let daPeiBoxS = daPeiBox.getElementsByClassName("zhineng-box");
   for(let i = 0;i < daPeiHeadLis.length;i ++){
		daPeiHeadLis[i].onmouseenter = function () {
			for(let j =0; j <daPeiHeadLis.length;j++){
				daPeiBoxS[j].style.display = "none";
				daPeiHeadLis[j].classList.remove('jdhead-righthover');
			}
		  daPeiBoxS[i].style.display = "block";
		  daPeiHeadLis[i].classList.add('jdhead-righthover');
		}
	}*/
	// 推荐卡片切换
	/*let tuiJianBox = document.getElementsByClassName("tuijian-box")[0];
	let tjWidth =  tuiJianBox.offsetWidth;
	let tjCards = document.getElementsByClassName("tuijiancard");
	let tjheadLeft = document.getElementsByClassName("tjhead-right1")[0];
	let tjheadRight = document.getElementsByClassName("tjhead-right2")[0];
	let tuiJian = document.getElementsByClassName("tuijian");
	let tjNow = 0;
	let tjNext = 0;
	let tjFlag = true;
	tjheadRight.classList.add("tjhead-color");
	tjheadRight.onclick = function () {
		if(tjNow == tjCards.length-1){
			return;
		}
		if(tjFlag = true){
		tjFlag = false;
		tjNext++;
		animate(tjCards[tjNow],{left:-tjWidth});
		animate(tjCards[tjNext],{left:0},function(){tjFlag = true});
		tjNow = tjNext;
		tjheadLeft.classList.add("tjhead-color");
		}
		if(tjNow == tjCards.length-1){
			tjheadRight.classList.remove("tjhead-color");
		}	
	}
	tjheadLeft.onclick = function () {
		if(tjNow == 0){
			return;
		}
		if(tjFlag){	
		tjFlag = false;	
		tjNext--;
		animate(tjCards[tjNow],{left:tjWidth});
		animate(tjCards[tjNext],{left:0},function(){tjFlag = true});
		tjNow = tjNext;
		tjheadRight.classList.add("tjhead-color");
		}
		if(tjNow == 0){
			tjheadLeft.classList.remove("tjhead-color");
		}		
	}
	tjheadRight.onmouseenter = function() {
		if(tjNow < tjCards.length-1){
		tjheadRight.classList.add("tjhead-color2");
	}
	}
	tjheadRight.onmouseleave = function() {
		tjheadRight.classList.remove("tjhead-color2");
	}
	tjheadLeft.onmouseenter = function() {
		if(tjNow < tjCards.length && tjNow > 0){
		tjheadLeft.classList.add("tjhead-color2");
	}
	}
	tjheadLeft.onmouseleave = function() {
		tjheadLeft.classList.remove("tjhead-color2");
	}	
	for(let i = 0;i < tuiJian.length;i++){
		tuiJian[i].onmouseenter = function () {
			tuiJian[i].classList.add("jstuijian");
		}
		tuiJian[i].onmouseleave = function () {
			tuiJian[i].classList.remove("jstuijian");
		}
	}*/
	// 内容盒子切换效果
  /*  function contentFn(conNum){
	let content = document.querySelectorAll(".content");
	let contentCards = content[conNum].querySelector(".contentCards");
	let contentBtn  = document.querySelectorAll(".contentBtn");
	let conBtnLis = contentBtn[conNum].getElementsByTagName("li");
	let contentLeft =  content[conNum].querySelector(".contentLeft");
	let contentRight =  content[conNum].querySelector(".contentRight");
    
    let conCardCount = contentCards.childElementCount;
    let contWidth = conCardCount*contentCards.children[0].offsetWidth;
  	
  	contentCards.style.width = `${contWidth}px`

  	let contNow = 0;
  	conBtnLis[0].classList.add("jsconBtnLi")
  	contentLeft.onclick  = function(){
  		if(contNow == 2){
  			return;
  		}
  		conBtnLis[contNow].classList.remove("jsconBtnLi")
  		contNow++;
  		conBtnLis[contNow].classList.add("jsconBtnLi")
  		contentCards.style.marginLeft = `${-contNow*296}px`;
  	}
	contentRight.onclick  = function(){
  		if(contNow == 0){
  			return;
  		}
  		conBtnLis[contNow].classList.remove("jsconBtnLi")
  		contNow--;
  		conBtnLis[contNow].classList.add("jsconBtnLi")
  		contentCards.style.marginLeft = `${-contNow*296}px`;
  	}
  	for(let i = 0;i <conBtnLis.length;i++){
  		conBtnLis[i].onclick = function (){
  			contentCards.style.marginLeft = `${-i*296}px`;
  			conBtnLis[contNow].classList.remove("jsconBtnLi")
  			conBtnLis[i].classList.add("jsconBtnLi")
  			contNow = i;
	  	}
  	}
  	contentLeft.onmouseenter = function() {
  		contentLeft.style.opacity = 1;
  	}
  	contentLeft.onmouseleave = function() {
  		contentLeft.style.opacity = 0.5;
  	}
  	contentRight.onmouseenter = function() {
  		contentRight.style.opacity = 1;
  	}
  	contentRight.onmouseleave = function() {
  		contentRight.style.opacity = 0.5;
  	}
  	content[conNum].onmouseenter = function (){
  		contentLeft.style.opacity = 0.5;
  		contentRight.style.opacity = 0.5;
  	}
  	content[conNum].onmouseleave = function (){
  		contentLeft.style.opacity = 0;
  		contentRight.style.opacity = 0;
  	}
  	}
  	contentFn(0);
  	contentFn(1);
  	contentFn(2);
  	contentFn(3);*/

}

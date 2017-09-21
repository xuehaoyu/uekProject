/*
* @Author: YaYu
* @Date:   2017-08-13 17:39:45
* @Last Modified by:   YaYu
* @Last Modified time: 2017-09-12 13:00:05
*/

'use strict';
window.onload = function() {
	// bnner图js动效
/*	let imgBox = document.getElementsByClassName("imgbox")[0];
	let imgBoxLis = imgBox.getElementsByTagName("li");
	let lunBo = document.getElementsByClassName("lunbo")[0];
	let lunBOLis = lunBo.getElementsByTagName("li");
	let bannerBox = document.getElementsByClassName("banner-box")[0];
	// banner自动播放
	let bannerNum = 0;
	let self;
	lunBOLis[0].classList.add("lunbochange");
	self = setInterval(selfFn,3000);
	bannerBox.onmouseenter = function () {
		clearInterval(self);
	}
	bannerBox.onmouseleave = function () {
		self = setInterval(selfFn,3000);
	}
	function selfFn() {
		bannerNum ++;
		for(let i = 0; i < lunBOLis.length;i ++){
				imgBoxLis[i].style.display = "none";
				lunBOLis[i].classList.remove("lunbochange");
		}
		if (bannerNum == lunBOLis.length){
			bannerNum = 0;
		}
		imgBoxLis[bannerNum].style.display = "block";
		lunBOLis[bannerNum].classList.add("lunbochange");
	}
	// 移入时切换
	for(let i = 0; i < lunBOLis.length;i++){
		lunBOLis[i].onmouseenter = function () {
			for(let j = 0;j <  lunBOLis.length;j ++ ){
				imgBoxLis[j].style.display = "none";
				lunBOLis[j].classList.remove("lunbochange");
			}
		imgBoxLis[i].style.display = "block"
		lunBOLis[i].classList.add("lunbochange");
	  }
	}*/
	//侧导航选项卡
/*	let asideCard = document.getElementsByClassName("assidecard");
	let asideBoxLis = document.querySelectorAll(".aside-box>li")
	for(let i = 0; i <  asideBoxLis.length;i ++){
		asideBoxLis[i].onmouseenter = function () {
			asideCard[i].classList.toggle("block");
		}
		asideBoxLis[i].onmouseleave = function () {
			asideCard[i].classList.toggle("block");
		}
	}*/
	// 头部选项卡
/*	let headerRight1 = document.getElementsByClassName("header-right1")[0];
	let hdRight1Card = document.getElementsByClassName("hdright1-card")[0];
	headerRight1.onmouseenter = function () {
		hdRight1Card.style.display = "block";
	}
	headerRight1.onmouseleave = function () {
		hdRight1Card.style.display = "none";
	}
	let headerRight4 = document.getElementsByClassName("header-right4")[0];
	let hdRight4Card = document.getElementsByClassName("hdright4-card")[0];
	headerRight4.onmouseenter = function () {
		hdRight4Card.style.display = "block";
	}
	headerRight4.onmouseleave = function () {
		hdRight4Card.style.display = "none";
	}*/
	// 头部浮动栏效果
	/*let headSearch = document.querySelector(".headSearch");
	let leftSearch = document.querySelector(".leftSearch")
	let mc = document.querySelector(".mc");
	let mcTop = mc.offsetTop;
	let sFlag = true;
	window.addEventListener("scroll",function () {
		let overH = document.body.scrollTop;
		if(overH >= mcTop){
			if(sFlag){
			sFlag = false;
			headSearch.style.top = `0px`;
			leftSearch.style.left = `2px`
			leftSearch.style.bottom = `51px`
		}
		}else{
			if(!sFlag){
				sFlag = true;
				headSearch.style.top = `-50px`;
				leftSearch.style.left = `-36px`
				leftSearch.style.bottom = `-207px`
			}
			
		}
	})*/
	// 左侧浮动导航栏效果
	/*let leftToTop = document.querySelector(".leftToTop");
	let floors = document.querySelectorAll(".floor");
	let floorLis = document.querySelectorAll(".floorLi")
	let floorArr = [];
	let now = 0;
	let floorColor = ["#ea5f8d","#0aa6e8","#64c333","#f15453","#000000"];
	floors.forEach(element =>{
		floorArr.push(element.offsetTop);
	})
	leftToTop.onclick = function () {
		animate(document.body,{scrollTop: 0});
	}
	for(let i = 0;i < floorLis.length;i ++){
		floorLis[i].onclick = function () {
			animate(document.body,{scrollTop: floorArr[i]-headSearch.offsetHeight});
		}
	}
	window.addEventListener("scroll",function(){
		let overH = document.body.scrollTop;
		floorArr.forEach((value,index) =>{
			if(overH >= value-headSearch.offsetHeight){
				for(let j = 0;j < floorLis.length;j++){
					floorLis[j].style.background = `#626262`;
				}
				floorLis[index].style.background = `${floorColor[index]}`;
			}
		})
	})*/
}
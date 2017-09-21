/*
* @Author: YaYu
* @Date:   2017-08-26 15:07:49
* @Last Modified by:   YaYu
* @Last Modified time: 2017-09-19 09:02:49
*/
window.onload = function () {
	/*banner诗句效果*/
	let themeWord = document.querySelectorAll(".theme li");
	let wordNum = 0;
	let wordT;
	wordT = setInterval(wordFn,1000);
	function wordFn() {
		themeWord[wordNum].style.opacity = "1";
		wordNum++;
		if(wordNum == 14){
			clearInterval(wordT);
		}
	}
	/*侧导航效果*/
	let aside = document.querySelector("aside");
	let asideFlag = document.querySelector(".asideFlag");
	let assideName = document.querySelector(".assideName");
	let clickFlag = true;
	asideFlag.onclick = function () {
		if(clickFlag){
			aside.style.right = `0`;
			clickFlag = false;
		}else{
			aside.style.right = `-300px`;
			clickFlag = true;
		}
	}
	/*侧导航点击效果*/
	let asideLis = document.querySelectorAll(".aside>li");
	let floors = document.querySelectorAll(".Floor");
	let fArr = [];
	floors.forEach(element => {
		fArr.push(element.offsetTop);
	})
	for(let i = 0; i < floors.length;i ++){
		asideLis[i].onclick = function () {
			animate(document.body,{scrollTop:`${fArr[i]}`});
			aside.style.right = `-300px`;
			clickFlag = true;
		}
	}
	/*alone头部平移效果*/
	let aloneHead = document.querySelector(".aloneHead");
	let aloneTitle = document.querySelector(".aloneTitle");
	let aloneTheme = document.querySelector(".aloneTheme");
	window.addEventListener("scroll",function(){
		if(window.innerHeight + document.body.scrollTop >= aloneHead.offsetTop+aloneHead.offsetHeight ){
			aloneTitle.style.transform = "translateX(-100px)"
			aloneTheme.style.opacity = 1;
			aloneTheme.style.transform = "translateX(100px)"
		}else{
			aloneTitle.style.transform = "translateX(0px)"
			aloneTheme.style.opacity = 0;
			aloneTheme.style.transform = "translateX(0px)"
		}
	})
	function LUNBOfn (num) {
	/*alone轮播效果*/
		let aloneImg = document.querySelectorAll(".aloneImg");
		let aloneImgLis = aloneImg[num].querySelectorAll(".aloneImgLi");
		let boards = aloneImg[num].querySelectorAll(".board");
		let aloneC = document.querySelectorAll(".aloneCircle");
		let aloneCircle = aloneC[num].querySelectorAll(".aloneCircleLi");
		let aNow = 0;
		let aNext = 0;
		let aFlag = true;
		let tranX = aloneImgLis[0].offsetWidth+72;
		let aloneT;

		aloneCircle[0].classList.add("aloneCli");
		boards[0].style.opacity = 1;
		aloneT = setInterval(aloneFn,3000);
		function aloneFn() {
			if(aNow >= 7){
				aFlag = false;
			}else if(aNow <= 0) {
				aFlag = true;
			}
			if(aFlag){
				aNow++;
			}else{
				aNow--;
			}	
			aloneImg[num].style.transform = `translateX(-${tranX*aNow}px)`;
			aloneCircle[aNow].classList.add("aloneCli");
			aloneCircle[aNext].classList.remove("aloneCli");
			boards[aNow].style.opacity = 1;
			boards[aNext].style.opacity = 0;
			aNext = aNow;
		}
		aloneImg[num].onmouseenter = function () {
			clearInterval(aloneT);
		}
		aloneImg[num].onmouseleave = function () {
			aloneT = setInterval(aloneFn,3000);
		}
		aloneC[num].onmouseenter = function () {
			clearInterval(aloneT);
		}
		aloneC[num].onmouseleave = function () {
			aloneT = setInterval(aloneFn,3000);
		}
	/*轮播点点击效果*/
		for(let i = 0;i < aloneCircle.length;i ++){
			aloneCircle[i].onclick = function () {
				for(let j = 0;j < aloneCircle.length;j ++){
					aloneCircle[j].classList.remove("aloneCli");
					boards[j].style.opacity = 0;
				}
				aloneImg[num].style.transform = `translateX(-${tranX*i}px)`;
				aloneCircle[i].classList.add("aloneCli");
				boards[i].style.opacity = 1;
				aNext = aNow = i;
			}
		}
	}
	/*轮播图调用*/
	LUNBOfn(0);
	LUNBOfn(1);
	/*choly头部平移效果*/
	let cholyHead = document.querySelector(".cholyHead");
	let cholyTitle = document.querySelector(".cholyTitle");
	let cholyTheme = document.querySelector(".cholyTheme");
	window.addEventListener("scroll",function(){
		if(window.innerHeight + document.body.scrollTop >= cholyHead.offsetTop+cholyHead.offsetHeight ){
			cholyTitle.style.transform = "translateX(70px)"
			cholyTheme.style.opacity = 1;
			cholyTheme.style.transform = "translateX(-70px)"
		}else{
			cholyTitle.style.transform = "translateX(0px)"
			cholyTheme.style.opacity = 0;
			cholyTheme.style.transform = "translateX(0px)"
		}
	})
	/*miss头部移入效果*/
	let missTitle = document.querySelector(".missTitle");
	let missTheme = document.querySelector(".missTheme");
	missTitle.onmouseenter = function () {
		missTheme.style.opacity = 1;
	}
	missTitle.onmouseleave = function () {
		missTheme.style.opacity = 0;
	}
	/*missbody点击平移效果*/
	let fHeartL = document.querySelector(".fHeartL");
	let fHeartR = document.querySelector(".fHeartR");
	let firstFaceL = document.querySelector(".firstFaceL");
	let firstFaceR = document.querySelector(".firstFaceR");

	let kHeartL = document.querySelector(".kHeartL");
	let kHeartR = document.querySelector(".kHeartR");
	let keepL = document.querySelector(".keepL");
	let keepR = document.querySelector(".keepR");

	let sHeartL = document.querySelector(".sHeartL");
	let sHeartR = document.querySelector(".sHeartR");
	let stoneL = document.querySelector(".stoneL");
	let stoneR = document.querySelector(".stoneR");

	missClick(fHeartL,firstFaceL,firstFaceR);
	missClick(fHeartR,firstFaceL,firstFaceR);

	missClick(kHeartL,keepL,keepR);
	missClick(kHeartR,keepL,keepR);

	missClick(sHeartL,stoneL,stoneR);
	missClick(sHeartR,stoneL,stoneR);
	function missClick (cObj,tObj1,tObj2) {
		cObj.onclick = function () {
			tObj1.style.transform = "translateX(-450px)";
			tObj2.style.transform = "translateX(450px)";
		}
	}

	let misses = document.querySelectorAll(".miss");
	window.addEventListener("scroll",function(){
		if(document.body.scrollTop >= misses[0].offsetHeight + misses[0].offsetTop){
			firstFaceL.style.transform = "translateX(0px)";
			firstFaceR.style.transform = "translateX(0px)";
		}
	})
	window.addEventListener("scroll",function(){
		if(document.body.scrollTop >= misses[1].offsetHeight + misses[1].offsetTop){
			keepL.style.transform = "translateX(0px)";
			keepR.style.transform = "translateX(0px)";
		}
	})
	window.addEventListener("scroll",function(){
		if(document.body.scrollTop >= misses[2].offsetHeight + misses[2].offsetTop){
			stoneL.style.transform = "translateX(0px)";
			stoneR.style.transform = "translateX(0px)";
		}
	})

	let missBoard = document.querySelectorAll(".missBoard");
	let missImgs = document.querySelectorAll(".miss>img");
	missImgs.forEach((ele,index) => {
		ele.onmouseenter = function () {
			missBoard[index].style.opacity = 1;
		}
		ele.onmouseleave = function () {
			missBoard[index].style.opacity = 0;
		}
	})
	missBoard.forEach((ele,index) => {
		ele.onmouseenter = function () {
			missBoard[index].style.opacity = 1;
		}
		ele.onmouseleave = function () {
			missBoard[index].style.opacity = 0;
		}
	})
	/*画中戏动画*/
	$(".endBody").hover(function(){
		$(".endPoem").css({"transform":"rotateY(360deg) scale(1.5, 1.5)"});
	},function(){
		$(".endPoem").css({"transform":"rotateY(0deg) scale(1, 1)"});
	})
}
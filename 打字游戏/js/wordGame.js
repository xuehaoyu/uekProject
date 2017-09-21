/*
* @Author: YaYu
* @Date:   2017-08-23 09:16:29
* @Last Modified by:   YaYu
* @Last Modified time: 2017-08-24 08:44:53
*/
/*
方法：产生字符
	  开始
	  结束
	  下一关
	  重新开始
 */
function wordGame () {
	// this.charSheet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
	this.charSheet = [
	["Q","img/Q.png"],
	["W","img/W.png"],
	["E","img/E.png"],
	["R","img/R.png"],
	["T","img/T.png"],
	["Y","img/Y.png"],
	["U","img/U.png"],
	["I","img/I.png"],
	["O","img/O.png"],
	["P","img/P.png"],
	["A","img/A.png"],
	["S","img/S.png"],
	["D","img/D.png"],
	["F","img/F.png"],
	["G","img/G.png"],
	["H","img/H.png"],
	["J","img/J.png"],
	["K","img/K.png"],
	["L","img/L.png"],
	["Z","img/Z.png"],
	["X","img/X.png"],
	["C","img/C.png"],
	["V","img/V.png"],
	["B","img/B.png"],
	["N","img/N.png"],
	["M","img/M.png"]
	];
	this.length = 5;
	this.element = [];
	this.position = [];
	this.speed = 1;
	this.passScore = 10;
	this.score = 0;
	this.life = 10;
	this.scoreObj = document.querySelector(".score>p");
	this.lifeObj = document.querySelector(".life>p");
}
wordGame.prototype = {
	start:function(){
		this.getChars(this.length);
		this.drop();
		this.keyDelete();
	},
	getChars:function(length){
		for(let i = 0;i <length;i++){
			this.getChar();
		}
	},
	// 去除字母重复方法
	checkRepeat:function(charNum){
		return this.element.some(value => value.innerText == this.charSheet[charNum][0]);
	},
	// 去除位置重叠方法
	checkPosition:function(lefts){
		return this.position.some(function(value){
			return Math.abs(value - lefts) < 50;
		});
	},
	getChar:function(){
			let charNum;
			let divs = document.createElement("div");
			let lefts = Math.random()*(innerWidth-400)+200;
			let tops = Math.random()*100;
			// 去除字母重复
			do{
				charNum = Math.floor(Math.random()*this.charSheet.length);
			}while(this.checkRepeat(charNum));
			// 去除位置重叠
			do{
				lefts = Math.random()*(innerWidth-400)+200;
			}while(this.checkPosition(lefts));
			divs.classList.add("char");
			divs.innerText = this.charSheet[charNum][0];
			divs.style.cssText = `
				left:${lefts}px;
				top:${tops}px;
				background-image: url("${this.charSheet[charNum][1]}");
			`
			this.element.push(divs);
			this.position.push(lefts);
			document.body.appendChild(divs);
	},
	drop:function(){
		let that = this;
		this.t = setInterval(function(){
			for(let i = 0;i < that.element.length;i ++){
				let tops = that.element[i].offsetTop;
				that.element[i].style.top = `${tops+that.speed}px`;
				if(tops >= 500){
					document.body.removeChild(that.element[i]);
					that.element.splice(i,1);
					that.position.splice(i,1);
					that.life--;
					that.lifeObj.innerText = that.life;
				}
			}
			if(that.element.length < that.length){
				that.getChar();
			}
			if(that.life <= 0){
				if(confirm("点击确定重新挑战,点击取消退出游戏!")){
				    that.restart();
				}else{
					close();
				}	
			}
		},50)
	},
	keyDelete:function(){
		let that = this;
		document.body.onkeydown = function (e) {
			let keyChar = String.fromCharCode(e.keyCode);
			for(let i = 0;i < that.element.length;i ++){
				if(keyChar == that.element[i].innerText){
					that.score++;
					that.scoreObj.innerText = that.score;
					document.body.removeChild(that.element[i]);
					that.element.splice(i,1);
					that.position.splice(i,1);
				}
			}
			if(that.score >= that.passScore){
				that.pass();
			}
		}
	},
	// 进去下一关
	pass:function(){
		clearInterval(this.t);
		for(let i = 0;i < this.element.length;i++){
			document.body.removeChild(this.element[i]);
		}
		this.element = [];
		this.position =[];
		this.length++;
		this.scoreObj.innerText = 0;
		this.score = 0;
		this.start();
		if(this.length >= 12){
			this.superPass();
		}
	},
	// 进入进阶关卡
	superPass:function(){
		clearInterval(this.t);
		for(let i = 0;i < this.element.length;i++){
			document.body.removeChild(this.element[i]);
		}
		this.element = [];
		this.position =[];
		this.length = 12;
		this.speed++;
		this.scoreObj.innerText = 0;
		this.score = 0;
		this.start();
	},
	// 重新开始
	restart:function(){
		clearInterval(this.t);
		for(let i = 0;i < this.element.length;i++){
			document.body.removeChild(this.element[i]);
		}
		this.element = [];
		this.position = [];
		this.life = 10;
		this.lifeObj.innerText = 10;
		this.length = 5;
		this.scoreObj.innerText = 0;
		this.score = 0;
		this.start();
	}

}
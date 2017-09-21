/*
* @Author: YaYu
* @Date:   2017-08-28 19:34:09
* @Last Modified by:   YaYu
* @Last Modified time: 2017-08-30 19:38:34
*/
window.onload = function () {
	let canvas = document.querySelector("canvas");
	let bottom = document.querySelector(".bottom");
	let mask = document.querySelector(".mask");
	let eraser = document.querySelector(".eraser");
	let mWidth = mask.offsetWidth;
	let mHeight = mask.offsetHeight;
	let erasure = document.querySelector(".icon-xiangpica_icon");
	canvas.width = `${bottom.offsetWidth}`;
	canvas.height = `${bottom.offsetHeight}`;
	let pencil = document.querySelector(".icon-qianbi");
	let brush = document.querySelector(".icon-fl-shuazi");
	let repeal = document.querySelector(".icon-cancel");
	let fonts = document.querySelector(".icon-wenzi");
	let save = document.querySelector(".icon-baocun");
	let reverse = document.querySelector(".icon-ic_invert_colors_px");
	let palette = new palettes(canvas,mask);

	let drawLine = document.querySelectorAll(".line>.iconfont");
	let drawShape = document.querySelectorAll(".shape>.iconfont");
	let strFill = document.querySelectorAll(".strFill>.iconfont");
	let colorBtn = document.querySelectorAll("input");
	let allTrue = document.querySelectorAll(".iconfont");
	// 铅笔点击事件
	pencil.onclick = function () {		
		allTrue.forEach(element => {
			element.setAttribute("active","false");
		});
		pencil.setAttribute("active","true");
		palette.pencil();
	}
	// 刷子事件
	brush.onclick = function () {		
		allTrue.forEach(element => {
			element.setAttribute("active","false");
		});
		brush.setAttribute("active","true");
		palette.brush();
	}
	// 撤销按钮点击事件
	repeal.onclick = function () {
		palette.repeal();
	}
	// 点击选中事件
	drawLine.forEach(element => {
		element.onclick = function () {
			allTrue.forEach(element => {
				element.setAttribute("active","false");
			});
			this.setAttribute("active","true");
			palette.draw(this.id);
		}
	})
	drawShape.forEach(element => {
		element.onclick = function () {
			allTrue.forEach(element => {
				element.setAttribute("active","false");
			});
			this.setAttribute("active","true");
			if(this.id == "poly"){
				palette.polyNum = prompt("你想画一个几边形",5);
				palette.draw(this.id);
			}else if(this.id == "polygon"){
				palette.polygonNum = prompt("你想画一个几角星",5);
				palette.draw(this.id);
			}
			palette.draw(this.id);
		}
	})
	// 描边填充点击事件
	strFill.forEach(element =>{
		element.onclick = function () {
			strFill.forEach(element =>{
				element.classList.remove("jsStrFill");
			})
			this.classList.add("jsStrFill");
			palette.style = this.id;
		}
	})
	// 描边填充颜色填充事件
	colorBtn.forEach(element => {
		element.onchange = function () {
			if(this.id == "strokeStyle"){
				palette.strokeStyle = this.value;
			}else if(this.id == "fillStyle"){
				palette.fillStyle = this.value;
			}
		}
	})
	//橡皮擦点击事件
	erasure.onclick = function () {
		allTrue.forEach(element => {
			element.setAttribute("active","false");
		});
		this.setAttribute("active","true");
		palette.erasure(eraser,mWidth,mHeight);
	}
	// 文本点击事件
	fonts.onclick = function () {
		allTrue.forEach(element => {
			element.setAttribute("active","false");
		});
		this.setAttribute("active","true");
		palette.font();
	}
	// 保存点击事件
	save.onclick = function () {
		save.href = canvas.toDataURL("img/png");
		save.download = "a.png";
	}
	// 反向点击事件
	reverse.onclick = function () {
		palette.reverse();
	}
	// 裁切
	let clip = document.querySelector(".icon-jietu");
	let clipArea = document.querySelector(".clipArea");
	clip.onclick = function () {
		allTrue.forEach(element => {
			element.setAttribute("active","false");
		});
		this.setAttribute("active","true");
		palette.clip(clipArea);
	}
	// ctrl+z 撤销事件
	document.body.onkeydown = function (e) {
		if(e.ctrlKey && e.keyCode == 90){
			if(palette.arrNum == palette.history.length){
				palette.history.pop();
			}
			palette.arrNum--;
			if(palette.arrNum <= 0){
				palette.ctx.clearRect(0,0,palette.canvas.width,palette.canvas.height);
				return;
			}
			let lastStep = palette.history.pop();
			palette.ctx.putImageData(lastStep,0,0);
		}
	}




}
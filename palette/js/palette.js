/*
* @Author: YaYu
* @Date:   2017-08-28 18:16:18
* @Last Modified by:   YaYu
* @Last Modified time: 2017-08-30 19:44:53
*/
/* 
属性：
线宽 端点 颜色 边数 角 尺寸 widths height history ctx
canvas

方法：
画线、虚线、铅笔、多边形、圆、矩形、多角形

橡皮、裁切、文字

新建、保存

 */
function palettes (canvas,mask) {
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
	this.mask = mask;
	console.log(this.mask)
	this.widths = this.canvas.width;
	this.heights = this.canvas.height;

	this.lineWidth = 1;
	this.lineCap = "butt";
	this.style = "strfoke";
	this.fillStyle = "#000";
	this.strokeStyle = "#000";
	this.setLineDash = "setLineDash";
	this.polyNum = 5;
	this.polygonNum = 5;

	this.history = [];
	this.arrnum = 0;
	// 裁切的对象
	this.temp = null;
}
palettes.prototype = {
	// 设置初始值的函数
	init:function () {
		this.ctx.lineWidth = this.lineWidth;
		this.ctx.lineCap = this.lineCap;
		this.ctx.fillStyle = this.fillStyle;
		this.ctx.strokeStyle = this.strokeStyle;
		this.ctx.setLineDash([0,0]);
	},
	// 封装同类型的函数 draw
	draw:function (name) {
		let that = this;
		this.mask.onmousedown = function(e){
			let dx = e.offsetX,dy = e.offsetY;
			that.mask.onmousemove = function(e){
				e.preventDefault();
				let mx = e.offsetX,my = e.offsetY;
				that.ctx.clearRect(0,0,that.widths,that.heights);
				if(that.history.length > 0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.init();
				that[name](dx,dy,mx,my);
			}
			that.mask.onmouseup = function () {
				that.history.push(that.ctx.getImageData(0,0,that.canvas.width,that.canvas.height));
				that.arrNum = that.history.length;
				that.mask.onmousemove =null;
				that.mask.onmouseup =null;
			}	
		}
	},
	// 使用铅笔
	pencil:function () {
		this.mask.onmousedown = function (e) {
			let dx = e.offsetX,dy = e.offsetY;
			this.init();		
			this.ctx.beginPath();
			this.ctx.moveTo(dx,dy);
			this.mask.onmousemove = function (e) {
				let mx = e.offsetX,my = e.offsetY;
				if(this.history.length > 0){
					this.ctx.putImageData(this.history[this.history.length-1],0,0)
				}
				this.ctx.lineTo(mx,my);
				this.ctx.stroke();
			}.bind(this)
			this.mask.onmouseup = function () {
				this.history.push(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));
				this.arrNum = this.history.length;
				this.mask.onmousemove =null;
				this.mask.onmouseup =null;
			}.bind(this)
		}.bind(this)
	},
	// 使用刷子
	brush:function () {
		this.mask.onmousedown = function (e) {
			let dx = e.offsetX,dy = e.offsetY;
			this.init();
			this.ctx.lineWidth = 30;		
			this.ctx.beginPath();
			this.ctx.moveTo(dx,dy);
			this.mask.onmousemove = function (e) {
				let mx = e.offsetX,my = e.offsetY;
				if(this.history.length > 0){
					this.ctx.putImageData(this.history[this.history.length-1],0,0)
				}
				this.ctx.lineTo(mx,my);
				this.ctx.stroke();
			}.bind(this)
			this.mask.onmouseup = function () {
				this.history.push(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));
				this.arrNum = this.history.length;
				this.mask.onmousemove =null;
				this.mask.onmouseup =null;
			}.bind(this)
		}.bind(this)
	},
	// 画直线
	line:function(dx,dy,mx,my){
		this.ctx.beginPath();
		this.ctx.moveTo(dx,dy);
		this.ctx.lineTo(mx,my);
		this.ctx.closePath();
		this.ctx[this.style]();	
	},
	// 画虚线
	dashed:function (dx,dy,mx,my) {
		this.ctx.beginPath();
		this.ctx.setLineDash([20,10]);
		this.ctx.moveTo(dx, dy);
		this.ctx.lineTo(mx, my);
		this.ctx.closePath();
		this.ctx[this.style]();	
	},
	// 画圆
	circle:function (dx,dy,mx,my) {
		let r = Math.sqrt(Math.pow(mx-dx,2)+Math.pow(mx-dx,2));
		this.init();
		this.ctx.beginPath();
		this.ctx.arc(dx,dy,r,0,Math.PI*2,false);
		this.ctx.closePath();
		this.ctx[this.style]();	
	},
	// 画矩形
	rects:function(dx,dy,mx,my){
		let minX = mx>=dx?dx:mx;
		let minY = my>=dy?dy:my;
		let width = Math.abs(mx-dx),height = Math.abs(my-dy);
		this.ctx.beginPath();
		this.ctx.setLineDash([0,0]);
		this.ctx.rect(minX,min, width, height);
		this.ctx.closePath();
		this.ctx[this.style]();
	},
	// 画三角形
	triangle:function(dx,dy,mx,my){
		let deg = 30*(Math.PI/180);
		let deg1 = 150*(Math.PI/180);
		let r = Math.sqrt(Math.pow(mx-dx,2)+Math.pow(mx-dx,2));
		this.ctx.beginPath();
		this.ctx.moveTo(dx,dy-r);
		this.ctx.lineTo(r*Math.cos(deg)+dx,r*Math.sin(deg)+dy);
		this.ctx.lineTo(r*Math.cos(deg1)+dx,r*Math.sin(deg1)+dy);
		this.ctx.closePath();
		this.ctx[this.style]();
	},
	// 画多边形
	poly:function (dx,dy,mx,my) {
		let deg = (360/this.polyNum)*(Math.PI/180);
		let r = Math.sqrt(Math.pow(mx-dx,2)+Math.pow(mx-dx,2));
		this.ctx.beginPath();
		this.ctx.moveTo(dx+r,dy);
		for(let i = 1;i < this.polyNum;i ++){
			this.ctx.lineTo(r*Math.cos(deg*i)+dx,r*Math.sin(deg*i)+dy);
		}
		this.ctx.closePath();
		this.ctx[this.style]();		
	},
	// 画多角星
	polygon:function (dx,dy,mx,my) {
		let deg = (360/(this.polygonNum*2))*(Math.PI/180);
		let r = Math.sqrt(Math.pow(mx-dx,2)+Math.pow(mx-dx,2));
		let r1 = r/2;
		this.ctx.beginPath();
		this.ctx.moveTo(dx+r,dy);
		for(let i = 1;i < this.polygonNum*2;i ++){
			if(i%2){
				this.ctx.lineTo(r1*Math.cos(deg*i)+dx,r1*Math.sin(deg*i)+dy);
			}else{
				this.ctx.lineTo(r*Math.cos(deg*i)+dx,r*Math.sin(deg*i)+dy);
			}
					
		}
		this.ctx.closePath();
		this.ctx[this.style]();
	},
	// 橡皮擦擦除方法
	erasure:function (eObj,mw,mh) {
		let that = this;
		this.mask.onmousedown = function (e) {
			e.preventDefault();
			that.mask.onmousemove = function (e) {
				eObj.style.display = "block";
				let mx = e.offsetX,my = e.offsetY;
				let ew = eObj.offsetWidth,eh = eObj.offsetHeight;
				let lefts = mx-ew/2,tops = my-eh/2;
				eObj.style.left = `${lefts}px`;
				eObj.style.top = `${tops}px`;
				if(lefts <= 0){
					eObj.style.left = 0;
				}else if(mx+ew >= mw){
					eObj.style.left = `${mw-ew}px`;
				}
				if(tops <= 0){
					eObj.style.top = 0;
				}else if(my+eh >= mh){
					eObj.style.top = `${mh-eh}px`;
				}
				that.ctx.clearRect(lefts,tops,ew,eh);
			}
			that.mask.onmouseup = function () {
				that.history.push(that.ctx.getImageData(0,0,that.widths,that.heights));
				that.arrNum = that.history.length;
				let erasure = document.querySelector(".icon-xiangpica_icon");
				erasure.setAttribute("active","false");
				eObj.style.display = "none";
				that.mask.onmousemove = null;
				that.mask.onmouseup = null;
				that.mask.onmousedown = null;
			}
		}
	},
	// 文本方法
	font:function () {
		let that = this;
		this.mask.onmousedown = function (e) {
			let dbx = e.offsetX,dby = e.offsetY;
			let div = document.createElement("div");
			div.contentEditable = true;
			console.log(div);
			div.style.cssText = `
				width:150px;
				height:30px;
				border: 2px dashed #000;
				position: absolute;
				background: #fff;
				left: 0;
				top: 0;	
			`
			that.mask.appendChild(div);
			div.style.left = `${dbx}px`;
			div.style.top = `${dby}px`;
			that.mask.onmousedown = null;
			let lefts,tops;
			div.onmousedown = function (e) {
				let dx = e.clientX,dy = e.clientY;
				let ol = this.offsetLeft,ot = this.offsetTop;
				let divW = div.offsetWidth,divH = div.offsetHeight;
				let maskW = that.mask.offsetWidth,maskH = that.mask.offsetHeight;
				that.mask.onmousemove = function (e) {
					let cx = e.clientX,cy = e.clientY;
					lefts = cx - dx + ol;
					tops = cy - dy + ot;
					console.log(lefts);
					if(lefts <= 0){
						lefts = 0;
					}else if (lefts + divW >= maskW){
						lefts = maskW - divW;
					}
					if(tops <= 0){
						tops = 0;
					}else if (tops + divH >= maskH){
						tops = maskH - divH;
					}
					div.style.left = `${lefts}px`;
					div.style.top = `${tops}px`;
				}
				div.onmouseup = function () {
					that.mask.onmousemove = null;
					this.onmouseup = null;
				}
			}
			div.onblur = function () {
				let value = this.innerText;
				let fonts = document.querySelector(".icon-wenzi");
				fonts.setAttribute("active","false");
				that.ctx.font = "24px sans-serif";
				that.ctx.textAlign = "center";
				that.ctx.fillText(`${value}`,lefts,tops);
				that.mask.removeChild(this);
				that.history.push(that.ctx.getImageData(0,0,that.widths,that.heights));
				that.arrNum = that.history.length;
			}
		}
	},
	// 反相方法
	reverse:function(){
		let image = this.ctx.getImageData(0,0,this.widths,this.heights);
		let data = image.data;
		for(let i = 0;i < data.length;i+=4){
			data[i] = 255 - data[i];
			data[i+1] = 255 - data[i+1];
			data[i+2] = 255 - data[i+2];
		}
		this.ctx.putImageData(image,0,0);
		this.history.push(this.ctx.getImageData(0,0,this.widths,this.heights));
		this.arrNum = this.history.length;
	},
	// 裁切方法
	clip:function (clipObj) {
		let that = this;
		this.mask.onmousedown = function (e) {
			let dx = e.offsetX,dy = e.offsetY;
			let minX,minY,w,h;
			that.mask.onmousemove = function (e) {
				let mx = e.offsetX,my = e.offsetY;
				w = Math.abs(mx-dx);
				h =Math.abs(my-dy);
				minX = mx>=dx?dx:mx;
				minY = my>=dy?dy:my;
				clipObj.style.cssText = `
					display:block;
					width:${w}px;
					height:${h}px;
					left:${minX}px;
					top:${minY}px;
				`
			}
			that.mask.onmouseup = function () {
				that.temp = that.ctx.getImageData(minX,minY,w,h);
				that.ctx.clearRect(minX,minY,w,h);
				that.history.push(that.ctx.getImageData(0,0,that.widths,that.heights));
				that.arrNum = that.history.length;
				that.ctx.putImageData(that.temp,minX,minY);
				that.mask.onmousemove = null;
				that.mask.onmouseup = null;
				that.clipMove(clipObj,minX,minY,w,h);
			}
		}
	},
	clipMove:function(clipObj,minX,minY,w,h){
		let that = this;
		this.mask.onmousemove = function (e) {
			let mx = e.offsetX,my = e.offsetY;
			if(mx > minX && mx < minX+w && my > minY &&  my < minY+h){
				that.mask.style.cursor = "move";
			}else{
				that.mask.style.cursor = "default";
			}
		}
		this.mask.onmousedown = function (e) {
			let dx = e.offsetX,dy = e.offsetY;
			that.mask.onmousemove = function (e) {
				let mx = e.offsetX,my = e.offsetY;
				let lefts = mx-dx+minX;
				let tops = my-dy+minY;
				if(lefts <= 0){
					lefts = 0;
				}else if(lefts > that.widths-w){
					lefts = that.widths-w;
				}
				if(tops <= 0){
					tops = 0;
				}else if(tops > that.heights-h){
					tops = that.heights-h;
				}
				clipObj.style.left = `${lefts}px`;
				clipObj.style.top = `${tops}px`;
				that.ctx.clearRect(0,0,that.widths,that.heights);
				if(that.history.length > 0){
					that.ctx.putImageData(that.history[that.history.length-1],0,0);
				}
				if(that.temp == null){
					return;
				}
				that.ctx.putImageData(that.temp,lefts,tops);
			}
			that.mask.onmouseup = function (){
				let clip = document.querySelector(".icon-jietu");
				clip.setAttribute("active","false");
				that.temp = null;
				clipObj.style.display = "none";
				that.mask.style.cursor = "default";
				that.history.push(that.ctx.getImageData(0,0,that.widths,that.heights));
				that.arrNum = that.history.length;
				that.mask.onmousemove = null;
				that.mask.onmouseup = null;
			}
		}
	},
	// 撤销按钮
	repeal:function(){
		if(this.arrNum == this.history.length){
			this.history.pop();
		}
		this.arrNum--;
		if(this.arrNum <= 0){
			this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
			return;
		}
		let lastStep = this.history.pop();
		this.ctx.putImageData(lastStep,0,0);
	}

}
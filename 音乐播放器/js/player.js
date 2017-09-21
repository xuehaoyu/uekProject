/*
* @Author: YaYu
* @Date:   2017-08-30 21:32:47
* @Last Modified by:   YaYu
* @Last Modified time: 2017-09-01 17:25:16
*/
window.onload = function () {
	let audio = document.querySelector("audio");
	let pause = document.querySelector(".icon-zanting");
	let song = document.querySelector(".song");
	let singer = document.querySelector(".singer");
	let list  = document.querySelector(".list");
	let photo  = document.querySelector(".photo>img");
	let pSinger  = document.querySelector(".pSinger");
	let times  = document.querySelector(".time");
	let progressL  = document.querySelector(".progressL");
	let i = 0;
	// 点击暂停按钮
	pause.onclick = function () {
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
		pause.classList.toggle("icon-iconfontyinleeps")
	}
	// 点击切换歌曲
	let last = document.querySelector(".icon-xiayishou1");
	let next = document.querySelector(".icon-xiayishou");
	last.onclick = function () {
		i--;
		if(i  == -1){
			i = database.length-1;
		}
		render(database[i]);
		audio.play();
		pause.classList.add("icon-iconfontyinleeps");
	}
	next.onclick = function () {
		i++;
		if(i == database.length){
			i = 0;
		}
		render(database[i]);
		audio.play();
		pause.classList.add("icon-iconfontyinleeps");
	}
	// 一首播放完后自动切换
	audio.onended = function () {
		i++;
		render(database[i]);
		audio.play();
		pause.classList.add("icon-iconfontyinleeps");
	}
	// 音量键
	let volumP = document.querySelector(".volumP");
	let volumeBtn = document.querySelector(".volumeBtn");
	volumeBtn.onmousedown = function (e) {
		let dx = e.clientX;
		let dL = this.offsetLeft;
		console.log(dL);
		document.onmousemove = function (e) {
			let mx = e.clientX;
			let lefts = mx-dx+dL;
			if(lefts <= -6){
				lefts = -6;
			}else if (lefts >= 100-6){
				lefts = 94;
			}
			volumeBtn.style.left = `${lefts}px`
			volumP.style.width = `${lefts}px`;
			audio.volume = (lefts+6)/100;
		}
		document.onmouseup = function () {
			document.onmousemove = null;
			volumeBtn.onmouseup = null;
		}
	}
	// 初始化数据
	render(database[i]);
	// 播放器的播放事件
	audio.ontimeupdate = function () {
		let bili = audio.currentTime/audio.duration;
		console.log(audio.currentTime)
		let nowTime = time(audio.currentTime);
		let allTime = time(audio.duration);
		times.innerHTML = `${nowTime}/${allTime}`;
		progressL.style.width = `${bili*100}%`;

		database[i].lyrics.forEach((element,index) =>{
			if(element.time == nowTime){
				list.innerHTML = ``;
				let a = index;
				if(index < 3){
					index = 0;
				}else{
					index -= 3;
				}
				for(let j = index; j < database[i].lyrics.length;j ++){
					list.innerHTML += `<li class="listLi${j}">${database[i].lyrics[j].lyric}</li>`;
				}
				let obj = document.querySelector(`.listLi${a}`);
				obj.style.color = "#b37770";
				obj.style.fontSize = "22px";
			}
		})	
	}
	// 格式化时间函数
	function time (t) {
		let minute = Math.floor(t/60) < 10?`0${Math.floor(t/60)}`:`${Math.floor(t/60)}`;
		let second = Math.floor(t%60) < 10?`0${Math.floor(t%60)}`:`${Math.floor(t%60)}`;
		return `${minute}:${second}`;
	}
	// 初始化数据函数
	function render (data) {
		audio.src = `${data.src}`;
		song.innerHTML = `${data.songs}`;
		singer.innerHTML = `${data.name}`;
		photo.src = `${data.photo}`;
		pSinger.innerHTML = `${data.songs}-${data.name}`;
		list.innerHTML = ``;
		for (let i = 0; i < data.lyrics.length; i++){
			list.innerHTML += `<li>${data.lyrics[i].lyric}</li>`;
		}
	}

}
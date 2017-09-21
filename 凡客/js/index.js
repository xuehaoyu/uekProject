/*
* @Author: YaYu
* @Date:   2017-08-10 15:29:00
* @Last Modified by:   YaYu
* @Last Modified time: 2017-08-10 18:02:26
*/

'use strict';
window.onload = function () {
// 凡客头部微信移入
 	let weixin = document.getElementsByClassName("weixin");
 	let weima = document.getElementsByClassName("wei-ma");
 	weixin[0].onmouseenter = function() {
 		weima[0].style.display = "block";
 	}
 	weixin[0].onmouseleave = function() {
 		weima[0].style.display = "none";
 	}
}
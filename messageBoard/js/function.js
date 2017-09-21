/*
* @Author: YaYu
* @Date:   2017-08-14 18:56:35
* @Last Modified by:   YaYu
* @Last Modified time: 2017-08-16 16:38:19
*/

'use strict';
	/*封装一个$函数；
	功能：1.获取html中的元素 2.当参数为函数时运行onload时间中的代码
	参数 select:字符串->标签名、类名、id名
	ranger：对象*/
	function $ (select,ranger) {
		if(typeof select == "string"){
			/*if(ranger==undefined){
				ranger = document;
			}*/
			// ranger = ranger?ranger:document;
			ranger = ranger || document;
			let newSelect = select.trim(); 
			//对传入的字符串去空
			let firstChar = newSelect.charAt(0);
			//获取字符串的首字符用于判断
			if(firstChar == "#"){
				return ranger.getElementById(newSelect.substring(1));
			}else if(firstChar == "."){
				return ranger.getElementsByClassName(newSelect.substring(1));
			}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(newSelect)){
				return ranger.getElementsByTagName(newSelect);
			}
		}else if(typeof select == "function"){
			window.onload = function(){
				select();
			}
		}
	}
	// 定义函数获取元素中的内容
	function html (element,content){
		if(arguments.length == 2){
			element.innerHTML = content;
		}else if (arguments.length == 1){
			return element.innerHTML;
		}
	}
	function text (element,content){
		if(arguments.length == 2){
			element.innerText = content;
		}else if (arguments.length == 1){
			return element.innerText;
		}
	}
	// 定义一个函数设置元素的各种属性
	function css (element,attrObj){
		for(let i in attrObj){
			element.style[i] = attrObj[i];
		}
	}
	// 定义函数给一个元素集合添加、删除事件
	function on (elements,type,fn){
		for(let i = 0;i < elements.length;i ++){
			elements[i][type] = fn;
		}
	}
	function off (elements,type){
		for(let i = 0;i < elements.length;i ++){
			elements[i][type] = null;
		}
	}
	// 在HTMLElement上自定义方法
	// 用insertBefore方法模拟在某个元素后面插入元素
	HTMLElement.prototype.insertAfter = function(insert){
		// 获取它相邻的下一个兄弟元素
		let next = this.nextElementSibling;
		// 获取他的父元素
		let parent = this.parentNode;
		if(next){
			parent.insertBefore(insert,next);
		}else{
			parent.appendChild(insert);
		}
	}
	// 在某个元素的最前面插入一个元素
	HTMLElement.prototype.prependChild = function(insert){
		// 获取他的第一个子元素节点
		let first = this.firstElementChild;
		if(first){
			this.insertBefore(insert,first);
		}else{
			this.appendChild(insert);
		}
	}
	// 定义一个函数将元素插入到某个元素的最前面
	HTMLElement.prototype.prependTo = function(parent){
		parent.prependChild(this);
	}
	// 定义一个函数将元素插入到某个元素的最后面
	HTMLElement.prototype.appendTo = function(parent){
		parent.appendChild(this);
	}
	// 定义一个empty方法，将元素内部的内容清空
	HTMLElement.prototype.empty = function (){
		let child = this.childNodes;
		for(let i = child.length-1;i >= 0;i --){
			this.removeChild(child[i]);
		}
		// this.innerHTML = "";
	}
	HTMLElement.prototype.remove = function (){
		let parent = this.parentNode;
		parent.removeChild(this);
	}
	// next()获取下一个兄弟元素节点 
	// nextAll() 获取它后面所有的元素节点，传参获取指定的元素节点
	// nextUntil() 获取指定范围的兄弟元素节点
	// previous()获取下一个兄弟元素节点 
	// previousAll() 获取它后面所有的元素节点，传参获取指定的元素节点
	// previousUntil() 获取指定范围的兄弟元素节点
	// closet
	// parent parents parentUntil
	HTMLElement.prototype.next = function (){
		let next = this.nextElementSibling;
		if(next){
			return next;
		}else{
			return false;
		}
	}
	HTMLElement.prototype.nextAll = function (){
		let next = this.nextElementSibling;
		let newArr = [];
		if(next){
			newArr.push(next);
		}else{
			return false;
		}
		while(next){
			next = next.nextElementSibling;
			newArr.push(next);
		}
		newArr.pop();
		return newArr;
	}
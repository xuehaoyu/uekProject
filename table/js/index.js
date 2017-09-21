/*
* @Author: YaYu
* @Date:   2017-08-22 15:07:33
* @Last Modified by:   YaYu
* @Last Modified time: 2017-08-23 11:32:15
*/
/*
修改
可编辑状态：当前单元格里面插入一个input
1.input
2.td的内容 -> input
3.清空td的内容
3.input输入的内容 ->td 
更新
表单失去焦点
1.input内容保存newvalue
2.input removeChild
3.newvalue -> 单元格
 */
window.onload = function () {
// 增加
	let addBtn = document.querySelector(".addBtn");
 	let tbody  = document.querySelector("tbody");
	let student = [
		{"name":"唐无心","sex":"男","age":"20","phone":1234567,"address":"山西省太原市小店区"},
        {"name":"张三","sex":"男","age":"20","phone":1234567,"address":"陕西省太原市小店区"},
        {"name":"李四","sex":"女","age":"30","phone":1234567,"address":"北京市三环外"},
        {"name":"王五","sex":"男","age":"26","phone":1234567,"address":"山西省太原市小店区"},
        {"name":"赵六","sex":"女","age":"27","phone":1234567,"address":"山西省太原市小店区"},
        {"name":"钱七","sex":"男","age":"20","phone":1234567,"address":"山西省太原市小店区"}
	]
	localStorage.student = JSON.stringify(student);
	let studentArr = JSON.parse(localStorage.student);
	console.log(localStorage.student);
	studentArr.forEach(value =>{
		tbody.innerHTML += `
			<tr>
				<td>${value.name}</td>
				<td>${value.sex}</td>
				<td>${value.age}</td>
				<td>${value.phone}</td>
				<td>${value.address}</td>
				<td class="lastTd"><button class="delBtn">删除</button></td>
			</tr>
		`
	})
 	addBtn.onclick = function () {
 		let newTr = document.createElement("tr");
 		newTr.innerHTML = `
			<td>唐无心</td>
			<td>男</td>
			<td>20</td>
			<td>12345678</td>
			<td>山西省太原市小店区</td>
			<td class="lastTd"><button class="delBtn">删除</button></td>
 		`
 		tbody.appendChild(newTr);
 	}
// 修改
	tbody.ondblclick = function (e) {
		let ele = e.target;
		if(ele.nodeName == "TD" && ele.className != "lastTd"){
			let inputs = document.createElement("input");
			let content = ele.innerText;
			ele.innerText = "";
			inputs.value = content;
			inputs.autofocus = "autofocus";
			ele.appendChild(inputs);
			inputs.onblur = function () {
				let newValue = inputs.value;
				ele.innerText = newValue;
				// ele.removeChild(inputs);
				inputs = null;
			}
		}else if(ele.nodeName == "BUTTON"){
			let delTr = ele.parentNode.parentNode;
 			tbody.removeChild(delTr);
 			delTr = null;
		}
	}
// 删除
/* 	tbody.onclick = function (e) {
 		let ele = e.target;
 		if(ele.nodeName == "BUTTON"){
 			let delTr = ele.parentNode.parentNode;
 			tbody.removeChild(delTr);
 			delTr = null;
 		}
 	} */

}
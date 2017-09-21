window.onload = function () {
    let linkMan = [
        {"name":"阿三","phone":"17845678","char":"asan"},
        {"name":"粑粑","phone":"18245678","char":"baba"},
        {"name":"曹操","phone":"13245678","char":"caocao"},
        {"name":"丁大","phone":"17745678","char":"dingda"},
        {"name":"儿子","phone":"18145678","char":"erzi"},
        {"name":"发发","phone":"12345678","char":"fafa"},
        {"name":"刚刚","phone":"12345678","char":"gangang"},
        {"name":"黄豆","phone":"13345678","char":"huangdou"},
        {"name":"加不加","phone":"12345678","char":"jiabujia"},
        {"name":"快快","phone":"14445678","char":"kuaikuai"},
        {"name":"来啊","phone":"12345678","char":"laia"},
        {"name":"妈妈","phone":"12345678","char":"mama"},
        {"name":"难受","phone":"12345678","char":"nanshou"},
        {"name":"想哭","phone":"12345678","char":"xiangku"},
        {"name":"杨洋","phone":"12345678","char":"yangyang"}
    ]
    // localStorage.linkMan = JSON.stringify(linkMan);
    // data = JSON.parse(localStorage.linkMan);
    let dl = document.querySelector("dl");
    let asside = document.querySelector("asside");
    let tip = document.querySelector(".tip");
    let header = document.querySelector("header")
    let heights =  header.offsetHeight;
    let inputs = document.querySelector("input");
    let data = getData(linkMan);
    function getData (attr) {
        let data = localStorage.getItem('attr')?JSON.parse(localStorage.attr):false;
        if(!data){
            localStorage.setItem('attr',JSON.stringify(attr));
        }
        data = JSON.parse(localStorage.attr);
        return data;
    }
    rander(data);
    function rander(data) {
        let dataObj = {};
        for(let i = 0;i < data.length;i ++){
            let firstChar = data[i].char.charAt(0).toUpperCase();
            if(!dataObj[firstChar]){
                dataObj[firstChar] = [];
            }
            dataObj[firstChar].push(data[i]);
        }
        let keys = Object.keys(dataObj).sort();
        asside.innerHTML = ``;
        dl.innerHTML = ``;
        keys.forEach(element => {
            dl.innerHTML += `
            <dt>${element}</dt>
            `;
            asside.innerHTML +=`
            <li>${element}</li>
            `
            dataObj[element].forEach(value => {
                dl.innerHTML += `
                    <dd><a href="tel:${value.phone}">${value.name}</a></dd>
                `
            })
        })

    //    侧边栏
        let assideH = asside.offsetHeight;
        asside.style.marginTop = `-${assideH/2}px`;
    //提示框滚动事件
        let tipArr = [];
        let dts = document.querySelectorAll("dt");
        dts.forEach(value => {
            tipArr.push(value.offsetTop);
        })
        window.onscroll = function () {
            let tops = document.body.scrollTop;
            tipArr.forEach((value,index)=>{
                if(value < heights + tops ){
                    tip.innerHTML = `${keys[index]}`
                }
            })
        }
    }
//    搜索事件
    inputs.oninput = function () {
        let val = this.value.trim();
        let filter = data.filter(element => element.name.includes(val) || element.phone.includes(val) || element.char.includes(val));
        rander(filter);
    }
//    添加联系人
    function add(name,phone,char) {
        data.push({"name":name,"phone":phone,"char":char});
        rander(data);
    }

}
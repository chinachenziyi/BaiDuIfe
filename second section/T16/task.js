/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
aqiData = {};//利用键值对存储数据
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById('aqi-city-input').value.trim();
	var num = document.getElementById('aqi-value-input').value.trim(); 
	var sexcity=/^[A-Za-z\u4E00-\u9FA5]+$/;//正则表达式，用来比对输入内容是否符合格式要求
    var sexnum=/^[0-9]+$/;
	if(sexcity.test(city)&&sexnum.test(num)){
		console.log(city); //调试用
        console.log(num); //调试用
		aqiData[city] = num; 
	}
	else{
		alert("输入有误，城市必须是英文或汉字，指数必须为数字~");
	}
	/* document.write(aqiData[0]);	 */
}

/**
 * 渲染aqi-table表格
 */
/* function createTd(x,y){
	var td=document.createElement('td');
	td.innerHTML=x;
	y.appendchild(td);
} */
function renderAqiList() {
	/* var firTr = document.createElement('tr');   //自己写的增加表格代码，虽然复杂，也算一个方法。
	createTd('城市',firTr);
	createTd('空气质量',firTr);
	createTd('操作',firTr);
	document.getElementById('aqi-table').appendChild(firTr); */
	var tableinner = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";//添加表格简化模式，可借鉴。
	for(var i in aqiData){//对键值对的遍历循环，其中i只是一个计数变量，会增加按顺序访问“北京”“上海”等。。。
		tableinner+="<tr><td>"+i+"</td><td>"+aqiData[i]+"</td><td><button>删除</button></td></tr>";
	}
	document.getElementById("aqi-table").innerHTML=tableinner;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
	// do sth.
	delete aqiData[city];
	renderAqiList();
}

function init() {

	// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	 document.getElementById("add-btn").onclick=addBtnHandle;
	// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
	document.getElementById("aqi-table").addEventListener("click",function(e){
		if(e.target.nodeName=="BUTTON"){ //返回节点名为BUTTON的目标节点
			city = e.target.parentNode.parentNode.firstChild.firstChild.nodeValue;//button的两层父节点的两层子节点。
			delBtnHandle(city);
		}
	},false);//fales为事件句柄在冒泡阶段执行。
}

init();
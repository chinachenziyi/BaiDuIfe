//定义一个数组老存储数据
var numSave = new Array();

//给所有按键绑定点击事件，点击时触发数组插入相关函数

//数组插入元素相关函数
function insLeft(){
	var num = document.getElementById("numIn").value;
	var sexnum=/^[0-9]+$/;
	if(sexnum.test(num)){
        console.log(num); //调试用 
		numSave.unshift([num]);
		display();
	}
	else{
		alert("输入有误，必须为数字~");
	}
}
function insRight(){
	var num = document.getElementById("numIn").value;
	var sexnum=/^[0-9]+$/;
	if(sexnum.test(num)){
        console.log(num); //调试用
		numSave.push([num]);
		display();		
	}
	else{
		alert("输入有误，必须为数字~");
	}
}
function delLeft(){
	var num = document.getElementById("numIn").value;
	var sexnum=/^[0-9]+$/;
	if(sexnum.test(num)){
        console.log(num); //调试用 
		numSave.shift();
		display();
	}
	else{
		alert("输入有误，必须为数字~");
	}
}
function delRight(){
	var num = document.getElementById("numIn").value;
	var sexnum=/^[0-9]+$/;
	if(sexnum.test(num)){
        console.log(num); //调试用 
		numSave.pop();
		display();
	}
	else{
		alert("输入有误，必须为数字~");
	}
}
document.getElementById("display").addEventListener("click",function(event){//此处的click可以点击所有子元素以及父元素。
            var index=event.target.getAttribute("id");//获取被点击的元素的id
            if(index!="display"){
                numSave.splice(index,1);//利用span的编号，来确定点击元素的位置
            }
            display();
        });
//显示函数
function display(){
		document.getElementById("display").innerHTML='';//每次将div清空
	for(var i = 0;i<numSave.length;++i){
		document.getElementById("display").innerHTML+="<span class='red' id='"+i+"'>"+numSave[i]+"</span>";
	}
}
function clickBut(){
	document.getElementById("leftIn").onclick = insLeft;
	console.log(leftIn);
	document.getElementById("rightIn").onclick = insRight;
	document.getElementById("leftOut").onclick = delLeft;
	document.getElementById("rightOut").onclick = delRight;
}
clickBut();


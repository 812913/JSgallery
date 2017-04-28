/**
 * Created by 15928 on 2017/4/23.
 */
function showPic(whichpic){
//单击链接替换图片
    var source=whichpic.getAttribute('href');
    
    var placeholder=document.getElementById('placeholder');
    placeholder.setAttribute('src',source);//注意sourse无引号
//单击链接替换文本
    var text=whichpic.getAttribute('title');
    var description=document.getElementById('description');
    //检索节点的值
    // alert(description.nodeValue);//输出为null，p元素的nodeValue属性为null
    // alert(description.childNodes[0].nodeValue);//注意：<p>元素内部的文本是另一种节点，它是<p>元素的第一个子节点，输出p元素内部的文本内容
    // alert(description.firstChild.nodeValue);//注意：和上述语句作用相同
    //设置节点的值
    description.firstChild.nodeValue=text;
}

function countBodyChildren(){
    var body_element=document.getElementsByTagName('body')[0];
    // alert(body_element.childNodes.length);//注意：输出的是5 ，然而body只有三个元素：h1、ul、img，这是因为文档的节点类型不仅仅只有元素节点一种。
    alert(body_element.nodeType);// 注意：nodeType不是输出英文字符串，而是输出1、2、3等，nodeType共有12中可能取值，元素节点为1、属性节点为2、文本节点为3
}
//window.onload=countBodyChildren;//注意该方法没有带（），带（）不起作用

//1.兼容函数
function getClass(classname,obj){
        var obj=obj||document;
    	if(obj.getElementsByClassName){
    	  return obj.getElementsByClassName(classname);
    	}else{
    	  var all=obj.getElementsByTagName("*");
          var arr=[];
    	  for(var i=0;i<all.length;i++){
    		if(checkRel(all[i].className,classname)){
    				arr.push(all[i]);
    			}
    		}
    		return arr;
    	}
    }
    function checkRel(str,val){
        newarr=str.split(" ");
        for(var i=0;i<newarr.length;i++){
            if(newarr[i]==val){
                return true;
            }
        }
        return false;
    }

//*************************************************************
//2兼容函数
//可以获取与设置纯文本的兼容函数
//val；接受第二个实参，表示设置一个文本
//obj：那个对象用这个方法
function getText(obj,val){
    if(val==undefined){//如果val为undefined，
        //表示只有一个参数，这个函数实现功能获取文本
        if(obj.innerText){//如果为真IE8浏览器
            return obj.innerText;
        }else{//为假W3C浏览器火狐浏览器
            return obj.textContent;
        }
    }else{
        if(obj.innerText||obj.innerText==""){/*ie8浏览器
            ,当浏览器有innerText这个属性时，或者当对象的
            内容为空字符串时，都可以给这个对像设置文本*/
            obj.innerText=val;
        }else{//W3C浏览器火狐浏览器
            obj.textContent=val;
        }
    }
} 
//*************************************************************
//3.获取样式
    function getStyle(obj,attr){
        if(obj.currentStyle){//IE8
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj,null)[attr];
        }
    }   


//****************************************************************
//4.类名选者$
 function $(select,obj){
    var obj=obj||document;
    if(typeof select=="string"){
        //去掉字符串前后的空格
        select=select.replace(/^\s*|\s*$/g,"")
        if(select.charAt(0)=="."){
            return getClass(select.slice(1),obj);
        }else if(select.charAt(0)=="#"){
            return obj.getElementById(select.slice(1));
        }else if(/^[a-z|1-6]{1,10}$/g.test(select)){
            return obj.getElementsByTagName(select);
        }
    }else if(typeof select=="function"){
        //表示一个函数
        window.onload=function(){
            select();
        }
    }
 } 

 //************************************************************ 
/*
5.getChlids(parent);
"a":获取元素的子节点的兼容函数
"b":获取元素+文本节点
原理：先获取所有的儿子，让后根据节点的类型判断，如果为1，表示是元素
的节点保存到数组里
*/
function getChilds(parent,type){
    var type=type||"a";
    var childs=parent.childNodes//所有的儿子
    var arr=[];
    for(var i=0;i<childs.length;i++){
        if(type=="a"){
            if(childs[i].nodeType==1){
            arr.push(childs[i]);
            }
        }else if(type=="b"){
            if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
            arr.push(childs[i]);
            }
        }
        
    }
    return arr;
}
//**************************************************************
/*
6.获得第一个子节点
*/
function getFirst(parent){
    return getChilds(parent)[0];
}
//****************************************************************
//7.获得最后一个子节点
function getLast(parent){
    return getChilds(parent)[getChilds(parent).length-1];
}
//*****************************************************************

//8.获得一个指定节点

function getNum(parent,num){
    return getChilds(parent)[num];
}

//*****************************************************************
//9.获得下一个兄弟节点的引用
function getNext(obj){
    var next=obj.nextSibling;
    while(next.nodeType==3||next.nodeType==8){
        next=next.nextSibling;
        if(next==null){
            return false;
        }
    }
    return next;
}

//*******************************************************
//10.获得上一个兄弟节点的引用

function getUp(obj){
    var up=obj.previousSibling;
    if(up==null){
        return false;
    }
    while(up.nodeType==3||up.nodeType==8){
        up=up.previousSibling;
        if(up==null){
        return false;
        }
    }
    return up;
}

//*************************************************************

//11.插入到某个对象之后
/*对象.insertBefore(obj,obj1)*/
//插入到下一个对象之前
Object.prototype.insertAfter=function(obj1,obj2){
   var next=getNext(obj2);
   this.insertBefore(obj1,next)
}

//***********************************************************
//12.获取滚动条到页面顶部的距离
function getScrollT(){
    var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
    return scrollT;
}

//**************************************************************
//13.同一元素添加多个事件的兼容函数
//obj：给那个对象添加
//ev：什么事件  fun：事件处理程序
function addEvent(obj,ev,fun){
    if(obj.addEventListener){
        return obj.addEventListener(ev,function(){
            fun.call(obj);
        },false);
    }else{
        return obj.attachEvent("on"+ev,function(){
            fun.call(obj);
        });//在IE8中，this不指当前对象，指的是window
    }
}


//*************************************************************
//14
function getCW(){
    return document.documentElement.clientWidth;
}
function getCH(){
    return document.documentElement.clientHeight;
}

//*******************************************************
//15
//obj：哪个对象添加滚轮事件
//upfun：处理滚轮向上的函数
//downfun：处理滚轮向下的函数
        function mouseWheel(obj,upfun,downfun){
             if(obj.attachEvent){
             obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
            }else if(obj.addEventListener){
             obj.addEventListener("mousewheel",scrollFn,false);
            //chrome,safari -webkit-
             obj.addEventListener("DOMMouseScroll",scrollFn,false);
            //firefox -moz-
            }
            function scrollFn(e){
                var ev=e||window.event;
                if (ev.preventDefault ){
                    ev.preventDefault(); //阻止默认浏览器动作(W3C)
                }else{
                    ev.returnValue = false;//IE中阻止函数器默认动作的方式
                }
                       
                var num=ev.detail||ev.wheelDelta;
                if(num==-3||num==120){//向上
                    if(upfun){
                        upfun();
                    }
                    
                }
                if(num==3||num==-120){
                    if(downfun){
                        downfun();
                    } 
                }
            }
        }
//*************************************************

//16.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/
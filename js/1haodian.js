window.onload=function(){
	 var bannerbox=$(".bannerbox")[0];
	 var banner=$(".banner")[0];
	 var imgs=$("img",banner);
	 var btnleft=$(".btnleft")[0];
	 var btnright=$(".btnright")[0];
	 var btn=$(".btn");
	 var arr=["#bc0379","#0f1db4","#1eabfd","#20a5e8","#eb3f89","#ef5f22","#fdc787","#f30707"];
	 var num=0;
	 var bannernavbox=$(".bannernavbox")[0];
	 for(var i=0;i<imgs.length;i++){
	 	imgs.index=i;
	 }
	 //轮播
	 function move(type){
	 	if(type=="r"){
	 		num++;
	 		if(num>=imgs.length){
	 			num=0;
	 		}
	 	}
	 	if(type=="l"){
	 		num--;
	 		if(num<=-1){
	 			num=imgs.length-1;
	 		}
	 	}
	 	for(var i=0;i<imgs.length;i++){
	 		imgs[i].style.zIndex=2;
	 		btn[i].style.background="#ccc";
	 	}
	 	imgs[num].style.zIndex=3;
	 	btn[num].style.background="yellowgreen";
        bannernavbox.style.background=arr[num];
	 }
	 var t=setInterval(function(){move("r")},2000);
	 //按钮1
	 for(var i=0;i<btn.length;i++){
	 	btn[i].index=i;
	 	btn[i].onmouseover=function(){
	 		clearInterval(t);
	 		for(var j=0;j<imgs.length;j++){
	 			imgs[j].style.zIndex=2;
	 			bannernavbox.style.background=arr[this.index];
	 			btn[j].style.background="#ccc";
	 		}
	 		imgs[this.index].style.zIndex=3;
	 		btn[this.index].style.background="yellowgreen";
	 	}
	 	btn[i].onmouseout=function(){
	 		t=setInterval(function(){move("r")},2000);
	 		num=this.index
	 	}
	 }
	 //按钮2
	 banner.onmouseover=function(){
	 	clearInterval(t);
	 	btnleft.style.display="block";
	 	btnright.style.display="block";
	 }
	 btnright.onmouseover=function(){
	 	clearInterval(t);
	 	btnright.style.display="block";
	 	btnleft.style.display="block";
	 }
	 btnleft.onmouseover=function(){
	 	clearInterval(t);
	 	btnleft.style.display="block";
	 	btnright.style.display="block";
	 }
	 banner.onmouseout=function(){
	 	clearInterval(t);
	 	t=setInterval(function(){move("r")},2000);
	 	btnleft.style.display="none";
	 	btnright.style.display="none";
	 }
	 btnleft.onclick=function(){
	 	move("l");
	 }
	 btnright.onclick=function(){
	 	move("r");
	 }
     



 //侧滑框
  //var caidanone=getClass("bannernavleft1");
  //alert(caidanone.length);
 // var chehua=$(".chehua")[0];
 // for(var i=0;i<caidanone.length;i++){
    /*caidan[i].index=i;*/
    /*caidanone[i].onmouseover=function(){
      chehua.style.display="block";
    }
    caidanone[i].onmouseout=function(){
      chehua.style.display="none";
    }
    chehua.onmouseover=function(){
      chehua.style.display="block";
    }
    chehua.onmouseout=function(){
      chehua.style.display="none";
    }
  }
*/

//右移
var chehua=$(".chehua");
var zuoyi=$(".bannernavleft1");
for(var i=0;i<zuoyi.length;i++){
  zuoyi[i].index=i;
  for(var j=0;j<chehua.length;j++){
     
     zuoyi[i].onmouseover=function(){
       zuoyi[this.index].style.paddingLeft="10"+"px";
       chehua[this.index].style.display="block";
     }
     zuoyi[i].onmouseout=function(){
      zuoyi[this.index].style.paddingLeft="0"+"px";
      chehua[this.index].style.display="none";
      
     }
     chehua[j].index=j;
     chehua[j].onmouseover=function(){
      chehua[this.index].style.display="block";
      zuoyi[this.index].style.paddingLeft="10"+"px";
     }
     chehua[j].onmouseout=function(){
      chehua[this.index].style.display="none";
      zuoyi[this.index].style.paddingLeft="0"+"px";
     }

  }
}


/*for(var i=0;i<zuoyi.length;i++){
	zuoyi[i].index=i;
   zuoyi[i].onmouseover=function(){
	zuoyi[this.index].style.paddingLeft="10"+"px";
      for(var j=0;j<chehua.length;j++){
        chehua[j].style.display="block";
      }
   }
   zuoyi[i].onmouseout=function(){
	zuoyi[this.index].style.paddingLeft="0"+"px";
      for(var j=0;j<chehua.length;j++){
        chehua[j].style.display="none";
      }
	
   }
   chehua.onmouseover=function(){
      chehua.style.display="block";
    }
    chehua.onmouseout=function(){
      chehua.style.display="none";
    }
}*/

//小轮播
function aa(c){
	var imgbox=$(".imgbox")[c];
	var btnonebox=$(".btnonebox")[c];
	var btnone=$(".btnone",btnonebox);
	var btntwo=$(".btntwo",btnonebox);
	var imgs=$("img",imgbox);
	
	var num1=0;
	animate(btnone,{width:25},2000);
	function move1(){
		num1++;
	//alert(num1);
		if(num1==3){
	        animate(imgbox,{left:0},600,Tween.Linear,function(){
	        	imgbox.style.left=0;
	        });
	        num1=0;
		}else{
			animate(imgbox,{left:-330*num1},600,Tween.Linear);
		}
		for(var i=0;i<btnone.length;i++){
	        btnone[i].style.width=0;
	        btnone[i].style.display="none";
		}
		animate(btnone[num1],{width:25},2000);
		btnone[num1].style.display="block";

	}
	var w=setInterval(move1,2000);
    for(var i=0;i<imgs.length;i++){
    	imgs[i].index=i;
    	hover(imgs[i],function(){
    		clearInterval(w);
    		for(var j=0;j<btnone.length;j++){
    			btnone[j].style.display="none";
    			btnone[j].style.width=0;
    		}
    		btntwo[this.index].style.backgroundColor="black";
    	},function(){
    		w=setInterval(move1,2000);
    		num1=this.index;
    		btntwo[this.index].style.backgroundColor="#ccc";
    		btnone[this.index].style.display="block";
    		animate(btnone[this.index],{width:25},2000,Tween.Linear)
    	})
    }
    //点上图片停止
    for(var i=0;i<btntwo.length;i++){
    	btntwo[i].index=i;
    	btntwo[i].onmouseover=function(){
    		clearInterval(w);
    		for(var j=0;j<btntwo.length;j++){
    			btnone[j].style.display="none";
    			btnone[j].style.width=0;
    		}
    		btnone[this.index].style.width="25px";
    		btnone[this.index].style.display="block";
    		animate(imgbox,{left:-330*this.index},600,Tween.Linear);
    	}
    	btntwo[i].onmouseout=function(){
    		num1=this.index;
            w=setInterval(move1,2000);
    	}
    }
}
for(var i=0;i<8;i++){
	aa(i);
}
//百货小轮播图
function dd(){
  var baihuoone=$(".baihuo1")[0];
  var baihuofive=$(".baihuo5")[0];
  var baihuothree=$(".baihuo3")[0];
  function moveleft(){
    animate(baihuothree,{left:-100},600,Tween.Linear,function(){
      baihuothree.appendChild(getFirst(baihuothree));
      baihuothree.style.left=0+"px";
    })
  }
  function moveright(){
    var last=getLast(baihuothree);
    baihuothree.insertBefore(last,getFirst(baihuothree));
    baihuothree.style.left=-100+"px";
    animate(baihuothree,{left:0},600,Tween.Linear);
  }
  var t=setInterval(moveleft,2000);
  baihuoone.onmouseover=baihuofive.onmouseover=function(){
    clearInterval(t);
  }
  baihuoone.onmouseout=baihuofive.onmouseout=function(){
    t=setInterval(moveleft,2000);
  }
  baihuoone.onclick=function(){
    moveright();
  }
  baihuofive.onclick=function(){
    moveleft();
  }
}
dd();

/*for(var i=0;i<btnone.length;i++){
	btnone[i].index=i;
	btnone[i].onmouseover=function(){
		for(var j=0;j<btnone.length;j++){
			animate(imgbox,{left:-330*j},600,Tween.Linear);
			btnone[j].style.background="#ccc";
		}
		clearInterval(w);
		animate(imgbox,{left:-330*[this.index]},600,Tween.Linear);
		//btnone[this.index].style.background="black";
	}
	btnone[i].onmouseout=function(){
		w=setInterval(move1,2000);
		num1=this.index+1;
	}
}*/


var tex=$(".shousuo2")[0];
            //原理：表单获得焦点时，如果value值为默认值，则清空；表单失去焦点，如果value值为空时，变为默认值
          tex.onfocus=function(){//表单获得焦点事件
            if(tex.value=="汪峰、姚晨推荐优品好货，iphone6s 16G玫瑰金4888元"){
               tex.value="";
              }
          }
          tex.onblur=function(){//表单失去焦点事件
            if(tex.value){

            }else{
              tex.value="汪峰、姚晨推荐优品好货，iphone6s 16G玫瑰金4888元";
            }  
          }


        var yiji=$(".one");
    	var erji=$(".two");
    	for(var i=0;i<yiji.length;i++){
    		yiji[i].index=i;
    		hover(yiji[i],function(){
    			var lis=$("li",erji[this.index]);
    			var h=lis[0].offsetHeight;
    			erji[this.index].style.height=0+"px";
    			animate(erji[this.index],{height:lis.length*h},60,Tween.Linear);
    		},function(){
                animate(erji[this.index],{height:0},60,Tween.Linear);
    		})
    	}
        
        var zhang1=$(".zhang1")[0];
        var zhang2=$(".zhang2")[0];
        hover(zhang1,function(){
        	zhang2.style.height=0+"px";
        	animate(zhang2,{height:130},60,Tween.Linear);
          zhang2.style.display="block";
        },function(){
        	animate(zhang2,{height:0},60,Tween.Linear);
          zhang2.style.display="none";
        })






 //这是楼层跳转*************************************
    
   var flag=true;
   var flag1=true;
   var floors=$(".floor");
   var jump=$(".jump")[0];
   var btnl=$("li",jump);
   var luo=$(".luo");
   


   for(var i=0;i<btnl.length;i++)
   {
    btnl[i].index=i;
    btnl[i].onclick=function()

    {
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        //obj.scrollTop=floors[this.index].t;
        //var scrollT=getScrollT();
        animate(obj,{scrollTop:(floors[this.index].t)},600,Tween.Linear);
    }
   }
   window.onscroll=function()
   {
        var scrollT=getScrollT()
        if(scrollT>=440)
        {
            if(flag)
            {
                
                flag=false;
                flag1=true;
            }
        }
        else{
            if(flag1)
            {
              
                flag1=false;
                flag=true;
            }
        }

    //楼层跳转
        if(scrollT>=1200)
        {
            jump.style.display="block";
        }else{
            jump.style.display="none";
        }
        //滚动条控制按钮
        for(var i=0;i<floors.length;i++)
        {
            floors[i].t=floors[i].offsetTop;
            if(floors[i].t<=scrollT)
            {
                for(var j=0;j<btnl.length;j++)
                {
                    btnl[j].style.backgroundColor="white";
                    btnl[j].style.color="black";
                    luo[j].style.display="none";
                }
                    btnl[i].style.backgroundColor="pink";
                btnl[i].style.color="red";
                luo[i].style.display="block";

            }
        }

        for(var k=0;k<luo.length;k++){
        	btnl[k].index=k;
        	btnl[k].onmouseover=function(){
        		for(var m=0;m<luo.length;m++){
        			luo[m].style.display="none";
        		}
        		luo[this.index].style.display="block";
        	}
        }


   }
    

    

  var word=$(".shangoubtn");
  var word1=$(".jinkounavbox2");
  for(var i=0;i<word.length;i++){   
  
    word[i].index=i;//index保存相应的对象的i的值
    //给每一个标题添加单击事件
    word[i].onmouseover=function(){
      for(var j=0;j<word1.length;j++){
        word1[j].style.display="none";
        word[j].style.fontWeight="normal";
        word[j].style.textDecoration="none";
        word[j].style.color="black";

      }
      word1[this.index].style.display="block";
      this.style.fontWeight="bold";
      this.style.textDecoration="underline";
      this.style.color="#c15b00";
    }
  }







}
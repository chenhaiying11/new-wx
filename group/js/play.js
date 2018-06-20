    var playState=1;
    var playStart = document.querySelector(".playgo");//获取播放按钮
    var startTime = document.querySelector(".start-time");
    var endTime =document.querySelector(".end-time");
    var oVideo =document.querySelector("video");//获取视频
    var progressBar = document.querySelector(".progress-bar");//获取滑动条
    var progressTop = document.querySelector(".progress-top");//获取填充条
    var Olittle = document.querySelector(".little");//获取滑块
    var Oscreen = document.querySelector(".screen");//获取全屏

    //点击实现播放暂停效果
 	playStart.onclick = function(){
  		if (playState==1) {
           	playStart.style.background = "url(../images/play/暂停.png)";
            //play返回的是promise对象 所以可以用.then的方法
           	oVideo.play().then(function(){
              // console.log("222")
              time_interval=setInterval(goTime,10)
            });
           	playState=0;
  		}else{
   			playStart.style.background = "url(../images/play/播放.png)";
            oVideo.pause();
            playState=1;
  		}
 	}
  
   //获取视频时间，并保留小数点后面2位
    var timeInterval=setInterval(getTime,10);
    function getTime(){
        if (oVideo.duration != NaN) {
            var time_1 = parseInt(oVideo.duration/60);
            var time_2 = parseInt(oVideo.duration%60);
            var min = time_1 > 9? time_1:"0"+time_1;
            var sec = time_2 > 9? time_2:"0"+time_2;
            endTime.innerText=min+":"+sec;

        }
    }
    //获取视频时间当前播放时间
    function goTime(){
        var time_1=parseInt(oVideo.currentTime/60);
        var time_2=parseInt(oVideo.currentTime%60);
        var nowMin = time_1 > 9? time_1:"0"+time_1;
        var nowSec = time_2 > 9? time_2:"0"+time_2;
        startTime.innerText=(nowMin+":"+nowSec)+'/';
        
    }
    //进度条
    oVideo.ontimeupdate=function(){
        // 计算播放进度百分比
        var pre = oVideo.currentTime/oVideo.duration;
        //视频当前的播放位置/当前视频的长度
        // 根据百分比改变进度条位置
        Olittle.style.left = 3.66 * pre + "rem";
        //跟随变颜色
        var pro =0;//设置移动跟随变颜色的初始值
        var proBar = setInterval(function(){
            progressTop.style.width=Olittle.style.left;
            if(pro == 3.66 ){
                clearInterval(proBar);
            }
        },10);
    }
    //当视频播放完成时
    oVideo.onended=function(){
        Olittle.style.left = 0;
        oVideo.pause();
        playStart.style.background = "url(../images/play/播放.png)";
    }

    //滑动进度条改变播放进度(电脑端)

    var move=0;//设置未移动的时候为0;
    var x=0;
    var length=0;
    Olittle.onmousedown=function (e) {
        oVideo.pause();
        if (x==0) {
            x=e.pageX;
            //鼠标相对于整个页面的X坐标;
        }
        console.log(e.pageX);
        // console.log("left",Olittle.style.offsetLeft)
        // console.log("x",x)
        // console.log("22")
        move=1;
        // console.log("进度条总长度",progressBar.offsetWidth)
        // console.log("进度条长度",progressTop.offsetWidth)
    }
    document.body.onmousemove=function(e){
        if (move) {
            // console.log(e)
            if (e.pageX-x>0 && e.pageX-x<progressBar.offsetWidth) {
                length=e.pageX-x;
                Olittle.style.left=e.pageX-x+"rem";
                // console.log(Olittle.style.left)
                
            }  
        }
    }
    document.body.onmouseup=function(e){
        move=0;
        oVideo.currentTime=oVideo.duration*(length/progressBar.offsetWidth);
        //视频的当前播放位置=当前视频的长度*(Olittle移动的长度/进度条的总长度)
        oVideo.play();
    }
  
       

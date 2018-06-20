
 //实现点击播放效果
    var playState=1;
    var oWatchs = document.querySelectorAll(".new-watch");
    var oVideo = document.querySelectorAll("video");//获取视频
    var oLists = document.querySelectorAll("#List");//获取所有的list
    //创建视频标记数据
    var data_video={};
    for(let i=0;i<oVideo.length;i++){
        //循环给不同的视频赋予独有的数据
        var name='video'+i;
        data_video[name]={};
        data_video[name].playNum=0;
        data_video[name].fenState=0;
        //循环赋予播放的功能
        oVideo[i].ontouchstart=function(){
            for(let y = 0; y<oLists.length;y++){
                //如果按钮和所播放的视频匹配了
                if (i==y) {
                    var index='video'+i;
                    oVideo[i].play();
                    playState=0;
                    for(let z = 0;z<oWatchs.length;z++){
                        if (i==z) {
                            data_video[index].playNum++;
                            oWatchs[z].innerHTML = data_video[index].playNum;
                        }
                    }
                }
                else{
                    oVideo[y].pause();
                    playState=1;
                }
            }
        }
    }

    //实现分享功能 
    // var shares =document.querySelectorAll(".share");
    // var shareLists =document.querySelectorAll("#shareLists");
    //
    // for(let a=0; a<shares.length;a++){
    //     shares[a].onclick = function(){
            //console.log(data_video)
            //点击当前按钮让所有分享隐藏并且将播放状态改为0（除去当前分享按钮的播放状态，，）
            // for(var b = 0;b<shareLists.length;b++){
            //     if ( a != b ) {
            //         shareLists[b].style.display="none";
            //         data_video['video'+b].fenState=0;
            //     }
            // }

            //然后再去单独改变当前分享的状态
    //         if (data_video['video'+a].fenState==0){
    //                 shareLists[a].style.display="block";
    //                 data_video['video'+a].fenState=1 ;
                    
    //         }else{
    //                 shareLists[a].style.display="none";
    //                 data_video['video'+a].fenState=0 ;
                    
    //         }
    //     }
    // }  

    //实现删除功能 
    var oDeletes = document.querySelectorAll(".delete");//获取所有的删除标签
    var oLists = document.querySelectorAll("#List");
    var deletegn = document.querySelector("#delete-gn");
    var deleteText =document.querySelector(".delete-text");
    var oLancel = document.querySelector(".cancel");
    var Osharebox = document.querySelector("#sharebox");
    //这样循环遍历的var i 传进function里面的永远是最后一个数  -- 用let就可以了 
    for(let i = 0;i<oDeletes.length;i++){
        oDeletes[i].onclick=function(){ 
            Osharebox.style.display="block";
            deletegn.style.display="block";
            deleteText.onclick = function(){
                for(var j = 0;j<oLists.length;j++){
                    //循环遍历   List   并且获取List内部的index值是否和删除按钮的一致，，一致则删除
                    if (i==j) {
                        oLists[j].remove();
                        deletegn.style.display="none";
                        Osharebox.style.display="none";
                        var shareLists =document.querySelectorAll("#shareLists");
                        for(var b = 0;b<shareLists.length;b++){
                            shareLists[b].style.display="none";
                        }
                    }
                }
            }  
            oLancel.onclick = function(){
                deletegn.style.display="none";
                Osharebox.style.display="none";
            }
        }
    }

// document.querySelector(".new-watch")
   // var oWatchs = document.querySelectorAll(".new-watch");
   //                  console.log(oWatchs);

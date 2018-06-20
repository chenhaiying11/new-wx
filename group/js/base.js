
//后台接口的地址
var listUrl = "http://123.57.19.47:8123/v1/hololens/storage/ActionMiniBarBeijing001?page=1&count=20&sortby=date&orderby=asc&meta=id||name||file_type||category||file_size||relate_name";

//数据的src的地址;
var addressUrl = "http://123.57.19.47:8123/v1/hololens/storage/get/";

//跳转页面的页面地址;
var tzUrl = "http://192.168.18.151/wx-copy/video.html?";

//请求视频相关数据 
    $.ajax({
        url:listUrl,
        type: "get",    //get传送方式
        async: true, //是否异步 
        dataType: "json", //设置返回数据类型 json
        //成功执行
        success: function(data, status, xhr){
            console.log(data);
            var list = baidu.template("ListTmp_1", data);
            $("#boxs").html(list);
            srcData=data.data;
            //给所有的video添加点击功能
            var videos=document.querySelectorAll('video');
            console.log(videos);
            var oWatchs = document.querySelectorAll(".new-watch");
            console.log(oWatchs);
            var oDeletes = document.querySelectorAll(".delete");
            var oLists = document.querySelectorAll("#List");//获取所有的list
            var deletegn = document.querySelector("#delete-gn");
            var deleteText =document.querySelector(".delete-text");
            var oLancel = document.querySelector(".cancel");
            var Osharebox = document.querySelector("#sharebox");
            var data_playNum=0;
            for(let i=0;i<videos.length;i++){
                videos[i].onclick=function(){
                    window.location.href=tzUrl+'videoid='+srcData[i].id+'&videoname='+srcData[i].name+'&title=';
                }
            }
            for(let n = 0;n<oDeletes.length; n++){
                oDeletes[n].onclick=function(){
                    Osharebox.style.display="block";
                    deletegn.style.display="block";
                    deleteText.onclick = function(){
                        for(var j = 0;j<oLists.length;j++){
                            if (n==j) {
                                oLists[j].remove();
                                deletegn.style.display="none";
                                Osharebox.style.display="none";
                            }
                        }
                    }
                    oLancel.onclick = function(){
                        deletegn.style.display="none";
                        Osharebox.style.display="none";
                    }
                }
            }
        },
        //失败执行
        error: function(xhr, status, error){
            // console.log(error);
        },
        //不论成功与失败执行
        complete: function(xhr, status){
            // console.log(status);
        }
    });

function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) {   
        return unescape(r[2]);  
    }  
    return null;
}

var urlInterval=setInterval(urlgo,100);
console.log('asdasdfads')
function urlgo(){
    if (window.location.search !='') {
        var id=GetQueryString('videoid');
        var name=GetQueryString('videoname');
        var title=GetQueryString('title');
        //有title数据的时候，拼接到下面的src中;
        document.querySelector('video').src=addressUrl+id+'/'+name; 
        document.querySelector('.videotitle').innerText='鬼畜'// 改成变量title
        clearInterval(urlInterval);
    };
}

//要拼接成的url地址内容格式如下：

//index.html?videoid=KsuGAUEs1lACZr5BSDU6Tnig4zHgkz4K1mz9wk0oUiVuM2DxgeTBGorxJIVWU78K&videoname=video.mp4&videotitle=鬼畜

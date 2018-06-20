//点击提交时，显示遮罩并且出现提交成功的页面
	var Oinput = $("#input");
	var Oshade = $("#shade");
	var Osubmit = $("#submit");
	var affirm = $(".affirm");
	var OsubmitFail = $("#submit-fail");
	var textarea = $("textarea");
	//进行判断，如果没有输入建议内容时，点击提交按钮出现提示信息；输入内容以后则出现提交成功的页面并清空内容
	// Oinput.onclick = function(){
	// 	if (textarea.value=="") {
	// 		Oshade.style.display="block";
	// 		OsubmitFail.style.display="block";
	// 		affirm.onclick = function(){
	// 		 	Oshade.style.display="none";
	// 			OsubmitFail.style.display="none";
	// 			textarea.value="";
	// 		}
	// 	}else{
	// 		Oshade.style.display="block";
	// 		Osubmit.style.display="block";
	// 		textarea.value="";
	// 	}
		
	// }

    Oinput.click(function(){
    	if(textarea.val()=="") {
			Oshade.show();
			OsubmitFail.show();
			affirm.click(function(){
			 	Oshade.hide();
				OsubmitFail.hide();
				textarea.val()=="";
			});
		}else{
			Oshade.show();
			Osubmit.show();
			textarea.val()=="";
		}
    })
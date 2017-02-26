// 物品ID
var facID = Number($("#facID").text());

// 请求物品库存信息
var requestFacSta = function(){
	console.log("请求物品编号：" + facID + "的库存情况");

	$.ajax({
		url:'/LD/userItem/searchFacSta.action',
		type:'post',
		dataType:'json',
		contentType:'application/json',
		data:'{"facID":'+ facID +'}',
		success:function(data){
			console.log(data);
			// 物品种类、子类、品牌、名称
			$(".fac-title .type").text(data.fac.type);
			$(".fac-title .cat").text(data.fac.cat);
			$(".fac-title .com").text(data.fac.company);
			$(".fac-title .name").text(data.fac.name);
			// 总量、可用、已分配、报废
			$(".fac-sta .count").eq(0).text(data.fac.total);
			$(".fac-sta .count").eq(1).text(data.fac.free);
			$(".fac-sta .count").eq(2).text(data.fac.working);
			$(".fac-sta .count").eq(3).text(data.fac.bad);
		}
	});
};

// 请求物品分配信息
var requestRoomItem = function (pageNum) {
	console.log("请求物品编号：" + facID + "第" + pageNum +"页的房间分配情况");
	$.ajax({
		url:'/LD/userItem/searchFacDetail.action',
		type:'post',
		dataType:'json',
		contentType:'application/json',
		data:'{"facID":'+ facID +',"pageNum":'+ pageNum +'}',
		success:function(data){
			console.log(data);

			// // 清空物品详细信息
			$("#facDetailTbody").html("");
			$("#roomItemBottom").html("");
			
			var pageNow = data.pageNow;
			var pageTotal = data.pageTotal;
			var recordTotal = data.recordTotal;

			if (recordTotal == 0) {
				$("#facDetailTbody").append("<tr><td colspan='4'>没有相关信息！</td></tr>");
			} else {
				for(var i = 0; i < data.pageList.length; i++){
					var perFac = data.pageList[i];
					$("#facDetailTbody").append("<tr><td>"+ perFac.room_NUMBER +"</td>"+
						"<td>"+ perFac.tag +"</td><td>"+ perFac.comm +"</td>"+
						"<td><span class='blue' onclick='transferFac(this);''>转移</span>"+
						"<span class='blue' onclick='requestToWarehouse(this);'>回仓库</span>"+
						"<span class='gray' onclick='requestFacBad(this);'>报废</span>"+
						"<span class='recID' style='display:none;'>"+ perFac.id +"</span></td></tr>");
				}
				// 添加物品总览 底部页码
				$("#roomItemBottom").append("<div class='bottom-page'>"+
			        	"<span class='page-before' onclick='requestBeforeRoomItem();'>上一页&nbsp;&nbsp;</span>"+
			        	"<span><input id='roomItem_nowpage' value='"+ pageNow +"' type='text' class='input_num'></span>"+
			        	"<span>&nbsp;/&nbsp;</span>"+
			        	"<span id='roomItem_totalpage'>"+ pageTotal +"</span>"+
			            "<span class='page-next' onclick='requestNextRoomItem();'>&nbsp;&nbsp;下一页</span>" +
			            "&nbsp;&nbsp;&nbsp;&nbsp;共<span class='recordTotal'>&nbsp;"+ recordTotal +"&nbsp;</span>条记录</div>");
			}
		}
	});
};
// 请求上一页房间物品分配信息
var requestBeforeRoomItem = function(){
	var nowpage = parseInt($("#roomItem_nowpage").val());
	if(nowpage == 1) return;
	
	requestRoomItem(nowpage-1);
};
// 请求下一页房间物品分配信息
var requestNextRoomItem = function(){
	var nowpage = parseInt($("#roomItem_nowpage").val());
	var totalpage = parseInt($("#roomItem_totalpage").text());
	if(nowpage == totalpage) return;
	
	requestRoomItem(nowpage+1);
};


// 显示转移物品弹出框
var transferFac = function(element){
	$(".shadow").css("display","block");
	$('#transferMenu').css("display","block");

 	setTimeout(function(){$('#transferMenu').addClass('showMenuModal');},50);
	$("#transferMenu").addClass("effect-fade");

	// 即将转移物品在数据库表中的id
	var recID = $(element).parent().children(".recID").text();
	$("#transferMenu .rec-id").text(recID);

	var roomNumber = $(element).parent().parent().children("td").eq(0).text();
	$("#transferMenu .roomNumber").text(roomNumber);

};
// 关闭转移物品弹出框
var closeTransferDiv = function(){
	$(".shadow").css("display","none");
	$("#transferMenu").removeClass('showMenuModal');
	setTimeout(function(){$("#transferMenu").css("display","none");},200);
};
// 请求转移物品
var requestTransferFac = function(){
	var recID = Number($("#transferMenu .rec-id").text());
	var rNum = $("#transferMenu input").val();
	$.ajax({
		url:'/LD/userItem/transferFac.action',
		type:'post',
		dataType:'json',
		contentType:'application/json',
		data:'{"recID":'+ recID +',"rNum":"'+ rNum +'"}',
		success:function(data){
			console.log(data);
			if(data == 1){
				closeTransferDiv();
				showModalBox("success","转移成功！");
				requestRoomItem(1);
			} else {
				showModalBox("error","转移失败 ！");
			}
		}
	});
};



// 请求物品回仓库
var requestToWarehouse = function(element){
	var recID = Number($(element).parent().children(".recID").text());
	// 将物品回仓库
	$.ajax({
		url:'/LD/userItem/toWarehouse.action',
		type:'post',
		dataType:'json',
		contentType:'application/json',
		data:'{"recID":'+ recID +'}',
		success:function(data){
			console.log(data);
			if(data == 1){
				showModalBox("success","回仓库成功！");
				requestFacSta();
				requestRoomItem(1);
			} else {
				showModalBox("error","回仓库失败！");
			}
		}
	});
};



// 请求物品报废
var requestFacBad = function(element){
	var recID = Number($(element).parent().children(".recID").text());
	$.ajax({
		url:'/LD/userItem/facBad.action',
		type:'post',
		dataType:'json',
		contentType:'application/json',
		data:'{"recID":'+ recID +'}',
		success:function(data){
			console.log(data);
			if(data == 1){
				showModalBox("success","报废成功！");
				requestFacSta();
				requestRoomItem(1);
			} else {
				showModalBox("error","报废失败！");
			}
		}
	});
};


// 显示新分配物品弹出框
var showDistributeModal = function(){
	$(".shadow").css("display","block");
	$('#newDistributeMenu').css("display","block");

 	setTimeout(function(){$('#newDistributeMenu').addClass('showMenuModal');},50);
	$("#newDistributeMenu").addClass("effect-fade");
};
// 关闭新分配物品弹出框
var closeDistributeDiv = function(){
	$(".shadow").css("display","none");
	$("#newDistributeMenu").removeClass('showMenuModal');
	setTimeout(function(){$("#newDistributeMenu").css("display","none");},200);
};
// 请求新分配物品
var requestNewDistribute = function(){
	var rNum = $("#newDistributeMenu #room-number input").val();
	console.log("新分配物品"+ facID +"至房间："+rNum);
	var tag = $("#newDistributeMenu #tag-name input").val();
	var comment = $("#newDistributeMenu #fac-comment input").val();
	$.ajax({
		url:'/LD/userItem/newDistribute.action',
		type:'post',
		dataType:'json',
		contentType:'application/json',
		data:'{"facID":'+ facID +',"rNum":"'+ rNum +'","tag":"'+ tag +'","comment":"'+ comment +'"}',
		success:function(data){
			if(data == 1){
				closeDistributeDiv();
				showModalBox("success","分配成功！");
				requestFacSta();
				requestRoomItem(1);
			} else if(data == 0){
				showModalBox("error","分配失败！");
			}
		}
	});
};

// 显示新报废弹出框
var showNewfacBadModal = function(){
	$(".shadow").css("display","block");
	$('#facBadMenu').css("display","block");

 	setTimeout(function(){$('#facBadMenu').addClass('showMenuModal');},50);
	$("#facBadMenu").addClass("effect-fade");
};
// 关闭报废弹出框
var closeFacBadDiv = function(){
	$(".shadow").css("display","none");
	$("#facBadMenu").removeClass('showMenuModal');
	setTimeout(function(){$("#facBadMenu").css("display","none");},200);
};
// 请求新报废物品
var requestNewFacBad = function(){
	var count = Number($("#facBadMenu input").val());
	$.ajax({
		url:'/LD/userItem/newFacBad.action',
		type:'post',
		dataType:'json',
		contentType:'application/json',
		data:'{"facID":'+ facID +',"count":'+ count +'}',
		success:function(data){
			if(data == 1){
				closeFacBadDiv();
				showModalBox("success","报废成功！");
				requestFacSta();
				requestRoomItem(1);
			} else if(data == 0){
				showModalBox("error","报废失败！");
			}
		}
	});
};
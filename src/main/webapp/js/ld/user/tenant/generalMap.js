$(function(){
	// 楼层 35
	var element = '<tr class="floor35"><td></td><td></td><td colspan="2"><a class="W35-1" href="./roomGuest.jsp?rNum=W35-1">W35-1<p class="userName"></p></a></td>'
			+'<td><a class="W35-2" href="./roomGuest.jsp?rNum=W35-2">W35-2<p class="userName"></p></a></td><td rowspan="33"></td>'
			+'<td><a class="E35-2" href="./roomGuest.jsp?rNum=E35-2">E35-2<p class="userName"></p></a></td>'
			+'<td colspan="2"><a class="E35-1" href="./roomGuest.jsp?rNum=E35-1">E35-1<p class="userName"></p></a></td><td colspan="2"></td></tr>';	
	$('#building').append(element);

	// 楼层 30-34
    for (var high = 34; high >= 30; high--) {
	  	let id1 = "W" + high + "-1";
	  	let id2 = "W" + high + "-2";
	  	let id3 = "W" + high + "-3";
	  	let id4 = "E" + high + "-3";
	  	let id5 = "E" + high + "-2";
	  	let id6 = "E" + high + "-1";
	  	var element = '<tr><td colspan="2"><a class="W'+high+'-1" href="./roomGuest.jsp?rNum='+id1+'">W'+high+'-1<p class="userName"></p></a></td>'
			+'<td colspan="2"><a class="W'+high+'-2" href="./roomGuest.jsp?rNum='+id2+'">W'+high+'-2<p class="userName"></p></a></td>'
			+'<td><a class="W'+high+'-3" href="./roomGuest.jsp?rNum='+id3+'">W'+high+'-3<p class="userName"></p></a></td>'
			+'<td><a class="E'+high+'-3" href="./roomGuest.jsp?rNum='+id4+'">E'+high+'-3<p class="userName"></p></a></td>'
			+'<td colspan="2"><a class="E'+high+'-2" href="./roomGuest.jsp?rNum='+id5+'">E'+high+'-2<p class="userName"></p></a></td>'
			+'<td colspan="2"><a class="E'+high+'-1" href="./roomGuest.jsp?rNum='+id6+'">E'+high+'-1<p class="userName"></p></a></td></tr>';	  	
	  	$('#building').append(element);
    }
    // 楼层 25-29
    for (var mid = 29; mid >= 25; mid--) {
	  	let id1 = "W" + mid + "-1";
	  	let id2 = "W" + mid + "-2";
	  	let id3 = "W" + mid + "-3";
	  	let id4 = "E" + mid + "-5";
	  	let id5 = "E" + mid + "-3";
	  	let id6 = "E" + mid + "-2";
	  	let id7 = "E" + mid + "-1";
	    var element = '<tr><td colspan="2"><a class="W'+mid+'-1" href="./roomGuest.jsp?rNum='+id1+'">W'+mid+'-1<p class="userName"></p></a></td>'
	    	+'<td colspan="2"><a class="W'+mid+'-2" href="./roomGuest.jsp?rNum='+id2+'">W'+mid+'-2<p class="userName"></p></a></td>'
	    	+'<td><a class="W'+mid+'-3" href="./roomGuest.jsp?rNum='+id3+'">W'+mid+'-3<p class="userName"></p></a></td>'
	    	+'<td><a class="E'+mid+'-5" href="./roomGuest.jsp?rNum='+id4+'">E'+mid+'-5<p class="userName"></p></a></td>'
	    	+'<td colspan="2"><a class="E'+mid+'-3" href="./roomGuest.jsp?rNum='+id5+'">E'+mid+'-3<p class="userName"></p></a></td>'
	    	+'<td><a class="E'+mid+'-2" href="./roomGuest.jsp?rNum='+id6+'">E'+mid+'-2<p class="userName"></p></a></td>'
	    	+'<td><a class="E'+mid+'-1" href="./roomGuest.jsp?rNum='+id7+'">E'+mid+'-1<p class="userName"></p></a></td></tr>';
	    $('#building').append(element);
  	}
  	// 楼层 3-24
    for (var floor = 24; floor>=3; floor--) {
	  	let id1 = "W" + floor + "-1";
	  	let id2 = "W" + floor + "-2";
	  	let id3 = "W" + floor + "-3";
	  	let id4 = "W" + floor + "-5";
	  	let id5 = "E" + floor + "-6";
	  	let id6 = "E" + floor + "-5";
	  	let id7 = "E" + floor + "-3";
	  	let id8 = "E" + floor + "-2";
	  	let id9 = "E" + floor + "-1";
	  	var element = '<tr><td colspan="2"><a class="W'+floor+'-1" href="./roomGuest.jsp?rNum='+id1+'">W'+ floor +'-1<p class="userName"></p></a></td>'
	  		+'<td><a class="W'+floor+'-2" href="./roomGuest.jsp?rNum='+id2+'">W'+ floor +'-2<p class="userName"></p></a></td>'
	  		+'<td><a class="W'+floor+'-3" href="./roomGuest.jsp?rNum='+id3+'">W'+ floor +'-3<p class="userName"></p></a></td>'
	  		+'<td><a class="W'+floor+'-5" href="./roomGuest.jsp?rNum='+id4+'">W'+ floor +'-5<p class="userName"></p></a></td>'
	  		+'<td class="free"><a class="E'+floor+'-6" href="./roomGuest.jsp?rNum='+id5+'">E'+ floor +'-6<p class="userName"></p></a></td>'
	  		+'<td><a class="E'+floor+'-5" href="./roomGuest.jsp?rNum='+id6+'">E'+ floor +'-5<p class="userName"></p></a></td>'
	  		+'<td><a class="E'+floor+'-3" href="./roomGuest.jsp?rNum='+id7+'">E'+ floor +'-3<p class="userName"></p></a></td>'
	  		+'<td><a class="E'+floor+'-2" href="./roomGuest.jsp?rNum='+id8+'">E'+ floor +'-2<p class="userName"></p></a></td>'
	  		+'<td><a class="E'+floor+'-1" href="./roomGuest.jsp?rNum='+id9+'">E'+ floor +'-1<p class="userName"></p></a></td></tr>';
	  	$("#building").append(element);
  	}
  	// 楼层 2
    var last = '<tr><td colspan="2"><a class="W2-1" href="./roomGuest.jsp?rNum=W2-1">W2-1<p class="userName"></p></a></td>'
    	+'<td><a class="W2-2" href="./roomGuest.jsp?rNum=W2-2">W2-2<p class="userName"></p></a></td>'
    	+'<td><a class="W2-3" href="./roomGuest.jsp?rNum=W2-3">W2-3<p class="userName"></p></a></td>'
    	+'<td colspan="3"></td>'
    	+'<td><a class="E2-5" href="./roomGuest.jsp?rNum=E2-5">E2-5<p class="userName"></p></a></td>'
    	+'<td><a class="E2-3" href="./roomGuest.jsp?rNum=E2-3">E2-3<p class="userName"></p></a></td>'
    	+'<td><a class="E2-2" href="./roomGuest.jsp?rNum=E2-2">E2-2<p class="userName"></p></a></td>'
    	+'<td><a class="E2-1" href="./roomGuest.jsp?rNum=E2-1">E2-1<p class="userName"></p></a></td></tr>';
    $("#building").append(last);
  
    //设置左边栏的高度为文档的高度
	$(".main-nav").css('height',parseInt($(document).height())-50);
});

var getRoomState = function () {
    $.ajax({
	    type: 'GET',
	    url: '/LD/userRoom/getAllRoomState.action',
	    success: function(data) {
	    	console.log(data);
	      	let roomList = data.roomStateList;
	     	for (let item in roomList) {
		        let roomNum = roomList[item].room_NUMBER;
		        let userName = roomList[item].cus_NAME;
		        let roomID = roomList[item].room_ID;
		        let cusID = roomList[item].cus_ID;
		        $("." + roomNum).children("p").text("租客："+userName);
		        //console.log(roomNum,'roomNum')
		        $("." + roomNum).attr("href", "./roomGuest.jsp?rid="+roomID+"&rNum="+roomNum);
		        // For those have no returned room_ID, how to link to the RoomInfo page?
		        // Test for transmitting the roomName as the request param.
		        // /[^\d]/.test('W-132')      
	        }    
	    }
    });
}




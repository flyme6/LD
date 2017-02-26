<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="${pageContext.request.contextPath}/css/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css/ld/user/home/public.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css/ld/user/roomService/roomService.css"	rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css/ld/user/roomService/service/serviceNew.css" rel="stylesheet" type="text/css" />
<link href="${pageContext.request.contextPath}/css/ld/user/roomService/service/serviceBusNew.css" rel="stylesheet" type="text/css" />
<title>添加车费记录</title>
</head>
<body>
	<jsp:include page="../../_header.jsp"></jsp:include>
	<jsp:include page="../../_leftMenu.jsp" />
	<jsp:include page="../../_modal.jsp" />
	
	<!-- 页面内容 start -->
	<div class="main">
		<div class="main-page">
			<div class="nav-path">
				<a href="../roomServiceIndex.jsp" title="回到首页"><i class="icon-home"></i></a>
				<i class="icon-path"></i>
				<a href="serviceIndex.jsp">客房服务</a>
				<i class="icon-path"></i>
				<a id="serviceType" href="serviceBus.jsp">车费</a>
				<i class="icon-path"></i>
				<a href="javascript:void(0);">新增车费记录</a>
			</div>
			<div class="body">
				<div class="body-content">
					<ul>
						<li><span class="span">房间号：</span>
							<input id="serviceRoomNumber" type="text" value="W35-1" />
							<span class="red red-right">*&nbsp;必填</span></li>
						<li id="roomIdWarning"><span class="span"></span><span class="red">不能为空！</span></li>
						<li id="nameLi"><span class="span">客人姓名：</span><input id="guestName" type="text" value="Alice" /></li>
						<li id="dateLi"><span class="span">当前时间：</span><span id="newBusDate"></span></li>
						<table>
							<tbody>
								<tr><td>日期</td><td>1日</td><td>2日</td><td>3日</td><td>4日</td>
									<td>5日</td><td>6日</td><td>7日</td><td>8日</td><td>9日</td>
									<td>10日</td><td>11日</td><td>12日</td><td>13日</td><td>14日</td>
									<td>15日</td>
								</tr>
								<tr><td>价格</td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
								</tr>
								<tr><td>16日</td><td>17日</td><td>18日</td><td>19日</td><td>20日</td>
									<td>21日</td><td>22日</td><td>23日</td><td>24日</td><td>25日</td>
									<td>26日</td><td>27日</td><td>28日</td><td>29日</td><td>30日</td>
									<td>31日</td>
								</tr>
								<tr>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
								    <td><input type="text" value=""/></td><td><input type="text" value=""/></td>
									<td><input type="text" value=""/></td><td><input type="text" value=""/></td>
								</tr>
							</tbody>
						</table>
						<li><span class="span"></span><a onclick="addserviceBus();" class="btn btn-goback goback">确认添加</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- 页面内容 end -->
	<div class="shadow"></div>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/bootstrap/bootstrap.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/ld/user/home/public.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/ld/user/roomService/service/serviceBus.js"></script>
	<script>
		// 设置为当前日期
		var date = new Date();
		$("#newBusDate").text(date.getFullYear() + "-" + (date.getMonth() + 1));
	</script>
</body>
</html>
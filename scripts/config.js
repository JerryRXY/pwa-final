var config = {};
//config.server = location.protocol + '//' + location.host;
//config.server = 'http://192.168.29.16:8088/mmglpt/m/';
//config.server = 'http://192.168.29.124:8080/mmglpt/m/';
//config.server = 'http://192.168.29.124:9090/mmglpt/m/';
//config.server = 'http://192.168.29.90:8081/mmglpt/';

config.server = 'http://anquangu.3tichina.com:80/safevalley/api/';

//具体客户仓库列表
config.findQuotationList = config.server + 'findQuotationList';











//  写进一个cookie 测试
function setCookie(name, value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
setCookie("openId", "otuBSwKR-RhIjxxD2Oq3HeuUXNcU");

//获取cookies中的值
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
var openId = getCookie("openId");









 
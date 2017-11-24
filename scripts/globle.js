//获取 确认报价单 地址
function findQuotationList() {
	var postData = {
		'userId': 1,
		'pageIndex': 0,
		'pageSize': 10
	};
	$.ajax({
		'type': 'post',
		'dataType': 'json',
		'data': postData,
		'url': config.findQuotationList,
		'success': function(data) {
			if(data.code == 1) {
				var data = {
					list: data.object
				};
				var html = template('list-tmpl', data);
				$('#list').html(html);

			} else {
				mui.toast(data.message);
			};
		}
	});
};
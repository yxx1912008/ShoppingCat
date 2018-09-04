/* 核心Api */

import ApiData from '../static/data/ApiData.json' //导入 api接口数据

function requestUtil(param) { //异步请求api
	return new Promise((res, rej) => {
		uni.request({
			url: ApiData['base'].baseUrl,
			method: 'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded',
			},
			data: {
				appid: ApiData['base'].appid,
				length: 237,
				data: ApiData[param].data
			},
			dataType: 'json',
			success: function (json) {
				console.log('首页海报数据获取成功')
				res(json.data.data)
			},
			fail: function (error) {
				uni.showToast({
					title: '首页数据获取失败',
					icon: 'none',
					duration: 2000
				});
				rej(error)
			},
		})
	})
}





module.exports {
	requestUtil: requestUtil
}

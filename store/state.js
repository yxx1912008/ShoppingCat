/*
state数据管理
 */
export default {
	topBanners: [], //首页海报数据
	willBring: [], //首页每日必领 商品
	liveGoods: [], //领券直播商品
	goodDetail: {}, //商品详情
	goodMainPic: [], //商品详情图片
	searchGoodList: [{
			"yuanjia": 10.5,
			"goodsid": "45044239606",
			"d_title": "自动下载线 STC单片机编程器 USB转TTL免手动冷启ISP 3.3V/5V",
			"pic": "https://img.alicdn.com/bao/uploaded/i3/TB1FnSyJFXXXXceXVXXXXXXXXXX_!!0-item_pic.jpg",
			"quan_jine": 3,
			"renqi": 1000,
			"updatetime": "2018-04-11 00:51",
			"id": 45044239606,
			"jiage": 7.5,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 38
		},
		{
			"yuanjia": 32.8,
			"goodsid": "38064213289",
			"d_title": "51单片机编程器24/93存储芯片烧录器 AT89C52烧写器  兼容SP200SE",
			"pic": "https://img.alicdn.com/bao/uploaded/i1/12762090/TB2YTGXXWi5V1BjSspcXXcSrFXa_!!12762090.jpg",
			"quan_jine": 3,
			"renqi": 999,
			"updatetime": "2018-04-11 00:41",
			"id": 38064213289,
			"jiage": 29.8,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 20
		},
		{
			"yuanjia": 12.7,
			"goodsid": "20286609901",
			"d_title": "带外壳USB ISP下载线USB ASP 51单片机AT89S52下载器 Win7可用",
			"pic": "https://img.alicdn.com/bao/uploaded/i2/12090027950534335/T12GWKFo0gXXXXXXXX_!!0-item_pic.jpg",
			"quan_jine": 3,
			"renqi": 998,
			"updatetime": "2018-04-11 00:28",
			"id": 20286609901,
			"jiage": 9.7,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 16
		},
		{
			"yuanjia": 4.42,
			"goodsid": "549931449131",
			"d_title": "(无资料,只能自己研究玩)单片机AT89C2051+LM358芯片模块 特惠",
			"pic": "https://img.alicdn.com/bao/uploaded/i4/TB1uJAkQVXXXXaeXXXXXXXXXXXX_!!0-item_pic.jpg",
			"quan_jine": 3,
			"renqi": 997,
			"updatetime": "2018-04-11 00:15",
			"id": 549931449131,
			"jiage": 1.42,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 4
		},
		{
			"yuanjia": 80,
			"goodsid": "527700267567",
			"d_title": "kit3/3.5 下载器 PICKIT3编程器 脱机/编程/仿真PIC单片机/烧录",
			"pic": "https://img.alicdn.com/bao/uploaded/i4/2656788128/TB16efMssUrBKNjSZPxXXX00pXa_!!0-item_pic.jpg",
			"quan_jine": 3,
			"renqi": 996,
			"updatetime": "2018-05-04 00:53",
			"id": 527700267567,
			"jiage": 77,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 3
		},
		{
			"yuanjia": 76.5,
			"goodsid": "532055665554",
			"d_title": "语音识别模块 LD3320 一体化带单片机、IO (LDV7)",
			"pic": "https://img.alicdn.com/bao/uploaded/i4/TB1AEMdQXXXXXX3XpXXXXXXXXXX_!!0-item_pic.jpg",
			"quan_jine": 3,
			"renqi": 995,
			"updatetime": "2018-05-04 00:12",
			"id": 532055665554,
			"jiage": 73.5,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 3
		},
		{
			"yuanjia": 65,
			"goodsid": "539348388690",
			"d_title": "基于51单片机脉搏仪心率计 脉搏测量仪 设计套件",
			"pic": "https://img.alicdn.com/bao/uploaded/i2/713620633/TB2LFd0aTPC11Bjy1zcXXbTrVXa_!!713620633.jpg",
			"quan_jine": 10,
			"renqi": 994,
			"updatetime": "2018-09-08 00:47",
			"id": 539348388690,
			"jiage": 55,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 2
		},
		{
			"yuanjia": 308,
			"goodsid": "564147565855",
			"d_title": "基于51单片机温室大棚温湿度光照强度监控系统 wifi app设计/成品",
			"pic": "https://img.alicdn.com/bao/uploaded/i1/713620633/TB2Qb8bl63z9KJjy0FmXXXiwXXa_!!713620633.jpg",
			"quan_jine": 10,
			"renqi": 993,
			"updatetime": "2018-09-08 00:40",
			"id": 564147565855,
			"jiage": 298,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 1
		},
		{
			"yuanjia": 108,
			"goodsid": "539353872754",
			"d_title": "基于51单片机 国旗升降 控制系统 设计套件",
			"pic": "https://img.alicdn.com/bao/uploaded/i4/713620633/TB2HaXiXbMc61BjSZPiXXavgXXa_!!713620633.jpg",
			"quan_jine": 10,
			"renqi": 992,
			"updatetime": "2018-09-08 00:20",
			"id": 539353872754,
			"jiage": 98,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 1
		},
		{
			"yuanjia": 86,
			"goodsid": "539347473702",
			"d_title": "基于51单片机脉搏仪心率计 脉搏测量仪 设计成品",
			"pic": "https://img.alicdn.com/bao/uploaded/i4/713620633/TB2dCdUaKzz11Bjy1XdXXbfqVXa_!!713620633.jpg",
			"quan_jine": 10,
			"renqi": 991,
			"updatetime": "2018-09-08 00:19",
			"id": 539347473702,
			"jiage": 76,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 1
		},
		{
			"yuanjia": 299,
			"goodsid": "544458761546",
			"d_title": "AD9854带单片机 DDS信号发生器模块 上位机 点频扫频调幅 信号源",
			"pic": "https://img.alicdn.com/bao/uploaded/i2/645606161/O1CN011vNmcI1FgAdumws_!!645606161.jpg",
			"quan_jine": 5,
			"renqi": 990,
			"updatetime": "2018-07-12 00:30",
			"id": 544458761546,
			"jiage": 294,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 1
		},
		{
			"yuanjia": 148,
			"goodsid": "559426761234",
			"d_title": "基于51单片机 ISD4004/ISD4002 语音存储与回放 录音笔 设计/成品",
			"pic": "https://img.alicdn.com/bao/uploaded/i1/713620633/TB2UIo9dPuhSKJjSspdXXc11XXa_!!713620633.jpg",
			"quan_jine": 10,
			"renqi": 989,
			"updatetime": "2018-09-08 00:10",
			"id": 559426761234,
			"jiage": 138,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 1
		},
		{
			"yuanjia": 88,
			"goodsid": "573830627125",
			"d_title": "基于51单片机数字密码锁 储存 存包系统 设计/成品",
			"pic": "https://img.alicdn.com/bao/uploaded/i1/713620633/TB2VYYKEx1YBuNjy1zcXXbNcXXa_!!713620633.jpg",
			"quan_jine": 10,
			"renqi": 988,
			"updatetime": "2018-09-08 00:14",
			"id": 573830627125,
			"jiage": 78,
			"istmall": 0,
			"from": "mm",
			"xiaoliang": 1
		}
	], //搜索到的商品列表
}

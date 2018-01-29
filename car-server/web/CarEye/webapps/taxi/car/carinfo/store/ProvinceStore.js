Ext.define("CarInfoApp.store.ProvinceStore",{
	extend:"Ext.data.Store",
	model:"CarInfoApp.model.CityInfoModel",
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: window.BIZCTX_PATH + '/commonjson/getProvinceList.action',  //请求的服务器地址
		reader: {
			type: 'json',
			root: 'result.list'
		}
	}
 });
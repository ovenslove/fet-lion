Page({
    data: {
        menuData:[
            {
                id:10001,
                name:'前端',
                show:true
            },{
                id:10002,
                name:'后台',
                show:false
            },{
                id:10003,
                name:'运维',
                show:true
            },{
                id:10004,
                name:'设计',
                show:true
            },{
                id:10005,
                name:'IOS',
                show:true             
            },{
                id:10006,
                name:'安卓',
                show:true
            }
        ]
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
    },
    switchChangeFn:function(e){
        let _index=e.target.dataset.index || e.currentTarget.dataset.index;
        let _menuData=this.data.menuData;
        _menuData[_index].show= !_menuData[_index].show;
        this.setData({
            menuData:_menuData
        });     
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成
    },
    onShow: function () {
        // 生命周期函数--监听页面显示
    },
    onHide: function () {
        // 生命周期函数--监听页面隐藏
    },
    onUnload: function () {
        // 生命周期函数--监听页面卸载
    },
    onPullDownRefresh: function () {
        // 页面相关事件处理函数--监听用户下拉动作
    },
    onReachBottom: function () {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: 'title', // 分享标题
            desc: 'desc', // 分享描述
            path: 'path' // 分享路径
        }
    }
})
Page({
    data: {
        tabIndex: 0,
        markData: {
            activeData: [{
                markId: 100001,
                imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                markName: 'VUE',
                careNumber: 1200,
                articleNumber: 230,
                careStatus: true
            }, {
                markId: 100001,
                imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                markName: 'VUE',
                careNumber: 1200,
                articleNumber: 230,
                careStatus: false
            }, {
                markId: 100001,
                imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                markName: 'VUE',
                careNumber: 1200,
                articleNumber: 230,
                careStatus: true
            }, {
                markId: 100001,
                imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                markName: 'VUE',
                careNumber: 1200,
                articleNumber: 230,
                careStatus: true
            }, {
                markId: 100001,
                imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                markName: 'VUE',
                careNumber: 1200,
                articleNumber: 230,
                careStatus: true
            }, {
                markId: 100001,
                imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                markName: 'VUE',
                careNumber: 1200,
                articleNumber: 230,
                careStatus: true
            }],
            allData: {
                post: [{
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: false
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: true
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: false
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: true
                }],
                care: [{
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: false
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: true
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: false
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: false
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: false
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: true
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: false
                }, {
                    markId: 100001,
                    imgUrl: 'https://static-oven.b0.upaiyun.com/static-image/simProductImage.jpg',
                    markName: 'VUE',
                    careNumber: 1200,
                    articleNumber: 230,
                    careStatus: false
                }]
            }
        }
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
    },
    tabChangeFn: function (e) {
        let _index = e.currentTarget.dataset.index || e.target.dataset.index;
        console.log(_index)
        this.setData({
            "tabIndex": parseInt(_index)
        })
    },
    swiperChangeFn: function (e) {
        let that = this;
        let _currentIndex = e.detail.current;
        console.log(_currentIndex);
        that.setData({
            tabIndex: _currentIndex
        });
    },
    markTapFn:function(e){
        let that=this;
        let _type = e.currentTarget.dataset.type || e.target.dataset.type;
        let _index = e.currentTarget.dataset.index || e.target.dataset.index;  
        let _oldData;      
        if(_type==1){
            _oldData=that.data.markData.activeData;
            _oldData[_index].careStatus=!_oldData[_index].careStatus;
            that.setData({
                "markData.activeData":_oldData
            });   
        }else if(_type==11){
            _oldData=that.data.markData.allData.post;
            _oldData[_index].careStatus=!_oldData[_index].careStatus;
            that.setData({
                "markData.allData.post":_oldData
            });
        }else if(_type==12){
            _oldData=that.data.markData.allData.care;   
            _oldData[_index].careStatus=!_oldData[_index].careStatus;
            that.setData({
                "markData.allData.care":_oldData
            });         
        }
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
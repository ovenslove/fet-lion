//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util');
const dialog = require('../../utils/dialog');

Page({
  data: {
    motto: 'Hello World',
    swiperMenuData: {
      swiperIndex: 0,
      swiperScrollLeft: 0,
      toLeftLength: 0
    },
    swiperData: [{
      name: '前端',
      list:[
        {
          title:'我是博客1我我是博客1我是博客1我我是博客1我是博客1我我是博客1',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'
        },{
          title:'我是博客2',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客3',
          summary:'这个跟计算机个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客1',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'
        },{
          title:'我是博客2',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客3',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客1',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'
        },{
          title:'我是博客2',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客3',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客1',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'
        },{
          title:'我是博客2',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客3',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        }
      ]
    }, {
      name: '后台',
      list:[
        {
          title:'我是博客2',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        }
      ]
    },{
      name: '运维',
      list:[{
          title:'我是博客2',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客3',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        }
      ]
    },{
      name: 'JAVA',
      list:[{
          title:'我是博客2',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客3',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        }
      ]
    },{
      name: 'IOS',
      list:[{
          title:'我是博客2',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        },{
          title:'我是博客3',
          summary:'这个跟计算机的数据结构,编码格式有关,一般说来,拿我们常用的来说,在gbk编码中,中文占2个字节,英文和数字占1个字节,你说的特殊字符,标点符号也是根据中英文区分的,也就是全角或者半角,在utf-8编码中,中文占3个字节,英文和数字还是1个字节.'          
        }
      ]
    }]
  },
  onLoad: function () {
    utils.requestFn({
        method: 'GET',
        url: ['/users/list', '/users/list']
      })
      .then((res) => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  },
  swiperChangeFn: function (e) {
    // console.log('改变了', e.detail.current);
    let that = this;
    let _currentIndex = e.detail.current;
    let _currentPageName = this.data.swiperData[_currentIndex].name;
    let _currentLength = (utils.getBytesLength(that.data.swiperData[_currentIndex].name)) * 6.5 + 40;
    let _nowIndex = this.data.swiperMenuData.swiperIndex;

    // console.log(_nowIndex, '---', _currentIndex);
    let toLeftLength = 0;
    if (_currentIndex > _nowIndex) {
      toLeftLength = that.data.swiperMenuData.toLeftLength + _currentLength;
    } else {
      toLeftLength = that.data.swiperMenuData.toLeftLength - ((utils.getBytesLength(that.data.swiperData[_nowIndex].name)) * 6.5 + 40);
    }
    // console.log('当前长度',_currentLength);
    // console.log('距离左边长度',toLeftLength);
    let maxLeft = toLeftLength + _currentLength;
    let scrollToLeft = 0;
    // console.log('最大长度为',maxLeft);
    if (maxLeft > 250) {
      scrollToLeft = toLeftLength + (_currentLength / 2) - 160;
    } else {
      scrollToLeft = 0;
    }
    // console.log(scrollToLeft);    
    this.setData({
      "swiperMenuData.swiperScrollLeft": scrollToLeft
    });

    this.setData({
      "swiperMenuData.swiperIndex": _currentIndex,
      "swiperMenuData.toLeftLength": toLeftLength
    });

  },
  menuChangeFn: function (e) {
    let _index = e.currentTarget.dataset.index || e.target.dataset.index;
    this.setData({
      "swiperMenuData.swiperIndex": _index
    })
    // console.log(_index);
  },
  showModal: function () {
    dialog.showModal({
      title: '我是标题',
      text: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
      textAlgin: 'center',
      submitText: '确定',
      submitTextColor: 'green',
      submitBackgroundColor: '#fff',
      showCancle: true,
      cancleText: '取消',
      cancleTextColor: '#333',
      cancleBackgroundColor: '#fff',
      mask: true,
      maskEvent: true,
      success: function () {
        console.log('点击确认');
      },
      fail: function (err) {
        console.log('点击取消', err);
      },
      complete: function () {
        console.log('调用完成');
      }
    });
  },
  showTips: function () {
    dialog.showTips({
      text: '你好',
      textAlgin: 'center',
      position: 'bottom',
      time: 3000
    })
  }
})
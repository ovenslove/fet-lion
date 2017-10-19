
/**
 * @function tips弹窗
 * @param {String} text  需要显示的内容
 * @param {String} textAlgin 文字对齐方式
 * @param {number} time  显示时间
 * @param {String} position 定位位置，top,bottom,middle三种
 */
function showTips({
    text = '',
    textAlgin = 'left',
    time = 3000,
    position = 'bottom'
}) {
    // 获取当前页面的页面堆栈
    let _pages = getCurrentPages();
    // 获取最后一页，即当前页面
    let _curPage = _pages[_pages.length - 1];
    // 整理数据
    let dialogData = {
        type: 'tips',
        text,
        textAlgin,
        time,
        position,
        show: true
    }
    // 设置数据
    _curPage.setData({
        dialogData
    });
    // 定时清除
    setTimeout(function () {
        console.log('清除弹框');
        _curPage.setData({
            dialogData: null
        });
    }, time)
};

 /**
  * @function 模态框，带按钮
  * @param {*} title  标题，最好不要太长
  * @param {*} text 展示的内容
  * @param {*} textAlgin  文字对齐方式
  * @param {*} submitText 确认按钮文字
  * @param {*} submitTextColor 确认按钮文字颜色
  * @param {*} submitBackgroundColor 确认按钮背景颜色
  * @param {*} showCancle 是否显示取消按钮
  * @param {*} cancleText 取消按钮文字
  * @param {*} cancleTextColor 取消按钮文字颜色
  * @param {*} cancleBackgroundColor 取消按钮背景颜色
  * @param {*} mask 是否需要黑色蒙版
  * @param {*} maskEvent 黑色蒙版是否允许点击事件
  * @param {*} success 成功后执行回调
  * @param {*} fail 失败后执行回调
  * @param {*} complete 不管成功失败都会执行的回调
  */
function showModal({
    title = '',
    text = '',
    textAlgin = 'left',
    submitText='确认',
    submitTextColor='#333',
    submitBackgroundColor='#fff',
    showCancle=true,
    cancleText='取消',
    cancleTextColor='#333',
    cancleBackgroundColor='#fff',
    mask = false,
    maskEvent=false,
    success = function () {},
    fail = function () {},
    complete = function () {}
}) {
    // 获取当前页面的页面堆栈
    let _pages = getCurrentPages();
    // 获取最后一页，即当前页面
    let _curPage = _pages[_pages.length - 1];
    // 整理数据
    let dialogData = {
        type: 'modal',
        title,
        text,
        textAlgin,
        submitText,
        submitTextColor,
        submitBackgroundColor,
        showCancle,
        cancleText,
        cancleTextColor,
        cancleBackgroundColor,
        mask,
        maskEvent,
        show: true
    }
    // 设置数据
    _curPage.setData({
        dialogData
    });
    // 设置方法
    _curPage.dialogSuccess = ()=>{
        _curPage.setData({
            dialogData:null
        });
        success();
    };
    _curPage.dialogFail = ()=>{
        _curPage.setData({
            dialogData:null
        });
        fail({
            type:'btn'
        });
    };
    _curPage.maskCancleFn = ()=>{
        if(maskEvent){
            _curPage.setData({
                dialogData:null
            });
            fail({
                type:'mask'
            });
        }
    };
    // 执行完成
    complete();
};

module.exports = {
    showModal,
    showTips
}
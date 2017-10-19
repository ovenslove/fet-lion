// 引入相关的文件
const config = require('../config/config');
console.log(config);
/**
 * @function 微信请求方法封装
 * @param {*} method 请求类型
 * @param {*} host 域名地址
 * @param {*} url 接口地址
 * @param {*} data 参数数据
 */
function requestFn({
  method = 'GET',
  host = config.server.host,
  url = '',
  data = {}
}) {
  if (typeof url === 'string' && url) {
    // 单接口请求，返回一个数据
    return new Promise((resolve, reject) => {
      let requestTask = wx.request({
        method: method.toUpperCase(),
        url: host + url,
        data: data,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          resolve(res.data);
        },
        fail: function (err) {
          reject(err);
        },
        complete: function () {
          console.log('请求完毕');
        }
      })
    });
  } else if (url instanceof Array) {
    // 如果url为数组，则属于多接口请求
    return  Promise.all(
      url.map((val,index,arr) => {
        return requestFn({
          method,
          host,
          url:val,
          data:data[index]
        })
      }));
  } else {
    throw new Error('url不能为空');
  }
}
/**
 * @function 计算字符串的字节数
 * @param {string} str  需要计算的字符串
 * @returns {number} 字符串字节数
 */ 
function getBytesLength(str) {  
  // 在GBK编码里，除了ASCII字符，其它都占两个字符宽  
  return str.replace(/[^\x00-\xff]/g, 'xx').length;  
}  

module.exports = {
  requestFn,
  getBytesLength
}
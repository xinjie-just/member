// pages/login/login.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  phoneCodeLogin: function(event) {
    wx.navigateTo({
      url: 'phone-login/phone-login',
    })
  },

  phonePwdLogin: function(event) {
    wx.navigateTo({
      url: 'pwd-login/pwd-login',
    })
  },

  onGotUserInfo: function(event) {
    console.log(event.detail.errMsg)
    console.log(event.detail.userInfo)
    console.log(event.detail.rawData)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(app.globalData.userInfo);
  },

  getPhoneNumber: function(e) {
    console.log(e.detail.iv);
    console.log(e.detail.encryptedData);
    console.log(encodeURIComponent(e.detail.encryptedData));
    wx.login({
      success: res => {
        console.log(res.code);
        // wx.request({
        //   url: 'https://你的解密地址',
        //   data: {
        //     'encryptedData': encodeURIComponent(e.detail.encryptedData),
        //     'iv': e.detail.iv,
        //     'code': res.code
        //   },
        //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        //   header: {
        //     'content-type': 'application/json'
        //   }, // 设置请求的 header
        //   success: function(res) {
        //     if (res.status == 1) { //我后台设置的返回值为1是正确
        //       //存入缓存即可
        //       wx.setStorageSync('phone', res.phone);
        //     }
        //   },
        //   fail: function(err) {
        //     console.log(err);
        //   }
        // })
      }
    })
  }
})
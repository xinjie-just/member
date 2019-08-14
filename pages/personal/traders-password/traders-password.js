// pages/personal/traders-password/traderspassword.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    withoutPwd: false,
    codeTip: "获取验证码",
    userInfo: {},
    codeBtnEnabled: false,
    APIUrlBase: app.globalData.APIUrlBase
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = app.globalData.userInfo;
    this.setData({ userInfo: userInfo });
  },

  // 获取验证码
  getPhoneCode() {
    let that = this;
    wx.request({
      url: `${this.data.APIUrlBase}sendSmsCode?phone=${this.data.userInfo.phone}`,
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      success: function (res) {
        that.setData({ codeBtnEnabled: false }); // 获取验证码以后不可用，等待60s时间
        that.countdown(60);
      },
      fail: function (error) { }
    })
  },

  // 倒计时
  countdown(seconds) {
    seconds--;
    let timer = setTimeout(() => this.countdown(seconds), 1000);
    if (seconds == 0) {
      this.setData({ codeBtnEnabled: true });
      clearTimeout(timer);
    }
    seconds == 0 ? this.setData({ codeTip: "获取验证码" }) : this.setData({ codeTip: `${seconds} s` });
  },

  switchChange(e) {
    // 开启为true,关闭为false
    // console.log('switch2 发生 change 事件，携带值为', e.detail.value);
    this.setData({ withoutPwd: e.detail.value});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
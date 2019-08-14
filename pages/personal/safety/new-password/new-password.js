// pages/personal/safety/old-password/old-password.js
let app = getApp();
Page({
  switchType(e) {
    // console.log(e.detail.value);

    if (e.detail.value) {
      this.setData({ newType: "password"});
    } else {
      this.setData({ newType: "text" });
    }
  },

  switchConfirmType(e) {
    // console.log(e.detail.value);

    if (e.detail.value) {
      this.setData({ confirmType: "password" });
    } else {
      this.setData({ confirmType: "text" });
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    message: "",
    setBtnEnabled: false,
    newPwd1: "",
    newPwd2: "",
    pwd1ErrorInfo: "",  // 错误信息
    pwd2ErrorInfo: "",  // 错误信息
    APIUrlBase: app.globalData.APIUrlBase
  },

  // 新密码输入框失去焦点时，获取到新密码
  getNewPwd1(e) {
    this.setData({ newPwd1: e.detail.value });
    let newPwd1 = this.data.newPwd1;
    let NUMBER_REGEXP = /^[a-zA-Z0-9]{5,16}$/;
    if (newPwd1 == "") {
      this.setData({ pwd1ErrorInfo: "新密码不能为空！" });
    } else if (!NUMBER_REGEXP.test(newPwd1)) {
      this.setData({ pwd1ErrorInfo: "新密码格式不正确！" });
    } else if (this.data.getNewPwd2 !== "" ) {
      if (this.data.getNewPwd2 !== newPwd1) {      
        this.setData({ pwd1ErrorInfo: "两次输入的密码必须一致！" });
      }
    } else {
      this.setData({ pwd1ErrorInfo: "" });
    }
  },

  // 重新输入新密码输入框失去焦点时
  getNewPwd2(e) {
    this.setData({ newPwd2: e.detail.value });
    let newPwd2 = this.data.newPwd2;
    let NUMBER_REGEXP = /^[a-zA-Z0-9]{5,16}$/;
    if (newPwd2 == "") {
      this.setData({ pwd2ErrorInfo: "重新输入新密码不能为空！" });
    } else if (!NUMBER_REGEXP.test(newPwd2)) {
      this.setData({ pwd2ErrorInfo: "重新输入新密码格式不正确！" });
    } else if (this.data.getNewPwd1 !== "") {
      if(this.data.getNewPwd1 !== newPwd2) {
        this.setData({ pwd2ErrorInfo: "两次输入的密码必须一致！" });
      }
    } else {
      this.setData({ pwd2ErrorInfo: "" });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = app.globalData.userInfo;
    this.setData({ userInfo: userInfo });
  },

  setNewPwd() {
    wx.request({
      url: `${this.data.APIUrlBase}modifyPwd?phone=${phone}&userId=${userId}&code=${code}&newPwd=${newPwd}&newPwdAgain=${newPwdAgain}`,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);

        wx.showToast({
          title: res.data.data ? "密码修改成功" : "密码修改失败",
          icon: 'success',
          duration: 2000
        });
      },
      fail(res) {
        that.setData({
          message: res.data.message
        });
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({ newType: "password" });
    this.setData({ confirmType: "password" });
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
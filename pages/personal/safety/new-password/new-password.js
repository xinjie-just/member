// pages/personal/safety/old-password/old-password.js
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

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
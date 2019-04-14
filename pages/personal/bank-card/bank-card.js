// pages/personal/bank-card/bank-card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banks: ["中国工商银行", "中国农业银行", "中国银行", "中国建设银行", "交通银行"],
    bankIndex: 0
  },
  bindBankChange: function (e) {
    console.log('picker bank 发生选择改变，携带值为', e.detail.value);

    this.setData({
      bankIndex: e.detail.value
    })
  },

  next() {
    wx.navigateTo({
      url: "bank-card-verify/bank-card-verify",
    })
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
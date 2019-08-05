// pages/personal/account/account-details/account-details.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestStatus: 0,  // 0.加载中，1.成功，2.失败
    card: {},  // 会员卡详情信息
    message: "",
    APIUrlBase: app.globalData.APIUrlBase
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let [cardId, that] = [options.id || 0, this];
    wx.request({
      url: `${this.data.APIUrlBase}getCardDetailById?cardId=${cardId}`,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        that.setData({
          requestStatus: 1,
          card: res.data.data.card
        });
      },
      fail(res) {
        that.setData({
          requestStatus: 2,
          message: res.data.message
        });
      }
    })
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
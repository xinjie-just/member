// pages/personal/account/account.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestStatus: 0,  // 0.加载中，1.成功，2.失败     
    message: "",
    cardList: [],
    APIUrlBase: app.globalData.APIUrlBase
  },

  view() {
    wx.navigateTo({
      url: "account-detail/account-detail"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    wx.request({
      url: this.data.APIUrlBase + "userCardList?userId=" + 2,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res);
        that.setData({
          requestStatus: 1,
          cardList: res.data.data.cardList
        });
        console.log(that.data.cardList);
      },
      fail(res) {
        console.log(res.data);
        that.setData({
          requestStatus: 2,
          message: res.data.data.message
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
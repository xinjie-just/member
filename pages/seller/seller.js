// pages/seller/seller.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    // sellers: ["所有商家", "已联盟商家", "未联盟商家"],
    sellerIndex: 0,    
    requestStatus: 0,  // 0.加载中，1.成功，2.失败
    message: "",
    sellerList: [],
    APIUrlBase: app.globalData.APIUrlBase
  },

  bindSellerChange: function (e) {
    console.log('picker seller 发生选择改变，携带值为', e.detail.value);

    this.setData({
      sellerIndex: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = app.globalData.userInfo;
    this.setData({ userInfo: userInfo });
    let [that, userId, cardId] = [this, userInfo.id, userInfo.cardId || 0];
    wx.request({
      url: `${this.data.APIUrlBase}getShopUnionList?userId=${userId}&cardId=${cardId}`,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        that.setData({
          requestStatus: 1,
          sellerList: res.data.data.shopList
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
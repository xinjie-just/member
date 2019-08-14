// pages/order/order-detail/order-detail.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    requestStatus: 0,  // 0.加载中，1.成功，2.失败
    order: {},  // 会员卡详情信息
    message: "",
    APIUrlBase: app.globalData.APIUrlBase
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let [orderId, that] = [options.id || 0, this];
    wx.request({
      url: `${this.data.APIUrlBase}getOrderDetailById?orderId=${orderId}`,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        that.setData({
          requestStatus: 1,
          order: res.data.data.order
        });
      },
      fail(res) {
        that.setData({
          requestStatus: 2,
          message: res.data.message
        });
      }
    })
  }
})
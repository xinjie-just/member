let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestStatus: 0,  // 0.加载中，1.成功，2.失败
    orderList: [],
    message: "",
    APIUrlBase: app.globalData.APIUrlBase,
    date: "2016-09",
    noData: false
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  view(value) {
    let orderId = value.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: `order-detail/order-detail?id=${orderId}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let [that,userId, pageNo, pageSize] = [this, 2, 1, 10];
    wx.request({
      url: `${this.data.APIUrlBase}userOrderList?userId=${userId}&pageNo=${pageNo}&pageSize=${pageSize}`,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        that.setData({
          requestStatus: 1,
          orderList: res.data.data.orderList
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
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    requestStatus: 0,  // 0.加载中，1.成功，2.失败
    orderList: [],
    message: "",
    APIUrlBase: app.globalData.APIUrlBase,
    date: "",
    startDate: "",
    noData: false,
    pageNo: 1,  // 第一次取数据的开始页码
    isFirstLoading: true  // 是首次加载
  },

  bindDateChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      date: e.detail.value
    });
    this.requestOrder();
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
    // 设置初始日期，格式："2018-08"
    let now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth() + 1) >= 10 ? (now.getMonth() + 1) : "0" + (now.getMonth() + 1);
    this.setData({ date: `${year}-${month}`, startDate: `${year - 3}-${month}`});

    let userInfo = app.globalData.userInfo;
    this.setData({ userInfo: userInfo });
    this.requestOrder();
  },

  requestOrder() {
    let [that, userId, yearMonth, pageNo, pageSize] = [this, this.data.userInfo.id, this.data.date, this.data.pageNo, 10];    
    wx.request({
      url: `${this.data.APIUrlBase}userOrderList?userId=${userId}&yearMonth=${yearMonth}&pageNo=${pageNo}&pageSize=${pageSize}`,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        // that.setData({
        //   requestStatus: 1,
        //   orderList: res.data.data.orderList
        // });
        that.setData({
          requestStatus: 1
        });

        let totalOrderList = [];
        if (this.data.isFirstLoading) {
          totalOrderList = res.data.data.orderList;
          this.data.isFirstLoading = false;
        } else {
          totalOrderList = this.data.orderList.concat(res.data.data.orderList);
        }

        this.setData({
          orderList: totalOrderList
        });
        this.data.pageNo += 1;

        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();

      },
      fail(res) {
        that.setData({
          requestStatus: 2,
          message: res.data.message
        });
      }
    })
  },

  // 上滑加载更多
  onReachBottom(event) {
    this.requestOrder();
    wx.showNavigationBarLoading();
  },

  //下拉刷新
  onPullDownRefresh: function () {
    this.requestOrder();
    this.data.orderList = [];
    this.data.isFirstLoading = true;
    wx.showNavigationBarLoading();
  }
})
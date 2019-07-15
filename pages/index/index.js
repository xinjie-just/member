Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: ''
  },

  toPersonal() {
    wx.switchTab({
      url: '/pages/personal/personal'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showModal({
      title: '授权登录',
      content: '手机号快捷登录',
      success(res) {
        if (res.confirm) {
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo;
              this.setData({
                nickName: userInfo.nickName,
                avatarUrl: userInfo.avatarUrl
              });
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
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
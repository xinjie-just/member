let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeTip: "获取验证码",  // 验证码是4位数字
    codeBtnEnabled: false,
    loginBtnEnabled: false,
    phone: "",
    code: "",
    phoneErrorInfo: "",  // 错误信息
    codeErrorInfo: "",  // 错误信息
    APIUrlBase: app.globalData.APIUrlBase
  },

  // 手机号码输入框失去焦点时，获取到手机号码
  getPhone(e) {
    this.setData({ phone: e.detail.value });
    let phone = this.data.phone;
    let MOB_REGEXP = /^1(3|4|5|7|8|9)\d{9}$/;
    this.setData({ codeBtnEnabled: false });
    if (phone == "") {
      this.setData({ phoneErrorInfo: "手机号码不能为空！" });
    } else if (!MOB_REGEXP.test(phone)) {
      this.setData({ phoneErrorInfo: "请输入正确的手机号码！" });
    } else {
      this.setData({ phoneErrorInfo: "" });
      this.setData({ codeBtnEnabled: true });
    }
  },

  // 验证码输入框失去焦点时，获取到验证码
  getCode(e) {
    this.setData({ code: e.detail.value });
    let code = this.data.code;
    let CODE_REGEXP = /^\d{4}$/;
    if (code == "") {
      this.setData({
        codeErrorInfo: `验证码不能为空！` });
    } else if (!CODE_REGEXP.test(code)) {
      this.setData({ codeErrorInfo: `验证码错误！`  });
    } else {
      this.setData({ codeErrorInfo: "" });
    }
    if (!this.data.codeErrorInfo && !this.data.phoneErrorInfo) {
      this.setData({ loginBtnEnabled: true });
    }
  },

  // 验证手机号码，通过后即可获取验证码
  getPhoneCode() {
    let that = this;
    if (this.data.codeBtnEnabled) {
      wx.request({
        url: `${this.data.APIUrlBase}sendSmsCode?phone=${this.data.phone}`,
        header: {
          "Content-Type": "application/json"
        },
        method: "GET",
        success: function (res) {
          that.setData({ codeBtnEnabled: false }); // 获取验证码以后不可用，等待60s时间
          that.countdown(60);
        },
        fail: function (error) { }
      })
    }
  },

  // 倒计时
  countdown(seconds) {
    seconds--;
    let timer = setTimeout(() => this.countdown(seconds), 1000);
    if (seconds == 0) {
      this.setData({ codeBtnEnabled: true });      
      clearTimeout(timer);
    }
    seconds == 0 ? this.setData({ codeTip: "获取验证码" }) : this.setData({ codeTip: `${seconds} s`});
  },

  // 登录
  phoneLogin() {
    wx.request({
      url: `${this.data.APIUrlBase}smsCodeLogin?phone=${this.data.phone}&code=${this.data.code}`,
      success: function (res) {
        console.log(res);
      },
      fail: function (error) { }
    })
  },

  onLoad() {
    console.log(app.globalData.userInfo);
  }

})
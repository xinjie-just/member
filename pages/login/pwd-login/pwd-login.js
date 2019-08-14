// pages/login/pwd-login/pwd-login.js
// import WxValidate from "../../../assets/scripts/WxValidate.js"
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginBtnEnabled: false,
    phone: "",
    pwd: "",
    error: {
      phone: "",
      pwd: ""
    },
    valid: {
      phone: false,
      pwd: false
    },
    userInfo: {},
    APIUrlBase: app.globalData.APIUrlBase
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // for (let prop in this.data.userInfo) {
    //   wx.getStorageSync(prop);
    // }
    // wx.getStorageSync(this.data.userInfo);
  },

  getPhone(e) {
    let phone = e.detail.value;
    let MOB_REGEXP = /^1(3|4|5|7|8|9)\d{9}$/;
    if (phone == "") {
      this.setData({
        error: {
          phone: "手机号码不能为空！",
          pwd: this.data.error.pwd
        }
      });
    } else if (!MOB_REGEXP.test(phone)) {
      this.setData({
        error: {
          phone: "请输入正确的手机号码！",
          pwd: this.data.error.pwd
        }
      });
    } else {
      this.setData({
        error: {
          phone: "",
          pwd: this.data.error.pwd
        }
      });
      this.setData({
        valid: {
          phone: true,
          pwd: this.data.valid.pwd
        }
      });
      this.setData({
        phone: phone
      });
    }
    if (this.data.valid.phone && this.data.valid.pwd) {
      this.setData({
        loginBtnEnabled: true
      });
    }
  },

  getPwd(e) {
    let pwd = e.detail.value;
    if (pwd == "") {
      this.setData({
        error: {
          phone: this.data.error.phone,
          pwd: "密码不能为空！"
        }
      });
    } else {
      this.setData({
        error: {
          phone: this.data.error.phone,
          pwd: ""
        }
      });
      this.setData({
        valid: {
          phone: this.data.valid.phone,
          pwd: true
        }
      });
      this.setData({
        pwd: pwd
      });
    }
    if (this.data.valid.phone && this.data.valid.pwd) {
      this.setData({
        loginBtnEnabled: true
      });
    }
  },

  phonePwdLogin() {
    let [phone, pwd] = [this.data.phone, this.data.pwd];
    // let phone = "15982280387";
    // let pwd = "123456";
    let that = this;
    wx.request({
      url: `${this.data.APIUrlBase}login?phone=${phone}&password=${pwd}`,
      success(res) {
        // console.log(res);
        // that.setData({ userInfo: res.data.data.user });
        // wx.setStorageSync("userInfo", res.data.data.user);
        app.globalData.userInfo = res.data.data.user;
        wx.navigateTo({
          url: '../../index/index',
        })
      },
      fail(error) {
        console.log(error);
      }
    })
  },

  forgetPwd() {
    wx.navigateTo({
      url: '../../personal/safety/phone-code/phone-code',
    })
  }

})
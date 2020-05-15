// pages/songlist/songlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls:[
        "http://p1.music.126.net/BokmhwBB9iMR91ejW8cTEA==/109951164989158971.jpg",
        "http://p1.music.126.net/Ou-dNikBKFbH2yGGxwz9xw==/109951164989068285.jpg",
        "http://p1.music.126.net/aALfaiCa-RBH3_2d_NbeMA==/109951164988976856.jpg",
        "http://p1.music.126.net/9dXBpwlI3VAhIA5JVYMkVA==/109951164989038820.jpg"
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载");
  },
  gotoPlay:function(){
    console.log("点击播放图片");
    wx.navigateTo({
      url: '/pages/play/play',
      events:{

      },
      success:function(res){

      },
      fail:function(res){

      },
      complete:function(){
        
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
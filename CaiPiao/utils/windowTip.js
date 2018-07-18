const windowTip = {
  customNotImgToast: function(title){
    //没有图片的提示，一般用于提示错误类型，由于数据太长，去掉了图片
    wx.showToast({
      title: title,
      icon:'none',
      duration:3000,
      mask: false
    })
  },

  customDefaultImgToast: function (title) {
    //有默认图片的提示，一般用于提示成功类型。
    wx.showToast({
      title: title,
      icon:'success',
      duration: 3000,
      mask: false
    })
  },

  customImgToast: function (title,imageUrl) {
    //有默认图片的提示，一般用于提示成功类型。
    wx.showToast({
      title: title,
      image:imageUrl,
      duration: 3000,
      mask: false
    })
  },

  CustomShowLoading: function(title){
    //一般用于加载数据用
    wx.showLoading({
      title: title,
    })
  },

  CustomHideLoading: function(){
    //用于隐藏加载数据提示
    wx.hideLoading();
  },

  showExplainWindow(title, content, confirmText, confirmColor){
    //用于显示选码说明弹窗
    wx.showModal({
      title: title,
      content: content,
      showCancel:false,
      confirmText: confirmText ? confirmText:'知道了',
      confirmColor: confirmColor ? confirmColor:'#f2c297',
    })
  }
}

module.exports = {
  windowTip: windowTip
}
const query = require('../../model/bmobData/queryNotUserData.js');
const window = require('../../utils/windowTip.js');
const exp = require('../../utils/exception.js');
Page({
  data: {
    textValue:'',
    
  },
  onLoad: function () {
    
  },

  bindTextAreaBlur:function(e){
    console.log(e.detail.value);
    this.setData({
      textValue: e.detail.value
    });
  },

  submitSuggest:function(){
    if (this.data.textValue==''){
      window.windowTip.customNotImgToast('提交的信息不能为空哟。');
    }else{
      window.windowTip.CustomShowLoading('提交中...');
      query.queryNotUser.submitUserSuggest('UserMessage', this.data.textValue, function (data, isCustomErr, err){
        window.windowTip.CustomHideLoading();
        if(data){
          window.windowTip.customNotImgToast(data);
        }else{
          exp.exception.commonExceptionManage(isCustomErr, err);
        }
      });
    }
  }
  
})

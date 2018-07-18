const app = getApp()
const exception = require('../../utils/exception.js')
const queryNotUser = {
  queryAllDataList: function (tableName, callBack) {
    //请求所有滚动的图片和文字以及彩票类型列表
    if (!app.globalData.BmobObject) {
      callBack(null,true, exception.exception.BMOB_DATA_INIT_EXCEPTION);
      return;
    }
    let query = app.globalData.BmobObject.Query(tableName);
    query.order("-createdAt");
    query.find().then(res => {
      callBack(res,false, null);
    }).catch(err => {
      callBack(null,false, err);
    });
  },

  submitUserSuggest: function (tableName,message, callBack){
    //请求提交用户的数据
    if (!app.globalData.BmobObject) {
      callBack(null, true, exception.exception.BMOB_DATA_INIT_EXCEPTION);
      return;
    }
    let query = app.globalData.BmobObject.Query(tableName);
    query.set("suggestMessage", message);
    query.save().then(res => {
      callBack('提交成功了。', false, null);
    }).catch(err => {
      callBack(null, false, err);
    })
  }
}

module.exports = {
  queryNotUser: queryNotUser
}
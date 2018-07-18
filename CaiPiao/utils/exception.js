const tip = require('./windowTip.js');
let exception = {
  BMOB_DATA_INIT_EXCEPTION:'Bmob数据SDK初始化异常',
  BMOB_GAME_INIT_EXCEPTION:'Bmob游戏SDK初始化异常',

  commonExceptionManage: function(isCustomExp, err){
    //通用异常处理函数
    if (isCustomExp) {
      tip.windowTip.customNotImgToast("error_message:" + err)
    } else {
      if (err.code) {
        tip.windowTip.customNotImgToast("error_code:" + err.code + ";error_message:" + err.error)
      } else {
        tip.windowTip.customNotImgToast("error_message:" + err.error)
      }
    }
  }
}

module.exports = {
  exception: exception
}
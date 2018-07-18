const Bmob = require('./Bmob-1.6.1.min.js')
const BGS = require('./bgsapi.js')
const config = require('./config.js')
const exception = require('./exception.js')
const tip = require('./windowTip.js')

let initBmob = function (app) {
  //初始化Bmob小程序SDK
  Bmob.initialize(config.config.BMOB_DATA_APPLICATION_ID, config.config.BMOB_DATA_KEY)
  app.globalData.BmobObject = Bmob;
}

let initBGS = function (app) {
  //初始化Bmob小游戏SDK
  let modelBGS = BGS.instance
  modelBGS.Init(config.config.BMOB_GAME_APPLICATION_ID, config.config.BMOB_GAMME_WEBSOCKET_URL, function (succ, msg) {
    if (succ) {
      app.globalData.ModelBGS = modelBGS
    } else {
      // 提醒失败
      tip.windowTip.customNotImgToast(exception.exception.BMOB_GAME_INIT_EXCEPTION)
    }
  });
}

module.exports = {
  initBmob: initBmob,
  initBGS: initBGS
}
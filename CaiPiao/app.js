//app.js
const registerJs = require('./utils/registerPlat.js');
App({
  onLaunch: function () {
    registerJs.initBmob(this);
    registerJs.initBGS(this);
  },

  globalData:{
    BmobObject:null,
    ModelBGS: null
  }
})
const config = {
  BMOB_DATA_APPLICATION_ID: '885fef17aca80291cb6af5178dd51131', //bmob数据applicationId
  BMOB_DATA_KEY: '55a23f76a37aa0d7c2fd1539e6b267a9', //bmob数据key
  BMOB_GAME_APPLICATION_ID: '947b9e254e', //bmob游戏applicationId
  BMOB_GAMME_WEBSOCKET_URL: 'ws://139.159.220.251:29065',//bmob游戏 websocket url

  SEVEN_LOCATION_EXPLAIN:'和传统定位一样，包括4定、3定、2定。某位不填，表示不定该位。但至少填2位，即2字定。',//七星定位说明
  SEVEN_FOUR_SHOW_EXPLAIN:'填写您认为会出现的数字，至少4个。我们会为你计算出所有的组合。',//七星4字现说明
  SEVEN_THREE_SHOW_EXPLAIN: '填写您认为会出现的数字，至少3个。我们会为你计算出所有的组合。',//七星3字现说明
  SEVEN_TOW_SHOW_EXPLAIN: '填写您认为会出现的数字，至少2个。我们会为你计算出所有的组合。',//七星2字现说明

  FIVE_P_DIRECT_EXPLAIN: '排5定位，在对应位置上填入数字，我们会为你计算出所有组合。每位至少填一个数',//排3直选

  THREE_P_D_DIRECT_EXPLAIN:'直选，在对应位置上填入数字，我们会为你计算出所有组合。每位至少填一个数',//排3直选
  THREE_P_D_GROUP3_EXPLAIN: '组3，填写您认为会出现的数字，我们会为你计算出所有组合。至少填2个数',//排3组3
  THREE_P_D_GROUP6_EXPLAIN: '组6，填写您认为会出现的数字，我们会为你计算出所有组合。至少填3个数',//排3组3
}

module.exports = {
  config: config
}
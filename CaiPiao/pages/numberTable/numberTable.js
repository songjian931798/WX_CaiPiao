//奖表的页面js
const queryNotUser = require('../../model/bmobData/queryNotUserData.js');
const exp = require('../../utils/exception.js')
const tip = require('../../utils/windowTip.js')
Page({
  data:{
    tableDatas:[{
      // 'periods':'18068',
      // 'lotteryTime':'1028/06/18',
      // 'lotterySum':'24',
      // 'lotteryOne':'1',
      // 'lotteryTow':'3',
      // 'lotteryThree':'4',
      // 'lotteryFour':'5',
      // 'lotteryFive':'8',
      // 'lotterySix':'9',
      // 'lotterySeven':'2'
    }
    ],
    title:'奖表',
    tableName:''
  },

  onPullDownRefresh: function(){
    wx.stopPullDownRefresh();
  },

  onLoad:function(options){
    let that = this;
    that.setData({
      title: options.title,
      tableName: options.tableName
    });

    //动态设置title
    wx.setNavigationBarTitle({
      title: that.data.title,
    });

    //请求码表数据
    tip.windowTip.CustomShowLoading('loading....');
    queryNotUser.queryNotUser.queryAllDataList(that.data.tableName, function (data, isCustomErr, err) {
      tip.windowTip.CustomHideLoading();
      if (data) {
        //处理数据
        that.setData({
          tableDatas: data,
        })
      } else {
        exp.exception.commonExceptionManage(isCustomErr, err)
      }
    })
  }
})
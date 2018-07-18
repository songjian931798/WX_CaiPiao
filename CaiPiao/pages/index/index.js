//index.js
//获取应用实例
const queryNotUser = require('../../model/bmobData/queryNotUserData.js')
const tip = require('../../utils/windowTip.js')
const exp = require('../../utils/exception.js')
Page({
  data: {
    movies: [
      {
        'key':'url',
        'url': ''
      }
    ],
    scrollMessage:[
      {
      'key':'msg',
      'message': '人工自能预测海南七星彩。',
    }
    ],
    itemDatas:[
      {
      // 'imgTitle':'七星',
      // 'itemTitle':'海南七星彩',
      // 'itemTime':'2018-06-30',
      // 'itemMessage':'【2018】期，我们不见不散！',
      // 'itemTableName':''
    },  
    ]
  }, 
  onLoad: function () {
    this.queryDataFromRemote(false);
  },

  onPullDownRefresh:function(){
    this.queryDataFromRemote(true);
  },

  //点击列表item事件
  clickItem:function(event){
    wx.navigateTo({
      url: '../numberTable/numberTable?title=' + event.currentTarget.dataset.navtitle + '&tableName=' + event.currentTarget.dataset.tablename,
    });
  },

  //网络请求数据
  queryDataFromRemote:function(isRefersh){
    if(!isRefersh){
      tip.windowTip.CustomShowLoading('loading....');
    }
    //这里请求滚动图片和文字
    queryNotUser.queryNotUser.queryAllDataList('ScrollContent', function (data, isCustomErr, err) {
      if (data) {
        //处理数据
        let img = [];
        let msg = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].pageType == 'mainPage' && data[i].contentType == 'image') {
            let dataImg = {
              'key': data[i].objectId,
              'url': data[i].content
            }
            img.push(dataImg);
          } else if (data[i].pageType == 'mainPage' && data[i].contentType == 'message') {
            let dataMsg = {
              'key': data[i].objectId,
              'message': data[i].content
            }
            msg.push(dataMsg);
          }
        }
        this.setData({
          movies: img,
          scrollMessage: msg
        });
      } else {
        exp.exception.commonExceptionManage(isCustomErr, err);
      }
    }.bind(this));

    //这里请求列表item
    queryNotUser.queryNotUser.queryAllDataList('LotteryType', function (data, isCustomErr, err) {
      if(!isRefersh){
        tip.windowTip.CustomHideLoading();
      }else{
        wx.stopPullDownRefresh();
      }
      if (data) {
        //处理数据
        this.setData({
          itemDatas: data,
        });
      } else {
        exp.exception.commonExceptionManage(isCustomErr, err)
      }
    }.bind(this));
  }

})

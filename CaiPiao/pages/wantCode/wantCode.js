const config = require('../../utils/config.js');
const window = require('../../utils/windowTip.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backgroundColorOne:'#eb7514',
    backgroundColorTow:'#dddddd',
    backgroundColorThree: '#dddddd',
    backgroundColorFour: '#dddddd',
    backgroundColorFive: '#dddddd',
    backgroundColorSix: '#dddddd',
    lotteryType:'海南七星彩',
    
    sevenQian:'',
    sevenBai: '',
    sevenShi: '',
    sevenGe: '',
    sevenFour: '',
    sevenThree: '',
    sevenTow: '',

    PDBai:'',
    PDShi: '',
    PDGe: '',
    Group3:'',
    Group6: '',

    P5Wan:'',
    P5Qian: '',
    P5Bai: '',
    P5Shi: '',
    P5Ge: '',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  //点击每一个item进行相应的工作
  clickRowItem: function(event){
    if (event.currentTarget.dataset.location == 'one'){
      this.chageItemColor(true, false, false, false, false, false, event.currentTarget.dataset.lotterytype);
      return;
    }
    if (event.currentTarget.dataset.location == 'tow') {
      this.chageItemColor(false, true, false, false, false, false, event.currentTarget.dataset.lotterytype);
      return;
    }
    if (event.currentTarget.dataset.location == 'three') {
      this.chageItemColor(false, false, true, false, false, false, event.currentTarget.dataset.lotterytype);
      return;
    }
    if (event.currentTarget.dataset.location == 'four') {
      this.chageItemColor(false, false, false, true, false, false, event.currentTarget.dataset.lotterytype);
      return;
    }
    if (event.currentTarget.dataset.location == 'five') {
      this.chageItemColor(false, false, false, false, true, false, event.currentTarget.dataset.lotterytype);
      return;
    }
    if (event.currentTarget.dataset.location == 'six') {
      this.chageItemColor(false, false, false, false, false, true, event.currentTarget.dataset.lotterytype);
      return;
    }
  },

  //改变item的颜色
  chageItemColor:function(one,tow,three,four,five,six,lotType){
    this.setData({
      backgroundColorOne: one ? '#eb7514' : '#dddddd',
      backgroundColorTow: tow ? '#eb7514' : '#dddddd',
      backgroundColorThree: three ? '#eb7514' : '#dddddd',
      backgroundColorFour: four ? '#eb7514' : '#dddddd',
      backgroundColorFive: five ? '#eb7514' : '#dddddd',
      backgroundColorSix: six ? '#eb7514' : '#dddddd',
      lotteryType: lotType,
    })
  },

  //点击说明提示
  clickExplainShow:function(event){
    switch (event.currentTarget.dataset.explaintype){
      case '七星定':
        window.windowTip.showExplainWindow('七星彩定位说明', config.config.SEVEN_LOCATION_EXPLAIN);
        break;
      case '七星4':
        window.windowTip.showExplainWindow('七星彩4字现说明', config.config.SEVEN_FOUR_SHOW_EXPLAIN);
        break;
      case '七星3':
        window.windowTip.showExplainWindow('七星彩3字现说明', config.config.SEVEN_THREE_SHOW_EXPLAIN);
        break;
      case '七星2':
        window.windowTip.showExplainWindow('七星彩2字现说明', config.config.SEVEN_TOW_SHOW_EXPLAIN);
        break;
      case '排3D直':
        window.windowTip.showExplainWindow('直选说明', config.config.THREE_P_D_DIRECT_EXPLAIN);
        break;
      case '组3':
        window.windowTip.showExplainWindow('组3说明', config.config.THREE_P_D_GROUP3_EXPLAIN);
        break;
      case '组6':
        window.windowTip.showExplainWindow('组6说明', config.config.THREE_P_D_GROUP6_EXPLAIN);
        break;
      case '排5':
        window.windowTip.showExplainWindow('排5说明', config.config.FIVE_P_DIRECT_EXPLAIN);
        break;
    }
  },

  //点击算码
  clickCalculateCode: function (event) {
    switch (event.currentTarget.dataset.explaintype) {
      case '七星定':
        if ((this.data.sevenQian != '' && this.data.sevenBai == '' && this.data.sevenShi == '' && this.data.sevenGe == '') || this.hasRepeatNumber(this.data.sevenQian) ||
          (this.data.sevenQian == '' && this.data.sevenBai != '' && this.data.sevenShi == '' && this.data.sevenGe == '') || this.hasRepeatNumber(this.data.sevenBai) ||
          (this.data.sevenQian == '' && this.data.sevenBai == '' && this.data.sevenShi != '' && this.data.sevenGe == '') || this.hasRepeatNumber(this.data.sevenShi) ||
          (this.data.sevenQian == '' && this.data.sevenBai == '' && this.data.sevenShi == '' && this.data.sevenGe != '') || this.hasRepeatNumber(this.data.sevenGe) ||
          (this.data.sevenQian == '' && this.data.sevenBai == '' && this.data.sevenShi == '' && this.data.sevenGe == '')){
            window.windowTip.showExplainWindow('提示', '您至少需要在两个位置上填入数字！且，每个位置上不能有重复数字出现');
          }else{
            wx.navigateTo({
              url: '../lookCode/lookCode?type=七星定&sevenQian=' + this.data.sevenQian + '&sevenBai=' + this.data.sevenBai + '&sevenShi=' + this.data.sevenShi + '&sevenGe=' + this.data.sevenGe,
            });
          }
        break;
      case '七星4':
        if (this.data.sevenFour == '' || this.data.sevenFour.length < 4 || this.hasRepeatNumber(this.data.sevenFour)){
          window.windowTip.showExplainWindow('提示', '您填入的数字不能有重复 且不能小于4个！');
        }else{
          wx.navigateTo({
            url: '../lookCode/lookCode?type=七星4&sevenFour=' + this.data.sevenFour,
          });
        }
        break;
      case '七星3':
        if (this.data.sevenThree == '' || this.data.sevenThree.length < 3 || this.hasRepeatNumber(this.data.sevenThree)) {
          window.windowTip.showExplainWindow('提示', '您填入的数字不能有重复 且不能小于3个！');
        }else{
          wx.navigateTo({
            url: '../lookCode/lookCode?type=七星3&sevenThree=' + this.data.sevenThree,
          });
        }
        break;
      case '七星2':
        if (this.data.sevenTow == '' || this.data.sevenTow.length < 2 || this.hasRepeatNumber(this.data.sevenTow)) {
          window.windowTip.showExplainWindow('提示', '您填入的数字不能有重复 且不能小于2个！');
        }else{
          wx.navigateTo({
            url: '../lookCode/lookCode?type=七星2&sevenTow=' + this.data.sevenTow,
          });
        }
        break;
      case '排3D直':
        if (this.data.PDBai != '' && this.data.PDShi != '' && this.data.PDGe != '' && !this.hasRepeatNumber(this.data.PDBai) &&
           !this.hasRepeatNumber(this.data.PDShi) && !this.hasRepeatNumber(this.data.PDGe)) {
          wx.navigateTo({
            url: '../lookCode/lookCode?type=排3D直&PDBai=' + this.data.PDBai + '&PDShi=' + this.data.PDShi + '&PDGe=' + this.data.PDGe,
          });
        }else{
          window.windowTip.showExplainWindow('提示', '直选，每个位置上都必须填入数字！且，每个位置上不能有重复数字出现');
        }
        break;
      case '组3':
        if (this.data.Group3 == '' || this.data.Group3.length < 2|| this.hasRepeatNumber(this.data.Group3)){
          window.windowTip.showExplainWindow('提示', '组3，您填入的数字不能有重复 且不能小于2个！');
        }else{
          wx.navigateTo({
            url: '../lookCode/lookCode?type=组3&Group3=' + this.data.Group3,
          });
        }
        break;
      case '组6':
        if (this.data.Group6 == '' || this.data.Group6.length < 3 || this.hasRepeatNumber(this.data.Group6)) {
          window.windowTip.showExplainWindow('提示', '组6，您填入的数字不能有重复 且不能小于3个！');
        }else{
          wx.navigateTo({
            url: '../lookCode/lookCode?type=组6&Group6=' + this.data.Group6,
          });
        }
        break;
      case '排5':
        if (this.data.P5Wan != '' && this.data.P5Qian != '' && this.data.P5Bai != '' && this.data.P5Shi != '' && this.data.P5Ge!=''&&
          !this.hasRepeatNumber(this.data.P5Wan) && !this.hasRepeatNumber(this.data.P5Qian) && !this.hasRepeatNumber(this.data.P5Bai) && !this.hasRepeatNumber(this.data.P5Shi)&&
          !this.hasRepeatNumber(this.data.P5Ge)){
            wx.navigateTo({
              url: '../lookCode/lookCode?type=排5&P5Wan=' + this.data.P5Wan + '&P5Qian=' + this.data.P5Qian + '&P5Bai=' + this.data.P5Bai + '&P5Shi=' + this.data.P5Shi + '&P5Ge=' + this.data.P5Ge,
            });
          }else{
          window.windowTip.showExplainWindow('提示', '排5，每个位置上都必须填入数字！且，每个位置上不能有重复数字出现！');
          }
        break;
    }
  },

  //判断用户输入的数字是否有重复
  hasRepeatNumber:function(strData){
    let arrData = [];
    for (let i = 0; i < strData.length;i++){
      arrData.push(strData.charAt(i));
    }
    arrData.sort();
    for (let i = 0; i < arrData.length-1; i++){
      if (arrData[i] == arrData[i + 1]) {
        return true;
      }
    }
    return false;
  },

  bindSevenQian:function(e){
    this.setData({
      sevenQian: e.detail.value
    })
  },
  bindSevenBai:function(e){
    this.setData({
      sevenBai: e.detail.value
    })
  },
  bindSevenShi: function (e) {
    this.setData({
      sevenShi: e.detail.value
    })
  },
  bindSevenGe: function (e) {
    this.setData({
      sevenGe: e.detail.value
    })
  },
  bindSevenFour: function (e) {
    this.setData({
      sevenFour: e.detail.value
    })
  },
  bindSevenThree: function (e) {
    this.setData({
      sevenThree: e.detail.value
    })
  },
  bindSevenTow: function (e) {
    this.setData({
      sevenTow: e.detail.value
    })
  },


  bindPDBai: function (e) {
    this.setData({
      PDBai: e.detail.value
    })
  },
  bindPDShi: function (e) {
    this.setData({
      PDShi: e.detail.value
    })
  },
  bindPDGe: function (e) {
    this.setData({
      PDGe: e.detail.value
    })
  },
  bindGroup3:function(e){
    this.setData({
      Group3: e.detail.value
    })
  },
  bindGroup6: function (e) {
    this.setData({
      Group6: e.detail.value
    })
  },


  bindP5Wan:function(e){
    this.setData({
      P5Wan: e.detail.value
    })
  },
  bindP5Qian: function (e) {
    this.setData({
      P5Qian: e.detail.value
    })
  },
  bindP5Bai: function (e) {
    this.setData({
      P5Bai: e.detail.value
    })
  },
  bindP5Shi: function (e) {
    this.setData({
      P5Shi: e.detail.value
    })
  },
  bindP5Ge: function (e) {
    this.setData({
      P5Ge: e.detail.value
    })
  }

})
const showWindow = require('../../utils/windowTip.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sevenQian: '',
    sevenBai: '',
    sevenShi: '',
    sevenGe: '',
    sevenFour: '',
    sevenThree: '',
    sevenTow: '',

    // PDBai: '',
    // PDShi: '',
    // PDGe: '',
    Group3: '',
    // Group6: '',

    P5Wan: '',
    P5Qian: '',
    P5Bai: '',
    P5Shi: '',
    P5Ge: '',
    lotteryArr:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    switch(options.type){
      case '七星定':
        this.setData({
          sevenQian: options.sevenQian,
          sevenBai: options.sevenBai,
          sevenShi: options.sevenShi,
          sevenGe: options.sevenGe
        });
        this.sevenLocation(this.data);
        break;
      case '七星4':
        this.setData({
          sevenFour: options.sevenFour
        });
        this.sevenShowFour(this.data);
        break;
      case '七星3':
        this.setData({
          sevenThree: options.sevenThree
        });
        this.sevenShowThree(this.data);
        break;
      case '七星2':
        this.setData({
          sevenTow: options.sevenTow
        });
        this.sevenShowTow(this.data);
        break;
      case '排3D直':
        this.setData({
          sevenQian: '',
          sevenBai: options.PDBai,
          sevenShi: options.PDShi,
          sevenGe: options.PDGe
        });
        this.sevenLocation(this.data);
        break;
      case '组3':
        this.setData({
          Group3: options.Group3
        });
        this.groupThreeShow(this.data);
        break;
      case '组6':
        this.setData({
          sevenThree: options.Group6
        });
        this.sevenShowThree(this.data);
        break;
      case '排5':
        this.setData({
          P5Wan: options.P5Wan,
          P5Qian: options.P5Qian,
          P5Bai: options.P5Bai,
          P5Shi: options.P5Shi,
          P5Ge: options.P5Ge
        });
        this.pDFive(this.data);
        break;
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  //七星彩定位
  sevenLocation:function(data){
    showWindow.windowTip.CustomShowLoading('计算中...')
    let groupData=[];
    if (data.sevenQian!=''){
      for (let i = 0; i < data.sevenQian.length;i++){
        if (data.sevenBai != ''){
          for (let j = 0; j < data.sevenBai.length;j++){
            if (data.sevenShi != ''){
              for (let k = 0; k < data.sevenShi.length; k++){
                if (data.sevenGe != ''){
                  for (let m = 0; m < data.sevenGe.length; m++){
                    groupData.push(data.sevenQian.charAt(i) + '-' + data.sevenBai.charAt(j)+'-'+
                      data.sevenShi.charAt(k) + '-' + data.sevenGe.charAt(m));
                  }
                }else{
                  groupData.push(data.sevenQian.charAt(i) + '-' + data.sevenBai.charAt(j) + '-' +
                    data.sevenShi.charAt(k) + '-x');
                }
              }
            }else{
              if (data.sevenGe != '') {
                for (let m = 0; m < data.sevenGe.length; m++) {
                  groupData.push(data.sevenQian.charAt(i) + '-' + data.sevenBai.charAt(j) + '-x' +'-' + data.sevenGe.charAt(m));
                }
              }else{
                groupData.push(data.sevenQian.charAt(i) + '-' + data.sevenBai.charAt(j) + '-x' + '-x');
              }
            }
          }
        }else{
          if (data.sevenShi != '') {
            for (let k = 0; k < data.sevenShi.length; k++) {
              if (data.sevenGe != '') {
                for (let m = 0; m < data.sevenGe.length; m++) {
                  groupData.push(data.sevenQian.charAt(i) + '-x' + '-' + data.sevenShi.charAt(k) + '-' + data.sevenGe.charAt(m));
                }
              }else{
                groupData.push(data.sevenQian.charAt(i) + '-x' + '-' + data.sevenShi.charAt(k) + '-x');
              }
            }
          }else{
            for (let m = 0; m < data.sevenGe.length; m++) {
              groupData.push(data.sevenQian.charAt(i) + '-x' + '-x'+ '-' + data.sevenGe.charAt(m));
            }
          }
        }
      }
    }else{
      if (data.sevenBai != '') {
        for (let j = 0; j < data.sevenBai.length; j++) {
          if (data.sevenShi != '') {
            for (let k = 0; k < data.sevenShi.length; k++) {
              if (data.sevenGe != '') {
                for (let m = 0; m < data.sevenGe.length; m++) {
                  groupData.push('x-' + data.sevenBai.charAt(j) + '-' + data.sevenShi.charAt(k) + '-' + data.sevenGe.charAt(m));
                }
              }else{
                groupData.push('x-' + data.sevenBai.charAt(j) + '-' + data.sevenShi.charAt(k) + '-x');
              }
            }
          }else{
            for (let m = 0; m < data.sevenGe.length; m++) {
              groupData.push('x-' + data.sevenBai.charAt(j) + '-x' + '-' + data.sevenGe.charAt(m));
            }
          }
        }
      }else{
        for (let k = 0; k < data.sevenShi.length; k++){
          for (let m = 0; m < data.sevenGe.length; m++){
            groupData.push('x-' + '-x' + data.sevenShi.charAt(k) + '-' + data.sevenGe.charAt(m));
          }
        }
      }
    }
    this.setData({
      lotteryArr: groupData
    }, () =>{
      showWindow.windowTip.CustomHideLoading();
    });
  },

  sevenShowFour: function(data){
    //七星彩4字现函数
    showWindow.windowTip.CustomShowLoading('计算中...')
    let groupData = [];
    let currentSum=0;
    for (let i = 0; i < data.sevenFour.length;i++){
      for (let j = i+1; j < data.sevenFour.length; j++){
        if (data.sevenFour.charAt(i) == data.sevenFour.charAt(j)){
          continue;
        }
        for (let k = j+1; k < data.sevenFour.length; k++) {
          if (data.sevenFour.charAt(i) == data.sevenFour.charAt(k) || data.sevenFour.charAt(j) == data.sevenFour.charAt(k)) {
            continue;
          }
          for (let m = k+1; m < data.sevenFour.length; m++) {
            if (data.sevenFour.charAt(i) == data.sevenFour.charAt(m) || data.sevenFour.charAt(j) == data.sevenFour.charAt(m) || data.sevenFour.charAt(k) == data.sevenFour.charAt(m)) {
              continue;
            }else{
             
              groupData.push(data.sevenFour.charAt(i) + ' ' + data.sevenFour.charAt(j) + ' ' + data.sevenFour.charAt(k) + ' ' + data.sevenFour.charAt(m));
            }
          }
        }
      }
    }
    this.setData({
      lotteryArr: groupData
    }, () => {
      showWindow.windowTip.CustomHideLoading();
    });
  },
  sevenShowThree: function (data) {
    //七星彩3字现函数
    showWindow.windowTip.CustomShowLoading('计算中...')
    let groupData = [];
    let currentSum = 0;
    for (let i = 0; i < data.sevenThree.length; i++) {
      for (let j = i + 1; j < data.sevenThree.length; j++) {
        if (data.sevenThree.charAt(i) == data.sevenThree.charAt(j)) {
          continue;
        }
        for (let k = j + 1; k < data.sevenThree.length; k++) {
          if (data.sevenThree.charAt(i) == data.sevenThree.charAt(k) || data.sevenThree.charAt(j) == data.sevenThree.charAt(k)) {
            continue;
          }else{
            groupData.push(data.sevenThree.charAt(i) + ' ' + data.sevenThree.charAt(j) + ' ' + data.sevenThree.charAt(k) + ' -');
          }
        }
      }
    }
    this.setData({
      lotteryArr: groupData
    }, () => {
      showWindow.windowTip.CustomHideLoading();
    }); 
  },
  sevenShowTow: function (data) {
    //七星彩2字现函数
    showWindow.windowTip.CustomShowLoading('计算中...')
    let groupData = [];
    for (let i = 0; i < data.sevenTow.length; i++) {
      for (let j = i + 1; j < data.sevenTow.length; j++) {
        if (data.sevenTow.charAt(i) == data.sevenTow.charAt(j)) {
          continue;
        }else{
          groupData.push(data.sevenTow.charAt(i) + ' ' + data.sevenTow.charAt(j) + ' -' + ' -');
        }
      }
    }
    this.setData({
      lotteryArr: groupData
    }, () => {
      showWindow.windowTip.CustomHideLoading();
    }); 
  },

  groupThreeShow:function(data){
    //组3选码
    showWindow.windowTip.CustomShowLoading('计算中...')
    let groupData = [];
    for (let i = 0; i < data.Group3.length; i++) {
      for (let j = i + 1; j < data.Group3.length; j++) {
        if (data.Group3.charAt(i) == data.Group3.charAt(j)) {
          continue;
        } else {
          groupData.push(data.Group3.charAt(i) + '-' + data.Group3.charAt(i) + '-' + data.Group3.charAt(j) + ' -');
          groupData.push(data.Group3.charAt(i) + '-' + data.Group3.charAt(j) + '-' + data.Group3.charAt(j) + ' -');
        }
      }
    }
    this.setData({
      lotteryArr: groupData
    }, () => {
      showWindow.windowTip.CustomHideLoading();
    }); 
  },

  pDFive:function(data){
    //排5
    showWindow.windowTip.CustomShowLoading('计算中...')
    let groupData = [];
    for (let i = 0; i < data.P5Wan.length;i++){
      for (let j = 0; j < data.P5Qian.length;j++){
        for (let k = 0; k < data.P5Bai.length;k++){
          for(let l=0;l<data.P5Shi.length;l++){
            for(let m=0;m<data.P5Ge.length;m++){
              groupData.push(data.P5Wan.charAt(i)  + data.P5Qian.charAt(j) + data.P5Bai.charAt(k)  + data.P5Shi.charAt(l) + data.P5Ge.charAt(m));
            }
          }
        }
      }
    }

    this.setData({
      lotteryArr: groupData
    }, () => {
      showWindow.windowTip.CustomHideLoading();
    }); 
  }

})
const HttpHost = "https://gameapi.bmob.cn";
const Version = 1;

const
    PlayerStatus_NoBody = 0, // 该位置上尚无玩家
    PlayerStatus_Waitting = 1, // 该位置上有玩家，在等待中，尚未准备
    PlayerStatus_Ready = 2, // 该位置上有玩家，已经准备了
    PlayerStatus_Playing = 3, // 该位置上有玩家，已经在游戏中
    PlayerStatus_GameOut = 4, // 该位置上有玩家，已经在游戏中被淘汰
    PlayerStatus_Offline = 5, // 该位置上有玩家，已经在游戏中，但是掉线了

    PlayerRoomAction_Join = 1,
    PlayerRoomAction_Leave = 2,
    PlayerRoomAction_Offline = 3,
    PlayerRoomAction_Reconn = 4,
    PlayerRoomAction_Ready = 5,
    PlayerRoomAction_Unready = 6,
    PlayerRoomAction_Kicked = 7,
    PlayerRoomAction_GameOver = 8,
    PlayerRoomAction_GameLose = 9,
    RoomAction_Start = 20;

const ___fp=[0x0080,0x0040,0x0020,0x0010,0x0008,0x0004,0x0002,0x0001];var cache={};class ___ps{constructor(n,u="#Unknown"){this._n=n;this._u=u;this._s={}}}var ___bd=new DataView(new ArrayBuffer((1<<5)-(1<<3)));var ___bd_gb=___bd.getUint8.bind(___bd),___bd_sb=___bd.setUint8.bind(___bd);function __ge(val,bs,off){___bd.setFloat32(0,val,false);bs[off]=___bd_gb(0);bs[off+1]=___bd_gb(1);bs[off+2]=___bd_gb(2);bs[off+3]=___bd_gb(3)}function __fe(val,bs,off){___bd.setFloat64(4,val,false);bs[off]=___bd_gb(4);bs[off+1]=___bd_gb(5);bs[off+2]=___bd_gb(6);bs[off+3]=___bd_gb(7);bs[off+4]=___bd_gb(8);bs[off+5]=___bd_gb(9);bs[off+6]=___bd_gb(10);bs[off+7]=___bd_gb(11)}function __gt(bs,off){___bd_sb(12,bs[off]&0xff);___bd_sb(13,bs[off+1]&0xff);___bd_sb(14,bs[off+2]&0xff);___bd_sb(15,bs[off+3]&0xff);return ___bd.getFloat32(12)}function __ft(bs,off){___bd_sb(16,bs[off]&0xff);___bd_sb(17,bs[off+1]&0xff);___bd_sb(18,bs[off+2]&0xff);___bd_sb(19,bs[off+3]&0xff);___bd_sb(20,bs[off+4]&0xff);___bd_sb(21,bs[off+5]&0xff);___bd_sb(22,bs[off+6]&0xff);___bd_sb(23,bs[off+7]&0xff);return ___bd.getFloat64(16)}class ___pa{constructor(ind,name){this._i=ind;this._n=name;this._c=0;this._b=0;this._m=0;this._t=0;this._d=false;this._x=false}i(t,b,o){let v=null;let i;switch(this._t){case 0x0000:v=b[o]==1;break;case 0x0080:let zs=new Array(this._c);for(i=0;i<this._c;i++)zs[i]=(b[o+(i>>3)]&___fp[i%8])!=0;v=zs;break;case 0x0003:let s=0;for(i=o;i<o+this._b;i++)s=(s<<8)|b[i];v=s;break;case 0x0083:let ints=new Array(this._c);let itemCount=this._b/this._c;for(i=0;i<this._c;i++){for(let j=0;j<itemCount;j++)ints[i]=(ints[i]<<8)|b[o+j];o+=itemCount}v=ints;break;case 0x0002:v=__gt(b,o);break;case 0x0082:let fs=new Array(this._c);for(i=0;i<this._c;i++){fs[i]=__gt(b,o);o+=4}v=fs;break;case 0x0001:v=__ft(b,o);break;case 0x0081:let ds=new Array(this._c);for(i=0;i<this._c;i++){ds[i]=__ft(b,o);o+=8}v=ds;break}if(v!=null){t[this._n]=v;return true}return false}}var WssUrl='';var BGSId='';var __at=[],__pl=[],__ae={},__lu=[],__ec=-1,__pc=-1,__os=-1,__ms=-1,__mp=-1,__mb=-1,__ic=false,__ir=false,__et=null,__ai={},__ah=[0x03,0,0,0],__mr=[],__1s=null,__2p=0,__mn=-1;var __1o,__1r,__1j,__hr;var __re=function(bs){if(__1s)__hr(bs);else __mr.push(bs)};var __mh=__re;function __bc(n){return n<0x100?1:(n<0x10000?2:parseInt(Math.log(n)/Math.log(0x100))+1)}function __ia(o){return Object.prototype.toString.call(o)=='[object Array]'}function __if(f){return f&&typeof(f)==='function'}class _Model{constructor(){this.WriteFloat=__ge;this.WriteDouble=__fe;this.ReadFloat=__gt;this.ReadDouble=__ft;__hr=this.__hr1}__hr1(body){try{switch(body.shift()){case 0x03:{let d=JSON.parse(this.bytesToString(body,0,body.length));__1s[0](d.action,d.no,d);break}case 0x05:{if(__2p<2||__os<0)return;let _7m=false;let _7c={};let _7s=(__2p+7)>>3;let _7x=new Array(__2p);let _7o1=0,_7o2=_7s;let b,_7i,_7i1;let _7ab;for(;_7o1<_7s;_7o1++){b=body[_7o1];for(_7i=0;_7i<8;_7i++){if((b&___fp[_7i])!=0){_7x[((_7o1)<<3)|_7i]=true;_7o2+=__os}}}let _6i;let _6c={};for(_7i=0;_7i<__2p;_7i++){if(_7x[_7i]){_6i=_7i==__mn;if(!_6i)_6c={};for(_7i1=0;_7i1<__ec;_7i1++){if((body[_7o1+(_7i1>>3)]&___fp[_7i1%8])!=0){_7ab=__at[_7i1];if(_7ab._x){if(!_6i||!_7ab._d){if(_7ab.i(__pl[_7i]._s,body,_7o2)){if(_6i){_7m=true;_7c[_7ab._n]=true}else _6c[_7ab._n]=true}else return}_7o2+=_7ab._b}else return}}if(!_6i)__1s[2](_7i,_6c,__pl[_7i]._s);_7o1+=__os}}if(_7o2+__ms<body.length){let _6m=__pl[__mn]._s;let cursorAtP_4=_7o2,cursorAtP_5=_7o2+__ms;for(_7i1=0;_7i1<__pc;_7i1++){if((body[cursorAtP_4+(_7i1>>3)]&___fp[_7i1%8])!=0){_7m=true;_7ab=__at[_7i1+__ec];_7c[_7ab._n]=true;if(_7ab._x)return;else{if(!_7ab.i(_6m,body,cursorAtP_5))return;cursorAtP_5+=_7ab._b}}}}if(_7m)__1s[1](_7c,__pl[__mn]._s);break}case 0x06:{__1s[4](body);break}case 0x07:{if(__mb>0){let no=0,cursor=0;for(let i=0;i<__mb;i++)no=(no<<8)|body.shift();__1s[3](no,body)}break}}}catch(e){console.log(e)}}__sc(data){__mp=data.maxPlayerCount;if(__mp<2)throw"Error";let _6s=data.attrs;let _6a=(!!_6s)?_6s.length:0;if(!_6a||_6a>255)throw"Error";__mb=__bc(__mp);__at=new Array(_6a);__lu=new Array(_6a);__ae={};let _6e=0,_6p=0;for(let _7d=0;_7d<_6a;_7d++){let _7t=_6s[_7d];let _7ab=new ___pa(_7d,_7t.name.toLowerCase());let t=_7t["type"];_7ab._t=((t.charCodeAt(0)-98)>>1)|((t.charCodeAt(t.length-1)==93?1:0)<<7);switch(_7ab._t){case 0x0000:_7ab._b=1<<0;break;case 0x0001:_7ab._b=1<<3;break;case 0x0002:_7ab._b=1<<2;break;case 0x0003:_7ab._b=__bc(_7t.max);break;case 0x0083:_7ab._b=__bc(_7t.max)*_7t.count;break;case 0x0082:_7ab._b=_7t.count<<2;break;case 0x0081:_7ab._b=_7t.count<<3;break;case 0x0080:_7ab._b=__bc(_7t.count);break}_7ab._c=_7t.count;_7ab._m=_7t.max;_7ab._d=!!_7t.editable;_7ab._x=!!_7t["export"];__at[_7d]=_7ab;if(_7ab._d)__ae[_7ab._n]=_7ab;if(_7ab._x)_6e++;else _6p++}__ec=_6e;__pc=_6p;__os=(_6e+7)>>3;__ms=(_6p+7)>>3}SendTransferToAllExceptSelf(bs){return this.SendBytes([0x07,2].concat(bs))}RegistOfflineListener(listener){if(__if(listener)){__1o=function(){if(!this.isCalled){this.isCalled=true;this.origin()}};__1o.origin=listener;__1o=__1o.bind(__1o)}}UnregistOfflineListener(listener){if(__1o&&__1o.origin===listener)__1o=null}RegistRoomActListener(listener){if(__if(listener))__1r=listener}UnregistRoomActListener(listener){if(__1r===listener)__1r=null}EditMyStatus(name,value,abortSame=true){let _6as=abortSame;if(name&&(value!==undefined&&value!==null)){let _7ab=__ae[name.toLowerCase()];if(_7ab&&_7ab._d){let offset=5;let _6b=new Array(offset+_7ab._b);let isOK=false;switch(_7ab._t){case 0x0000:if(typeof(value)==='boolean'){_6b[offset]=value?1:0;isOK=true}break;case 0x0080:if(__ia(value)){let zs=new Array(_7ab._c);for(let i=0;i<_7ab._c;i++)if(zs[i])_6b[offset+(i>>3)]|=___fp[i%8];isOK=true}break;case 0x0003:if(typeof(value)==='number'){if(value<_7ab._m){for(let j=offset+_7ab._b-1;j>offset-1;j--){_6b[j]=value&0xff;value>>=8}isOK=true}}break;case 0x0083:if(__ia(value)){if(value.length==_7ab._c){let _6oc=_7ab._b/_7ab._c;isOK=true;for(let vi=0,vl=_7ab._c;vi<vl;vi++){let v=value[vi];if(v<_7ab._m){for(let j=offset+_6oc-1;j>offset-1;j--){_6b[j]=v&0xff;v>>=8}}else{isOK=false;break}offset+=_6oc}}}break;case 0x0002:if(typeof(value)==='number'){__ge(value,_6b,offset);isOK=true}break;case 0x0082:if(__ia(value)&&value.length==_7ab._c){for(let fi=0,fl=_7ab._c;fi<fl;fi++)__ge(value[fi],_6b,offset+(fi<<2));isOK=true}break;case 0x0001:if(typeof(value)==='number'){__fe(value,_6b,offset);isOK=true}break;case 0x0081:if(__ia(value)&&value.length==_7ab._c){for(let fi=0,fl=_7ab._c;fi<fl;fi++)__fe(value[fi],_6b,offset+(fi<<3));isOK=true}break}if(isOK){_6b[0]=0x05;_6b[4]=_7ab._i;if(_6as&&__lu!=null){let _6lu=__lu[_7ab._i];if(_6lu&&_6b.length==_6lu.length){let _6is=true;for(let i=5,l=_6b.length;i<l;i++)if(_6b[i]!=_6lu[i]){_6is=false;break}if(_6is)return 1}}if(this.SendBytes(_6b)){if(_6as)__lu[_7ab._i]=_6b;return 0}else return-1}}}return-1}ReadyAtRoom(){if(__ir)return this.SendBytes([0x02,0x05]);return false}SendBytes(bs,callback){if(__ic){__et.send({data:this.__ib(bs),complete:callback});return true}return false}QuitRoom(){if(__ir){__ir=false;if(__ic&&__et){__ic=false;let socket=__et;__et=null;socket.send({data:this.__ib([0x02,0x02]),complete:function(){socket.close()}});return true}}return false}CloudAction(action,bs){if(action){let id=__ai[action.toLowerCase()];if(typeof(id)=='number'){if(!bs)bs=[];__ah[3]=id;return this.SendBytes(__ah.concat(bs))}}return false}JoinRoom(roomId,joinKey,userId,seatKey,listener){this.QuitRoom();__mr=[];if(__if(listener)){if(WssUrl)__1j=listener;else{listener(false,"请在初始化时输入连接地址");return}}__et=wx.connectSocket({url:WssUrl+'/conn/?rid='+roomId+'&joinkey='+joinKey,header:{userid:userId,seatkey:seatKey},success:function(data){console.log('Socket conn:',data)},fail:function(e){console.log('Socket fail:',data);__1j=null;callback(false,e.errMsg)}});__et.onMessage(this.__or.bind(this));let _6of=(function(m){__mr=[];if(this==__et){console.log('Socket close:',m);__ic=false;if(__if(__1o))__1o()}}).bind(__et);__et.onClose(_6of);__et.onError(_6of);__ic=true}SetGameRuntimeListeners(){let __6as=5;if(arguments&&arguments.length==__6as){let ___is=new Array(__6as);for(let i=0;i<__6as;i++)if(__if(arguments[i]))___is[i]=arguments[i];else return false;__1s=___is;__mh=__hr;for(let i=0,l=__mr.length;i<l;i++)__hr(__mr[i]);__mr=[];return true}return false}StopGameRuntimeListener(){__mh=__re;__1s=null}getString(buff,off,end){let bs=[];for(let i=off;i<end;i++)bs.push(buff.getUint8(i));return String.fromCharCode.apply(null,bs)}bytesToString(buff,off,end){let bs=[];for(let i=off;i<end;i++)bs.push(buff[i]);return String.fromCharCode.apply(null,bs)}stringToBytes(str){let count=str.length;let bs=new Array(count);for(let i=0;i<count;i++)bs[i]=str.charCodeAt(i);return bs}__ib(r){var l=r.length;var buff=new ArrayBuffer(l);var uBuff=new Uint8Array(buff);for(var i=0;i<l;i++)uBuff[i]=r[i];return buff}__or(_5m){try{_5m=new DataView(_5m.data);let _5l=_5m.byteLength;if(_5l<1)return;let flag=_5m.getUint8(0);let that=this;switch(flag){case 0x01:if(__1j){let listener=__1j;__1j=null;let co=_5m.getUint8(1);let error;let bo=this.getString(_5m,2,_5l);if(co==0x0c8)try{let ri=JSON.parse(bo);__2p=ri.playerCount;__mn=ri.no;if(typeof(__2p)=='number'&&__2p>1&&typeof(__mn)=='number'&&__mn>-1&&__mn<__2p){__pl=new Array(__2p);for(let pi=0;pi<__2p;pi++)__pl[pi]=new ___ps(pi);__ir=true;listener(true,ri)}else throw'Error join result'}catch(e){error=e}else error=bo+'('+co+')';if(error)listener(false,error);that.SendBytes([0x08,0x02])}break;case 0x02:if(__1r){let r=JSON.parse(this.getString(_5m,1,_5l));__1r(r.action,r.no,r)}break;case 0x08:switch(_5m.getUint8(1)){case 0x02:__ai={};if(_5m.getUint8(2)==1){let c=JSON.parse(this.getString(_5m,3,_5l));let v=c.actionVersion;__ah[1]=(v>>8);__ah[2]=v&0xff;let as=c.actions;for(let i=0,l=as.length;i<l;i++)__ai[as[i]]=i}break;case 0x01:that.__sc(JSON.parse(this.getString(_5m,2,_5l)));break}break;default:let bs=new Array(_5l);bs[0]=flag;for(let i=1;i<_5l;i++)bs[i]=_5m.getUint8(i);__mh(bs);break}}catch(err){console.log(err)}}

    Init(bgsId, wssUrl, callback) {
        if (!__if(callback)) callback = function() {};
        BGSId = bgsId;
        if (wssUrl)
            WssUrl = wssUrl;
        let that = this;
        this.httpReq(HttpHost + "/client/conf?oper=get", "GET", {
            "X-Bgs-Id": BGSId,
            "X-Bgs-Ver": Version + ""
        }, null, function(isOK, data) {
            if (isOK) {
                if (data.code == 200) {
                    try {
                        that.__sc(data.data);
                        callback(true, 'OK');
                    } catch (e) {
                        console.log(e);
                        callback(false, 'Internal error');
                    }
                } else callback(false, data.data);
            } else callback(false, data);
        })
    }

    setUserId(userId) {
        return this.set('userid', userId);
    }
    getUserId() {
        return this.get('userid');
    }

    getUserIdByNo(no) {
        let result = '#Unknown_' + no;
        let players = this.get('players');
        if (!players)
            return result;
        if ('string' === typeof(players))
            try {
                players = JSON.parse(players);
            } catch (e) {}
        if (players[no])
            result = players[no];
        return result;
    }

    get(key, defVal = '') {
        let val = cache[key];
        if (val || val === 0 || val === '')
            return val;
        val = wx.getStorageSync(key);
        if (val || val === 0 || val === '')
            cache[key] = val;
        else
            val = defVal;
        return val;
    }
    set(key, val) {
        cache[key] = val;
        wx.setStorageSync(key, val);
        return this;
    }

    httpReq(path, method, headers, body, listener) {
        if (listener == null) listener = function() {};
        wx.request({
            url: path,
            header: headers,
            method: method,
            data: body,
            success: function(data) {
                let resp = data.data;
                try {
                    resp = JSON.parse(resp);
                } catch (e) {}
                listener(true, resp, data.header);
            },
            fail: function(err) {
                listener(false, err.errMsg);
            }
        });
    }


    login(code, userInfo, callback) {
        let that = this;
        if (!callback)
            return;
        if (!code) {
            callback(false, '用户码错误');
            return;
        }
        if (!userInfo || !userInfo.nickName || !userInfo.avatarUrl) {
            callback(false, '用户信息错误');
            return;
        }
        this.httpReq('http://javacloud.bmob.cn/f7693b7e98a35ed6/weapppubg?op=login', 'POST', null, {
            'code': code,
            'userInfo': userInfo
        }, function(isOK, data) {
            let errMsg;
            if (isOK) {
                if (data.code == 200) {
                    try {
                        data = data.data;
                        that.setUserId(data.id).set('head', userInfo.avatarUrl).set('name', userInfo.nickName);
                        callback(true, data.msg);
                        return;
                    } catch (e) {
                        console.log(e);
                        errMsg = '返回数据错误';
                    }
                } else
                    errMsg = data.error;
            } else
                errMsg = data;
            callback(false, errMsg);
        });
    }

    CreateRoom(userId, playerCount, callback) {
        if (!__if(callback)) callback = function() {};
        let that = this;
        this.httpReq(HttpHost + "/client/room?oper=create", "POST", {
            "X-Bgs-Id": BGSId,
            "X-Bgs-Ver": Version + ""
        }, {
            "playerCount": playerCount,
            "userId": userId ? userId : that.getUserId()
        }, function(isOK, data) {
            if (isOK) {
                if (data.code == 200) {
                    try {
                        callback(true, data.data);
                    } catch (e) {
                        console.log(e);
                        callback(false, e);
                    }
                } else
                    callback(false, data.error);
            } else
                callback(false, data);
        })
    }

}

module.exports.instance = new _Model();
!function(){var a="file:"===window.location.protocol||window.location.href.indexOf("local=1")>=0,b=window.location.href.indexOf("daily.taobao.net")>0,c=window.location.protocol,d="https:"===c?"https://assets.alicdn.com/g/tb/login/":"http://g.alicdn.com/tb/login/";KISSY.config({combine:!a&&!b,packages:[{name:"login",tag:"1358514278",path:a?"../build/js/":(b?c+"//assets.daily.taobao.net/g/tb/login":d)+"/0.4.7/js/",charset:"gbk"}]})}(),KISSY.add("login/switcher",function(a){var b=a.Event,c="dynamic",d="sso",e="static",f="module-dynamic",g="module-quick",h="module-static",i=function(a){return this instanceof i?(a=a||{},this.elLoginBox=a.elLoginBox,this.elMobile=a.elMobile,this.elMobilePwd=a.elMobilePwd,this.defaultView=a.defaultView,void this._init()):new i(a)};return a.augment(i,b.Target,{_init:function(){var b=this;a.all("#J_VisitorLink_2, #J_StaticLink, #J_Quick2Static").on("click",function(a){a.halt(),b.switchTo(e)}),a.all("#J_VisitorLink_1, #J_DynamicLink").on("click",function(a){a.halt(),b.switchTo(c)}),this.defaultView&&a.later(function(){this.elLoginBox.hasClass("loading")&&(this.switchTo(this.defaultView),this.ssoTimeout=!0,window._submit_t_&&window._lgst_&&(window._submit_t_.loading=a.now()))},2e3,!1,this)},switchTo:function(a){switch(this.elLoginBox.removeClass("loading"),a){case e:this.elLoginBox.addClass(h).removeClass(g).removeClass(f),this.fire("switch",{module:e});break;case c:this.elLoginBox.addClass(f).removeClass(h).removeClass(g),this.elMobile.val(""),this.elMobilePwd.val(""),this.fire("switch",{module:c});break;case d:this.elLoginBox.addClass(g).removeClass(h).removeClass(f),this.fire("switch",{module:d})}}}),i},{requires:["node","event"]}),KISSY.add("login/message",function(a){var b=function(c){return this instanceof b?(c=c||{},this.wrap=a.one("#J_Message"),this.content=this.wrap.one("p"),this.code=null,void this._init()):new b(c)};return a.augment(b,{_init:function(){return this.wrap&&this.content?this:void 0},show:function(a,b,c){this.content.html(a).attr("class",b||"error"),this.wrap[0].style.display="block",this.code=c},hide:function(){this.wrap[0].style.display="none",this.code=null},reset:function(){this.hide(),this.content.html("")}}),b},{requires:["node"]}),KISSY.add("login/sso/index",function(a,b){var c=function(b){return this instanceof c?(this.cfg=b=b||{},this.callback=a.isFunction(b.callback)?b.callback:function(){},void this._init()):new c(b)};return a.augment(c,{_init:function(){var c=this;b(a.merge(this.cfg,{havanaEnable:this.cfg.enable,vstUrl:c.cfg.vstUrl,applyStUrl:c.cfg.applyStUrl,miniLoginCheckUrl:c.cfg.miniLoginCheckUrl,site:c.cfg.site,vstParams:c.cfg.vstParams,ul:this.cfg.elSSOBox?this.cfg.elSSOBox.one(".userlist"):null,form:this.cfg.elSSOBox?this.cfg.elSSOBox.one("form"):null,callback:this.callback}))}}),c},{requires:["login/sso/userlist"]}),KISSY.add("login/sso/userlist",function(a,b,c,d,e,f,g,h){var i=function(b){return this instanceof i?(this.cfg=b=b||{},this.box=b.elSSOBox,this.ul=b.ul,this.form=b.form,this.bCBU=b.bCBU,this.bDaily=b.bDaily,this.bHttps=b.bHttps,this.havanaEnable=b.havanaEnable,this.callback=a.isFunction(b.callback)?b.callback:function(){},this.elButton=a.one("#J_SubmitQuick"),void this._init()):new i(b)};return a.augment(i,{_init:function(){if(this.ul&&this.form){var b=this;window._sso_st_=a.now(),this.tracknick=f(this.cfg).get(),this.wangwang=g(this.cfg),this.wwUserList=this.wangwang.userlist,window._sso_ww_t_=a.now(),this.wwUserList&&this.wwUserList.length&&(window._submit_t_&&(window._submit_t_.ww=window._sso_ww_t_-window._sso_st_),this._fireReady()),this.havanaEnable?this.havana=h({havanaTopUrl:this.cfg.havanaTopUrl,vstUrl:this.cfg.vstUrl,applyStUrl:this.cfg.applyStUrl,miniLoginCheckUrl:this.cfg.miniLoginCheckUrl,site:this.cfg.site,vstParams:this.cfg.vstParams,success:function(c){window._submit_t_&&window._lgst_&&(window._submit_t_.havana=a.now()-window._sso_ww_t_),b.havanaUserList=c,b._fireReady(),b._filterHavana(),b._uniq(),b._ui()},error:function(){window._submit_t_&&window._lgst_&&(window._submit_t_.havana=a.now()-window._sso_ww_t_),b._ui()}}):this._ui()}},_fireReady:function(){this._readyFired||(this.callback({stat:"ready"}),this._readyFired=!0)},_ui:function(){return this.usersize=(this.wwUserList?this.wwUserList.length:0)+(this.havanaUserList?this.havanaUserList.length:0),this.usersize>1&&this.box&&this.box.removeClass("ql-single"),this.usersize?(this._wwdata(),this._havanadata(),this._wwui(),this._havanaui(),void this._bind()):void this.callback({stat:"nouser"})},_wwui:function(){if(this.wwUserList&&this.wwUserList.length){var b='<li class="item-sso-user {cls}"><input data-index="{index}" data-type="ww" id="ra-{index}" class="r-sso-user r-wwuser" name="user" value="{fullNick}" type="radio" {checked} /> <label for="ra-{index}">{nick}</label></li>',c="";a.each(this.wwUserList,function(d,e){c=a.substitute(b,d)+c}),this.ul.append(c)}},_wwdata:function(){if(this.wwUserList&&this.wwUserList.length)for(var b,c=this.wwUserList.length;c--&&(b=this.wwUserList[c]);)this.tracknick&&this.tracknick===b.nick?(this._resetdata(),this.userIndex=b.index,this._userIndex=c,b.cls="current",b.checked="checked",this.loginType="WANGWANG"):a.isUndefined(this.userIndex)&&!c&&(this.userIndex=b.index,this._userIndex=c,b.cls="current",b.checked="checked",this.loginType="WANGWANG")},_havanaui:function(){if(this.havanaUserList&&this.havanaUserList.length){var b='<li class="item-sso-user {cls}"><input data-index="{index}" data-type="ha" id="ha-{index}" class="r-sso-user r-hauser" name="user" value="{nick}" type="radio" {checked} /> <label for="ha-{index}">{nick}</label></li>',c="";a.each(this.havanaUserList,function(d,e){d.disabled||(c=a.substitute(b,d)+c)}),this.ul.append(c)}},_havanadata:function(){if(this.havanaUserList&&this.havanaUserList.length)for(var b,c=this.havanaUserList.length;c--&&(b=this.havanaUserList[c]);)b.index=b.index||c,b.email&&(b.shortEmail=b.email.replace(/([^@]{7})(?:[^@]{3,})@([^@]+)/,"$1...@$2")),b.nick=(this.bCBU?b.cbuLoginId:b.taobaoNick)||b.shortEmail||b.mobile,this.tracknick&&this.tracknick===b.nick?(this._resetdata(),this.userIndex=b.index,this._userIndex=c,b.cls="current",b.checked="checked",this.loginType="HAVANA"):a.isUndefined(this.userIndex)&&!c&&(this.userIndex=b.index,this._userIndex=c,b.cls="current",b.checked="checked",this.loginType="HAVANA")},_resetdata:function(){a.isUndefined(this._userIndex)||("HAVANA"===this.loginType&&this.havanaUserList[this._userIndex]?(this.havanaUserList[this._userIndex].checked="",this.havanaUserList[this._userIndex].cls=""):"WANGWANG"===this.loginType&&this.wwUserList[this._userIndex]&&(this.wwUserList[this._userIndex].checked="",this.wwUserList[this._userIndex].cls=""))},_filterHavana:function(){if(this.havanaUserList.length){var b=a.filter(this.havanaUserList,function(a){return a.taobaoNick?!/^t-\d+-\d+$/.test(a.taobaoNick):!0});this.havanaUserList=b}},_uniq:function(){if(this.wwUserList&&this.havanaUserList){var b=[],c=this;a.each(this.wwUserList,function(d,e){var f=!1;a.each(c.havanaUserList,function(a,b){var c=a.taobaoNick||a.cbuLoginId;d.nick===c&&(f=!0)}),f||b.push(d)}),this.wwUserList=b}},_bind:function(){var b=this;d.delegate(this.ul,"click",".r-sso-user",function(c){var d=a.one(c.currentTarget);b.loginType="ww"===d.attr("data-type")?"WANGWANG":"HAVANA","WANGWANG"===b.loginType&&(b.userIndex=window.parseInt(d.attr("data-index"))),b.ul.all("li.current").removeClass("current"),d.parent().addClass("current")}),this._login()},_login:function(){var b=this;this.form.on("submit",function(c){c.halt(),window._submit_t_&&window._lgst_&&(window._submit_t_.t1="WANGWANG"===b.loginType?"ww":"havana",window._submit_t_.t2=a.now()),a.isUndefined(b.userIndex)||b.userIndex<0||(!b.button&&b.elButton&&(b.button=e({el:b.elButton})),b.button&&b.button.ing("\u6b63\u5728\u767b\u5f55..."),"WANGWANG"===b.loginType?b._wwLogin():b._havanaLogin())})},_wwLogin:function(){function b(a){var b=d._getValByName(a);b&&e&&(e[a]=b)}var c,d=this,e={};if(this.bCBU)c=a.one("#J_TPL_redirect_url")&&a.one("#J_TPL_redirect_url").val()||"http://china.alibaba.com";else{c=this.bDaily?"http://www.daily.taobao.net":"http://www.taobao.com",e=a.unparam(window.location.search.slice(1)),this.bHttps&&(e.c_isScure=!0),e.quicklogin=!0;var f=window.loginClient;f&&(e.oslanguage=f.lang,e.sr=f.ratio,e.osVer=f.os,e.naviVer=f.browser),b("from"),b("not_duplite_str"),b("guf"),b("wbp"),b("allp"),c+="?"+a.param(e)}window._goldlog_submit_&&window._goldlog_submit_(a.now()),this.wangwang.login(this.userIndex,c,function(a){a||d.switchToStatic("loginerror")})},_havanaLogin:function(){var a=this;this.havana.login({success:function(a){a.top?window.top.location.href=a.url:window.location.href=a.url},error:function(){a.switchToStatic("loginerror")}})},_getValByName:function(b){return a.isString(b)&&document.getElementsByName(b).length?document.getElementsByName(b)[0].value:void 0},switchToStatic:function(a){this.callback({stat:a}),this.button&&this.button.reset()}}),i},{requires:["dom","node","event","login/submitbutton","login/tracknick","login/sso/wangwang/index","login/sso/havana"]}),KISSY.add("login/submitbutton",function(a){var b=function(c){return this instanceof b?(c=c||{},this.el=a.one(c.el),void this._init()):new b(c)};return a.augment(b,{_init:function(){return this.el?(this.text=this.el.text(),this):void 0},ing:function(a){return this.el.text(a),this},reset:function(){return this.el.prop("disabled",!1),this.el.text(this.text),this},t:function(){return this.el&&this.el.attr("data-ing")}}),b}),KISSY.add("login/tracknick",function(a){var b=function(a){return this instanceof b?(a=a||{},this.cookiename=a.bCBU?"lid":"tracknick",void this._init()):new b(a)};return a.augment(b,{_init:function(){},get:function(){var b=a.Cookie.get(this.cookiename);return b=b?window.unescape(b.replace(/(?:#88)$/,"").replace(/\\u/g,"%u")):""}}),b},{requires:["cookie"]}),KISSY.add("login/sso/wangwang/index",function(a,b,c){var d=function(a){return this instanceof d?(a=a||{},this.bCBU=a.bCBU,this.type=this.bCBU?2:1,void this._init()):new d(a)};return a.augment(d,{_init:function(){this.ww=b({type:this.type}),this._getUserList()},_getUserList:function(){this.ww.support&&(this.userlist=this.ww.userlist)},login:function(a,b,c){this.ww.support&&this.ww.userlist&&this.ww.login(a,b,c)}}),d},{requires:["login/sso/wangwang/wangwang"]}),KISSY.add("login/sso/wangwang/wangwang",function(a){var b=(function(){if(!window.ActiveXObject)return!1;var a;try{if((a=window.external)&&"undefined"!=typeof a.msActiveXFilteringEnabled&&a.msActiveXFilteringEnabled())return!1}catch(b){}return!0}(),function(){var a;try{a=new window.ActiveXObject("AliIMSSOLogin.SSOLoginCtrl.1")}catch(b){a=window.navigator.plugins["AliSSOLogin plugin"]}return!!a}),c=function(d){return this instanceof c?(d=d||{},this.type=a.isNumber(d.type)&&d.type>=0&&d.type<=2?d.type:0,this.sub=d.sub?1:0,this.support=b(),this.ctrlType="AliIMSSOLogin",this.ctrl=null,this.userNum=0,this.uid=a.now(),void this._init()):new c(d)};return a.augment(c,{_init:function(){if(this.support){this._create();try{this.ctrl&&this.ctrl.CreateSSOData&&this.ctrl.InitSSOLoginCtrl&&this.ctrl.InitSSOLoginCtrl(this.ctrl.CreateSSOData(),0)}catch(a){}return this._getUserList(),this}},_create:function(){try{this.ctrl=new ActiveXObject("AliIMSSOLogin.SSOLoginCtrl.1")}catch(b){this.ctrl=a.DOM.create("<object>",{id:"J_WangWangPlugin"+this.uid,type:"application/npAliSSOLogin",width:0,height:0}),this.ctrlWrap=a.one(a.DOM.create("<div>",{style:"width:0;height:0;overflow:hidden;"})),this.ctrlWrap.append(this.ctrl),a.one("body").append(this.ctrlWrap)}try{this.WWVersion=this.ctrl.GetWWClientVersion(),this.ctrlVersion=this.ctrl.GetSSOLoginCtrlVersion()}catch(b){}},_getUserList:function(){this.oUserList=null,this.userlist=[];var a,b=this.userNum=0;try{if(this.oUserList=this.ctrl.GetUserList(this.type,this.sub),null===this.oUserList)return;for(this.userNum=this.oUserList.GetSize();b<this.userNum&&(a=this.oUserList.GetItemData(b));)this.userlist.push({index:b,nick:a.GetDataStr("strKey_ShortUserID"),fullNick:a.GetDataStr("strKey_FullUserID"),site:a.GetDataStr("strKey_SiteID"),siteDesc:a.GetDataStr("strKey_SiteID_Description")}),b++}catch(c){}return this.userlist},login:function(b,c,d){if(!a.isNumber(b)||!c||0>b||b>this.userNum-1)return void(a.isFunction(d)&&d(!1));var e,f;try{f=this.oUserList.GetItemData(b),f.SetDataStr("strKey_SrcURL",c),e=this.ctrl.Go(0,f),this.retData=e?e.GetDataStr("strKey_GOResult"):null}catch(g){a.log(g.message),e=!1}return a.isFunction(d)&&d(!!e),!!e}}),c},{requires:["dom","node"]}),KISSY.add("login/sso/havana",function(a,b,c){var d=function(b){return this instanceof d?(this.cfg=b=b||{},this.success=a.isFunction(b.success)?b.success:function(){},this.error=a.isFunction(b.error)?b.error:function(){},void this._init()):new d(b)};return a.augment(d,{_init:function(){if(!this.cfg.url)return void this.error();var a=this;b({havanaTopUrl:this.cfg.havanaTopUrl,success:function(b){a.success(b)},error:function(b){a.error(b)}}),this.havanalogin=c({vstUrl:this.cfg.vstUrl,applyStUrl:this.cfg.applyStUrl,miniLoginCheckUrl:this.cfg.miniLoginCheckUrl,site:this.cfg.site,params:this.cfg.vstParams})},login:function(b){a.isObject(b)&&(b.success||b.error)&&this.havanalogin.login({success:b.success,error:b.error})}}),d},{requires:["login/havana/havanauser","login/havana/havanalogin"]}),KISSY.add("login/havana/havanauser",function(a){var b=function(c){return this instanceof b?(c=c||{},this.havanaTopUrl=c.havanaTopUrl,this.success=a.isFunction(c.success)?c.success:function(){},this.error=a.isFunction(c.error)?c.error:function(){},void this._init()):new b(c)};return a.augment(b,{_init:function(){this.havanaTopUrl&&(this.success||this.error)&&this._get()},_get:function(){var b=this;a.io({url:this.havanaTopUrl,dataType:"jsonp",cache:!1,timeout:1,scriptCharset:"utf-8",complete:function(c){return c&&200===c.code&&a.isArray(c.data)&&c.data.length?void b.success(c.data):void b.error(c)}})}}),b},{requires:["ajax"]}),KISSY.add("login/havana/havanalogin",function(a){var b=function(c){return this instanceof b?(c=c||{},this.vstUrl=c.vstUrl,this.token=c.token,this.applyStUrl=c.applyStUrl,this.miniLoginCheckUrl=c.miniLoginCheckUrl,this.vstData={site:c.site},this.token&&(this.vstData.token=c.token),this.vstParams=a.isArray(c.vstParams)?c.vstParams:null,this.success=a.isFunction(c.success)?c.success:null,this.error=a.isFunction(c.error)?c.error:null,void this._init()):new b(c)};return a.augment(b,{_init:function(){},login:function(b){b=b||{},b.token&&(this.token=this.vstData.token=b.token),this.success=a.isFunction(b.success)?b.success:this.success,this.error=a.isFunction(b.error)?b.error:this.error,(this.success||this.error)&&this._getST()},_login:function(){if(this.vstUrl){var b=this;a.io({url:this.vstUrl,dataType:"jsonp",cache:!1,scriptCharset:"utf-8",timeout:5,data:{st:this.st,params:this._params()},complete:function(c){return c&&c.data&&c.data.url?(window._goldlog_submit_&&window._goldlog_submit_(a.now()),void(b.success&&b.success({url:c.data.url,top:!!c.data.script}))):void(b.error&&b.error(c))}})}},_getST:function(){var b=this;this.getSTURL=this.token?this.applyStUrl:this.miniLoginCheckUrl;var c="stCallback"+a.guid(),d=a.merge(this.vstData,{callback:c}),e=this.getSTURL+(this.getSTURL.indexOf("?")>0?"&":"?")+a.param(d);window[c]=function(a){return b["CALLBACKED_"+c]?void 0:(b["CALLBACKED_"+c]=!0,a&&200===a.code&&a.data&&a.data.st?(b.st=a.data.st,void(b.vstUrl?b._login():b.success&&b.success())):void(b.error&&b.error(a)))},a.getScript(e,{charset:"utf-8",timeout:1,success:function(d){a.log(d),a.later(function(){!b["CALLBACKED_"+c]&&b.error&&(a.log("getscript error"),b["CALLBACKED_"+c]=!0,b.error(d))},100)},error:function(a){b["CALLBACKED_"+c]||(b["CALLBACKED_"+c]=!0,b.error&&b.error(a))}})},_params:function(){if(!this.vstParams||!this.vstParams.length)return"";var b={};return a.each(this.vstParams,function(c){var d=a.one(c);if(d){var e=d.attr("name");if(e){var f="TPL_redirect_url"===e||"allp"===e?window.encodeURIComponent(d.val()):d.val();b[e]=f}}}),a.param(b)}}),b}),KISSY.add("login/page",function(a,b,c){var d={cfg:{defaultView:"static"},init:function(a){this.initialize(a)},initialize:function(d){d&&(this.cfg=a.merge(this.cfg,d));var e=this;this.message=c();var f=b(e.cfg);d.disableQuickLogin?(f.switchTo(d.defaultView),window._submit_t_&&window._lgst_&&(window._submit_t_.loading=a.now())):a.use("login/sso/index",function(a,b){b(a.merge(e.cfg,{callback:function(b){if(!f.ssoTimeout){switch(b=b||{},b.stat){case"ready":f.switchTo("sso");break;case"nouser":case"loginfail":case"loginerror":f.switchTo(d.defaultView)}window._submit_t_&&window._lgst_&&(window._submit_t_.loading=a.now())}}}))});var g;a.use("login/nsso",function(a,b){g=b.Static(a.merge(e.cfg,{message:e.message})),b.Dynamic(a.merge(e.cfg,{message:e.message})),f.on("switch",function(a){e.message.reset(),"static"===a.module&&g.refreshEdit()})});var h;d.enableQRCode?a.use("login/qrcode/app2web",function(a,b){b(e.cfg).on("beforeSwitch",function(a){"qrcode"===a.mod&&(h=g.password.safeon)&&g.password.hideEdit()}).on("afterSwitch",function(b){"login"===b.mod&&h&&a.later(function(){g.password.showEdit()},500)})}):a.all(".taobao-box").css({"margin-top":10,"padding-top":0})}};return d},{requires:["login/switcher","login/message"]}),KISSY.use("node, ua",function(a){var b=a.one,c=(a.all,a.unparam(window.location.search.slice(1))),d={elLoginBox:b("#J_LoginBox"),elStaticForm:b("#J_StaticForm"),staticFormAction:b("#J_StaticForm")&&b("#J_StaticForm").attr("action")||"",elUserName:b("#TPL_username_1"),elPassword:b("#TPL_password_1"),elPasswordRSA:b("#TPL_password_2"),elEditChk:b("#J_SafeLoginCheck"),elCheckCode:b("#J_CodeInput_i"),elCheckCodeImg:b("#J_StandardCode_m"),elCheckCodeImgHandler:b("#J_StandardCode"),elDynamicForm:b("#J_DynamicForm"),dynamicFormAction:b("#J_DynamicForm")&&b("#J_DynamicForm").attr("action")||"",elMobile:b("#J_TPL_mobile_1"),elMobilePwd:b("#J_TPL_PhoneCode_1"),elSSOBox:b("#J_QuickLogin"),bMini:c&&c.style?!!c.style.match(/^(?:mini|b2b)/):!1,from:b("#J_From")?b("#J_From").val():"",bCBU:"3"===(a.one("#J_loginsite")?a.one("#J_loginsite").val():""),bDaily:window.location.host.indexOf("daily.taobao.net")>=0?!0:!1,bHttps:"https:"===window.location.protocol,havanaToken:a.all("#J_HToken").val()},e=window.loginConfig,f=window.havanaConfig||{};if(f.havanaEnable=!!f.enable,e||f){d.elPassword.val("");var g=window.location.hostname.split(".").slice(-2).join(".");-1!==g.indexOf("taobao")&&(document.domain=g);var h=location.protocol;if("http:"===h){var i=location.href;i=location.href.replace("http","https"),location.href=i}a.use("login/page",function(a,b){b.init(a.merge(e,f,d))})}}),KISSY.ready(function(a){window._submit_t_={},window._lgrt_=a.now(),KISSY.use("node, event",function(a){a.one(window).on("load",function(){window._lglt_=a.now()})}),window._goldlog_submit_=function(b){var c=a.unparam(window.location.search.slice(1)),d=c&&c.style?c.style.match(/^(?:mini|b2b)/):"";d=d?d[0]:"full";var e=window.goldlog,f=window._lgst_,g=window._lgrt_,h=window._lglt_,i=window._submit_t_,j=window._log_submitted_;if(!j&&b&&e&&e.emit&&f&&g&&h&&i.t1&&i.t2&&i.loading){if(1!==Math.floor(50*Math.random())&&!c.glog)return;var k=i.t2-f,l=g-f;if(b-=f,k>=6e5||b>=6e5||l>=6e5)return;window._log_submitted_=!0;var m={t0:f,rt:l,lt:h-f,t1:i.t1,t2:k,t3:b,l:i.loading-f,s:d};i.ww&&(m.w=i.ww),i.havana&&(m.h=i.havana),e.emit("tbloginact2",m)}}}),function(a){var b=a.unparam(window.location.search.slice(1)),c=window.location.host.indexOf("daily.taobao.net")>=0?!0:!1,d=b&&b.style?!!b.style.match(/^(?:mini|b2b)/):!1;if(d&&b.tmall_assets_version&&b.need_tmall_js&&"true"===b.need_tmall_js){var e=c?"https://assets.daily.taobao.net/g":"https://s.tbcdn.cn/g";a.getScript(e+"/tm/login/"+b.tmall_assets_version+"/tmall.js")}}(KISSY);
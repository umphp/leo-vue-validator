webpackJsonp([2,0],{0:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=r(115),s=a(n),o=r(113),i=a(o);new s.default({el:"#app",render:function(e){return e(i.default)},components:{app:i.default}})},54:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){setTimeout(function(){alert((0,o.default)(e,null,4))})}Object.defineProperty(t,"__esModule",{value:!0});var s=r(59),o=a(s),i=r(57),u=a(i);t.default={name:"app",components:{"leo-validator":u.default},data:function(){return{form1:[{key:"formKey1",value:"",rules:[{rule:"required",tip:"请输入活动名称"},{rule:"isCode",tip:"邮政编码不正确（leo）"}],state:0,msg:""},{key:"formKey2",value:"wahahha",rules:function(e,t,r,a){r.msg="loading",setTimeout(function(){a(function(e,t,r){r.state=1,r.msg="成功"})},1e3)},state:0,msg:""}],form2:[{key:"form2Item1",value:"",rules:[{rule:"required",tip:"不能为空"},{rule:"isPhone",tip:"手机号码格式不对"}],state:0,msg:""},{key:"form2Item2",value:"",state:0,msg:""},{key:"form2Item3",value:{user:"leo",password:""},rules:[{rule:function(e,t,r,a,n){return""===e.user?(r.msg="user不能为空",r.state=2,void a()):(r.msg="user验证中",void setTimeout(function(){a(function(e,t,r){e.user.length>6?(r.state=2,r.msg="user不正确"):(r.state=1,r.msg="user验证成功")})},1e3))}},{rule:function(e,t,r,a,n){r.msg="password验证中",setTimeout(function(){a(function(e,t,r){123456==e.password?(r.state=1,r.msg="password验证成功"):(r.state=2,r.msg="password不正确")})},1e3)}}],state:0,msg:"",deep:!0},{key:"form2Item4",value:["leo","leoWa"],rules:[{rule:function(e,t,r,a,n){return""===e[0]||""===e[1]?(r.msg="input都不能为空",r.state=2,void a()):(r.state=3,r.msg="验证中",void(r.timerId=setTimeout(function(){r.timerId=null,a(function(e,t,r){e[0]==e[1]?(r.state=1,r.msg=""):(r.state=2,r.msg="第一项和第二项不相等")})},300)))}}],resetCb:function(e,t){e.timerId&&(clearTimeout(e.timerId),e.timerId=null)},state:0,msg:""}],tagOptions1:{class:"form1",style:{paddingLeft:"10px"}},tagOptions2:{class:{form2:!0},style:{paddingLeft:"10px"}}}},methods:{initForm1:function(){this.$refs.leoForm1.initForm()},initForm:function(){this.$refs.leoForm.initForm()},reset1:function(){this.$refs.leoForm1.resetFields()},submit1:function(e){this.$refs.leoForm1.validate(e).then(function(e){n(e)}).catch(function(e){n(e)}),console.log(this.$refs.leoForm1.getFormData())},reset:function(){this.$refs.leoForm.resetFields()},submit:function(e){this.$refs.leoForm.validate(e).then(function(e){n(e)}).catch(function(e){n(e)}),console.log(this.$refs.leoForm.getFormData())},add:function(){this.form1.push({key:"formKey"+(this.form1.length+1),value:"",rules:[{rule:function(e,t,r,a){"leo好帅"===e?(r.state=1,r.msg=""):(r.state=2,r.msg="请输入leo好帅"),a()}}],state:0,msg:""})},deleteItem:function(e){this.$refs.leoForm.removeField(e)},deleteItem1:function(e){var t=this.form1,r=t.indexOf(e);r>-1&&t.splice(r,1)}}}},55:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=/^1[3|4|5|7|8][0-9]{9}$/,a=/^\w{6,16}$/,n=/^[1-9]\d{5}$/;t.ruleFn={isPhone:function(e,t,a,n){var s="手机号码格式不对";r.test(e)?(a.state=1,a.msg=""):(a.state=2,a.msg=t.tip?t.tip:s),n()},isCode:function(e,t,r,a){var s="邮政编码不正确";n.test(e)?(r.state=1,r.msg=""):(r.state=2,r.msg=t.tip?t.tip:s),a()},password:function(e,t,r){var n="密码6-16位";a.test(e)?(r.state=1,r.msg=""):(r.state=2,r.msg=t.tip?t.tip:n),cb()},required:function(e,t,r,a){var n="必填!";e?(r.state=1,r.msg=""):(r.state=2,r.msg=t.tip?t.tip:n),a()},isPositive:function(e,t,r,a){var n="大于0!";e>0?(r.state=1,r.msg=""):(r.state=2,r.msg=t.tip?t.tip:n),a()},right:function(e,t,r,a){var n="正确!";e===!0?(r.state=1,r.msg=""):(r.state=2,r.msg=t.tip?t.tip:n),a()}}},56:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){return null==e?String(e):l[f.call(e)]||"object"}function s(){var e=void 0,t=void 0,r=void 0,a=void 0,o=void 0,i=void 0,l=arguments[0]||{},f=1,c=arguments.length,m=!1;for("boolean"==typeof l&&(m=l,l=arguments[f]||{},f++),"object"!==("undefined"==typeof l?"undefined":(0,u.default)(l))&&"function"!==n(l)&&(l={}),f===c&&(l=this,f--);f<c;f++)if(null!=(e=arguments[f]))for(t in e)r=l[t],a=e[t],l!==a&&(m&&a&&("object"===n(a)||(o=Array.isArray(a)))?(o?(o=!1,i=r&&Array.isArray(r)?r:[]):i=r&&"object"===n(r)?r:{},l[t]=s(m,i,a)):void 0!==a&&(l[t]=a));return l}function o(e){return!(!e||!e.then||"function"!==n(e.then))}Object.defineProperty(t,"__esModule",{value:!0});var i=r(39),u=a(i);t.type=n,t.extend=s,t.isPromise=o;var l={};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function(e){l["[object "+e+"]"]=e.toLowerCase()});var f=Object.prototype.toString},57:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(38),s=a(n),o=r(66),i=a(o),u=r(65),l=a(u),f=r(37),c=a(f),m=r(63),d=a(m),v=r(39),p=a(v),h=r(36),g=a(h),y=r(61),_=a(y),b=r(64),F=a(b),x=r(56),w=r(55);t.default={name:"leo-validator",render:function(e){var t=this.tagOptions||null;return e(this.tag||"span",(0,F.default)({},t),this.$slots.default||[])},data:function(){return(0,_.default)({initFormsData:{}})},props:{forms:{type:Array,required:!0,default:function(){return[]}},tag:{type:String,default:"span"},tagOptions:{type:Object}},watch:{forms:function(e,t){if(this.leoFormInit){if(e.length<this.leoFormLength&&!this.isLeoValidatorRemove)throw new Error("必须使用removeField删除！");this.initForms(),this.addAllWatch(),this.leoFormLength=e.length,this.isLeoValidatorRemove=!1}}},destroyed:function(){this.removeAllWatch()},methods:{initForm:function(){this.leoFormInit||(this.initForms(),this.addAllWatch(),this.leoFormInit=!0,this.leoFormLength=this.forms.length,this.isLeoValidatorRemove=!1)},getFormData:function(){var e={},t=this.forms,r=!0,a=!1,n=void 0;try{for(var s,o=(0,g.default)(t);!(r=(s=o.next()).done);r=!0){var i=s.value;e[i.key]=this.getItemValue(i.value)}}catch(e){a=!0,n=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw n}}return e},addAllWatch:function(){var e=this;this.forms.forEach(function(t,r){t.__unwatch&&t.__unwatch(),t.__unwatch=e.$watch("forms."+r+".value",function(r,a){t.__enable&&e.validateField(t)},{deep:!!t.deep})})},getItemValue:function(e){if("object"!==("undefined"==typeof e?"undefined":(0,p.default)(e)))return e;var t=Array.isArray(e)?[]:{};return(0,x.extend)(!0,t,e)},setItemValue:function(e,t){var r=e.value;"object"!==("undefined"==typeof r?"undefined":(0,p.default)(r))?e.value=t:(0,x.extend)(!0,r,t)},initForms:function(){var e=this,t=this.initFormsData;this.forms.forEach(function(r,a){var n=t[r.key];n?(r.__enable=!1,e.$nextTick(function(){r.__enable=!0})):(t[r.key]={value:e.getItemValue(r.value),msg:r.msg},r.__enable=!0,r.state=0,r.__promiseHash={})})},resetFields:function(){var e=this;if(!this.leoFormInit)throw new Error("请初始化");var t=this.initFormsData;this.forms.forEach(function(r,a){var n=t[r.key];n&&(r.__enable=!1,e.setItemValue(r,n.value),r.msg=n.msg,e.$nextTick(function(){r.__enable=!0})),r.state=0,r.__promiseHash={},"function"===(0,x.type)(r.resetCb)&&r.resetCb(r,a)})},removeAllWatch:function(){this.forms.forEach(function(e,t){e.__unwatch&&e.__unwatch(),e.__promiseHash=null})},removeField:function(e){var t=this,r=Array.isArray(e)?e:[e];r.forEach(function(e){var r=t.forms,a=r.indexOf(e);a>-1&&(e.__unwatch&&e.__unwatch(),r.splice(a,1),e.__promiseHash=null,delete t.initFormsData[e.key])}),this.isLeoValidatorRemove=!0},validate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";return(0,d.default)(i.default.mark(function r(){var a,n,s,o,u,f,m,d,v,p;return i.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e.leoFormInit){r.next=2;break}return r.abrupt("return",new c.default(function(e,t){t("请初始化")}));case 2:a=e.forms,n={valid:!0,msgs:[],form:{}},r.prev=4,s=!0,o=!1,u=void 0,r.prev=8,f=(0,g.default)(a.entries());case 10:if(s=(m=f.next()).done){r.next=21;break}return d=(0,l.default)(m.value,2),v=d[0],p=d[1],r.next=14,e.validateField(p);case 14:if(p.state>1&&(n.valid=!1,n.msgs.push(p.msg)),n.form[p.key]={value:e.getItemValue(p.value),msg:p.msg,state:p.state,index:v},"first"!==t||2!=p.state){r.next=18;break}return r.abrupt("return",n);case 18:s=!0,r.next=10;break;case 21:r.next=27;break;case 23:r.prev=23,r.t0=r.catch(8),o=!0,u=r.t0;case 27:r.prev=27,r.prev=28,!s&&f.return&&f.return();case 30:if(r.prev=30,!o){r.next=33;break}throw u;case 33:return r.finish(30);case 34:return r.finish(27);case 35:r.next=40;break;case 37:return r.prev=37,r.t1=r.catch(4),r.abrupt("return",{info:r.t1,result:n});case 40:return r.abrupt("return",n);case 41:case"end":return r.stop()}},r,e,[[4,37],[8,23,27,35],[28,,30,34]])}))()},validateOne:function(e,t,r){var a=void 0;if("function"===(0,x.type)(t))a=t;else{var n=void 0;t.rule&&(n=t.rule),"string"==typeof n&&"function"==typeof w.ruleFn[n]?a=w.ruleFn[n]:"function"===(0,x.type)(n)&&(a=n)}if(a)return new c.default(function(n,o){var i=void 0;e.__promiseHash&&(i=(0,s.default)(),e.__promiseHash[i]=!0),e.state=3,a(e.value,t,e,function(a){e.__promiseHash&&e.__promiseHash[i]?(a&&a(e.value,t,e,r),delete e.__promiseHash[i],n()):o("reset中断"),i=null},r)})},validateField:function(e){var t=this;return(0,d.default)(i.default.mark(function r(){var a,n,s;return i.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(3!==e.state){r.next=2;break}return r.abrupt("return");case 2:if(a=e.rules){r.next=5;break}return r.abrupt("return");case 5:if(!Array.isArray(a)){r.next=19;break}if(n=a.length,0!==n){r.next=9;break}return r.abrupt("return");case 9:s=0;case 10:if(!(s<n)){r.next=18;break}return r.next=13,t.validateOne(e,a[s],s);case 13:if(1==e.state){r.next=15;break}return r.abrupt("return");case 15:s++,r.next=10;break;case 18:return r.abrupt("return");case 19:return r.abrupt("return",t.validateOne(e,a));case 20:case"end":return r.stop()}},r,t)}))()}}}},109:function(e,t){},113:function(e,t,r){var a,n;r(109),a=r(54);var s=r(114);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=a},114:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{attrs:{id:"app"}},[t("h1",["\n        leo-vue-validator例子\n    "])," ",t("h3",["\n        注意事项：必须先点击初始化按钮或者调用(initForm接口)才能验证\n    "])," ",t("h3",["\n        状态参数（state）： 0: 没有验证过, 1: 通过, 2: 不通过, 3: 验证中\n    "])," ",t("h3",["\n        自定义回调：\n        1.必须要设置item.state = 1才能验证下面的事项\n        2.必须调用回调参数cb()验证才开始\n    "])," ",t("h3",["\n        改变forms中value的值 都会进行验证\n    "])," ",t("leo-validator",{ref:"leoForm",attrs:{forms:e.form1,tag:"div",tagOptions:e.tagOptions1}},[t("h1",["表单1(动态添加表单)"])," ",t("ul",{staticClass:"MoUpFlo_Module MoUpFlo_enterInfo"},[e._l(e.form1,function(r,a){return t("li",{staticClass:"clearfix"},[t("label",[t("span",["item"+e._s(a)+": "])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:r.value,expression:"item.value"}],staticClass:"infoVal",attrs:{type:"text"},domProps:{value:e._s(r.value)},on:{input:function(e){e.target.composing||(r.value=e.target.value)}}})])," ",t("div",[t("button",{on:{click:function(t){e.deleteItem(r)}}},["删除"])," ",t("button",{on:{click:function(t){e.deleteItem1(r)}}},["删除(不使用removeField 报错,初始化后）)"])])," ",t("p",["状态："+e._s(r.state)+"    提示："+e._s(r.msg)])])})])," ",t("button",{on:{click:e.initForm}},["初始化"])," ",t("button",{on:{click:e.add}},["添加"])," ",t("button",{on:{click:e.reset}},["重置"])," ",t("div",[t("button",{on:{click:function(t){e.submit("all")}}},["提交(全部验证)"])," ",t("button",{on:{click:function(t){e.submit("first")}}},["提交（验证到第一个错误项）"])])])," ",t("leo-validator",{ref:"leoForm1",attrs:{forms:e.form2,tag:"div",tagOptions:e.tagOptions2}},[t("h1",["表单2"])," ",t("ul",[t("li",{staticClass:"clearfix"},[t("label",[t("span",["没有验证 : "])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.form2[1].value,expression:"form2[1]['value']"}],staticClass:"infoVal",attrs:{type:"text"},domProps:{value:e._s(e.form2[1].value)},on:{input:function(t){if(!t.target.composing){var r=e.form2[1],a="value";Array.isArray(r)?r.splice(a,1,t.target.value):e.form2[1].value=t.target.value}}}})])," ",t("p",["状态："+e._s(e.form2[1].state)+"    提示："+e._s(e.form2[1].msg)])])," ",t("li",{staticClass:"clearfix"},[t("label",[t("span",["手机号 : "])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.form2[0].value,expression:"form2[0]['value']"}],staticClass:"infoVal",attrs:{type:"text"},domProps:{value:e._s(e.form2[0].value)},on:{input:function(t){if(!t.target.composing){var r=e.form2[0],a="value";Array.isArray(r)?r.splice(a,1,t.target.value):e.form2[0].value=t.target.value}}}})])," ",t("p",["状态："+e._s(e.form2[0].state)+"    提示："+e._s(e.form2[0].msg)])])," ",t("li",{staticClass:"clearfix"},[t("label",[t("span",["异步验证整组验证 : "])," ",t("p",["（obj形式 失去焦点验证 password: 123456）"])," ",t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.form2[2].value.user,expression:"form2[2]['value']['user']",modifiers:{lazy:!0}}],staticClass:"infoVal",attrs:{placeholder:"user",type:"text",disabled:3==e.form2[2].state},domProps:{value:e._s(e.form2[2].value.user)},on:{change:function(t){var r=e.form2[2].value,a="user";Array.isArray(r)?r.splice(a,1,t.target.value):e.form2[2].value.user=t.target.value}}})," ",t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.form2[2].value.password,expression:"form2[2]['value']['password']",modifiers:{lazy:!0}}],staticClass:"infoVal",attrs:{placeholder:"password",type:"text",disabled:3==e.form2[2].state},domProps:{value:e._s(e.form2[2].value.password)},on:{change:function(t){var r=e.form2[2].value,a="password";Array.isArray(r)?r.splice(a,1,t.target.value):e.form2[2].value.password=t.target.value}}})])," ",t("p",["状态："+e._s(e.form2[2].state)+"    提示："+e._s(e.form2[2].msg)])])," ",t("li",{staticClass:"clearfix"},[t("label",[t("span",["异步验证整组验证（array形式 失去焦点验证） : "])," ",t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.form2[3].value[0],expression:"form2[3].value[0]",modifiers:{lazy:!0}}],staticClass:"infoVal",attrs:{type:"text",disabled:3==e.form2[3].state},domProps:{value:e._s(e.form2[3].value[0])},on:{change:function(t){var r=e.form2[3].value,a=0;Array.isArray(r)?r.splice(a,1,t.target.value):e.form2[3].value[0]=t.target.value}}})," ",t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.form2[3].value[1],expression:"form2[3].value[1]",modifiers:{lazy:!0}}],staticClass:"infoVal",attrs:{type:"text",disabled:3==e.form2[3].state},domProps:{value:e._s(e.form2[3].value[1])},on:{change:function(t){var r=e.form2[3].value,a=1;Array.isArray(r)?r.splice(a,1,t.target.value):e.form2[3].value[1]=t.target.value}}})])," ",t("p",["状态："+e._s(e.form2[3].state)+"    提示："+e._s(e.form2[3].msg)])])])," ",t("button",{on:{click:e.initForm1}},["初始化"])," ",t("button",{on:{click:e.reset1}},["重置"])," ",t("div",[t("button",{on:{click:function(t){e.submit1("all")}}},["提交(全部验证)"])," ",t("button",{on:{click:function(t){e.submit1("first")}}},["提交（验证到第一个错误项）"])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=app.10772ce41e2c99a250b8.js.map
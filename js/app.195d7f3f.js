(function(e){function t(t){for(var r,u,c=t[0],o=t[1],s=t[2],d=0,f=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&f.push(i[u][0]),i[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},i={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/SimonTheGam/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"028b":function(e,t,n){},2065:function(e,t,n){var r={"./0.ogg":"d0da","./1.ogg":"4fe8","./2.ogg":"a84a","./3.ogg":"6f0d"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="2065"},"20a7":function(e,t,n){},"292c":function(e,t,n){"use strict";n("028b")},"3b4b":function(e,t,n){"use strict";n("4e2c")},"46a5":function(e,t,n){},"4e2c":function(e,t,n){},"4fe8":function(e,t,n){e.exports=n.p+"media/1.63d780a9.ogg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function i(e,t,n,i,a,u){var c=Object(r["j"])("SimonTheGame");return Object(r["i"])(),Object(r["b"])(c)}var a={class:"container"},u=Object(r["e"])("h1",null,"Simon The Game",-1),c={class:"content"};function o(e,t,n,i,o,s){var l=Object(r["j"])("Notification"),d=Object(r["j"])("GamePanel"),f=Object(r["j"])("GameOptions");return Object(r["i"])(),Object(r["d"])("div",a,[u,Object(r["g"])(l,{show:o.showNotification,onCloseNotification:t[0]||(t[0]=function(e){return o.showNotification=e}),round:o.endRound},null,8,["show","round"]),Object(r["e"])("div",c,[Object(r["g"])(d,{ref:"GamePanel",timeInterval:o.timeInterval,onFinishGame:s.finishGame},null,8,["timeInterval","onFinishGame"]),Object(r["g"])(f,{onStart:s.startGame,onChangeLevel:t[1]||(t[1]=function(e){return o.timeInterval=e})},null,8,["onStart"])])])}var s={key:0,class:"notification"},l=Object(r["f"])(" Игра окончена! "),d=Object(r["e"])("br",null,null,-1);function f(e,t,n,i,a,u){return n.show?(Object(r["i"])(),Object(r["d"])("div",s,[Object(r["e"])("span",{class:"close-button",onClick:t[0]||(t[0]=function(){return u.clickClose&&u.clickClose.apply(u,arguments)})},"×"),Object(r["e"])("p",null,[l,d,Object(r["f"])(" Ты дошёл до "+Object(r["k"])(n.round)+" раунда. ",1)])])):Object(r["c"])("",!0)}n("a9e3");var b={props:{round:{type:Number,default:1},show:{type:Boolean,default:!1}},data:function(){return{}},methods:{clickClose:function(){this.$emit("closeNotification",!1)}}};n("5d50");b.render=f;var m=b,h={class:"game-panel"},v={class:"half"},p={class:"half"},O={class:"center"},j=Object(r["e"])("p",{class:"game-name"},"Simon",-1),g={class:"game-round"};function Q(e,t,n,i,a,u){var c=Object(r["j"])("Quarter");return Object(r["i"])(),Object(r["d"])("div",h,[Object(r["e"])("div",v,[Object(r["g"])(c,{numberQuarter:0,numberActive:a.activeQuarter,isQuarterDisabled:a.isQuartersDisabled,onClickQuarter:u.clickQuarter},null,8,["numberActive","isQuarterDisabled","onClickQuarter"]),Object(r["g"])(c,{numberQuarter:1,numberActive:a.activeQuarter,isQuarterDisabled:a.isQuartersDisabled,onClickQuarter:u.clickQuarter},null,8,["numberActive","isQuarterDisabled","onClickQuarter"])]),Object(r["e"])("div",p,[Object(r["g"])(c,{numberQuarter:2,numberActive:a.activeQuarter,isQuarterDisabled:a.isQuartersDisabled,onClickQuarter:u.clickQuarter},null,8,["numberActive","isQuarterDisabled","onClickQuarter"]),Object(r["g"])(c,{numberQuarter:3,numberActive:a.activeQuarter,isQuarterDisabled:a.isQuartersDisabled,onClickQuarter:u.clickQuarter},null,8,["numberActive","isQuarterDisabled","onClickQuarter"])]),Object(r["e"])("div",O,[j,Object(r["e"])("p",g,"Раунд "+Object(r["k"])(a.round),1)])])}var w=n("b85c"),y=n("1da1");n("d3b7"),n("96cf");function k(e,t,n,i,a,u){return Object(r["i"])(),Object(r["d"])("div",null,[Object(r["e"])("div",{class:Object(r["h"])(["quarter",[a.quarters[n.numberQuarter],u.active,u.disabled]]),onClick:t[0]||(t[0]=function(){return u.clickQuarter&&u.clickQuarter.apply(u,arguments)})},null,2)])}var C={props:{isQuarterDisabled:{type:Boolean,default:!0},numberActive:{type:Number},numberQuarter:{type:Number}},data:function(){return{quarters:["top-left-quarter","top-rigth-quarter","bottom-left-quarter","bottom-rigth-quarter"]}},computed:{active:function(){return this.numberQuarter==this.numberActive?"quarter_active":""},disabled:function(){return this.isQuarterDisabled?"quarter_disabled":""}},watch:{numberActive:function(e){this.numberQuarter==e&&this.playSound()}},methods:{clickQuarter:function(){this.isQuarterDisabled||(this.playSound(),this.$emit("clickQuarter",this.numberQuarter))},playSound:function(){var e=n("2065")("./".concat(this.numberQuarter,".ogg")),t=new Audio(e);t.play().catch((function(e){console.error(e)}))}}};n("ee87");C.render=k;var x=C,D={components:{Quarter:x},props:{timeInterval:{default:1500}},data:function(){return{activeQuarter:-1,isQuartersDisabled:!0,round:0,sequence:[],remainingClics:0,timeoutBetweenShows:200,timeoutBetweenRounds:1e3}},methods:{startGame:function(){this.isQuartersDisabled=!0,this.round=1,this.sequence=[],this.showSequence()},showSequence:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.randomQuarter(4),e.sequence.push(n),e.remainingClics=e.sequence.length,r=Object(w["a"])(e.sequence),t.prev=4,r.s();case 6:if((i=r.n()).done){t.next=15;break}return a=i.value,t.next=10,e.makeActive(a);case 10:if(!(e.sequence.indexOf(a)+1<e.sequence.length)){t.next=13;break}return t.next=13,e.addTimeout(e.timeoutBetweenShows);case 13:t.next=6;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](4),r.e(t.t0);case 20:return t.prev=20,r.f(),t.finish(20);case 23:e.isQuartersDisabled=!1;case 24:case"end":return t.stop()}}),t,null,[[4,17,20,23]])})))()},randomQuarter:function(e){var t=Math.random()*e;return Math.floor(t)},makeActive:function(e){var t=this;return new Promise((function(n){console.log(e),t.activeQuarter=e,setTimeout(Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.activeQuarter=-1,n();case 2:case"end":return e.stop()}}),e)}))),t.timeInterval-t.timeoutBetweenShows)}))},addTimeout:function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},clickQuarter:function(e){this.sequence[this.sequence.length-this.remainingClics]===e?(this.remainingClics--,this.remainingClics||this.startNextRound()):this.finishGame()},startNextRound:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isQuartersDisabled=!0,e.round++,t.next=4,e.addTimeout(e.timeoutBetweenRounds);case 4:e.showSequence();case 5:case"end":return t.stop()}}),t)})))()},finishGame:function(){this.isQuartersDisabled=!0,this.$emit("finishGame",this.round),this.round=0,this.sequence=[],this.showNotification=!0}}};n("c7da");D.render=Q;var q=D,G={class:"game-option"},S=Object(r["e"])("h2",null,"Уровень сложности:",-1);function N(e,t,n,i,a,u){var c=Object(r["j"])("RadioButtonDifficultyLevel");return Object(r["i"])(),Object(r["d"])("div",G,[S,Object(r["g"])(c,{onChangeLevel:u.changeLevel},null,8,["onChangeLevel"]),Object(r["e"])("button",{class:"start-button",onClick:t[0]||(t[0]=function(){return u.start&&u.start.apply(u,arguments)})},"Старт")])}var A=Object(r["e"])("label",null,"Легкий",-1),I=Object(r["e"])("label",null,"Средний",-1),R=Object(r["e"])("label",null,"Сложный",-1);function P(e,t,n,i,a,u){return Object(r["i"])(),Object(r["d"])("div",null,[Object(r["e"])("div",null,[Object(r["m"])(Object(r["e"])("input",{type:"radio",name:"difficulty-level",value:"1500","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.timeInterval=e}),onChange:t[1]||(t[1]=function(){return u.change&&u.change.apply(u,arguments)})},null,544),[[r["l"],a.timeInterval]]),A]),Object(r["e"])("div",null,[Object(r["m"])(Object(r["e"])("input",{type:"radio",name:"difficulty-level",value:"1000","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.timeInterval=e}),onChange:t[3]||(t[3]=function(){return u.change&&u.change.apply(u,arguments)})},null,544),[[r["l"],a.timeInterval]]),I]),Object(r["e"])("div",null,[Object(r["m"])(Object(r["e"])("input",{type:"radio",name:"difficulty-level",value:"400","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.timeInterval=e}),onChange:t[5]||(t[5]=function(){return u.change&&u.change.apply(u,arguments)})},null,544),[[r["l"],a.timeInterval]]),R])])}var T={data:function(){return{timeInterval:1500}},methods:{change:function(){this.$emit("changeLevel",this.timeInterval)}}};T.render=P;var L=T,_={components:{RadioButtonDifficultyLevel:L},methods:{start:function(){this.$emit("start")},changeLevel:function(e){this.$emit("changeLevel",e)}}};n("3b4b");_.render=N;var B=_,M={components:{Notification:m,GamePanel:q,GameOptions:B},data:function(){return{timeInterval:1500,endRound:1,showNotification:!1}},methods:{startGame:function(){this.showNotification=!1,this.$refs.GamePanel.startGame()},finishGame:function(e){this.endRound=e,this.showNotification=!0}}};n("292c");M.render=o;var $=M,U={name:"App",components:{SimonTheGame:$}};n("d838");U.render=i;var F=U;Object(r["a"])(F).mount("#app")},"5d50":function(e,t,n){"use strict";n("da80")},6419:function(e,t,n){},"6f0d":function(e,t,n){e.exports=n.p+"media/3.ab928396.ogg"},a84a:function(e,t,n){e.exports=n.p+"media/2.7d29331d.ogg"},c7da:function(e,t,n){"use strict";n("46a5")},d0da:function(e,t,n){e.exports=n.p+"media/0.76fd3fb8.ogg"},d838:function(e,t,n){"use strict";n("6419")},da80:function(e,t,n){},ee87:function(e,t,n){"use strict";n("20a7")}});
//# sourceMappingURL=app.195d7f3f.js.map
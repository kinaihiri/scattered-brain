parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
mport,PlayFabClient,PlayFab,from;var e=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},t=function(){if(window.localStorage&&window.localStorage.GUID)return window.localStorage.GUID;var t=e();return window.localStorage&&(window.localStorage.GUID=t),t};window.setupPlayfab=function(e,a,n){var o=function(e){var t={};return e.forEach(function(e){t[e]=n.variables[e]}),t},i=t();PlayFab.settings.titleId=e,PlayFabClient.LoginWithCustomID({TitleId:PlayFab.settings.titleId,CustomId:i,CreateAccount:!0},function(e,t){e?console.log("Login error",e):(console.log(t.data),l(a))});var l=function(e){n.on("forward",function(t){PlayFabClient.WritePlayerEvent({EventName:"passage_loaded",Body:{Passage:t,State:o(e)},Timestamp:new Date}),PlayFabClient.WritePlayerEvent({EventName:"passage_loaded_"+t.replace(/\W/gi,"_"),Body:{Passage:t,State:o(e)},Timestamp:new Date}),console.log("History event!",t)}),$(document).on("click","tw-link",function(t){console.log("Tracking link click event: '"+t.target.innerText+"'"),PlayFabClient.WritePlayerEvent({EventName:"link_clicked",Body:{Text:t.target.innerText,State:o(e)},Timestamp:new Date}),PlayFabClient.WritePlayerEvent({EventName:"link_clicked_"+t.target.innerText.replace(/\W/gi,"_"),Body:{Text:t.target.innerText,State:o(e)},Timestamp:new Date})}),window.addEventListener("beforeunload",function(t){console.log("Tracking browser close with passage "+n.passage),PlayFabClient.WritePlayerEvent({EventName:"game_closed",Body:{Passage:n.passage,State:o(e)},Timestamp:new Date})})}};
},{}]},{},["QCba"], null)
//# sourceMappingURL=/index.js.map
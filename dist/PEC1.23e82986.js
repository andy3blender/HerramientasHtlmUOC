parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var t=document.getElementById("button-prev"),e=document.getElementById("button-next"),o=document.getElementById("track"),n=document.getElementById("tarjeta-list"),l=document.querySelectorAll(".tarjeta"),i=l[0].offsetWidth;function f(t){var e=o.offsetWidth,l=n.offsetWidth;""==o.style.left?leftPosition=o.style.left=0:leftPosition=parseFloat(-1*o.style.left.slice(0,-2)),leftPosition<e-l&&2==t?o.style.left="".concat(-1*(leftPosition+i),"px"):leftPosition>0&&1==t&&(o.style.left="".concat(-1*(leftPosition-i),"px"))}t.onclick=function(){return f(1)},e.onclick=function(){return f(2)};
},{}]},{},["Focm"], null)
//# sourceMappingURL=/PEC1.23e82986.js.map
(function(e){function t(t){for(var n,o,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==i[u]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Ricerca..."},domProps:{value:e.query},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.ricerca()},input:function(t){t.target.composing||(e.query=t.target.value)}}}),r("button",{on:{click:function(t){return e.ricerca()}}},[e._v("cerca")]),r("div")]),r("div",[r("ul",[e._l(e.movies,(function(t,n){return r("li",{key:n},[r("h3",[e._v("film")]),e._v(" "+e._s(t.title)+" "),r("br"),e._v(" "+e._s(t.original_title)+" "),r("br"),r("img",{attrs:{src:e.flags(t.original_language),alt:t.original_language}}),e._v(" "),r("br"),e._v(" "+e._s(t.vote_average)+" ")])})),e._l(e.series,(function(t,n){return r("li",{key:n},[r("h3",[e._v("serie")]),e._v(" "+e._s(t.name)+" "),r("br"),e._v(" "+e._s(t.original_name)+" "),r("br"),r("img",{attrs:{src:e.flags(t.original_language),alt:t.original_language}}),e._v(" "),r("br"),e._v(" "+e._s(t.vote_average)+" ")])}))],2)])])},a=[],o=r("bc3a"),c=r.n(o),u={name:"App",components:{},data:function(){return{apiUrl:"https://api.themoviedb.org/3",apiKey:"9caf6d244b3195b2f3c44cba59c630ef",movies:[],series:[],query:""}},methods:{media:function(e,t,r){var n=this;c.a.get(this.apiUrl+e,{params:{api_key:this.apiKey,query:t}}).then((function(e){n[r]=e.data.results}))},ricerca:function(){this.media("/search/movie",this.query,"movies"),this.media("/search/tv",this.query,"series")},flags:function(e){switch(e){case"en":return"https://flagcdn.com/256x192/gb.png";case"it":return"https://flagcdn.com/256x192/it.png";case"fr":return"https://flagcdn.com/256x192/fr.png";case"es":return"https://flagcdn.com/256x192/es.png";case"de":return"https://flagcdn.com/256x192/de.png";default:return"https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"}}},mounted:function(){}},s=u,l=(r("5c0b"),r("2877")),p=Object(l["a"])(s,i,a,!1,null,null,null),f=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.05f2957b.js.map
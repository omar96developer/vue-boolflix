(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);f&&f(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Main")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid search_bar"},[a("div",{staticClass:"container "},[a("div",{staticClass:"row d-flex search_title"},[t._m(0),a("div",{staticClass:"col-6 d-flex search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Ricerca..."},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ricerca()},input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("button",{on:{click:function(e){return t.ricerca()}}},[t._v("Cerca")])])])])]),a("div",{staticClass:"container-fluid media_container"},[a("div",{staticClass:"container "},[a("div",{staticClass:"row d-flex flex-column"},[a("div",{staticClass:"col mt-5"},[a("h1",[t._v("Film")]),a("ul",{staticClass:"media d-flex pt-4 pb-3"},t._l(t.movies,(function(t,e){return a("Film",{key:e,attrs:{movieInfo:t}})})),1)]),a("div",{staticClass:"col mt-5"},[a("h1",[t._v("Serie")]),a("ul",{staticClass:"media d-flex pt-4 pb-3"},t._l(t.series,(function(t,e){return a("Serie",{key:e,attrs:{serieInfo:t}})})),1)])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 "},[a("h1",[t._v("BOOLFLIX")])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"media_card "},[a("img",{attrs:{src:t.imgPath,alt:"#"}}),a("div",{staticClass:"text p-4 border"},[a("h4",{staticClass:"mb-5"},[t._v(t._s(t.movieInfo.title))]),a("p",{staticClass:"mb-3"},[a("strong",[t._v("Titolo Originale: ")]),t._v(t._s(t.movieInfo.original_title))]),a("img",{staticClass:"mb-3",staticStyle:{height:"30px",width:"50px"},attrs:{src:t.flags(t.movieInfo.original_language),alt:t.movieInfo.original_language}}),a("div",{staticClass:"stars "},[a("i",{staticClass:"fa fa-star s1",class:this.avv>=1?"active":""}),a("i",{staticClass:"fa fa-star s2",class:this.avv>=2?"active":""}),a("i",{staticClass:"fa fa-star s3",class:this.avv>=3?"active":""}),a("i",{staticClass:"fa fa-star s4",class:this.avv>=4?"active":""}),a("i",{staticClass:"fa fa-star s5",class:this.avv>=5?"active":""})]),a("p",{staticClass:"trama"},[a("strong",{staticStyle:{"font-size":"25px"}},[t._v("Trama: ")]),a("br"),t._v(t._s(t.movieInfo.overview))])])])},l=[],f={name:"Film",props:{movieInfo:Array},data:function(){return{avv:Math.ceil(this.movieInfo.vote_average/2)}},methods:{flags:function(t){switch(t){case"en":return"https://flagcdn.com/256x192/gb.png";case"it":return"https://flagcdn.com/256x192/it.png";case"fr":return"https://flagcdn.com/256x192/fr.png";case"es":return"https://flagcdn.com/256x192/es.png";case"de":return"https://flagcdn.com/256x192/de.png";default:return"https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"}}},computed:{imgPath:function(){var t="https://image.tmdb.org/t/p/",e="w342";return this.movieInfo.poster_path?t+e+this.movieInfo.poster_path:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"}}},u=f,p=a("2877"),d=Object(p["a"])(u,o,l,!1,null,null,null),v=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"media_card "},[a("img",{attrs:{src:t.imgPath,alt:"#"}}),a("div",{staticClass:"text p-4 border"},[a("h4",{staticClass:"mb-5"},[t._v(t._s(t.serieInfo.name))]),a("p",{staticClass:"mb-3"},[a("strong",[t._v("Titolo Originale: ")]),t._v(t._s(t.serieInfo.original_name))]),a("img",{staticClass:"mb-3",staticStyle:{height:"30px",width:"30px"},attrs:{src:t.flags(t.serieInfo.original_language),alt:t.serieInfo.original_language}}),a("div",{staticClass:"stars "},[a("i",{staticClass:"fa fa-star s1",class:this.avv>=1?"active":""}),a("i",{staticClass:"fa fa-star s2",class:this.avv>=2?"active":""}),a("i",{staticClass:"fa fa-star s3",class:this.avv>=3?"active":""}),a("i",{staticClass:"fa fa-star s4",class:this.avv>=4?"active":""}),a("i",{staticClass:"fa fa-star s5",class:this.avv>=5?"active":""})]),a("p",{staticClass:"trama"},[a("strong",{staticStyle:{"font-size":"25px"}},[t._v("Trama: ")]),a("br"),t._v(t._s(t.serieInfo.overview))])])])},g=[],h={name:"Serie",props:{serieInfo:Array},data:function(){return{avv:Math.ceil(this.serieInfo.vote_average/2)}},methods:{flags:function(t){switch(t){case"en":return"https://flagcdn.com/256x192/gb.png";case"it":return"https://flagcdn.com/256x192/it.png";case"fr":return"https://flagcdn.com/256x192/fr.png";case"es":return"https://flagcdn.com/256x192/es.png";case"de":return"https://flagcdn.com/256x192/de.png";default:return"https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"}}},computed:{imgPath:function(){var t="https://image.tmdb.org/t/p/",e="w342";return this.serieInfo.poster_path?t+e+this.serieInfo.poster_path:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"}}},_=h,b=Object(p["a"])(_,m,g,!1,null,null,null),y=b.exports,x=a("bc3a"),C=a.n(x),w={name:"Main",components:{Film:v,Serie:y},data:function(){return{apiUrl:"https://api.themoviedb.org/3",apiKey:"9caf6d244b3195b2f3c44cba59c630ef",movies:[],series:[],query:""}},methods:{media:function(t,e,a){var s=this;C.a.get(this.apiUrl+t,{params:{api_key:this.apiKey,query:e}}).then((function(t){s[a]=t.data.results}))},ricerca:function(){this.media("/search/movie",this.query,"movies"),this.media("/search/tv",this.query,"series"),this.query=""},flags:function(t){switch(t){case"en":return"https://flagcdn.com/256x192/gb.png";case"it":return"https://flagcdn.com/256x192/it.png";case"fr":return"https://flagcdn.com/256x192/fr.png";case"es":return"https://flagcdn.com/256x192/es.png";case"de":return"https://flagcdn.com/256x192/de.png";default:return"https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"}}}},k=w,I=Object(p["a"])(k,n,c,!1,null,null,null),O=I.exports,M={name:"App",components:{Main:O}},j=M,S=(a("5c0b"),Object(p["a"])(j,i,r,!1,null,null,null)),P=S.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.312f6c3f.js.map
/*! For license information please see ab44d520.b177a1a3.js.LICENSE.txt */
(self.webpackChunkroboapex_github_io=self.webpackChunkroboapex_github_io||[]).push([[272],{8212:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),o=n(1952);const r="main_N1th";function i(e){let{children:t,title:n,noPadding:i=!1}=e;return a.createElement(o.Z,{title:n},a.createElement("main",{className:r,style:i?{padding:0}:void 0},t))}},5932:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var a=n(7294),o=n(8575),r=n(6742),i=n(6010),c=n(4491);const s="logo_O74Z",l="row_nnnt",m="cards_CHxM",u="card_PrPt",p="image_zISK",g="details_lKat";function h(e){var t,n;let{achievementCompetition:o,year:h}=e;const d=c.$[o.code];return console.log(o),a.createElement("div",{className:l},a.createElement("div",{className:g},a.createElement("img",{src:"https://raw.githubusercontent.com/roboapex/roboapex.github.io/main/data/competitions/"+o.code+"_"+o.region+".png",onError:e=>{e.target.src="https://cataas.com/cat/cute"},alt:d.regions[o.region].name+"'s Logo'",title:d.regions[o.region].name,className:s}),a.createElement("h2",null,d.regions[o.region].name," ",h),a.createElement("p",null,o.desc),a.createElement(r.Z,{href:null!=(t=d.regions[o.region].website)?t:""},"Visit Website")),a.createElement("div",{className:m},o.awards.map(((e,t)=>{var n,o,r,c,s,l,m,g,h;return a.createElement("div",{key:t,className:(0,i.Z)("card",u)},a.createElement("div",{className:"card__image"},a.createElement("img",{className:p,src:null!=(n=null==(o=e.media)||null==(r=o[0])?void 0:r.url)?n:"https://cataas.com/cat/cute",alt:null!=(c=null==(s=e.media)||null==(l=s[0])?void 0:l.caption)?c:"cute cat because we got no image :>",title:null!=(m=null==(g=e.media)||null==(h=g[0])?void 0:h.caption)?m:"cute cat because we got no image :>"})),a.createElement("div",{className:"card__body"},a.createElement("h3",null,a.createElement("i",{color:"#f2ba2c",className:"fas fa-trophy"})," ",e.title),a.createElement("p",{style:{marginTop:-10,fontSize:15}},e.category),a.createElement("b",{style:{fontSize:15}},e.recipients.join(" | "))))})),null==(n=o.media)?void 0:n.map(((e,t)=>{return a.createElement("img",{key:t,src:(n=e.url,n.startsWith("http")?n:"https://raw.githubusercontent.com/roboapex/roboapex.github.io/main/data/achievements/"+h.toString()+"/"+o.code+"/"+n),alt:e.caption,title:e.caption});var n}))))}n(5449);var d=n(5977);const f="flex_btRQ",b="icon_9zK0";function v(e){let{achievements:t,onUpdate:n}=e;const o=(0,d.TH)(),r=new URLSearchParams(o.search),[s,l]=(0,a.useState)({year:r.get("year"),comp:r.get("comp")});return(0,a.useEffect)((()=>{r.set("year",s.year),null===s.year&&r.delete("year"),r.set("comp",s.comp),null===s.comp&&r.delete("comp"),history.pushState(null,"",window.location.pathname+(r.toString()?"?":"")+r.toString()),console.log(s),n(s)}),[s]),a.createElement("div",{className:f},a.createElement("i",{className:(0,i.Z)("fas fa-filter",b)}),a.createElement("div",{className:"dropdown dropdown--hoverable"},a.createElement("button",{className:"button button--"+(s.year?"primary":"link")},s.year||"Year"),a.createElement("ul",{className:"dropdown__menu"},a.createElement("li",null,a.createElement("a",{className:"dropdown__link",href:"javascript:void(0)",onClick:()=>l((e=>({...e,year:null})))},"None")),null==t?void 0:t.map(((e,t)=>a.createElement("li",{key:t},a.createElement("a",{className:"dropdown__link",href:"javascript:void(0)",onClick:()=>l((t=>({...t,year:e.year.toString()})))},e.year)))))),a.createElement("div",{className:"dropdown dropdown--hoverable"},a.createElement("button",{className:"button button--"+(s.comp?"primary":"link")},s.comp||"Competition"),a.createElement("ul",{className:"dropdown__menu"},a.createElement("li",null,a.createElement("a",{className:"dropdown__link",href:"javascript:void(0)",onClick:()=>l((e=>({...e,comp:null})))},"None")),Object.entries(c.$).map(((e,t)=>a.createElement("li",{key:t},a.createElement("a",{className:"dropdown__link",href:"javascript:void(0)",onClick:()=>l((t=>({...t,comp:e[0]})))},e[1].name)))))))}var y=n(8212);const w="awards_RBl7",_="yearHeader_BOrC";function E(){const e=S(),[t,n]=(0,a.useState)([]),[o,r]=(0,a.useState)();return(0,a.useEffect)((()=>{null!=o&&o.year||null!=o&&o.comp?n(null==e?void 0:e.map((e=>({...e,competitions:e.competitions.filter((t=>!(null!=o&&o.year&&(null==e?void 0:e.year.toString())!==o.year||null!=o&&o.comp&&(null==t?void 0:t.code)!==o.comp)))}))).filter((e=>e.competitions.length>0))):n(e)}),[e.length,o]),a.createElement(y.Z,{title:"Achievements"},a.createElement(v,{achievements:e,onUpdate:e=>r(e)}),a.createElement("div",{className:w},null==t?void 0:t.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement("h1",{className:_},e.year),e.competitions.map(((t,n)=>a.createElement(h,{achievementCompetition:t,key:""+t.code+e.year+n,year:e.year}))))))))}const S=()=>{const{data:e}=(0,o.ZP)("https://api.github.com/repos/roboapex/roboapex.github.io/contents/data/achievements/achievements.json");return e?JSON.parse(atob(null==e?void 0:e.content)):[]}},4491:(e,t,n)=>{"use strict";n.d(t,{$:()=>a});const a={nrc:{categories:{reg:"Regular",open:"Open",fe:"Future Engineer"},regions:{sg:{name:"National Robotics Competition (Singapore)",website:"https://ducklearning.com/pages/nrc-sg"}}},robocup:{categories:{rescue:"RCJ Rescue Line"},regions:{sg:{name:"Robocup Singapore Open",website:"https://robocupsg.org/en/singaporeopen"},aptji:{name:"RoboCup Asia-Pacific Tianjin"},icool:{name:"International CoSpace OnLine (iCooL) Challenge @Virtual RoboCup",website:"https://robocupap.org/icool2020/"}}},fll:{categories:{challenge:"Challenge"},regions:{sg:{name:"First LEGO League",website:"https://www.firstlegoleague.org/"}}},ide:{categories:{robotics:"IDE Robotics",mechwars:"IDE Mech Wars",sprint:"IDE Sprint"},regions:{sg:{name:"IDE (Innovation, Design and Engineering) Series",website:"https://ideseries.org/"}}},apyrc:{categories:{},regions:{sg:{name:"Asia Pacific Youth Robotics Competition",website:"https://apyrc.com/"}}},vex:{categories:{},regions:{sg:{name:"Singapore VEX Robotics Competition"},ap:{name:"Asia-Pacific VEX Robotics Championship"},world:{name:"VEX Robotics World Championship"}}},bullseye:{categories:{},regions:{sg:{name:"Bull\u2019s Eye Competition",website:"https://victoria.moe.edu.sg/bulls-eye-competition/"}}},roborave:{categories:{},regions:{kaga:{name:"RoboRave Kaga Japan",website:"https://www.roborave-kaga.com/"},int:{name:"RoboRave International",website:"http://roborave.itccc.org.cn/"}}},makex:{categories:{},regions:{sg:{name:"MakeX Robotics Competition Singapore",website:"https://www.makexsg.com/"},world:{name:"",website:"https://www.makex.cc/en"}}}}},5449:function(e,t,n){!function(e){"use strict";var t,n=function(){try{if(e.URLSearchParams&&"bar"===new e.URLSearchParams("foo=bar").get("foo"))return e.URLSearchParams}catch(t){}return null}(),a=n&&"a=1"===new n({a:1}).toString(),o=n&&"+"===new n("s=%2B").get("s"),r=!n||((t=new n).append("s"," &"),"s=+%26"===t.toString()),i=m.prototype,c=!(!e.Symbol||!e.Symbol.iterator);if(!(n&&a&&o&&r)){var s;i.append=function(e,t){d(this.__URLSearchParams__,e,t)},i.delete=function(e){delete this.__URLSearchParams__[e]},i.get=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e][0]:null},i.getAll=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e].slice(0):[]},i.has=function(e){return b(this.__URLSearchParams__,e)},i.set=function(e,t){this.__URLSearchParams__[e]=[""+t]},i.toString=function(){var e,t,n,a,o=this.__URLSearchParams__,r=[];for(t in o)for(n=u(t),e=0,a=o[t];e<a.length;e++)r.push(n+"="+u(a[e]));return r.join("&")},!!o&&n&&!a&&e.Proxy?(s=new Proxy(n,{construct:function(e,t){return new e(new m(t[0]).toString())}})).toString=Function.prototype.toString.bind(m):s=m,Object.defineProperty(e,"URLSearchParams",{value:s});var l=e.URLSearchParams.prototype;l.polyfill=!0,l.forEach=l.forEach||function(e,t){var n=h(this.toString());Object.getOwnPropertyNames(n).forEach((function(a){n[a].forEach((function(n){e.call(t,n,a,this)}),this)}),this)},l.sort=l.sort||function(){var e,t,n,a=h(this.toString()),o=[];for(e in a)o.push(e);for(o.sort(),t=0;t<o.length;t++)this.delete(o[t]);for(t=0;t<o.length;t++){var r=o[t],i=a[r];for(n=0;n<i.length;n++)this.append(r,i[n])}},l.keys=l.keys||function(){var e=[];return this.forEach((function(t,n){e.push(n)})),g(e)},l.values=l.values||function(){var e=[];return this.forEach((function(t){e.push(t)})),g(e)},l.entries=l.entries||function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),g(e)},c&&(l[e.Symbol.iterator]=l[e.Symbol.iterator]||l.entries)}function m(e){((e=e||"")instanceof URLSearchParams||e instanceof m)&&(e=e.toString()),this.__URLSearchParams__=h(e)}function u(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,(function(e){return t[e]}))}function p(e){return e.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,(function(e){return decodeURIComponent(e)}))}function g(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c&&(n[e.Symbol.iterator]=function(){return n}),n}function h(e){var t={};if("object"==typeof e)if(f(e))for(var n=0;n<e.length;n++){var a=e[n];if(!f(a)||2!==a.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");d(t,a[0],a[1])}else for(var o in e)e.hasOwnProperty(o)&&d(t,o,e[o]);else{0===e.indexOf("?")&&(e=e.slice(1));for(var r=e.split("&"),i=0;i<r.length;i++){var c=r[i],s=c.indexOf("=");-1<s?d(t,p(c.slice(0,s)),p(c.slice(s+1))):c&&d(t,p(c),"")}}return t}function d(e,t,n){var a="string"==typeof n?n:null!=n&&"function"==typeof n.toString?n.toString():JSON.stringify(n);b(e,t)?e[t].push(a):e[t]=[a]}function f(e){return!!e&&"[object Array]"===Object.prototype.toString.call(e)}function b(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(void 0!==n.g?n.g:"undefined"!=typeof window?window:this)}}]);
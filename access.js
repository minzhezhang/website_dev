!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){(function(t){"use strict";var n=r(1),o=r(4);t.ssAccess=e.exports={};var i="";"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var c=function(e,t,r,n){var o=new Date((new Date).getTime()+1e3*r),i=e+"="+encodeURIComponent(t)+";expires="+o.toGMTString()+";domain="+n+";path=/";document.cookie=i},s=function(e){for(var t=document.cookie.split(";"),r=0;r<t.length;r++)if(t[r]=t[r].trim(),t[r]=t[r].split("="),t[r][0]===e)return t[r][1];return void 0};ssAccess.log=function(e,t){if(e=e||{},!navigator.userAgent.match(/spider/i)&&!navigator.userAgent.match(/bot/i)){var r={};r.url=location.href,r.user_id=e.userId||0,r.event_type=e.eventType||"鐢ㄦ埛璁块棶",r.event_desc=e.eventDesc,r.event_detail=e.eventDetail,r.event_amount=e.eventAmount,r.site=e.site||i||location.hostname,r.model=e.model||0,r.devEnv=e.devEnv===!0?!0:void 0;var a=e.detailedInfo||e.additionalInfo;a&&(r.detailed_info=JSON.stringify(a));var u=n.parse(location.search.substr(1)),f={};try{f=JSON.parse(decodeURIComponent(s("cpsInfo")))}catch(m){}var p=f.cookie_id&&f.hmsr?f:{cookie_id:f.cookie_id||o.v1(),first_time:f.first_time||new Date,hmsr:u.hmsr||u.utm_source,hmmd:u.hmmd||u.utm_medium,hmpl:u.hmpl||u.utm_campaign,hmkw:u.hmkw||u.utm_term,hmci:u.hmci||u.utm_content};r.cookie_id=p.cookie_id,r.first_time=p.first_time,r.hmsr=p.hmsr,r.hmci=p.hmci,r.hmkw=p.hmkw,r.hmpl=p.hmpl,r.hmmd=p.hmmd;for(var d in r)r[d]&&(r[d]=encodeURIComponent(r[d]));if(f.cookie_id&&f.hmsr||c("cpsInfo",JSON.stringify(p),2592e3,".smartstudy.com"),!t){var l=document.createElement("script");l.setAttribute("src","http://data.smartstudy.com/client/access?"+n.stringify(r)+"&_="+Math.random()),document.body.appendChild(l)}}},ssAccess.setSite=function(e){i=e},ssAccess.setupCookie=function(){ssAccess.log(void 0,!0)}}).call(t,function(){return this}())},function(e,t,r){"use strict";t.decode=t.parse=r(2),t.encode=t.stringify=r(3)},function(e,t){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,o,i){t=t||"&",o=o||"=";var c={};if("string"!=typeof e||0===e.length)return c;var s=/\+/g;e=e.split(t);var a=1e3;i&&"number"==typeof i.maxKeys&&(a=i.maxKeys);var u=e.length;a>0&&u>a&&(u=a);for(var f=0;u>f;++f){var m,p,d,l,v=e[f].replace(s,"%20"),h=v.indexOf(o);h>=0?(m=v.substr(0,h),p=v.substr(h+1)):(m=v,p=""),d=decodeURIComponent(m),l=decodeURIComponent(p),r(c,d)?n(c[d])?c[d].push(l):c[d]=[c[d],l]:c[d]=l}return c};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t){"use strict";function r(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,c,s){return t=t||"&",c=c||"=",null===e&&(e=void 0),"object"==typeof e?r(i(e),function(i){var s=encodeURIComponent(n(i))+c;return o(e[i])?r(e[i],function(e){return s+encodeURIComponent(n(e))}).join(t):s+encodeURIComponent(n(e[i]))}).join(t):s?encodeURIComponent(n(s))+c+encodeURIComponent(n(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},function(e,t,r){var n;(function(){function o(e,t,r){var n=t&&r||0,o=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){16>o&&(t[n+o++]=h[e])});16>o;)t[n+o++]=0;return t}function i(e,t){var r=t||0,n=v;return n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]}function c(e,t,r){var n=t&&r||0,o=t||[];e=e||{};var c=null!=e.clockseq?e.clockseq:b,s=null!=e.msecs?e.msecs:(new Date).getTime(),a=null!=e.nsecs?e.nsecs:k+1,u=s-A+(a-k)/1e4;if(0>u&&null==e.clockseq&&(c=c+1&16383),(0>u||s>A)&&null==e.nsecs&&(a=0),a>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");A=s,k=a,b=c,s+=122192928e5;var f=(1e4*(268435455&s)+a)%4294967296;o[n++]=f>>>24&255,o[n++]=f>>>16&255,o[n++]=f>>>8&255,o[n++]=255&f;var m=s/4294967296*1e4&268435455;o[n++]=m>>>8&255,o[n++]=255&m,o[n++]=m>>>24&15|16,o[n++]=m>>>16&255,o[n++]=c>>>8|128,o[n++]=255&c;for(var p=e.node||_,d=0;6>d;d++)o[n+d]=p[d];return t?t:i(o)}function s(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"==e?new l(16):null,e=null),e=e||{};var o=e.random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var c=0;16>c;c++)t[n+c]=o[c];return t||i(o)}var a,u=this;if("function"==typeof u.require)try{var f=u.require("crypto").randomBytes;a=f&&function(){return f(16)}}catch(m){}if(!a&&u.crypto&&crypto.getRandomValues){var p=new Uint8Array(16);a=function(){return crypto.getRandomValues(p),p}}if(!a){var d=new Array(16);a=function(){for(var e,t=0;16>t;t++)0===(3&t)&&(e=4294967296*Math.random()),d[t]=e>>>((3&t)<<3)&255;return d}}for(var l="function"==typeof u.Buffer?u.Buffer:Array,v=[],h={},y=0;256>y;y++)v[y]=(y+256).toString(16).substr(1),h[v[y]]=y;var g=a(),_=[1|g[0],g[1],g[2],g[3],g[4],g[5]],b=16383&(g[6]<<8|g[7]),A=0,k=0,w=s;if(w.v1=c,w.v4=s,w.parse=o,w.unparse=i,w.BufferClass=l,"undefined"!=typeof e&&e.exports)e.exports=w;else{n=function(){return w}.call(t,r,t,e),!(void 0!==n&&(e.exports=n))}}).call(this)}]);

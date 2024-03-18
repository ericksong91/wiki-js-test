/*! Wiki.js - wiki.js.org - Licensed under AGPL */!function(e){function t(t){for(var o,i,c=t[0],s=t[1],u=t[2],l=t[3]||[],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(m&&m(t),d.push.apply(d,l);p.length;)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=r[0]))}return 0===a.length&&(d.forEach((function(e){if(void 0===n[e]){n[e]=null;var t=document.createElement("link");t.crossOrigin="use-credentials",s.nc&&t.setAttribute("nonce",s.nc),t.rel="prefetch",t.as="script",t.href=c(e),document.head.appendChild(t)}})),d.length=0),e}var o={},i={runtime:0},n={runtime:0},a=[],d=[];function c(e){return s.p+"js/"+({mdi:"mdi",tags:"tags",vendor:"vendor",admin:"admin",comments:"comments",editor:"editor",history:"history",login:"login",profile:"profile",source:"source",theme0:"theme0","ui-extra":"ui-extra","editor-api":"editor-api","editor-asciidoc":"editor-asciidoc","editor-ckeditor":"editor-ckeditor","editor-conflict":"editor-conflict","editor-markdown":"editor-markdown"}[e]||e)+".js?1706490487"}function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[];i[e]?t.push(i[e]):0!==i[e]&&{mdi:1,tags:1,vendor:1,admin:1,comments:1,editor:1,history:1,login:1,profile:1,source:1,theme0:1,"ui-extra":1,"editor-api":1,"editor-asciidoc":1,"editor-ckeditor":1,"editor-conflict":1,"editor-markdown":1}[e]&&t.push(i[e]=new Promise((function(t,r){for(var o="css/"+({mdi:"mdi",tags:"tags",vendor:"vendor",admin:"admin",comments:"comments",editor:"editor",history:"history",login:"login",profile:"profile",source:"source",theme0:"theme0","ui-extra":"ui-extra","editor-api":"editor-api","editor-asciidoc":"editor-asciidoc","editor-ckeditor":"editor-ckeditor","editor-conflict":"editor-conflict","editor-markdown":"editor-markdown"}[e]||e)+"."+{mdi:"ad9d067665721699a5d0",tags:"14faa4a8e49318062718",vendor:"dc45a6eafe7b55d7f398",admin:"cd68353ebddb3eb4a9d8",comments:"8c9f15ef9f00699a88c6",editor:"2b33e02bc72303c912e2",history:"2c85c290043f5e6d0eb3",login:"7cbc30b8f0904a3c4e17",profile:"99150e7d12f25fb0b4ac",source:"2f98b18fe830c82ac836",theme0:"e76d18dec927495d0965","ui-extra":"988fe5cd9a7f2a904451","editor-api":"e0de73903cec3003f237","editor-asciidoc":"ee02f656021a86057e3a","editor-ckeditor":"919f574a5dfb186a4949","editor-conflict":"f860346541d91a375138","editor-markdown":"ef49cae566e6a361666a"}[e]+".css",n=s.p+o,a=document.getElementsByTagName("link"),d=0;d<a.length;d++){var c=(l=a[d]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===o||c===n))return t()}var u=document.getElementsByTagName("style");for(d=0;d<u.length;d++){var l;if((c=(l=u[d]).getAttribute("data-href"))===o||c===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||n,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[e],f.parentNode.removeChild(f),r(a)},f.href=n,0!==f.href.indexOf(window.location.origin+"/")&&(f.crossOrigin="use-credentials"),document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){i[e]=0})));var r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var a,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e),0!==d.src.indexOf(window.location.origin+"/")&&(d.crossOrigin="use-credentials");var u=new Error;a=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}n[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:d})}),12e4);d.onerror=d.onload=a,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/_assets/",s.oe=function(e){throw console.error(e),e};var u=this.webpackJsonp=this.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=l;r()}([]);
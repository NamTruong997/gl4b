(this["webpackJsonpgameloft-forbrands"]=this["webpackJsonpgameloft-forbrands"]||[]).push([[10],{255:function(e,n,a){"use strict";var t=a(13),l=a(267),r=a(0),o=a.n(r),c=function(e,n){var a=Object(r.useState)(),l=Object(t.a)(a,2),o=l[0],c=l[1],i=n||{},s=i.once,u=i.root,d=i.rootMargin,m=i.threshold;return Object(r.useEffect)((function(){var n="string"==typeof e?document.querySelector(e):null===e||void 0===e?void 0:e.current;if(n&&window.IntersectionObserver){var a=new window.IntersectionObserver((function(e){c(e[0]),s&&e[0].isIntersecting&&a.disconnect()}),{root:u,rootMargin:d,threshold:m});return a.observe(n),function(){return a.disconnect()}}}),[e,s,u,d,m]),{inview:!!(null===o||void 0===o?void 0:o.isIntersecting),entry:o}},i=(a(262),o.a.forwardRef((function(e,n){var a=e.className,t=(e.preview,e.src),i=e.loadType,u=e.load,d=e.onLoaded,m=e.onLoadProp,v=e.id,f=Object(l.a)(e,["className","preview","src","loadType","load","onLoaded","onLoadProp","id"]);i=i||"inview";var b=Object(r.useRef)(null),p=c("inview"===i?b:null,{once:!0}).inview,E=!0;"inview"===i?E=p:"manual"===i&&(E=u||!1);var g=s(t,E),w=g.loading,h=g.src;Object(r.useEffect)((function(){w||null===d||void 0===d||d()}),[w,d]);return w&&e.preview?o.a.cloneElement(e.preview,{className:a,ref:b}):o.a.createElement("img",Object.assign({ref:function(e){b.current=e,n&&("function"===typeof n?n(e):n.current=e)},className:"lazy-image ".concat(a||""," lazy-image--").concat(w?"loading":"loaded"),src:h,alt:e.alt,style:{transition:"filter 0.5s linear",filter:"".concat(w?"blur(30px)":""),transform:"".concat(w?"scale(1.1)":"")},id:v,onLoad:m},f))}))),s=(n.a=i,function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Object(r.useState)(!0),l=Object(t.a)(a,2),o=l[0],c=l[1],i=Object(r.useRef)(!1);Object(r.useEffect)((function(){c(!0),i.current=!1}),[e]),n=n&&!i.current,Object(r.useEffect)((function(){if(n){c(!0);var a=new Image;return a.onload=function(){i.current=!0,c(!1)},a.src=e,function(){a.onload=null}}}),[e,n]);var s=n||i.current?e:"";return{src:s,loading:o}})},261:function(e,n,a){"use strict";var t=a(255),l=a(0),r=a.n(l),o=a(32),c=(a(263),a(257));n.a=function(e){Object(l.useEffect)((function(){new c.WOW({live:!1}).init()}),[]);var n=a(258),i=Object(o.c)("intro");return r.a.createElement("section",Object.assign({className:"com-introduce ",id:"introduce"},e),r.a.createElement("div",{className:"wrapper-video"},(null===i||void 0===i?void 0:i.visual)&&("true"===e.ishomepage?i.visual.mimeType.includes("video")?r.a.createElement("video",{src:i.visual.url,loop:!0,autoPlay:!0,muted:!0}):r.a.createElement("div",{className:"div-bg"},r.a.createElement(t.a,{className:"lazaImg-abs",src:i.visual.url})):i.visual.mimeType.includes("video")?r.a.createElement("video",{src:i.visual.url,loop:!0,autoPlay:!0,muted:!0}):r.a.createElement(t.a,{className:"img-bg",src:i.visual.url,alt:""}))),r.a.createElement("div",{className:"wrapper-content"},"true"===e.ishomepage&&(null===i||void 0===i?void 0:i.logo)&&r.a.createElement(t.a,{src:i.logo.url,alt:"logo"}),r.a.createElement("div",{className:"".concat("true"===e.ishomepage?"":"top"," block-content")},r.a.createElement("div",{className:"first-content "},r.a.createElement("h2",{className:"title wow fadeInUp"},null===i||void 0===i?void 0:i.label.intro),r.a.createElement("div",{className:"content wow fadeInUp","data-wow-delay":"0.2s"},(null===i||void 0===i?void 0:i.label.quote)&&n(i.label.quote))))),"true"===e.scrollable&&r.a.createElement("div",{className:"block-scroll1"},r.a.createElement("div",{className:"hr-scroll"}),r.a.createElement("div",{className:"bounceScroll"},null===i||void 0===i?void 0:i.label.scroll)))}},262:function(e,n,a){},263:function(e,n,a){},276:function(e,n){},277:function(e,n){},355:function(e,n,a){},382:function(e,n,a){"use strict";a.r(n);var t=a(261),l=a(0),r=a.n(l),o=a(32),c=(a(355),r.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(16)]).then(a.bind(null,270))}))),i=r.a.lazy((function(){return Promise.all([a.e(3),a.e(13)]).then(a.bind(null,293))})),s=r.a.lazy((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,303))})),u=r.a.lazy((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,286))})),d=r.a.lazy((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,289))})),m=r.a.lazy((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,291))}));n.default=function(){return Object(o.d)("home","/api/page/en/home?includeBaseData=1"),r.a.createElement(l.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("div",{className:"com-home animated fadeIn"},r.a.createElement(t.a,{ishomepage:"true",scrollable:"true"}),r.a.createElement(c,null),r.a.createElement(i,null),r.a.createElement(s,{showArrow:!1,keyIndex:null}),r.a.createElement(u,null),r.a.createElement(d,null),r.a.createElement(m,null)))}}}]);
//# sourceMappingURL=10.9be9d816.chunk.js.map
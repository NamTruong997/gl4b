(this["webpackJsonpgameloft-forbrands"]=this["webpackJsonpgameloft-forbrands"]||[]).push([[8,16],{259:function(e,t,a){"use strict";var n=a(18),c=a(271),o=a(0),l=a.n(o),i=function(e,t){var a=Object(o.useState)(),c=Object(n.a)(a,2),l=c[0],i=c[1],r=t||{},s=r.once,u=r.root,d=r.rootMargin,m=r.threshold;return Object(o.useEffect)((function(){var t="string"==typeof e?document.querySelector(e):null===e||void 0===e?void 0:e.current;if(t&&window.IntersectionObserver){var a=new window.IntersectionObserver((function(e){i(e[0]),s&&e[0].isIntersecting&&a.disconnect()}),{root:u,rootMargin:d,threshold:m});return a.observe(t),function(){return a.disconnect()}}}),[e,s,u,d,m]),{inview:!!(null===l||void 0===l?void 0:l.isIntersecting),entry:l}},r=(a(265),l.a.forwardRef((function(e,t){var a=e.className,n=(e.preview,e.src),r=e.loadType,u=e.load,d=e.onLoaded,m=e.onLoadProp,f=e.id,v=Object(c.a)(e,["className","preview","src","loadType","load","onLoaded","onLoadProp","id"]);r=r||"inview";var p=Object(o.useRef)(null),E=i("inview"===r?p:null,{once:!0}).inview,b=!0;"inview"===r?b=E:"manual"===r&&(b=u||!1);var g=s(n,b),N=g.loading,w=g.src;Object(o.useEffect)((function(){N||null===d||void 0===d||d()}),[N,d]);return N&&e.preview?l.a.cloneElement(e.preview,{className:a,ref:p}):l.a.createElement("img",Object.assign({ref:function(e){p.current=e,t&&("function"===typeof t?t(e):t.current=e)},className:"lazy-image ".concat(a||""," lazy-image--").concat(N?"loading":"loaded"),src:w,alt:e.alt,style:{transition:"filter 0.5s linear",filter:"".concat(N?"blur(30px)":""),transform:"".concat(N?"scale(1.1)":"")},id:f,onLoad:m},v))}))),s=(t.a=r,function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Object(o.useState)(!0),c=Object(n.a)(a,2),l=c[0],i=c[1],r=Object(o.useRef)(!1);Object(o.useEffect)((function(){i(!0),r.current=!1}),[e]),t=t&&!r.current,Object(o.useEffect)((function(){if(t){i(!0);var a=new Image;return a.onload=function(){r.current=!0,i(!1)},a.src=e,function(){a.onload=null}}}),[e,t]);var s=t||r.current?e:"";return{src:s,loading:l}})},265:function(e,t,a){},266:function(e,t,a){},268:function(e,t,a){"use strict";var n=a(259),c=a(0),o=a.n(c),l=a(14),i=a(33),r=a(74),s=(a(266),a(261));t.a=function(e){Object(c.useEffect)((function(){new s.WOW({live:!1}).init()}),[]);var t=a(262),u=Object(i.c)("intro"),d=Object(l.b)();return Object(c.useEffect)((function(){d({type:r.a.SHOW_SPINNER})}),[d]),Object(c.useEffect)((function(){u&&setTimeout((function(){d({type:r.a.HIDE_SPINNER})}),500)}),[d,u]),o.a.createElement("section",Object.assign({className:"com-introduce ",id:"introduce"},e),o.a.createElement("div",{className:"wrapper-video"},(null===u||void 0===u?void 0:u.visual)&&("true"===e.ishomepage?u.visual.mimeType.includes("video")?o.a.createElement("video",{src:u.visual.url,loop:!0,autoPlay:!0,muted:!0}):o.a.createElement("div",{className:"div-bg"},o.a.createElement(n.a,{className:"lazaImg-abs",src:u.visual.url})):u.visual.mimeType.includes("video")?o.a.createElement("video",{src:u.visual.url,loop:!0,autoPlay:!0,muted:!0}):o.a.createElement(n.a,{className:"img-bg",src:u.visual.url,alt:""}))),o.a.createElement("div",{className:"wrapper-content"},"true"===e.ishomepage&&(null===u||void 0===u?void 0:u.logo)&&o.a.createElement(n.a,{src:u.logo.url,alt:"logo"}),o.a.createElement("div",{className:"".concat("true"===e.ishomepage?"":"top"," block-content")},o.a.createElement("div",{className:"first-content "},o.a.createElement("h2",{className:"title wow fadeInUp"},null===u||void 0===u?void 0:u.label.intro),o.a.createElement("div",{className:"content wow fadeInUp","data-wow-delay":"0.2s"},(null===u||void 0===u?void 0:u.label.quote)&&t(u.label.quote))))),"true"===e.scrollable&&o.a.createElement("div",{className:"block-scroll1"},o.a.createElement("div",{className:"hr-scroll"}),o.a.createElement("div",{className:"bounceScroll"},null===u||void 0===u?void 0:u.label.scroll)))}},274:function(e,t,a){},279:function(e,t){},280:function(e,t){},283:function(e,t,a){"use strict";a.r(t);var n=a(18),c=a(0),o=a.n(c),l=a(260),i=a.n(l),r=a(300),s=a.n(r),u=(a(301),a(302),a(72)),d=(a(274),a(33)),m=a(22),f=a(259);t.default=function(e){var t=Object(u.a)(),a=Object(n.a)(t,1)[0],l=Object(d.c)("values"),r=Object(c.useState)(!1),v=Object(n.a)(r,2),p=v[0],E=v[1],b={dots:!0,customPaging:function(){return o.a.createElement("a",{href:"#section"},o.a.createElement("div",{className:"com-value-dots"}))},infinite:!0,speed:500,slidesToShow:e.isMobile||a<769?1:l?l.figures.length>2?3:2:1,slidesToScroll:e.slideScroll||1,centerMode:void 0===e.slideScroll&&!0,centerPadding:"0px",arrows:!1},g=function e(){var t=document.getElementById("introduce")||document.getElementById("bestcase-detail");null!==t&&N(t)&&(E(!0),document.removeEventListener("scroll",e))},N=function(e){return e.getBoundingClientRect().bottom<=window.innerHeight/1.25};return Object(c.useEffect)((function(){return document.addEventListener("scroll",g),function(){document.removeEventListener("scroll",g)}}),[]),o.a.createElement("section",{className:"com-value"},p&&o.a.createElement(i.a,Object.assign({className:"block-item"},b),function(){if(l)return l.figures.map((function(e,t){var a,n,c=e.value,l=(null===(a=c.match(/\d*\.?\d*/gm))||void 0===a?void 0:a.filter((function(e){return""!==e}))[0])||"",i=c.indexOf(l);return o.a.createElement("div",{className:"item",key:t},o.a.createElement("div",{className:"wrapper-img"},o.a.createElement(f.a,{src:e.image.url,alt:"icon-slider"})),/\d*\.?\d*/gm.test(c)?o.a.createElement("div",{className:"titleBig  title"},c.slice(0,i),o.a.createElement(s.a,{end:parseFloat(l),duration:3,separator:"",decimal:".",decimals:(n=parseFloat(l),n&&Math.floor(n)!==n&&n.toString().split(".")[1].length||0)}),c.slice(i+l.length)):o.a.createElement("div",{className:"titleBig spec title"},e.value),o.a.createElement("div",{className:"content"},e.quote))}))}()),(null===l||void 0===l?void 0:l.button)&&o.a.createElement("div",{className:"wrapper-btnOffer"},o.a.createElement(m.b,{className:"btn-offer",to:"/offer"},o.a.createElement("div",null,null===l||void 0===l?void 0:l.button.discover.text)),o.a.createElement(m.b,{className:"btn-offer-desk",to:"/offer"},o.a.createElement("div",null,null===l||void 0===l?void 0:l.button.discover.text))))}},383:function(e,t,a){},384:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(268),l=(a(383),a(384),a(22)),i=a(262),r=function(e){return c.a.createElement("div",{className:"com-itemMain"},c.a.createElement("div",{className:"".concat(e.isHaveColor?"color":""," block-top")},c.a.createElement("div",{className:"block-title"},c.a.createElement("div",{className:"title"},e.title)),e.type&&!e.type.includes("video")&&c.a.createElement("img",{src:e.img,alt:"item-offer"}),e.type&&e.type.includes("video")&&c.a.createElement("video",{loop:!0,controls:!0},c.a.createElement("source",{src:e.img,type:e.type}))),c.a.createElement("div",{className:"wrapper-content"},c.a.createElement("div",{className:"content"},i(e.content)),void 0!==e.action&&!e.action.includes("http")&&c.a.createElement(l.b,{className:"btn-item-offer hidden opa-0",to:"/offer/".concat(e.link)},e.action),void 0!==e.action&&e.action.includes("http")&&c.a.createElement("a",{href:e.url},e.action)))},s=a(283),u=a(33),d=a(75);t.default=function(){Object(u.d)("offer","/api/page/en/offers");var e=Object(u.c)("offers");return c.a.createElement("div",{className:"com-offer"},c.a.createElement(d.a,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"Gaming Development and Services Offered | Gameloft"),c.a.createElement("meta",{name:"description",content:"We offer outstanding services and gaming development solutions to grow your business in the competitive arena."}),c.a.createElement("link",{rel:"canonical",href:"https://www.gameloft.com/forbrands/offer"})),c.a.createElement(o.a,{scrollable:"true"}),c.a.createElement(s.default,null),function(){var t=["advertising-solutions","gamification-services","partnerships-esports"];return null===e||void 0===e?void 0:e.map((function(e,a){return c.a.createElement(r,{isHaveColor:a%2===0,key:a,index:a+1,title:e.title,content:e.description,action:e.actionName,img:e.visual.url,type:e.visual.mimeType,link:t[a]})}))}())}}}]);
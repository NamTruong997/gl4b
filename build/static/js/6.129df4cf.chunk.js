(this["webpackJsonpgameloft-forbrands"]=this["webpackJsonpgameloft-forbrands"]||[]).push([[6],{447:function(e,t,a){},448:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(43),c=a(44),o=a(0),l=a.n(o),r=(a(447),a(8)),i=a(64),m=function(e){return l.a.createElement("div",{className:"com-itemMain"},l.a.createElement("div",{className:"".concat(e.isHaveColor?"color":""," block-top")},l.a.createElement("div",{className:"block-title"},l.a.createElement("div",{className:"title"},e.title)),e.type&&!e.type.includes("video")&&l.a.createElement("img",{src:e.img,alt:"item-offer"}),e.type&&e.type.includes("video")&&l.a.createElement("video",{loop:!0,controls:!0},l.a.createElement("source",{src:e.img,type:e.type}))),l.a.createElement("div",{className:"wrapper-content"},l.a.createElement("div",{className:"content"},i(e.content)),void 0!==e.actionName&&!e.actionName.includes("http")&&l.a.createElement(r.b,{className:"btn-item-offer",to:"/offer/".concat(e.link)},e.actionName),void 0!==e.actionName&&e.actionName.includes("http")&&l.a.createElement("a",{href:e.url},e.actionName)))},s=a(144),f=a(145),u=a(20),d=a(96);a(448),t.default=function(){var e=Object(u.b)("offer","/api/page/main-offers"),t=e||{},a=t.introduce,o=t.values,r=t.offers;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Gaming Development and Services Offered | Gameloft"),l.a.createElement("meta",{name:"description",content:"We offer outstanding services and gaming development solutions to grow your business in the competitive arena."}),l.a.createElement("link",{rel:"canonical",href:"https://www.gameloft.com/forbrands/offer"})),e&&l.a.createElement("div",{className:"com-offer"},l.a.createElement(c.a,{scrollable:"true",resources:null===a||void 0===a?void 0:a.resources}),l.a.createElement(s.a,{data:o}),null===r||void 0===r?void 0:r.offers.map((function(e,t){var a=e.visualUrl.split(".").pop(),n=Object(d.c)(a);return l.a.createElement(m,{isHaveColor:t%2===0,key:t,index:t+1,title:e.title,content:e.description,actionName:e.actionName,img:e.visualUrl,type:n,link:e.actionValue})})),l.a.createElement(n.a,null)))}}}]);
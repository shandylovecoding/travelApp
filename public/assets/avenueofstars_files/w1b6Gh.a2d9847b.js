(this.$WP=this.$WP||[]).push(["w1b6Gh",(e,t)=>{"use strict";var i,r,o,a,s,n,l,d,c,u="_3l1savSd",v="Awcrc-4G",h={useElementRect:(e,t)=>{var[i,a]=o({width:void 0,height:void 0,top:void 0,right:void 0,bottom:void 0,left:void 0}),s=r(l((()=>{e.current&&a(h.getElementRect(e.current))}),t,!0));return n((()=>{s&&s.current&&(e&&e.current&&new ResizeObserver(s.current).observe(e.current),s.current())}),[s,e]),i},getElementRect:e=>{if(e){var{width:t,height:i,top:r,left:o,right:a,bottom:s}=e.getBoundingClientRect();return{width:t,height:i,top:r,left:o,right:a,bottom:s}}return{width:void 0,height:void 0,top:void 0,right:void 0,bottom:void 0,left:void 0}}},m=e=>{var{size:t="300x250|300x600|160x600",position:l="rail1",secondAdPosition:m="rail2",secondAdSize:p=t,offsetTop:f="20"}=e,g=function(e,t){if(null==t||0===t){var i=e.toLowerCase().split("|").map((e=>{var t=e.split("x")[1];return parseInt(t,10)}));return 6*Math.max(...i)}return parseInt(t,10)}(e.size,e.minHeight),E=r(null),{height:R,width:x}=h.useElementRect(E,2e3),[w,b]=o(!0),[N,z]=o(!0),A=a((()=>void 0!==x&&x<290),[x]),I=s((e=>A&&t.includes("160x600")?"160x600":e),[A,t]);n((()=>{void 0!==R&&(b(R>=300),z(R>=g))}),[R,g]);var $=a((()=>I(t)),[I,t]),C=a((()=>I(p)),[I,p]);return i.createElement("div",{ref:E,className:"_3Hr6o0II"},w&&$&&i.createElement("div",{className:u},i.createElement("div",{style:{top:`${f}px`},className:v},i.createElement(d,{size:$,position:l}))),N&&C&&i.createElement("div",{className:u},i.createElement("div",{style:{top:`${f}px`},className:v},"RailNova"===m?i.createElement(c,{position:"RailNova"}):i.createElement(d,{size:C,position:m}))))};return[()=>{e("default",m)},[e=>(i=e.default,r=e.useRef,o=e.useState,a=e.useMemo,s=e.useCallback,n=e.useEffect),e=>l=e.default,e=>d=e.RailAd,e=>c=e.default]]},["cDcdfi","gsKhh7","dHlxRh","mGqah_"]]);
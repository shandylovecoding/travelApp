(this.$WP=this.$WP||[]).push(["dHlxRh",(e,t)=>{"use strict";var r,a,i,n,l,s,o,d,u,c,v,m,g,E,f,p,b,h,y,x,w,T,L,_,S,z,A,P,O,D,C,R=(e,t)=>{var r=i([]);return y(r.current,t)||(r.current=t),a(e,[r.current])},k=({children:e,value:t})=>{var a=R((()=>t),[t]);return r.createElement(A.Provider,{value:a},e)},N={isRendered:!1,isVisible:!1,isLoaded:!1,isEmpty:!0};function B(e,t,r="",n=!1,u,m=!0){var[y,x]=s(null),w=i(null),T=o((e=>{x(e)}),[]),L=i(0),_=`slot:${e.replace(/\|/g,"-")}:${t}`,{domainName:S}=l(f),z=l(v),P=function(e,t){var r=c(),i=l(A),n=h(t),s=function(e,t){var{userAgentCategory:r,isWebview:a}=l(E);if("MOBILE"===r){if(e.includes("8x8"))return a?"app_external":"web_external";if("adhesion"===t)return"adhesion"}return null}(e,t),o=function(e,t,r){return r&&"horizon"===t?"horizonnova":e.includes("5x1")||"horizon"===t?"horizon":e.includes("728x90")?"banner":"300x250"===e&&t.startsWith("rail")?"shortRail":t.startsWith("rail")?"rail":null}(e,t,n);return a((()=>{if(!r)return null;var{adBase:e,ppid:a}=r;return Object.assign({},r,{},o&&{fluidType:o},{},s&&{mob_adslot:s},{pos:t},i,{PlusEligible:String(n),adBase:e,ppid:a})}),[r,o,s,t,i,n])}(e,t),[O,D]=s(N),{isLoaded:C,isRendered:R,isVisible:k}=O,B=p(),I=b(),M=o((e=>{w.current&&w.current.contentWindow.postMessage(e,S)}),[S]),W=null!==P,j=i(!1);j.current=W&&C&&k;var F=a((()=>g((()=>{z&&z.refreshSlot(_)}),m?3e4:0)),[z,_,m]);return d((()=>{if(R&&y&&(w.current=y.querySelector("iframe"),w.current&&u)){var e=e=>{var r;e.data&&"object"==typeof e.data&&(e.source===(null==(r=w.current)?void 0:r.contentWindow)||"loadNativeAd"===e.data.cpmMessageType&&e.data.adPos===t)&&u(e.data)};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)}}),[R,y,u,t]),d((()=>{j.current&&F()}),[F,r,j]),d((()=>{if(y&&W&&z&&P){var r={id:_,elem:y,size:e,position:t,targeting:P,aboveTheFold:n},{addEventListener:a}=z.createSlot(r);B("CREATED",t);var i=a(((e,r)=>{switch(r){case"slotRefreshStart":L.current=Date.now(),I("REFRESHED",t);break;case"slotRenderEnded":case"forcedEmpty":I("POPULATED",t,e.isEmpty,0!==L.current?Date.now()-L.current:null),L.current=0}D((t=>Object.assign({},t,{},e)))}));return()=>{z.destroySlot(_),D(N),i()}}}),[_,z,y,e,t,P,n,W,I,B]),Object.assign({ref:T,id:_,postMessage:M},O)}function I(e,t=""){var[r,a]=s(0);return d((()=>{var t=setInterval((()=>{a((e=>e+1))}),e);return()=>clearInterval(t)}),[t,a,e]),t+r.toString()}function M(e=""){var[t,r]=s(0);return d((()=>{var e=()=>{"visible"===document.visibilityState&&r((e=>e+1))};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)}),[]),e+t.toString()}function W(){var e="",t=x(),r=M();return t&&(e=r),e}function j(e){var{setTargeting:t}=l(m),r=R((()=>e),[e]);d((()=>(t(r),()=>t({}))),[r,t])}var F="WP.adhesionDismissed",H=({children:e=null})=>{var{localize:t}=L(),{viewportCategory:a}=l(E),{ref:i,id:n,isEmpty:u}=B("320x50","adhesion","",!0),[c,v]=s(!1);d((()=>{var e=!T.get(F);v(e)}),[]);var m=o((()=>{T.set(F,!0),v(!1)}),[]);return"MOBILE"!==a?null:r.createElement(r.Fragment,null,c&&r.createElement("div",{className:"_2l41Hsyf"},!u&&r.createElement("div",{className:"_20EXhu1f"},r.createElement(S,{size:"small",onClick:m,iconName:"times","aria-label":t.string("common_Close")})),r.createElement("div",{id:n,ref:i,className:w("_1gdGgB8-",{_3Sbsf9LQ:u})})),(!c||u)&&e)},K={ad:"_1BMiUyaL",empty:"_3PIRFIvP",withTopBorder:"_2jpyfHrG",backgroundedAd:"_2S-Gy0yh",withMargin:"tWzVawd8"},V=({size:e="300x250|300x600|160x600",position:t="rail1"})=>{var{viewportCategory:a}=l(E),i=W(),{ref:n,id:s,isEmpty:o}=B(e,t,i,!1);return"MOBILE"!==a?r.createElement("div",{id:s,className:w(K.ad,"_3-nHQ6Dl",{[K.empty]:o}),ref:n}):null};function $(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}function G(e,t){var{size:r}=e,a=$(e,["size"]),{size:i}=t,n=$(t,["size"]);return z(a,n)&&z(r,i)}var Q={mobile:"300x250|8x8",tablet:"728x90",desktop:"728x90"},U=({size:{mobile:e=Q.mobile,tablet:t=Q.tablet,desktop:a=Q.desktop}=Q,position:i="inline1",topDivider:n=null,bottomDivider:s=null})=>{var{viewportCategory:o}=l(E),d=W(),u={MOBILE:e,TABLET:t,DESKTOP:a}[o],{ref:c,id:v,isEmpty:m}=B(u||"",i,d,!1);return u?r.createElement(r.Fragment,null,!m&&n,r.createElement("div",{id:v,ref:c,className:w(K.ad,{[K.empty]:m})}),!m&&s):null},Z={mobile:"300x250|8x8",tablet:"728x90",desktop:"970x250|728x90"},q=({size:{mobile:e=Z.mobile,tablet:t=Z.tablet,desktop:a=Z.desktop}=Z,additionalWrapperClass:i,topDivider:n=null,bottomDivider:s=null})=>{var{viewportCategory:o}=l(E),d=W(),u={MOBILE:e,TABLET:t,DESKTOP:a}[o],{ref:c,id:v,isEmpty:m}=B(u||"","footer",d,!1);return u?r.createElement(r.Fragment,null,!m&&n,r.createElement("div",{id:v,ref:c,className:w(K.ad,{[K.empty]:m,[K[i]]:!!K[i]})}),!m&&s):null},X={mobile:null,tablet:"728x90",desktop:"728x90|970x66"},Y=()=>{var{cdnPrefix:e}=l(f),t=`${e}/img2/brand_refresh/Tripadvisor_lockup_horizontal.svg`;return r.createElement("div",{className:w(K.ad,"_1nl3ndSh")},r.createElement("div",{className:"_1ZNOCZhQ"},r.createElement("img",{src:t,alt:"Tripadvisor"})),r.createElement("div",{className:"_2mM5w4K0"},r.createElement(_,{id:"brand_save_money_we_search_200"})))},J=({children:e=r.createElement(Y,null),reserveHeight:t=!0,size:{mobile:a=X.mobile,tablet:i=X.tablet,desktop:n=X.desktop}=X,additionalWrapperClass:s})=>{var{viewportCategory:o}=l(E),d=W(),u={MOBILE:a,TABLET:i,DESKTOP:n}[o],{ref:c,id:v,isRendered:m,isEmpty:g}=B(u||"","header",d,!0);return u?r.createElement("div",{className:w({hwv8h5To:t,[K[s]]:!!K[s]})},t&&m&&g&&e,r.createElement("div",{id:v,ref:c,className:w(K.ad,{[K.empty]:m&&g})})):null};return e({useAd:B,useInterval:I,usePageTargeting:j,usePageVisibility:M,useRefreshKey:W}),[()=>{A=n({}),P=u(V),O=u(U,G),D=u(q,G),C=u(J,G),e({AdTargetingProvider:k,Adhesion:H,FooterAd:D,HeaderAd:C,InlineAd:O,RailAd:P,useAd:B,useInterval:I,usePageTargeting:j,usePageVisibility:M,useRefreshKey:W})},[e=>(r=e.default,a=e.useMemo,i=e.useRef,n=e.createContext,l=e.useContext,s=e.useState,o=e.useCallback,d=e.useEffect,u=e.memo),e=>(c=e.usePageTargeting,v=e.AdServer,m=e.PageTargeting),e=>g=e.default,e=>(E=e.Device,f=e.Environment),e=>(p=e.useLogAdSlotEventOnlyOnce,b=e.useLogAdSlotEvent),e=>h=e.useOptimusAdSlotEligibility,e=>y=e.default,e=>x=e.useTabRefresh,e=>w=e.default,e=>T=e.default,e=>(L=e.useLocalize,_=e.UnsafeLocalize),e=>S=e.CircularButton,e=>z=e.shallowEquals]]},["cDcdfi","nCvudh","gsKhh7","2R4xv2","wzAQTx","kLoEDZ","YwNsO_","gzFIw8","jSLlaY","jaCyxS","0DsHEV","7yGKf-","XtxvfD"]]);

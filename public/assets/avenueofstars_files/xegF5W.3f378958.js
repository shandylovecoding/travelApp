(this.$WP=this.$WP||[]).push(["xegF5W",(e,t)=>{"use strict";var o,n,l,r,c,i,u,a,s,d,m,y=({children:e,onClick:t,inline:r,isTransparent:c=!1})=>{var i=void 0!==r?r:n;return o.createElement(o.Fragment,null,o.createElement(i,{className:l("_1Hzf3Xci",{_1pEjMuxO:c}),onClick:t}),e)},p="t-c3ucyU",f={instanceCount:0,scrollY:null,elementStyles:{documentHeight:null},documentStyles:{scrollY:null,position:null,top:null,width:null,documentHeight:null,overflow:null}},v=(e=!0,t=!0)=>{var{os:{family:n}}=o.useContext(r),l="IOS"===n,c=o.useCallback((()=>{var e,t;if("undefined"!=typeof document&&document.body&&document.body.style&&document.documentElement&&(null==(e=document)||null==(t=e.documentElement)?void 0:t.style)){var o=document.body.style,n=document.documentElement.style,l=document.body.classList,{scrollY:r}=f;o.position="fixed",r&&(o.top=-1*r+"px"),o.width="100%",n.height="100vh",l.contains(p)||l.add(p)}}),[]),[i,u]=Array.isArray(t)?t:[t,void 0],a=o.useCallback((()=>{if("undefined"==typeof document||!document.body||!document.body.style)return()=>{};if(document.body.style.overflow="hidden",l)if("boolean"!=typeof i)var e=setTimeout((()=>(c(),u&&u(),()=>{clearTimeout(e)})),i);else i&&c();return()=>{}}),[l,c,u,i]);o.useEffect((()=>{if(!e)return()=>{};f.instanceCount++;var t=()=>{};return 1===f.instanceCount&&((e=>{var t,o;if("undefined"!=typeof document&&document.body&&document.body.style&&document.documentElement&&(null==(t=document)||null==(o=t.documentElement)?void 0:o.style)){var n=document.body.style,l=document.documentElement.style;e&&(f.scrollY=window.scrollY,f.documentStyles.position=n.position,f.documentStyles.top=n.top,f.documentStyles.width=n.width,f.elementStyles.documentHeight=l.height),f.documentStyles.overflow=n.overflow}})(l),t=a()),()=>{t(),f.instanceCount--,0===f.instanceCount&&(()=>{var e,t;if("undefined"!=typeof document&&document.body&&document.body.style&&document.documentElement&&(null==(e=document)||null==(t=e.documentElement)?void 0:t.style)){var o=document.body.style,n=document.documentElement.style,{documentStyles:l,elementStyles:r,scrollY:c}=f;l.position?o.position=l.position:o.removeProperty("position"),null!=l.top?o.top=l.top:o.removeProperty("top"),l.width?o.width=l.width:o.removeProperty("width"),l.overflow?o.overflow=l.overflow:o.removeProperty("overflow"),r.documentHeight||""===r.documentHeight?n.height=r.documentHeight:n.removeProperty("height"),null!==c&&window.scrollTo(0,c)}})()}}),[e,a,l])},b=e=>(v(!0,(({deferBugFix:e,callback:t,iOS11BugFix:o})=>!1!==o&&(void 0!==e?t?[e,t]:e:o))(e)),null),E=({condition:e,wrap:t,children:o})=>e?t(o):o,h="_9Wi4Mpeb",w=e=>{switch(e){case"TA_GRAY_2":case"TA_GRAY_3":return h;case"SEAT_GURU_BLUE":return"_2dYljsg6";case"WHITE":return"_3shlBLLv";case"TA_GREEN_DARK":case"BLACK":case"TA_GREEN":return h;default:return null}},_=({colorVariant:e="TA_GREEN",onClick:t,onEnterKeyDown:n,testAttribute:r,padding:c})=>{var{localize:i}=a();return o.createElement("div",{className:l("_2EFRp_bb",w(e)),onClick:t,onKeyDown:e=>{"Enter"===e.key&&n&&(e.preventDefault(),n(e))},"data-test-attribute":r,role:"button",tabIndex:"0",style:{padding:c},"aria-label":i.string("common_Close")})},g={close:"_2cMt8_9M",black:"_15_IagJV",white:"_1JGhWjrQ"},k=e=>{switch(e){case"GRAY":return g.gray;case"BLACK":return g.black;case"WHITE":return g.white;default:return null}},C=[9,10],S=[9,10],B=()=>{var{browser:e,os:t}=o.useContext(r);return"SAFARI"===e.family&&C.includes(e.majorVersion)||"IOS"===t.family&&S.includes(t.majorVersion)};return[()=>{d=o.forwardRef(((e,t)=>{var{disableBlockScroll:l,disableRestoreFocus:r,enableEventBoundary:a,onClose:s,hideBackdrop:d,isBackdropTransparent:m,inline:p,autoFocusSortFn:f,children:b}=e,h=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,["disableBlockScroll","disableRestoreFocus","enableEventBoundary","onClose","hideBackdrop","isBackdropTransparent","inline","autoFocusSortFn","children"]),w=void 0!==p?p:n;return v(!l),i("Escape",(()=>{s&&s()})),o.createElement(E,{wrap:e=>o.createElement(c,{events:["onClick"],className:"Tuud_tpG"},e),condition:a},o.createElement(E,{wrap:e=>o.createElement(y,{onClick:s,isTransparent:m,inline:p},e),condition:!d},o.createElement(u,{elementType:w,autoFocusSortFn:f,disableRestoreFocus:r},o.createElement(w,Object.assign({},h,{ref:t}),b))))})),m=o.forwardRef((({colorVariant:e="TA_GREEN",onClick:t},n)=>{var{localize:r}=a();return o.createElement("button",{className:l(g.close,k(e)),onClick:t,"aria-label":r.string("common_Close"),type:"button",ref:n},o.createElement(s,{name:"times"}))})),e({Backdrop:y,BlockScroll:b,CloseButton:m,CloseIcon:_,ModalBase:d,useBlockScroll:v,useBuggyWebkit:B})},[e=>o=e,e=>n=e.OverlayPortal,e=>l=e.default,e=>r=e.Device,e=>c=e.default,e=>i=e.useKeyboardEvent,e=>u=e.FocusTrap,e=>a=e.useLocalize,e=>s=e.default]]},["cDcdfi","vq6MSq","jSLlaY","2R4xv2","_cZwhS","8xs-IB","W3_c4H","0DsHEV","pyY-iJ"]]);

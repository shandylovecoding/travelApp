(this.$WP=this.$WP||[]).push(["4J6GHD",(e,t)=>{"use strict";var a,r,i,n,o,l,c,s,m,u,v,d,f,p,g=({id:e,title:t,content:i,link:n,tooltipActivationEvent:o,onClose:l})=>{var{localize:c}=p();return a.createElement("div",{id:e,className:"_3MkiOPJF"},"click"===o&&a.createElement("div",{className:"_30s6FgZU"},a.createElement(d,{iconName:"times",size:"medium",onClick:l,"aria-label":c.string("tooltip_close")})),null!=t&&a.createElement(f,{elementType:"div",variant:"title-04",marginBottom:"spacing-02"},t),a.createElement(f,{elementType:"div",variant:"body-01"},i),null!=n&&a.createElement(f,{elementType:"div",variant:"body-01",marginTop:"spacing-03"},a.createElement(r,{disableRestoreFocus:!0},n)))},h={MOBILE:223,TABLET:248,DESKTOP:273},k=24,E=e=>({tooltipLeft:0,tooltipVertical:0,caretLeft:0,caretVertical:0,variantTreatment:e,hasDimensions:!1}),w=(e,t,a,r,i,n=0)=>{if(null==e)return{tooltipLeft:h[a]/2+8,tooltipVertical:16,caretLeft:h[a]/2,caretVertical:0,variantTreatment:r,hasDimensions:!1};var o,l;if(null==t)return E(r);var{width:c,height:s}=t.getBoundingClientRect();o=c,l=s;var m,{width:u,height:v,left:d,right:f,top:p,bottom:g}=e.getBoundingClientRect(),y=parseInt(window.getComputedStyle(e).getPropertyValue("--page-margin"),10),b=window.innerWidth,C=((e,t)=>{if("top-caret"===e||"bottom-caret"===e)switch(t){case"left":return 0;case"right":return 1;case"middle":default:return.5}if("left-caret"===e)switch(t){case"top":return 0;case"bottom":return 1;case"middle":default:return.5}return.5})(r,i),T=C*(l-48-20)+k+10-n;switch(r){case"top-caret":m=g+window.scrollY+8;break;case"bottom-caret":m=p+window.scrollY-l-16-8;break;case"left-caret":m=p+v/2-T+window.scrollY-8;break;default:m=0}var V,L=C*(o-48-20)+k+10-n;V="left-caret"===r?f+8:d+u/2-8-L;var _,D="left-caret"===r?-8:L-10;switch(r){case"top-caret":_=0;break;case"bottom-caret":_=-8;break;case"left-caret":_=l-T-10;break;default:_=k}if("top-caret"===r||"bottom-caret"===r){var S=V+o+8-(b-y);S>0&&(D+=S,V=b-y-o-8);var B=y-8-V;B>0&&(D-=B,V=y-8),D=Math.min(o-k-20,Math.max(k,D))}if("left-caret"===r){if(!(b-(f+o+8)>=y))return w(e,t,a,"top-caret",i,n);_=Math.min(l-k-20,Math.max(k,_))}return{tooltipLeft:V,tooltipVertical:m,caretLeft:D,caretVertical:_,variantTreatment:r,hasDimensions:!0}},y=(e,t,a,r)=>{if(null==e)return{tooltipLeft:h[a]/2+8,tooltipVertical:16,caretLeft:h[a]/2,caretVertical:0,variantTreatment:r,hasDimensions:!1};var i,n;if(null==t)return E(r);var{width:o,height:l}=t.getBoundingClientRect();i=o,n=l;var c,s,{width:m,height:u,left:v,right:d,top:f,bottom:p}=e.getBoundingClientRect(),g=parseInt(window.getComputedStyle(e).getPropertyValue("--page-margin"),10),k=window.innerWidth;switch(r){case"top-caret":c=p+window.scrollY+8;break;case"bottom-caret":c=f+window.scrollY-n-16-8;break;case"left-caret":c=(p+f-n)/2+window.scrollY-8;break;default:c=0}s="left-caret"===r?d+8:v+m/2-8-i/2;var w,b="left-caret"===r?-8:i/2-10;switch(r){case"top-caret":w=0;break;case"bottom-caret":w=-8;break;case"left-caret":w=(n-u)/2;break;default:w=0}return"top-caret"!==r&&"bottom-caret"!==r||(v+m/2-i/2>=g||(b+=s,s=0),k-d+m/2-i/2>=g||(b+=s-(k-i),s=k-i)),"left-caret"!==r||k-(d+i+8)>=g?{tooltipLeft:s,tooltipVertical:c,caretLeft:b,caretVertical:w,variantTreatment:r,hasDimensions:!0}:y(e,t,a,"top-caret")},b=({triggeringElement:e,title:t,content:r,link:d,variant:f,tooltipActivationEvent:p="hover",onClick:h,alignment:k,alignmentOffset:b=0,shrinkToContent:C})=>{var T=a.useRef(null),V=a.useRef(null),[L,_]=a.useState(null),D=a.useMemo((()=>`tooltip-content-${Math.random()}`),[]),[S,B]=a.useState(!1),[{tooltipLeft:N,tooltipVertical:K,caretLeft:M,caretVertical:Y,variantTreatment:A,hasDimensions:F},O]=a.useState(E(f)),{viewportCategory:R}=a.useContext(u),x=(e=!1)=>{T.current&&e&&T.current.focus(),B(!1)},P=a.useCallback((()=>{O(k?w(T.current,L,R,f,k,b||0):y(T.current,L,R,f))}),[R,L,f,k,b]),W=s((e=>{var t,a;if(P(),S&&"keydown"===e.type&&e.keyCode===l)x(!0);else{if(e.target instanceof Node&&(null==(t=T.current)?void 0:t.contains(e.target))){var r="click"===p?"click"===e.type||"touchstart"===e.type||e instanceof KeyboardEvent&&"keydown"===e.type&&e.keyCode===c:"touchstart"===e.type||"mouseenter"===e.type||"mouseover"===e.type||"mousemove"===e.type||e instanceof KeyboardEvent&&"keydown"===e.type&&e.keyCode===c;return!S&&r?(B(!0),void(h&&h())):void(S&&"hover"===p&&"mouseleave"===e.type&&x())}e.target instanceof Node&&(null==(a=V.current)?void 0:a.contains(e.target))||S&&("click"===e.type||"touchstart"===e.type||"hover"===p&&"mousemove"===e.type)&&x()}}),100,!0);m("click",W,void 0,!0),m("touchstart",W,void 0,!0),m("mouseenter",W,void 0,!1),m("mouseleave",W,void 0,!0),m("mouseover",W,void 0),m("mousemove",W,void 0),m("keydown",W,void 0,!0),m("resize",W,void 0,!0),a.useEffect((()=>{S&&!F&&null!=L&&P()}),[S,F,L,P]);var $={left:`${M}px`,bottom:`${Y}px`},z={left:`${N}px`,top:`${K}px`,visibility:F?"visible":"hidden"},H=i();return a.createElement("div",{className:"_3CzYmwv5"},a.createElement("button",{className:o("_3KMHGQbm",H),ref:T,"aria-labelledby":D},e),S&&a.createElement(v,{ref:V},a.createElement(n,{onBlur:()=>x(!0),origFocus:T,isFocused:!0,preventScroll:!0},a.createElement("div",{role:"tooltip",className:o("_116EE1Ko",{_3ix3UpkM:!!C}),style:z,ref:_},a.createElement(g,{title:t,content:r,link:d,tooltipActivationEvent:p,onClose:()=>{x(!0)}}),a.createElement("div",{className:o({_1WiVt4gB:"bottom-caret"===A,_2wFOTAFf:"top-caret"===A,_2S6KuWAw:"left-caret"===A}),style:$})))),a.createElement("span",{id:D,className:"_1mZaDuBR"},r))},C=({triggeringElement:e,title:t,content:r,link:i,variant:n,onShowTooltip:o,alignment:l,alignmentOffset:c,shrinkToContent:s})=>a.createElement(b,{triggeringElement:e,title:t,content:r,link:i,variant:n,onClick:o,tooltipActivationEvent:"click",alignment:l,alignmentOffset:c,shrinkToContent:s}),T=({triggeringElement:e,title:t,content:r,variant:i,onShowTooltip:n,alignment:o,alignmentOffset:l,shrinkToContent:c})=>a.createElement(b,{triggeringElement:e,title:t,content:r,variant:i,onClick:n,tooltipActivationEvent:"hover",alignment:o,alignmentOffset:l,shrinkToContent:c});return[()=>{e({ClickTooltip:C,HoverTooltip:T})},[e=>a=e,e=>(r=e.AutoFocus,i=e.useKeyboardFocusableClassName,n=e.FocusBoundary),e=>o=e.default,e=>(l=e.KEY_ESCAPE,c=e.KEY_ENTER),e=>s=e.default,e=>m=e.useWindow,e=>u=e.Device,e=>v=e.OverlayPortal,e=>d=e.CircularButton,e=>f=e.default,e=>p=e.useLocalize]]},["cDcdfi","W3_c4H","jSLlaY","h7E4Ym","gsKhh7","Dg5_-9","2R4xv2","vq6MSq","7yGKf-","VP50Wc","0DsHEV"]]);

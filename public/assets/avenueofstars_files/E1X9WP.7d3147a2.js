(this.$WP=this.$WP||[]).push(["E1X9WP",(e,t)=>{"use strict";var l,n,o,a,i,r,s,c,u,d,m,_,y="_3oeOS5NC",f="_3RXV8M7h",h=({primaryButton:e,secondaryButton:t,buttonStyle:n,buttonsAlignment:o,hasFullWidthButton:a})=>l.createElement(l.Fragment,null,e&&l.createElement("div",{className:i("_1kyILGoL",{_3JLOD3Tx:"center"===o,_3grqxPOC:"stacked"!==n})},l.createElement("div",{className:i(f,"_3rBF4jJp",{[y]:a})},e),t&&l.createElement("div",{className:i(f,"_1WUjH_6F",{[y]:t.type!==s})},t))),b=({title:e,titleColor:t,titleSize:n="title-01",titleElementId:o,stickyHeader:a,iconName:r})=>l.createElement(l.Fragment,null,r&&l.createElement("div",{className:"_3c6wbCtf"},l.createElement(d,{name:r,size:20,color:"onDarkIcon"})),null!=e&&l.createElement("div",{id:o,className:i(a?"_3mcYDwKY":"_3x7ZtOIr")},l.createElement(u,{variant:n,elementType:"div",color:t},e))),E=({title:e,titleColor:t,titleSize:n="title-01",children:o,primaryButton:a,secondaryButton:s,buttonStyle:u="inline",buttonsAlignment:d="center",footer:m,iconName:_,onClose:y,roundCorners:f,heightOption:E="variable",widthOption:g="variable",stickyHeader:v=!1,stickyFooter:B=!0,closeButtonPosition:C="right",closeButtonIcon:p="times",closeButtonRef:N,backgroundColor:k,hasFullWidthButton:S=!1})=>{var{localize:x}=c(),F=`dsModalTitle_${Math.random()}`;return l.createElement("div",{className:i("_2TgkBVSR",{_1yzlMQgw:"restricted"===E||"restricted-full"===E||"full"===E||"fixed-80"===E||"fixed-60"===E||"fixed-40"===E,_3UNUEkP0:"fixed-80"===g||"fixed-60"===g||"fixed-40"===g,_3WZyVpON:"restricted"===E,_2qjf6uul:"restricted-full"===E,"_11xm-uqa":"full"===E,_1MfbMGO0:"fixed-80"===E,_3DXQTEsx:"fixed-60"===E,_305zLZo_:"fixed-40"===E,"_7GrN-6ub":"restricted"===g,_3gWW7q_J:"restricted-full"===g,F4mLpkWI:"full"===g,_33RgXdHH:"fixed-80"===g,_3OoH8nng:"fixed-60"===g,_1Dntzrnl:"fixed-40"===g,_3c5rjryz:"beige"===k,_1xIiZaCr:"plus"===k,gYW_KcX9:"secondary"===k,_337avn0M:f}),role:"dialog","aria-labelledby":F},l.createElement("div",{className:i("_30sssz2M",{_11yXRUYN:"left"===C})},"none"!==C&&l.createElement(r,{variant:"clear",iconName:p,"aria-label":x.string("common_Close"),size:"small",onClick:y,ref:N})),v&&l.createElement("div",{className:"_2mH8t4ys"},l.createElement(b,{title:e,titleColor:t,titleElementId:F,stickyHeader:v,iconName:_}),m),l.createElement("div",{className:"_2e9UwnUh"},l.createElement("div",{className:"_1BI-QJw1"},!v&&l.createElement(b,{title:e,titleColor:t,titleSize:n,titleElementId:F,stickyHeader:v,iconName:_}),o),!B&&l.createElement(h,{primaryButton:a,secondaryButton:s,buttonStyle:u,buttonsAlignment:d,hasFullWidthButton:S}),!B&&l.createElement("div",null,m)),B&&l.createElement("div",{className:"_3pSQ8kfJ"},l.createElement(h,{primaryButton:a,secondaryButton:s,buttonStyle:u,buttonsAlignment:d,hasFullWidthButton:S}),l.createElement("div",null,m)))},g=({title:e,children:t,variant:n="variable-height",inline:i,primaryButton:r,secondaryButton:s,buttonStyle:c="inline",buttonsAlignment:u="center",footer:d,widthOption:m="variable",heightOption:_="restricted",closeButtonPosition:y,onClose:f,disableRestoreFocus:h})=>{var b=e=>{f&&e.target===e.currentTarget&&f()},g=l.useRef();return l.createElement(a,{inline:i,className:"_2OZ0I86M",onClose:f,onMouseDown:b,onTouchStart:b,autoFocusSortFn:o(g),disableRestoreFocus:h},"variable-height"===n?l.createElement("div",{className:"_18Q1YCb_"},l.createElement(E,{title:e,stickyFooter:!1,heightOption:"variable",widthOption:m,primaryButton:r,secondaryButton:s,roundCorners:!0,buttonStyle:c,buttonsAlignment:u,footer:d,closeButtonPosition:y,onClose:f,closeButtonRef:g},t)):l.createElement(E,{title:e,stickyFooter:!0,heightOption:_,widthOption:m,primaryButton:r,secondaryButton:s,buttonStyle:c,buttonsAlignment:u,roundCorners:!0,footer:d,closeButtonPosition:y,onClose:f,closeButtonRef:g},t))},v="_3GXDQSD1",B="_20kMgdEM",C=({slideFrom:e,transitionDuration:t=250,header:n,stickyHeader:r=!1,children:s,primaryButton:c,secondaryButton:u,buttonStyle:d="inline",onClose:y,footer:f,closeButtonPosition:h,closeButtonIcon:b,heightOption:g,widthOption:C,deprioritizeRef:p=null})=>{var{locale:{isRtl:N}}=l.useContext(_),[k,S]=l.useState(!0),x=l.useCallback((()=>{null!=y&&setTimeout(y,t),S(!1)}),[y,S,t]),F=m({in:k,timeout:t}),O=(t=>{var l,n="enter"===t||"entering"===t||"exiting"===t||"exited"===t;switch(e){case"top":l="_2Uzb7580";break;case"bottom":l="_2OJSM5VU";break;case"left":l=N?v:B;break;case"right":l=N?B:v;break;default:l={}}return i(l,{_3fvMu3BR:n})})(F),R=l.useRef();return"exited"!==F&&l.createElement(a,{className:i("_3LIPspg_",O),onClose:y,autoFocusSortFn:o(p||R)},l.createElement(E,{title:n,stickyHeader:r,primaryButton:c,secondaryButton:u,buttonStyle:d,stickyFooter:!0,onClose:x,footer:f,closeButtonIcon:b,closeButtonPosition:h,heightOption:g,widthOption:C,closeButtonRef:R},s))},p="_12k4Fl6t",N=({logo:e,title:t,accent:l,accentStyle:o="fullbleed",accentWidth:s="auto",backgroundColor:d="overlay",mobileContainerStyle:m="fullscreen",hideCloseButton:_=!1,closeDataAutomationTag:y="modalClose",onClose:f,children:h})=>{var{localize:b}=c(),E=e=>{f&&e.target===e.currentTarget&&f()},g=null!=l,v=null!=e;return n.createElement(a,{onClose:f,onMouseDown:E,onTouchStart:E,className:i("_1V_-N8D9",{DUoatir7:"fullscreen"===m,_3Cv3XJIR:"inset"===m})},n.createElement("div",{className:i("phP7uwXc",{"_2fn-lJce":"beige"===d,_2bq0E4oh:"cream"===d,_1PseIKKI:"green90"===d,_1NyCthVX:"overlay"===d,_1A4ECIBk:"plus"===d,_3ERjiquD:"purple80"===d})},g&&n.createElement("div",{className:i("_1U7u25mO",{_3DiDyHSx:"fullbleed"===o,_3cc8S6KF:"inset"===o,[p]:"50%"===s})},l,v&&n.createElement("div",{className:"Zbk6CbA7"},e)),n.createElement("div",{className:i("_1uoLRYo9",{[p]:g&&"50%"===s})},!_&&n.createElement("div",{className:"_3wRTb5-A","data-automation":y},n.createElement(r,{variant:"plus"===d?"clear-on-dark":"clear",iconName:"times","aria-label":b.string("common_Close"),size:"small",onClick:f})),n.createElement("div",{className:"_1JASiih2"},v&&n.createElement("div",{className:i("_1RSPXN4f",{_1a2AvbMB:g})},e),null!=t&&n.createElement(u,{variant:"title-02",marginBottom:"spacing-03"},t),h))))};return[()=>{e({ContentContainer:E,Modal:g,ModalContainer:N,SlideInModal:C})},[e=>(l=e,n=e.default),e=>o=e.deprioritize,e=>a=e.ModalBase,e=>i=e.default,e=>(r=e.CircularButton,s=e.BorderlessButton),e=>c=e.useLocalize,e=>u=e.default,e=>d=e.default,e=>m=e.default,e=>_=e.Environment]]},["cDcdfi","W3_c4H","xegF5W","jSLlaY","7yGKf-","0DsHEV","VP50Wc","pyY-iJ","6RAaot","2R4xv2"]]);

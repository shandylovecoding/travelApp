(this.$WP=this.$WP||[]).push(["hDoeAJ",(e,t)=>{"use strict";var a,r,n,o,l,i,s,c,m=({itemRenderer:e,totalCount:t,currentIndex:n,onNav:o,numItemsInRow:l,numRows:i,height:s})=>{var c=Math.min(l,t);if(c<=0)return null;var m=1/c,u=Array.from(Array(i).keys()),d=Array.from(Array(c).keys()),w=c*i,h=Math.floor(n/w);return a.createElement("div",{className:"_1YB20x3i"},u.map((t=>{var c=(h*i+t)*l;return a.createElement("div",{className:"_29SZ8xlv",key:`row-${t}`},d.map((t=>{var l=t+c;return e(l)?a.createElement("div",{className:r("QcAjTTPw",n===l?"_2MN-4NoF":null),style:{flexBasis:`calc(${100*m-.01}% - 2px)`,height:s},onClick:()=>o(l),key:`media-${l}`,"data-test-target":"gallery_thumbnail_image"},e(l)):null})))})))},u=({itemRenderer:e,thumbnailRenderer:t,totalCount:r,currentIndex:s,onNav:c,onClick:u,arrowSize:d,alwaysShowArrows:w,hideIndicatorDots:h,wrap:v,showCta:p,overlay:C,numItemsInRow:y,numRows:E,setCarouselRef:I,stripHeight:_,nodeWrappers:R,onPhotoCountClick:k,onArrowClick:N,onPhotoSwipe:b})=>{var g;switch(C){case"thinGeoMessaging":g=a.createElement(n,{variant:"supporting-01",color:"onDarkText",marginTop:"spacing-03",marginBottom:"spacing-02",marginX:"spacing-03"},a.createElement(i,{id:"hr_lowcontent_geo_photo_disclaim_2"}));break;case"countOnly":case"visible":var A="countOnly"===C;g=a.createElement(l,{icon:A?"photo":void 0,totalCount:r,textOverride:A?`${r}`:void 0,onClick:k})}return a.createElement("div",{className:"_3mT7Z-Gw",key:"parent-container"},a.createElement("div",{className:"_2pM5l1G9"},a.createElement("div",{className:"_3MvA_WE7",onClick:()=>{u&&u(s)},"data-test-target":"gallery_primary_image"},a.createElement(o,{itemRenderer:e,totalCount:r,currentIndex:s,onNav:c,arrowSize:d,alwaysShowArrows:w,hideIndicatorDots:h,overlayNode:g,wrap:v,showCta:p,setRef:I,nodeWrappers:R,onArrowClick:N,onPhotoSwipe:b})),a.createElement("div",{className:"_2nWhMojM"},a.createElement(m,{itemRenderer:t||e,totalCount:r,currentIndex:s,onNav:c,numItemsInRow:y,numRows:E,height:_}))))},d=({thumbnail:e})=>{var[t,n]=a.useState(!1);return a.createElement("div",{className:"_3sxouotV",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1)},a.createElement("div",{className:r("_3KAjnMvN","_1P44iO8w",t?"_173d6Q9D":null)},e))},w=({title:e,count:t})=>{var r=s(),n=t?r.formatNumber("integer",t):null;return e?a.createElement("div",{className:"_2Qank1GE"},a.createElement("div",{className:"_1o3E3AeO"},a.createElement(c,{variant:"on-dark"},n?a.createElement(i,{id:"Photoviewer_albumNameWithCount_v2",args:{0:e,1:n}}):a.createElement("span",null,e)))):null},h=({albums:e,onAlbumSelected:t})=>{if(!e)return null;var n=e.map((({albumId:e,title:r,count:n,thumbnail:o})=>e?a.createElement("div",{className:"eKQWFjb2",key:`thumbnail-${e}`,onClick:()=>{t&&t(e)}},a.createElement("div",{className:"AjcEeh7i"},a.createElement(d,{thumbnail:o}),a.createElement(w,{title:r,count:n}))):null));return a.createElement("div",{className:r("_1oSV5rBK","_2ty1merx"),key:"albums-container"},n)},v={albumSelect:"ALBUM",carouselClicked:"CAROUSEL_CLICK",nav:"NAV",photoCountClick:"PHOTO_COUNT_CLICK",arrowClick:"ARROW_CLICK",photoSwipe:"PHOTO_SWIPE"},p=({itemRenderer:e,thumbnailRenderer:t,totalCount:n,initialIndex:o,arrowSize:l,alwaysShowArrows:i,hideIndicatorDots:s,wrap:c,showCta:m,overlay:d,numItemsInRow:w,numRows:p,albums:C,actionHandler:y,setCarouselRef:E,stripHeight:I,nodeWrappers:_,children:R})=>{var k,N={currentIndex:o||0},b=a.useCallback(((e,t)=>{try{y&&y(t)}catch(e){}return t.type===v.nav?Object.assign({},e,{currentIndex:t.newIndex}):e}),[y]),[g,A]=a.useReducer(b,N),{currentIndex:S}=g;return k=n>w*p?p:n<=w?0:Math.ceil(n/w),a.createElement("div",{className:r("_2jyEvadS","_2FZNeIBB")},a.createElement(u,{itemRenderer:e,thumbnailRenderer:t,totalCount:n,onNav:e=>{A({type:v.nav,newIndex:e})},onClick:e=>{A({type:v.carouselClicked,index:e})},currentIndex:S,arrowSize:l,alwaysShowArrows:i,hideIndicatorDots:s,wrap:c,showCta:m,overlay:d,numItemsInRow:w,numRows:k,setCarouselRef:E,stripHeight:I,nodeWrappers:_,onPhotoCountClick:()=>{A({type:v.photoCountClick})},onArrowClick:()=>{A({type:v.arrowClick,direction:null})},onPhotoSwipe:()=>{A({type:v.photoSwipe,swipeDirection:null})}}),C&&a.createElement(h,{albums:C,onAlbumSelected:e=>{A({type:v.albumSelect,albumId:e})}}),R)};return[()=>{p.defaultProps={arrowSize:"large",alwaysShowArrows:!1,hideIndicatorDots:!0,wrap:!0,showCta:!1,overlay:"visible",numItemsInRow:10,numRows:2},e({MediaWindow:p,mwActions:v})},[e=>a=e,e=>r=e.default,e=>n=e.default,e=>o=e.default,e=>l=e.default,e=>(i=e.default,s=e.useIntlFormatter),e=>c=e.BorderlessButton]]},["cDcdfi","jSLlaY","VP50Wc","RycA3W","-3nei-","0DsHEV","7yGKf-"]]);

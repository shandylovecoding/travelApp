(this.$WP=this.$WP||[]).push(["s1eoNx",(t,e)=>{"use strict";var r,n,a,s,o=(t,e,r,n)=>{var a=e-t,s=n?0:-.5,o=Math.floor((t+s)/2),u=t-1,c=e-1,i=n?-.5:0,l=Math.floor((t+i)/2),d=Math.max(0,Math.min(a,r-o)),m=Math.min(c,Math.max(u,r+l));return Array(m-d+1).fill().map(((t,e)=>d+e))},u=(t="white")=>{var e,r,n;switch(t){case"white":e="_2w-gbegQ",r="_2Txjoeu9",n="PpSvF-Sf";break;case"darkGreyMedium":e="_2z9wK_m_",r="_3kK_T5DG",n="_3wXEjg5j";break;default:e="_3OutRTee",r="_1vIhkmMk",n="_3CYWffho"}return{activeDotStyle:e,dotStyle:r,containerStyle:n}},c=(t,e,r,n,a=20)=>{var s;return{transform:`translate3d(${n?"-":""}${a*t}px, 0, 0) scale3d(${s=0===t||t===e+1?0:r?1.3:1}, ${s}, 1)`}},i=t=>{var e=r.useContext(n);return r.createElement(s,Object.assign({},t,{rtl:e.locale.isRtl}))};return[()=>{t("IndicatorDotsUnconnected",s=class extends r.PureComponent{static getDerivedStateFromProps(t,e){return{directionUp:t.currentIndex>=e.currentIndex,numDots:t.numItems<t.numDots?t.numItems:t.numDots,currentIndex:t.currentIndex}}constructor(t){super(t),this.state={directionUp:!0,numDots:t.numItems<t.numDots?t.numItems:t.numDots,currentIndex:t.currentIndex}}render(){var{numItems:t,rtl:e,dotTheme:n,dotSpacing:s=20}=this.props,{numDots:i,currentIndex:l,directionUp:d}=this.state,{activeDotStyle:m,dotStyle:h,containerStyle:p}=u(n);if(i<=1)return null;var D=o(i,t,l,d);D.unshift(D[0]-1),D.push(D[i]+1);var v=D.map(((t,n)=>{var o=t===l;return r.createElement("div",{key:`indicator-dot-${t}`,className:a("_6mQ2PSh1",o?m:null,h),style:c(n,i,o,e,s)})}));return r.createElement("div",{className:a("_2qbrZ4xV",p,this.props.whiteBackground?null:"_2tiSupry",{Q97wTUxb:"greyMobile"===n})},r.createElement("div",{className:"_1BS2ZB3J",style:{width:(i+1)*s+6+"px"},"data-clicksource":"IndicatorDot"},v))}}),s.defaultProps={rtl:!1,dotSpacing:20,dotTheme:"white"},t("default",i),t({ACTIVE_DOT_SCALE:1.3,BOOKEND_DOT_SCALE:0,IndicatorDotsUnconnected:s,getDotRange:o,getDotStyle:c,getDotStyleClasses:u})},[t=>r=t,t=>n=t.Environment,t=>a=t.default]]},["cDcdfi","2R4xv2","jSLlaY"]]);
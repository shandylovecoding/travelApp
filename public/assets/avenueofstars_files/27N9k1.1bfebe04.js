(this.$WP=this.$WP||[]).push(["27N9k1",(e,t)=>{"use strict";var r,a,l,n,i,o,s,d,m,c,u,C,p,E=({model:e})=>{switch(e.__typename){case"AppPresentation_VerticalStandardCard":return r.createElement(c.Provider,{value:{container:"VERTICAL_MERCHANDISING",responsivity:"RESPONSIVE",photoCarousel:!1}},r.createElement(u,{model:e}));default:return r.createElement(s,{typename:e.__typename})}},k=e=>e&&e.filter(Boolean).some((e=>"AppPresentation_NoImageContributorCard"===e.__typename))||!1,v=({model:e})=>{var{content:t,seeAllV2:o,sponsoredBy:s,subtitle:c,wideCardsCarouselTitle:u,tooltip:p}=e,{trackClick:E}=d(),{text:v,url:h,trackingContext:P}=n({internalLink:o}),_=r.useCallback((()=>{E({clientContext:P||"",clientParameter:"WideCardsCarouselSeeAll"})}),[E,P]),f=null!==h?r.createElement(m,{href:h,theme:"standalone",trackingDetails:{clientContext:P||"",clientParameter:"WideCardsCarouselTitle"}},r.createElement(i,{model:u})):r.createElement(i,{model:u});return r.createElement(l,{title:f,subtitle:c&&r.createElement(i,{model:c}),sponsor:s&&r.createElement(i,{model:s}),link:{title:v?r.createElement(i,{model:v}):null,href:h,target:"newTabDesktop",onClick:_}},r.createElement(a,{size:"medium",variableHeight:k(t)},t&&t.filter(Boolean).map(((e,t)=>{var a;return r.createElement(C,{model:e,key:(null==e||null==(a=e.saveId)?void 0:a.id)||t})}))))};return[()=>{C=o(E),p=o(v),e("default",p)},[e=>r=e,e=>a=e.Carousel,e=>l=e.FlexContainer,e=>n=e.deriveLinkInfo,e=>i=e.default,e=>(o=e.FusionComponent,s=e.APSUnsupportedType,d=e.useTracking,m=e.FusionTrackedLink),e=>(c=e.CardBehavior,u=e.VerticalCardAdapter)]]},["cDcdfi","1weFyZ","lGLFQ7","1O47Wa","XNYdwH","PEYes_","3xStiR"]]);
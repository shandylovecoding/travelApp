(this.$WP=this.$WP||[]).push(["OuA73x",(e,t)=>{"use strict";var l,n,a,r,i,o,s,m,u,c,d=e=>e&&e.filter(Boolean).some((e=>"AppPresentation_NoImageContributorCard"===e.__typename))||!1,C=({model:e})=>{var{content:t,seeAllV2:s,sponsoredBy:c,subtitle:C,mediumCardsTitle:k}=e,{trackClick:E}=m(),{text:p,url:f,trackingContext:h}=r({internalLink:s}),b=l.useCallback((()=>{E({clientContext:h||"",clientParameter:"MediumCardsCarouselSeeAll"})}),[E,h]),g=null!==f?l.createElement(u,{href:f,theme:"standalone",trackingDetails:{clientContext:h||"",clientParameter:"MediumCardsCarouselTitle"}},l.createElement(i,{model:k})):l.createElement(i,{model:k});return l.createElement(a,{title:g,subtitle:C&&l.createElement(i,{model:C}),sponsor:c&&l.createElement(i,{model:c}),link:{title:p?l.createElement(i,{model:p}):null,href:f,target:"newTabDesktop",onClick:b}},l.createElement(n,{size:"medium",variableHeight:d(t)},t&&t.filter(Boolean).map(((e,t)=>l.createElement(o,{model:e,key:t})))))};return[()=>{c=s(C),e("default",c)},[e=>l=e,e=>n=e.Carousel,e=>a=e.FlexContainer,e=>r=e.deriveLinkInfo,e=>i=e.default,e=>o=e.MediumCardsCarouselContent,e=>(s=e.FusionComponent,m=e.useTracking,u=e.FusionTrackedLink)]]},["cDcdfi","1weFyZ","lGLFQ7","1O47Wa","XNYdwH","esWB6K","PEYes_"]]);

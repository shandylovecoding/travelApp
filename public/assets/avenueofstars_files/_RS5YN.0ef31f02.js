(this.$WP=this.$WP||[]).push(["_RS5YN",(e,t)=>{"use strict";var a,n,r,l,i,c,m,o,s,d,u,E,v,g,p,_,f,b,k,h,C,T,y,x,A,B,N,S,w,P,L,I,O,R,D,M,W,H,F,G,K,z,Y,$,X,Z,J,V,U,j,q,Q=({name:e,year:t=null,logo:a})=>{var{localize:r}=g(),l=null===t?null:((e,t)=>null!==e.to&&void 0!==e.to?t.string("sng_year_range_dash",{0:e.from,1:e.to}):e.from)(t,r),i=null===t?null:((e,t)=>null!==e.to&&void 0!==e.to?t.string("sng_year_range",{0:e.from,1:e.to}):"")(t,r);return n.createElement("div",{className:"_24ZbFxr3"},a,n.createElement("div",{className:"g1ZOP56o"},n.createElement(u,{variant:"title-05"},e),t&&n.createElement(u,{variant:"body-01"},n.createElement("div",{"aria-label":i},l))))},ee=({variant:e})=>n.createElement("div",{className:p({"_1ACk-h0E":"green"===e,_3bhrqUTs:"yellow"===e})},n.createElement("div",{className:"_2XmnO3MD"},n.createElement("div",{className:"_3ux4ce6D"},n.createElement(_,{name:"travelers-choice-badge",size:35})))),te=({year:e,variant:t})=>{var{localize:a}=g(),r="best-of-the-best"===t,l=a(r?"TC_BOTB_Header_2020":"phoenix_poi_awards_title_tc");return n.createElement("div",{className:"_1vGKDEK7"},n.createElement(Q,{logo:n.createElement(ee,{variant:r?"yellow":"green"}),name:l,year:e}))},ae=({variant:e})=>{var t,a,{localize:r}=g(),l=r("ds_award_michelin_text");switch(e){case"1-star":t=r("ds_award_michelin_one_star_label"),a="/img2/restaurant-awards/Stars/1-Star.svg";break;case"2-star":t=r("ds_award_michelin_two_star_label"),a="/img2/restaurant-awards/Stars/2-Stars.svg";break;case"3-star":t=r("ds_award_michelin_three_star_label"),a="/img2/restaurant-awards/Stars/3-Stars.svg";break;case"bib":t=r("ds_award_michelin_bib"),a="/img2/restaurant-awards/michelin/Bib.svg";break;default:t=r("ds_award_michelin_plate"),a="/img2/restaurant-awards/michelin/Assiette.svg"}return n.createElement("div",{className:"_2Gs6D7zM"},n.createElement(f,{src:a,alt:t}),n.createElement("span",{className:"_3U-MPf45",role:"presentation"},l))},ne=()=>{var{localize:e}=g(),t=e("ds_award_michelin_text");return n.createElement("div",{className:"_2DH480KM"},n.createElement("div",{className:"_3UoIo3xe"},n.createElement(f,{src:"/img2/restaurants/michelin_man.svg",alt:t})))},re=({variant:e})=>n.createElement(Q,{logo:n.createElement(ne,null),name:n.createElement(ae,{variant:e})}),le=e=>({from:l(e)}),ie=({model:e})=>{var{simpleAboutAwardYears:t,awardCategory:n}=e;switch(n){case"BEST_OF_THE_BEST":return a.createElement(te,{year:le(t||""),variant:"best-of-the-best"});case"TRAVELERS_CHOICE":return a.createElement(te,{year:le(t||""),variant:"default"});case"GREEN_LEADER":return a.createElement(v,{message:"Integrate the Green Leader Award",jira:"SNG-1049",valueToDump:e});default:return a.createElement(c,{typename:e.__typename})}},ce={ONE_STAR:"1-star",TWO_STARS:"2-star",THREE_STARS:"3-star",BIBGOURMAND:"bib"},me=e=>ce[e]?ce[e]:"plate",oe=({model:e})=>{var{michelinAwardType:t}=e;return t&&a.createElement(re,{variant:me(t)})},se=({model:e})=>{switch(e.__typename){case"AppPresentation_MichelinAboutAward":return a.createElement(D,{model:e});case"AppPresentation_SimpleAboutAward":return a.createElement(R,{model:e});default:return a.createElement(c,{typename:e.__typename})}},de=({model:e})=>{var{title:t,awards:n,subsectionType:r}=e;return a.createElement("div",{className:d({marginBottom:"spacing-04"})},t&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-02"},a.createElement(E,{model:t})),n&&n.map(((e,t)=>{return e&&a.createElement(M,{key:(n=t,`slot-${String(n)}`),model:e});var n})))},ue=({model:e})=>{var{subsectionText:t,title:n,contactLinks:r}=e;return a.createElement(a.Fragment,null,n&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-02"},a.createElement(E,{model:n})),t&&a.createElement(u,{variant:"body-01",marginBottom:"spacing-01"},a.createElement(E,{model:t})),r&&r.filter(Boolean).map(((e,t)=>a.createElement(b,{key:t,model:e}))))},Ee=({model:e})=>{var{link:t,improveThisListingText:n}=e,{url:r,text:l,trackingContext:i}=t?k(t):{},{trackClick:c}=m({clientContext:i}),o=a.useCallback((()=>{c()}),[c]);return null!=r&&l?a.createElement("div",{className:"_20MXCiZr"},a.createElement("div",{className:"_2tOed8Bv"},a.createElement(_,{name:"pencil"})),a.createElement("div",null,n&&a.createElement(u,{variant:"body-01",marginBottom:"spacing-01"},a.createElement(E,{model:n})),a.createElement(y,{href:r,onClick:o},a.createElement(E,{model:l})))):null},ve=({model:e,useBullets:t=!1,collapse:n=!1,onCollapsedClick:r})=>{var{list:l,title:i}=e,c=l&&l.filter(Boolean).map(((e,n)=>a.createElement("div",{className:p("_27zRYYRP",{_3SfT5ibD:t}),key:n},a.createElement(u,{variant:"body-01"},a.createElement(E,{model:e})))));return a.createElement("div",{className:d({marginBottom:"spacing-04"})},i&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-02"},a.createElement(E,{model:i})),l&&(n?a.createElement(B,{variant:"extended",contentCanToggle:!1,clickHandler:r,ctaHiddenInitially:!0},c):c))},ge=({model:e})=>a.createElement("div",null,a.createElement(v,{message:"AppPresentation_MichelinPovAward",jira:"TODO",valueToDump:e}),"AppPresentation_MichelinPovAward"),pe=({model:e})=>{var{title:t,awards:n}=e;return a.createElement("div",null,t&&a.createElement(u,{variant:"body-01"},a.createElement(E,{model:t})),n&&n.filter(Boolean).map(((e,t)=>{return a.createElement(K,{key:(n=t,`slot-${String(n)}`),model:e});var n})))},_e="_1Zlr5psK",fe=({fillTiming:e=0,expansionTiming:t=200,numberOfItems:a,selectedIndex:l=0,variant:i="default"})=>{var[c,m]=r(l),[o,s]=r(null);c!==l&&(s(c),m(l));var d=Math.min(a,10),{localize:u}=g();if(d<2)return null;if(c>=d||c<0)return null;var E=e>0;return n.createElement("div",{className:"_1esmFHKN","aria-label":u.string("item_navigation")},Array(d).fill().map(((a,r)=>{var l=r===c,m=r===o;return E?n.createElement("span",{className:p("_2KE6p1Pe",{_2EPO8Z1W:l,_1tOfWfAG:m,[_e]:"onDark"===i}),style:{animationDuration:l?`${t}ms`:"0ms"},"aria-label":u.string("sng_item_num_of_total_num",{0:r+1,1:d})},n.createElement("span",{className:"_1joi0VF4",style:{animationDuration:m?`${t}ms`:`${e}ms`}})):n.createElement("span",{className:p("_2Y3ZKafA",{_1x2eaJjh:l,[_e]:"onDark"===i}),"aria-label":u.string("sng_item_num_of_total_num",{0:r,1:d})})})))},be=({model:e})=>{var{title:t,description:n,couponCode:r,couponSubtext:l,validDates:i,redemptionLink:c,redemptionSubtext:o,isRedemptionWebsite:s,inactiveText:d}=e,{trackClick:v}=m(),{url:g,text:p,trackingContext:f}=h({internalOrExternalLink:c});return a.createElement("div",{className:"xJSJIl1A"},null!=t&&a.createElement(u,{variant:"title-02",marginBottom:"spacing-03"},t),null!=n&&a.createElement(u,{variant:"body-01",marginBottom:"spacing-03"},n),i&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-03"},a.createElement(E,{model:i})),null!=r&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-01"},r),l&&a.createElement(u,{variant:"supporting-02",marginBottom:"spacing-03"},a.createElement(E,{model:l})),d&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-03"},a.createElement(_,{name:"alert",size:20,color:"dangerIcon"}),a.createElement(E,{model:d})),p&&null!=g&&(!0===s?a.createElement(T,{variant:"primary",fullWidth:!0,href:g,target:"_blank",onClick:()=>{v({clientContext:f})}},a.createElement(E,{model:p})):a.createElement(y,{href:g,onClick:()=>{v({clientContext:f})}},a.createElement(E,{model:p}))),o&&a.createElement(u,{variant:"supporting-02",marginTop:"spacing-01",marginBottom:"spacing-03"},a.createElement(E,{model:o})))},ke=({isRight:e,onClick:t,disabled:n=!1})=>{var{localize:r}=g(),{viewportCategory:l}=a.useContext(w),i="MOBILE"===l;return a.createElement("div",{className:p({_2noZGKnp:e,_19uZqq93:!e,_1D_0cvRT:n})},a.createElement(x,{iconName:e?"arrow-right":"arrow-left",size:i?"small":"medium",onClick:t,variant:"primary-border","aria-label":e?r.string("next_offer"):r.string("previous_offer")}))},he=({offers:e})=>{var t,{isRtl:n}=a.useContext(P).locale,[r,l]=a.useState(0),i=a.useRef(-1),c=a.useRef(-1),m=a.useRef(-1),o=e.length,s=r>0,d=r<o-1,u=e=>{var t=r+("LEFT"===e?-1:1);t>=0&&t<o&&l(t)},E=()=>{if(-1===m.current||-1===c.current||-1===i.current)return i.current=-1,void(c.current=-1);var e=i.current-c.current;if(m.current<=Math.abs(e)){i.current=-1,c.current=-1;var t=n?-1:1,a=e/Math.abs(e);u(t*a==-1?"LEFT":"RIGHT")}};return a.createElement("div",{className:"_1clVOYnI",onTouchStart:e=>{var t;e&&e.currentTarget&&e.touches&&1===(null==(t=e.touches)?void 0:t.length)&&(m.current=.1*e.currentTarget.clientWidth,i.current=e.touches[0].pageX-e.currentTarget.offsetLeft,c.current=-1)},onTouchMove:e=>{var t;if(e&&e.currentTarget&&e.touches&&1===(null==(t=e.touches)?void 0:t.length)&&-1!==m.current&&-1!==i.current){c.current=e.touches[0].pageX-e.currentTarget.offsetLeft;var a=i.current-c.current;m.current<=Math.abs(a)&&E()}},onTouchEnd:E},a.createElement("div",{className:"_3XeLyumP",style:(t=100*r,{transform:`translateX(${n?`${t}%`:`-${t}%`})`,transition:"transform ease-out 0.45s"})},e.map(((e,t)=>a.createElement("div",{key:t,className:"_2_-5I5Mf"},a.createElement(Y,{model:e}))))),a.createElement(ke,{isRight:!1,onClick:e=>{e.stopPropagation(),e.preventDefault(),u("LEFT")},disabled:!s}),a.createElement(ke,{isRight:!0,onClick:e=>{e.stopPropagation(),e.preventDefault(),u("RIGHT")},disabled:!d}),a.createElement("div",{className:"W56rd80W"},a.createElement(fe,{numberOfItems:o,selectedIndex:r})))},Ce=({model:e,onClose:t})=>a.createElement(S,{onClose:t,widthOption:"fixed-40"},1===e.length?a.createElement("div",{className:"_14qoKluK"},a.createElement(Y,{model:e[0]})):a.createElement("div",{className:"_21ZY92wm"},a.createElement(he,{offers:e}))),Te=({model:e})=>{var{text:t,subText:n,specialOffers:r}=e,[l,{openModal:i,closeModal:c}]=N("specialOffers"),m=r.filter(Boolean)||[];return 0===m.length?null:a.createElement(a.Fragment,null,a.createElement(A,{onClick:i,leftAlign:!0},a.createElement(E,{model:t}),n&&a.createElement(E,{model:n})),l&&a.createElement($,{model:m,onClose:c}))},ye=({model:e})=>{var{subsectionTitle:t,hotelWebsite:n,specialOffers:r}=e,{trackClick:l}=m(),{url:i,text:c,trackingContext:o}=C(n);return a.createElement("div",{className:"_3s5KJFcJ"},t&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-02"},a.createElement(E,{model:t})),a.createElement("div",{className:"_3eEPNfcB"},c&&null!=i&&a.createElement(y,{href:i,target:"_blank",onClick:()=>{l({clientContext:o})},leftAlign:!0,rel:"nofollow",showExternalLinkIcon:!0},a.createElement(E,{model:c})),r&&a.createElement(X,{model:r})))},xe=({model:e,collapse:t=!1,onCollapsedClick:n})=>{var{list:r,title:l}=e,i=r&&a.createElement("ul",null,r.filter(Boolean).map((e=>a.createElement("li",{className:"_1OFdf-s_",key:e.text},a.createElement(u,{variant:"body-01"},a.createElement(E,{model:e}))))));return a.createElement("div",{className:d({marginBottom:"spacing-04"})},l&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-02"},a.createElement(E,{model:l})),r&&(t?a.createElement(B,{variant:"extended",contentCanToggle:!1,clickHandler:n,ctaHiddenInitially:!0},i):i))},Ae=({model:e,collapse:t=!1,onCollapsedClick:n})=>{var{text:r,title:l}=e,i=r&&a.createElement("div",{className:"_1-hfw1lg"},a.createElement(L,{model:r}));return a.createElement("div",{className:d({marginBottom:"spacing-04"})},l&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-02"},a.createElement(E,{model:l})),r&&(t?a.createElement(B,{variant:"extended",contentCanToggle:!1,clickHandler:n,ctaHiddenInitially:!0},i):i))},Be=({model:e})=>{var{tags:t,subsectionType:n}=e;return a.createElement("div",{className:d({marginBottom:"spacing-03"})},t&&t.filter(Boolean).map(((e,t)=>{return a.createElement(I,{key:(n=t,`slot-${String(n)}`),model:e});var n})))},Ne=({model:e})=>{var{link:t,text:n,title:r}=e,{url:l,trackingContext:i}=h({internalOrExternalLink:t}),{trackClick:c}=m({clientContext:i}),o=a.useCallback((()=>{c()}),[c]);return a.createElement("div",{className:"_1PSE8m1V"},a.createElement("div",null,a.createElement(_,{name:"pet-friendly"})),a.createElement("div",null,r&&a.createElement(u,{variant:"title-05",marginBottom:"spacing-01"},a.createElement(E,{model:r})),null!=l&&n&&a.createElement(y,{href:l,target:"_blank",onClick:o,marginBottom:"spacing-03",leftAlign:!0},a.createElement(O,{model:n}))))},Se=({model:e,collapse:t=!1,onCollapsedClick:n})=>{var r=n?e=>("CTA"===e&&n(),!1):null;switch(e.__typename){case"AppPresentation_AwardsAboutSubsection":return a.createElement(W,{model:e});case"AppPresentation_ContactSubsection":return a.createElement(H,{model:e});case"AppPresentation_ImproveThisListingSubsectionWeb":return a.createElement(F,{model:e});case"AppPresentation_LongTextListSubsection":return a.createElement(G,{model:e,collapse:t,onCollapsedClick:r});case"AppPresentation_MichelinPovSubsection":return a.createElement(z,{model:e});case"AppPresentation_RelatedLinksSubsection":return a.createElement(Z,{model:e});case"AppPresentation_SmallTextListSubsection":return a.createElement(J,{model:e,collapse:t,onCollapsedClick:r});case"AppPresentation_StandaloneInfoSubsection":return a.createElement(V,{model:e,collapse:t,onCollapsedClick:r});case"AppPresentation_TagCloudAboutSubsection":return a.createElement(U,{model:e});case"AppPresentation_TextGroupWithIconSubsection":return a.createElement(j,{model:e});default:return a.createElement(c,{typename:e.__typename})}};return[()=>{R=i(ie),D=i(oe),M=i(se),W=i(de),H=i(ue),F=i(Ee),G=o(ve),K=i(ge),z=i(pe),Y=i(be),$=s(Ce),X=i(Te),Z=i(ye),J=s(xe),V=s(Ae),U=i(Be),j=i(Ne),q=s(Se),e("default",q),e("LongTextListSubsection",G)},[e=>(a=e,n=e.default,r=e.useState),e=>(l=e.stringToNumber,i=e.FusionComponent,c=e.APSUnsupportedType,m=e.useTracking,o=e.fuse,s=e.fused),e=>d=e.margin,e=>u=e.default,e=>E=e.default,e=>v=e.default,e=>g=e.useLocalize,e=>p=e.default,e=>_=e.default,e=>f=e.CdnImage,e=>b=e.default,e=>(k=e.deriveLinkInfoFromInternalOrExternalLink,h=e.deriveLinkInfo,C=e.deriveLinkInfoFromExternalLink),e=>(T=e.default,y=e.BorderlessButtonLink,x=e.CircularButton,A=e.BorderlessButton),e=>B=e.default,e=>N=e.useModalWithTracking,e=>S=e.Modal,e=>(w=e.Device,P=e.Environment),e=>L=e.default,e=>I=e.default,e=>O=e.default]]},["cDcdfi","PEYes_","iekllc","VP50Wc","XNYdwH","mUW0_y","0DsHEV","jSLlaY","pyY-iJ","4kVXmt","PAGJjn","1O47Wa","7yGKf-","McEGSJ","4w1BVK","E1X9WP","2R4xv2","U4FDTr","oTK87H","kTE9EF"]]);
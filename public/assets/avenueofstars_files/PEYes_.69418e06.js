(this.$WP=this.$WP||[]).push(["PEYes_",(e,t)=>{"use strict";var r,n,a,l,s,i,u,o,c,d,v,g,m,f,p,T,h,R,E,O,A,S,y,b,P,k,I,C,N,_,L,j,w,q,D,x,F,M,$,U,G,Q,H={APS_SSR_ERROR:"fusion-apsError-count",APS_SSR_PARTIAL:"fusion-apsPartial-count",GRAPHQL_SSR_ERROR:"fusion-graphQLError-count"};function V(e,t){r("global",H[e],t)}function B(){var e=n.useContext(o);return n.useCallback((()=>{var[t,{navigate:r}]=e;r(t,"PARAM_UPDATE",!0)}),[e])}var K="navbar",Y="category",z="allAttractions",W="attractionType",J="type",X="attraction",Z="attraction_product",ee="hotel",te="restaurant",re="AttractionsFusion",ne="Attraction_ReviewFusion",ae="AttractionProductsFusion",le="AttractionProductReviewFusion",se="HotelsFusion",ie="HotelsListFusion",ue="Hotel_ReviewFusion",oe="RestaurantsFusion",ce="Restaurant_ReviewFusion",de="REMOVE",ve=(e,t)=>{var{contentType:r="none",geoId:n="none"}=t||{};return`${String(n)}~${String(r)}~${e}`},ge=e=>ve("filters",e),me=(e,t)=>{var{filters:r=[]}=e||{},n=ge(e),a=((e,t)=>{var r=(e=>{if(!e)return new Set;var t=m(e),r=null==t?void 0:t.pageParameters.flatMap((e=>"string"!=typeof e.type&&"Filters"===e.type.name?e.type.filters:e)).filter((({category:e})=>"CANONICAL"===e)).map((e=>e.apiName));return new Set(r||[])})(t);return(null==e?void 0:e.filter((e=>e&&e.id&&!r.has(e.id))))||[]})(r,t);a.length>0?g.set(n,a):g.remove(n)},fe=e=>e&&e.id?{id:e.id,value:(e.value||[]).filter(Boolean)}:null,pe=(e,t)=>{return[...new Map((r=[...e,...t],r.filter(Boolean).map(fe).filter(Boolean)).map((e=>[e.id,e]))).values()];var r},Te=(e,t)=>{var r=new Map;return e.forEach((e=>r.set(e.id,e))),t.forEach((e=>{var t=r.has(e.id)?r.get(e.id):{id:e.id,value:e.value},n=((e,t,r,n)=>{var a=new Set(t||e||[]);return null==r||r.forEach((e=>a.add(e))),null==n||n.forEach((e=>a.delete(e))),Array.from(a.keys())})(null==t?void 0:t.value,e.value,e.selected,e.deselected);r.set(e.id,{id:e.id,value:n})})),Array.from(r.entries()).map((([,e])=>e))},he=(e,t)=>{var r=[...e,...t],n=new Map;return r.forEach((e=>{var t,r,a,l=n.get(e.id);n.set(e.id,null!=l?(r=e,{id:(t=l).id,selected:[...new Set([...t.selected||[],...r.selected||[]])],deselected:[...new Set([...t.deselected||[],...r.deselected||[]])],value:((null==(a=r.value)?void 0:a.length)||0)>0?r.value:t.value}):e)})),Array.from(n.entries()).map((([,e])=>e))},Re=e=>{var t=e.getFullYear(),r=e.getMonth()+1;r=r<10?`0${r}`:r;var n=e.getDate();return`${t}-${r}-${n=n<10?`0${n}`:n}`},Ee=(e,t)=>{var r=new Date(e);return t&&(r.setHours(t.hour),r.setMinutes(t.minute)),Re(r)},Oe=e=>{var t;if(null!=(null==e?void 0:e.find((e=>"navbar"===(null==e?void 0:e.id)))))return[];var r=null==e?void 0:e.find((e=>"category"===(null==e?void 0:e.id))),n=null==r||null==(t=r.value)?void 0:t[0];return n&&n.length>2?[{id:"navbar",value:[`APLIST:${n}-true`]}]:[]};function Ae(e,t,r=!1){return!!t&&(!r||e!==X&&e!==Z?t.filter(Boolean).length>0:t.filter(Boolean).filter((e=>e.id&&!q.has(e.id))).length>0)}var Se=e=>{var[{data:t,fetching:r,error:n}]=e;if(!1===r){if(n&&"CombinedError"===n.name)return 503;if(null==t?void 0:t.Result){var{status:a}=t.Result[0];if(!1===a.success||!0===a.partial)return 503}}return 200},ye=({children:e,href:t="#",theme:r="none",target:a="newTabDesktop",trackingDetails:l,accessibilityString:s,onClick:i})=>{var u=p(a),{trackClick:o}=T(l),c=n.useCallback((()=>(i&&i(),o(),!0)),[i,o]);return n.createElement(f,{target:u,theme:r,onClick:c,href:t,"aria-label":s},e)},be={S:(e,t)=>{Object.assign(e.dataset,{strikethroughStart:t("fusion_strikethrough_start"),strikethroughEnd:t("fusion_strikethrough_end")})},SPAN:(e,t)=>{if(e.classList.contains("strikethrough")){var r=e.innerHTML,n=e.ownerDocument.createElement("s");n.innerHTML=r,be.S(n,t),e.innerHTML="",e.appendChild(n)}}},Pe=({tagName:e="span",content:t})=>{var{localize:r}=E(),a=n.useRef();return n.useEffect((()=>{var e=a.current;if(e){var t=new Set;if([...e.querySelectorAll("*")].map((e=>{[...e.getAttributeNames()].forEach((t=>{("class"!==t||"class"===t&&"strikethrough"!==e.getAttribute(t))&&e.removeAttribute(t)}));var t=e.tagName.toUpperCase();return t in be&&be[t](e,r),t})).forEach((e=>{D.has(e)||t.add(e)})),t.size>0){var n=[...t].join(","),l=`HtmlString should not contain: ${n}`;console.error(l),e.dataset.apsUnexpected=n}}}),[t,r]),n.createElement(e,{className:"_2tsgCuqy",dangerouslySetInnerHTML:{__html:t},ref:a})},ke=e=>{var t,r,n=(null==e||null==(t=e.routeParameters)?void 0:t.pagee)&&parseInt(null==e||null==(r=e.routeParameters)?void 0:r.pagee,10);return n&&!Number.isNaN(n)?n:0};function Ie(){var[{page:e,params:t}]=n.useContext(o);return(null==t?void 0:t.contentType)?t.contentType:(e=>(/(hotel|lastminute|showuserreviews|smartdeals)/i.test(e)?ee:/^(attraction_product|attractionproductreview)/i.test(e)&&Z)||/^attraction/i.test(e)&&X||/^restaurant/i.test(e)&&te||null)(e)}var Ce=e=>{var{attractions:t}=e,r={},n=(e=>{var t=[];return null!=e.adults&&e.adults>0&&t.push({ageBand:"ADULT",count:e.adults}),t.length||t.push({ageBand:"ADULT",count:2}),t})(t);return n.length>0&&(r={pax:n}),t.fromDate&&(r=Object.assign({},r,{startDate:Re(t.fromDate)})),t.toDate&&(r=Object.assign({},r,{endDate:Re(t.toDate)})),t.fromDate&&t.toDate&&(r=Object.assign({},r,{setByUser:!0})),Object.keys(r).length>0?Object.assign({},r):null},Ne=e=>{var{hotels:t}=e;return{checkIn:(null==t?void 0:t.checkInDate)&&!t.defaultDates?Re(t.checkInDate):null,checkOut:(null==t?void 0:t.checkOutDate)&&!t.defaultDates?Re(t.checkOutDate):null,rooms:(()=>{var e=[];if(t){var{rooms:r,adults:n,children:a,childAgesPerRoom:l}=t;a>0&&(!l||r<l.length)&&console.error("Malformed hotel travel info, rooms vs. childAgesPerRoom",r,l.length,a);for(var s=0,i=0,u=0;u<n;u++)e[s]?e[s]=Object.assign({},e[s],{adults:e[s].adults+1}):(e[s]={adults:1},l[s]&&Array.isArray(l[s])&&l[s].length&&(e[s]=Object.assign({},e[s],{childrenAges:l[s]}),i+=l[s].length)),++s>=r&&(s=0);i!==(a||0)&&console.error(`Hotel info mismatch: totalChildren for ${r} rooms: ${i} != ${a}`,JSON.stringify(l))}return 0===e.length?null:e})(),setByUser:null!==t&&!t.defaultDates||null}},_e=e=>{var{restaurants:t}=e;return t.date?{partySize:t.guests||1,reservationTime:t.date&&Ee(t.date,t.time)}:null};function Le(){var[{page:e,path:t}]=n.useContext(o);return((e,t)=>/\/Hotel_Review-s1-+/i.test(t)?"HotelHighlight":e)(e,t)}function je(){var e=Le(),[,{uid:t}]=n.useContext(o);return n.useMemo((()=>({screenName:e,pageviewUid:t})),[e,t])}var we=(e,t,r)=>{var{route:n,pageName:a}=e;if(n&&b(a)){var l=Object.assign({},n.params,{},t);if(n.page!==a||!k(n.params,l))return Object.assign({},n,{page:r||a,params:l})}return null},qe=(e,t,r)=>{var n,a=0!==t?String(t):null,l=((e,t)=>{var{listRequest:r,pageName:n}=e,{routeParameters:a=null}=r,l=null==a?void 0:a.filters;if(n===re){var s,i=null==a||null==(s=a.filters)?void 0:s.filter((e=>(null==e?void 0:e.id)!==z));l=(null==i?void 0:i.length)||null!=t?i:[w]}return l})(e,a),s=null==(n=e.listRequest.routeParameters)?void 0:n.sort,i=we(e,{pagee:a,sort:s,filters:l});return i?(r(i),Object.assign({},e,{navigating:!0})):e},De=(e,t)=>{var r=Object.assign({},e,{detailRequest:Object.assign({},e.detailRequest,{routeParameters:Object.assign({},e.detailRequest.routeParameters,{pagee:null})})}),n=we(e,{offset:null});return n?(t(n,"IN_PLACE"),Object.assign({},r,{navigating:!0})):r},xe=(e,t)=>{var r;return Object.assign({},e,{commerce:Object.assign({},e.commerce,{attractionCommerce:Object.assign({},null==(r=e.commerce)?void 0:r.attractionCommerce,{startDate:null!=t.dates?Re(t.dates.startDate):null,endDate:null!=t.dates?Re(t.dates.endDate):null,setByUser:null!=t.dates})})})},Fe=(e,t,r)=>{var n,a,l,s,i,u,o,c,d,v,g,m,f,p,T=(e,t)=>r(e,t||(b(e.page)?"PARAM_UPDATE":"PAGE_VIEW"));switch(t.type){case"reinitialize":var h,R,E=null==(h=e.detailRequest)?void 0:h.routeParameters,O=null==(R=t.newState.detailRequest)?void 0:R.routeParameters;return"detail"===e.screenType&&(null==E?void 0:E.contentId)===(null==O?void 0:O.contentId)&&(null==E?void 0:E.contentType)===(null==O?void 0:O.contentType)?(c=e,d=t.newState,p=(f=null==(v=c.commerce)||null==(g=v.attractionCommerce)?void 0:g.pax)&&(null==(m=d.commerce)?void 0:m.attractionCommerce)?Object.assign({},d.commerce,{attractionCommerce:Object.assign({},d.commerce.attractionCommerce,{pax:f})}):d.commerce,Object.assign({},d,{commerce:p,detailRequest:Object.assign({},d.detailRequest,{clientState:c.detailRequest.clientState})})):t.newState;case"updateRouteParameters":return Object.assign({},e,{listRequest:Object.assign({},e.listRequest,{routeParameters:Object.assign({},e.listRequest.routeParameters,{},t.routeParameters)})});case"setUpdateToken":return Object.assign({},e,{detailRequest:Object.assign({},e.detailRequest,{updateToken:t.updateToken}),listRequest:Object.assign({},e.listRequest,{updateToken:t.updateToken}),updateToken:t.updateToken});case"setFilter":return((e,t,r)=>{var{listRequest:n,pageName:a}=e,{routeParameters:l=null}=n,s=pe((null==l?void 0:l.filters)||[],t);s=s.filter((({value:e})=>null!=e&&0!==e.length&&e[0]!==de));var i=a;if(a===re||a===ae){var u,o,c,d,v,g,m,f,p=t.find((e=>e.id===K)),T=t.find((e=>e.id===Y)),h=t.find((e=>e.id===J)),R=null==T||null==(u=T.value)?void 0:u[0],E=null==l||null==(o=l.filters)||null==(c=o.find((e=>(null==e?void 0:e.id)===Y)))||null==(d=c.value)?void 0:d[0],O=null==h||null==(v=h.value)?void 0:v[0],A=null==l||null==(g=l.filters)||null==(m=g.find((e=>(null==e?void 0:e.id)===J)))||null==(f=m.value)?void 0:f[0];if(p){var S,y=(null==(S=p.value)?void 0:S[0])||"",[,b,P,k]=y.match(/^(ATTRACTIONOVERVIEW|APLIST):(\d*)-(true|false)/)||[];"false"===k&&("ATTRACTIONOVERVIEW"===b?(i=re,s=P&&""!==P?[{id:Y,value:[P]}]:[w]):"APLIST"===b&&(i=re,"11867"===P?s=P&&""!==P?[{id:Y,value:["63"]}]:[]:"12024"===P&&(s=P&&""!==P?[{id:Y,value:["41"]}]:[])))}else T&&R!==E&&(s=[T]);s=E&&"61"===E&&O!==A?s.filter((e=>(null==e?void 0:e.id)!==K&&((null==e?void 0:e.id)===Y||(null==e?void 0:e.id)===J))):s.filter((e=>(null==e?void 0:e.id)!==K))}var I=Object.assign({},n.routeParameters,{filters:[...s,...Oe(s)],pagee:void 0}),C=Object.assign({},e,{listRequest:Object.assign({},e.listRequest,{routeParameters:I})});me(I,i);var N=we(e,I,i===ie?se:null);return N?(r(N),Object.assign({},C,{navigating:!0})):C})(e,t.filters,T);case"resetPageNumber":return((e,t)=>{var r,n=Object.assign({},null==e||null==(r=e.listRequest)?void 0:r.routeParameters,{pagee:void 0}),a=Object.assign({},e,{listRequest:Object.assign({},e.listRequest,{routeParameters:n})}),l=we(e,n);return l&&t(l),a})(e,T);case"updateReviewFilters":return De(Object.assign({},e,{detailRequest:Object.assign({},e.detailRequest,{updateToken:null,clientState:{userInput:(u=(null==(n=e.detailRequest.clientState)?void 0:n.userInput)||[],o=t.filters,[...o,...u].filter(((e,t,r)=>t===r.findIndex((t=>(null==t?void 0:t.inputKey)===(null==e?void 0:e.inputKey))))))}})}),T);case"removeReviewFilters":return De(Object.assign({},e,{detailRequest:Object.assign({},e.detailRequest,{clientState:{userInput:(s=t.filtersToRemove,i=(null==(a=e.detailRequest.clientState)?void 0:a.userInput)||[],s.findIndex((e=>e&&"*"===e))>=0?[]:i.filter((e=>!s.includes(null==e?void 0:e.inputKey))))}})}),T);case"resetReviewFilters":return De(Object.assign({},e,{detailRequest:Object.assign({},e.detailRequest,{clientState:{userInput:[]}})}),T);case"paginate":return qe(e,t.offset,T);case"setSort":return((e,t,r)=>{var n,a=Object.assign({},null==e||null==(n=e.listRequest)?void 0:n.routeParameters,{sort:t,pagee:void 0}),l=Object.assign({},e,{listRequest:Object.assign({},e.listRequest,{routeParameters:a})}),s=we(e,a);return s?(r(s),Object.assign({},l,{navigating:!0})):l})(e,t.sort,T);case"setAttractionsDates":return xe(e,t);case"setAttractionsListDates":return qe(xe(e,t),0,T);case"setAttractionsPax":return Object.assign({},e,{commerce:Object.assign({},e.commerce,{attractionCommerce:Object.assign({},null==(l=e.commerce)?void 0:l.attractionCommerce,{pax:t.pax})})});case"resetFilters":return((e,t)=>{var r,{listRequest:n,pageName:a}=e,l=[];e.pageName===re&&0===((null==(r=l)?void 0:r.length)||0)&&(l=[w]);var s=Object.assign({},n.routeParameters,{filters:l,pagee:void 0}),i=Object.assign({},e,{listRequest:Object.assign({},e.listRequest,{routeParameters:s})});if(me(s,a),t){var u=we(e,s);if(u)return t(u),Object.assign({},i,{navigating:!0})}return i})(e,t.noNavigate?null:T);case"navigate":return T(t.route),e;default:return console.error("Unhandled action",t.type),e}},Me={screenType:"list",contentType:null,pageName:null,listRequest:{},detailRequest:{},commerce:null,sessionId:null,currentGeoPoint:null,tracking:null,updateToken:null,route:null,navigating:!0},$e=()=>n.useContext($),Ue=({children:e})=>{A(),S();var[t,r]=function(){var e=n.useContext(o),t=n.useContext(c),r=n.useContext(d),a=function(){var[{page:e}]=n.useContext(o);return M.list.includes(e)?"list":M.detail.includes(e)?"detail":(console.error("Unknown mapping for",e,"assuming 'list'"),"list")}(),[l,{navigate:s}]=e,i=Ie(),u=function(){var e=n.useContext(c),t=Ie();return n.useMemo((()=>t===ee?{hotelCommerce:Ne(e)}:t===X||t===Z?{attractionCommerce:Ce(e)}:t===te?{restaurantCommerce:_e(e)}:null),[t,e])}(),{page:v}=l,f=I()?"MILES":"KILOMETERS",{sessionId:p}=r,{preferences:{currency:T}}=t,h=je(),R=function(){var[{params:e,page:t}]=n.useContext(o),r=Ie(),a=je(),l=(()=>{var e,t,r=N(),[{params:a,page:l}]=n.useContext(o),s=null!=a.geoId?a.geoId:void 0,i=null!=a.contentId?parseInt(a.contentId,10):0,u=n.useMemo((()=>({query:F,variables:{contentId:i},pause:!r||l!==ie||null!=s&&s>0||0===i})),[r,l,s,i]),[{data:c,fetching:d,error:v}]=C(u);return null!=s&&s>0||d||v?s:null==c||null==(e=c.result)||null==(t=e[0])?void 0:t.geoId})();return n.useMemo((()=>{var n,s,i,u={tracking:a},o=!1;if(b(t)){var c,d=(e=>{var t,r,n=(r=null==(t=m("AppList"))?void 0:t.pageParameters.map((e=>e.apiName)),new Set(r||[])),a={};return Object.entries(e||{}).forEach((([e,t])=>{n.has(e)&&(a[e]=t)})),a})(e);o=((null==d||null==(c=d.filters)?void 0:c.length)||0)>0,i=Object.assign({geoId:l},d)}else{var{offset:v}=e;o=Object.keys(e).length>1;var{filters:f,pagee:p}=o?{pagee:v?String(v):"0",filters:[]}:{};i={contentType:r,filters:f,geoId:l,pagee:p}}return i=o?(e=>{var t=(e=>g.get((e=>ve("sort",e))(e))||null)(e);return t?Object.assign({},e,{sort:e.sort||t.sort,sortOrder:e.sort||t.sort}):e})(i):i,(e=>{var{routeParameters:t}=e;if(t){var r=(e=>g.get(ge(e))||[])(t),{filters:n}=t;if(r&&n)return Object.assign({},e,{routeParameters:Object.assign({},t,{filters:pe(r,n)})})}return e})(Object.assign({},u,{routeParameters:Object.assign({},i,{filters:[...(null==(n=i)?void 0:n.filters)||[],..."attraction"===r?Oe(null==(s=i)?void 0:s.filters):[]]})}))}),[r,t,e,a,l])}(),E=function(){var e,[{params:t}]=n.useContext(o),r=je(),a=Ie(),l=null;return t.contentId?l=t.contentId:t.detailId&&(l=String(t.detailId)),t.offset&&(e=String(t.offset).replace(/[^0-9]/g,"")),n.useMemo((()=>({tracking:r,routeParameters:{contentType:a,contentId:l,pagee:e}})),[r,a,l,e])}(),O=n.useMemo((()=>({screenType:a,contentType:i,pageName:v,commerce:u,listRequest:R,detailRequest:E,currency:T,unitLength:f,sessionId:p,tracking:h,currentGeoPoint:null,route:l,navigating:!1})),[a,i,v,u,R,E,T,f,p,h,null,l]),[A,S]=n.useState(O);n.useEffect((()=>{S((e=>Fe(e,{type:"reinitialize",newState:O},(()=>{}))))}),[O]);var y=n.useCallback((e=>{S((t=>Fe(t,e,s)))}),[s]);return n.useMemo((()=>[A,y]),[A,y])}(),a=n.useMemo((()=>({state:t,dispatch:r})),[t,r]);return n.createElement($.Provider,{value:a},n.createElement(y,{includeWebSiteSchema:!0}),n.createElement(P,null,e,n.createElement(O,null)))},Ge=()=>{var{dispatch:e}=$e();return t=>{e({type:"setFilter",filters:t})}};function Qe(){var{viewportCategory:e}=a(v);return l((()=>({value:e,mobile:"MOBILE"===e,tablet:"TABLET"===e,desktop:"DESKTOP"===e,tabletOrSmaller:"MOBILE"===e||"TABLET"===e,tabletOrLarger:"TABLET"===e||"DESKTOP"===e})),[e])}function He(e,t=!0){if(e){var r=!!e.networkError,n=e.graphQLErrors&&e.graphQLErrors.length>0,a={networkError:r,graphQLError:n,anyError:r||n,toString:()=>e?function(e){var{networkError:t,graphQLErrors:r}=e,n=new Map;if(t){var{name:a,message:l}=t;n.set(`${a}: ${l}`,1)}return r&&r.forEach((e=>{var t;if("string"==typeof e)t=`GraphQLError: ${e}`;else{var{name:r,message:a}=e;t=`${r}: ${a}`}var l=n.get(t);l?n.set(t,l+1):n.set(t,1)})),[...n.entries()].map((([e,t])=>`${e} (${t} times)`)).join("\n")}(e):null};return t&&a.anyError&&V("GRAPHQL_SSR_ERROR",1),a}return{networkError:!1,graphQLError:!1,anyError:!1}}var Ve=1e3;function Be(e){var t,r,[a,l]=n.useState(null),s=n.useRef([]),{current:i}=s,[u,o]=n.useMemo((()=>{var{query:t,variables:r,pause:n}=e,{pollInterval:l,updateToken:i,lastQuery:u}=a||{},o=k(r,u),c=null==r?void 0:r.request;return c&&l&&l>0&&i&&o?(i.substr(-20),[{query:t,variables:Object.assign({},r,{request:Object.assign({},c,{updateToken:i})}),pause:n},!0]):(s.current=[],[e,!1])}),[e,a]),[c,d]=L(u,Se),v=Array.isArray(null==c||null==(t=c.data)?void 0:t.Result)?c.data.Result[0]:null==(r=c.data)?void 0:r.Result;n.useEffect((()=>{var t,r;!1===(null==v||null==(t=v.status)?void 0:t.success)&&console.error("[useAPSQuery] query failure",null==v||null==(r=v.status)?void 0:r.message);var{pollingStatus:n=null}=(null==v?void 0:v.status)||{},{delayForNextPollInMillis:s=null,updateToken:i=null}=n||{},u=s||Ve;u&&u<Ve&&(u=Ve);var o,c={lastQuery:Object.assign({},e.variables),pollInterval:s,updateToken:i};return s&&s>0&&c&&!k(c,a)&&(o=setTimeout((()=>{l(c)}),u)),()=>{o&&clearTimeout(o)}}),[s,v,a,e,o]);var{pollingStatus:g=null}=(null==v?void 0:v.status)||{},m=!(null==g?void 0:g.updateToken);return n.useMemo((()=>{var{data:e,fetching:t,error:r}=c;if(o&&!t&&!r&&e){s.current=((e,t)=>{var r,n;if(!t)return e;var a=null==t||null==(r=t.Result)?void 0:r[0];if(!a)return e;if(!e||0===e.length)return a.sections;var{updatedClusterIds:l}=a;if(!l)return e;var s=[];e.forEach((e=>{var t={section:e,next:null},r={head:t,tail:t};s.push(r)}));var i,u,o=(i=e,u=new Map,i.forEach(((e,t)=>{if(e){var r=u.get(e.clusterId)||[];r.push(t),u.set(e.clusterId,r)}})),u),c=new Map,d=s[s.length-1];null==(n=a.sections)||n.forEach((e=>{var t={section:e,next:null},r=o.get(e.clusterId);if(null==r||0===r.length){var n=c.get(e.clusterId);n?(n.tail.next=t,n.tail=t,d=n):(d.tail.next=t,d.tail=t)}else{var a=r.shift(),l={head:t,tail:t};s[a]=l,d=l,c.set(e.clusterId,l)}})),l.filter(Boolean).forEach((t=>{var r;null==(r=o.get(t))||r.forEach((t=>{var r,n;t===e.length-1&&null!==(null==(r=s[t].head)?void 0:r.next)&&void 0!==(null==(n=s[t].head)?void 0:n.next)?s[t].head=s[t].head.next:s[t].head=null}))}));var v=[];return s.forEach((e=>{for(var t=e.head;null!=t;)v.push(t.section),t=t.next})),v})(s.current,e)||[];var n=((e,t)=>{if(e&&e.Result&&t){var r,n=null==(r=e.Result)?void 0:r[0];if(n)return Object.assign({},e,{Result:[Object.assign({},n,{sections:t})]})}return e})(e,i);if(n)return[{data:Object.assign({},e,{},n),fetching:t,error:r,polling:o&&!m},d]}return[{data:e,fetching:t&&!o,polling:!m,error:r},d]}),[i,o,m,c,d])}function Ke(e){var{shouldPoll:t}=e;return function(e){var[r,n]=s(0),a=L(e),l=i((()=>{n(r+1)}),[r]),[{error:o}]=a;return He(o),u((()=>{n(0)}),[e]),u((()=>{var[{data:e,fetching:n},s]=a;if(!n){var{poll:i,delay:u}=t(e,r);if(i&&u>0){var o=Math.max(u,300);setTimeout((()=>{s({requestPolicy:"cache-and-network"}),l()}),Math.max(o,300))}}return()=>{}}),[e,a,l,r]),a}}var Ye="[Fusion/APSUnexpected]",ze={INFO:{alertLevel:"primary",log:e=>{}},WARNING:{alertLevel:"warning",log:e=>console.warn(Ye,e)},ERROR:{alertLevel:"danger",log:e=>console.error(Ye,e)}},We=({message:e,level:t="ERROR"})=>{var r=N(),n=ze[t]||ze.ERROR;return u((()=>{var a=`${t}~${e}`;r&&e&&!U.has(a)&&n.log(e),U.add(a)}),[t,e,n,r]),null},Je=({queryName:e,urqlError:t,apsStatus:r,emptyResponse:a,fetching:l,children:s})=>{var i,u,o,c=!1,d="retry",v=a&&!l;if(v||t){var g=v?" is empty":"",m=!!(null==t?void 0:t.networkError)||!1,f=t?` with error: ${i=t,o=[],(null==i||null==(u=i.networkError)?void 0:u.message)&&o.push("network error"),(null==i?void 0:i.graphQLErrors.length)>0&&o.push(`[GraphQL] ${i.graphQLErrors[0].message.replace(/Error #[0-9]+/g,"Error #xxx")}${i.graphQLErrors.length>1?"...":""}`),o.join(" ")}`:"";console.error(`[Fusion] GraphQL error for ${e}`,`GraphQL response${g}${f}`),c=v,d=m?"sync-error":"retry"}if(!l){if(!1===(null==r?void 0:r.success)){var p=(null==r?void 0:r.message)?` with message: ${null==r?void 0:r.message}`:"";console.error(`[Fusion] APS error for ${e}`,p)}null==r||r.partial}return c?n.createElement("div",null,n.createElement(_,null,n.createElement(j,{variant:d})),s):s},Xe=e=>null==e,Ze=e=>{if(Xe(e))throw new Error(`[Fusion] Unexpected null/undefined filter value: ${String(e)}`);var t=Number(e);if(isNaN(t))throw new Error(`[Fusion] Bad number value: ${String(e)}`);return t};function et(e){var t=[];return Xe(e)||null==e||e.forEach((e=>{null!=e&&t.push(e)})),t}var tt=({typename:e})=>n.createElement(We,{message:`Unsupported type: ${String(e)}`});function rt(e,t){return k(e,t)}function nt(e){return n.memo(e,rt)}var at={nullCheck:"none",trackVisible:!0,memoize:!1};function lt(e,t){var r,{trackVisible:a,nullCheck:l="error",extraContext:s,whenNull:i,memoize:u}=Object.assign({},at,{},t),o=u?nt(e):e,c=function(e){var{model:t}=e;if(null==t&&"none"!==l){try{console[l]("[Fusion/NullCheck] unexpected null model")}catch(e){console.error("[Fusion]",e)}if(i)return i()}var r,{trackingKey:u,trackingTitle:c}=(null==(r=e.model)?void 0:r.trackingKey)?{trackingKey:r.trackingKey,trackingTitle:r.trackingTitle}:{trackingKey:null,trackingTitle:null},d=n.createElement(o,e);return h(u)?n.createElement(R,{trackingKey:u,trackingTitle:c||"DEFAULT",context:s,noVisibility:!1===a},d):d};return c.displayName=`Fused(${r=e,r.displayName||r.name||"Component"})`,c}function st(e,t=!0,r){return lt(e,{trackVisible:t,extraContext:r,memoize:!0})}function it(e,t=!0,r){return st(e,t,r)}function ut(e,t){var r=()=>n.createElement("div",null,t&&t.map(((t,r)=>n.createElement("div",{key:r},n.createElement(e,{model:t}),n.createElement("hr",null)))));return r.displayName="APSStory",r}return e({APSStory:ut,FusionComponent:it,apsMemo:nt,createUseAPSPollingQuery:Ke,fuse:st,fused:lt,hasFilters:Ae,logFusionSsrMetric:V,removeNulls:et,useAPSQuery:Be,useAnalyzeError:He,useContentType:Ie,useNewPageView:B,useScreenName:Le,useViewportCategory:Qe}),[()=>{w={id:z,value:["true"]},q=new Set([z,W]),D=new Set(["B","BR","I","U","S","EM","STRONG","SPAN"]),x=n.memo(Pe),(F=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlenderGeoIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"result"},"name":{"kind":"Name","value":"SeoMetaData_getBlenderData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"contentId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"geoId"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":130}}')).__key=32025661472868,M={list:["Hotels",se,"HotelsList",ie,"HotelsNear","Attractions",re,"Attraction_Products",ae,"Restaurants",oe],detail:["Hotel_Review",ue,"Restaurant_Review",ce,"Attraction_Review",ne,"AttractionProductReview",le]},$=n.createContext({state:Me,dispatch:()=>{}}),U=new Set,G=n.createContext({loading:!1,polling:!1}),Q=n.createContext({donePolling:!1}),e({ALL_ATTRACTIONS_CATEGORY_FILTER_VALUE:"ALL",APSStory:ut,APSUnexpected:We,APSUnsupportedType:tt,ATTRACTIONS_CATEGORY_DAY_TRIPS:"63",CONTENT_TYPE_ATTRACTION:X,CONTENT_TYPE_ATTRACTION_PRODUCT:Z,CONTENT_TYPE_HOTEL:ee,CONTENT_TYPE_RESTAURANT:te,CheckAPSQueryResponse:Je,Entrypoint:Ue,FILTER_ATTRACTIONS_ALL_ID:z,FILTER_ATTRACTIONS_CATEGORY_ID:Y,FILTER_ATTRACTIONS_L1_CATEGORY_ID:K,FILTER_ATTRACTIONS_SUPPLIER_TOGGLE_ID:W,FusionComponent:it,FusionTrackedLink:ye,HtmlString:x,ISODateString:Re,ISOTimeString:Ee,LoadingContext:G,PAGE_ATTRACTION_DETAIL:ne,PAGE_ATTRACTION_LIST:re,PAGE_ATTRACTION_PRODUCT_DETAIL:le,PAGE_ATTRACTION_PRODUCT_LIST:ae,PAGE_HOTELS:se,PAGE_HOTELS_LIST:ie,PAGE_HOTEL_DETAIL:ue,PAGE_RESTAURANT_DETAIL:ce,PAGE_RESTAURANT_LIST:oe,PollingContext:Q,REMOVE_FLAG:de,applyFilterChangeList:Te,apsMemo:nt,createUseAPSPollingQuery:Ke,fuse:st,fused:lt,getPageeOffsetValue:ke,hasFilters:Ae,isNullOrUndefined:Xe,logFusionSsrMetric:V,mergeFilterChangeLists:he,removeNulls:et,responseStatusCheck:Se,stringToNumber:Ze,unionFilters:pe,useAPSQuery:Be,useAnalyzeError:He,useContentType:Ie,useEntrypointContext:$e,useNewPageView:B,useScreenName:Le,useSetFilter:Ge,useViewportCategory:Qe})},[e=>r=e.logSsrMetric,e=>(n=e,a=e.useContext,l=e.useMemo,s=e.useState,i=e.useCallback,u=e.useEffect),e=>(o=e.Route,c=e.TravelInfo,d=e.Visitor,v=e.Device),e=>g=e.default,e=>m=e.getPageDefForPage,e=>f=e.default,e=>p=e.useLinkTarget,t=>{T=t.useFusionTracking,h=t.isValidTrackingKey,R=t.FusionTracking,e({useConsoleLogImpressions:t.useConsoleLogImpressions,useTracking:t.useFusionTracking})},e=>E=e.useLocalize,e=>O=e.default,e=>A=e.usePageViewMoniker,e=>S=e.useBounceRateTracking,e=>y=e.OrganizationJsonLd,e=>(b=e.isFusionPage,P=e.FusionAbTestingProvider),e=>k=e.default,e=>I=e.useIsMiles,e=>C=e.useQuery,e=>(N=e.useIsRobotSafe,_=e.MountedClientOnly),e=>L=e.useQueryRequiredSsr,e=>j=e.default]]},["B7vHz6","cDcdfi","2R4xv2","qKFflQ","F8raOV","5KqyYa","mGAIj_","BfEQXK","0DsHEV","P5nZ8I","jb_4W2","mxARhC","nPqO2d","DY6uxn","YwNsO_","-qDq4b","5X2em-","4Z07E2","OnmvvE","jhfxP-"]]);

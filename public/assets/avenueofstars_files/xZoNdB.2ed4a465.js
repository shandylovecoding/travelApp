(this.$WP=this.$WP||[]).push(["xZoNdB",(e,t)=>{"use strict";var a,r,s,n,i,l,o,u,c,h,d,g,m,p,D,v,f,y,I,A,O,k,R,P,b,E,S,C,T,j,N,w,M,_,$,L,V,U,x,W,F,G,Y,H,q,z,B,J,K,X,Z,Q,ee,te,ae,re,se=(e,t)=>(null===e?null:`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`)===(null===t?null:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`),ne={CUR:(e,t)=>({currency:t}),HD:(e,t)=>{var a=t.split(".");if(a.length<2)return null;var r=P(a[0]),s=P(a[1]);return null===r||null===s?null:{key:"HD",checkIn:r,checkOut:s,pageLocationId:a.length>2&&parseInt(a[2],10)||null}},HDD:(e,t)=>{var a=t.split(".");if(a.length<2)return null;var r=P(a[0]),s=P(a[1]);return null===r||null===s?null:{key:"HDD",checkIn:r,checkOut:s,attemptedToUpdateDefaultDates:a.length>2&&"1"===a[2]}},HC:()=>({key:"HC"}),G:(e,t)=>{var a=t.split("."),r=parseInt(a[0],10),s=parseInt(a[1],10);return a.length<2?null:{key:"G",adults:0===r?0:r||2,rooms:0===s?0:s||1,pageLocationId:a.length>2&&parseInt(a[2],10)||null,childAgesPerRoom:a.length>3?b(a[3]):[]}},LD:(e,t)=>{var a=t.split(".");return a.length<6?null:{key:"LD",arrivalYear:parseInt(a[0],10)||0,arrivalMonth:parseInt(a[1],10)||0,arrivalDay:parseInt(a[2],10)||0,departureYear:parseInt(a[3],10)||0,departureMonth:parseInt(a[4],10)||0,departureDay:parseInt(a[5],10)||0}},LG:(e,t)=>{var a=t.split(".");return a.length<3?null:{key:"LG",adults:parseInt(a[0],10)||0,rooms:parseInt(a[1],10)||0,childAgesPerRoom:a.length>3?b(a[3]):[]}},VPD:(e,t)=>{var a=t.split(".");if(a.length<2)return null;var r=P(a[0]),s=P(a[1]);return null===r||null===s?null:{key:"VPD",departureDate:r,returnDate:s}},HMD:(e,t)=>{var a=t.split(".");if(a.length<4)return null;var r=P(a[0]),s=P(a[1]);return null===r||null===s?null:{key:"HMD",checkIn:r,checkOut:s,fuzzyDates:"true"===a[2],defaultDates:"true"===a[3],geoId:a.length>4&&parseInt(a[4],10)||1,currentGeoId:a.length>5&&parseInt(a[5],10)||1}},VPRG:(e,t)=>{var a=t.split(".");if(a.length<2)return null;var r=parseInt(a[0],10),s=parseInt(a[1],10);return{key:"VPRG",rooms:0===r?0:r||1,adults:0===s?0:s||2,childAgesPerRoom:a.length>2?b(a[2]):[]}},AC:()=>({key:"AC"}),ARC:()=>({key:"ARC"}),AD:(e,t)=>{var a=t.split(".");return{key:"AD",tourDate:P(a[0]),locationId:a.length>1&&parseInt(a[1],10)||null}},ADD:(e,t)=>{var a=t.split(".");return{key:"ADD",tourDate:P(a[0])||null}},ARD:(e,t)=>{var a=t.split(".");return a.length<2?null:{key:"ARD",fromDate:P(a[0]),toDate:P(a[1]),locationId:a.length>2&&parseInt(a[2],10)||null}},ARDD:(e,t)=>{var a=t.split(".");return a.length<2?null:{key:"ARDD",fromDate:P(a[0]),toDate:P(a[1])}},APAX:(e,t)=>{var a=t.split(".");return a.length<2?null:{key:"APAX",adults:parseInt(a[0],10)||2,children:parseInt(a[1],10)||0}},RC:()=>({key:"RC"}),RD:(e,t)=>{var a=t.split(".");return{key:"RD",date:P(a[0]),locationId:a.length>1&&parseInt(a[1],10)||null}},RDD:(e,t)=>{var a=t.split("."),r=P(a[0]);return null===r?null:{key:"RDD",date:r}},RT:(e,t)=>null==t?null:{key:"RT",time:t},RG:(e,t)=>{var a=parseInt(t,10)||null;return null==a?null:{key:"RG",guests:a}},RTD:(e,t)=>{var a=t.split("."),r=P(a[0]),s=P(a[1]);return null===r||null===s?null:{key:"RTD",departureDate:r,returnDate:s}},OWD:(e,t)=>{var a=t.split("."),r=P(a[0]);return null===r?null:{key:"OWD",date:r}},FO:(e,t)=>({key:"FO",airportCode:t}),FD:(e,t)=>({key:"FD",airportCode:t}),FT:(e,t)=>{for(var a=t.split("."),r=parseInt(a[0],10)||0,s=parseInt(a[1],10)||0,n=[],i=0,l=2;l<a.length;l++){var o=a[l];if(o.startsWith("CS")){var u=parseInt(o.substring(2),10);i=u>=0?u:0}else{var c=parseInt(o,10);c>=0&&n.push(c)}}return{key:"FT",adults:r,seniors:s,childAges:n,cosIndex:i}}},ie=e=>e&&e.split("*").map((e=>{var t=e.split("-");return t.length<2?null:t.length<=3?t:[t[0],t[1],t.slice(2).join("-")]})).filter(Boolean)||[],le=()=>{var e="undefined"!=typeof document&&document.cookie,t=e&&e.match(/(?:^| )TAUD=([^;]+)/);return t&&t[1]?decodeURIComponent(t[1].startsWith("%1%")?t[1].substring(3):t[1]):null},oe=({cookies:e,currencyOverride:t,children:r})=>{var s="undefined"!=typeof document?le():e.TAUD,{locale:{code:n}}=a.useContext(g),i=t||(e=>{var t=S[e];return t&&t.currency||"USD"})(n),[l,o]=a.useState((()=>new ee(i,ie(s)).getTravelInfoData())),u=a.useMemo((()=>((e,t)=>{var a=(...a)=>{var r=a.map((e=>`${e.arg}=${e.value}`)).join("&");te=te.then((()=>fetch(`/UpdateSessionDatesAjax?${r}`,{credentials:"same-origin"}).then((()=>{((e,t)=>{var a=le();e((e=>Object.assign({},e,{},new ee(t,ie(a)).getTravelInfoData())))})(e,t)}))))},r=(e,t)=>{a({arg:e,value:`${t}`})};return{preferences:{setCurrency:t=>{r("zuc",t),e((e=>Object.assign({},e,{preferences:{currency:t}})))}},attractions:{setSingleDate:t=>{r("attrdate",null===t?"_":E(t)),e((e=>Object.assign({},e,{attractions:Object.assign({},e.attractions,{singleDate:t})})))},setDates:(t,a)=>{r("attrrange",`${E(t)}_${E(a)}`),e((e=>Object.assign({},e,{attractions:Object.assign({},e.attractions,{fromDate:t,toDate:a})})))},setPassengers:(t,a)=>{r("zuf",`${t}_${a}`),e((e=>Object.assign({},e,{attractions:Object.assign({},e.attractions,{adults:t,children:a})})))}},restaurants:{setDate:t=>{r("eaterydate",null===t?"_":E(t)),e((e=>Object.assign({},e,{restaurants:Object.assign({},e.restaurants,{date:t})})))},setGuests:t=>{r("eateryguests",null===t?"-1":t),e((e=>Object.assign({},e,{restaurants:Object.assign({},e.restaurants,{guests:t})})))},setTime:(t,a)=>{r("eaterytime",`${t}_${a}`),e((e=>Object.assign({},e,{restaurants:Object.assign({},e.restaurants,{time:{hour:t,minute:a}})})))},clearAll:()=>{r("eateryclearall",""),e((e=>Object.assign({},e,{restaurants:Object.assign({},e.restaurants,{date:null,time:null,guests:null})})))}},hotels:{setStayDates:(t,a)=>{r("staydates",`${E(t)}_${E(a)}`),e((e=>Object.assign({},e,{hotels:Object.assign({},e.hotels,{checkInDate:t,checkOutDate:a})})))},setGuestInfo:(t,a,s)=>{r("uguests",`${a}_${t}${s.length>0?`_${s.map((e=>e.join(","))).join(":")}`:""}`),e((e=>Object.assign({},e,{hotels:Object.assign({},e.hotels,{adults:t,rooms:a,childAgesPerRoom:s,children:s.flat().length})})))},setTravelInfo:(t,r,s,n,i)=>{a({arg:"uguests",value:`${n}_${s}${i.length>0?`_${i.map((e=>e.join(","))).join(":")}`:""}`},{arg:"staydates",value:`${E(t)}_${E(r)}`}),e((e=>Object.assign({},e,{hotels:Object.assign({},e.hotels,{checkInDate:t,checkOutDate:r,defaultDates:!1,adults:s,rooms:n,childAgesPerRoom:i,children:i.flat().length})})))}},flights:{setOneWayDate:t=>{r("oneway",E(t)),e((e=>Object.assign({},e,{flights:Object.assign({},e.flights,{oneWayDate:t})})))},setRoundTripDates:(t,a)=>{r("rtdates",`${E(t)}_${E(a)}`),e((e=>Object.assign({},e,{flights:Object.assign({},e.flights,{departureDate:t,returnDate:a})})))},setOriginAirportCode:t=>{r("flightorig",t),e((e=>Object.assign({},e,{flights:Object.assign({},e.flights,{originAirportCode:t})})))},setDestinationAirportCode:t=>{r("flightdest",t),e((e=>Object.assign({},e,{flights:Object.assign({},e.flights,{destinationAirportCode:t})})))},setTravelerInfo:(t,a,s,n)=>{var i=0;switch(n){case"BUSINESS":i=1;break;case"FIRST":i=2;break;case"PREMIUM_ECONOMY":i=3;break;case"ECONOMY":default:i=0}var l=s.map((e=>`_${e}`)).join("");r("travelerinfo",`${t}_${a}_${i}${l}`),e((e=>Object.assign({},e,{flights:Object.assign({},e.flights,{adults:t,seniors:a,childAges:s,classOfService:n})})))}}}})(o,i)),[i]),c=a.useMemo((()=>Object.assign({},l,{update:u})),[l,u]);return a.createElement(m.Provider,{value:c},r)},ue=(e,t)=>{var{locale:a}=s(g),{viewportCategory:r,userAgentCategory:i,browser:l,os:o}=s(p),u=s(m),{userId:c,sessionId:h}=s(D),[,d]=T(re);n((()=>{var s=Date.now();d({clientPageViews:{clientRequestTimestampMs:s,request:[{eventTimestampMs:s,identifierType:"TA_PERSISTENTCOOKIE",locale:a.code,userId:c,sessionId:h,origin:location.origin,page:e.page,params:Object.entries(e.params).map((([e,t])=>({key:e,value:"object"!=typeof t?String(t):JSON.stringify(t)||""}))),path:e.path,referrer:document.referrer,route:JSON.stringify(e),currency:u.preferences.currency,uid:t,userAgent:navigator.userAgent,viewportCategory:r,userAgentCategory:i,browserType:l.family,browserVersion:String(l.majorVersion),osType:o.family}]}})}),[t])},ce=()=>Math.floor(Math.random()*2**32).toString(16).padStart(8,"0"),he=e=>{var t,a=(null!=(t=(()=>{var e="undefined"!=typeof document?document.cookie.split(";").find((e=>e.includes("TASID="))):null;if(!e)return null;try{return e.split("=")[1]}catch(t){return console.error(`Unable to parse TASID cookie: '${e}'`),null}})())&&/[A-F0-9]{32}/.test(t)?t:null)||(ce()+ce()+ce()+ce()).toUpperCase();return"undefined"!=typeof document&&(document.cookie=`TASID=${a}; Domain=${e}; Path=/; Max-Age=1800; Secure`),a},de=({bootstrap:e,children:t})=>{var{domainName:r}=a.useContext(g),[s,n]=a.useState((()=>Object.assign({userId:null},e,{sessionId:e.sessionId||he(r)}))),i=a.useCallback((e=>{n((t=>Object.assign({},t,{},e)))}),[]);return a.createElement(v.Provider,{value:i},a.createElement(D.Provider,{value:s},t))},ge=["NotFound","InternalError","ClientRedirect"],me=({bootstrapRoute:e,bootstrapUid:t,children:a})=>{var[c,h]=i(e),[d,m]=i(t),p=l("INITIAL"),y=l(""),[,I]=T(ae),{userId:A}=s(D),O=s(v),{domainName:k}=r.useContext(g),R=o(((e,t="PAGE_VIEW",a=!1)=>{c.page!==e.page||!N(c.params,e.params)||"PAGE_VIEW"!==t&&"PARAM_UPDATE"!==t?p.current=t:p.current=c.fragment!==e.fragment?"FRAGMENT_PUSH":"IN_PLACE";var r=a||"PAGE_VIEW"===p.current||"POP"===p.current||"PARAM_UPDATE"===p.current;(r||"INITIAL"===p.current)&&(e.referrer&&(y.current=e.referrer),((e,t,a,r,s,n)=>{var i=Date.now();e({navigations:{clientRequestTimestampMs:i,request:[{eventTimestampMs:i,fromPage:a.page,fromParams:Object.entries(a.params).map((([e,t])=>({key:e,value:"object"!=typeof t?String(t):JSON.stringify(t)||""}))),fromPath:a.path,fromRoute:JSON.stringify(a),identifierType:"TA_PERSISTENTCOOKIE",navigationType:"PAGE_VIEW"===s||"FRAGMENT_PUSH"===s||"PARAM_UPDATE"===s||"IN_PLACE"===s?"USER_INITIATED":s,opaqueIds:n?[{key:"MEMBER_UID",value:n}]:[],origin:location.origin,referrer:document.referrer,toPage:r.page,toParams:Object.entries(r.params).map((([e,t])=>({key:e,value:"object"!=typeof t?String(t):JSON.stringify(t)||""}))),toPath:r.path,toRoute:JSON.stringify(r),uid:t,userAgent:navigator.userAgent}]}})})(I,d,c,e,p.current,A)),h({page:e.page,params:e.params,path:e.path,fragment:e.fragment}),r&&(O({sessionId:he(k)}),m($()))}),[O,k,I,c,d,A]),P=o(((e,t="FRAGMENT_PUSH")=>{if(c.fragment!==e){var a=-1===c.path.indexOf("#")?c.path:c.path.split("#")[0],r=""!==(e||"")?`#${e||""}`:"";p.current=t,h(Object.assign({},c,{path:`${a}${r}`,fragment:e||""}))}}),[c]),b=r.useCallback((()=>{try{var e;history.replaceState(Object.assign({},history.state,{scrollY:window.scrollY}),"",(null==(e=history.state)?void 0:e.path)||c.path)}catch(e){console.error("Caught exception while accessing History API:",e)}}),[c.path]),E=L(b,300),S=l("");n((()=>(S.current=window.location.hash,y.current=document.referrer||"","scrollRestoration"in history&&(history.scrollRestoration="manual"),window.addEventListener("scroll",E),()=>{window.removeEventListener("scroll",E)})),[E]);var C=l(null),V=j();n((()=>{var e,t=null==(e=history.state)?void 0:e.scrollY;null==t||"POP"!==p.current&&"INITIAL"!==p.current||window.scroll(0,t);try{if("INITIAL"===p.current)history.state&&"referrer"in history.state&&history.state.referrer&&(y.current=history.state.referrer),history.replaceState(Object.assign({},c,{referrer:y.current}),"",c.path);else if("FRAGMENT_PUSH"===p.current)history.pushState(Object.assign({},c,{referrer:y.current}),"",c.path);else if("PARAM_UPDATE"===p.current){var a;y.current=`https://${k}${(null==(a=C.current)?void 0:a.path)||"/"}`,history.pushState(Object.assign({},c,{referrer:y.current}),"",c.path)}else if("PAGE_VIEW"===p.current){var r;y.current=`https://${k}${(null==(r=C.current)?void 0:r.path)||"/"}`,history.pushState(Object.assign({},c,{referrer:y.current}),"",c.path),window.scroll(0,0)}else"IN_PLACE"===p.current&&history.replaceState(Object.assign({},c,{referrer:y.current}),"",c.path)}catch(e){console.error("Caught exception while accessing History API:",e)}ge.includes(c.page)||("INITIAL"!==p.current&&"PAGE_VIEW"!==p.current&&"POP"!==p.current&&"PARAM_UPDATE"!==p.current||M(V,c,"PARAM_UPDATE"===p.current).then((e=>{N(c,e)||(w(e)?(p.current="IN_PLACE",h(e)):window.location=e.path)})),p.current="PAGE_VIEW",C.current=c)}),[c,k,V]);var U=l(R);n((()=>{if(Object.defineProperty(document,"referrer",{configurable:!0,get:()=>y.current}),""!==S.current){var e=_(`${window.location.pathname}${window.location.search}${S.current}`);e&&U.current(e,"INITIAL")}}),[]),ue(c,d);var x=u((()=>[c,{navigate:R,navigateToFragment:P,uid:d}]),[c,d,R,P]);return r.createElement(f.Provider,{value:x},a)},pe=({bootstrap:e,children:t})=>{var[r,s]=a.useState(e);return a.useEffect((()=>{if("undefined"!=typeof matchMedia){var e=e=>(s((t=>t.viewportCategory===e?t:Object.assign({},t,{viewportCategory:e}))),!0),t=matchMedia("(max-width: 767px)"),a=matchMedia("(min-width: 768px) and (max-width: 1023px)"),r=matchMedia("(min-width: 1024px)"),n=t=>{t.matches&&e("MOBILE")},i=t=>{t.matches&&e("TABLET")},l=t=>{t.matches&&e("DESKTOP")};return t.addListener(n),a.addListener(i),r.addListener(l),n(t)||i(a)||l(r),()=>{t.removeListener(n),a.removeListener(i),r.removeListener(l)}}}),[]),a.createElement(p.Provider,{value:r},t)},De=e=>{var{cdnPrefix:t,version:r}=a.useContext(g),{loadMessages:s}=a.useContext(I),n=a.useRef(new Set([...e.assets.js,...e.assets.css])).current,i=a.useRef(new Map).current;return a.useEffect((()=>{$WP.installResolver((e=>fetch(`/data/1.0/bundle/dependencies/chunk?id=${encodeURIComponent(e)}`,{credentials:"same-origin",headers:{"x-ta-version":String(r)}}).then((e=>e.json())).then((e=>(s(e.messages),V(e.features),Promise.all([...e.css.map((e=>[t+e,A])),...e.js.map((e=>[t+e,O]))].filter((([e])=>!n.has(e))).map((([e,t])=>{if(i.has(e))return i.get(e);var a=t(e).then((()=>{n.add(e),i.delete(e)}));return i.set(e,a),a})))))).then((()=>$WP.getChunkPromise(e)))))}),[t,r,s,n,i]),null},ve=e=>{var t=a.useRef({});0===Object.keys(t.current).length&&(t.current=Object.assign({},e.messages));var r=a.useMemo((()=>({getMessage:e=>t.current[e]||null,loadMessages:e=>{Object.entries(e).forEach((([e,a])=>{t.current[e]=a}))}})),[]),s=a.useMemo((()=>Object.assign({stagingError:null,renderError:null,ssrLogs:[],debugTool:!1,serviceWorker:!1},e.debug,{serviceCalls:e.urqlSsrData&&e.urqlSsrData.extensions&&e.urqlSsrData.extensions.serviceTimings?[e.urqlSsrData.extensions.serviceTimings]:[]})),[e.debug,e.urqlSsrData]),n=a.useMemo((()=>new Set(e.preloads)),[e.preloads]),i=a.useMemo((()=>Object.assign({id:"",securityToken:"",isWebview:!1,viewportCategory:"MOBILE",userAgentCategory:"MOBILE",os:{family:"UNKNOWN",majorVersion:-1},browser:{family:"UNKNOWN",majorVersion:-1},jsEngine:{family:"UNKNOWN",majorVersion:-1},renderEngine:{family:"UNKNOWN",majorVersion:-1}},e.device)),[e.device]),l=a.useMemo((()=>Object.assign({userId:null},e.visitor)),[e.visitor]),o=a.useMemo((()=>Object.assign({TAUD:null},e.cookies)),[e.cookies]),u=a.useMemo((()=>Object.assign({locale:{code:"en-US",isRtl:!1,language:"en"},cdnPrefix:"",domainName:"",version:"unknown"},e.environment)),[e.environment]),m=a.useRef(null);return null===m.current&&(m.current=d({ssrData:e.urqlSsrData,initialPvid:e.route[1].uid,securityToken:i.securityToken})),a.createElement(C,null,a.createElement(k.Provider,{value:n},a.createElement(g.Provider,{value:u},a.createElement(pe,{bootstrap:i},a.createElement(de,{bootstrap:l},a.createElement(oe,{cookies:o,currencyOverride:e.currencyOverride},a.createElement(h,{client:m.current},a.createElement(me,{bootstrapRoute:e.route[0],bootstrapUid:e.route[1].uid},a.createElement(y.Provider,{value:s},a.createElement(I.Provider,{value:r},a.createElement(De,{assets:e.assets}),a.createElement(c,null,e.children)))))))))))},fe=()=>{var e=U();a.useEffect((()=>{e&&e.TITLE&&(document.title=e.TITLE)}),[e])},ye=({children:e})=>{var{login:t}=q();return a.createElement(Y.Provider,{value:t},e)},Ie=({children:e})=>(a.useEffect((()=>{var e=document.cookie.split(";").filter((e=>e.trim().startsWith("EVT=")));e.length>0&&W(new URLSearchParams(e[0].split("=")[1].split("*").map((e=>{var[t,a]=e.split(".",2);return[t,a]}))))}),[]),a.createElement(x,null,a.createElement(z,null),a.createElement(F,null,a.createElement(B,null,a.createElement(ye,null,a.createElement(H,null,a.createElement(G,null,e)))))));return[()=>{J=class{constructor(){this.currency=null}CUR(e){this.currency=e.currency}},K=class{constructor(){var e;this.today=(e=new Date,new Date(e.getFullYear(),e.getMonth(),e.getDate())),this.clearedDate=!1,this.userSetRangeDates=!1,this.fromDate=null,this.toDate=null,this.singleDate=null,this.adults=0,this.children=0}AC(e){this.fromDate=null,this.toDate=null,this.singleDate=null,this.clearedDate=!0}ARC(e){this.fromDate=null,this.toDate=null,this.singleDate=null,this.clearedDate=!0}AD(e){this.validateAndRecordSingleDate(e.tourDate)}ADD(e){null!==this.singleDate||this.clearedDate||this.validateAndRecordSingleDate(e.tourDate)}ARD(e){this.validateAndRecordRangeDates(e.fromDate,e.toDate)}ARDD(e){null!==this.fromDate||null!==this.toDate||this.clearedDate||this.validateAndRecordRangeDates(e.fromDate,e.toDate)}APAX(e){this.adults=e.adults,this.children=e.children}validateAndRecordSingleDate(e){null===e||e<this.today||(this.singleDate=e,(null===this.fromDate||null===this.toDate||this.singleDate<this.fromDate||this.singleDate>this.toDate)&&(this.fromDate=e,this.toDate=e))}validateAndRecordRangeDates(e,t){null==e||e<this.today||null==t||t<e||(this.fromDate=e,this.toDate=t,(null==this.singleDate||this.singleDate<e||this.singleDate>t)&&(this.singleDate=e),this.userSetRangeDates=!0)}},X=class{constructor(){var e;this.today=(e=new Date,new Date(e.getFullYear(),e.getMonth(),e.getDate())),this.airportCodeRegExp=new RegExp("^[A-Z]{3}$"),this.oneWayDate=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()+14),this.departureDate=this.oneWayDate,this.returnDate=new Date(this.departureDate.getFullYear(),this.departureDate.getMonth(),this.departureDate.getDate()+7),this.originAirportCode=null,this.destinationAirportCode=null,this.adults=1,this.seniors=0,this.childAges=[],this.classOfService="ECONOMY"}RTD(e){this.validateAndRecordRoundTripDatesDate(e.departureDate,e.returnDate)}OWD(e){this.validateAndRecordOneWayDate(e.date)}FO(e){this.airportCodeRegExp.test(e.airportCode)&&(this.originAirportCode=e.airportCode)}FD(e){this.airportCodeRegExp.test(e.airportCode)&&(this.destinationAirportCode=e.airportCode)}FT(e){var t;switch(this.adults=Math.max(0,e.adults),this.seniors=Math.max(0,e.seniors),this.childAges=e.childAges,this.adults||this.seniors||(null==(t=this.childAges)?void 0:t.length)||(this.adults=1),e.cosIndex){case 1:this.classOfService="BUSINESS";break;case 2:this.classOfService="FIRST";break;case 3:this.classOfService="PREMIUM_ECONOMY";break;case 0:default:this.classOfService="ECONOMY"}}validateAndRecordOneWayDate(e){e&&(this.oneWayDate=this.keepDateInRange(e))}validateAndRecordRoundTripDatesDate(e,t){!e||!t||e>t||(this.departureDate=this.keepDateInRange(e),this.returnDate=this.keepDateInRange(t))}keepDateInRange(e){return e<this.today?this.today:e}},Z=class{constructor(){this.today=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()),this.date=null,this.time=null,this.guests=null}RC(e){this.date=null,this.time=null,this.guests=null}RD(e){this.validateAndRecordDate(e.date)}RT(e){this.time=R(e.time)}RG(e){this.guests=e.guests}validateAndRecordDate(e){null===e||e<this.today||(this.date=e)}},Q=class{constructor(){var e;this.today=(e=new Date,new Date(e.getFullYear(),e.getMonth(),e.getDate())),this.checkIn=null,this.checkOut=null,this.userDates=!1,this.defaultDates=!0,this.rooms=1,this.adults=2,this.childAgesPerRoom=[]}HD(e){this.updateDates(e.checkIn,e.checkOut)&&(this.defaultDates=!1,this.userDates=!0)}HDD(e){this.updateDates(e.checkIn,e.checkOut)&&(this.defaultDates=!0,this.userDates=!1)}HC(e){this.clearDates()}G(e){this.rooms=e.rooms,this.adults=e.adults,this.childAgesPerRoom=e.childAgesPerRoom,this.sanitizeTravelerInfo()}LD(e){0===e.arrivalYear&&0===e.arrivalMonth&&0===e.arrivalDay&&0===e.departureYear&&0===e.departureMonth&&0===e.departureDay&&this.clearDates();var t=this.checkIn,a=this.checkOut,r=new Date(e.arrivalYear,e.arrivalMonth-1,e.arrivalDay),s=new Date(e.departureYear,e.departureMonth-1,e.departureDay);!this.updateDates(r,s)||se(this.checkIn,t)&&se(this.checkOut,a)||(this.defaultDates=!1)}LG(e){this.adults=e.adults,this.rooms=e.rooms,this.childAgesPerRoom=e.childAgesPerRoom,this.sanitizeTravelerInfo()}VPD(e){this.updateDates(e.departureDate,e.returnDate)&&(this.userDates=!0,this.defaultDates=!1)}HMD(e){e.fuzzyDates||this.userDates||!this.updateDates(e.checkIn,e.checkOut)||(this.userDates=!0,this.defaultDates=!1)}VPRG(e){this.rooms=e.rooms,this.adults=e.adults,this.childAgesPerRoom=e.childAgesPerRoom,this.sanitizeTravelerInfo()}sanitizeTravelerInfo(){var e=this.rooms||0,t=this.adults||0;e<1?e=1:e>8?e=8:t>4*e&&(e=(t+4-1)/4),t<1?t=2:t<e?t=e:t>4*e&&(t=4*e),this.rooms=e,this.adults=t}clearDates(){this.checkIn=null,this.checkOut=null,this.defaultDates=!1,this.userDates=!1}updateDates(e,t){return e<this.today||t<=e?(this.clearDates(),!1):(this.checkIn=e,this.checkOut=t,!0)}},ee=class{constructor(e,t){this.accumulators={preferences:new J,attractions:new K,restaurants:new Z,flights:new X,hotels:new Q},this.defaultCurrency=void 0,this.stamp=null,this.records=void 0,this.defaultCurrency=e,this.records=t,t.forEach((([e,t,a])=>{e&&t&&this.accumulate(e,parseInt(t,10),a)}))}accumulate(e,t,a){var r=t;if(null===this.stamp?this.stamp=t:r+=this.stamp,e in ne){var s=ne[e](r,a);s&&Object.values(this.accumulators).forEach((t=>e in t&&t[e].call(t,s)))}return this}getTravelInfoData(){var{checkIn:e}=this.accumulators.hotels,{checkOut:t}=this.accumulators.hotels,a=null==e||null==t?null:{checkInDate:e,checkOutDate:t,defaultDates:this.accumulators.hotels.defaultDates,rooms:this.accumulators.hotels.rooms,adults:this.accumulators.hotels.adults,children:this.accumulators.hotels.childAgesPerRoom.flat().length,childAgesPerRoom:this.accumulators.hotels.childAgesPerRoom},r=this.accumulators.preferences.currency||this.defaultCurrency;return"RMB"===r&&(r="CNY"),{preferences:{currency:r},attractions:{fromDate:this.accumulators.attractions.fromDate,toDate:this.accumulators.attractions.toDate,singleDate:this.accumulators.attractions.singleDate,adults:this.accumulators.attractions.adults,children:this.accumulators.attractions.children},restaurants:{date:this.accumulators.restaurants.date,time:this.accumulators.restaurants.time,guests:this.accumulators.restaurants.guests},flights:{oneWayDate:this.accumulators.flights.oneWayDate,departureDate:this.accumulators.flights.departureDate,returnDate:this.accumulators.flights.returnDate,originAirportCode:this.accumulators.flights.originAirportCode,destinationAirportCode:this.accumulators.flights.destinationAirportCode,adults:this.accumulators.flights.adults,seniors:this.accumulators.flights.seniors,childAges:this.accumulators.flights.childAges,classOfService:this.accumulators.flights.classOfService},hotels:a}}},te=Promise.resolve(),(ae=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogNavigations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"navigations"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Impressions_NavigationsRequestInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Impressions_postNavigations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"navigations"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":160}}')).__key=0xe45bb781fd11,(re=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogPageViewsV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientPageViews"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Impressions_ClientPageViewsRequestInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Impressions_postPageViewsV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientPageViews"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":172}}')).__key=0xdfd56b40f76c,e({LithiumContainer:ve,TripadvisorPage:Ie,useOpfTitle:fe,usePageViewLogging:ue})},[e=>(a=e,r=e.default,s=e.useContext,n=e.useEffect,i=e.useState,l=e.useRef,o=e.useCallback,u=e.useMemo),e=>c=e.KeyboardNavigationModeProvider,e=>(h=e.default,d=e.buildUrqlClient),e=>(g=e.Environment,m=e.TravelInfo,p=e.Device,D=e.Visitor,v=e.Authenticate,f=e.Route,y=e.Debug),e=>I=e.Messages,e=>(A=e.importCss,O=e.importScript,k=e.Preloads),e=>(R=e.parseTime,P=e.parseDate,b=e.parseChildAgesPerRoom,E=e.serializeDate),e=>S=e.pointsOfSale,e=>C=e.ErrorBoundary,e=>(T=e.useMutation,j=e.useClient),e=>N=e.default,e=>w=e.isRoutable,e=>(M=e.tryToCanonicalizeRoute,_=e.getRouteFromPath),e=>$=e.generatePuid,e=>L=e.useDebouncedCallback,e=>V=e.loadFeatures,e=>U=e.default,e=>x=e.PageViewLogger,e=>W=e.enqueue,e=>F=e.MonikerConfiguration,e=>G=e.PopupHierarchyLithiumProvider,e=>Y=e.Login,e=>H=e.AdServerProvider,e=>q=e.default,e=>z=e.ConsentProvider,e=>B=e.default]]},["cDcdfi","W3_c4H","OnmvvE","2R4xv2","0DsHEV","pLbCP4","oo669z","b57PJQ","nIW_Rw","5X2em-","YwNsO_","jmIMrC","F8raOV","n3D4ip","gsKhh7","-i3PJS","QZqymc","30t50h","fsml46","jb_4W2","vybtJq","mv7yXI","nCvudh","VANuRt","lMO0v3","ANe_04"]]);

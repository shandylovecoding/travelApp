(this.$WP=this.$WP||[]).push(["GT-7ag",(e,t)=>{"use strict";var a,n,r,l,s,c,i,u,o,m,g,d,f,h,_,p,E,v,k,C,D,x,S,b,R,A,M,P=({model:e,setFusionDates:t,mapSurface:a})=>{var{viewportCategory:s}=r(p),c="MOBILE"!==s?"condensed":void 0,{startDate:i,endDate:u,isDefaultDates:d,setDateRange:f,setSingleDate:h,resetDates:_}=m(t,e,a),E=l(((e,t)=>{t?h(e):f(i,e)}),[i,f,h]),v=g({startDate:i,endDate:u,isDefaultDates:d,setDates:E,resetDates:_});return n.createElement(o,{pickers:v,inputFieldVariant:c,onReset:d?void 0:_,mapSurface:a})},N=({children:e})=>{var t=e.filter(Boolean);return a.createElement(a.Fragment,null,t.map(((e,t)=>a.createElement(a.Fragment,{key:t},t>0&&a.createElement(C,null),e))))},y="_3UR4aZGx",O="_2GWEjb2V",T="_3-NA5FeW",w=(e,t)=>{var a,n,r;switch(t.type){case"SET_ROOMS":if(null==t.value)return e;n=Math.max(1,Math.min(e.config.maxRooms,t.value)),r=Math.max(Math.min(e.adults,n*e.config.maxAdultsPerRoom),n),a=e.childrenAges.slice(0,Math.min(n*e.config.maxChildrenPerRoom,e.config.maxChildren));break;case"SET_ADULTS":if(null==t.value)return e;r=Math.min(e.config.maxRooms*e.config.maxAdultsPerRoom,t.value),n=Math.min(Math.max(Math.ceil(r/e.config.maxAdultsPerRoom),e.rooms),r),a=e.childrenAges.slice(0,Math.min(n*e.config.maxChildrenPerRoom,e.config.maxChildren));break;case"SET_CHILD_AGE":return null==t.index||null==t.value?e:((a=[...e.childrenAges]).splice(t.index,1,t.value),Object.assign({},e,{childrenAges:a}));case"SET_CHILDREN":if(null==t.value)return e;for(var l=(a=[...e.childrenAges]).length;l<t.value;l++)a.push(0);return a=a.slice(0,Math.min(e.rooms*e.config.maxChildrenPerRoom,e.config.maxChildren,t.value)),Object.assign({},e,{childrenAges:a});case"SET_CONFIG":return null==t.config||E(t.config,e.config)?e:Object.assign({},e,{config:t.config});default:return e}return Object.assign({},e,{childrenAges:a,adults:r,rooms:n})},L=({initGuests:e,onSelection:t,config:n})=>{var{localize:r}=k(),[l,s]=a.useReducer(w,{rooms:e.rooms,adults:e.adults,childrenAges:null==e.childrenAges?[]:e.childrenAges,config:n});a.useEffect((()=>s({type:"SET_CONFIG",config:n})),[n]),a.useEffect((()=>{var{rooms:e,adults:a,childrenAges:n}=l;t({rooms:e,adults:a,childrenAges:n})}),[t,l]);var c=l.config.maxRooms*l.config.maxAdultsPerRoom,i=Math.min(l.rooms*l.config.maxChildrenPerRoom,l.config.maxChildren);return a.createElement("div",{className:"_1wg0W9Y7"},a.createElement(N,null,a.createElement("div",{className:y},a.createElement(D,{variant:"two",gap:"wide",stackMode:"noStack"},a.createElement("div",{className:T},a.createElement(S,{variant:"title-05"},a.createElement(v,{id:"fusion_guest_picker_rooms_title"})," ")),a.createElement("div",{className:O},a.createElement(x,{rangeMin:1,rangeMax:l.config.maxRooms,currentStepValue:l.rooms,onStepChange:e=>s({type:"SET_ROOMS",value:e}),minusLabel:r.string("fusion_guest_picker_rooms_less_rooms_label"),plusLabel:r.string("fusion_guest_picker_rooms_more_rooms_label")})))),a.createElement("div",{className:y},a.createElement(D,{variant:"two",gap:"wide",stackMode:"noStack"},a.createElement("div",{className:T},a.createElement(S,{variant:"title-05"},a.createElement(v,{id:"fusion_guest_picker_adult_title"})," ")),a.createElement("div",{className:O},a.createElement(x,{rangeMin:1,rangeMax:c,currentStepValue:l.adults,onStepChange:e=>s({type:"SET_ADULTS",value:e}),minusLabel:r.string("fusion_guest_picker_less_adults_label"),plusLabel:r.string("fusion_guest_picker_more_adults_label")})),a.createElement("div",{className:T},a.createElement(S,{variant:"title-05"},a.createElement(v,{id:"fusion_guest_picker_children_title"})," ")),a.createElement("div",{className:O},a.createElement(x,{rangeMin:0,rangeMax:i,currentStepValue:l.childrenAges.length,onStepChange:e=>s({type:"SET_CHILDREN",value:e}),minusLabel:r.string("fusion_guest_picker_less_children_label"),plusLabel:r.string("fusion_guest_picker_more_children_label")})))),l.childrenAges.length>0&&a.createElement("div",{className:y},a.createElement(D,{variant:"two",gap:"wide",stackMode:"noStack"},l.childrenAges.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement("div",{className:T},a.createElement(S,{variant:"title-05",key:`ChildAgeTitle${t}`},a.createElement(v,{id:"fusion_guest_picker_child_age_title",args:{i:t+1}})," ")),a.createElement("div",{className:O},a.createElement(x,{key:`childrenAgestepper${t}`,rangeMin:0,rangeMax:17,currentStepValue:e,onStepChange:e=>s({type:"SET_CHILD_AGE",value:e,index:t}),minusLabel:r.string("fusion_guest_picker_reduce_child_age_label"),plusLabel:r.string("fusion_guest_picker_increase_child_age_label")})))))))))},G="_1pkvBND2",I=({config:e,guests:t,setGuests:a})=>{var r=s(t),l=n.useCallback((e=>{r.current=e}),[r]),c=n.useCallback((()=>n.createElement(L,{initGuests:t,onSelection:l,config:e})),[t,e,l]),i=n.useCallback((()=>{E(t,r.current)||a(r.current)}),[r,a,t]),u=n.useCallback(((e,a)=>n.createElement(M,Object.assign({},a,{people:t.adults+t.childrenAges.length,rooms:t.rooms}))),[t]);return{name:"hotelGuests",value:t,showApplyButton:!0,onApply:i,renderButton:u,renderPicker:c}},F={maxRooms:8,maxAdultsPerRoom:4,maxChildrenPerRoom:10,maxChildren:20,defaultAdults:2,defaultChildren:0,defaultRooms:1},j=(e,t)=>e===t||!(!e||!t)&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),H=({model:e,datePickerConfig:t,guestPickerConfig:n=F})=>{var r,{dates:{checkIn:l,checkOut:s},setDates:u,setByUser:m}=d(e),[g,E]=f(Object.assign({},e,{checkIn:l,checkOut:s})),{setTravelInfo:v}=h(),[k,C]=a.useState([]),D=a.useRef(null),x=a.useCallback((e=>{var[t]=k,a=[];return 1!==k.length?a=[e]:e>t?a=[t,e]:e<t&&(a=[e,t]),C(a),a.length>1}),[k]),S=a.useCallback((e=>{D.current=e}),[]),b=null==k?void 0:k[0],R=null==k?void 0:k[1],A=c(),M=a.useCallback((()=>{if(null==b||null==R||j(b,l)&&j(R,s))null!==D.current&&(E(D.current),A());else{var e={checkIn:b,checkOut:R};null!==D.current?(v({dates:e,guests:D.current}),A()):(u(e),A())}C([]),D.current=null}),[b,R,l,s,E,u,v,A]),P=b||l,N=b?R:s,y=a.useRef((r=new Date,[new Date(r.getFullYear(),r.getMonth(),r.getDate()),new Date(r.getFullYear(),r.getMonth(),r.getDate()+1)])),O=a.useMemo((()=>!j(P,y.current[0])||!j(N,y.current[1])),[P,N]),{trackClick:T}=i(),w=a.useCallback((()=>{T({clientContext:"resetHotelDates"}),C(y.current)}),[T]),L=O?w:void 0,G=[_({startDate:P,endDate:N,isDefaultDates:!m&&!b,setDates:x,resetDates:L,maxRangeDays:null==t?void 0:t.maxStayLength}),I({config:n,guests:g,setGuests:S})],H="MOBILE"===a.useContext(p).viewportCategory;return a.createElement(o,{pickers:G,autoOpen:!H&&!m,autoOpenDelay:0,onComplete:M,onClose:M,onReset:L})},V=({model:e})=>n.createElement(A,{jira:"SNG-738",message:"Restaurant commerce pickers",valueToDump:e}),Y=e=>{var t=(e=>{var{model:t,contentType:a,datePickerConfig:r,actions:l,mapSurface:s}=e;switch(a){case"attraction":case"attraction_product":return t.attractionCommerce?n.createElement(P,{model:t.attractionCommerce,setFusionDates:l.setAttractionsDates,mapSurface:s}):null;case"hotel":return t.hotelCommerce?n.createElement(H,{model:t.hotelCommerce,datePickerConfig:null==r?void 0:r.hotelDatePickerConfig}):null;case"restaurant":return t.restaurantCommerce?n.createElement(V,{model:t.restaurantCommerce}):null;default:return n.createElement(u,{message:`No commerce parameters for content type ${String(a)}`})}})(e);return n.createElement("div",{className:"_14aMtg6L"},t)};return[()=>{M=a.forwardRef(((e,t)=>{var{rooms:n,people:r}=e,l=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["rooms","people"]);return a.createElement(b,Object.assign({},l,{ref:t}),a.createElement("span",{className:G},a.createElement(R,{name:"hotels"})," ",n," "),a.createElement("span",{className:G},a.createElement(R,{name:"users"})," ",r," "))})),e("default",Y),e("HotelCommerceParameters",H)},[e=>(a=e,n=e.default,r=e.useContext,l=e.useCallback,s=e.useRef),e=>(c=e.useNewPageView,i=e.useTracking,u=e.APSUnexpected),e=>(o=e.default,m=e.useAttractionDates,g=e.useDateRangePickers,d=e.useHotelDates,f=e.useHotelGuests,h=e.useHotelTravelInfo,_=e.useDateRangePicker),e=>p=e.Device,e=>E=e.default,e=>(v=e.default,k=e.useLocalize),e=>C=e.default,e=>D=e.default,e=>x=e.default,e=>S=e.default,e=>b=e.InputFieldItem,e=>R=e.default,e=>A=e.default]]},["cDcdfi","PEYes_","CTabsQ","2R4xv2","YwNsO_","0DsHEV","jPSRY1","87JRug","aue22J","VP50Wc","pyjSAG","pyY-iJ","mUW0_y"]]);
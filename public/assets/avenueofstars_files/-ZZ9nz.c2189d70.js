(this.$WP=this.$WP||[]).push(["-ZZ9nz",(e,t)=>{"use strict";var a,n,r,l,o,i,s,m,c,u,d,g,h,D,f,v,y,_,w="_1h7jaetc",M="_2Do_yQEp",b="_1P4Ttc5D",p="_3MtkXArj",E="_1GPANZ57",k=({onNextClick:e,onPreviousClick:t,showNextButton:r,showPreviousButton:l})=>{var{localize:o}=g(),i=n((()=>{t()}),[t]),s=n((()=>{e()}),[e]);return a.createElement("div",{className:"w_sx8ADu"},a.createElement(f,{disabled:!l,onClick:i,iconName:"single-chevron-left","aria-label":o.string("tf_web_DHPDate_pagination_previous")}),a.createElement(f,{disabled:!r,onClick:s,iconName:"single-chevron-right","aria-label":o.string("tf_web_DHPDate_pagination_next")}))},F=e=>new Date((new Date).getFullYear(),(new Date).getMonth()+e,1),T=e=>{var t=new Date(e);t.setDate(1);for(var a=0;t.getMonth()===e.getMonth();)a++,t.setDate(t.getDate()+(7-t.getDay()));return a},C=e=>37*T(e)+51+"px",N=({hidden:e,onVisible:t,height:n})=>{var r=y(t);return a.createElement("div",{styles:{height:n},className:i(e&&p,"_3xkmF5bR"),ref:r})},S=({month:e,maxRangeDays:t,startDate:g,endDate:f,fromMonth:y,monthRange:F,onDateReset:S,onDateSelect:x,numberOfMonths:B,disableBefore:O=_,layoutStyle:P,fullHeight:W,fullWidth:Y,disabledDates:L})=>{var j,A,H,I,U,V,R=(j=d(),A="sun"===j.getFirstDayOfWeek()?0:1,H=new Intl.DateTimeFormat(j.locale,{month:"long",day:"numeric",year:"numeric"}),I=new Intl.DateTimeFormat(j.locale,{month:"long",year:"numeric"}),U=new Intl.DateTimeFormat(j.locale,{weekday:"narrow",timeZone:"UTC"}),V=new Intl.DateTimeFormat(j.locale,{weekday:"long",timeZone:"UTC"}),Object.assign({},m,{formatDay:e=>H.format(e),formatMonthTitle:e=>I.format(e),formatWeekdayShort:e=>U.format(new Date(Date.UTC(0,0,e))),formatWeekdayLong:e=>V.format(new Date(Date.UTC(0,0,e))),getFirstDayOfWeek:()=>A})),{code:Z}=r(h).locale,z=R.getFirstDayOfWeek(Z),[G,q]=l(2),[K,Q]=a.useState(null),[X,$]=a.useState(!(e&&y.getMonth()!==e.getMonth()));a.useEffect((()=>{if(e&&K){var t=e.getMonth()-y.getMonth()+12*(e.getFullYear()-y.getFullYear());if(0!==t){var a=51*t+37*((e,t)=>{for(var a=new Date(e),n=0;a.getMonth()<t.getMonth()||a.getFullYear()<t.getFullYear();)n+=T(a),a.setMonth(a.getMonth()+1);return n})(y,e);X?K.scrollTo({top:a,behavior:"smooth"}):(K.scrollTo({top:a}),$(!0))}}}),[e,y,K,X]);var J=new Date(y);J.setMonth(y.getMonth()+F);var ee=c(),te={today:b,caption:"_3YeMmqY9",week:"UEIb8bsS",day:i(b,ee),disabled:E,outside:E,selected:"_1MiQ76jt",weekdaysRow:i(w,{[p]:"infiniteVerticalScroll"===P}),weekday:M,month:"_3T3SvG5Z",months:i("_3mPeZvwW",{fFAobspP:"paginated"===P}),container:i("_1ruqaRPp",{_1WNLYfva:"paginated"===P}),wrapper:i(ee),interactionDisabled:"",weekdays:"",navBar:"",navButtonPrev:"",navButtonNext:"",body:""},{os:ae,viewportCategory:ne}=r(D),re=n(((e,t,a)=>{"IOS"===ae.family&&a.currentTarget instanceof HTMLElement&&(a.currentTarget.click(),a.preventDefault())}),[ae]),le=o((()=>g&&null!=t?{before:O,after:new Date(g.getFullYear(),g.getMonth(),g.getDate()+t-1)}:{before:O}),[g,t,O]),oe=x?(e,{[E]:t})=>{x(e,t||!1)}:null,ie="MOBILE"===ne,[se,me]=a.useMemo((()=>{if(g&&f){var e=new Date(g.getFullYear(),g.getMonth()+1,0),t=new Date(f.getFullYear(),f.getMonth(),1);return[e.getTime()===g.getTime(),t.getTime()===f.getTime()]}return[!1,!1]}),[g,f]),ce="paginated"===P?e:y,ue=g&&f&&{from:g,to:f}||void 0,de=Object.assign({},ce&&{month:ce},{},ue&&{selectedDays:ue}),ge=[le];return Array.isArray(L)||L&&ge.push(L),a.createElement("div",{className:i("_3cxidVpC",{"_37-CUxEB":!!W,_7oKarGtv:!!Y}),"data-automation":"dayCalendar"},a.createElement("div",{className:"_2F9MW-Xp"},a.createElement("div",{className:i(w,{[p]:"paginated"===P})},[0,1,2,3,4,5,6].map((e=>a.createElement("div",{key:e,className:M},R.formatWeekdayShort(e+z,Z)))))),a.createElement("div",{className:"infiniteVerticalScroll"===P?"_1lLSw0O1":null,ref:e=>Q(e)},a.createElement(s,Object.assign({},de,{localeUtils:R,locale:Z,disabledDays:ge,modifiers:{WPineHOH:[g],_2vzGxQ8i:[f],_2nzPD0oq:[se||null==f||+g==+f?g:void 0,me?f:void 0]},fromMonth:y,toMonth:J,classNames:te,renderDay:e=>a.createElement("div",{className:"_2gAFj1Br"},e.getDate())},oe&&{onDayClick:oe},{onDayTouchEnd:re,numberOfMonths:"paginated"===P?B:G,navbarElement:e=>"paginated"===P?a.createElement(k,e):null})),S&&!ie&&a.createElement(v,{onClick:S},a.createElement(u,{id:"sng_fusion_list_filters_modal_reset"})),"infiniteVerticalScroll"===P&&[...Array(F-2)].map(((e,t)=>{var n=new Date(y.getFullYear(),y.getMonth()+t+1,0);return a.createElement(N,{hidden:t+2<G,height:C(n),onVisible:()=>q((e=>Math.min(F,Math.max(t+2+1,e)))),key:n.toString()})}))))};return[()=>{_=new Date,e("default",S),e("monthDateFromOffset",F)},[e=>(a=e.default,n=e.useCallback,r=e.useContext,l=e.useState,o=e.useMemo),e=>i=e.default,e=>(s=e.default,m=e.LocaleUtils),e=>c=e.useKeyboardFocusableClassName,e=>(u=e.default,d=e.useIntlFormatter,g=e.useLocalize),e=>(h=e.Environment,D=e.Device),e=>(f=e.CircularButton,v=e.BorderlessButton),e=>y=e.useOnVisible]]},["cDcdfi","jSLlaY","wLDeDm","W3_c4H","0DsHEV","2R4xv2","7yGKf-","BLrxBS"]]);
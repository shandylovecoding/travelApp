(this.$WP=this.$WP||[]).push(["6SswlX",(e,r)=>{"use strict";var n,a,s,t,i=(e,r)=>{switch(r){case"CHILD":return e.string("phoenix_picker_children");case"INFANT":return e.string("phoenix_picker_infants");case"YOUTH":return e.string("phoenix_picker_youths");case"SENIOR":return e.string("phoenix_picker_seniors");case"ADULT":default:return e.string("phoenix_picker_adults")}},l=(e,r)=>{switch(r){case"CHILD":return e.string("fusion_picker_children_plus_label");case"INFANT":return e.string("fusion_picker_infants_plus_label");case"YOUTH":return e.string("fusion_picker_youths_plus_label");case"SENIOR":return e.string("fusion_picker_seniors_plus_label");case"ADULT":default:return e.string("fusion_picker_adults_plus_label")}},u=(e,r)=>{switch(r){case"CHILD":return e.string("fusion_picker_children_minus_label");case"INFANT":return e.string("fusion_picker_infants_minus_label");case"YOUTH":return e.string("fusion_picker_youths_minus_label");case"SENIOR":return e.string("fusion_picker_seniors_minus_label");case"ADULT":default:return e.string("fusion_picker_adults_minus_label")}},_=(e,r,n)=>null!=r&&null!=n?e.string("exp_age_from_to",{0:r,1:n}):void 0,c=({ageBand:e,startAge:r,endAge:a,currentValue:c,travelerCount:o,onChange:g,maxTotalTravelers:d})=>{var p=((e,r,n,a)=>{var s=null==e?10:e,t=(null==r?10:r)-a+n;return Math.min(s,t)})(e.maxTravelersPerBooking,d,c,o),{localize:f}=t();return n.createElement("div",null,n.createElement(s,{label:i(f,e.ageBand),secondaryText:_(f,r,a),onStepChange:r=>g(e.ageBand,r),plusLabel:l(f,e.ageBand),minusLabel:u(f,e.ageBand),rangeMin:e.minTravelersPerBooking||0,rangeMax:p,currentStepValue:c}))},o=({passengerInfo:e,selections:r,onAgeBandChange:s,errorMessage:t})=>{var i=a((()=>Array.from(r.entries()).reduce(((e,[,r])=>e+r),0)),[r]);return n.createElement("div",{className:"_2krrajPP"},e.ageBands&&e.ageBands.filter(Boolean).map((a=>n.createElement(c,{key:a.ageBand,ageBand:a,startAge:a.startAge,endAge:a.endAge,maxTotalTravelers:e.maxTravelersForBooking,currentValue:r.get(a.ageBand)||0,travelerCount:i,onChange:s}))),null!=t&&n.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))};return[()=>{e("default",o)},[e=>(n=e.default,a=e.useMemo),e=>s=e.default,e=>t=e.useLocalize]]},["cDcdfi","aue22J","0DsHEV"]]);
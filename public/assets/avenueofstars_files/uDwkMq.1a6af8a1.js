(this.$WP=this.$WP||[]).push(["uDwkMq",(e,a)=>{"use strict";var t,r,l,i,u,n,s,m,c,o,d,v,f,p,_,h,g,E,N,T,b,k,x,y,D,C,L={firstName:{value:"",isRequired:!0},lastName:{value:"",isRequired:!0},phoneNumber:{value:"",isRequired:!0},email:{value:"",isRequired:!0}},q=({children:e})=>{var a=s(L,y);return t.createElement(C.Provider,{value:a},e)},P="_3zqX3vO2",R=(e,a)=>{var{state:t,update:r}=l(C),i=t[e];n((()=>{i.isDirty||i.value===a||r(e,{value:a})}),[e,a,r])},B=({initialFirstName:e="",initialLastName:a="",initialEmail:r="",initialPhoneNumber:n="",checkoutType:s,onChangeCallback:m,isModal:c})=>{var o,{state:{firstName:d,lastName:y,phoneNumber:D,email:L},update:q}=l(C),B=m?(e,a)=>{m(),q(e,a)}:q,{localize:I}=N(),[O,V]=i(d.value),[F,S]=i(y.value),[w,A]=i(D.value),[H,z]=i(L.value),[,{uid:U}]=l(p),{funnelKey:K}=l(_),W=T(),M=b(),$=u((e=>{var a={formFieldChange:{funnelKey:K,pageviewUid:U,formName:"TravelerDetails",fieldName:e.field}};switch(s){case"STANDALONE":M({OptimusStandaloneCheckout:a});break;case"HOTEL":M({OptimusHotelCheckout:a})}}),[s,K,M,U]),G=u((()=>{var t=[{fieldName:"firstName",isPrefilled:!!e},{fieldName:"lastName",isPrefilled:!!a},{fieldName:"email",isPrefilled:!!r},{fieldName:"phoneNumber",isPrefilled:!!n}],l=t.some((e=>e.isPrefilled));s&&W({optimusCheckoutForm:{flow:s,funnelKey:K,pageviewUid:U,formName:"TRAVELERDETAILS",isPrefilled:l,formFields:t}})}),[s,K,W,e,a,r,n,U]);R("firstName",e),R("lastName",a),R("email",r),R("phoneNumber",n);var X=c?"supporting-03":"title-05";return t.createElement(v,{onIsVisibleCallback:G},t.createElement("form",null,t.createElement(f,{variant:c?"title-04":"title-03",elementType:"h2",marginBottom:"spacing-04"},t.createElement(E,{id:"plus_checkout_traveler_details_heading"})),t.createElement(h,{space:"spacing-03"},t.createElement(g,{display:"flex",flexDirection:["column","column","row"],alignItems:"stretch"},t.createElement("div",{className:P},t.createElement(x,{id:"tdf-first",label:t.createElement(f,{variant:X},t.createElement(k,null,t.createElement(E,{id:"plus_checkout_first_name_field"}))),type:"text",value:d.value,onChange:e=>B("firstName",{value:e.currentTarget.value}),errorText:d.isError?I.string("plus_checkout_error_state_first_name_v2"):void 0,onBlur:e=>{e.currentTarget.value!==O&&($({field:"FirstName"}),V(e.currentTarget.value)),q("firstName",{isDirty:!0})}})),t.createElement(g,{marginTop:"spacing-03",marginLeft:"spacing-03"}),t.createElement("div",{className:P},t.createElement(x,{id:"tdf-last",label:t.createElement(f,{variant:X},t.createElement(k,null,t.createElement(E,{id:"plus_checkout_last_name_field"}))),type:"text",value:y.value,onChange:e=>B("lastName",{value:e.currentTarget.value}),errorText:y.isError?I.string("plus_checkout_error_state_last_name_v2"):void 0,onBlur:e=>{e.currentTarget.value!==F&&($({field:"LastName"}),S(e.currentTarget.value)),q("lastName",{isDirty:!0})}}))),t.createElement(x,{id:"tdf-phone",label:t.createElement(f,{variant:X},t.createElement(k,null,t.createElement(E,{id:"plus_checkout_phone_number_field"}))),type:"tel",value:D.value,onChange:e=>B("phoneNumber",{value:e.currentTarget.value}),errorText:D.isError?I.string("plus_checkout_error_state_phone_number"):void 0,onBlur:e=>{e.currentTarget.value!==w&&($({field:"PhoneNumber"}),A(e.currentTarget.value)),q("phoneNumber",{isDirty:!0})}}),t.createElement(x,{id:"tdf-email",label:t.createElement(f,{variant:X},t.createElement(E,{id:"plus_checkout_email_field"})),type:"email",value:L.value,onChange:e=>B("email",{value:e.currentTarget.value}),errorText:d.isError?I.string("plus_checkout_error_state_email"):void 0,onBlur:e=>{e.currentTarget.value!==H&&($({field:"Email"}),z(e.currentTarget.value)),q("email",{isDirty:!0})},helperText:(null==(o=L.value)?void 0:o.length)&&("HOTEL"===s?I.string("plus_checkout_hotel_email_disclaimer_text",{email:L.value}):I.string("plus_checkout_subscription_email_disclaimer_text",{email:L.value}))||void 0,readOnly:!0}))))};return[()=>{y={firstName:c,lastName:c,phoneNumber:o,email:d},D={state:{firstName:m.required,lastName:m.required,phoneNumber:m.required,email:m.required},update:()=>{},validate:()=>!1,setHasError:()=>{}},C=r(D),e("default",B),e({TravelerDetails:C,TravelerDetailsProvider:q})},[e=>(t=e.default,r=e.createContext,l=e.useContext,i=e.useState,u=e.useCallback,n=e.useEffect),e=>(s=e.default,m=e.defaults),e=>(c=e.nameValidator,o=e.phoneValidator,d=e.emailValidator),e=>v=e.IsVisibleOnce,e=>f=e.default,e=>p=e.Route,e=>_=e.FunnelTracking,e=>(h=e.Stack,g=e.Box),e=>(E=e.default,N=e.useLocalize),e=>T=e.useImpressionLogger,e=>b=e.useInteractionLogger,e=>k=e.RequiredLabel,e=>x=e.TextInput]]},["cDcdfi","8fiGCU","ivxRiU","BLrxBS","VP50Wc","2R4xv2","ETqDaL","SzaY02","0DsHEV","30t50h","fsml46","AFIA6D","7bbexq"]]);
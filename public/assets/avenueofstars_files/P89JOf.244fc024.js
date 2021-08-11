(this.$WP=this.$WP||[]).push(["P89JOf",(e,o)=>{"use strict";var t,r,i,a,n,s,c,u,l,d,p,_,m,E,C,g,D=e=>{var{formFieldPrefix:o="pc"}=e,d=function(e,o){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["formFieldPrefix"]),{localize:m}=_(),{promoCodeForm:g,updatePromoCodeForm:P}=i(l),{appliedPromoCode:v,displayState:f,errorText:R,isApplying:y,promoCodeField:h}=g,A=(()=>{var{localize:e}=_();return r((o=>{switch(o){case"REJECTED_INACTIVE":return e.string("plus_checkout_promo_code_expired");case"REJECTED_CONNECTION_ERROR":return e.string("plus_checkout_promo_code_error");case"REJECTED_INVALID_USER":return e.string("plus_checkout_promo_code_unauthorized");case"REJECTED_ALREADY_USED":return e.string("plus_checkout_promo_code_used");case"REJECTED_DISCOUNT_SERVICE_ERROR":default:return e.string("plus_checkout_promo_code_invalid")}}),[e])})(),O=E(),T=r((()=>{O({OptimusDiscountCode:{optimusAction:{pageAction:"click",pageProperty:"promocode_link"}}}),P({displayState:"ShowPromoCodes"})}),[P,O]),I=r((e=>P({promoCodeField:Object.assign({},h,{value:e.toUpperCase()})})),[h,P]),S=r((()=>{O({OptimusDiscountCode:{optimusAction:{pageAction:"click",pageProperty:"promocode_apply"}}}),P({isApplying:!0})}),[P,O]),b=r((e=>{O({OptimusDiscountCode:{optimusAction:{pageAction:"in_view",pageProperty:"promocode_error",attribute:e}}})}),[O]),{subscriptionPrice:k}=D.useOptimusSubscriptionPrice(),{discount:x}=k||{};a((()=>{if(g.isApplying&&(null==x?void 0:x.discountCode)){var{discountCode:e,discountedPrice:o,originalPrice:t,status:r}=x;if("APPLIED"===r)P({appliedPromoCode:{amount:o-t,code:e,appliedPrice:k},isApplying:!1,promoCodeField:Object.assign({},g.promoCodeField,{isError:!1,value:""})});else{var i=A(r);P({appliedPromoCode:null,errorText:i,isApplying:!1,promoCodeField:Object.assign({},g.promoCodeField,{isError:!0,value:e})})}}}),[A,g,x,P,k]);var N=r((e=>A("REJECTED_CONNECTION_ERROR")===e?"connection_error":A("REJECTED_DISCOUNT_SERVICE_ERROR")===e?"invalid_code":A("REJECTED_INVALID_USER")===e?"unauthorized":A("REJECTED_ALREADY_USED")===e?"already_used":A("REJECTED_INACTIVE")===e?"cancelled_expired":""),[A]);return a((()=>{if(h.isError&&R){O({OptimusDiscountCode:{optimusAction:{pageAction:"failed",pageProperty:"promocode"}}});var e=N(R);b(e)}}),[h,R,O,N,b]),t.createElement(c,d,t.createElement(u,{dividers:!0,space:"spacing-03"},t.createElement(t.Fragment,null),"ShowPromoCodes"===f&&!v&&t.createElement(c,{display:"flex",className:"_1Dv3kGdY"},t.createElement(C,{errorText:h.isError?R:void 0,id:`${o}-promoCodeInput`,marginRight:"spacing-03",onChange:e=>I(e.currentTarget.value),placeholder:m.string("plus_checkout_promo_code_placeholder"),state:h.isError?"error":"enabled",type:"text",value:h.value}),t.createElement(n,{dataAttributes:{"data-automation":"applyDiscount"},disabled:y,onClick:()=>h.value&&S(),variant:"secondary"},t.createElement(p,{id:"plus_checkout_promo_code_apply"}))),"ShowLink"===f&&t.createElement(c,{marginY:"spacing-03"},t.createElement(s,{dataAttributes:{"data-automation":"showDiscountInput"},onClick:T},t.createElement(p,{id:"plus_checkout_promo_code"})))))};function P(e,o){var t=E(),{updatePromoCodeForm:a}=i(l),n=m(),{localize:s}=_(),c=m(),u=r((()=>{t({OptimusDiscountCode:{optimusAction:{pageAction:"success",pageProperty:"promocode"}}})}),[t]),d=null==e?void 0:e.discountCode;if(!e||!d)return null;var p=n.formatCurrencyInteger(e.originalPrice),C=e.discountedPrice-e.originalPrice,{expiryDate:g}=e,D=g?c.formatDate("date_short",new Date(g)):null,P=o?s.string("plus_partner_discount_tooltip",{0:o}):s.string("plus_first_year_discount_title"),v=`${s.string("plus_first_year_discount_body",{originalPrice:p})}\n  ${D?s.string("plus_discount_expire_date",{expireDate:D}):""}`,f=e.discountedPrice>0?{tooltipTitle:P,tooltipBody:v}:null;return Object.assign({onRemove:()=>a({appliedPromoCode:null}),price:C,rawPrice:C,title:d},f,{variant:"DISCOUNT",onRemoveVisible:u})}var v=()=>{var e="discountCode";return{setDiscountCode:o=>{g.set(e,o,864e5)},getDiscountCode:()=>g.get(e),clearDiscountCode:()=>{g.remove(e)}}};return e("useDiscountCharge",P),[()=>{D.useOptimusSubscriptionPrice=d,e("default",D),e({useDiscountCharge:P,useDiscountCodePersistance:v})},[e=>(t=e.default,r=e.useCallback,i=e.useContext,a=e.useEffect),e=>(n=e.default,s=e.BorderlessButton),e=>(c=e.Box,u=e.Stack),e=>l=e.Payment,e=>d=e.useOptimusSubscriptionPrice,e=>(p=e.default,_=e.useLocalize,m=e.useIntlFormatter),e=>E=e.useInteractionLogger,e=>C=e.TextInput,e=>g=e.default]]},["cDcdfi","7yGKf-","SzaY02","ENvJHX","BWm3Dg","0DsHEV","fsml46","7bbexq","jaCyxS"]]);
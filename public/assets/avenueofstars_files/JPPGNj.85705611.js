(this.$WP=this.$WP||[]).push(["JPPGNj",(e,t)=>{"use strict";var a,r,n,l,i,s,c,m={ONE_STAR:"one-star",TWO_STARS:"two-star",THREE_STARS:"three-star",BIBGOURMAND:"bib"},o=e=>null!==e&&m[e]?m[e]:"plate",u=e=>{if(null==e?void 0:e.text){var t=a.createElement(s,{model:e.text});switch(e.__typename){case"AppPresentation_MichelinLabel":return(e=>{var{michelinAwardType:t,text:r}=e,l=null!==r&&a.createElement(s,{model:r});return a.createElement(n,{variant:o(t),localizedLabel:l})})(e);case"AppPresentation_AccentedLabel":return a.createElement(r,{variant:"accent"},t);case"AppPresentation_PrimaryLabel":return a.createElement(r,{variant:"primary"},t);case"AppPresentation_SecondaryLabel":return a.createElement(r,{variant:"secondary"},t);case"AppPresentation_SponsoredLabel":return a.createElement(r,{variant:"sponsored"},t);default:return null}}return null},p=({model:e})=>e.text?u(e)||a.createElement(l,{typename:e.__typename}):a.createElement(i,{message:"AppPresentation_Label with null text"}),d=({model:e})=>{var t=a.useMemo((()=>{return(t=e)?t.filter(Boolean).map(((e,t)=>{return a.createElement(a.Fragment,{key:(r=t,`slot-${String(r)}`)},e?a.createElement(p,{model:e}):a.createElement(i,{message:"Item exists but has no label"}));var r})):null;var t}),[e]);return t?a.createElement(c,{horizontalGap:"tight",verticalGap:"tight"},t):null};return[()=>{e({Label:p,LabelsList:d,convertLabel:u})},[e=>a=e,e=>(r=e.default,n=e.MichelinLabel),e=>(l=e.APSUnsupportedType,i=e.APSUnexpected),e=>s=e.default,e=>c=e.default]]},["cDcdfi","DCBGY9","PEYes_","XNYdwH","BVRCFX"]]);
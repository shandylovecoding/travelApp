(this.$WP=this.$WP||[]).push(["Q7TAd7",(e,t)=>{"use strict";var r,a,s,n,l,i,c,o=({children:e})=>{var[t,l]=r.useState(null),[[o,u],m]=r.useState([void 0,0]),[d,v]=r.useState(!1),f=r.useRef(null),E=s({in:d,timeout:300,forceDocumentReflow:!0}),_=r.useCallback((()=>{if(v(!1),f.current){var[e,t]=f.current;e("dismissed"),t()}}),[]),N=r.useCallback((({node:e,timeout:t=4e3})=>new Promise((r=>{if(f.current){var[a,s]=f.current;a("collision"),s()}v(!1),m((([,t])=>[e,t+1]));var n=setTimeout((()=>{v(!1),r("timeout"),f.current=null}),t);f.current=[r,()=>{clearTimeout(n),f.current=null}]}))),[]),T=r.useMemo((()=>[N,_]),[N,_]);return r.useEffect((()=>{0!==u&&(v(!0),l(o))}),[o,u]),r.createElement(i.Provider,{value:T},e,"exited"!==E&&r.createElement(n,{className:a("_19H2jRtp",c[E])},t))},u=({children:e})=>{var[t,a]=r.useContext(i);return e(t,a)},m=({iconName:e,cta:t,children:a})=>r.createElement("div",{className:"tY-JfIhz"},r.createElement("div",{className:"_3JJTgXyq"},r.createElement("div",{className:"_3x7NQLSE"},e&&r.createElement("div",{className:"_3ibgHDRZ"},r.createElement(l,{name:e})),r.createElement("div",{className:"_3ESy2mQs"},a)),t&&r.createElement("div",{className:"RWturr0i"},t)));return[()=>{i=r.createContext([()=>new Promise((()=>{console.error("Toast provider was not set!")})),()=>{console.error("Toast provider was not set!")}]),c={enter:"_2AhysMPb",entering:"_27X43fqO",entered:"_3BF_-AkZ",exit:"_2jrC_wef",exiting:"_1OFvGttE",exited:"N4tL7kkF"},e({Toast:i,ToastConsumer:u,ToastItem:m,ToastProvider:o})},[e=>r=e,e=>a=e.default,e=>s=e.default,e=>n=e.OverlayPortal,e=>l=e.default]]},["cDcdfi","jSLlaY","6RAaot","vq6MSq","pyY-iJ"]]);

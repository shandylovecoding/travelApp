(this.$WP=this.$WP||[]).push(["dAea-m",(e,l)=>{"use strict";var t,a,n,s,u,r,c,o,i,d,m,p,g,f,v;function y(e,l){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}var C=({result:e,index:l,active:a,onMouseMove:n,onSelect:u})=>{var r=t.useCallback((()=>{u(e,l)}),[u,e,l]);return s("Enter",a?r:()=>{}),t.createElement(g,Object.assign({},e.props,{selected:a,onMouseMove:n,onClick:r,tabIndex:-1}))};return[()=>{f=t.forwardRef(((e,l)=>{var{query:a,results:g,selectedResultDisplayValue:f,size:v="medium",errorText:E,clearValueOnSelection:h=!1,handleEmptyResult:b=!1,closeDropdownOnClickOutside:k=!0,onQueryChanged:x,onFocus:R,onSelect:S,hideResults:T=!1,inline:O=!1}=e,D=y(e,["query","results","selectedResultDisplayValue","size","errorText","clearValueOnSelection","handleEmptyResult","closeDropdownOnClickOutside","onQueryChanged","onFocus","onSelect","hideResults","inline"]),I="MOBILE"===t.useContext(c).viewportCategory,M=t.useRef(),[V,j]=t.useState(!0),_=t.useCallback((()=>j(!1)),[]),w=t.useCallback((()=>j(!0)),[]),L=t.useCallback((()=>{x(""),S&&S(null)}),[x,S]),N=t.useCallback((e=>{_(),R&&R(e)}),[R,_]),P=t.useCallback((e=>{x(e.currentTarget.value),_()}),[x,_]),A=e=>{k&&null!=M.current&&e.target instanceof HTMLElement&&!M.current.contains(e.target)&&w()};s("Escape",(e=>{e.preventDefault(),e.stopPropagation(),w()})),u("click",A),u("focusin",A);var F=t.useCallback(((e,l)=>{null!=S&&S(e,l),x(h?"":e.displayValue),w()}),[S,x,h,w]),W=f===a,q=!T&&!V&&(g.length>0||b),B=!!E&&!q,Z=I&&q,[z,Q]=m(D);return t.createElement(t.Fragment,null,t.createElement("div",{className:n("AOs27aal",p(z),{"_3ZS-xZcW":"small"===v,_1TEATtIh:"medium"===v}),ref:M},t.createElement("div",{className:n("_2N9qDiJn",{_2t3fuC4i:q,_35H_ssZI:O})},t.createElement(d,Object.assign({},Q,{ref:l,size:v,error:B,value:a,onClick:_,onFocus:N,onChange:P,onBack:Z?w:void 0,onClear:W?L:void 0})),q&&t.createElement(t.Fragment,null,t.createElement(i,{marginTop:"spacing-03"}),t.createElement("div",{className:"_2XCAgaIn"},t.createElement(r,null,g.map(((e,l)=>(a,n)=>t.createElement(C,{key:e.id,result:e,index:l,active:a,onMouseMove:n,onSelect:F})))))))),null!=E&&B&&t.createElement(o,{variant:"supporting-02",color:"dangerText",marginTop:"spacing-02"},E))})),v=t.forwardRef(((e,l)=>{var{selectedResultDisplayValue:n,locationTypes:s,geoId:u=1,max:r=8,onTextInputChanged:c,onSelect:o}=e,i=y(e,["selectedResultDisplayValue","locationTypes","geoId","max","onTextInputChanged","onSelect"]),[d,m]=t.useState(null!=n?n:"");t.useEffect((()=>{m(null!=n?n:"")}),[n]);var p=t.useMemo((()=>({geoId:u})),[u]),{results:g}=a(d,"",p,"LocationTypeahead",r,s).results;return t.createElement(f,Object.assign({},i,{query:d,selectedResultDisplayValue:n,results:g.map((e=>({id:e.key,displayValue:e.searchText,props:{heading:e.title,subheading:e.subtitle,label:e.label,iconName:"map-pin",image:e.image}}))),onQueryChanged:e=>{m(e),c&&c(e)},onSelect:(e,l)=>{null!=o&&o(null!=l?g[l]:null)},ref:l}))})),e("default",f),e("LocationSelector",v)},[e=>t=e.default,e=>a=e.default,e=>n=e.default,e=>s=e.useKeyboardEvent,e=>u=e.useWindow,e=>r=e.NavigableList,e=>c=e.Device,e=>o=e.default,e=>i=e.default,e=>d=e.default,e=>(m=e.getMarginProps,p=e.margin),e=>g=e.default]]},["cDcdfi","ABlMo4","jSLlaY","8xs-IB","Dg5_-9","Erjc5t","2R4xv2","VP50Wc","jPSRY1","fZR2pj","iekllc","L2wXtu"]]);
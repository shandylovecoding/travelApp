(this.$WP=this.$WP||[]).push(["JFHNGL",(e,n)=>{"use strict";var i,o,t,r,a,s,l,c,u,d=["SAVES_COMBINED"],f=e=>{var n=i.useRef(void 0),a=r(),s=i.useCallback((()=>{if(n.current){var e=n.current;n.current=null,e()}}),[]),{open:l,isOpen:f}=t((({close:e})=>i.createElement(u,{onComplete:()=>{e(),s()},forceTermsOfUse:!0,onClose:()=>{e(),n.current=null}}))),[m,g]=o({query:c,pause:!0});return i.useEffect((()=>{var e,i;m.fetching||!n.current||f||((null==(e=m.data)||null==(i=e.getTermOfUseAcceptanceInfo)?void 0:i.accepted)?s():l())}),[f,l,s,m]),i.useCallback((()=>a(e).then((()=>e.flow&&d.includes(e.flow)?Promise.resolve():new Promise((e=>{n.current=e,g()}))))),[e,a,g])},m=e=>{var{userId:n}=i.useContext(s),o=f({pid:e.pid,flow:e.flow,flowOrigin:e.flowOrigin,forceLogin:e.forceLogin,extraQueryParams:e.extraRegParams,onLogin:e.onLoginStarted,onSuccess:e.onLoginSuccess,onClose:e.onClose});return e.children(o,n||"")},g=({pid:e,isControl:n,trackingModule:o})=>{var t=l();i.useEffect((()=>{t({module:o,action:"member_gate_mounted"})}),[o,t]);var a=r();return i.useEffect((()=>{n||a({pid:e,flowOrigin:"join",flow:"MEMBER_GATE_COMBINED",closeX:!1,closeOnDocClick:!1,windowShadeOption:"light"})}),[a,e,n]),null};return[()=>{(c=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TermsOfUse"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTermOfUseAcceptanceInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accepted"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":77}}')).__key=0xd3ed4f0faa9c,u=a.component.onUsage((()=>n("kNh38S")),"default"),g.defaultProps={pid:-1,trackingModule:"memx_hard_gate",isControl:!1},e({MemberHardGate:g,SocialLoginGate:m,useSocialLoginGate:f})},[e=>i=e,e=>o=e.useQuery,e=>t=e.useVDOMPortal,e=>r=e.default,e=>a=e,e=>s=e.Visitor,e=>l=e.useGARecorder]]},["cDcdfi","5X2em-","vq6MSq","mv7yXI","pLbCP4","2R4xv2","fsml46"]]);

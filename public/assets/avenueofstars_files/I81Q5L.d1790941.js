(this.$WP=this.$WP||[]).push(["I81Q5L",(e,t)=>{"use strict";var r,n,a,s,i,c,d,o,u,h,m,l,f,p,g,v,y,w,_,b="active",E="passive",S="hidden",T="frozen",k="terminated",C=e=>(e.preventDefault(),e.returnValue="Are you sure?"),N=e=>e.reduce(((e,t,r)=>(e[t]=r,e)),{}),z=()=>"undefined"==typeof document||document.visibilityState===S?S:document.hasFocus()?b:E,I=(e,t)=>Object.create(PerformanceEntry.prototype,{name:{value:e},entryType:{value:"mark"},startTime:{value:(()=>{if(void 0!==t.startTime){if(t.startTime<0)throw new TypeError("Invalid startTime");return t.startTime}return performance.now()})()},duration:{value:0},detail:{value:t.detail}}),W=(e,t,r)=>{t in e?e[t]+=r:e[t]=r},B=(e,t)=>e+t,L=/\.(jpg|webp)\?((w|h|s|q|f)=){1,}/,R=!1,j=(e,t)=>{var{domainName:r,locale:u,version:h,cdnPrefix:m}=n(c),{userId:l}=n(d),{viewportCategory:f,isWebview:p}=n(o),g=a(!1),_=a(1),b=a(0);s((()=>{if(performance.getEntriesByName("hidden").length>0){var e=performance.getEntriesByName("visible");b.current=e.length>0?e[e.length-1].startTime:performance.now()}}),[]);var E=a({checksum:0,uid:t,page:e,isRepresentative:!0,pageLoad:null,timings:[],metrics:{},navigations:[]}),S=a(!1);s((()=>{R?S.current=!0:R=!0}),[]);var T=a((()=>{S.current||(E.current.metrics["document-dwell-time"]=performance.now()-b.current,Object.entries(E.current.metrics).forEach((([e,t])=>{var r;E.current.metrics[e]=(r=t,Math.round(1e4*r)/1e4)})),navigator.sendBeacon("/data/2.0/rum",JSON.stringify(E.current)),E.current.pageLoad=null,E.current.metrics={},E.current.timings=[],E.current.navigations=[],b.current=performance.now())})),k=a(p),C=a(u.code),N=a(l),z=a(h),j=a(f);s((()=>{k.current=p,C.current=u.code,N.current=l,z.current=h,j.current=f}),[p,u.code,l,h,f]);var q=a(!0);s((()=>{var r,n,a;q.current?q.current=!1:(T.current(),_.current++,performance.clearMarks("hidden")),E.current.checksum=[t,e].map((e=>Array.from(w.encode(e)).reduce(B,0))).reduce(B,0),E.current.uid=t,E.current.page=e,E.current.isRepresentative=!0,E.current.pageLoad={uid:t,page:e,locale:C.current,revision:z.current,is_logged_in:null!==N.current,viewport_category:j.current,is_webview:k.current,user_agent:(null==(r=window.navigator)?void 0:r.userAgent)||"unknown",connection_type:(null==(n=window.navigator)||null==(a=n.connection)?void 0:a.effectiveType)||"unknown",sequence_id:_.current,is_hidden:performance.getEntriesByName("hidden").length>0}}),[t,e]),s((()=>{if("undefined"!=typeof PerformanceObserver){var e=new Set;E.current.metrics={},E.current.timings=[],E.current.navigations=[];var t,n=t=>{t.filter((e=>"mark"!==e.entryType||y.has(e.name))).filter((e=>"measure"!==e.entryType||!(e.name.startsWith("⚛")||e.name.startsWith("⛔")))).filter((t=>!e.has(t))).forEach((t=>{e.add(t),E.current.timings.push([t.name,t.entryType,Math.round(t.startTime),Math.round(t.duration)])}))},a=[[["navigation"],t=>{if(t.length>0){var r=t[t.length-1];if(e.has(r))return;e.add(r);try{n([I("fetch-start",{startTime:r.fetchStart||r.startTime}),I("request-start",{startTime:r.requestStart}),I("time-to-first-byte",{startTime:r.responseStart-r.requestStart}),I("time-to-last-byte",{startTime:r.responseEnd-r.requestStart})])}catch(e){console.error(e)}r.transferSize&&(E.current.metrics["document-transferred-bytes"]=r.transferSize),E.current.navigations.push({puid:E.current.uid,name:r.name,dns:Math.round(r.domainLookupEnd-r.domainLookupStart),ttfb:Math.round(r.responseStart-r.requestStart),download:Math.round(r.responseEnd-r.responseStart),size:r.transferSize||0})}},!1],[["resource"],t=>{g.current||t.filter((e=>e.decodedBodySize>0)).filter((t=>!e.has(t))).forEach((t=>{e.add(t),t.name.includes(m)&&t.name.endsWith(".js")?(W(E.current.metrics,"js-cdn-transferred-bytes",t.transferSize),W(E.current.metrics,"js-cdn-encoded-bytes",t.encodedBodySize),W(E.current.metrics,"js-cdn-decoded-bytes",t.decodedBodySize)):t.name.includes(m)&&t.name.endsWith(".css")?(W(E.current.metrics,"css-cdn-transferred-bytes",t.transferSize),W(E.current.metrics,"css-cdn-encoded-bytes",t.encodedBodySize),W(E.current.metrics,"css-cdn-decoded-bytes",t.decodedBodySize)):t.name.endsWith(".jpg")||t.name.endsWith(".jpeg")||t.name.endsWith(".ico")||t.name.endsWith(".gif")||t.name.endsWith(".png")||t.name.endsWith(".svg")||L.test(t.name)||t.name.endsWith(".ts")||t.name.endsWith(".m3u8")?(W(E.current.metrics,"media-transferred-bytes",t.transferSize),W(E.current.metrics,"media-request-count",1)):t.name.includes(r)&&t.name.includes("/data/")?(W(E.current.metrics,"data-transferred-bytes",t.transferSize),W(E.current.metrics,"data-request-count",1)):(W(E.current.metrics,"other-transferred-bytes",t.transferSize),W(E.current.metrics,"other-request-count",1))}))},!1],[["mark","measure"],n,!1],[["paint"],e=>{performance.getEntriesByName("hidden").length>0&&(E.current.isRepresentative=!1),n(e)},!0],[["longtask"],e=>{e.forEach((e=>{W(E.current.metrics,"total-blocking-time",e.duration-50),W(E.current.metrics,"long-task-count",1),E.current.timings.push([["task",e.name,...e.attribution.map((e=>e.containerName||e.containerId||(e.containerSrc&&e.containerSrc.startsWith("http")?e.containerSrc:"inline-iframe"))).filter(Boolean)].join(" > "),e.entryType,Math.round(e.startTime),Math.round(e.duration)])}))},!1],[["largest-contentful-paint"],e=>{if(e.length>0){var t=e[e.length-1];t.renderTime&&(E.current.metrics["largest-contentful-paint"]=t.startTime)}},!0],[["element"],e=>{e.forEach((e=>{E.current.timings.push([`${e.identifier} ${e.name}`,"element",Math.round(e.startTime),0])}))},!0],[["layout-shift"],e=>{e.forEach((({hadRecentInput:e,value:t})=>{e||W(E.current.metrics,"layout-shift-score",t)}))},!0],[["first-input"],(e,t)=>{if(e.length>0){var{processingStart:r,startTime:a}=e[0];E.current.metrics["first-input-delay"]=r-a;try{n([I("first-input-delay",{startTime:r-a})])}catch(e){console.error(e)}t&&t.disconnect()}},!0]].map((([e,t,r])=>{var n=null,a=requestIdleCallback((()=>{n=new PerformanceObserver(((e,r)=>t(e.getEntries(),r)));var a=!r;try{n.observe(1===e.length&&r?{type:e[0],buffered:r}:{entryTypes:e})}catch(t){a=!0;try{n.observe({entryTypes:e})}catch(e){a=!1}}a&&e.forEach((e=>{"longtask"===e&&window.__tti&&Array.isArray(window.__tti.e)?t(window.__tti.e):t(performance.getEntriesByType(e))}))}));return()=>{cancelIdleCallback(a),null!==n&&n.disconnect()}}));return i((e=>{null!=e&&(g.current=!0,performance.getEntriesByName("hidden").length>0&&(E.current.isRepresentative=!1),E.current.metrics["time-to-interactive"]=e,n([I("time-to-interactive",{startTime:e})]))})),"undefined"==typeof PerformanceEventTiming&&(null==(t=window.perfMetrics)||null==t.onFirstInputDelay||t.onFirstInputDelay((e=>{E.current.metrics["first-input-delay"]=e,n([I("first-input-delay",{startTime:e})])}))),()=>{a.forEach((e=>e()))}}}),[m,r]),s((()=>{try{window.self!==window.top&&(E.current.isRepresentative=!1)}catch(e){}window.location.hostname!==r&&(E.current.isRepresentative=!1),performance.getEntriesByName("hidden").length>0&&(E.current.isRepresentative=!1)}),[r]),s((()=>{var e=e=>{"hidden"===e.oldState&&"passive"===e.newState&&(b.current=performance.now()),"hidden"===e.newState&&T.current()};return v.addEventListener("statechange",e),()=>{R=!1,v.removeEventListener("statechange",e)}}),[])},q=({page:e,puid:t})=>(j(null!=e?e:"Unknown",t||""),null);return[()=>{u=class{constructor(e){this.type=e}},h=class{constructor(){this._registry={}}addEventListener(e,t,r=!1){this._getRegistry(e).push(t)}removeEventListener(e,t,r=!1){var n=this._getRegistry(e),a=n.indexOf(t);a>-1&&n.splice(a,1)}dispatchEvent(e){return e.target=this,Object.freeze(e),this._getRegistry(e.type).forEach((t=>t(e))),!0}_getRegistry(e){return this._registry[e]=this._registry[e]||[]}},m=class extends u{constructor(e,t){super(e),this.newState=t.newState,this.oldState=t.oldState,this.originalEvent=t.originalEvent}},l="object"==typeof safari&&safari.pushNotification,f="undefined"!=typeof self&&"onpageshow"in self,p=["focus","blur","visibilitychange","freeze","resume","pageshow",f?"pagehide":"unload"],g=[[b,E,S,k],[b,E,S,T],[S,E,b],[T,S],[T,b],[T,E]].map(N),v=new class extends h{constructor(){super();var e=z();this._state=e,this._unsavedChanges=[],this._handleEvents=this._handleEvents.bind(this),"undefined"!=typeof addEventListener&&(p.forEach((e=>addEventListener(e,this._handleEvents,!0))),l&&addEventListener("beforeunload",(e=>{this._safariBeforeUnloadTimeout=setTimeout((()=>{e.defaultPrevented||e.returnValue.length>0||this._dispatchChangesIfNeeded(e,S)}),0)})))}get state(){return this._state}get pageWasDiscarded(){return"undefined"!=typeof document&&document.wasDiscarded||!1}addUnsavedChanges(e){!this._unsavedChanges.indexOf(e)>-1&&(0===this._unsavedChanges.length&&addEventListener("beforeunload",C),this._unsavedChanges.push(e))}removeUnsavedChanges(e){var t=this._unsavedChanges.indexOf(e);t>-1&&(this._unsavedChanges.splice(t,1),0===this._unsavedChanges.length&&removeEventListener("beforeunload",C))}_dispatchChangesIfNeeded(e,t){if(t!==this._state)for(var r=((e,t)=>{for(var r,n=0;r=g[n];++n){var a=r[e],s=r[t];if(a>=0&&s>=0&&s>a)return Object.keys(r).slice(a,s+1)}return[]})(this._state,t),n=0;n<r.length-1;++n){var a=r[n],s=r[n+1];this._state=s,this.dispatchEvent(new m("statechange",{oldState:a,newState:s,originalEvent:e}))}}_handleEvents(e){switch(l&&clearTimeout(this._safariBeforeUnloadTimeout),e.type){case"pageshow":case"resume":this._dispatchChangesIfNeeded(e,z());break;case"focus":this._dispatchChangesIfNeeded(e,b);break;case"blur":this._state===b&&this._dispatchChangesIfNeeded(e,z());break;case"pagehide":case"unload":this._dispatchChangesIfNeeded(e,e.persisted?T:k);break;case"visibilitychange":this._state!==T&&this._state!==k&&this._dispatchChangesIfNeeded(e,z());break;case"freeze":this._dispatchChangesIfNeeded(e,T)}}},y=new Set(["time-to-interactive","first-paint","first-contentful-paint","cpm-hero-latency","first-input-delay","load","time-to-first-byte","time-to-last-byte","request-start","fetch-start"]),w=new TextEncoder,_=r.memo(q),e("default",_),e("useRUM",j)},[e=>(r=e.default,n=e.useContext,a=e.useRef,s=e.useEffect),e=>i=e.requestTTICallback,e=>(c=e.Environment,d=e.Visitor,o=e.Device)]]},["cDcdfi","6NeHQy","2R4xv2"]]);
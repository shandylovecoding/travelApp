(this.$WP=this.$WP||[]).push(["mxARhC",(e,t)=>{"use strict";var r,n,a,i,o="brLandingId",l="brStartTimeStamp",u="brTimeElapsed",s="brLandingInfo",d=[0,15,30,60],c=[],f=/^https?:\/\/[a-z\-\.]+\.tripadvisor\.[a-z\-\.]+/,g=()=>document.hidden,v=e=>"brHasSentTimeRecord"+e,h=e=>{for(var t=0;t<e.length;t++)if(!n.get(v(e[t])))return!1;return!0},m=(e,t)=>{var r={};r.brLandingId=n.get(o),r[e]=t,a.set(s,r,1)},w=(e,t)=>{if(e&&!h(d))try{var r=e.brLandingId,a=n.get(o);r&&a&&r===a&&Object.entries(e).filter((e=>2===(null==e?void 0:e.length)&&e[0]!==o)).forEach((e=>{n.set(e[0],e[1])}))}catch(e){console.error(e)}},b=(e,t,r)=>{var a=setTimeout((()=>{if(!g()){var a=v(e),i=n.get(a),o=n.get(l),u=o?(t+(Date.now()-o))/1e3:t;i||(r({module:"landingBounceRate",action:`${e}s`,context:`actualTime : ${u}s`}),n.set(a,!0),m(a,!0))}}),Math.max(1e3*e-t,0));c.push(a)},p=(e,t,r)=>{if(!g())for(var a=0;a<e.length;a++){var i=e[a];n.get(v(i))||b(i,t,r)}},D=()=>{var e=r.useRef(i());r.useEffect((()=>{var t,r,i=(r=e.current,()=>{document.hidden?(()=>{if(!h(d)){for(var e=0;e<c.length;e++)clearTimeout(c[e]);c=[];var t=n.get(l),r=n.get(u);if(null!=t&&null!=r){var a=r+(Date.now()-t);n.set(u,a),m(u,a)}}})():(e=>{if(!h(d)){n.set(l,Date.now());var t=n.get(u)||0;p(d,t,e)}})(r)});try{if(a.canUseLocalStorage()&&n.canUseSessionStorage()&&void 0!==document.hidden){var g,b,D=(e=>{for(var t=0;t<e.length;t++)if(null===n.get(v(e[t])))return!1;return null!==n.get(o)&&null!==n.get(l)&&null!==n.get(u)})(d),L=!!document.referrer,S=L&&!f.test(document.referrer),T=!(null==(g=window)||null==(b=g.performance)?void 0:b.navigation)||0===window.performance.navigation.type;if(!L&&T||S||!D)(e=>{n.set(o,Date.now()+Math.floor(1e3*Math.random()).toString()),n.set(l,Date.now()),n.set(u,0);for(var t=0;t<e.length;t++)n.set(v(e[t]),!1)})(d),p(d,0,e.current);else if(!h(d)){var y=n.get(u);if(null===y||0===y){var R=n.get(l);y=R?Date.now()-R:0}n.set(l,Date.now()),p(d,y,e.current)}h(d)||(document.addEventListener("visibilitychange",i),t=a.addListener(s,w))}}catch(e){console.error(e)}return()=>{t&&(document.removeEventListener("visibilitychange",i),t())}}),[])},L=()=>(D(),null);return[()=>{e("default",L),e("useBounceRateTracking",D)},[e=>r=e,e=>n=e.default,e=>a=e.default,e=>i=e.useGARecorder]]},["cDcdfi","qKFflQ","jaCyxS","fsml46"]]);
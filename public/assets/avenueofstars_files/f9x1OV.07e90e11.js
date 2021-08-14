(this.$WP=this.$WP||[]).push(["f9x1OV",(e,n)=>{"use strict";var i,t,a,r,s,d,o,u,l,c,m,k=()=>{var{userId:e,sessionId:n}=t.useContext(a),{version:i,locale:{code:d,language:o}}=t.useContext(r),{os:{family:u,majorVersion:l},id:c,isWebview:m}=t.useContext(s),k="undefined"==typeof navigator,v="undefined",p=k?v:navigator.userAgent,g=k?v:navigator.language,f={sessionId:n,userId:e};return m?Object.assign({app:{app_version:i,client_language:o,device_unique_id:c,os:u,os_version:isNaN(l)?null:l.toString()}},f):Object.assign({browser:{user_agent:p||"",content_language:(d||"").replace("_","-"),accept_language:g}},f)},v=()=>{var{os:{family:e}}=t.useContext(s),n=(()=>{var[,e]=o(l);return n=>e({requests:n})})(),a=k();return(t,r,s)=>{var{userId:d}=a,o=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(a,["userId"]),u="undefined"!=typeof document?document.referrer:null;return i("places_sift_tracking")?n([{accountEventTrackingData:{loginStatus:s,trafficSource:e,trafficMedium:u?"referral":"direct"},commonTrackingData:Object.assign({},o,{userId:r||d}),eventType:t}]):Promise.resolve()}},p=()=>{var e=(()=>{var[,e]=o(c);return n=>e({requests:n})})(),n=k();return(t,a,r,s,d)=>i("places_sift_tracking")?e([{commonTrackingData:n,contentIds:t,contentType:a,eventType:r,isToolsAction:d,newStatus:s}]):Promise.resolve()},g=()=>{var{sessionId:e,userId:n}=t.useContext(a),r=(()=>{var[,e]=o(m);return n=>e({requests:n})})();return t=>i("places_sift_tracking")?n&&e?r([Object.assign({},t,{flagged_by:n,sessionId:e})]):Promise.reject():Promise.resolve()},f=()=>{var[{page:e}]=t.useContext(d);return t.createElement(u,{sandbox:"allow-scripts allow-same-origin",title:"Sift script iframe",src:`https://www.jscache.com/SiftScript-p${e}.html`})};return[()=>{(l=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userTrackingProfileSiftAccountRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requests"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"userTracking_SiftAccountEventDataInput"}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userTracking_profileSiftAccountEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requests"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"contentType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":227}}')).__key=0x9b63c7e9a80b,(c=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userTrackingProfileSiftContentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requests"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"userTracking_SiftContentEventDataInput"}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userTracking_profileSiftContentEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requests"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"contentType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":227}}')).__key=0x934e9cea42e8,(m=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userTrackingReportContentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requests"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"userTracking_SiftReportContentDataInput"}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userTracking_reportContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requests"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"contentType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"eventType"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":209}}')).__key=50114401743212,e({SiftTrackingIframe:f,useUserAccountSiftTrackingAction:v,useUserContentSiftTrackingAction:p,useUserReportContentSiftTrackingAction:g})},[e=>i=e.featureIsEnabled,e=>t=e,e=>(a=e.Visitor,r=e.Environment,s=e.Device,d=e.Route),e=>o=e.useMutation,e=>u=e.Pixel]]},["-i3PJS","cDcdfi","2R4xv2","5X2em-","m5ZZFI"]]);

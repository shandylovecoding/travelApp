(this.$WP=this.$WP||[]).push(["fTyhRT",(e,r)=>{"use strict";var t,l,i,u,n,a,s,d,o,T,c,I,v=e=>{var[,r]=s(u),[l,i]=t.useState({fetching:!1}),n=o("SAVE_TO_TRIP"),a=t.useRef(!0),T=t.useCallback((e=>{a.current&&i(e)}),[]);if(t.useEffect((()=>()=>{a.current=!1}),[]),!e)return[l,()=>Promise.resolve([null,null])];var c=e;return[l,e=>(T({fetching:!0}),r({tripId:e,referenceId:`${c.id}`,referenceType:c.type,allowDuplicates:!1}).then((e=>{var r,t,l,i,u,a,s=null==e||null==(r=e.data)||null==(t=r.addItemToTrip)?void 0:t.trip,o=null==e||null==(l=e.data)||null==(i=l.addItemToTrip)||null==(u=i.errors)||null==(a=u[0])?void 0:a.error;if(s){var I=d(s,c);I?(n(),T({fetching:!1,result:{trip:s,tripItem:I}})):"bundleSave"===c.type?T({fetching:!1,result:{trip:s,tripItem:{__typename:"TripItem",id:0,comments:[]}}}):T({fetching:!1,error:{query:"ADD_ITEM_TO_TRIP",tripsError:o}})}else T({fetching:!1,error:{query:"ADD_ITEM_TO_TRIP",tripsError:o}});return[s,o]})).catch((e=>(console.error(e),T({fetching:!1,error:{query:"ADD_ITEM_TO_TRIP"}}),[null,null]))))]},p="mostRecentlyAddedToTrip",f=(e,r,t,u)=>{var[n,a]=v(r),{userId:s}=l(c);return[n,i((()=>{var l=null!=e?e:(e=>{var r=T.get(p);return r&&r.userId===e?r.tripId:null})(s);return t||!l||I.has(null==r?void 0:r.type)?(u&&u(),Promise.resolve([null,null])):a(l)}),[t,r,u,a,s,e]),e=>((e,r)=>{r?T.set(p,{tripId:e,userId:r},144e5):T.remove(p)})(e,s)]},h=(e,r,l)=>{var[i,u]=t.useState({fetching:!1,saved:!!l}),[,d]=s(n),[,o]=s(a);return[i,l?()=>l?(u(Object.assign({},i,{fetching:!0})),o({itemId:l.id,tripId:r}).then((e=>{var r,t=null==e||null==(r=e.data)?void 0:r.tripsRemoveItem;return t?(u({fetching:!1,saved:!1,result:{trip:t}}),i):(u({fetching:!1,saved:!0,error:{query:"REMOVE_TRIP_ITEM",tripsError:void 0}}),i)})).catch((()=>(u({fetching:!1,saved:!0,error:{query:"REMOVE_TRIP_ITEM"}}),i)))):Promise.resolve(i):()=>(u(Object.assign({},i,{fetching:!0})),d({tripId:r,referenceId:`${e.id}`,referenceType:e.type,allowDuplicates:!1}).then((e=>{var r,t,l,n,a,s,d,o,T,c=null==e||null==(r=e.data)||null==(t=r.addItemToTrip)?void 0:t.trip,I=null==e||null==(l=e.data)||null==(n=l.addItemToTrip)||null==(a=n.errors)||null==(s=a[0])?void 0:s.error;if(I||!c)return u({fetching:!1,saved:!1,error:{query:"ADD_ITEM_TO_TRIP",tripsError:I||void 0}}),i;var v=null==e||null==(d=e.data)||null==(o=d.addItemToTrip)||null==(T=o.items)?void 0:T[0];return u(v?{fetching:!1,saved:!0,result:{trip:c,tripItem:v}}:{fetching:!1,saved:!1,error:{query:"ADD_ITEM_TO_TRIP"}}),i})).catch((()=>(u({fetching:!1,saved:!1,error:{query:"ADD_ITEM_TO_TRIP"}}),i))))]};return[()=>{I=new Set(["savesItem","bundleSave"]),e({useAutosave:f,useSave:v,useTripSaveToggle:h})},[e=>(t=e,l=e.useContext,i=e.useCallback),e=>(u=e.AddItemToTrip,n=e.AddItemWithFullTrip,a=e.RemoveItemWithFullTrip),e=>s=e.useMutation,e=>d=e.getItemByReference,e=>o=e.usePixelCallback,e=>T=e.default,e=>c=e.Visitor]]},["cDcdfi","RXx5aI","5X2em-","eFKnUp","jb_4W2","jaCyxS","2R4xv2"]]);
(this.$WP=this.$WP||[]).push(["Z_Ebpb",(e,i)=>{"use strict";var a,n,l,t,d,s,r={45963:{linkId:"TOURISM_Articles",localizedAnchorText:"Las Vegas Travel Articles",sublinks:[{localizedAnchorText:"Everything You Need to Know About Visiting Las Vegas Right Now",url:"/Articles-l6wA7CIgnNb4-Las_vegas_travel_faq.html"},{localizedAnchorText:"Ultimate Guide to the Las Vegas Monorail",url:"/Articles-lGXcZoL6kPJA-Ultimate_guide_las_vegas_monorail.html"},{localizedAnchorText:"Las Vegas to Grand Canyon",url:"/Articles-lxxlLhun8evs-Side_trip_las_vegas_grand_canyon.html"}]},29222:{linkId:"TOURISM_Articles",localizedAnchorText:"Oahu Travel Articles",url:"/Articles-lrz9I99TuRzo-Food_trucks_oahu.html"},61e3:{linkId:"TOURISM_Articles",localizedAnchorText:"Yosemite Travel Articles",url:"/Articles-lphFTdz69AW8-Hidden_gems_yosemite.html"},60999:{linkId:"TOURISM_Articles",localizedAnchorText:"Yellowstone Travel Articles",url:"/Articles-lX1yR3COx5sA-Yellowstone_volcano_geology.html"}},u=["Tourism","Attractions","AttractionsFusion","Attraction_Review","Hotels","HotelsFusion","HotelsListFusion","HotelsList"],m=e=>{var i=e.sublinks?e.sublinks.map((e=>m(e))):[];return{preLocalizedAnchorText:e.preLocalizedName,localizedAnchorText:e.name,linkId:e.linkId,url:e.url,sublinks:i}},k=(e,i)=>{var k,o,[{page:v,params:c}]=a.useContext(n),{locale:N}=a.useContext(l),g=v&&u.includes(v),p=(e=>{var[i]=a.useContext(n),{page:l,params:t}=i,r=Object.entries(t).map((([e,i])=>({key:e,value:String(i)}))),u=a.useMemo((()=>({page:l,params:t})),[l,t]),[{data:m,fetching:k}]=d({query:s,variables:{page:l,params:r,route:u},pause:e});return{data:m,fetching:k}})(i||!g),b=g?(e=>{var i,a=null==e||null==(i=e.data)?void 0:i.GNavlinks;if(!a||0===a.length||!a[0])return[];var n=a[0].sublinks;return n&&0!==n.length&&n[0]?m(n[0]).sublinks:[]})(p):[],F="en-US"===N.code?r[(c.geoId||0).toString()]:null,{data:A}=t(e,i||g),S=a.useMemo((()=>{var e,i;return(null==A||null==(e=A.globalNavLinks)||null==(i=e.sublinks)?void 0:i.filter(Boolean))||[]}),[A]);return k=g?b:S,(o=F)?(k||[]).filter(Boolean).map((e=>{var i=(e.linkId||"").toLowerCase();return i.includes("scoped-home")||i.includes("tourism")?Object.assign({},e,{sublinks:[...e.sublinks||[],o]}):e})):k};return[()=>{(s=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageGlobalNavQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"params"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Internallinks_ParametersInput"}}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"route"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Routing_BasicRouteInput"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GNavlinks"},"name":{"kind":"Name","value":"Internallinks_buildPageGlobalNav"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requests"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"requestType"},"value":{"kind":"EnumValue","value":"GLOBAL_NAV"}},{"kind":"ObjectField","name":{"kind":"Name","value":"servlet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"urlParams"},"value":{"kind":"Variable","name":{"kind":"Name","value":"params"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"route"},"value":{"kind":"Variable","name":{"kind":"Name","value":"route"}}}]}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sublinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"preLocalizedName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sublinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"preLocalizedName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sublinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"preLocalizedName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sublinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"preLocalizedName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sublinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"preLocalizedName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":797}}')).__key=4258265712543,e("useSeoNavLinks",k)},[e=>a=e.default,e=>(n=e.Route,l=e.Environment),e=>t=e.useNavLinks,e=>d=e.useQueryRequiredSsr]]},["cDcdfi","2R4xv2","xsqNye","OnmvvE"]]);

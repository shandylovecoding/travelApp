(this.$WP=this.$WP||[]).push(["DY6uxn",(e,t)=>{"use strict";var n,i,r,a,s,u,o,_,l,c,d,p,g,f=e=>c.has(e)||r("fusion_prerelease")&&_.has(e)||(e=>{var t=l.has(e)&&l.get(e);return"function"==typeof t&&t()})(e),v=e=>{var{id:t,children:n=null,control:i=(()=>null),test:r=(()=>null)}=e;return f(t)?n||r():i()},h=e=>d.has(e.page)||(e=>{switch(e.page){case"AttractionProductReview":return r("fusion_lithium_attraction_product_review_page");case"Attraction_Review":return!0;case"Hotel_Review":return r("fusion_lithium_hotel_review_page");case"Restaurant_Review":return r("fusion_lithium_restaurant_review_page");default:return!1}})(e),w=e=>a.includes(e),b=e=>{return(e=>w(e.page))(e)&&(t=e.page,s.includes(t)||r("fusion_lithium"));var t},P=(e,t)=>{switch(t){case"attractionsListPageIntegration":return!0;case"fusion":return b(e);case"horizonAd":return h(e);default:return!1}},A=()=>r("fusion_prerelease");function m(){return A()}function E(e){var[t]=n.useContext(i);return P(t,e)}var F=["grid_view_ui_test_1617641261","product_shelf_above_poi_list_1619551952","stop_auto-advancing_date_to_guest_selection_1626885295"],S=({children:e})=>n.createElement(o,{experimentKeys:F},e);return e("useFusionPrereleaseEnabled",m),[()=>{_=new Map([["prerelease","[JIRA] example feature"]]),l=new Map([["testingEnabled",()=>!0],["testingDisabled",()=>!1],["TTD-22836",()=>"test"===u(["stop_auto-advancing_date_to_guest_selection_1626885295"])["stop_auto-advancing_date_to_guest_selection_1626885295"]],["TTD-22528",()=>"test"===u(["ttd_curated_collection_1617314707"]).ttd_curated_collection_1617314707],["SNG-4067",()=>r("fusion_lithium_query_web_detail_endpoint")]]),c=new Map([["release","[JIRA] example feature"],["SNG-2843","[SNG-2843] migrate to VerticalCard"],["SNG-2499","[SNG-2499] test fusion web endpoint on /A and /A_P"]]),d=new Set(["AttractionsFusion","AttractionProductsFusion"]),p={isHorizonAdEnabled:h,isFusionIntegrationEnabled:P,isFusionPrereleaseEnabled:A,isFusionEnabled:b},g=n.memo(S),e("default",E),e({Feature:v,FusionAbTestingProvider:g,isFusionPage:w,showFeature:f,testExports:p,useFusionPrereleaseEnabled:m})},[e=>n=e,e=>i=e.Route,e=>r=e.featureIsEnabled,e=>(a=e.default,s=e.PUBLISHED_PAGES),e=>(u=e.useAbTestContext,o=e.AbTestProvider)]]},["cDcdfi","2R4xv2","-i3PJS","FttHiS","S-RL4Q"]]);

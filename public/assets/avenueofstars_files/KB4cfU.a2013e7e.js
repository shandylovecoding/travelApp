(this.$WP=this.$WP||[]).push(["KB4cfU",(e,t)=>{"use strict";var o,a,l,n,i,m,c=({variant:e="Square",onClickZoomIn:t,onClickZoomOut:m})=>{var{map:c}=o.useContext(i),{localize:r}=l(),s=n(),u=o.useCallback((()=>{if(c){t&&t(),s({module:"map_move",action:"zoom_in_button"});var e=c.getZoom();c.setZoom(e+1,!0)}}),[c,s,t]),C=o.useCallback((()=>{if(c){m&&m(),s({module:"map_move",action:"zoom_out_button"});var e=c.getZoom();c.setZoom(e-1,!0)}}),[c,s,m]);return"Circle"===e?o.createElement("div",null,o.createElement("div",{className:"_2l3gOBO8"},o.createElement(a,{icon:"plus",ariaLabel:r.string("maps_zoom_in"),onClick:u})),o.createElement("div",null,o.createElement(a,{icon:"minus",ariaLabel:r.string("maps_zoom_out"),onClick:C}))):o.createElement("div",{className:"_2gSE87OX"},o.createElement("div",{className:"_1GQC-py1",role:"button",tabIndex:"-1",onClick:u},"+"),o.createElement("div",{className:"_1qggtnLh",role:"button",tabIndex:"-2",onClick:C},"–"))};return[()=>{m=o.memo(c),e("default",m)},[e=>o=e,e=>a=e.CircularFloatingActionButton,e=>l=e.useLocalize,e=>n=e.useGARecorder,e=>i=e.MapContext]]},["cDcdfi","yIC5Nu","0DsHEV","fsml46","VwUieX"]]);
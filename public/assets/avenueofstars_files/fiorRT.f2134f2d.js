(this.$WP=this.$WP||[]).push(["fiorRT",(t,o)=>{"use strict";var e,n,i,a,r=()=>"undefined"!=typeof navigator&&void 0!==navigator.geolocation,s=(t,o)=>{t&&"function"==typeof t&&(r()?navigator.geolocation.getCurrentPosition((o=>{t(o.coords.latitude,o.coords.longitude)}),(t=>{"function"==typeof o&&o(t)})):o&&"function"==typeof o&&o(new Error("Location services not available")))},u=(t,o)=>t&&"function"==typeof t?r()?navigator.geolocation.watchPosition((o=>{t(o.coords.latitude,o.coords.longitude)}),(t=>{"function"==typeof o&&o(t)}),{maximumAge:0,timeout:1/0,enableHighAccuracy:!1}):(o&&"function"==typeof o&&o(new Error("Location services not available")),null):null,c=t=>{r()&&navigator.geolocation.clearWatch(t)},l={1:"PERMISSION_DENIED",2:"POSITION_UNAVAILABLE",3:"TIMEOUT"},p=({enableHighAccuracy:t=!1,timeout:o=1/0,maximumAge:e=0,pause:a=!1})=>{var[s,u]=n(null),[p,g]=n(null);return i((()=>{if(a)return()=>{};if(!r())return g("POSITION_UNAVAILABLE"),()=>g(null);var n=navigator.geolocation.watchPosition((t=>u(t.coords)),(t=>g(l[t.code])),{enableHighAccuracy:t,timeout:o,maximumAge:e});return()=>c(n)}),[t,o,e,a]),{latitude:null==s?void 0:s.latitude,longitude:null==s?void 0:s.longitude,errorCode:p}};return[()=>{t("HasLocationPermission",a=class extends e.Component{constructor(t){super(t),this.state={outputComponent:null}}componentDidMount(){navigator&&navigator.permissions&&navigator.permissions.query&&navigator.permissions.query({name:"geolocation"}).then((t=>{t&&t.state&&("granted"===t.state?navigator.geolocation.getCurrentPosition((()=>{this.setState({outputComponent:this.props.hasPermission()})}),(t=>{t.code===t.POSITION_UNAVAILABLE&&this.setState({outputComponent:this.props.positioningOff()})})):"denied"===t.state?this.setState({outputComponent:this.props.deniedPermission()}):"prompt"===t.state&&this.setState({outputComponent:this.props.promptPermission()}))}))}render(){return e.createElement(e.Fragment,null,this.state.outputComponent)}}),t({HasLocationPermission:a,canRequestLocation:r,clearWatch:c,requestLocation:s,useGeoLocation:p,watchLocation:u})},[t=>(e=t,n=t.useState,i=t.useEffect)]]},["cDcdfi"]]);

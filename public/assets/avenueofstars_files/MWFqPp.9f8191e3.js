(this.$WP=this.$WP||[]).push(["MWFqPp",(e,t)=>{"use strict";var i,s,o,a="oneTapEligible",r="regDialogDismissed",n="regDialogDismissedCount",l="lastSignOutTime",u=864e5,g=["Hotel_Review","Hotels","SmartDeals","HotelHighlight","HotelsNear","HotelsList","LastMinute","MobileSmartDeals","MobileHotelHighlight","LocalMapsRedesign","MobileLocalMaps"],c=["Attractions","Attraction_Review","AttractionsNear","Attraction_Products","AttractionProductReview","MobileAttraction_Review","MobileAttractions","MobileAttractionsNear","MobileAttraction_Products","MobileAttractionProductReview","AttractionsLander"],R=["Restaurant_Review","Restaurants","RestaurantsNear","MobileRestaurants","MobileRestaurantsNear","MobileRestaurantSearch","RestaurantsLander","MobileNearbyRestaurants"],h=["Flights","MobileFlights","CheapFlightsSearchResults","CheapFlightsSearchDeals","MobileCheapFlightsSearchResults","FlightsRoute","Airline_Review","CheapFlightsHome","FlightsFrom"],d=["ShowTopic","ShowForum","NewTopic","MobileShowForum","MobileShowTopic"];function S(){return s.has(l)}function b(){s.remove(r),s.remove(n)}function T(e){var t=s.get(n)||0;switch(s.set(n,t+1,0),t){case 0:break;case 1:!function(e){s.set(r,e,6e5)}(e);break;case 2:!function(e){s.set(r,e,432e5)}(e),s.remove(n);break;default:b()}}function M(e){s.set(a,e,864e5)}function p(){return!!s.get(a)}function v(e){var t=s.get(r);return e===t||(null!==t&&b(),!1)}function f(){var e=s.get(l);if(!e){var t=i.get(l);return void 0!==t&&t+u>(new Date).getTime()}return e+u>(new Date).getTime()}function A(e){return v(e)}function E(){return!o("mobile_fixed_ad")||void 0!==(e=i.get("ads.fixed.close"))&&"true"===e;var e}return e({isEligibleForOneTap:p,setOneTapEligibility:M,setRegDialogDismissed:T,shouldIgnoreAdhesionUnit:E,shouldSuppressRegistrationDialog:A,userPreviouslyClosedRegDialog:v,userSignedOut:S,userSignedOutRecently:f}),[()=>{e({ATTRACTIONS_SERVLETS:c,FLIGHTS_SERVLETS:h,FORUM_SERVLETS:d,HOTEL_SERVLETS:g,RESTAURANTS_SERVLETS:R,isEligibleForOneTap:p,setOneTapEligibility:M,setRegDialogDismissed:T,shouldIgnoreAdhesionUnit:E,shouldSuppressRegistrationDialog:A,userPreviouslyClosedRegDialog:v,userSignedOut:S,userSignedOutRecently:f})},[e=>i=e.default,e=>s=e.default,e=>o=e.featureIsEnabled]]},["qKFflQ","jaCyxS","-i3PJS"]]);

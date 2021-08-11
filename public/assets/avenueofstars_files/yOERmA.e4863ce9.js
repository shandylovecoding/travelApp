(this.$WP=this.$WP||[]).push(["yOERmA",(_,e)=>{"use strict";var I,E,a,i,t=(_,e,I,E)=>{var a,t,c=Object.assign({},e);E&&0!==Object.keys(E).length&&Object.entries(E).forEach((([_,e])=>{c[_]=e}));var L=c.compoundMediaId?c.compoundMediaId.id:c.mediaId||"",s=`${L}|${(null==c?void 0:c.providerName)||""}${(null==c?void 0:c.providerName)?"|":""}${c.albumId}|${c.categoryId}|${c.typeId}`,r=`${c.albumId}|${c.categoryId}|${c.typeId}`,C={module:"mediaviewer",action:_,value:c.locationId};switch(_){case i.MV_OPEN:I(C);break;case i.DETAIL_VIEW:I(Object.assign({},C,{context:s}));break;case i.GALLERY_VIEW:I(Object.assign({},C,{context:c.isMWRedesign?s:r}));break;case i.GALLERY_VIEW_PHOTOS_SEEN:I(Object.assign({},C,{context:`${c.photosSeen||0}`}));break;case i.DETAIL_VIEW_IMAGE_CLICK:I(C);break;case i.DETAIL_VIEW_DISMISS:I(Object.assign({},C,{context:c.mvDetailViewCloseType}));break;case i.DETAIL_VIEW_IMAGE_TAP_HIDE:c.isMWRedesign?I(Object.assign({},C,{context:c.detailsWereShown?"show":"hide"})):I(C);break;case i.DETAIL_VIEW_IMAGE_TAP_SHOW:case i.DETAIL_VIEW_GALLERY_CLICK:I(C);break;case i.DETAIL_VIEW_PHOTOSTRIP_TILE_CLICK:I(Object.assign({},C,{context:s}));break;case i.CLOSE_CLICK:I(C);break;case i.GALLERY_VIEW_THUMBNAIL_CLICK:I(Object.assign({},C,{context:c.isMWRedesign?`${String(null==(a=c.tileDetails)?void 0:a.offset)}|${String(null==(t=c.tileDetails)?void 0:t.mode)}|${s}`:s}));break;case i.GALLERY_VIEW_CATEGORY_CLICK:I(Object.assign({},C,{context:`${c.categoryId}`}));break;case i.GALLERY_VIEW_ALBUM_CLICK:I(Object.assign({},C,{context:`${c.albumId}`}));break;case i.GALLERY_VIEW_TYPE_CLICK:I(Object.assign({},C,{context:`${c.typeId}`}));break;case i.HELPFUL_VOTE_CLICK:I(Object.assign({},C,{context:s}));break;case i.IMAGE_ARROW_CLICK:case i.PHOTOSTRIP_ARROW_CLICK:I(C);break;case i.REPORT_PANEL_SHOWN:I(Object.assign({},C,{module:"Report_IAP",context:"photo_whats_wrong_aef"}));break;case i.CAPTION_REVIEW_CLICK:case i.DETAIL_VIEW_IMAGE_SWIPE:I(C);break;case i.DETAIL_VIEW_REVIEW_CLICK:I(Object.assign({},C,{context:`${L}`}));break;case i.DETAIL_VIEW_PANO_DETAIL:I(Object.assign({},C,{context:c.panoWasOpened?"show":"hide"}));break;case i.DETAIL_VIEW_REVIEW_SCROLL:case i.DETAIL_VIEW_REVIEW_TRAY_EXPANSION:case i.GALLERY_VIEW_SCROLL_ENGAGEMENT:I(C);break;case i.SOURCE_FILTER_CLICK:case i.SEE_ALL_FILTERS_CLICK:case i.HIDE_FILTERS_CLICK:case i.GRID_VIEW_CLICK:case i.FLEXGRID_VIEW_CLICK:I(Object.assign({},C,{context:r}));break;case i.GRID_VIEW_ITEM_CLICK:I(Object.assign({},C,{context:s}));break;case i.VIEW_GALLERY_BUTTON_CLICK:I(Object.assign({},C,{context:r}));break;case i.ADVANCED_FILTER_CLICK:I(Object.assign({},C,{context:`${c.categoryId}`}));break;case i.SORT_TYPE_CHANGE:c.sort&&I(Object.assign({},C,{context:`${c.sort}`}));break;default:console.error("Invalid page action provided: ",_)}},c=()=>{var _=I.useContext(a),e=E(),i=JSON.stringify(_);return I.useCallback(((_,I)=>t(_,JSON.parse(i),e,I)),[i,e])},L=()=>{var _=E();return I.useCallback(((e,I,E)=>t(e,I,_,E)),[_])};return[()=>{a=I.createContext({albumId:101,categoryId:101,locationId:0,typeId:0}),i=Object.freeze({MV_OPEN:"mediaviwer_open",DETAIL_VIEW:"detail_view",GALLERY_VIEW:"grid_view",GALLERY_VIEW_PHOTOS_SEEN:"grid_view_photos_seen",DETAIL_VIEW_DISMISS:"detail_view_dismiss",DETAIL_VIEW_IMAGE_CLICK:"detail_view_desktop_image_click",DETAIL_VIEW_IMAGE_TAP_HIDE:"detail_view_hide_nav_click",DETAIL_VIEW_IMAGE_TAP_SHOW:"detail_view_show_nav_click",DETAIL_VIEW_GALLERY_CLICK:"detail_view_gallery_click",DETAIL_VIEW_PHOTOSTRIP_TILE_CLICK:"detail_view_photostrip_tile_click",CLOSE_CLICK:"mediaviewer_close_click",GALLERY_VIEW_THUMBNAIL_CLICK:"grid_view_thumbnail_click",GALLERY_VIEW_CATEGORY_CLICK:"grid_view_category_click",GALLERY_VIEW_ALBUM_CLICK:"grid_view_album_click",GALLERY_VIEW_TYPE_CLICK:"grid_view_type_click",HELPFUL_VOTE_CLICK:"helpful_vote_click",IMAGE_ARROW_CLICK:"detail_view_image_arrow_click",PHOTOSTRIP_ARROW_CLICK:"detail_view_photostrip_arrow_click",REPORT_PANEL_SHOWN:"Panel_Shown",CAPTION_REVIEW_CLICK:"detail_view_caption_review_click",DETAIL_VIEW_IMAGE_SWIPE:"detail_view_image_swipe_click",DETAIL_VIEW_REVIEW_CLICK:"detail_view_review_click",DETAIL_VIEW_PANO_DETAIL:"detail_view_pano_detail",DETAIL_VIEW_PHOTO_360_DETAIL:"detail_view_photo_360_detail",DETAIL_VIEW_REVIEW_SCROLL:"detail_view_review_scroll",DETAIL_VIEW_REVIEW_TRAY_EXPANSION:"detail_view_review_tray_expansion",GALLERY_VIEW_SCROLL_ENGAGEMENT:"grid_view_scroll_engagement",SOURCE_FILTER_CLICK:"mv_photos_from_source_with_count",SEE_ALL_FILTERS_CLICK:"mv_see_all_filters",HIDE_FILTERS_CLICK:"mv_hide_filters",ADVANCED_FILTER_CLICK:"mv_advanced_filter_applied",GRID_VIEW_CLICK:"mv_standard_grid_icon",FLEXGRID_VIEW_CLICK:"mv_flexgrid_icon",GRID_VIEW_ITEM_CLICK:"mv_standard_grid_view_thumbnail_click",VIEW_GALLERY_BUTTON_CLICK:"mv_view_gallery_from_detail_view",SORT_TYPE_CHANGE:"mv_photos_sort_change"}),_({MVTrackingContext:a,trackedPageActions:i,useMVTracking:c,useMVTrackingWithoutContext:L})},[_=>I=_.default,_=>E=_.useGARecorder]]},["cDcdfi","fsml46"]]);
"use strict";(self["webpackChunkqwikgeo_website"]=self["webpackChunkqwikgeo_website"]||[]).push([[170],{8098:function(e,t,s){s.r(t),s.d(t,{default:function(){return T}});var i=s(343),a=s(7808),n=s(1767),l=s(5352);const r={...i.l,offsetY:!0,offsetOverflow:!0,transition:!1};var h=i.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i.Z.options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((e=>this.getValue(e)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((e=>!this.hasItem(e))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((e=>{const t=(0,l.qF)(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)}))},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i.Z.options.computed.$_menuProps.call(this);return e.contentClass=`v-autocomplete__content ${e.contentClass||""}`.trim(),{...r,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue))))},listData(){const e=i.Z.options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex((e=>e===s))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l.Do.backspace&&e!==l.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=e!==i-1?e:e-1,n=this.selectedItems[a];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i.Z.options.methods.clearableCallback.call(this)},genInput(){const e=a.Z.options.methods.genInput.call(this);return e.data=(0,n.ZP)(e.data,{attrs:{"aria-activedescendant":(0,l.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,l.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i.Z.options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[l.Do.home,l.Do.end].includes(t)||i.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",a),null===(s=e.clipboardData)||void 0===s||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}}),o=s(9582),c=s(266),d=s(9256),u=s(1713),p=(s(7658),s(4390)),m=s(8846),g=s(6669),v=s(7678),I=(0,v.Z)(p.Z,m.Z,g.Z).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:{"aria-busy":!0,"aria-live":"polite",role:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(e,t){return this.$createElement("div",{staticClass:`v-skeleton-loader__${e} v-skeleton-loader__bone`},t)},genBones(e){const[t,s]=e.split("@"),i=()=>this.genStructure(t);return Array.from({length:s}).map(i)},genStructure(e){let t=[];e=e||this.type||"";const s=this.rootTypes[e]||"";if(e===s);else{if(e.indexOf(",")>-1)return this.mapBones(e);if(e.indexOf("@")>-1)return this.genBones(e);s.indexOf(",")>-1?t=this.mapBones(s):s.indexOf("@")>-1?t=this.genBones(s):s&&t.push(this.genStructure(s))}return[this.genBone(e,t)]},genSkeleton(){const e=[];return this.isLoading?e.push(this.genStructure()):e.push((0,l.z9)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},e):e},mapBones(e){return e.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(e){this.resetStyles(e),this.isLoading&&(e._initialStyle={display:e.style.display,transition:e.style.transition},e.style.setProperty("transition","none","important"))},onBeforeLeave(e){e.style.setProperty("display","none","important")},resetStyles(e){e._initialStyle&&(e.style.display=e._initialStyle.display||"",e.style.transition=e._initialStyle.transition,delete e._initialStyle)}},render(e){return e("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),f=function(){var e=this,t=e._self._c;return t(d.Z,{staticClass:"pt-10"},[t(u.Z,[t(c.Z,{attrs:{cols:"3"}},[e._v(" filter area ")]),t(c.Z,{attrs:{cols:"9"}},[t(u.Z,[t(c.Z,{attrs:{cols:"12"}},[t(h,{attrs:{items:e.searchResults,loading:e.loading,"search-input":e.searchPortalApi,"item-text":"title","item-value":"id",label:"Search for maps, layers, apps, sites and more...",placeholder:"Search for maps, layers, apps, sites and more..."},on:{"update:searchInput":function(t){e.searchPortalApi=t},"update:search-input":function(t){e.searchPortalApi=t}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),e.loading?t(c.Z,{attrs:{cols:"12"}},e._l(10,(function(e){return t(I,{key:e,attrs:{type:"article"}})})),1):e._e(),e.searchResults?t(c.Z,{attrs:{cols:"12"}},e._l(e.searchResults,(function(e){return t(o.Z,{key:e.id,staticClass:"mx-auto",attrs:{outlined:""}},[t("search-card",{attrs:{result:e}})],1)})),1):e._e()],1)],1)],1)],1)},y=[],S=s(4525),x=s(523),b=s(9708),_=function(){var e=this,t=e._self._c;return t(o.Z,{staticClass:"mx-auto",attrs:{outlined:""}},[t(S.Z,{attrs:{"three-line":""}},[t(x.Z,{attrs:{tile:"",size:"100",color:"grey"}}),t(b.km,[t("a",{attrs:{href:"/portal_item/?id="+e.result.id+"&type="+e.result.slug,target:"_blank"}},[t(b.V9,{staticClass:"text-h5 mb-1"},[e._v(" "+e._s(e.result.title)+" ")])],1),t(b.oZ,[e._v(e._s(e.result.type)+" by "+e._s(e.result.created_by))]),t("div",{},[e._v(e._s(e.result.description))]),t(b.oZ,[e._v("Updated: "+e._s(e.result.updated_date))])],1)],1)],1)},D=[],C={name:"SearchCard",data:()=>({image:null}),props:{result:Object},mounted(){this.globalFunctions.httpRequest("get",`${this.apiUrl}/api/v1/${this.result.slug}s/${this.result.slug}_image/?${this.result.slug}_id=${this.result.id}`,void 0,!1).then((e=>{200===e.status&&(this.image=e.data)}))}},Z=C,k=s(1001),$=(0,k.Z)(Z,_,D,!1,null,null,null),w=$.exports,F={name:"SearchView",components:{SearchCard:w},data:()=>({loading:!1,searchResults:[],model:null,searchPortalApi:null,searchTerm:null}),methods:{searchForData(){this.globalFunctions.httpRequest("get",`${this.apiUrl}/api/v1/services/portal_search/?search_term=${this.searchTerm}`,void 0,!0).then((e=>{this.loading=!1,200!=e.status?this.alert=JSON.stringify(e.data):this.searchResults=e.data.results}))}},watch:{searchPortalApi(e){e&&e.length>2&&(this.loading=!0,this.searchTerm=e,this.searchForData())}}},B=F,L=(0,k.Z)(B,f,y,!1,null,null,null),T=L.exports}}]);
//# sourceMappingURL=170.d632ea27.js.map
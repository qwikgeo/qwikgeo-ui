(function(){"use strict";var e={2050:function(e,t,o){var a=o(144),r=o(998),n=o(6843),i=o(5550),s=o(4562),l=o(9223),p=o(4324),u=o(5495),c=o(5808),m=o(4525),d=o(523),y=o(9708),f=o(4611),h=o(3059),g=o(6733),b=o(3687),v=function(){var e=this,t=e._self._c;return t(r.Z,[t(n.Z,{attrs:{app:"",color:"primary",dark:""}},[t(i.Z,{staticClass:"mr-3",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),t("div",{staticClass:"d-flex align-center"},[t(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"/qwikgeo.png",transition:"scale-transition",width:"40"}}),e._v(" QwikGeo ")],1),t(b.Z),e.authenticated?e._e():t(s.Z,{attrs:{text:"",href:"/register"}},[e._v(" Register")]),e.authenticated?e._e():t(s.Z,{attrs:{text:"",href:"/login"}},[e._v(" Login")]),e.authenticated?t(s.Z,{attrs:{text:""},on:{click:function(t){return e.logout()}}},[e._v(" Logout")]):e._e()],1),t(h.Z,[t("router-view"),t(g.Z,{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[e.authenticated?t(m.Z,[t(d.Z,[t(u.Z,{attrs:{src:e.imageUrl}})],1),t(y.km,[t(y.V9,[e._v(e._s(e.firstName)+" "+e._s(e.lastName))])],1)],1):e._e(),t(l.Z),t(c.Z,{attrs:{dense:""}},e._l(e.urls,(function(o){return t(m.Z,{key:o.title,attrs:{link:"",href:o.url}},[t(f.Z,[t(p.Z,[e._v(e._s(o.icon))])],1),t(y.km,[t(y.V9,[e._v(e._s(o.title))])],1)],1)})),1)],1)],1)],1)},_=[],x={name:"App",data:()=>({drawer:!1,authenticated:!1,imageUrl:"",firstName:"",lastName:"",urls:[{title:"Home",icon:"mdi-home",url:"/"},{title:"Map Builder",icon:"mdi-map-outline",url:"/map_builder/"},{title:"Search",icon:"mdi-magnify",url:"/search/"}]}),mounted(){localStorage.getItem("qwikgeo_access_token")&&(this.authenticated=!0,this.globalFunctions.httpRequest("get",`${this.apiUrl}/api/v1/users/user`,void 0,!0).then((e=>{200==e.status&&(this.firstName=e.data.first_name,this.lastName=e.data.last_name,this.imageUrl=e.data.photo_url)})))},methods:{logout(){localStorage.removeItem("qwikgeo_access_token"),window.location.href="/"}}},w=x,P=o(1001),Z=(0,P.Z)(w,v,_,!1,null,null,null),k=Z.exports,N=o(8345);a.ZP.use(N.ZP);const L=[{path:"/",name:"Home",component:()=>o.e(619).then(o.bind(o,4619))},{path:"/login/",name:"Login",component:()=>Promise.all([o.e(291),o.e(943)]).then(o.bind(o,6943))},{path:"/register/",name:"Register",component:()=>Promise.all([o.e(291),o.e(541)]).then(o.bind(o,1541))},{path:"/map_builder/",name:"Map Builder",component:()=>Promise.all([o.e(291),o.e(343),o.e(807)]).then(o.bind(o,4507))},{path:"/search/",name:"Search",component:()=>Promise.all([o.e(291),o.e(343),o.e(170)]).then(o.bind(o,8098))}],C=new N.ZP({mode:"history",routes:L});var S=C,T=o(1705);a.ZP.use(T.Z);var j=new T.Z({theme:{themes:{light:{primary:"#393e46",secondary:"#f9bf22",accent:"#17bebb"}}}}),$=(o(7658),o(9669)),I=o.n($),O=o(6158),D=o.n(O),E=function(){var e=this,t=e._self._c;return t("div",e._l(e.popupContents,(function(o,a){return t("div",{key:a},[t("div",{domProps:{innerHTML:e._s(o.html)}})])})),0)},q=[],F={name:"AlertPanel",props:{appData:{type:Object,required:!0},popupContents:{required:!0}},mounted(){console.log(this.popupContents)}},A=F,M=(0,P.Z)(A,E,q,!1,null,null,null),U=M.exports;let B="";B=window.location.href.includes("localhost")?"http://127.0.0.1:8000":"https://api.qwikgeo.com";const z="pk.eyJ1IjoibWtlbGxlcjMiLCJhIjoieFdYUUg5TSJ9.qzhP1v5f1elHrnTV4YpkiA",G={httpRequest:(e,t,o,a=!1,r=!1,n=!1)=>{let i={headers:{}};return a&&(i.headers["Authorization"]=`Bearer ${localStorage.getItem("qwikgeo_access_token")}`),r&&(i.responseType="blob"),n&&(i.headers["Content-Type"]="multipart/form-data"),new Promise((a=>{"get"===e?I().get(t,i).then((e=>{a(e)})).catch((e=>{"response"in e?(void 0===e.response&&a(e),"401"!=e.response.status&&a(e.response)):a(e)})):"post"===e?I().post(t,o,i).then((e=>{a(e)})).catch((e=>{"response"in e?(void 0===e.response&&a(e),a(e.response)):a(e)})):"put"===e?I().put(t,o,i).then((e=>{a(e)})).catch((e=>{"response"in e?(void 0===e.response&&a(e),"401"!=e.response.status&&a(e.response)):a(e)})):"delete"===e&&I()["delete"](t,{formData:o,...i}).then((e=>{a(e)})).catch((e=>{"response"in e?(void 0===e.response&&a(e),"401"!=e.response.status&&a(e.response)):a(e)}))}))},htmlPopup(e,t){let o=[];return t.forEach((t=>{let a=`<h2>${e.title}</h2>`,r="<table>";for(let e in t.properties)console.log(e),r+=`\n                <tr class="tr">\n                    <td><b>${e}</b></td>\n                    <td>${t.properties[e]}</td>\n                </tr>\n                `;r+="</table>",a+=r,o.push({gid:t.properties["gid"],mapboxName:e.mapboxName,html:a})})),o},addLayerPopup(e,t){let o=e.mapboxName;"polygon"===e.geometry&&(o=`${e.mapboxName}_fill`),t.map.on("click",o,(o=>{(new(D().Popup)).setLngLat([o.lngLat.lng,o.lngLat.lat]).setHTML('<div id="popup-content"></div>').addTo(t.map);const r=G.htmlPopup(e,o.features);var n=a.ZP.extend(U);new n({propsData:{appData:t,popupContents:r}}).$mount("#popup-content")})),t.map.on("mouseenter",o,(()=>{t.map.getCanvas().style.cursor="pointer"})),t.map.on("mouseleave",o,(()=>{t.map.getCanvas().style.cursor=""}))},addLayerToMap:(e,t,o,r=!0)=>new Promise((n=>{a.ZP.set(e,"visible",!0),a.ZP.set(e,"mapboxName",`map_service_${t.layerCounter}`),t.activeLayerId=t.layerCounter,"user_data"===e.map_type||"map_layer"===e.map_type?(o.addSource(e.mapboxName,{type:"vector",tiles:[`${B}/api/v1/collections/${e.id}/tiles/WorldCRS84Quad/{z}/{x}/{y}`],minzoom:1,maxzoom:22}),"polygon"===e.geometry?(o.addLayer({id:`${e.mapboxName}_fill`,type:"fill",source:e.mapboxName,"source-layer":e.id,paint:e.fill_paint}),o.addLayer({id:`${e.mapboxName}_line`,type:"line",source:e.mapboxName,"source-layer":e.id,paint:e.border_paint})):"line"===e.geometry?o.addLayer({id:e.mapboxName,type:"line",source:e.mapboxName,"source-layer":e.id,paint:e.paint}):"point"===e.geometry&&o.addLayer({id:e.mapboxName,type:"circle",source:e.mapboxName,"source-layer":e.id,paint:e.paint}),a.ZP.set(t,"layerCounter",t.layerCounter+=1),r&&(t.layers.push(e),o.fitBounds([[e.bounds[0],e.bounds[1]],[e.bounds[2],e.bounds[3]]],{padding:200})),a.ZP.set(t,"alertColor","success"),a.ZP.set(t,"alert",`${e.title} added to map!`),G.addLayerPopup(e,t),n(e)):"geojson"===e.map_type&&(o.addSource(e.mapboxName,{type:"geojson",data:e.data}),"polygon"===e.geometry_type?(o.addLayer({id:`${e.mapboxName}fill`,type:"fill",source:e.mapboxName,layout:e.layout,paint:e.paint}),o.addLayer({id:`${e.mapboxName}_line`,type:"line",source:e.mapboxName,layout:e.layout,paint:e.paint})):"line"===e.geometry_type?o.addLayer({id:e.mapboxName,type:"line",source:e.mapboxName,layout:e.layout,paint:e.paint}):"point"===e.geometry_type&&o.addLayer({id:e.mapboxName,type:"circle",source:e.mapboxName,layout:e.layout,paint:e.paint}),a.ZP.set(t,"layerCounter",t.layerCounter+=1),r&&t.layers.push(e),a.ZP.set(t,"alertColor","success"),a.ZP.set(t,"alert",`${e.title} added to map!`),n(e))})),getDefaultPaint(e){return"point"===e.geometry?e["paint"]={"circle-color":"#FFE633"}:"line"===e.geometry?e["paint"]={"line-color":"#FFE633"}:"polygon"===e.geometry&&(e["border_paint"]={"line-color":"#4D4C41"},e["fill_paint"]={"fill-color":"#FFE633","fill-opacity":.3}),e},async changeBasemap(e,t){const o=await fetch(`https://api.mapbox.com/styles/v1/${e.styleID}?access_token=${z}`),a=await o.json(),r=a,n=t.map.getStyle();r.sources=Object.assign({},n.sources,r.sources);let i=r.layers.findIndex((e=>"waterway-label"==e.id));-1===i&&(i=r.layers.length);const s=n.layers.filter((e=>e.source&&"mapbox://mapbox.satellite"!=e.source&&"mapbox"!=e.source&&"mapbox-traffic"!=e.source&&"mapbox-incidents"!=e.source&&"composite"!=e.source));r.layers=[...r.layers.slice(0,i),...s,...r.layers.slice(i,-1)],t.map.setStyle(r)},toggleLayerVisibility(e,t){e.visible?(G.removeLayerFromMap(e,t.map),a.ZP.set(e,"visible",!1)):G.addLayerToMap(e,t,t.map,!1)},removeLayerFromMap(e,t){"polygon"===e.geometry_type?(t.getLayer(`${e.mapboxName}_fill`)&&t.removeLayer(`${e.mapboxName}_fill`),t.getLayer(`${e.mapboxName}_line`)&&t.removeLayer(`${e.mapboxName}_line`)):t.getLayer(e.mapboxName)&&t.removeLayer(e.mapboxName),t.getSource(e.mapboxName)&&t.removeSource(e.mapboxName)},removeLayer(e,t){const o=e.title;G.removeLayerFromMap(e,t),a.ZP.set(t,"activeLayerId",null),a.ZP.set(t,"layers",t.layers.filter((function(e){return e.mapboxName!=e.mapboxName}))),a.ZP.set(t,"alertColor","warning"),a.ZP.set(t,"alert",`Removed ${o} from the map!`),setTimeout((()=>{t.map.resize()}),100)}};var H=o(4387);a.ZP.config.productionTip=!1,a.ZP.prototype.globalFunctions=G,a.ZP.prototype.GOOGLE_CLIENT_ID="406362590745-cj472811c26nu77fm5m981vkvk2ph8me.apps.googleusercontent.com",window.location.href.includes("localhost")?a.ZP.prototype.apiUrl="http://127.0.0.1:8000":a.ZP.prototype.apiUrl="https://api.qwikgeo.com",a.ZP.use(H.LoaderPlugin,{client_id:a.ZP.prototype.GOOGLE_CLIENT_ID}),new a.ZP({router:S,vuetify:j,render:e=>e(k)}).$mount("#app"),a.ZP.prototype.mapboxToken="pk.eyJ1IjoibWtlbGxlcjMiLCJhIjoieFdYUUg5TSJ9.qzhP1v5f1elHrnTV4YpkiA",a.ZP.prototype.basemaps=[{name:"Streets",styleID:"mapbox/streets-v11"},{name:"Outdoors",styleID:"mapbox/outdoors-v11"},{name:"Light",styleID:"mapbox/light-v10"},{name:"Dark",styleID:"mapbox/dark-v10"},{name:"Satellite ",styleID:"mapbox/satellite-v9"},{name:"Satellite Streets",styleID:"mapbox/satellite-streets-v11"},{name:"Navigation Day",styleID:"mapbox/navigation-day-v1"}]}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,a,r,n){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],n=e[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&n||i>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[l])}))?a.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var p=r();void 0!==p&&(t=p)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,r,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,a){return o.f[a](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{170:"d632ea27",291:"8e1398e0",343:"a13bf853",541:"38a460e1",619:"97878a39",807:"c2a00158",943:"8f2d5773"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{170:"1e882884",291:"180280e1",541:"d54629c5",619:"8a3a6b5b",807:"269cb4c3",943:"d54629c5"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="qwikgeo-website:";o.l=function(a,r,n,i){if(e[a])e[a].push(r);else{var s,l;if(void 0!==n)for(var p=document.getElementsByTagName("script"),u=0;u<p.length;u++){var c=p[u];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+n){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+n),s.src=a),e[a]=[r];var m=function(t,o){s.onerror=s.onload=null,clearTimeout(d);var r=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e=function(e,t,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=n,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var r=o[a],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],n=r.getAttribute("data-href");if(n===e||n===t)return r}},a=function(a){return new Promise((function(r,n){var i=o.miniCssF(a),s=o.p+i;if(t(i,s))return r();e(a,s,r,n)}))},r={143:0};o.f.miniCss=function(e,t){var o={170:1,291:1,541:1,619:1,807:1,943:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,a){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var n=new Promise((function(o,a){r=e[t]=[o,a]}));a.push(r[2]=n);var i=o.p+o.u(t),s=new Error,l=function(a){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,n,i=a[0],s=a[1],l=a[2],p=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var u=l(o)}for(t&&t(a);p<i.length;p++)n=i[p],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},a=self["webpackChunkqwikgeo_website"]=self["webpackChunkqwikgeo_website"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(2050)}));a=o.O(a)})();
//# sourceMappingURL=app.b51930c0.js.map
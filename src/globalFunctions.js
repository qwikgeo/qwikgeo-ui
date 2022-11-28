import Vue from 'vue';
import axios from "axios";
import mapboxgl from "mapbox-gl";
// import { defineComponent, nextTick } from 'vue'
import Popup from "@/components/base/Popup.vue"

let apiUrl = "";
if(window.location.href.includes('localhost')){
    apiUrl = 'http://127.0.0.1:8000'
}else{
    apiUrl = 'https://api.qwikgeo.com'
    // apiUrl = 'http://127.0.0.1:8000'
}

const mapboxToken = "pk.eyJ1IjoibWtlbGxlcjMiLCJhIjoieFdYUUg5TSJ9.qzhP1v5f1elHrnTV4YpkiA"

export const globalFunctions = {
    httpRequest: (
        type,
        url,
        formData = undefined,
        auth = false,
        zip_file = false,
        multipart = false
    ) => {
        let parameters = {
            headers: {},
        };

        if (auth) {
            parameters.headers["Authorization"] = `Bearer ${localStorage.getItem(
                "qwikgeo_access_token"
            )}`;
        }

        if (zip_file) {
            parameters.responseType = "blob";
        }

        if (multipart) {
            parameters.headers["Content-Type"] = "multipart/form-data";
        }

        return new Promise((resolve) => {
            if (type === "get") {
                axios
                .get(url, parameters)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    if ("response" in error) {
                        if (error.response === undefined) {
                            resolve(error);
                        }
                        if (error.response.status != "401") {
                            resolve(error.response);
                        }
                    } else {
                        resolve(error);
                    }
                });
            } else if (type === "post") {
                axios
                .post(url, formData, parameters)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    if ("response" in error) {
                        if (error.response === undefined) {
                            resolve(error);
                        }
                        resolve(error.response);
                    } else {
                        resolve(error);
                    }
                });
            } else if (type === "put") {
                axios
                .put(url, formData, parameters)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    if ("response" in error) {
                        if (error.response === undefined) {
                            resolve(error);
                        }
                        if (error.response.status != "401") {
                            resolve(error.response);
                        }
                    } else {
                        resolve(error);
                    }
                });
            } else if (type === "delete") {
                axios
                .delete(url, { formData, ...parameters })
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    if ("response" in error) {
                        if (error.response === undefined) {
                            resolve(error);
                        }
                        if (error.response.status != "401") {
                            resolve(error.response);
                        }
                    } else {
                        resolve(error);
                    }
                });
            }
        });
    },
    htmlPopup(layer, features){
        let popupContents = []
        
        features.forEach(feature => {
            let html = `<h2>${layer.title}</h2>`
            let tableHtml = `<table>`
            for(let property in feature.properties){
                console.log(property)
                tableHtml+=`
                <tr class="tr">
                    <td><b>${property}</b></td>
                    <td>${feature.properties[property]}</td>
                </tr>
                `
            }
            tableHtml += "</table>"
            html += tableHtml
            popupContents.push({
                "gid": feature.properties['gid'],
                "mapboxName": layer.mapboxName,
                "html": html
            })
        });
        return popupContents
    },
    addLayerPopup(layer, appData){
        let layerName = layer.mapboxName;

        if (layer.geometry === "polygon") {
            layerName = `${layer.mapboxName}_fill`
        }

        appData.map.on('click', layerName, (e) => {             
            new mapboxgl.Popup()
            .setLngLat([e.lngLat.lng, e.lngLat.lat])
            .setHTML(`<div id="popup-content"></div>`)
            .addTo(appData.map);

            const popupContents = globalFunctions.htmlPopup(layer, e.features)

            var PopupClass = Vue.extend(Popup);
            new PopupClass({
                propsData: {
                    appData: appData,
                    popupContents: popupContents
                  }
            }).$mount('#popup-content')
        });
             
        appData.map.on('mouseenter', layerName, () => {
            appData.map.getCanvas().style.cursor = 'pointer';
        });
             
        appData.map.on('mouseleave', layerName, () => {
            appData.map.getCanvas().style.cursor = '';
        })
    },
    // Add a layer to the map
    addLayerToMap: (layer, appData, map, newLayer = true) => {
        return new Promise((resolve) => {
            Vue.set(layer, 'visible', true)
            Vue.set(layer, 'mapboxName', `map_service_${appData.layerCounter}`)
            appData.activeLayerId = appData.layerCounter
            if (layer.map_type === "user_data" || layer.map_type === "map_layer" ) {
                map.addSource(layer.mapboxName, {
                    type: "vector",
                    tiles: [
                        `${apiUrl}/api/v1/collections/${layer.id}/tiles/WorldCRS84Quad/{z}/{x}/{y}`,
                    ],
                    minzoom: 1,
                    maxzoom: 22,
                });
                if (layer.geometry === "polygon") {
                    map.addLayer({
                        id: `${layer.mapboxName}_fill`,
                        type: "fill",
                        source: layer.mapboxName,
                        'source-layer': layer.id,
                        paint: layer.fill_paint,
                    });
                    map.addLayer({
                        id: `${layer.mapboxName}_line`,
                        type: "line",
                        source: layer.mapboxName,
                        'source-layer': layer.id,
                        paint: layer.border_paint,
                    });
                } else if (layer.geometry === "line") {
                    map.addLayer({
                        id: layer.mapboxName,
                        type: "line",
                        source: layer.mapboxName,
                        'source-layer': layer.id,
                        paint: layer.paint,
                    });
                } else if (layer.geometry === "point") {
                    map.addLayer({
                        id: layer.mapboxName,
                        type: "circle",
                        source: layer.mapboxName,
                        'source-layer': layer.id,
                        paint: layer.paint,
                    });
                }
                Vue.set(appData, 'layerCounter', appData.layerCounter += 1)
                if (newLayer) {
                    appData.layers.push(layer);
                    map.fitBounds(
                        [
                            [layer.bounds[0], layer.bounds[1]],
                            [layer.bounds[2], layer.bounds[3]]
                        ],
                        {
                            padding: 200
                        }
                    );
                }
                Vue.set(appData, 'alertColor', `success`)
                Vue.set(appData, 'alert', `${layer.title} added to map!`)                
                globalFunctions.addLayerPopup(layer, appData)
                resolve(layer);
            }
            else if (layer.map_type === "geojson") {
                map.addSource(layer.mapboxName, {
                    type: "geojson",
                    data: layer.data,
                });

                if (layer.geometry_type === "polygon") {
                    map.addLayer({
                        id: `${layer.mapboxName}fill`,
                        type: "fill",
                        source: layer.mapboxName,
                        layout: layer.layout,
                        paint: layer.paint,
                    });
                    map.addLayer({
                        id: `${layer.mapboxName}_line`,
                        type: "line",
                        source: layer.mapboxName,
                        layout: layer.layout,
                        paint: layer.paint,
                    });
                } else if (layer.geometry_type === "line") {
                    map.addLayer({
                        id: layer.mapboxName,
                        type: "line",
                        source: layer.mapboxName,
                        layout: layer.layout,
                        paint: layer.paint,
                    });
                } else if (layer.geometry_type === "point") {
                    map.addLayer({
                        id: layer.mapboxName,
                        type: "circle",
                        source: layer.mapboxName,
                        layout: layer.layout,
                        paint: layer.paint,
                    });
                }
                Vue.set(appData, 'layerCounter', appData.layerCounter += 1)
                if (newLayer) {
                    appData.layers.push(layer);
                }
                Vue.set(appData, 'alertColor', `success`)
                Vue.set(appData, 'alert', `${layer.title} added to map!`)
                resolve(layer);
            }
        });
    },
    getDefaultPaint(layer){
        if (layer.geometry === "point") {
            layer['paint'] =  {
                "circle-color": "#FFE633",
            }
        } else if (layer.geometry === "line") {
            layer['paint'] =  {
                "line-color": "#FFE633",
            }
        } else if (layer.geometry === "polygon") {
            layer['border_paint'] =  {
                "line-color": "#4D4C41",
            }

            layer['fill_paint'] =  {
                "fill-color": "#FFE633",
                "fill-opacity": 0.3
            }
        }
        return layer
    },
    async changeBasemap(basemap, appData){
        const response = await fetch(
            `https://api.mapbox.com/styles/v1/${basemap.styleID}?access_token=${mapboxToken}`
        );
        const responseJson = await response.json();
        const newStyle = responseJson;
        
        const currentStyle = appData.map.getStyle();

        newStyle.sources = Object.assign({},
            currentStyle.sources,
            newStyle.sources
        );
        
        let labelIndex = newStyle.layers.findIndex((el) => {
            return el.id == 'waterway-label';
        });
        
          // default to on top
        if (labelIndex === -1) {
            labelIndex = newStyle.layers.length;
        }
        const appLayers = currentStyle.layers.filter((el) => {
            return (
                el.source &&
                el.source != 'mapbox://mapbox.satellite' &&
                el.source != 'mapbox' &&
                el.source != 'mapbox-traffic' &&
                el.source != 'mapbox-incidents' &&
                el.source != 'composite'
            );
        });
        newStyle.layers = [
            ...newStyle.layers.slice(0, labelIndex),
            ...appLayers,
            ...newStyle.layers.slice(labelIndex, -1),
        ];
        appData.map.setStyle(newStyle);
    },
    toggleLayerVisibility(layer, appData){
        if(layer.visible){
            globalFunctions.removeLayerFromMap(layer, appData.map)
            Vue.set(layer, 'visible', false)
        }else{
            globalFunctions.addLayerToMap(layer, appData, appData.map, false)
        }
    },
    removeLayerFromMap(layer, map){
        if (layer.geometry_type === "polygon") {
            if (map.getLayer(`${layer.mapboxName}_fill`)){
                map.removeLayer(`${layer.mapboxName}_fill`); 
            }
            if (map.getLayer(`${layer.mapboxName}_line`)){
                map.removeLayer(`${layer.mapboxName}_line`);  
            }
        } else {
            if (map.getLayer(layer.mapboxName)){
                map.removeLayer(layer.mapboxName);
            }          
        }
        if (map.getSource(layer.mapboxName)){          
            map.removeSource(layer.mapboxName)
        }
    },
    removeLayer(layer, appData){
        const title = layer.title;
        globalFunctions.removeLayerFromMap(layer, appData)
        Vue.set(appData, 'activeLayerId', null)
        Vue.set(appData, 'layers', appData.layers.filter(function(layer) { return layer.mapboxName != layer.mapboxName }))
        Vue.set(appData, 'alertColor', `warning`)
        Vue.set(appData, 'alert', `Removed ${title} from the map!`)
        setTimeout(() => {
            appData.map.resize()
        }, 100);
    }
};

<template>
  <div id="mapboxgl-map">
    <AlertPanel :appData="appData"/>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import AlertPanel from './AlertPanel.vue';

export default {
  components: { AlertPanel },
  name: "BaseMap",
  props: {
    appData: Object,
  },
  mounted() {
    const vr = this;
    mapboxgl.accessToken = this.mapboxToken;
    let map = new mapboxgl.Map({
      container: "mapboxgl-map",
      style: `mapbox://styles/mapbox/${this.appData.basemap}-v10`,
      preserveDrawingBuffer: true,
      center: [this.appData.longitude, this.appData.latitude],
      zoom: this.appData.zoom,
      transformRequest: (url, resourceType) => {
        if (resourceType === "Tile" && url.includes("api/v1/collections")) {
          return {              
            url: url,
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "qwikgeo_access_token"
              )}`,
            },
          };
        }
      },
    });

    this.$set(this.appData, "map", map);

    this.appData.map.on("load", function () {
      vr.appData.map.addControl(new mapboxgl.NavigationControl(), "top-left");
      vr.appData.map.addControl(new mapboxgl.GeolocateControl(), "top-left");
      vr.appData.map.addControl(new mapboxgl.ScaleControl(), "bottom-left");
      vr.appData.map.addControl(new mapboxgl.FullscreenControl(), "top-left");
    });
  },
};
</script>

<style>
#mapboxgl-map {
  width: 100%;
  height: 100%;
}

.mapboxgl-popup-content{
    width: 300px;
    max-height: 400px;
    overflow: auto
}

.mapboxgl-popup-close-button{
    font-size: 1.5rem;
}

td {
    border: 1px solid black;
    padding-left: .2rem
}

tr {
    border: 1px solid black;
    width: 100%;
}

table { 
    border-collapse: collapse;
    width: 100%;
}

</style>
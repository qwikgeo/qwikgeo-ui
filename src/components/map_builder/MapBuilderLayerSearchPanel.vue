<template>
    <div>
        <v-form @submit.prevent="searchForLayers()">
            <v-select
                label="Layer Type"
                v-model="layerType"
                outlined
                :items="layerTypes"
                item-text="text"
                item-value="value"
                @change="searchForLayers()"
            >
            </v-select>
            <v-text-field outlined v-model="searchTerm" label="Search for layers">
            </v-text-field>
            <v-btn
                color="success"
                :loading="loading"
                :disabled="loading"
                text
                type="submit"
            >
            Search
            </v-btn>
        </v-form>
        <div v-if="searchResults.length > 0" style="height: 70vh; overflow: scroll">
            <v-divider />
            <div v-for="(result, index) in searchResults" :key="index">
                <map-builder-layer-search-card :layer="result" :appData="appData"/>
            </div>
        </div>        
    </div>
</template>

<script>
import MapBuilderLayerSearchCard from "./MapBuilderLayerSearchCard.vue";

/* eslint-disable */

export default {
  components: {
    MapBuilderLayerSearchCard,
  },
  name: "MapBuilderLayerSearchPanel",
  props: {
    appData: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    loading: false,
    searchTerm: "",
    limit: 10,
    offset: 0,
    searchResults: [],
    layerType: "qwikgeo",
    layerTypes: [
      {
        text: "Qwikgeo",
        value: "qwikgeo",
      },
      {
        text: "ArcGIS Online",
        value: "esri",
      },
    ],
  }),
  mounted(){
    this.searchForLayers()
  },
  methods: {
    toggleSearchForLayers(){
        this.$set(this.appData, "searchForLayers", !this.appData.searchForLayers)
    },
    searchForLayers() {
        this.loading = true;
        this.searchResults = [];
        if (this.layerType === 'qwikgeo') {
            this.globalFunctions
            .httpRequest(
                "get",
                `${this.apiUrl}/api/v1/items/?q=${this.searchTerm}&limit=${this.limit}&offset=${this.offset}&item_type=table`,
                undefined,
                true
            )
            .then((res) => {
                this.loading = false;
                if (res.status != 200) {
                    this.appData.alert = JSON.stringify(res.data);
                }
                res.data.forEach((result) => {
                    result.map_type = "user_data";
                });
                this.searchResults = res.data;
                this.loading = false;
            });
        }
        else if (this.layerType === "esri") {
            let url = `https://www.arcgis.com/sharing/rest/search?num=50&start=1&sortOrder=desc&q=(${this.searchTerm}) (type:("Feature Service" OR "Hosted" OR "Tiled" OR "Map Service" OR "Image Service"))&enriched=true&f=json`;
            this.globalFunctions.httpRequest("get", url, undefined, false)
            .then((res) => {
                if (res.status != 200) {
                    this.appData.alert = JSON.stringify(res.data);
                }
                res.data.results.forEach((result) => {
                    result.map_type = "esri";
                    result.image = `https://www.arcgis.com/sharing/rest/content/items/${result.id}/info/${result.thumbnail}`;
                    result.description = result.snippet;
                });
                this.searchResults = res.data.results;
                this.loading = false;
            });
        }
    },
  },
};
</script>

<style>
</style>
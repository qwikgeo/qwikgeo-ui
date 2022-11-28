<template>
    <v-card class="my-2">
    <!-- <v-img
      :src="image"
      height="150"
      
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img> -->

        <v-card-title>{{ layer.title }}</v-card-title>

        <v-card-text>
            <div v-html="layer.description"></div>
        </v-card-text>
        <v-card-actions>
            <v-btn v-if="loaded" color="success" text @click="addToMap()" :disabled="loading" :loading="loading"> Add </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "MapBuilderLayersSearchCard",
    props: {
        layer: {
            type: Object,
            required: true,
        },
        appData: {
            type: Object,
            required: true,
        },
    },
    data: () => ({
        image: '',
        loaded: false,
        loading: false
    }),
    mounted() {
        if (this.layer.map_type === "esri") {
            this.image = this.layer.image;
        } 
        else if (this.layer.map_type === "user_data") {
            this.globalFunctions.httpRequest(
                "get",
                `${this.apiUrl}/api/v1/collections/user_data.${this.layer.table[0].table_id}`,
                undefined,
                true
            )
            .then((res) => {
                this.loaded = true;
                this.$set(this.layer, "geometry", res.data.geometry)
                this.$set(this.layer, "id", res.data.id)
                this.$set(this.layer, "bounds", res.data.extent.spatial.bbox)
            });
        }
    },
    methods: {
        addToMap() {
            this.loading = true;
            if (this.layer.map_type === "user_data" || this.layer.map_type === "map_layer") {
                this.globalFunctions.getDefaultPaint(this.layer)
            }
            this.globalFunctions.addLayerToMap(this.layer, this.appData, this.appData.map)
            .then(() => {
                this.loading = false;
            });
        },
  },
};
</script>

<style>
</style>
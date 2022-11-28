<template>
    <div>
        <h2>Basemap's</h2>
        <v-divider/>
        <v-list three-line>
            <template v-for="basemap in basemaps">
                <v-list-item
                    :key="basemap.name"
                    link
                    @click="globalFunctions.changeBasemap(basemap, appData)"
                >
                    <v-list-item-content>
                        <v-list-item-title v-html="basemap.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </div>
</template>

<script>
export default {
    name: "MapBuilderBasemapPanel",
    props: {
        appData: {
            type: Object,
            required: true
        }
    },
};
</script>

<style>
</style>
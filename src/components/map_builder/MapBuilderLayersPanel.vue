<template>
    <div>
        <h2>Layers</h2>
        <v-divider />
        <div v-if="appData.layers.length === 0">
            <p>No Layers</p>
        </div>
        <div v-else>
            <v-list>
                <template v-for="(layer) in appData.layers">                    
                    <v-card
                        :key="layer.title"
                    >
                        <v-list-item class="grow">
                            <v-btn
                                class="pl-0"
                                icon
                            >
                                <v-icon 
                                    v-if="layer.visible == true"
                                    @click="globalFunctions.toggleLayerVisibility(layer, appData)"
                                >
                                    mdi-eye
                                </v-icon>
                                <v-icon 
                                    v-else
                                    @click="globalFunctions.toggleLayerVisibility(layer, appData)"
                                >
                                    mdi-eye-off
                                </v-icon>
                            </v-btn>
                            <v-list-item-content>
                                <v-list-item-title>{{layer.title}}</v-list-item-title>
                            </v-list-item-content>                                
                                <v-menu>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            class="pl-0"
                                            icon
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            <v-icon>
                                                mdi-dots-vertical
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item
                                            link
                                            @click="globalFunctions.removeLayer(layer, appData)"
                                        >
                                            <v-list-item-title>Remove Layer</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                        </v-list-item>
                    </v-card>
                </template>
            </v-list>
        </div>
        <v-btn
            color="success"
            text
            @click="toggleSearchForLayers()"
        >
            Add Layer
        </v-btn>
    </div>
</template>

<script>

/* eslint-disable */

export default {
  name: "MapBuilderLayersSearchPanel",
  props: {
    appData: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    
  }),
  methods: {
    toggleSearchForLayers(){
        this.$set(this.appData, "openLeftIcon", "layer_search");
    }
  },
};
</script>

<style>
</style>
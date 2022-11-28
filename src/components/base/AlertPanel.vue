<template>
    <v-alert 
        class="app-alert mx-auto"
        v-if="appData.alert"
        :color="appData.alertColor"
        dark
        dismissible
    >
        {{appData.alert}}
    </v-alert>
</template>

<script>
export default {
    name: "AlertPanel",
    props: {
        appData: {
            type: Object,
            required: true,
        },
    },
    watch: {
        "appData.alert"(){
            if(this.appData.alert != undefined){
                setTimeout(() => {
                    this.$set(this.appData, "alert", undefined);
                }, 5000);
            }
        }
    }
};
</script>

<style scoped>

.app-alert {
    position: absolute;
    z-index: 7;
    top: 20px;
    left: 10%;
    width: 80%;
}

</style>

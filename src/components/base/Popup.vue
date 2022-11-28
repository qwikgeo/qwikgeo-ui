<template>
    <div>
    <div v-for="(popup, index) in popupContents" v-bind:key="index">
        <div v-html="popup.html"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "AlertPanel",
    props: {
        appData: {
            type: Object,
            required: true,
        },
        popupContents: {
            required: true,
        },
    },
    mounted(){
        console.log(this.popupContents)
    }
};
</script>
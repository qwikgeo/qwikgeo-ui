<template>
    <v-container class="h-100">
        <v-row class="h-100">
            <v-col class="d-flex justify-center align-center">
                <GoogleButton />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import GoogleButton from "@/components/GoogleButton";
export default {
    name: 'LoginView',
    components:{
        GoogleButton
    }

}
</script>

<style>

</style>
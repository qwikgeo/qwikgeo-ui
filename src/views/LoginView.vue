<template>
    <v-container class="h-100">
        <v-row justify="center">
            <v-col cols="12" md="6" class="pt-10">
                <v-card class="text-center pa-5">
                    <v-form ref="form" v-model="valid" lazy-validation class="pb-5" @keyup.native.enter="login">
                        <h2>QwikGeo - Sign In</h2>
                        <v-text-field v-model="username" label="Username" :rules="defaultFormRules" required outlined>
                        </v-text-field>

                        <v-text-field type="password" v-model="password" :rules="defaultFormRules" label="Password"
                            required outlined>
                        </v-text-field>

                        <v-alert v-model="alert" border="left" close-text="Close Alert" type="error" dismissible
                            outlined>
                            {{error}}
                        </v-alert>

                        <v-btn :disabled="!valid || loading" :loading="loading" color="success" class="mr-4 mb-4"
                            @click="login" outlined>
                            Login
                        </v-btn>
                        <v-btn color="secondary" class="mr-4 mb-4" outlined href="/register">
                            Register
                        </v-btn>
                    </v-form>
                    <GoogleButton />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
/* eslint-disable */

import GoogleButton from "@/components/GoogleButton.vue";

export default {
    name: "LoginView",
    components: { 
        GoogleButton
    },
    data: () => ({
        alert: false,
        loading: false,
        error: "",
        valid: true,
        username: "",
        password: "",
        defaultFormRules: [
            v => !!v || "Field is required",
        ],
    }),
    methods: {
        login() {
            this.loading = true;
            this.alert = false;
            this.globalFunctions
                .httpRequest("post", `${this.apiUrl}/api/v1/authentication/token`, {
                "username": this.username,
                "password": this.password
            })
                .then((res) => {
                this.loading = false;
                if (res.status != 200) {
                    if (res.data.detail) {
                        this.error = res.data.detail;
                    }
                    else {
                        this.error = res.data;
                    }
                    this.alert = true;
                }
                else {
                    localStorage.setItem("qwikgeo_access_token", res.data.access_token);
                    this.$router.push(this.$route.query.redirect || "/map_builder");
                }
            });
        }
    }    
}
</script>

<style>

</style>
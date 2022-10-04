<template>
  <v-container fluid class="mx-0 px-0 pt-0 h-100">
    <v-row class="mx-0 px-0 mt-0 pt-0">
      <v-col cols="12" class="mx-0 px-0 mt-0 pt-0 hero-banner">
        <v-img
          height="100%"
          src="/images/home_banner_2.jpg"
          gradient="rgba(0, 0, 0, .52), rgba(0, 0, 0, .52)"
        >
        <v-layout
          align-center
          style="padding-top: 25vh"
        >
          <v-flex
            pt-10
            text-center
          >
            <h1 class="display-3 font-weight-light white-text pt-10">
              QwikGeo
            </h1>
            <h5 class="text-uppercase pl-2 mb-4 mt-2 white-text">
              A state of the art geospatial platform for Location Services and GeoAnalytics.
            </h5>
            <v-btn
              class="ma-2"
              color="secondary"
              x-large
              outlined
              href="/login"
            >
              Login
            </v-btn>
          </v-flex>
        </v-layout>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style>

.hero-banner{
  height: 95vh;
}

html{
  overflow: hidden;
}

</style>

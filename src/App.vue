<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-3"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="/qwikgeo.png"
          transition="scale-transition"
          width="40"
        />
        QwikGeo
      </div>

      <v-spacer></v-spacer>
      <v-btn text v-if="!authenticated" href="/register"> Register</v-btn>
      <v-btn text v-if="!authenticated" href="/login"> Login</v-btn>
      <v-btn text v-if="authenticated" @click="logout()"> Logout</v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item v-if="authenticated">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Name Here</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list dense>
          <v-list-item
            v-for="url in urls"
            :key="url.title"
            link
            :href="url.url"
          >
            <v-list-item-icon>
              <v-icon>{{ url.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ url.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    authenticated: false,
    urls: [
      {
        title: "Home",
        icon: "mdi-home",
        url: "/",
      },
      {
        title: "Map Builder",
        icon: "mdi-map-outline",
        url: "/map_builder/",
      },
      {
        title: "Portal Search",
        icon: "mdi-magnify",
        url: "/portal_search/",
      }
    ],
  }),
  mounted() {
    if(localStorage.getItem('qwikgeo_access_token')){
      this.authenticated = true
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('qwikgeo_access_token')
      window.location.href = "/"
    }
  }
};
</script>  
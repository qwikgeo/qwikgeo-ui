<template>
  <div id="signInDiv"></div>
</template>

<script>
/* eslint-disable */
import jwt_decode from "jwt-decode";

export default {
  data: () => ({
  }),
  mounted() {
    const vr = this;
    google.accounts.id.initialize({
      client_id: this.GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme: "outline",
        size: "large"
      }
    )
    function handleCredentialResponse(response) {
      vr.globalFunctions.httpRequest(
        "post",
        `${vr.apiUrl}/api/v1/authentication/google_token_authenticate`,
        {
          "token": response.credential
        }
      )
        .then((res) => {
          if (res.status != 200) {
            if (res.data.detail) {
              this.error = res.data.detail
            } else {
              this.error = res.data
            }
            this.alert = true;
          } else {
            localStorage.setItem("qwikgeo_access_token", res.data.access_token);
            vr.$router.push(vr.$route.query.redirect || '/map_builder')
          }
        })
    }
  }
};
</script>

<style>

</style>

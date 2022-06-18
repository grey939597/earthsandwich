<template>
  <v-app>
    <v-app-bar elevation="0" color="rgba(252, 252, 252, 0.25)" absolute>
      <div class="d-flex align-center">
        <a
          href="#"
          class="d-block my-auto"
          style="text-decoration: none; color: black; font-size: 14px"
          >archive</a
        >
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  background: rgba(252, 252, 252, 0.25);
}
#app {
  background: rgba(252, 252, 252, 0.25);
}
* {
  font-family: "Noto Serif Display", serif;
  text-align: center;
}
</style>

<style lang="scss">
@import "@/styles/styles.scss";
</style>

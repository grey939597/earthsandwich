<template>
  <v-app>
    <v-app-bar elevation="0" color="rgba(252, 252, 252, 0.25)" absolute>
      <div class="d-flex align-center">
        <router-link :to="{ name: 'home' }" class="navigation-link mr-5"
          >home</router-link
        >
        <router-link :to="{ name: 'archive' }" class="navigation-link"
          >archive</router-link
        >
      </div>
    </v-app-bar>
    <v-main>
      <button @click="show = false" class="serif skip-btn" v-if="show">
        SKIP
      </button>

      <v-fade-transition>
        <video
          v-show="show"
          src="/welcome.mp4"
          playsinline
          autoplay
          muted
          loop
          style="
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
            width: 100vw;
            height: 100vh;
            object-fit: cover;
          "
        ></video>
      </v-fade-transition>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    show: false,
  }),
  created() {
    if (this.$route.name === "home") {
      this.show = true;
    }
  },
};
</script>

<style>
body {
  /* background: rgba(244, 244, 244, 0.25); */
}
#app {
  /* background: rgba(244, 244, 244, 0.25); */
}
* {
  font-family: "Noto Serif Display", serif;
  text-align: center;
  color: #2b2b2b;
}
</style>

<style lang="scss">
@import "@/styles/styles.scss";
.navigation-link {
  all: unset;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  color: #2b2b2b !important;
  font-size: 14px;
  display: block;
  margin: auto 0;
  &:hover {
    color: #9e9e9e !important;
  }
}
.skip-btn {
  all: unset;
  position: fixed;
  bottom: 36px;
  right: 36px;
  z-index: 9999;
  background: #fff;
  font-size: 24px;
  padding: 4px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  &:before {
    background-color: currentColor;
    border-radius: inherit;
    bottom: 0;
    color: inherit;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  }
  &:focus::before,
  &:hover:before {
    opacity: 0.08;
  }
}
</style>

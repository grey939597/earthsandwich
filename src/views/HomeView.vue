<template>
  <div class="home">
    <img src="/logo.png" alt="logo" class="logo" />
    <div class="main__container">
      <v-carousel
        cycle
        :height="isPc ? 480 : isTablet ? 300 : 186"
        hide-delimiters
      >
        <template v-slot:prev="{ on, attrs }">
          <button icon v-bind="attrs" v-on="on">
            <!-- <v-icon color="grey">mdi-chevron-left</v-icon> -->
            <img src="/img/prev.png" alt="prev" style="width: 24px" />
          </button>
        </template>
        <template v-slot:next="{ on, attrs }">
          <button icon v-bind="attrs" v-on="on">
            <img src="/img/next.png" alt="next" style="width: 24px" />
            <!-- <v-icon color="grey">mdi-chevron-right</v-icon> -->
          </button>
        </template>
        <v-carousel-item>
          <div class="card__wrap grid-card">
            <img src="/img/example.png" alt="example" />
            <div
              class="serif d-flex justify-center align-center text-center w-full h-full font-size flex-column"
            >
              지구샌드위치는<br />좋은 사람들입니다.<br /><br />Good People
              Makes<br />
              Earth Sandwich.
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="card__wrap">
            <img src="/img/example2.jpg" alt="example" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      isPc: true,
      isTablet: false,
      isMobile: false,
    };
  },
  watch: {
    $vuetify: {
      deep: true,
      immediate: true,
      handler({ breakpoint }) {
        if (breakpoint.mdAndUp) {
          this.isPc = true;
          this.isTablet = false;
          this.isMobile = false;
        } else if (breakpoint.smAndUp) {
          this.isPc = false;
          this.isTablet = true;
          this.isMobile = false;
        } else {
          this.isPc = false;
          this.isTablet = false;
          this.isMobile = true;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-window__prev,
  .v-window__next {
    background-color: transparent;
    margin: 0;
    @media (min-width: 960px) {
      margin: 0 16px;
    }
  }
}
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 160px;
  }
  .main__container {
    width: 372px;
    height: 186px;
    margin-bottom: 120px;
    .card__wrap {
      width: 80%;
      height: 100%;
      margin: 0 auto;
      &.grid-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      img {
        width: 100%;
        height: 100%;
        background-size: cover;
      }
      .font-size {
        font-size: 12px;
        line-height: 1.4;
        padding: 16px;
      }
    }
  }
}
@media (min-width: 600px) {
  .home {
    .logo {
      width: 240px;
    }
    .main__container {
      width: 600px;
      height: 300px;
      .card__wrap {
        .font-size {
          font-size: 16px;
          line-height: 1.6;
          padding: 20px;
        }
      }
    }
  }
}
@media (min-width: 960px) {
  .home {
    min-height: 960px;
    .logo {
      width: 320px;
    }
    .main__container {
      width: 960px;
      height: 480px;
      .card__wrap {
        .font-size {
          font-size: 20px;
          line-height: 1.6;
          padding: 24px;
        }
      }
    }
  }
}
</style>

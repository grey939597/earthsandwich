<template>
  <div class="home">
    <button @click="show = false" class="serif skip-btn" v-if="show">
      SKIP
    </button>
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
    <template v-if="!show">
      <img src="/logo-black.png" alt="logo" class="logo mb-10" />
      <div class="main__container">
        <v-carousel
          cycle
          :height="isPc ? 480 : isTablet ? 300 : 186"
          hide-delimiters
        >
          <template v-slot:prev="{ on, attrs }">
            <button icon v-bind="attrs" v-on="on">
              <!-- <v-icon color="grey">mdi-chevron-left</v-icon> -->
              <img src="/img/prev-icon.png" alt="prev" style="width: 36px" />
            </button>
          </template>
          <template v-slot:next="{ on, attrs }">
            <button icon v-bind="attrs" v-on="on">
              <img src="/img/next-icon.png" alt="next" style="width: 36px" />
              <!-- <v-icon color="grey">mdi-chevron-right</v-icon> -->
            </button>
          </template>
          <v-carousel-item>
            <div class="card__wrap grid-card">
              <img src="/img/about-1.png" alt="about1" />
              <div
                class="serif d-flex justify-center align-center text-center w-full h-full font-size flex-column"
              >
                지구가 샌드위치로 변해도 놀라지마세요.<br />
                지구를 샌드위치로 만들고 싶은 사람들의 모임,
                <br />지구샌드위치<br />
                <br />
                “Good people make the Earth go around.”<br />
                “Good people make the Earth sandwich.”
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="card__wrap grid-card">
              <img src="/img/about-2.png" alt="about2" />
              <div
                class="serif d-flex justify-center align-center text-center w-full h-full font-size flex-column"
              >
                [ Ingredients ]<br />건강한 지구, 빵 두조각, 사람들<br /><br />
                1. 지구에 계신다면, 빵을 하나 놓아주세요.<br />
                2. 지구 반대편에 있는 사람에게 연락하세요.<br />
                3. 동시에 빵을 올려 놓으세요.
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="card__wrap grid-card">
              <img src="/img/about-3.png" alt="about3" />
              <div
                class="serif d-flex justify-center align-center text-center w-full h-full font-size flex-column"
              >
                There’s no recipe B <br />(There’s no planet B)
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="card__wrap grid-card">
              <img src="/img/about-4.png" alt="about4" />
              <div
                class="serif d-flex justify-center align-center text-center w-full h-full font-size flex-column"
              >
                지구를 샌드위치로 만들 수 있다면, 앞으로 우리는 무엇을 더 만들어
                낼 수 있을까요?<br /><br />
                지구샌드위치는 세상을 더 아름답게 만드는 크레이티브한 아이디어로
                움직입니다.<br />
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      show: true,
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
    margin: 12px 0 0;
    @media (min-width: 960px) {
      margin: 12px 16px;
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
        font-size: 10px;
        line-height: 1.2;
        padding: 16px;
        word-break: keep-all;
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
          font-size: 14px;
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
          font-size: 16px;
          line-height: 1.6;
          padding: 24px;
        }
      }
    }
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

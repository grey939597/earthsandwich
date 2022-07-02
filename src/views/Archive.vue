<template>
  <div class="w-full h-full pa-6 d-flex align-center justify-center">
    <div class="line">
      <div
        class="circle"
        :style="!isPc ? circle.mbStyle : circle.style"
        @click="onClick(circle)"
        v-for="(circle, i) in circles"
        :key="i"
      ></div>
    </div>
    <v-dialog
      no-click-animation
      overlay-opacity="0.8"
      v-model="dialog"
      content-class="white"
      elevation="0"
      @click.esc="dialog = false"
    >
      <div
        class="white d-flex flex-column"
        style="width: 100%; height: fit-height"
      >
        <v-icon
          size="32"
          @click="dialog = false"
          color="white"
          style="position: fixed; top: 20px; right: 20px; cursor: pointer"
          >mdi-close</v-icon
        >
        <img
          :src="imgSrc"
          alt="image"
          v-if="mode === 'IMG'"
          class="detail-img"
        />
        <video
          :src="videoSrc"
          v-if="mode === 'VIDEO' && dialog"
          controls
          controlsList="nodownload"
          :poster="poster"
          class="detail-video"
        />
        <div
          class="py-4 px-6 d-flex flex-column w-full align-start"
          v-html="description"
        ></div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ArchiveView",
  data() {
    return {
      isPc: true,
      isTablet: false,
      isMobile: false,
      dialog: false,
      mode: "IMG",
      imgSrc: "",
      videoSrc: "",
      poster: "",
      description: "",
      circles: [
        {
          style: "top: -4px; left: 10%",
          mbStyle: "left: -4px; top: 10%",
          filename: "3-1.jpeg",
          text: "<b class='text-left'>Team EARTH SANDWICH 설립(20.07.14)</b><p>팀 지구샌드위치가 설립되었다.</p>",
        },
        {
          style: "top: -4px; left: 25%",
          mbStyle: "left: -4px; top: 25%",
          filename: "3-2.jpeg",
          text: "<b class='text-left'>1집 EP [Here or to go?] 발표(22.03.02)</b><p>그들의 야심찬 1집이 발표되었다.</p>",
        },
        {
          style: "top: -4px; left: 40%",
          mbStyle: "left: -4px; top: 40%",
          filename: "3-3.mp4",
          poster: "poster-3-3.png",
          text: "<b class='text-left'>Earth day home concert [Earth Sandwich Live Performance] 발표(22.04.22) </b><p>지구의날을 기념하기위해, 라이브 퍼포먼스를 준비했다. ‘Earth Day’, ‘Earth Wind& Fire’, ‘Earth Sandwich’</p><a class='mt-1' href='https://youtu.be/jYeeXj2TaVE' target='_blank'>https://youtu.be/jYeeXj2TaVE</a>",
        },
        {
          style: "top: -4px; left: 65%",
          mbStyle: "left: -4px; top: 65%",
          filename: "3-4.mp4",
          poster: "poster-3-4.png",
          text: "<b class='text-left'>11호 멤버 영입 (22.04.28)</b><p>11호 멤버 원예훈을 영입했다. 이것은 그의 첫 카메라 테스트.</p>",
        },
        {
          style: "top: -4px; left: 88%",
          mbStyle: "left: -4px; top: 88%",
          filename: "3-5.png",
          text: "<b class='text-left'>제 1회 Sandwich Night 개최(22.05.14)</b><p>샌드위치를 만들어 먹는 파티를 개최했다. 우리는 지구샌드위치. </p>",
        },
      ],
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
  methods: {
    onClick(item) {
      if (item.filename.includes(".mp4")) {
        this.mode = "VIDEO";
        this.poster = `/arc/${item.poster}`;
        this.videoSrc = `/arc/${item.filename}`;
      } else {
        this.mode = "IMG";
        this.imgSrc = `/arc/${item.filename}`;
      }
      this.description = item.text;
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-img,
.detail-video {
  width: 100%;
  height: auto;
  object-fit: contain;
}
video[poster] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.line {
  width: 4px;
  background-color: #2b2b2b;
  height: 80%;
  border-radius: 4px;
  position: relative;
}
.circle {
  cursor: pointer;
  width: 12px;
  height: 12px;
  background-color: #2b2b2b;
  border-radius: 50%;
  position: absolute;
}
@media (min-width: 960px) {
  .line {
    height: 4px;
    background-color: #2b2b2b;
    width: 80%;
    border-radius: 4px;
    position: relative;
  }
}
</style>

<style lang="scss">
.v-dialog {
  box-shadow: unset !important;
  width: 90% !important;
  max-width: 800px !important;
  border-radius: 0 !important;
  b {
    font-size: 16px !important;
    margin-bottom: 8px;
    text-align: left !important;
  }
  a,
  p {
    font-size: 14px !important;
    text-align: left !important;
  }
  p {
    color: #515151;
  }
}
</style>

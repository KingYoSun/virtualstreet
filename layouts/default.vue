<template>
  <div id="anchor">
    <ex-header />
    <div class="wrapper">
      <nuxt />
    </div>
    <n-link id="page-top" v-scroll-to="'#anchor'" to>
      <scroll-top-btn />
    </n-link>
    <ex-footer />
  </div>
</template>

<script>
import ScrollTopBtn from '~/components/parts/scrollTopBtn'
import ExHeader from '~/components/header.vue'
import ExFooter from '~/components/footer.vue'

export default {
  components: {
    ScrollTopBtn,
    ExHeader,
    ExFooter
  }
}
</script>

<style>
:root {
  --background-color: #f3f3f3;
  --border-highlight: #ffffff;
  --border-dark: #cfcfcf;
  --text-color-main: #1f1f1f;
  --text-color-main-hover: #bdbdbd;
  --text-color-sub: gray;
  --text-color-sub-hover: #bdbdbd;
  --text-color-p: white;
  --retweet-color: #1dba65;
  --favorite-color: #d72a61;
  --twitter-blue: #1da1f2;
  --border-color: #bdbdbd;
  --footer-background: #1f1f1f;
  --scroll-top-btn: black;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', '游ゴシック', YuGothic, 'メイリオ', Meiryo, 'ヒラギノ角ゴ ProN W3',
    'Hiragino Kaku Gothic ProN', 'ＭＳ Ｐゴシック', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: var(--background-color);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  max-width: 1340px;
  margin: 0 auto;
  padding-bottom: 20px;
}

.border {
  border-top: 1px solid var(--border-color);
  margin: 16px 0;
}

h3 {
  font-size: 0.85em;
}

img:hover {
  opacity: 0.7;
}

#page-top {
  position: fixed;
  z-index: 90;
  width: 40px;
  height: 40px;
  bottom: 30px;
  right: 90px;
}

@media screen and (max-width: 1500px) {
  #page-top {
    right: 30px;
  }
}
</style>

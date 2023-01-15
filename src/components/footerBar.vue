<template>
  <div class="footer-section">
This is the footer
  </div>
</template>

<script>
export default {
  name: 'footerBar',
  data () {
    return {
    }
  },
  created () {
    
  }
}
</script>

<style scoped lang="scss">
@import '../assets/SCSS/mixin.scss';
@import '../assets/SCSS/colors.scss';
@import '../assets/SCSS/fonts.scss';
@import '../assets/SCSS/variables.scss';

.footer-section {
  display: flex;
  background-color: map-get($basic-colors, "dark");
  justify-content: center;
  align-items: center;

  a {
    @include text-link-animation;
    color: map-get($font-basic-colors, "grey");
    font: {
      size: 12px;
      weight: 600;
      family: $font-primary;
    }
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: 2px;
    padding: {
      top: 50px;
      left: 20px;
      right: 20px;
      bottom: 50px;
    }
  }
}
</style>

<template>
  <div class="navbar-section">
    This is the navBar
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
  },
  created () {
   
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import '../assets/SCSS/mixin.scss';
@import '../assets/SCSS/colors.scss';
@import '../assets/SCSS/fonts.scss';
@import '../assets/SCSS/variables.scss';

.navbar-section {
  display: flex;
  flex-direction: row;
  justify-content: center;

  p {
    @include text-link-animation;
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 12px;
      weight: 700;
      family: $font-primary;
    }
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: 2px;
    padding: {
      top: 10px;
      left: 20px;
      right: 20px;
      bottom: 10px;
    }
  }
}
</style>

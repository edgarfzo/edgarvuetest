<template>
  <div class="footer-section">
    <a :href="links.facebook.value">{{ links.facebook.name }}</a>
    <a :href="links.twitter.value">{{ links.twitter.name }}</a>
    <a :href="links.linkedin.value">{{ links.linkedin.name }}</a>
  </div>
</template>

<script>
export default {
  name: 'footerBar',
  data () {
    return {
      links: {
        facebook: {
          name: '',
          value: ''
        },
        twitter: {
          name: '',
          value: ''
        },
        linkedin: {
          name: '',
          value: ''
        }
      }
    }
  },
  created () {
    this.links.facebook = {
      name: 'Facebook',
      value: 'https://www.facebook.com/'
    }
    this.links.twitter = {
      name: 'Twitter',
      value: 'https://twitter.com/'
    }
    this.links.linkedin = {
      name: 'Linkedin',
      value: 'https://www.linkedin.com/'
    }
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

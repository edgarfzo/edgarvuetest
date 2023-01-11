<template>
  <div class="navbar-section">
    <p v-on:click="linkToPortfolio(links.home.value)">{{ links.home.name }}</p>
    <p v-on:click="linkToPortfolio(links.portfolio.value)">{{ links.portfolio.name }}</p>
    <p v-on:click="linkToPortfolio(links.contact.value)">{{ links.contact.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      links: {
        home: {
          name: '',
          value: ''
        },
        portfolio: {
          name: '',
          value: ''
        },
        contact: {
          name: '',
          value: ''
        }
      }
    }
  },
  created () {
    this.links.home = {
      name: 'Home',
      value: 'main'
    }
    this.links.portfolio = {
      name: 'Portfolio',
      value: 'portfolio'
    }
    this.links.contact = {
      name: 'Contact',
      value: 'contact'
    }
  },
  methods: {
    linkToPortfolio: function (name) {
      this.$router.push({ name: name })
    }
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

<template>
  <div>
    <section>
      <div class="portfolio-head-section">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
      </div>
    </section>
    <section>
      <div class="portfolio-grid-section">
        <div class="portfolio-grid-header"></div>
        <div v-for="product in products" v-bind:key="product.id" v-on:click="linkToProduct(product.id)" class="portfolio-product-item">
          <img :src="product.coverImage" alt=""/>
          <p>{{ product.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import superagent from 'superagent'
import { linkToProduct } from './../methods/methods'

export default {
  name: 'PortfolioView',
  data () {
    return {
      title: '',
      subtitle: '',
      products: [],
      error: {
        message: ''
      }
    }
  },
  created () {
    this.getProducts()
    this.title = 'Products Portfolio'
    this.subtitle = 'Complete list of my products'
  },
  methods: {
    linkToProduct (item) {
      linkToProduct(item, this)
    },
    getProducts () {
      superagent.get('/assets/JSON/products.json')
        .then((response) => {
          this.products = response.body
        })
        .catch((error) => {
          this.error.message = error
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/SCSS/mixin.scss';
@import '../assets/SCSS/colors.scss';
@import '../assets/SCSS/fonts.scss';
@import '../assets/SCSS/variables.scss';

// shared values
  $side-padding-grid-products-section: 100px;
  $top-padding-grid-products-section: 50px;
  $margin-product-item: 18px;

.portfolio-head-section {
  display: flex;
  background-color: map-get($main-colors, "primary");
  height: 50vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: map-get($font-basic-colors, "light");
    font: {
      size: 50px;
      weight: 700;
      family: $font-primary;
    }
    line-height: .95;
    text-transform: capitalize;
    width: 100%;
    text-align: center;
    letter-spacing: -3px;
    margin-bottom: 15px;
  }

  h2 {
    color: map-get($font-basic-colors, "light");
    font: {
      size: 25px;
      weight: 700;
      family: $font-primary;
    }
    line-height: 1.1;
    font-family: $font-primary;
    text-transform: capitalize;
    width: 20vw;
    text-align: center;
    letter-spacing: 1px;
  }
}

.portfolio-grid-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: $top-padding-grid-products-section;
  padding-left: $side-padding-grid-products-section;
  padding-right: $side-padding-grid-products-section;
  background-color: map-get($basic-colors, "light");
}

.portfolio-grid-header {

}

.portfolio-product-item {
  margin-left: $margin-product-item;
  margin-right: $margin-product-item;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 350px;
  height: 230px;

  img {
    overflow-x: hidden;
    overflow-y: hidden;
    object-fit: cover;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    @include text-link-animation;
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 15px;
      weight: 400;
      family: $font-primary;
    }
    line-height: 1.3;
    text-transform: capitalize;
    margin: 0;
    padding-top: 18px;
    padding-bottom: 36px;
  }
}
</style>

<template>
  <div>
    <section>
      <div class="item-container">
        <div class="item-images-column">
          <div v-for="(image, index) in images" v-bind:key="index" class="item-image-item">
            <img :src="image.link" alt=""/>
            <p>{{ image.description }}</p>
          </div>
        </div>
        <div class="item-description-column">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
          <div class="item-details">
            <em>Client</em>
            <p>{{ details.client }}</p>
            <em>Services</em>
            <p>{{ details.services }}</p>
            <em>Year</em>
            <p>{{ details.year }}</p>
            <em>Link</em>
            <p>{{ details.link }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="item-portfolio-section">
        <div class="item-portfolio-header">
          <h4>My works</h4>
        </div>
        <div class="item-portfolio-list">
          <div v-for="product in products" v-bind:key="product.id" v-on:click="linkToProduct(product.id)" class="item-portfolio-product">
          <img :src="product.coverImage" />
          <p>{{ product.name }}</p>
        </div>
        </div>
      </div>
    </section>
    <section>
      <div class="item-navigation-section">
        <h4 v-on:click="previousProduct(id)">&#60; Prev</h4>
        <h4 v-on:click="linkToPortfolio()">Portfolio</h4>
        <h4 v-on:click="nextProduct(id)">Next &#62;</h4>
      </div>
    </section>
  </div>

</template>

<script>
import superagent from 'superagent'

export default {
  name: 'ItemView',
  props: [ 'id' ],
  data () {
    return {
      title: '',
      description: '',
      images: [],
      details: {
        client: '',
        services: '',
        year: '',
        link: ''
      },
      products: [],
      productsLength: Number,
      error: {
        message: ''
      }
    }
  },
  created () {
    this.getProduct()
    this.getLimitedProducts()
  },
  methods: {
    getProduct () {
      superagent.get('/assets/JSON/products.json')
        .then((response) => {
          const idNumber = parseInt(this.id, 10)
          const selectedItem = response.body.find((item) => {
            return item.id === idNumber
          })
          this.title = selectedItem.name
          this.description = selectedItem.description
          this.images = selectedItem.images
          this.details = selectedItem.details
        })
        .catch((error) => {
          this.error.message = error
        })
    },
    getLimitedProducts () {
      superagent.get('/assets/JSON/products.json')
        .then((response) => {
          const productsLength = parseInt(response.body.length, 10)
          const slicedProducts = response.body.slice(0, 3)
          this.products = slicedProducts
          this.productsLength = productsLength
        })
        .catch((error) => {
          this.error.message = error
        })
    },
    linkToProduct (itemId) {
      this.$router.push({ name: 'item', params: { id: itemId } })
    },
    nextProduct (currentId) {
      const currentIdNumber = parseInt(currentId, 10)
      const productsLength = this.productsLength
      if (currentIdNumber < productsLength) {
        let nextId = currentIdNumber + 1
        this.$router.push({ name: 'item', params: { id: nextId } })
      }
    },
    previousProduct (currentId) {
      const currentIdNumber = parseInt(currentId, 10)
      if (currentIdNumber > 1) {
        let previousId = currentIdNumber - 1
        this.$router.push({ name: 'item', params: { id: previousId } })
      }
    },
    linkToPortfolio: function () {
      this.$router.push({ name: 'portfolio' })
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

.item-container {
  display: flex;
  flex-direction: row;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
}

.item-images-column {
  width: 50vw;
}

.item-image-item {
  padding-bottom: 30px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    overflow-x: hidden;
    overflow-y: hidden;
    object-fit: cover;
  }

  p {
    color: map-get($font-basic-colors, "grey");
    font: {
      size: 15px;
      weight: 300;
      family: $font-primary;
      style: normal;
    }
  }
}

.item-description-column {
  margin-left: 50px;
  width: 20vw;
  h1 {
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 25px;
      weight: 700;
      family: $font-primary;
    }
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }

  p {
    color: map-get($font-basic-colors, "grey");
    font: {
      size: 15px;
      weight: 300;
      family: $font-secondary;
    }
    line-height: 1.75;
    margin: 0;
  }
}

.item-details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 1.9;
  padding-top: 25px;
  margin-top: 25px;
  @include top-border;

  em {
    color: map-get($font-basic-colors, "grey");
    font: {
      size: 15px;
      weight: 600;
      family: $font-primary;
      style: normal;
    }
    min-width: 50%;
  }

  p {
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 15px;
      weight: 300;
      family: $font-secondary;
      style: normal;
    }
    min-width: 50%;
  }
}

.item-portfolio-section {
  @include top-border;
  margin-top: 40px;
  padding-top: 40px;
}

.item-portfolio-header {
  h4 {
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 14px;
      weight: 700;
      family: $font-primary;
    }
    line-height: 1.3;
    text-transform: uppercase;
    margin: 0;
    padding-top: 45px;
    padding-bottom: 60px;
    text-align: center;
  }
}

.item-portfolio-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.item-portfolio-product {
  margin-left: $margin-product-item;
  margin-right: $margin-product-item;

  img {
    width: 350px;
    height: 230px;

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
    text-align: center;
  }
}

.item-navigation-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: map-get($basic-colors, "grey");

  h4 {
    @include text-link-animation;
    color: map-get($font-basic-colors, "dark");
    font: {
      size: 12px;
      weight: 300;
      family: $font-primary;
    }
    line-height: 1.3;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
  }
}
</style>

<template>
  <div>
    <section>
      <div class="head-section">
        <h1>{{ title }}</h1>
      </div>
    </section>
    <section>
      <div class="message-section">
        <div class="subtitle-field">
          <div class="subtitle-header">
            <div class="camera-button">
  <button type="button" class="button is-rounded" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
    <span v-if="!isCameraOpen">Open Camera</span>
    <span v-else>Close Camera</span>
  </button>
</div>
<div v-if="isCameraOpen" class="camera-box">  
  <video ref="camera" :width="450" :height="337.5" autoplay></video>
</div>
            <h4>{{ sections.message }}</h4>
          </div>
          <div class="subtitle-body">
            <h2>{{ message.title }}</h2>
            <h3>{{ message.subtitle }}</h3>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="products-section">
        <div class="product-field">
          <div class="product-header">
            <h4>{{ sections.products }}</h4>
          </div>
        </div>
      </div>
      <div class="products-row">
        <div v-for="product in products" v-bind:key="product.id" class="product-item" v-on:click="linkToProduct(product.id)">
          <img :src="product.coverImage" alt=""/>
          <div class="overlay">
            <p>{{ product.name }}</p>
          </div>
        </div>
      </div>
      <div class="products-footer">
        <button v-on:click="linkToPortfolio()">{{ productAction.button }}</button>
      </div>
    </section>
    <section>
      <div class="contact-section">
        <div class="contact-header">
          <h4>{{ sections.contact }}</h4>
        </div>
        <h2>{{ contact.title }}</h2>
        <h3>{{ contact.subtitle }}</h3>
        <form>
          <input type="text" v-model="form.name" placeholder="your name" />
          <input type="text" v-model="form.email" placeholder="your email" />
          <input type="text" v-model="form.message" placeholder="your message" />
          <button v-on:click.prevent="postMessage()">{{ contact.button }}</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import superagent from 'superagent'
import { linkToProduct } from './../methods/methods'

export default {
  name: 'MainView',
  data () {
    return {
      isCameraOpen: false,
      title: '',
      message: {
        title: '',
        subtitle: ''
      },
      products: [],
      productAction: {
        button: ''
      },
      contact: {
        title: '',
        subtitle: '',
        button: ''
      },
      sections: {
        message: '',
        products: '',
        contact: ''
      },
      form: {
        name: '',
        email: '',
        message: ''
      },
      error: {
        message: ''
      },
      subimittedMessage: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  created () {
    this.title = 'PROD'
    this.message = {
      title: '',
      subtitle: 'this app shows capabilities of using vue in simple cases'
    }
    this.productAction.button = 'MORE PRODUCTS'
    this.contact = {
      title: 'Take a contact with us',
      subtitle: '',
      button: 'SEND MESSAGE'
    }
    this.sections = {
      message: 'VUE APP',
      products: 'Products',
      contact: 'Contact'
    }
    this.getProducts()
  },
  methods: {
    createCameraElement() {
  const constraints = (window.constraints = {
    audio: false,
    video: true
  });
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => {
      this.$refs.camera.srcObject = stream;
    })
    .catch(error => {
      alert("May the browser didn't support or there is some errors.");
  });
},
    toggleCamera() {
      if(this.isCameraOpen) {
    this.isCameraOpen = false;
    this.stopCameraStream();
  } else {
    this.isCameraOpen = true;
    this.createCameraElement();
  }
},
stopCameraStream() {
  let tracks = this.$refs.camera.srcObject.getTracks();

  tracks.forEach(track => {
    track.stop();
  });
},
    linkToPortfolio: function () {
      this.$router.push({ name: 'portfolio' })
    },
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
    },
    postMessage () {
      if (this.form.name !== '' && this.form.email !== '' && this.form.message !== '') {
        superagent.post('api/contact')
          .set('Content-Type', 'application/json')
          .send({
            name: this.name,
            email: this.email,
            message: this.message })
          .then((response) => {
            this.subimittedMessage.name = response.body.name
            this.subimittedMessage.email = response.body.email
            this.subimittedMessage.message = response.body.message
          })
          .catch((error) => {
            this.error.message = error
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/SCSS/mixin.scss';
@import '../assets/SCSS/colors.scss';
@import '../assets/SCSS/fonts.scss';
@import '../assets/SCSS/variables.scss';

.head-section {
  display: flex;
  background-color: map-get($main-colors, "primary");
  height: 80vh;
  justify-content: center;
  align-items: center;

  h1 {
    color: map-get($font-basic-colors, "light");
    font-size: 90px;
    font-weight: 900;
    line-height: .95;
    font-family: $font-primary;
    text-transform: capitalize;
    width: 30%;
    text-align: center;
    letter-spacing: -4px;
  }
}

.message-section {
  display: flex;
  background-color: map-get($basic-colors, "light");
  justify-content: center;
}

.subtitle-field {
  display: flex;
  background-color: map-get($main-colors, "secondary");
  margin-top: -120px;
  margin-bottom: 60px;
  padding: 0 40px 40px 40px;
  color: map-get($font-basic-colors, "light");
  flex-direction: column;
  width: 40vw;
  @include field-shadow;
  border-radius: $border-radius;

  h4 {
    font-family: $font-primary;
    font-size: 12px;
    letter-spacing: 8px;
  }

  h2 {
    font-family: $font-primary;
    font-size: 50px;
    line-height: 1;
    font-weight: 900;
    width: 50%;
    text-align: right;
    margin-left: 15px;
    margin-right: 15px;
    letter-spacing: -0.5px;
    word-spacing: 3px;
  }

  h3 {
    font-family: $font-secondary;
    font-size: 25px;
    line-height: 1.2;
    font-weight: 300;
    width: 50%;
    text-align: left;
    margin-left: 15px;
    margin-right: 15px;
    letter-spacing: 1.3px;
    word-spacing: 3px;
  }
}

.subtitle-header {
  @include header;

  h4 {
    @include header-text;
    color: map-get($font-basic-colors, "light");
  }
}

.subtitle-body {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
}

.products-section {
  display: flex;
  background-color: map-get($main-colors, "primary");
  align-items: center;
  flex-direction: column;
}

.product-field {
  display: flex;
  flex-direction: column;
  background-color: map-get($main-colors, "secondary");
  height: 62vh;
  width: 30vw;
  margin-top: 50px;
  margin-bottom: -35vh;
  justify-content: flex-start;
  padding: 0 40px 40px 40px;
  @include field-shadow;
  border-radius: $border-radius;
}

.product-header {
  @include header;

  h4 {
    @include header-text;
    color: map-get($font-basic-colors, "light");
  }
}

.products-row {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-top: -185px;
  height: 60vh;
  &::-webkit-scrollbar {
    display: none;
  }
}

.product-item {
  @include product-shadow;
  background-color: map-get($basic-colors, "light");
  display: flex;
  position: relative;
  min-width: 340px;
  height: 460px;
  margin: 0 20px 0 20px;

    &:hover {
      cursor: pointer;

    }

    img {
      overflow-x: hidden;
      overflow-y: hidden;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: darken(map-get($main-colors, "secondary"), 15%);
      transition: {
        duration: 0.3s;
      }

      &:hover {
        opacity: 0.5;

      }

      p {
        opacity: 1 !important;
        text-align: center;
        margin-top: 60%;
        color: map-get($font-basic-colors, "light");
        font: {
          size: 35px;
          weight: 300;
          family: $font-primary;
        }
      }
    }

}

.products-footer {
  display: flex;
  background-color: map-get($basic-colors, "grey");
  height: 55vh;
  align-items: flex-end;
  justify-content: center;
  margin-top: -40vh;

  button {
    @include action-button;
    margin-bottom: 65px;

      &:hover {
        cursor: pointer;
      }
  }
}

.contact-section {
  display: flex;
  background-color: lighten(map-get($main-colors, "primary"), 5%);
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: $font-primary;
    font-weight: 900;
    color: map-get($font-basic-colors, "light");
    font-size: 40px;
    margin: 20px 0 0 0;
  }
  h3 {
    font-family: $font-secondary;
    color: map-get($font-basic-colors, "grey");
    font-size: 20px;
    margin: 10px 0 50px 0;
    width: 25%;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      font-family: $font-secondary;
      color: map-get($font-basic-colors, "dark");
      font-size: 18px;
      font-weight: 400;
      padding: 16px 30px;
      margin: 10px 0 10px 0;
      width: 30vw;
    }

    button {
      @include action-button;
      margin: 40px 0 50px 0;

        &:hover {
          cursor: pointer;
        }
    }
  }
}

.contact-header {
  @include header;
  h4 {
    @include header-text;
    color: map-get($font-basic-colors, "light");
  }
}

.footer-section {
  display: flex;
  background-color: map-get($basic-colors, "dark");
  justify-content: center;
  align-items: center;

  p {
    font-family: $font-primary;
    color: map-get($font-basic-colors, "grey");
    font-size: 16px;
    font-weight: 600;
    margin: 50px 0 50px 0;
  }
}
</style>

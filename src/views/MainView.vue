<template>
<BalanceCard></BalanceCard>
</template>

<script>
import { getDatabase, ref, set, onValue, } from "firebase/database"
import BalanceCard from '../components/Mainview/BalanceCard.vue'





export default {
  name: 'MainView',
  components: {
    BalanceCard
  },
  data() {
    return {

    }
  },
  created() {
    
    this.title = process.env.VUE_APP_ENV
    
  },
  methods: {

    writeUserData(userId, name, email, imageUrl) {
      const db = getDatabase()
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    },
    readUserData (){
      const db = getDatabase()
      const starCountRef = ref(db, 'users/')
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        console.log(data)
      })
    },
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
.web-camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 500px;

  
  .camera-button {
    margin-bottom: 2rem;
  }
  
  .camera-box {    
    .camera-shutter {
      opacity: 0;
      width: 450px;
      height: 337.5px;
      background-color: #fff;
      position: absolute;
      
      &.flash {
        opacity: 1;
      }
    }
  }
  
  .camera-shoot {
    margin: 1rem 0;
    
    button {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      
      img {
        height: 35px;
        object-fit: cover;
      }
    }
  }
  
  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;
    
    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }
    
    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;
      
      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;
        
        &:nth-child(2) {
          animation-delay: .2s;
        }
        
        &:nth-child(3) {
          animation-delay: .4s;
        }
      }
    }
  }

  @keyframes preload {
    0% {
      opacity: 1
    }
    50% {
      opacity: .4
    }
    100% {
      opacity: 1
    }
  }
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

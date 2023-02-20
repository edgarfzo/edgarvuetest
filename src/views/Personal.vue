<template>
   
</template>
<script>
import { getAuth } from 'firebase/auth'
  export default {
    name: 'PersonalPage',
    beforeMount(){
        console.log(getAuth())
      }
    }
</script>
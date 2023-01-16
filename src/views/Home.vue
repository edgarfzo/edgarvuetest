<template>
  <p>User : {{ getUser }}</p>
  <BalanceCard/>
  <HelloWorld/>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
import BalanceCard from '@/components/MainView/BalanceCard.vue';
  import { useAppStore } from '@/store/app';

  export default{
    name: 'Home',
    components: {
    HelloWorld,
    BalanceCard
},
    computed:{
      getUser(){
        const user = useAppStore().getCurrentUser
        return user
      }
    }


  }
</script>

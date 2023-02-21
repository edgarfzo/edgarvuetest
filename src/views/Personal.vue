<template>
  <v-container class="flex-grow-1 d-flex flex-column flex-nowrap align-stretch">
    <v-row>
      <v-col
      class="pa-0"
      cols="12">
        <Header
        type="healthcare"
        >
        </Header>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Header from '@/components/Header.vue'

  export default {
    name: 'Home',
    components: {
    Header,
  }
  }
</script>

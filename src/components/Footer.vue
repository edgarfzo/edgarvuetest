<template>
  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="m-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>
      Developed by Edgar Fernàndez for Marc Roqué 
    <div>
      {{ new Date().getFullYear() }} — <strong>PROJECTA</strong>
    </div>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
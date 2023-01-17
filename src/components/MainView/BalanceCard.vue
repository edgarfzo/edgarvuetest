<template>
    <v-card
      class="mx-auto"
      max-width="368"
    >
      <v-card-item title="Balance Card">
        Environment: {{ environment }}


        <v-btn
      :loading="loading"
      :disabled="loading"
      color="secondary"
      
    >
      Add 10K $
    </v-btn>


      </v-card-item>
  
      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col
            class="text-h2"
            cols="6"
          >
            64&deg;F
          </v-col>
  
          <v-col cols="6" class="text-right">
            <v-icon
              color="error"
              icon="mdi-weather-hurricane"
              size="88"
            ></v-icon>
          </v-col>
        </v-row>
      </v-card-text>
  
      <div class="d-flex py-3 justify-space-between">
        <v-list-item
          density="compact"
          prepend-icon="mdi-weather-windy"
        >
          <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
        </v-list-item>
  
        <v-list-item
          density="compact"
          prepend-icon="mdi-weather-pouring"
        >
          <v-list-item-subtitle>48%</v-list-item-subtitle>
        </v-list-item>
      </div>

    </v-card>
  </template>

  <script>
  export default {
    name: 'BalanceCard',
    data: () => ({
      loading: [],
      labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
      expand: false,
      time: 0,
      forecast: [
        { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
      ],
    }),
    computed: {
        environment(){
            return import.meta.env.VITE_APP_ENV
        }
    },
    methods: {
      load () {
        this.loading= true
        setTimeout(() => (this.loading = false), 3000)
      },
    }
  }
</script>
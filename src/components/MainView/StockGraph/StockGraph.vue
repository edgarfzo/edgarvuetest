<template>
<div>
     <apexchart width="600" type="line" :options="chartOptions" :series="series"></apexchart>
   </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
export default {
    name: 'StockGraph',
    components: {
          apexchart: VueApexCharts,
        },
    props: {
            series: Array,
            chartOptions: Object

        },
    data: () => ({ 
}),
}

</script>
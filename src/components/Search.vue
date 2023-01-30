<template>
<v-container
class="flex-grow-1 d-flex flex-column flex-nowrap"
outlined
>
<v-row
class="flex-grow-0 flex-shrink-1 d-flex">
    <v-col>
        <v-select
        :items="items"
        label="AREA"
        density="compact">

        </v-select>
    </v-col>
    <v-col>
        <v-select
        :items="items"
        label="COMPANY"
        density="compact">
            
        </v-select>
    </v-col>
    <v-col>
        <v-select
        :items="items"
        label="DEPARTMENT"
        density="compact">
            
        </v-select>
    </v-col>
    <v-col>
        <v-select
        :items="items"
        label="LOCATION"
        density="compact">
            
        </v-select>
    </v-col>
</v-row>
</v-container>
</template>

<script>
export default {
    name: 'SearchComponent',
    data: () => ({
  items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
}),
}

</script>
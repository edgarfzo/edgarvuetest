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
        multiple
        label="AREA"
        density="compact"
        v-model="myValue">

        </v-select>
    </v-col>
    <v-col>
        <v-select
        :items="items"
        multiple
        label="COMPANY"
        density="compact"
        v-model="myValue">
            
        </v-select>
    </v-col>
    <v-col>
        <v-select
        :items="items"
        multiple
        label="DEPARTMENT"
        density="compact"
        v-model="myValue">
            
        </v-select>
    </v-col>
    <v-col>
        <v-select
        :items="items"
        multiple
        label="LOCATION"
        density="compact"
        v-model="myValue">
            
        </v-select>
    </v-col>
</v-row>
</v-container>
</template>

<script>
import { useAppStore } from '@/store/app'
import { getAuth } from "firebase/auth"
export default {
    name: 'SearchComponent',
    data: () => ({
      myValue: [],
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
watch: {
  async myValue(){
    await useAppStore().getPosts(getAuth(), this.myValue)
  }
}
}

</script>
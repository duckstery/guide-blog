<template>
  <div>
    <input v-model="data.input" placeholder="Type anything"/>
    <div>Your input: {{ data }}</div>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
// Define data
import {reactive} from "vue";

export default {
  setup() {
    const data = reactive({input: ''})

    const reset = () => data.input = ''

    return {
      data, reset
    }
  }
}
</script>
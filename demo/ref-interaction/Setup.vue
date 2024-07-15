<template>
  <div>
    <input v-model="input" placeholder="Type anything"/>
    <div>Your input: {{ input }}</div>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
// Define data
import {ref} from "vue";

export default {
  setup() {
    const input = ref('Lorem ipsum')

    const reset = () => input.value = ''

    return {
      input, reset
    }
  }
}
</script>

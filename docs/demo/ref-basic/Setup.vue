<template>
  <div>
    <input v-model="input" placeholder="Type anything"/>
    <div>Your input: {{ input }}</div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup () {
    const input = ref('') // [!code highlight]

    return {input}
  }
}
</script>

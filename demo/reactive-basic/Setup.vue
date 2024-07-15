<template>
  <div>
    <input v-model="data.input" placeholder="Type anything"/>
    <div>Your input: {{ data }}</div>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  setup () {
    const data = reactive({input: ''}) // [!code highlight]

    return {data}
  }
}
</script>

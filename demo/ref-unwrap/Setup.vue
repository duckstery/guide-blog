<template>
  <div>
    <div>Count: {{ count }}</div>
    <div>State count: {{ state.count }}</div><br>
    <button @click="increaseCount">Increase count</button>
    <button @click="increaseStateCount">Increase state count</button>
  </div>
</template>

<script>
// Define data
import {ref, reactive} from "vue";

export default {
  setup() {
    const count = ref(0)
    const state = reactive({
      count
    })

    const increaseCount = () => count.value++
    const increaseStateCount = () => state.count++

    return {
      count, state, increaseCount, increaseStateCount
    }
  }
}
</script>

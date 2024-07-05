<template>
  <div>
    <div>{{ state }}</div><br/>
    <button @click="increaseCount">Increase count</button>
  </div>
</template>

<script setup>
// Define data
import {reactive} from "vue";

const state = reactive({ count: 0 })

// count is disconnected from state.count when destructured.
let { count } = state

// does not affect original state
const increaseCount = () => {
  count++
  alert(count)
}
</script>

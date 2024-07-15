<template>
  <div>
    <div>{{ state }}</div><br/>
    <button @click="increaseCount">Increase count</button>
    <button @click="changeState">Change state</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
// Define data
import {ref} from "vue";

let state = ref({count: 0}) // [!code highlight]

// reactivity connection is intact
const increaseCount = () => state.value.count++
// reactivity connection is intact
const changeState = () => state.value = {count: 1} // [!code highlight]

const reset = () => {state.value = {count: 0}}
</script>

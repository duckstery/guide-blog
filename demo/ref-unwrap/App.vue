<template>
  <div>
    <div>Count: {{ count }}</div>
    <div>State count: {{ state.count }}</div><br>
    <button @click="increaseCount">Increase count</button>
    <button @click="increaseStateCount">Increase state count</button>
  </div>
</template>

<script setup>
// Define data
import {ref, reactive} from "vue";

const count = ref(0)
const state = reactive({
  count
})

const increaseCount = () => count.value++
const increaseStateCount = () => state.count++
</script>

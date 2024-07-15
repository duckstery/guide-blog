<template>
  <div>
    <input v-model="data.input" placeholder="Type anything"/>
    <div>Your input: {{ data }}</div>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
// Define data
import {reactive} from "vue";

const data = reactive({input: ''})

const reset = () => data.input = ''
</script>
<template>
  <div>
    <input v-model="data.input" placeholder="Type anything"/>
    <div>Your input: {{ data }}</div>
  </div>
</template>

<script setup>
// Define data
import {reactive} from "vue";

const data = reactive({input: ''}) // [!code highlight]
</script>

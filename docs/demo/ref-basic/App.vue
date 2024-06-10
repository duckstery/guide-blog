<template>
  <div>
    <input v-model="input" placeholder="Type anything"/>
    <div>Your input: {{ input }}</div>
  </div>
</template>

<script setup>
// Define data
import {ref} from "vue";

const input = ref('') // [!code highlight]
</script>

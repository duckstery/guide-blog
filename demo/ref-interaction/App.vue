<template>
  <div>
    <input v-model="input" placeholder="Type anything"/>
    <div>Your input: {{ input }}</div>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
// Define data
import {ref} from "vue";

const input = ref('Lorem ipsum')

const reset = () => input.value = ''
</script>

<template>
  <div>
    <button @click="onClick">Alert</button>
  </div>
</template>

<script setup>
import {defineEmits} from "vue";

// Define emit
const emit = defineEmits(['click'])

const onClick = () => emit('click')
</script>

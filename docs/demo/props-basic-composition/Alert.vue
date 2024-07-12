<template>
  <div>
    <button @click="alertMessage">Alert</button>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

// Define props
const props = defineProps({
  message: String
})

const alertMessage = () => alert(props.message)
</script>

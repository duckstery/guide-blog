<template>
  <div>
    <input v-model="message"/>&nbsp;
    <button @click="alertMessage">Click to alert</button>
  </div>
</template>

<script setup>
import {ref} from "vue";

const message = ref('Hello')

// Alert user
const alertMessage = () => alert(message.value) // [!code highlight]
// Or
// function alertMessage() {
//   alert(message.value)
// }
</script>

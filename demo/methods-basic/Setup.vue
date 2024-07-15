<template>
  <div>
    <input v-model="message"/>&nbsp;
    <button @click="alertMessage">Click to alert</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const message = ref('Hello')

    // Alert user
    const alertMessage = () => alert(message.value) // [!code highlight]
    // Or
    // function alertMessage() {
    //   alert(message.value)
    // }

    return {message, alertMessage}
  }
}
</script>

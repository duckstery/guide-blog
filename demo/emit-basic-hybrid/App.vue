<template>
  <div>
    <input v-model="message" placeholder="Type anything"/>
    <Btn @click="alertMessage" style="margin-top: 5px"/>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
import {ref} from "vue";

export default {
  components: {Btn},

  setup() {
    const message = ref('')

    const alertMessage = () => alert(message.value)

    return {
      message, alertMessage
    }
  }
}
</script>

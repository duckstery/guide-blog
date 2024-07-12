<template>
  <div>
    <input v-model="message" placeholder="Type anything"/>
    <Alert :message style="margin-top: 5px"/>
  </div>
</template>

<script>
import Alert from "./Alert.vue";
import {ref} from "vue";

export default {
  components: {Alert},

  setup() {
    return {message: ref('')}
  }
}
</script>

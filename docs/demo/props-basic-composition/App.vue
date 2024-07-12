<template>
  <div>
    <input v-model="message" placeholder="Type anything"/>
    <Alert :message style="margin-top: 5px"/>
  </div>
</template>

<script setup>
import Alert from "./Alert.vue";
import {ref} from "vue";

const message = ref('')
</script>

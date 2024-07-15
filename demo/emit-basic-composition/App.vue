<template>
  <div>
    <input v-model="message" placeholder="Type anything"/>
    <Btn @click="alertMessage" style="margin-top: 5px"/>
  </div>
</template>

<script setup>
import Btn from "./Btn.vue";
import {ref} from "vue";

const message = ref('')

const alertMessage = () => alert(message.value)
</script>

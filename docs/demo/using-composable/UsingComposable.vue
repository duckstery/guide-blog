<template>
  <div>
    <div>
      <div>{{ message }}</div>
      <label>Nhập nội dung:</label>
      <input v-model="alertMessage" placeholder="Nhập message"/>
    </div>
    <button @click="show">Alert user</button>
  </div>
</template>

<script setup lang="ts">
import useAlert from "./alert";
import {ref} from "vue";

// Title
const message = ref('Hãy nhập nội dung vào input và nhấn nút')
// Alert
const {message: alertMessage, show} = useAlert()
</script>

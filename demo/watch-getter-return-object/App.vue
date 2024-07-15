<template>
  <div>
    <button @click="input.info.page++">Increase page by property</button>&nbsp;
    <button @click="changeInput">Increase page by changing object</button>
    <br>
    <br>
    <div>Page: {{ input.info.page }}</div>
    <div>Summary: {{ summary }}</div>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";

const input = reactive({
  info: {
    page: 0,
  }
})

const summary = ref(JSON.stringify(input))

// Only watch property "info" of "input"
watch(() => input.info, () => summary.value = JSON.stringify(input)) // [!code highlight]
// Change whole object will trigger watcher
const changeInput = () => input.info = {page: ++input.info.page} // [!code highlight]
</script>

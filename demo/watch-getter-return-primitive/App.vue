<template>
  <div>
    <input v-model="input.info.text"/>&nbsp;
    <button @click="input.info.page++">Increase page</button><br>
    <br>
    <div>Page: {{input.info.page}}</div>
    <div>Summary: {{ summary }}</div>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";

const input = reactive({
  info: {
    page: 0,
    text: 'First page'
  }
})

const summary = ref(JSON.stringify(input))

// Only watch property "text" of "input"
watch(() => input.info.text, () => summary.value = JSON.stringify(input)) // [!code highlight]
</script>

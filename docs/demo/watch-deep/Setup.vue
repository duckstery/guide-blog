<template>
  <div>
    <input v-model="input.info.text"/>&nbsp;
    <button @click="input.info.page++">Increase page</button><br>
    <br>
    <div>Summary: {{ summary }}</div>
  </div>
</template>

<script>
import {ref, reactive, watch} from "vue";

export default {
  setup() {
    const input = reactive({
      info: {
        page: 0,
        text: 'First page'
      }
    })

    const summary = ref(JSON.stringify(input))

    // Deep watch
    watch(input, () => summary.value = JSON.stringify(input)) // [!code highlight]

    return {
      input, summary
    }
  }
}
</script>

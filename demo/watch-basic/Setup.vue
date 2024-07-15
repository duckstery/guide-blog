<template>
  <div>
    <input v-model="input" type="number" placeholder="Number only"/>
    <div>Duplicate by 3: {{ result }}</div>
  </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
  setup() {
    const input = ref(0)
    const result = ref(0)
    watch(input, () => result.value = input.value * 3) // [!code highlight]

    return {input, result}
  }
}
</script>

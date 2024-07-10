<template>
  <div>
    <input v-model="input" type="number" placeholder="Number only"/>
    <div>Duplicate by 2: {{ result }}</div>
  </div>
</template>

<script>
import {ref, computed} from "vue";

export default {
  setup() {
    const input = ref(0)
    const result = computed(() => input.value * 2) // [!code highlight]

    return {input, result}
  }
}
</script>

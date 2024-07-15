<template>
  <div>
    <input v-model="input" type="number" placeholder="Number only"/>
    <div>Duplicate by 2: {{ result }}</div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";

const input = ref(0)
const result = computed(() => ({result: input.value * 2})) // [!code highlight]
</script>

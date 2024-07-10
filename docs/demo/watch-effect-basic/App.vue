<template>
  <div>
    <input v-model="a" type="number" style="width: 50px"/> +
    <input v-model="b" type="number" style="width: 50px"/> +
    <input v-model="c" type="number" style="width: 50px"/> +
    <input v-model="d" type="number" style="width: 50px"/> +
    <input v-model="e" type="number" style="width: 50px"/> =
    {{result}}
  </div>
</template>

<script setup>
import {ref, watchEffect} from "vue";

const a = ref(0)
const b = ref(0)
const c = ref(0)
const d = ref(0)
const e = ref(0)
const result = ref(0)

watchEffect(() => result.value = a.value + b.value + c.value + d.value + e.value) // [!code highlight]
</script>

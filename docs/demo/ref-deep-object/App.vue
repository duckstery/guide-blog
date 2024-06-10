<template>
  <div>
    <div>{{ deep }}</div>
    <button @click="click">Click to mutate data</button>
  </div>
</template>

<script setup>
import {ref} from "vue";

const deep = ref({
  a: 'foo'
})

const click = () => deep.value.hasOwnProperty('b')
  ? delete deep.value.b
  : deep.value.b = 'bar'
</script>

<template>
  <div>
    <div>{{ deep }}</div>
    <button @click="mutate">Click to mutate last element</button>
    <button @click="remove">Click to remove last element</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import {ref} from "vue";

const deep = ref(['foo', 'bar'])

const mutate = () => deep.value[1] = 'mutated bar'
const remove = () => deep.value.length = 1
const reset = () => deep.value = ['foo', 'bar']
</script>

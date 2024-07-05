<template>
  <div>
    <div>{{ shallow }}</div>
    <button @click="mutate">Click to mutate</button>
  </div>
</template>

<script setup>
import {shallowRef} from "vue";

const shallow = shallowRef({a: 'foo'})

const mutate = () => {
  if (shallow.value.a === 'foo') shallow.value.a = 'bar'
  else shallow.value.a = 'foo'

  alert(JSON.stringify(shallow.value))
}
</script>

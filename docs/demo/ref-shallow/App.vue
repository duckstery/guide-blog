<template>
  <div>
    <div>{{ deep }}</div>
    <button @click="mutate">Click to mutate</button>
  </div>
</template>

<script setup>
import {shallowRef} from "vue";

const deep = shallowRef({a: 'foo'})

const mutate = () => {
  if (deep.value.a === 'foo') deep.value.a = 'bar'
  else deep.value.a = 'foo'

  alert(JSON.stringify(deep.value))
}
</script>

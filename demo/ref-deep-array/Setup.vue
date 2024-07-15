<template>
  <div>
    <div>{{ deep }}</div>
    <button @click="mutate">Click to mutate last element</button>
    <button @click="remove">Click to remove last element</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const deep = ref(['foo', 'bar'])

    const mutate = () => deep.value[1] = 'mutated bar'
    const remove = () => deep.value.length = 1
    const reset = () => deep.value = ['foo', 'bar']

    return {
      deep, mutate, remove, reset
    }
  }
}
</script>

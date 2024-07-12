<template>
  <div>
    <div>{{ deep }}</div>
    <button @click="click">Click to mutate data</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const deep = ref({
      a: 'foo'
    })

    const click = () => deep.value.hasOwnProperty('b')
      ? delete deep.value.b
      : deep.value.b = 'bar'

    return {
      deep, click
    }
  }
}
</script>

<template>
  <div>
    <div>{{ shallow }}</div>
    <button @click="mutate">Click to mutate</button>
  </div>
</template>

<script>
import {shallowRef} from "vue";

export default {
  setup() {
    const shallow = shallowRef({a: 'foo'})

    const mutate = () => {
      shallow.value.a = shallow.value.a === 'foo' ? 'bar' : 'foo'

      alert(JSON.stringify(shallow.value))
    }

    return {
      shallow, mutate
    }
  }
}
</script>

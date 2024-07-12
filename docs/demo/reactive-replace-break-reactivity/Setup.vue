<template>
  <div>
    <div>{{ state }}</div>
    <br/>
    <button @click="increaseCount">Increase count</button>
    <button @click="changeState">Change state</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
// Define data
import {reactive} from "vue";

export default {
  setup() {
    let state = reactive({count: 0}) // [!code highlight]
    const oldState = state

    // reactivity connection is intact
    const increaseCount = () => state.count++
    // the above reference ({ count: 0 }) is no longer being tracked
    // (reactivity connection is lost!)
    const changeState = () => {
      state = reactive({count: 1}) // [!code highlight]
      alert(JSON.stringify(state))
    }

    const reset = () => {
      state = oldState
      state.count = 0
    }

    return {
      state, increaseCount, changeState, reset
    }
  }
}
</script>

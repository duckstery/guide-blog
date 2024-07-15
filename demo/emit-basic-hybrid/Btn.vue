<template>
  <div>
    <button @click="onClick">Alert</button>
  </div>
</template>

<script>
export default {
  emits: ['click'],

  setup(props, { emit }) {
    // Define emit
    const onClick = () => emit('click')

    return {
      onClick
    }
  }
}
</script>

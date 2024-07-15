<template>
  <div>
    <button @click="alertMessage">Alert</button>
  </div>
</template>

<script>
export default {
  setup(props) {
    const alertMessage = () => alert(props.message)

    return {
      alertMessage
    }
  }
}
</script>

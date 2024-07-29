<template>
  <div>
    <button @click="input.info.page++">Increase page by property</button>&nbsp;
    <button @click="changeInput">Increase page by changing object</button>
    <br>
    <br>
    <div>Page: {{ input.info.page }}</div>
    <div>Summary: {{ summary }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    input: {
      info: {
        page: 0,
      }
    },
    summary: '',
  }),
  watch: {
    'input.info'() {
      this.summary.value = JSON.stringify(input)
    }
  }
}
</script>

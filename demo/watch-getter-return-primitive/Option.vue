<template>
  <div>
    <input v-model="input.info.text"/>&nbsp;
    <button @click="input.info.page++">Increase page</button><br>
    <br>
    <div>Page: {{input.info.page}}</div>
    <div>Summary: {{ summary }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    input: {
      info: {
        page: 0,
        text: 'First page'
      }
    },
    summary: ''
  }),
  watch: {
    'input.info.text'() {
      this.summary.value = JSON.stringify(input)
    }
  }
}
</script>

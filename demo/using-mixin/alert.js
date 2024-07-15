const alertMixin = {
  data: () => ({
    message: ''
  }),
  methods: {
    show() {
      alert(this.message)
    }
  }
}

export default alertMixin

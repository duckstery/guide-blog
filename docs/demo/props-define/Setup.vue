<script>
export default {
  props: {
    label: String,
    height: [String, Number],
    items: {
      type: Array,
      default: () => ['item1', 'item2', 'item3'],
    }
  }
}
</script>

<script setup>
import {defineProps} from "vue";

// Define props
const props = defineProps({
  label: String,
  height: [String, Number],
  items: {
    type: Array,
    default: () => ['item1', 'item2', 'item3'],
  }
})
</script>

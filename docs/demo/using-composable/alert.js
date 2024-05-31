import {ref} from 'vue'

export default function useAlert() {
  // Data
  const message = ref('')
  // Method
  const show = () => alert(message.value)

  return {message, show}
}

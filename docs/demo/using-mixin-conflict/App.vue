<template>
  <div>
    <div>
      <div>{{ message }}</div>
      <label>Nhập nội dung:</label>
      <input v-model="message" placeholder="Nhập message"/>
    </div>
    <button @click="show">Alert user</button>
  </div>
</template>

<script lang="ts">
import alertMixin from "./alert";

export default {
  mixins: [alertMixin],

  data: () => ({ // [!code ++]
    message: 'Hãy nhập nội dung vào input và nhấn nút' // [!code ++]
  }) // [!code ++]
}
</script>

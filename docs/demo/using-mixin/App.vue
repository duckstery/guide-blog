<template>
  <div>
    <div>
      <div>Hãy nhập nội dung vào input và nhấn nút</div>
      <label>Nhập nội dung:</label>
      <input v-model="message" placeholder="Nhập message"/>
    </div>
    <button @click="show">Alert user</button>
  </div>
</template>

<script>
import alertMixin from "./alert";

export default {
  mixins: [alertMixin]
}
</script>

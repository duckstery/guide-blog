<template>
  <div>
    <div>
      <label>Message:</label>
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

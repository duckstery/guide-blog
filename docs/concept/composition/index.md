---
outline: deep
next:
  text: 'Tái sử dụng (Reusability)'
  link: '/concept/composition/reuse'
---

# Giới thiệu
Phần này sẽ nói về một số lý thuyết, khái niệm về Composition API

## Khái niệm về Composition API
Composition API là một style API để sử dụng Vue. Trước đó, chỉ có duy nhất một API là Option API.

Ví dụ về Option API
```vue
<script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
  button {
    font-weight: bold;
  }
</style>
```

Theo như Vue, Composition API sinh ra để giải quyết một số bài toán như sau"
* Cải tiến khá năng tái sử dụng
* Cải tiến khả năng tổ chức code
* Hỗ trợ type (Typescript)
* Giảm thiếu dung lượng và chi phí của sản phẩm

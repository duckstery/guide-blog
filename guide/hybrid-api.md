---
title: Kết hợp giữa Option API và Composition API
outline: deep
---

# Sử dụng `setup()`

Có thể sử dụng hỗn hợp hai loại API với nhau thông qua hook `setup()`.
:::warning CẢNH BÁO
Đây không phải là cách dùng tốt. Cách này chủ yếu hỗ trợ những component đang sử dụng Option API có thể sử dụng Composition API.
::: 

## Cú pháp

Đối với cách sử dụng này, phần `<template/>` và `<style/>` cũng sẽ không có sự khác biệt nào. Tuy nhiên, sẽ không thực hiện thêm attribute `setup` cho `<script/>`. Thay vào đó, sẽ sử dụng hook `setup()` trong Option API để sử dụng Composition API.

<<< @/demo/hybrid-api/App.vue{5-12}

Tất cả mã nguồn sử dụng Composition API sẽ được đặt trong `setup()`.

:::info LƯU Ý
Đối với `data`, `computed` hay `method` muốn sử dụng trong `template` thì buộc phải return khi sử dụng bên trong `setup()`.
:::

Hàm `setup()` sẽ được Vue cung cấp hai tham số là `props` và `context`. `props` là các thuộc tính tường minh của component. `context` (hay [Setup context](https://vuejs.org/api/composition-api-setup.html#setup-context)) sẽ bao gồm một số tài nguyên sau:
* `attrs`: Tương đương với `this.$attrs` trong Option API
* `slots`: Tương đương với `this.$slots` trong Option API
* `emit`: Tương đương với `this.$emits` trong Option API
* `expose`: Hàm để expose tài nguyên ở Vue 3

```js
export default {
  setup(props, context) {
    // Attributes (Non-reactive object, equivalent to $attrs)
    console.log(context.attrs)

    // Slots (Non-reactive object, equivalent to $slots)
    console.log(context.slots)

    // Emit events (Function, equivalent to $emit)
    console.log(context.emit)

    // Expose public properties (Function)
    console.log(context.expose)
  }
}
```

## Mục đích

Việc xuất hiện Composition API không yêu cầu các project cũ phải thực hiện thích nghi và chuyển đổi. Tuy nhiên, những project mới sẽ sử dụng Composition API và có thể (hoặc không) hỗ trợ cú pháp cho Option API nữa. Vậy nên, có thể sử dụng cách này để tạm thời hỗ trợ Composition API cho các component Option API.

Lập trình viên sẽ có thể gọi các `composable` từ bên thứ 3 tại `setup()`. Sau đó, các tài nguyên này sẽ khả dụng tại toàn bộ các hook, option, ... trong Option API.

:::warning CẢNH BÁO
Tuy nhiên, đây không phải là cách dùng khuyến khích và sẽ có một vài trở ngại như sau:
* Vốn dĩ đây là Option API, nên sẽ không tận dụng được sự tiết kiếm chi phí của Composition API.
* Các tài nguyên tạo ra ở `setup()` có thể được dùng mọi nơi ở trong Option API, nhưng ngược lại thì không.
* Sẽ bị lẫn lộn cú pháp giữa Composition API và Option API, dẫn tới việc đọc code rất khó khăn và gây ra nhiều nhầm lẫn.
:::


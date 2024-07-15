---
outline: deep
---

# `$attrs` và `$slots`

`$attrs` sẽ chứa các thuộc tính không tường mình (không được định nghĩa trong `props`). `$slots` sẽ gồm các slot được định nghĩa trong `<template>`.

## Cách sử dụng

::: code-group
<<< @/demo/attrs-and-slots/App.vue [&lt;script setup&gt;]
<<< @/demo/attrs-and-slots/Setup.vue [setup()]
:::

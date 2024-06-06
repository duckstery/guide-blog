---
outline: deep
---

# Sử dụng chuẩn Composition API 

Đây là cách sử dụng Composition API chuẩn và được khuyến khích sử dụng trong các SFCs (Single-File Components).

## Cú pháp

Phần `<template/>` và `<style/>` sẽ không có gì khác biệt khi sử dụng Composition API. Để sử dụng Composition API trong SFC, cần thực hiện thêm attribute `setup` cho thẻ `<script/>`. Hãy xem ví dụ bên dưới:

<<< @/demo/pure-composition-api/App.vue{3}

Sau khi thêm `setup` thì đã có thể bắt đầu sử dụng. Sẽ không cần `export default {}` mà sẽ lập trình như những file Javascript thông thường. Mã sẽ chạy từ trên xuống và được tổ chức tùy theo ý của người lập trình.

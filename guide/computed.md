---
title: Định nghĩa data
outline: deep
---

# Computed

Tài nguyên này được định nghĩa bằng option `computed` trong Option API. Phần này sẽ hướng dẫn chi tiết về việc định nghĩa `computed` trong Composition API.

## API

<!--@include: @/api/computed.md{2,}-->

:::warning LƯU Ý
Cho dù trả về bất cứ kiểu dữ liệu gì trong `getter` của `computed` thì trả về của `computed()` cũng là một kiểu `Ref`. Vì vậy, các thao tác get, set (nếu có) đối với `computed` cũng sẽ cần phải thông qua `.value`.
:::

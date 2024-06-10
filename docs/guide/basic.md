---
title: Cơ bản về Composition API
outline: deep
---

# Cơ bản

## Vòng đời
Dưới đây là sơ đồ vòng đời của Vue 3.

<p align="center">
<img alt="" src="/lifecycle.png"/>
</p>

Vòng đời này không quá khác biệt so với vòng đời của Vue 2. Điểm khác biệt cần lưu ý nhất đó là có thêm giai đoạn `setup` trước khi giai đoạn `beforeCreate` diễn ra.

Đây là điểm bắt đầu cho Composition API. Tất cả mã Composition API sẽ được thực hiện ở đây. Có hai cách để sử dụng:
* `<script setup>`: Sử dụng thuần Composition API
* `setup()`: Sử dụng hỗn hợp Composition API và Option API

::: info LƯU Ý 
Trong quá trình sử dụng, sẽ có một số điểm đặc biệt như sau:
* Không thể sử dụng `this` (giá trị là `undefined`)
* Vue sẽ cung cấp một số helper để hỗ trợ định nghĩa và tạo ra các tài nguyên tương đương với Option API.
:::
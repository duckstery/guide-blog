---
outline: deep
---

# Giới thiệu
Phần này sẽ sơ lược về vòng đời của Vue khi có Composition API.

## Vòng đời
Dưới đây là sơ đồ vòng đời của Vue 3.

<p align="center">
<img alt="" src="/lifecycle.png"/>
</p>

Vòng đời này không quá khác biệt so với vòng đời của Vue 2. Điểm khác biệt cần lưu ý nhất đó là có giai đoạn `setup` trước khi sự kiện `beforeCreate` diễn ra. Đây là nơi thực hiện Composition API

Ví dụ về Option API

<<< @/demo/option-api-example/App.vue

Theo như Vue, Composition API sinh ra để giải quyết một số bài toán như sau"
* Cải tiến khá năng tái sử dụng
* Cải tiến khả năng tổ chức code
* Hỗ trợ type (Typescript)
* Giảm thiếu dung lượng và chi phí của sản phẩm

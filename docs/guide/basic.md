---
outline: deep
---

# Cơ bản

## Vòng đời
Dưới đây là sơ đồ vòng đời của Vue 3.

<p align="center">
<img alt="" src="/lifecycle.png"/>
</p>

Vòng đời này không quá khác biệt so với vòng đời của Vue 2. Điểm khác biệt cần lưu ý nhất đó là có thêm giai đoạn `setup` trước khi giai đoạn `beforeCreate` diễn ra.

Đây là điểm bắt đầu cho Composition API. Tất cả mã Composition API sẽ được thực hiện ở đây. Có hai cách để thực hiện:
* Sử dụng chuẩn Composition API
* Kết hợp giữa Composition API và Option API

::: info LƯU Ý 
Trong quá trình sử dụng, sẽ có một số điểm đặc biệt như sau:
* Không thể sử dụng `this` (giá trị là `undefined`)
* Vue sẽ cung cấp cho lập trình viên một số helper để hỗ trợ. Lập trình viên sẽ sử dụng helper để định nghĩa và tạo ra các tài nguyên tương đương với Option API.
:::
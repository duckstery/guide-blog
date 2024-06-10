---
outline: deep
---

# Props và emits

Props và emits là 2 tài nguyên đặc biệt do có sự khác biệt trong việc định nghĩa và sử dụng giữa `<script setup>` và `setup()`.

## Props

Props là tài nguyên giúp khai báo các thuộc tính tường minh của component. Sau khi khai báo, có thể truy cập các thuộc tính tường minh thông qua props. Còn các thuộc tính không tường minh (không được khai báo trong props) sẽ cần phải truy cập thông qua `$attr`.

### Sử dụng trong `<script setup>`

Để tạo ra props, cần sử dụng composable `defineProps`.
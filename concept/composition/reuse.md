---
title: Tính chất của CompositionAPI
outline: deep
---

# Tái sử dụng
Composition API sẽ cải thiện khả năng tái sử dụng của Vue 3 và thay thế mixin ở Vue 2.

## Option API và mixin
Tại Vue 2, có thể sử dụng `mixin` nhằm tái sử dụng chức năng trong component. Dưới đây là một ví dụ nhỏ, `mixin` sau sẽ có thể thực hiện alert user thông qua hàm `show()`.

::: code-group
<<< @/demo/using-mixin/alert.js
:::

Component sau sẽ sử dụng `mixin` này nhằm alert user nội dung trong `message`.

::: code-group
<<< @/demo/using-mixin/App.vue
:::

<DemoBlock>
<UsingMixin/>
</DemoBlock>

::: warning CẢNH BÁO
Mặc dù tiện lợi, nhưng `mixin` tiềm ẩn một số vấn đề sau:
* Dễ gây xung đột
* Khó truy vết
* Khả năng tái sử dụng tương đối hạn chế
:::

### Dễ gây xung đột
khi áp dụng `mixin` vào component, các option của `mixin` sẽ được merge vào component. Nếu component có tồn tại `data`, `computed`, ... có cùng tên thì chúng sẽ bị merge và dùng chung.

Với ví dụ như bên trên, giả sử ở `App.vue`, thêm `data.message` và thay đổi nội dung của tiêu đề thành <span v-pre>`{{message}}`</span>.

::: code-group
<<< @/demo/using-mixin-conflict/App.vue{4}
:::

<DemoBlock>
<UsingMixinConflict/>
</DemoBlock>

Có thể thấy, nội dung của input ngay lập tức thay đổi giống với tiêu đề. Và khi thay đổi input, tiêu đề cũng thay đổi theo. Điều này cho thấy, cả component và `mixin` đều đang dùng chung một data là `message`.

### Khó truy vết

Toàn bộ tài nguyên của `mixin` sẽ có thể được sử dụng bởi component và ngược lại. Thậm chí các `mixin` có thể sử dụng lẫn tài nguyên của nhau khi merge. Điều này dẫn tới việc truy vết gốc gác của các tài nguyên này là rất khó khăn

### Khả năng tái sử dụng tương đối hạn chế

Sự xung đột khi sử dụng `mixin` cũng sẽ cản trở tính tái sử dụng. Bên cạnh đó, `mixin` cũng không cho phép truyền tham số để thay đổi logic của nó.

## Composition API

Composition API có thể giải quyết các trở ngại của `mixin` bằng cách sử dụng các `composable`. Có thể hiểu `composable` là một hàm trả về các tài nguyên được xây dựng bằng Composition API.

Dưới đây sẽ là demo cho việc chuyển đổi qua sử dụng `composable`. Ý nghĩa và cú pháp sẽ được hướng dẫn ở các phần sau.

::: code-group
<<< @/demo/using-composable/alert.js
<<< @/demo/using-composable/App.vue
:::

<DemoBlock>
<UsingComposable/>
</DemoBlock>

### Linh hoạt hóa tên tài nguyên

Ở demo trên, Composition API đã giải quyết được vấn đề xung đột tên tài nguyên. Có thể tùy ý thay đổi tên tài nguyên trả về của `composable` tại vị trí sử dụng. Còn đối với `mixin`, có thể đổi tên ở hai vị trí sau:
* Bên trong `mixin`: Không quá phù hợp nếu `mixin` thuộc về bên thứ 3 hoặc với số lượng `mixin` rất lớn, phải yêu cầu lập trình viên kiểm tra thủ công xem có trùng tên với `mixin` hoặc component khác không.
* Thay đổi tên tài nguyên gây xung đột tại component: Cách này phù hợp, tuy nhiên vẫn gây trở ngại do buộc phải thay đổi tên tài nguyên của component cho dù có phù hợp ngữ cảnh.

::: info THÔNG TIN
Composable cho phép tối đa hóa sự linh hoạt trong việc đặt tên tài nguyên.
:::

### Truy vết dễ dàng

Việc truy vết của `composable` sẽ cực kỳ dễ dàng do không gây ra xung đột tên tài nguyên.

### Tối đa hóa khả năng tái sử dụng

Do bản chất `composable` là một hàm nên có thể truyền tham số từ component vào bên trong. Việc truyền tham số sẽ cho phép định nghĩa nhiều logic cho `composable` và giúp nó phù hợp với nhiều ngữ cảnh hơn. Sử dụng được ở nhiều ngữ cảnh hơn đồng nghĩa với cải thiện tính tái sử dụng của nó.


<script setup>
import {default as UsingMixin} from "../../demo/using-mixin/App.vue";
import {default as UsingMixinConflict} from "../../demo/using-mixin-conflict/App.vue";
import {default as UsingComposable} from "../../demo/using-composable/App.vue";
</script>

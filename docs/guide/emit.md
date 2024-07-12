---
outline: deep
---

# Emit

Emit là hành vi "phát" sự kiện từ component con ra component cha. Ở Vue 3, để sử dụng emit một cách ổn định nhất thì sẽ cần phải định nghĩa sự kiện có thể emit, sau đó mới có thể thực hiện emit sự kiện.

:::info THÔNG TIN
Đối với Option API, sẽ thực hiện định nghĩa sự kiện tại option `emits`
:::

## Cách định nghĩa

Để sự dụng `emit` thì trước tiên cần định nghĩa các sự kiện mà component có thể emit.

::: code-group
<<< @/demo/emit-define/App.vue [&lt;script setup&gt;]
<<< @/demo/emit-define/Setup.vue [setup()]
:::

Đối với kiểu thông qua `setup()` thì việc định nghĩa các sự kiện không có khác biệt so với Option API. Chính xác hơn đó là định nghĩa `emits` bằng Option API.

Còn đối với `<script setup>` thì cần phải sử dụng helper `defineEmits()`. Tham số đầu vào sẽ giống với đầu vào của `emits` trong Option API.

:::warning LƯU Ý
`defineEmits` chỉ có thể được dùng bên trong `<script setup>`
:::


## Cách sử dụng

### `<script setup>`

Hàm `defineEmits()` sẽ trả về một hàm và sẽ được sử dụng để emit sự kiện.

::: code-group
<<< @/demo/emit-basic-composition/App.vue
<<< @/demo/emit-basic-composition/Btn.vue
:::

<DemoBlock>
<EmitBasicComposition/>
</DemoBlock>

### `setup()`

Đối với cách dùng này, có thể sử dụng `props` bằng cách cung cấp tham số đầu tiên cho `setup()`.

::: code-group
<<< @/demo/emit-basic-hybrid/App.vue
<<< @/demo/emit-basic-hybrid/Btn.vue
:::

<DemoBlock>
<EmitBasicHybrid/>
</DemoBlock>

<script setup>
import {default as EmitBasicComposition} from "../demo/emit-basic-composition/App.vue";
import {default as EmitBasicHybrid} from "../demo/emit-basic-hybrid/App.vue";
</script>
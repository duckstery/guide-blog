---
outline: deep
---

# Props

Props là các thuộc tính tường mình của component được định nghĩa thông qua option `props`.

## Cách định nghĩa

Tùy vào cách sử dụng Composition API mà sẽ có cách định nghĩa `props` khác nhau. Tuy nhiên việc định nghĩa thông tin các phần tử có trong `props` thì vẫn sẽ giống nhau.

::: code-group
<<< @/demo/props-define/App.vue [&lt;script setup&gt;]
<<< @/demo/props-define/Setup.vue [setup()]
:::

Đối với kiểu thông qua `setup()` thì việc định nghĩa `props` không có khác biệt so với Option API. Chính xác hơn đó là định nghĩa `props` bằng Option API.

Còn đối với `<script setup>` thì cần phải sử dụng helper `defineProps()`. Tham số đầu vào sẽ giống với đầu vào của `props` trong Option API.

:::warning LƯU Ý
`defineProps` chỉ có thể được dùng bên trong `<script setup>`
:::


## Cách sử dụng

### `<script setup>`

Hàm `defineProps()` sẽ trả về một đối tượng chính là props của component. Đối tượng này là một `Proxy` (tương tự `reactive()`) nên nó sẽ reactive.

::: code-group
<<< @/demo/props-basic-composition/App.vue
<<< @/demo/props-basic-composition/Alert.vue
:::

<DemoBlock>
<PropsBasicComposition/>
</DemoBlock>

### `setup()`

Đối với cách dùng này, có thể sử dụng `props` bằng cách cung cấp tham số đầu tiên cho `setup()`.

::: code-group
<<< @/demo/props-basic-hybrid/App.vue
<<< @/demo/props-basic-hybrid/Alert.vue
:::

<DemoBlock>
<PropsBasicHybrid/>
</DemoBlock>

<script setup>
import {default as PropsBasicComposition} from "../demo/props-basic-composition/App.vue";
import {default as PropsBasicHybrid} from "../demo/props-basic-hybrid/App.vue";
</script>
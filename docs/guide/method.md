---
title: Định nghĩa data
outline: deep
---

# Methods

Được định nghĩa bằng option `methods` trong Option API.

## Cơ bản

Đối với `methods` thì sẽ không có nhiều thay đổi. Việc định nghĩa `methods` sẽ y như định nghĩa một hàm cơ bản trong JavaScript. Hãy xem ví dụ bên dưới:

::: code-group
<<< @/demo/methods-basic/App.vue [&lt;script setup&gt;]
<<< @/demo/methods-basic/Setup.vue [setup()]
:::

<DemoBlock>
<MethodsBasic/>
</DemoBlock>

<script setup>
import {default as MethodsBasic} from "../demo/methods-basic/App.vue";
</script>
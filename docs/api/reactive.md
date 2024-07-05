# reactive

```ts
function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
```

Nhận đối tượng khởi tạo và trả về một reactive proxy trỏ về đối tượng đã nhận.

### Tham số
<br/>

#### `target`

Đối tượng khởi tạo cho reactive proxy.

* Type: `T`
* Required: `true`

## Cách sử dụng

::: code-group
<<< @/demo/reactive-basic/App.vue [&lt;script setup&gt;]
<<< @/demo/reactive-basic/Setup.vue [setup()]
:::

<DemoBlock>
<ReactiveSimple/>
</DemoBlock>

<script setup>
import {default as ReactiveSimple} from "../demo/reactive-basic/App.vue";
</script>
## API
```ts
function ref<T>(value: T): Ref<UnwrapRef<T>>
```

Nhận một giá trị và trả về đối tượng ref có thuộc tính `.value` trỏ tới giá trị đã nhận.

### Kiểu trả về
```ts
interface Ref<T> {
  value: T
}
```

### Tham số
<br/>

#### `value`
Giá trị khởi tạo cho reactive data (state).

* Type: `T`
* Required: `true`

## Cách sử dụng

::: code-group
<<< @/demo/ref-basic/App.vue [&lt;script setup&gt;]
<<< @/demo/ref-basic/Setup.vue [setup()]
:::

<DemoBlock>
<RefSimple/>
</DemoBlock>

<script setup>
import {default as RefSimple} from "../demo/ref-basic/App.vue";
</script>
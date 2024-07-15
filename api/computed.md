# computed

```ts
// read-only
function computed<T>(
  getter: (oldValue: T | undefined) => T,
  // see "Computed Debugging" link below
  debuggerOptions?: DebuggerOptions
): Readonly<Ref<Readonly<T>>>

// writable
function computed<T>(
  options: {
    get: (oldValue: T | undefined) => T,
    set: (value: T) => void
  },
  debuggerOptions?: DebuggerOptions
): Ref<T>
```

### Tham số
<br/>

#### `getter`

Hàm tính toán và trả về kết quả của `computed`.

* Type: `T | undefined`
* Required: `true`

#### `options`

Nhận vào một đối tượng gồm hai thuộc tính `getter` và `setter`. `setter` sẽ là hàm tính toán và thay đổi giá trị.

* Type:
```ts
{
  get: (oldValue: T | undefined) => T,
  set: (value: T) => void
}
```

#### `debuggerOptions`

Hỗ trợ debug cho `computed`. Chi tiết xem thêm [tại đây](https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging)

* Type: `DebuggerOptions`

## Cách sử dụng

::: code-group
<<< @/demo/computed-basic/App.vue [&lt;script setup&gt;]
<<< @/demo/computed-basic/Setup.vue [setup()]
:::

<DemoBlock>
<ComputedSimple/>
</DemoBlock>

<script setup>
import {default as ComputedSimple} from "../demo/computed-basic/App.vue";
</script>
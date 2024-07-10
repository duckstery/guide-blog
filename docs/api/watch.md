# computed

```ts
// watch
function watch<T>(
  source: WatchSource<T> | WatchSource<T>[],
  callback: WatchCallback<T> | WatchCallback<T[]>,
  options?: WatchOptions
): StopHandle


// WatchSource
type WatchSource<T> = 
  | Ref<T> // ref
  | (() => T) // getter
  | T extends object ? T : never // reactive object

// WatchCallback
type WatchCallback<T> = (
  value: T,
  oldValue: T,
  onCleanup: (cleanupFn: () => void) => void
) => void

// WatchOptions
interface WatchOptions extends WatchEffectOptions {
  immediate?: boolean // default: false
  deep?: boolean // default: false
  flush?: 'pre' | 'post' | 'sync' // default: 'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
  once?: boolean // default: false (3.4+)
}
```

### Tham số
<br/>

#### `source`

Nguồn dữ liệu cần theo dõi. Nếu cung cấp `array` thì sẽ theo dõi nhiều nguồn cùng một lúc.

* Type: `WatchSource<T> | WatchSource<T>[]`
* Required: `true`

#### `callback`

Hàm xử lý được gọi khi nguồn dữ liệu đang theo dõi bị thay đổi. Sẽ được cung cấp `array` nếu theo dõi nhiều nguồn cùng một lúc.

* Type: `WatchCallback<T> | WatchCallback<T[]>`
* Required: `true`

#### `options`

Các tùy chọn hành vi của `watch`.

* Type: `WatchOptions`

## Cách sử dụng

::: code-group
<<< @/demo/watch-basic/App.vue [&lt;script setup&gt;]
<<< @/demo/watch-basic/Setup.vue [setup()]
:::

<DemoBlock>
<WatchSimple/>
</DemoBlock>

<script setup>
import {default as WatchSimple} from "../demo/watch-basic/App.vue";
</script>
---
title: Định nghĩa data
outline: deep
---

# Watcher

Watcher được định nghĩa bằng option `watch` trong Option API. Phần này sẽ hướng dẫn chi tiết về việc định nghĩa `watch` trong Composition API.

## API

<!--@include: @/api/watch.md{2,}-->

## Deep Watchers

Khi truyền một `reactive` cho `watch()` thì mặc định sẽ ngầm tạo ra một deep watcher. Tức là chỉ cần thay đổi bất kỳ property nào thì watcher này cũng sẽ kích hoạt.

::: code-group
<<< @/demo/watch-deep/App.vue
:::

<DemoBlock>
<WatchDeep/>
</DemoBlock>

Ngoài trường hợp trên, `watch()` sẽ tạo ra một watch bình thường.

## Getter

Ngoài việc cung cấp một `ref()` hay `reactive()` cho `watch()`, còn có thể cung cấp một getter. Getter này sẽ trả về một property của `ref()` hoặc `reactive()`. Điều này cho phép có thể watch một property bất kỳ thay vì phải watch cả object.

::: code-group
<<< @/demo/watch-getter-return-primitive/App.vue
:::

<DemoBlock>
<WatchGetterReturnPrimitive/>
</DemoBlock>

Nếu getter trả về một property có kiểu object, thì chỉ khi thay thế một object mới thì watcher mới được kích hoạt.

::: code-group
<<< @/demo/watch-getter-return-object/App.vue
:::

<DemoBlock>
<WatchGetterReturnObject/>
</DemoBlock>

## `watchEffect()`

Có thể hiểu đại khái, `watchEffect()` hoạt động giống với `computed()` nhưng:
* Không trả về dữ liệu
* Cho phép có side effect

Sẽ có một vài trường hợp cần sử dụng giá trị mới của nguồn theo dõi ngay khi phát hiện. Ví dụ, xem đoạn code bên dưới sẽ gọi API ngay khi `todoId` thay đổi:
```js
const todoId = ref(1)
const data = ref(null)

watch(
  todoId,
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    data.value = await response.json()
  },
  { immediate: true }
)
```

Có thể thấy, khi `todoId` thay đổi, sẽ gọi API tới `jsonplaceholder` nhằm lấy dữ liệu mới cho `data`. Có thể rút gọn ví dụ trên bằng `watchEffect` như sau:
```js
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
```

Sau khi rút gọn, có thể thấy sẽ không cần định nghĩa nguồn là `todoId` và `immediate: true`. Giống với `computed()`, `watchEffect()` sẽ truy vết thay đổi bất kỳ tài nguyên nào có bên trong nó. Ở ví dụ trên, chỉ theo dõi duy nhất một tài nguyên là `todoId`. Cũng vì thế, lợi ích có được sẽ tương đối nhỏ. Tuy nhiên, nếu có nhiều tài nguyên hơn cần theo dõi thì `watchEffect()` sẽ loại bỏ được trở ngại trong việc phải quản lý thủ công một danh sách dài các tài nguyên. 

Ngoài ra, việc theo dõi các cấu trúc dữ liệu lồng nhau trong `watchEffect()` cũng có thể sẽ hiệu quả hơn là một deep watcher. Bởi vì nó sẽ chỉ theo dõi các thuộc tính được sử dụng trong callback thay vì phải theo dõi toàn bộ.

Dưới đây là một ví dụ về việc sử dụng `watchEffect()` để theo dõi 5 `Ref`, sau đó tính tổng của chúng

::: code-group
<<< @/demo/watch-effect-basic/App.vue
:::

<DemoBlock>
<WatchEffectBasic/>
</DemoBlock>

<script>
import {default as WatchDeep} from "../demo/watch-deep/App.vue";
import {default as WatchGetterReturnPrimitive} from "../demo/watch-getter-return-primitive/App.vue";
import {default as WatchGetterReturnObject} from "../demo/watch-getter-return-object/App.vue";
import {default as WatchEffectBasic} from "../demo/watch-effect-basic/App.vue";
</script>
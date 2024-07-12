---
title: ref() và reactive() nâng cao
outline: deep
---

# Nâng cao

Một số vấn đề nâng cao cho `ref()` và `reactive()`.

## `ref()` hay `reactive()`

Như đã đề cập, về cơ bản, khi sử dụng `ref()` với dữ liệu đầu vào không phải là kiểu nguyên thủy thì `ref()` sẽ sử dụng `reactive()`. Điều này làm cho `ref()` có thể được sử dụng cho mọi trường hợp, mọi kiểu dữ liệu.

Ngoài ra, `reactive()` có một số vấn đề mà ở đó, `ref()` có thể giải quyết được. Những vấn đề này không hẳn là nhược điểm, mà do vốn dĩ `reactive()` sinh ra không phải để thay thế `ref()`. Đây không phải là hai cách dùng đối trọng nhau.

Một số vấn đề của `reactive()` có thể kể đến như sau:

### Giới hạn kiểu dữ liệu

`reactive()` chỉ nhận giá trị khởi tạo ngoài kiểu nguyên thủy. Việc cung cấp giá trị khởi tạo thuộc kiểu nguyên thủy sẽ gây ra lỗi.

### Thay thế toàn bộ đối tượng

`Proxy` chỉ reactive khi thực hiện thay đổi thuộc tính. Vì thế giả sử cần gán biến bằng một đối tượng khác, cần thực hiện thay đổi từng thuộc tính một. Ví dụ, nếu thực hiện code như bên dưới thì sẽ bị mất tính phản ứng:

::: code-group
<<< @/demo/reactive-replace-break-reactivity/App.vue [&lt;script setup&gt;]
<<< @/demo/reactive-replace-break-reactivity/Setup.vue [setup()]
:::

<DemoBlock>
<ReactiveReplaceBreakReactivity/>
</DemoBlock>

Khi nhấn `Increase count`, có reactive và render lại kết quả mới. Tuy nhiên, khi click `Change state`, không có reactive và không render lại kết quả mặc dù kết quả đã thay đổi. Không những thế, nhấn `Increase count` sau đó cũng sẽ không có reactive do tính phản ứng đã mất.

Giả sử, `state` không chỉ có `.count` mà có tới hàng chục, hàng trăm thuộc tính, vậy thì việc thay đổi từng cái từng cái một là không ổn. 

Ngoài ra, việc sử dụng `Proxy` cho `v-model` cũng sẽ gây ra tình trạng như tương tự. Bản chất của `v-model` sẽ thay thế giá trị của đối tượng được bind (ở đây chính là `Proxy`). Việc này sẽ làm cho đối tượng tham chiếu tới một `object` khác mà không phải là `Proxy` lúc đầu và dẫn tới phá vỡ tính phản ứng.

Đối với `Ref`, do sử dụng thông qua `.value` nên có thể dễ dàng thay thế một đối tượng mới. Và do mặc định nếu truyền `Ref` vào `v-model`, Vue sẽ hiểu là làm việc thông qua `.value` nên cũng sẽ không gây ra tình trạng mất tính phản ứng. Hãy xem lại ví dụ bên trên nhưng thực hiện bằng `ref()`:

::: code-group
<<< @/demo/ref-replace-keep-reactivity/App.vue [&lt;script setup&gt;]
<<< @/demo/ref-replace-keep-reactivity/Setup.vue [setup()]
:::

<DemoBlock>
<RefReplaceKeepReactivity/>
</DemoBlock>


### Không thân thiện với destructuring

Khi thực hiện destructure thuộc tính có kiểu nguyên thủy của một reactive object (hay chỉ truyền thuộc tính đó vào một hàm) sẽ làm mất tính phản ứng. Ví dụ như đoạn code bên dưới:

::: code-group
<<< @/demo/reactive-destructuring-break-reactivity/App.vue [&lt;script setup&gt;]
<<< @/demo/reactive-destructuring-break-reactivity/Setup.vue [setup()]
:::

<DemoBlock>
<ReactiveDestructuringBreakReactivity/>
</DemoBlock>

:::tip THÔNG TIN
Vì vậy, nếu **KHÔNG** khuyến khích sử dụng `ref()` nếu không bắt buộc sử dụng `reactive()`.
:::

## Unwrap

Khi một `Ref` bị unwrap thì sẽ không còn và không cần phải truy cập thông qua `.value` nữa.

### Khi set `Ref` cho thuộc tính của `reactive()`

`Ref` sẽ tự động bị unwrap khi bị truy cập hoặc điều chỉnh khi đang là một thuộc tính của `reactive()`. Xem thêm ở ví dụ bên dưới
::: code-group
<<< @/demo/ref-unwrap/App.vue [&lt;script setup&gt;]
<<< @/demo/ref-unwrap/Setup.vue [setup()]
:::
:::

<DemoBlock>
<RefUnwrap/>
</DemoBlock>

Ở ví dụ trên, set `count` là phần tử bên trong `state` (một `reactive()`). Thông thường, nếu truy cập `count` thì cần thông qua `.value` giống như hàm `increaseCount()`. Tuy nhiên, sẽ không cần nếu truy cập thông qua `state`.

Ngoài ra, có thể thấy cả hai có sự liên kết khi mà thay đổi một trong hai thì cái còn lại cũng bị thay đổi theo.

### Sẽ không unwrap khi `Ref` là phần tử của `array` hoặc `collection`

Không giống như `reactive()`, sẽ không unwrap nếu `Ref` là phần tử của `array` hoặc kiểu `collection` như `Map`. Và vì không unwrap nên sẽ cần truy cập thông qua `.value` như đoạn mã bên dưới.

```ts
const books = reactive([ref('Vue 3 Guide')])
// need .value here
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// need .value here
console.log(map.get('count').value)
```

<script setup>
import {default as ReactiveReplaceBreakReactivity} from "../demo/reactive-replace-break-reactivity/App.vue";
import {default as RefReplaceKeepReactivity} from "../demo/ref-replace-keep-reactivity/App.vue";
import {default as ReactiveDestructuringBreakReactivity} from "../demo/reactive-destructuring-break-reactivity/App.vue";
import {default as RefUnwrap} from "../demo/ref-unwrap/App.vue";
</script>
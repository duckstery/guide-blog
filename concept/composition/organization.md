---
title: Tính chất của CompositionAPI
outline: deep
---

# Tổ chức mã nguồn
Composition API sẽ hỗ trợ việc tổ chức mã nguồn linh hoạt hơn rất nhiều.

## Option API
Đối với Option API, lập trình viên sẽ thực hiện sắp xếp chương trình của họ theo loại tài nguyên (data, computed, method, ...). Mỗi loại tài nguyên sẽ có một chức năng nhất định. Với cách tổ chức này, những người mới sẽ dễ dàng tiếp cận với công cụ hơn. Tuy nhiên, việc tổ chức này sẽ cực kỳ không tốt cho các dự án lớn.

Khi dự án càng phình to, một trang hay thậm chí một component sẽ chứa rất nhiều tính năng khác nhau. Mỗi tính năng sẽ cần một tổ hợp tài nguyên để có thể thực hiện được. Như vậy, với Option API, lập trình viên sẽ cần phân bổ tài nguyên của tính năng đó "khắp nơi".

Giả sử, có một component quản lý thư mục ([xem mã nguồn file ở đây](https://github.com/vuejs/vue-cli/blob/a09407dd5b9f18ace7501ddb603b95e31d6d93c0/packages/@vue/cli-ui/src/components/folder/FolderExplorer.vue#L198-L404)). Component này sẽ có một số tính năng như sau:
* <span style="background-color: #FFCACB">&nbsp;&nbsp;&nbsp;</span> Theo dõi trạng thái thư mục hiện tại và hiển thị nội dung của nó
* <span style="background-color: #D2CCFF">&nbsp;&nbsp;&nbsp;</span> Xử lý điều hướng thư mục (mở, đóng, làm mới, ...)
* <span style="background-color: #FFC9F2">&nbsp;&nbsp;&nbsp;</span> Xử lý tạo thư mục mới
* <span style="background-color: #FCE5C6">&nbsp;&nbsp;&nbsp;</span> Chỉ hiển thị các thư mục yêu thích
* <span style="background-color: #BEFFF4">&nbsp;&nbsp;&nbsp;</span> Hiện/Ẩn các thư mục ẩn
* <span style="background-color: #C2F2CB">&nbsp;&nbsp;&nbsp;</span> Xử lý việc thay đổi thư mục làm việc hiện tại

Với mỗi tính năng, sẽ đặt một màu sắc nhất định. Mỗi dòng code thuộc tính năng này sẽ được tô màu nên tương ứng. Như vậy ta sẽ có đoạn code được sắp xếp như sau.
<p align="center">
<img alt="" src="/folder-explorer-option-api.png"/>
</p>

Về mặt tài nguyên, file được tổ chức rất tốt, tuy nhiên về mặt logic, file tổ chức cực kỳ lộn xộn. Các tính năng nằm lẫn lộn lẫn nhau và tạo ra chi phí rất lớn khi bảo trì. Và khi file có nhiều nội dung hơn, nhiều người thao tác hơn, chi phí cũng sẽ tăng theo rất nhiều.

## Composition API

Cũng là component đó, nhưng Composition API đã xử lý được bài toán của Option API cực kỳ tốt.
<p align="center">
<img alt="" src="/folder-explorer-option-vs-composition.png"/>
</p>

Đoạn mã bên phải là cơ cấu tổ chức mã nguồn do Composition API làm được. Với việc sắp xếp này, có thể dễ dàng bảo trì đơn lẻ các tính năng. Ngoài ra, việc di chuyển các nhóm logic ra file ngoài sẽ dễ dàng hơn.

---
outline: deep
---

# Giới thiệu
Composition API sẽ hỗ trợ tốt Typescript. Đồng thời giảm thiểu chi phí sản xuất.

## Typescript
Typescript là một phiên bản nâng cấp của Javascript. Nói cách khác thì nó là Javascript cho phép định nghĩa kiểu dữ liệu.

Theo thời gian, các lập trình viên dần áp dụng Typescript do nó cải thiện trải nghiệm lập trình. Option API không được thiết kế dựa trên mindset về định nghĩa dữ liệu. Vì thế, việc áp dụng Typescript cho Option API sẽ rất khó khăn.

## Giảm thiểu chi phí
Mã viết bằng Composition API sẽ thân thiện cho quá trình thu nhỏ sản phẩm (minification) so với Option API.

## Mở rộng
Với cấu trúc phân bổ theo loại tài nguyên của Option API, nó giúp cho lập trình viên "nghĩ ít hơn" khi tạo ra component. Đồng thời, việc tiếp cận với Option API sẽ đơn giản hơn rất nhiều.

Composition API phá bỏ cấu trúc vốn có của Option API. Đồng nghĩa với việc Composition API sẽ phức tạp hơn và cần "nghĩ nhiều hơn" Bù lại, nó cho phép lập trình viên soạn mã giống như viết Javascript thông thường. Điều đó có nghĩa là sẽ có thể áp dụng bất kỳ thói quen tổ chức tốt nhất của Javascript để viết Composition API.

Mặc dù Composition API tốt hơn, tuy nhiên vendor của Vue tuyên bố không có kế hoạch loại bỏ Option API ([xem thêm ở đây](https://vuejs.org/guide/extras/composition-api-faq.html#will-options-api-be-deprecated)). Vì vậy, với những ai yêu thích Option API, có thể tiếp tục với phong cách này.
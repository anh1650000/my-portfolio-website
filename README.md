# Phạm Duy Anh — Vue 3 Portfolio

Portfolio SPA song ngữ của **Phạm Duy Anh**, xây dựng bằng Vue 3 và Vite. Nội dung, component và hiệu ứng được tách riêng để dễ phát triển lâu dài.

## Công nghệ

- Vue 3 Composition API
- Vite
- CSS thuần với responsive layout và motion
- Data-driven sections cho kỹ năng, dự án, hành trình và quy trình

## Chạy local

```powershell
npm install
npm run dev
```

Vite chạy tại `http://127.0.0.1:4173`.

## Build production

```powershell
npm run build
npm run preview
```

Thư mục deploy là `dist/`.

## Cấu trúc

```text
src/
├── components/          # Các section và layout component
├── composables/         # Logic dùng chung, hiện có i18n
├── data/                # Hồ sơ, dự án, kỹ năng và bản dịch
├── styles/main.css      # Design system và responsive styles
├── App.vue              # Composition của toàn bộ trang
└── main.js              # Vue entry point
```

Để thêm dự án hoặc kỹ năng, chỉnh `src/data/portfolio.js`. Nội dung EN/VI nằm trong `src/data/translations.js`.

Mỗi dự án đã có sẵn các trường mở rộng:

```js
liveDemoUrl: "",
videoDemoUrl: "",
coverImage: "",
duration: "",
teamSize: "",
responsibilities: [],
outcomes: [],
```

Các trường trống không hiển thị chi tiết rỗng trên giao diện. Link demo và video sẽ hiện tự động sau khi được điền.

Để bật nút tải CV:

1. Thêm PDF vào `public/cv/pham-duy-anh-cv.pdf`.
2. Đặt `resumeUrl: "/cv/pham-duy-anh-cv.pdf"` trong `src/data/portfolio.js`.

## Deploy với tên miền riêng

### Cloudflare Pages / Netlify

- Build command: `npm run build`
- Output directory: `dist`
- Primary domain: `www.phmdanh.id.vn`.
- Giữ `phmdanh.id.vn` làm apex domain và redirect sang `www` (cấu hình hiện tại trả về HTTP 307).

File `public/_redirects` đã cấu hình fallback về `index.html` cho SPA.

### Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` đã chứa rewrite để hỗ trợ route phía client trong tương lai.

### Nginx

Trỏ document root vào thư mục `dist` và dùng fallback:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

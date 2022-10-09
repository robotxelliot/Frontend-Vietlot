yarn create next-app .
yarn run dev
copy prettier
new folder components => Header.jsx
yarn add react react-dom moralis-v1 react-moralis
 // Khong dung --dev for production
 Tai tailwind postcss cho nextjs
 De connect wallet hoat dong can vao file backend chay hardhat node
 yarn add magic-sdk
 Quay lai file backend, vao file helper-config tao 2 bien constant contractaddress va abi sau do vao deploy folder tao 02-update-front-end.js
 trong file nay khi deploy se xuat ra contract address va abi vao folder constant trong front end project

tao folder constant trong front project chua address va abi de khi deploy, thong tin se duoc ghi vao folder nay. 2 file chua empty phan tu {}

tao file index.js de export du lieu cho loterry entrance import
Luu y khi enterVietlot ma tao loi nonce thi reset lai account
vao project back end tao file scripts mockoffchain de test sau do chay cau lenh :
yarn hardhat run scripts/mockOffchain.js --network localhost
de hien thi nguoi thang cuoc


-> yarn build
-> yarn next export -> out folder (pure static code use for ipfs)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

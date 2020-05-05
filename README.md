# クライアント Next.js + TypeScript

## タスク
### Next.js習得
### SPA習得
- ハンバーガーメニュー
- ページ切り替え
- Materiau-UIと一緒に使いたい
[material-ui/examples/nextjs at master · mui-org/material-ui](https://github.com/mui-org/material-ui/tree/master/examples/nextjs)

## 作業履歴
[Next.js + TypeScriptの開発環境を整える - code-log](https://code-log.hatenablog.com/entry/2020/01/23/231848)

### プロジェクトの作成
```
$ cd client
$ yarn init
$ npx create-next-app next-ts

$ yarn add --dev typescript @types/react @types/node

$ mv next-ts/pages/index.js next-ts/pages/index.tsx
```

### お試し起動
```
cd next-ts
yarn dev
```

ブラウザから`http://192.168.184.129:3000`に接続する

## チュートリアル
[Learn \- Getting Started \| Next\.js](https://nextjs.org/learn/basics/getting-started)

```
$ yarn add isomorphic-unfetch
$ yarn add react-markdown
$ yarn add swr
$ yarn [global] add now
```

## トップ画面を作る
[超便利！2019年に注目したい最新CSSツール、リソースガイド100個まとめ - PhotoshopVIP](http://photoshopvip.net/113096)

[オンライン上でHTMLやCSSの編集・確認・保存が出来る「Liveweave」が便利！ | エグウェブ.JP@福岡／WEBセミナー・分析・WEBサイト制作](https://eguweb.jp/html/use-liveweave-which-is-convenient-online)

- Google Keepの画面レイアウトをパクる

手で作る
- ヘッダ
- 左側にメニュー

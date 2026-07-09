# 💰 BudgetBook

シンプルな支出管理 Web アプリです！項目名と金額を入力すると、合計金額を自動で計算します。TypeScript で型安全に実装しています。

🔗 デモ: https://budget-book-vert-six.vercel.app/

## ✨ 機能

- 項目名と金額を入力してボタンひとつで支出を追加
- 追加した支出を一覧で表示
- 全支出の合計金額を自動計算して表示
- 各支出を個別に削除（削除すると合計も自動で更新）
- 入力バリデーション（未入力・数値以外・マイナスの金額を弾く）
- localStorage に自動保存（リロードしてもデータが残る）
- `key` にインデックスではなく一意の ID（`Date.now()`）を使用

## 🛠 技術スタック

| 項目 | 内容 |
| --- | --- |
| フレームワーク | React |
| 言語 | TypeScript |
| ビルドツール | Vite |
| スタイリング | CSS |
| 状態管理 | useState / useEffect |
| デプロイ | Vercel |

## 🚀 ローカルで動かす

\`\`\`bash
git clone https://github.com/your-username/budget-book.git
cd budget-book
npm install
npm run dev
\`\`\`

ブラウザで http://localhost:5173 を開く。

## 📁 ディレクトリ構成

\`\`\`
budget-book/
├── public
├── src
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
\`\`\`

## 💡 実装のポイント

- \`type Expense\` で「id・name・price」の形を型定義し、扱うデータの形を保証
- \`useState\` で入力値（name / price）と支出配列（expenses）を管理
- \`reduce\` で全支出の \`price\` を集計し、合計金額を自動計算
- 入力値は文字列で受け取り、\`Number()\` で数値に変換して保存
- \`isNaN\` と 0 未満チェックで、不正な金額の追加を防止
- \`useEffect\` で expenses の変更を localStorage へ自動保存し、起動時に復元
- 削除は \`filter\` で対象 id 以外を残して実装

## 🔧 今後の改善案

- 支出の編集機能
- カテゴリ分け（食費・交通費など）
- 月ごとの集計・グラフ表示
- 予算の上限設定と超過アラート

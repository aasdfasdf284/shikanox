# Xserver設定ガイド

## 1. Xserverのメール設定

### 手順1: Xserverコントロールパネルでメールアドレスを作成
1. Xserverコントロールパネルにログイン
2. 「メール」→「メールアドレス」をクリック
3. 「メールアドレス追加」をクリック
4. メールアドレスを作成：`hello@shikanox.io`
5. パスワードを設定

### 手順2: SMTP設定の確認
XserverのSMTP設定：
- **SMTPサーバー**: sv1.xserver.jp
- **ポート**: 587
- **認証**: 必要
- **暗号化**: TLS

## 2. 環境変数の設定

### ローカル開発環境
プロジェクトルートに `.env.local` ファイルを作成：

```env
XSERVER_EMAIL_PASS=your-xserver-email-password
```

### Vercel本番環境
1. Vercelダッシュボードでプロジェクトを開く
2. Settings → Environment Variables
3. 以下の環境変数を追加：

| 名前 | 値 |
|------|-----|
| XSERVER_EMAIL_PASS | your-xserver-email-password |

## 3. コンタクトフォームの更新

Xserverを使用する場合、ContactFormコンポーネントのAPIエンドポイントを変更します：

```typescript
// components/ContactForm.tsx の handleSubmit 関数内
const response = await fetch('/api/contact-xserver', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
```

## 4. テスト方法

1. 開発サーバーを起動：`npm run dev`
2. コンタクトフォームにテストデータを入力
3. 送信ボタンをクリック
4. 指定したメールアドレスにメールが届くことを確認

## 5. Xserverの利点

### Gmailと比較した利点
- **独自ドメイン**: ブランドに合ったメールアドレス
- **信頼性**: ビジネス用途に適した配信率
- **管理**: Xserverコントロールパネルで一元管理
- **容量**: 大容量のメールボックス

### 設定の簡単さ
- アプリパスワードの設定が不要
- 2段階認証の設定が不要
- 通常のメールパスワードで認証可能

## 6. トラブルシューティング

### よくある問題

**Q: メールが送信されない**
A: 
- Xserverのメールアドレスとパスワードが正しいか確認
- 環境変数が正しく設定されているか確認
- ファイアウォールでポート587がブロックされていないか確認

**Q: 認証エラーが発生する**
A:
- メールパスワードが正しいか確認
- Xserverコントロールパネルでメールアドレスが有効になっているか確認

**Q: 接続エラーが発生する**
A:
- ネットワーク接続を確認
- XserverのSMTPサーバー（sv1.xserver.jp）にアクセス可能か確認

## 7. セキュリティ注意事項

- メールパスワードは絶対にGitにコミットしない
- 環境変数は必ず `.env.local` ファイルに保存
- 定期的にメールパスワードを更新する
- 不要になったメールアドレスは削除する

## 8. 推奨設定

### メールアドレスの設定
- `hello@shikanox.io` - お問い合わせ用（メイン）
- 必要に応じて追加のメールアドレスを作成可能

### セキュリティ強化
- 強力なパスワードを使用
- 定期的なパスワード変更
- アクセスログの監視 
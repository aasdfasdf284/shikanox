# Gmail設定ガイド

## 1. Gmailアプリパスワードの設定

### 手順1: Googleアカウントの2段階認証を有効にする
1. [Googleアカウント](https://myaccount.google.com/)にアクセス
2. 「セキュリティ」をクリック
3. 「2段階認証プロセス」を有効にする

### 手順2: アプリパスワードを生成
1. [Googleアカウント](https://myaccount.google.com/)にアクセス
2. 「セキュリティ」をクリック
3. 「2段階認証プロセス」をクリック
4. 「アプリパスワード」をクリック
5. 「アプリを選択」で「その他（カスタム名）」を選択
6. 名前を「ShikanoX Contact Form」などと入力
7. 「生成」をクリック
8. 表示された16文字のパスワードをコピー

## 2. 環境変数の設定

### ローカル開発環境
プロジェクトルートに `.env.local` ファイルを作成：

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_TO=hello@shikanox.io
```

### Vercel本番環境
1. Vercelダッシュボードでプロジェクトを開く
2. Settings → Environment Variables
3. 以下の環境変数を追加：

| 名前 | 値 |
|------|-----|
| EMAIL_USER | your-gmail@gmail.com |
| EMAIL_PASS | your-16-character-app-password |
| EMAIL_TO | hello@shikanox.io |

## 3. テスト方法

1. 開発サーバーを起動：`npm run dev`
2. コンタクトフォームにテストデータを入力
3. 送信ボタンをクリック
4. 指定したメールアドレスにメールが届くことを確認

## 4. トラブルシューティング

### よくある問題

**Q: メールが送信されない**
A: 
- アプリパスワードが正しく設定されているか確認
- 2段階認証が有効になっているか確認
- 環境変数が正しく設定されているか確認

**Q: 認証エラーが発生する**
A:
- Gmailの「安全性の低いアプリのアクセス」を有効にする
- または、アプリパスワードを再生成する

**Q: メールがスパムフォルダに入る**
A:
- Gmailの設定で送信者を「重要」にマークする
- SPFレコードの設定を検討する

## 5. セキュリティ注意事項

- アプリパスワードは絶対にGitにコミットしない
- 環境変数は必ず `.env.local` ファイルに保存
- 定期的にアプリパスワードを更新する
- 不要になったアプリパスワードは削除する 
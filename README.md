# Takumi Kusaka | Game Programmer Portfolio

GitHub Pages 用の依存関係なしで動く静的ポートフォリオです。`index.html` を開くだけで確認できます。

## 構成

- `index.html` — ページ構造、SEO / OGP 設定
- `styles.css` — デザインとレスポンシブ表示
- `script.js` — リンク設定、モバイルメニュー、スクロール表示
- `assets/images/` — ゲーム画面・ロゴを置く場所

## 画像の差し替え

メイン画像とタイトルロゴは配置済みです。未提供の画像には落ち着いたプレースホルダーを表示します。

```text
assets/images/hero.png                         # 配置済み・メイン画像
assets/images/slimes-space-travel-logo.png
assets/images/feature-split.jpg
assets/images/feature-two-player.jpg
assets/images/sky-regalia.jpg
assets/images/slimes-sky-travel.jpg
assets/images/og-image.jpg
```

上記の名前で画像を置くと自動的にプレースホルダーから差し替わります。リンク先は `script.js` 冒頭の `links` オブジェクトだけを編集します。未設定のリンクは誤って遷移しないよう無効化されます。

## GitHub Pages で公開する

1. このフォルダを GitHub リポジトリのルートとして push します。
2. GitHub のリポジトリで **Settings → Pages** を開きます。
3. **Build and deployment** の Source で **Deploy from a branch** を選びます。
4. ブランチを `main`（または公開するブランチ）、フォルダを `/(root)` にして Save します。
5. 数分後に `https://<username>.github.io/<repository-name>/` で確認します。ユーザーサイト用リポジトリを `<username>.github.io` にした場合は `https://<username>.github.io/` です。

公開前に、`script.js` の URLとメールアドレス、必要な作品画像、`index.html` の OGP画像URLを設定してください。

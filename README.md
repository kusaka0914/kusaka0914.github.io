# Takumi Kusaka | Game Programmer Portfolio

GitHub Pages 用の依存関係なしで動く静的ポートフォリオです。`index.html` を開くだけで確認できます。

## 構成

- `index.html` — ページ構造、SEO / OGP 設定
- `styles.css` — デザインとレスポンシブ表示
- `script.js` — リンク設定、モバイルメニュー、スクロール表示
- `assets/images/` — ゲーム画面・ロゴを置く場所

## 画像の差し替え

以下の名前でゲームの実スクリーンショットを追加すると差し替えやすい構成です。現在は、画像未提供の箇所に落ち着いたプレースホルダーを表示します。

```text
assets/images/slimes-space-travel-logo.png
assets/images/feature-planet.jpg
assets/images/feature-split.jpg
assets/images/feature-two-player.jpg
assets/images/sky-regalia.jpg
assets/images/slimes-sky-travel.jpg
assets/images/og-image.jpg
```

追加した画像を表示するには、`index.html` 内の対応する `media-placeholder` を `img` 要素に置き換えてください。リンク先は `script.js` 冒頭の `links` オブジェクトだけを編集します。未設定のリンクは誤って遷移しないよう無効化されます。

## GitHub Pages で公開する

1. このフォルダを GitHub リポジトリのルートとして push します。
2. GitHub のリポジトリで **Settings → Pages** を開きます。
3. **Build and deployment** の Source で **Deploy from a branch** を選びます。
4. ブランチを `main`（または公開するブランチ）、フォルダを `/(root)` にして Save します。
5. 数分後に `https://<username>.github.io/<repository-name>/` で確認します。ユーザーサイト用リポジトリを `<username>.github.io` にした場合は `https://<username>.github.io/` です。

公開前に、`script.js` の URL とメールアドレス、必要な作品画像、`index.html` の OGP 画像 URL を設定してください。
assets/images/hero.jpg
assets/images/slimes-space-travel-main.jpg

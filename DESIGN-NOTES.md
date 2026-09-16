# 参考画像との比較と再現方針

参考: Downloads/site.png。比較元: 2026-09-15 の公開サイトの全画面キャプチャ。

| 差分 | 実施した変更 |
| --- | --- |
| 背景が単調なグラデーションで、ヒーローと下部が分断 | 青・紫の星雲を生成し、ページ全体の背景として配置。ヒーローの左端と下端を背景へなじませた |
| メインの壁が大きく、ロゴが小さい | ロゴを左カラムいっぱいに拡大。ゲーム画面の表示領域を右へ移動し、ロゴとスライムの位置関係を調整 |
| 文字とアイコンが小さく、余白が大きい | コンテンツ最大幅1320px、セクション間36px、特徴カード本文15pxを基準に調整 |
| 見出しの装飾が不統一 | FEATURED WORKも共通の四芒星・英字見出し・横線に統一 |
| 技術欄が3枚＋2枚で片側が空く | 6列グリッドにし、上段3枚・下段2枚がそれぞれ幅を使い切る構成。番号削除、左に技術アイコン |
| OTHER WORKSが間延び | 画像と本文の横長カード、下部タグ、丸い矢印リンクに調整 |
| ABOUTの画像が壁の切り抜き | 専用のスライムプロフィールイラストを生成 |

## まだ再現できない部分

- 分身・2人プレイ・スカイレガリア・Slime’s Sky Travelの画像4枚は未提供。ゲーム画面は捏造せず「画像を準備中」を表示。
- メイン画像はユーザー指定により現行素材で確定。追加カットは不要。
- プレイ動画・GitHub・itch.io・メールはユーザー提供の宛先をHTMLとscript.jsに設定済み。ほかの2作品の個別URLは未設定。
- フッターのページ内リンクはスマホでも表示。ヘッダー・フッター・上に戻るのスクロールとフォーカス移動を統一し、移動先IDを静的検証。
- AWS・DockerをUnreal Engine・C#へ置き換える既存の指定を維持。
- 公開は行っていない。HTML・画像参照・JS構文を検証。ブラウザーのセキュリティ確認が利用できず、実画面QAは未実施。

## 生成素材

組み込みimage_genを使用。ゲーム画像の生成・加工は行っていない。

### assets/images/nebula-background.png

Prompt: Create a standalone background texture for a Japanese space-themed game developer portfolio. Portrait 1024x1536. Rich deep midnight navy space with intricate luminous cobalt blue and violet nebula filaments sweeping diagonally around the left and right edges, thousands of very fine natural stars and a few tiny glowing four-point stars. Central 60% remains deep navy with faint stars, highly readable for white website text. Saturated blue nebula strongest along right edge at middle height, purple cloud along left upper edge. Bottom right includes a small crescent of a distant blue planet horizon, occupying only bottom 15%. Polished magical cosmic atmosphere, luminous electric blue and purple, not washed out. No typography, no logos, no UI, no characters, no game screenshots, no frames. This is a background asset, not a website mockup.

### assets/images/profile-mascot.png

Prompt: Square profile avatar illustration for a space-themed Japanese game programmer portfolio: one adorable small glossy translucent cyan slime, black oval eyes and tiny smiling mouth, centered and fully visible in lower middle, on a deep navy cosmic background with violet and electric blue nebula glows and sparse sparkling stars. Cute pixel-art inspired rounded silhouette, polished luminous digital illustration. Circular composition with generous safe margins. No text, no letters, no logo, no border. This is a decorative profile mascot, not a gameplay screenshot.

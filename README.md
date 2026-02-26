# 🎉 BINGO LIVE Pro - Ultimate Stable Edition

ブラウザだけで完結する、リアルタイム同期型の「次世代ビンゴ抽選システム」です。
従来のP2P方式を卒業し、**Supabase Realtime** をバックエンドに採用することで、モバイル回線（4G/5G）や公共Wi-Fi環境下でも、極めて高い接続安定性を実現しました。

## 🚀 ライブデモ
https://tamachamo.github.io/bingo/

## ✨ 主な機能

- **超安定リアルタイム同期**: Supabase Broadcastにより、運営者の操作を全参加者の画面へ低遅延で反映。
- **公式ルール準拠のカード生成**: モード2では、ビンゴ公式ルール（B:1-15, I:16-30...）に基づいた5x5カードを自動配布。
- **オート・マーキング**: 主催者が数字を確定させると、参加者のカード内の数字が自動で穴あけされます。
- **セッション永続化**: 
  - 運営者がリロードしても「運営者画面」を維持し、履歴を保持。
  - 参加者がリロードしても「自分のビンゴカード」と「穴あけ状態」を完全に復元。
- **プロジェクト停止回避機能**: Vercel Cron Jobsにより、Supabaseの無料枠（1週間の非アクティブによる停止）を自動で回避。
- **リッチな演出**: 
  - シャッフル中のドラムロール音（Web Audio APIによる動的合成）。
  - ビンゴ達成時の紙吹雪アニメーション（Canvas-confetti）。

## 🛠 技術スタック

- **Frontend**: HTML5 / CSS3 / JavaScript (Vanilla JS)
- **Backend**: [Supabase](https://supabase.com/) (Realtime / Broadcast)
- **Deployment**: [Vercel](https://vercel.com/)
- **Automation**: Vercel Cron Jobs (for Supabase Keep-alive)

## 📦 セットアップ・デポロイ

### 1. Supabaseの設定
1. [Supabase](https://supabase.com/)でプロジェクトを作成。
2. `Project Settings` > `API` から `URL` と `anon key` を取得。
3. `Project Settings` > `Realtime` で **Broadcast** が有効であることを確認。

### 2. Vercelへのデプロイ
1. GitHubへプッシュし、Vercelと連携。
2. Vercelの管理画面（Settings > Environment Variables）に以下を登録。
   - `SUPABASE_URL`: 取得したURL
   - `SUPABASE_ANON_KEY`: 取得したキー
3. デプロイ完了後、`index.html` 内のキーも同様に書き換えてください。

## 🚀 使い方

### 運営者（ホスト）
1. ルーム名（合言葉）を決め、「運営者として開始」をクリック。
2. 「招待URLをコピー」を押し、参加者に共有。
3. 全員が揃ったら「数字を引く！」で抽選開始。

### 参加者（ビューアー）
1. 共有されたURLをタップして入室。
2. 「同期中 ✅」と表示されれば準備完了。あとは運営者の操作を待つだけ！
3. 自分のタイミングで「退出する」からロビーに戻ることも可能です。

## 📝 開発の背景
イベント運営における「接続が切れる」「リロードでデータが消える」というストレスをゼロにするために開発しました。サーバーレスの特性を活かし、メンテナンスフリーで運用できる設計にこだわっています。

---
Developed with ❤️ by [tamachamo](https://github.com/tamachamo)
(Based in Matsusaka, Mie, Japan 🇯🇵)

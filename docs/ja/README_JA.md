# Draw In

<div align="center">

**AI搭載のダイアグラム作成ツール - チャット、描画、可視化**

[English](../../README.md) | [中文](../cn/README_CN.md) | 日本語

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Next.js](https://img.shields.io/badge/Next.js-16.x-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-61dafb)](https://react.dev/)

</div>

AI機能とdraw.ioダイアグラムを統合したNext.jsウェブアプリケーションです。自然言語コマンドとAI支援の可視化により、ダイアグラムを作成、修正、強化できます。

## 目次
- [Draw In](#draw-in)
  - [目次](#目次)
  - [例](#例)
  - [機能](#機能)
  - [MCPサーバー](#mcpサーバー)
    - [Claude Code CLI](#claude-code-cli)
  - [はじめに](#はじめに)
    - [ローカルで実行](#ローカルで実行)
    - [デスクトップアプリケーション](#デスクトップアプリケーション)
    - [Dockerで実行](#dockerで実行)
    - [インストール](#インストール)
  - [デプロイ](#デプロイ)
    - [EdgeOne Pagesへのデプロイ](#edgeone-pagesへのデプロイ)
    - [Vercelへのデプロイ](#vercelへのデプロイ)
    - [Cloudflare Workersへのデプロイ](#cloudflare-workersへのデプロイ)
  - [マルチプロバイダーサポート](#マルチプロバイダーサポート)
  - [仕組み](#仕組み)
  - [サポート＆お問い合わせ](#サポートお問い合わせ)
  - [よくある質問](#よくある質問)

## 例

以下はいくつかのプロンプト例と生成されたダイアグラムです：

<div align="center">
<table width="100%">
  <tr>
    <td colspan="2" valign="top" align="center">
      <strong>アニメーションTransformerコネクタ</strong><br />
      <p><strong>Prompt:</strong> Give me a **animated connector** diagram of transformer's architecture.</p>
      <img src="../../public/animated_connectors.svg" alt="アニメーションコネクタ付きTransformerアーキテクチャ" width="480" />
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong>RAG技術ダイアグラム</strong><br />
      <p><strong>Prompt:</strong> Generate a RAG architecture diagram for **chat application**. Use connected diagram for data ingestion</p>
      <img src="../../public/rag_prod.svg" alt="RAGアーキテクチャ図" width="480" />
    </td>
    <td width="50%" valign="top">
      <strong>ReactとAWSによる認証</strong><br />
      <p><strong>Prompt:</strong> Generate authentication process using React with **AWS**. Use Serverless architecture.</p>
      <img src="../../public/auth.svg" alt="認証アーキテクチャ図" width="480" />
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong>オープンイノベーション</strong><br />
      <p><strong>Prompt:</strong> Create visualization of Henry Chesbrough's Open Innovation model.</p>
      <img src="../../public/inno.svg" alt="オープンイノベーション図" width="480" />
    </td>
    <td width="50%" valign="top">
      <strong>猫のスケッチ</strong><br />
      <p><strong>Prompt:</strong> Draw a cute cat for me.</p>
      <img src="../../public/cat_demo.svg" alt="猫の絵" width="240" />
    </td>
  </tr>
</table>
</div>

## 機能

-   **LLM搭載のダイアグラム作成**：大規模言語モデルを活用して、自然言語コマンドで直接draw.ioダイアグラムを作成・操作
-   **画像ベースのダイアグラム複製**：既存のダイアグラムや画像をアップロードし、AIが自動的に複製・強化
-   **PDFとテキストファイルのアップロード**：PDFドキュメントやテキストファイルをアップロードして、既存のドキュメントからコンテンツを抽出し、ダイアグラムを生成
-   **AI推論プロセス表示**：サポートされているモデル（OpenAI o1/o3、Gemini、Claudeなど）のAIの思考プロセスを表示
-   **ダイアグラム履歴**：すべての変更を追跡する包括的なバージョン管理。AI編集前のダイアグラムの以前のバージョンを表示・復元可能
-   **インタラクティブなチャットインターフェース**：AIとリアルタイムでコミュニケーションしてダイアグラムを改善
-   **クラウドアーキテクチャダイアグラムサポート**：クラウドアーキテクチャダイアグラムの生成を専門的にサポート（AWS、GCP、Azure）
-   **アニメーションコネクタ**：より良い可視化のためにダイアグラム要素間に動的でアニメーション化されたコネクタを作成

## MCPサーバー

MCP（Model Context Protocol）を介して、Claude Desktop、Cursor、VS CodeなどのAIエージェントでDraw Inを使用できます。

```json
{
  "mcpServers": {
    "draw-in": {
      "command": "npx",
      "args": ["@draw-in/mcp-server@latest"]
    }
  }
}
```

### Claude Code CLI

```bash
claude mcp add draw-in -- npx @draw-in/mcp-server@latest
```

Claudeにダイアグラムの作成を依頼：
> 「ログイン、MFA、セッション管理を含むユーザー認証のフローチャートを作成してください」

ダイアグラムがリアルタイムでブラウザに表示されます！

詳細は[MCPサーバーREADME](../../packages/mcp-server/README.md)をご覧ください（VS Code、Cursorなどのクライアント設定も含む）。

## はじめに

### ローカルで実行

インストール後に開発サーバーを起動し、[http://localhost:6002](http://localhost:6002) を開きます。プロバイダーと API キーは設定ダイアログで構成でき、キーはブラウザのローカルに保存されます。

### デスクトップアプリケーション

[Releases ページ](https://github.com/Hoooxz/draw-in/releases)からお使いのプラットフォーム用のネイティブデスクトップアプリをダウンロードしてください：

対応プラットフォーム：Windows、macOS、Linux。

### Dockerで実行

[Docker ガイドを参照](./docker.md)

### インストール

1. リポジトリをクローン：

```bash
git clone https://github.com/Hoooxz/draw-in
cd draw-in
npm install
cp env.example .env.local
```

詳細な設定手順については[プロバイダー設定ガイド](./ai-providers.md)を参照してください。

2. 開発サーバーを起動：

```bash
npm run dev
```

3. ブラウザで[http://localhost:6002](http://localhost:6002)を開いてアプリケーションを確認。

## デプロイ

### EdgeOne Pagesへのデプロイ

[Tencent EdgeOne Pages](https://pages.edgeone.ai/)を使用してワンクリックでデプロイできます。

このボタンでデプロイ：

[![Deploy to EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2FHoooxz%2Fdraw-in)

詳細は[Tencent EdgeOne Pagesドキュメント](https://pages.edgeone.ai/document/deployment-overview)をご覧ください。

また、Tencent EdgeOne Pagesでデプロイすると、[DeepSeekモデルの毎日の無料クォータ](https://pages.edgeone.ai/document/edge-ai)が付与されます。

### Vercelへのデプロイ

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHoooxz%2Fdraw-in)

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの作成者による[Vercelプラットフォーム](https://vercel.com/new)を使用することです。ローカルの`.env.local`ファイルと同様に、Vercelダッシュボードで**環境変数を設定**してください。

詳細は[Next.jsデプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)をご覧ください。

### Cloudflare Workersへのデプロイ

[Cloudflare デプロイガイドを参照](./cloudflare-deploy.md)


## マルチプロバイダーサポート

-   ByteDance Doubao
-   AWS Bedrock（デフォルト）
-   OpenAI
-   Anthropic
-   Google AI
-   Google Vertex AI
-   Azure OpenAI
-   Ollama
-   OpenRouter
-   DeepSeek
-   SiliconFlow
-   ModelScope
-   SGLang
-   Vercel AI Gateway

AWS BedrockとOpenRouter以外のすべてのプロバイダーはカスタムエンドポイントをサポートしています。

📖 **[詳細なプロバイダー設定ガイド](./ai-providers.md)** - 各プロバイダーの設定手順をご覧ください。

### サーバーサイドマルチモデル設定

管理者は、ユーザーが個人のAPIキーを提供することなく利用できる複数のサーバーサイドモデルを設定できます。`AI_MODELS_CONFIG` 環境変数（JSON文字列）または `ai-models.json` ファイルで設定します。

**モデル要件**：このタスクは厳密なフォーマット制約（draw.io XML）を持つ長文テキスト生成を伴うため、強力なモデル機能が必要です。Claude Sonnet 4.5、GPT-5.1、Gemini 3 Pro、DeepSeek V3.2/R1を推奨します。

注：`claude`シリーズはAWS、Azure、GCPなどのクラウドアーキテクチャロゴ付きのdraw.ioダイアグラムで学習されているため、クラウドアーキテクチャダイアグラムを作成したい場合は最適な選択です。


## 仕組み

本アプリケーションは以下の技術を使用しています：

-   **Next.js**：フロントエンドフレームワークとルーティング
-   **Vercel AI SDK**（`ai` + `@ai-sdk/*`）：ストリーミングAIレスポンスとマルチプロバイダーサポート
-   **react-drawio**：ダイアグラムの表現と操作

ダイアグラムはdraw.ioでレンダリングできるXMLとして表現されます。AIがコマンドを処理し、それに応じてこのXMLを生成または変更します。


## サポート＆お問い合わせ

サポートやお問い合わせについては、[GitHub リポジトリ](https://github.com/Hoooxz/draw-in/issues) で issue を開いてください。

## よくある質問

一般的な問題と解決策については [FAQ](./FAQ.md) をご覧ください。

---

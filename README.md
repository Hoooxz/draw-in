# Draw In

<div align="center">

**AI-Powered Diagram Creation Tool - Chat, Draw, Visualize**

English | [中文](./docs/cn/README_CN.md) | [日本語](./docs/ja/README_JA.md)

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Next.js](https://img.shields.io/badge/Next.js-16.x-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-61dafb)](https://react.dev/)

</div>

A Next.js web application that integrates AI capabilities with draw.io diagrams. Create, modify, and enhance diagrams through natural language commands and AI-assisted visualization.


## Table of Contents
- [Draw In](#draw-in)
  - [Table of Contents](#table-of-contents)
  - [Examples](#examples)
  - [Features](#features)
  - [MCP Server](#mcp-server)
    - [Claude Code CLI](#claude-code-cli)
  - [Getting Started](#getting-started)
    - [Run Locally](#run-locally)
    - [Desktop Application](#desktop-application)
    - [Run with Docker](#run-with-docker)
    - [Installation](#installation)
  - [Deployment](#deployment)
    - [Deploy to EdgeOne Pages](#deploy-to-edgeone-pages)
    - [Deploy on Vercel](#deploy-on-vercel)
    - [Deploy on Cloudflare Workers](#deploy-on-cloudflare-workers)
  - [Multi-Provider Support](#multi-provider-support)
  - [How It Works](#how-it-works)
  - [Support \& Contact](#support--contact)
  - [FAQ](#faq)

## Examples

Here are some example prompts and their generated diagrams:

<div align="center">
<table width="100%">
  <tr>
    <td colspan="2" valign="top" align="center">
      <strong>Animated transformer connectors</strong><br />
      <p><strong>Prompt:</strong> Give me a **animated connector** diagram of transformer's architecture.</p>
      <img src="./public/animated_connectors.svg" alt="Transformer Architecture with Animated Connectors" width="480" />
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong>RAG Technique Diagram</strong><br />
      <p><strong>Prompt:</strong> Generate a RAG architecture diagram for **chat application**. Use connected diagram for data ingestion</p>
      <img src="./public/rag_prod.svg" alt="RAG Architecture Diagram" width="480" />
    </td>
    <td width="50%" valign="top">
      <strong>Authentication using React and AWS</strong><br />
      <p><strong>Prompt:</strong> Generate authentication process using React with **AWS**. Use Serverless architecture.</p>
      <img src="./public/auth.svg" alt="Authentication Architecture Diagram" width="480" />
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong>Open Innovation</strong><br />
      <p><strong>Prompt:</strong> Create visualization of Henry Chesbrough's Open Innovation model.</p>
      <img src="./public/inno.svg" alt="Open Innovation Diagram" width="480" />
    </td>
    <td width="50%" valign="top">
      <strong>Cat sketch</strong><br />
      <p><strong>Prompt:</strong> Draw a cute cat for me.</p>
      <img src="./public/cat_demo.svg" alt="Cat Drawing" width="240" />
    </td>
  </tr>
</table>
</div>

## Features

-   **LLM-Powered Diagram Creation**: Leverage Large Language Models to create and manipulate draw.io diagrams directly through natural language commands
-   **Image-Based Diagram Replication**: Upload existing diagrams or images and have the AI replicate and enhance them automatically
-   **PDF & Text File Upload**: Upload PDF documents and text files to extract content and generate diagrams from existing documents
-   **AI Reasoning Display**: View the AI's thinking process for supported models (OpenAI o1/o3, Gemini, Claude, etc.)
-   **Diagram History**: Comprehensive version control that tracks all changes, allowing you to view and restore previous versions of your diagrams before the AI editing.
-   **Interactive Chat Interface**: Communicate with AI to refine your diagrams in real-time
-   **Cloud Architecture Diagram Support**: Specialized support for generating cloud architecture diagrams (AWS, GCP, Azure)
-   **Animated Connectors**: Create dynamic and animated connectors between diagram elements for better visualization

## MCP Server

Use Draw In with AI agents like Claude Desktop, Cursor, and VS Code via MCP (Model Context Protocol).

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

Then ask Claude to create diagrams:
> "Create a flowchart showing user authentication with login, MFA, and session management"

The diagram appears in your browser in real-time!

See the [MCP Server README](./packages/mcp-server/README.md) for VS Code, Cursor, and other client configurations.

## Getting Started

### Run Locally

Run the development server after installation and open [http://localhost:6002](http://localhost:6002). You can configure your own provider and API key from the Settings dialog; keys are stored locally in your browser.

### Desktop Application

Download the native desktop app for your platform from the [Releases page](https://github.com/Hoooxz/draw-in/releases):

Supported platforms: Windows, macOS, Linux.

### Run with Docker

[Go to Docker Guide](./docs/en/docker.md)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Hoooxz/draw-in
cd draw-in
npm install
cp env.example .env.local
```

See the [Provider Configuration Guide](./docs/en/ai-providers.md) for detailed setup instructions for each provider.

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:6002](http://localhost:6002) in your browser to see the application.

## Deployment

### Deploy to EdgeOne Pages

You can deploy with one click using [Tencent EdgeOne Pages](https://pages.edgeone.ai/).

Deploy by this button: 

[![Deploy to EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2FHoooxz%2Fdraw-in)

Check out the [Tencent EdgeOne Pages documentation](https://pages.edgeone.ai/document/deployment-overview) for more details.

Additionally, deploying through Tencent EdgeOne Pages will also grant you a [daily free quota for DeepSeek models](https://pages.edgeone.ai/document/edge-ai).

### Deploy on Vercel 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHoooxz%2Fdraw-in)

The easiest way to deploy is using [Vercel](https://vercel.com/new), the creators of Next.js. Be sure to **set the environment variables** in the Vercel dashboard as you did in your local `.env.local` file.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Deploy on Cloudflare Workers

[Go to Cloudflare Deploy Guide](./docs/en/cloudflare-deploy.md)



## Multi-Provider Support

-   ByteDance Doubao
-   AWS Bedrock (default)
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


All providers except AWS Bedrock and OpenRouter support custom endpoints.

📖 **[Detailed Provider Configuration Guide](./docs/en/ai-providers.md)** - See setup instructions for each provider.

### Server-Side Multi-Model Configuration

Administrators can configure multiple server-side models that are available to all users without requiring personal API keys. Configure via `AI_MODELS_CONFIG` environment variable (JSON string) or `ai-models.json` file.

**Model Requirements**: This task requires strong model capabilities for generating long-form text with strict formatting constraints (draw.io XML). Recommended models include Claude Sonnet 4.5, GPT-5.1, Gemini 3 Pro, and DeepSeek V3.2/R1.

Note that the `claude` series has been trained on draw.io diagrams with cloud architecture logos like AWS, Azure, GCP. So if you want to create cloud architecture diagrams, this is the best choice.


## How It Works

The application uses the following technologies:

-   **Next.js**: For the frontend framework and routing
-   **Vercel AI SDK** (`ai` + `@ai-sdk/*`): For streaming AI responses and multi-provider support
-   **react-drawio**: For diagram representation and manipulation

Diagrams are represented as XML that can be rendered in draw.io. The AI processes your commands and generates or modifies this XML accordingly.


## Support & Contact

For support or inquiries, please open an issue in the [GitHub repository](https://github.com/Hoooxz/draw-in/issues).

## FAQ

See [FAQ](./docs/en/FAQ.md) for common issues and solutions.

---

import type { Metadata } from "next"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import Image from "@/components/image-with-basepath"

export const metadata: Metadata = {
    title: "About - Draw In",
    description:
        "AI-Powered Diagram Creation Tool - Chat, Draw, Visualize. Create AWS, GCP, and Azure architecture diagrams with natural language.",
    keywords: [
        "AI diagram",
        "draw.io",
        "AWS architecture",
        "GCP diagram",
        "Azure diagram",
        "LLM",
    ],
}

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="text-xl font-bold text-gray-900 hover:text-gray-700"
                        >
                            Draw In
                        </Link>
                        <nav className="flex items-center gap-6 text-sm">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Editor
                            </Link>
                            <Link
                                href="/about"
                                className="text-blue-600 font-semibold"
                            >
                                About
                            </Link>
                            <a
                                href="https://github.com/Hoooxz/draw-in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label="View on GitHub"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="prose prose-lg max-w-none">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Draw In
                        </h1>
                        <p className="text-xl text-gray-600 font-medium">
                            AI-Powered Diagram Creation Tool - Chat, Draw,
                            Visualize
                        </p>
                    </div>

                    <p className="text-gray-700">
                        A Next.js web application that integrates AI
                        capabilities with draw.io diagrams. Create, modify, and
                        enhance diagrams through natural language commands and
                        AI-assisted visualization.
                    </p>

                    {/* Features */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        Features
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                            <strong>LLM-Powered Diagram Creation</strong>:
                            Leverage Large Language Models to create and
                            manipulate draw.io diagrams directly through natural
                            language commands
                        </li>
                        <li>
                            <strong>Image-Based Diagram Replication</strong>:
                            Upload existing diagrams or images and have the AI
                            replicate and enhance them automatically
                        </li>
                        <li>
                            <strong>Diagram History</strong>: Comprehensive
                            version control that tracks all changes, allowing
                            you to view and restore previous versions of your
                            diagrams before the AI editing
                        </li>
                        <li>
                            <strong>Interactive Chat Interface</strong>:
                            Communicate with AI to refine your diagrams in
                            real-time
                        </li>
                        <li>
                            <strong>AWS Architecture Diagram Support</strong>:
                            Specialized support for generating AWS architecture
                            diagrams
                        </li>
                        <li>
                            <strong>Animated Connectors</strong>: Create dynamic
                            and animated connectors between diagram elements for
                            better visualization
                        </li>
                    </ul>

                    {/* Examples */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        Examples
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Here are some example prompts and their generated
                        diagrams:
                    </p>

                    <div className="space-y-8">
                        {/* ResNet50 Architecture */}
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Animated ResNet50 Model Architecture
                            </h3>
                            <p className="text-gray-600 mb-4">
                                <strong>Prompt:</strong> Give me an{" "}
                                <strong>animated</strong> architecture diagram
                                of the ResNet50 model.
                            </p>
                            <div className="bg-neutral-950 rounded-lg p-4 inline-block">
                                <Image
                                    src="/resnet50.svg"
                                    alt="Architecture diagram for ResNet50 model"
                                    width={480}
                                    height={360}
                                    className="mx-auto"
                                />
                            </div>
                        </div>

                        {/* Diagram Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    RAG Technique Diagram
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    <strong>Prompt:</strong> Generate a RAG
                                    architecture diagram for{" "}
                                    <strong>chat application</strong>. Use
                                    connected diagram for data ingestion
                                </p>
                                <div className="bg-neutral-950 rounded-lg p-4 flex items-center justify-center w-full h-[400px]">
                                    <Image
                                        src="/rag_prod.svg"
                                        alt="RAG Architecture Diagram"
                                        width={480}
                                        height={360}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Authentication using React and AWS
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    <strong>Prompt:</strong> Generate
                                    authentication process using React with{" "}
                                    <strong>AWS</strong>. Use Serverless
                                    architecture.
                                </p>
                                <div className="bg-neutral-950 rounded-lg p-4 flex items-center justify-center w-full h-[400px]">
                                    <Image
                                        src="/auth.svg"
                                        alt="Authentication Architecture Diagram"
                                        width={480}
                                        height={360}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Agile Scrum Process
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    <strong>Prompt:</strong> Generate agile
                                    scrum workflow diagram for software
                                    development team.
                                </p>
                                <div className="bg-neutral-950 rounded-lg p-4 flex items-center justify-center w-full h-[400px]">
                                    <Image
                                        src="/agile_scrum.svg"
                                        alt="Agile Scrum Diagram"
                                        width={480}
                                        height={360}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Open Innovation
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    <strong>Prompt:</strong> Create
                                    visualization of Henry Chesbrough&apos;s
                                    Open Innovation model.
                                </p>
                                <div className="bg-neutral-950 rounded-lg p-4 flex items-center justify-center w-full h-[400px]">
                                    <Image
                                        src="/inno.svg"
                                        alt="Open Innovation Diagram"
                                        width={480}
                                        height={360}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How It Works */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-700 mb-4">
                        The application uses the following technologies:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                            <strong>Next.js</strong>: For the frontend framework
                            and routing
                        </li>
                        <li>
                            <strong>Vercel AI SDK</strong> (<code>ai</code> +{" "}
                            <code>@ai-sdk/*</code>): For streaming AI responses
                            and multi-provider support
                        </li>
                        <li>
                            <strong>react-drawio</strong>: For diagram
                            representation and manipulation
                        </li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Diagrams are represented as XML that can be rendered in
                        draw.io. The AI processes your commands and generates or
                        modifies this XML accordingly.
                    </p>

                    {/* Multi-Provider Support */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        Multi-Provider Support
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>ByteDance Doubao</li>
                        <li>AWS Bedrock (default)</li>
                        <li>
                            OpenAI / OpenAI-compatible APIs (via{" "}
                            <code>OPENAI_BASE_URL</code>)
                        </li>
                        <li>Anthropic</li>
                        <li>Google AI</li>
                        <li>Google Vertex AI</li>
                        <li>Azure OpenAI</li>
                        <li>Ollama</li>
                        <li>OpenRouter</li>
                        <li>DeepSeek</li>
                        <li>SiliconFlow</li>
                        <li>ModelScope</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Note that <code>claude-sonnet-4-5</code> has trained on
                        draw.io diagrams with AWS logos, so if you want to
                        create AWS architecture diagrams, this is the best
                        choice.
                    </p>

                    {/* Support */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                        Support &amp; Contact
                    </h2>
                    <p className="text-gray-700 mt-2">
                        For support or inquiries, please open an issue in the{" "}
                        <a
                            href="https://github.com/Hoooxz/draw-in/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            GitHub repository
                        </a>
                        .
                    </p>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Open Editor
                        </Link>
                    </div>
                </article>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-gray-600 text-sm">
                        Draw In - Open Source AI-Powered Diagram Generator
                    </p>
                </div>
            </footer>
        </div>
    )
}

import Link from 'next/link';
import { ArrowLeft, Zap, DollarSign, Users, Code2, Database, Sparkles, CheckCircle2, GitBranch } from 'lucide-react';

export const metadata = {
  title: 'RAG QnA Chatbot for Developers | Ayan Dhanda',
  description: 'Built a $0/month RAG-powered chatbot that reduced developer clarification requests by 70% and enabled autonomous PRD implementation.',
};

export default function RAGChatbotCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4">
            Technical Project
          </span>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            RAG QnA Chatbot for Developers
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Built a 100% free RAG-powered chatbot that answers developer questions about PRDs in real-time, reducing PM clarification requests by 70% and saving 2+ hours per developer per week.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-green-600" />
              <span className="text-3xl font-bold text-slate-900">70%</span>
            </div>
            <p className="text-slate-600">Reduction in Clarification Requests</p>
            <p className="text-sm text-slate-500 mt-1">Developers answer their own questions</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-6 h-6 text-blue-600" />
              <span className="text-3xl font-bold text-slate-900">$0</span>
            </div>
            <p className="text-slate-600">Monthly Cost</p>
            <p className="text-sm text-slate-500 mt-1">100% free using Pinecone free tier</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-purple-600" />
              <span className="text-3xl font-bold text-slate-900">12+</span>
            </div>
            <p className="text-slate-600">Developers Supported</p>
            <p className="text-sm text-slate-500 mt-1">Across Backend, Frontend, Data Science</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 space-y-12">

          {/* Problem Statement */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-purple-600">01</span> Problem Statement
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <p>
                As a <strong>Product Manager working with 12+ developers</strong> across Backend, Frontend, and Data Science teams, I noticed a recurring bottleneck: <strong>developers spent 30% of their time asking clarification questions</strong> about Product Requirement Documents (PRDs).
              </p>

              <div className="bg-red-50 rounded-lg p-6 my-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">The Developer Pain Points</h3>
                <ul className="space-y-3 text-slate-700">
                  <li>
                    <strong>Reading lengthy PRDs trying to understand requirements:</strong> PRDs ranged from 10-30 pages with dense technical requirements. Developers would spend hours reading to find answers to specific questions.
                  </li>
                  <li>
                    <strong>Waiting for PM availability to clarify doubts:</strong> With 12+ developers and 1 PM, there was a constant queue of questions. Average response time: 2-4 hours during busy sprints.
                  </li>
                  <li>
                    <strong>Context-switching between documentation and implementation:</strong> Developers would lose focus switching between code, PRDs, Figma, and Slack threads—significantly reducing productivity.
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-slate-900">
                The result? <strong>Slower development cycles, blocked engineers, and PM burnout from answering the same questions repeatedly.</strong>
              </p>

              <blockquote className="border-l-4 border-slate-300 bg-slate-50 p-6 rounded-r-lg my-6">
                <p className="text-lg italic text-slate-800">
                  "I spend at least 30% of my day answering clarification questions. It's the same questions from different teams: 'What API should I use? What's the database schema? What edge cases should I handle?' I need to scale myself."
                </p>
                <p className="text-sm text-slate-600 mt-2">— Internal reflection during sprint retrospective</p>
              </blockquote>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-purple-600">02</span> Technical Solution
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <p className="text-xl font-semibold text-slate-900">
                I built a RAG (Retrieval-Augmented Generation) powered chatbot that answers developer questions about PRDs in real-time—with implementation guidance, code suggestions, and source citations.
              </p>

              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Core Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-slate-900">Document Indexing</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Automatically indexes PRD documents (PDF, Markdown, DOCX) with intelligent chunking and metadata preservation.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-slate-900">Semantic Search</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Uses Pinecone vector database with automatic reranking to find the most relevant PRD sections.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-slate-900">Multi-LLM Support</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Compatible with Azure OpenAI, Vertex AI, Anthropic Bedrock, or Ollama (100% offline option).
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-slate-900">Role-Specific Responses</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Tailored responses for Backend, Frontend, and Data Science developers with implementation plans.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">System Architecture</h3>
              <div className="bg-slate-900 rounded-lg p-8 my-6 text-slate-100 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
{`┌─────────────────────────────────────────┐
│      Frontend (Streamlit)               │
│  • Chat Interface                       │
│  • Document Upload                      │
│  • Model Selector                       │
│  • Source Citations                     │
└──────────────┬──────────────────────────┘
               │ REST API
               ▼
┌─────────────────────────────────────────┐
│       Backend API (FastAPI)             │
│  • Query Endpoint                       │
│  • Upload Endpoint                      │
│  • RAG Engine                           │
└──────┬──────────────────┬───────────────┘
       │                  │
       ▼                  ▼
┌─────────────┐   ┌──────────────────┐
│  Pinecone   │   │   LLM Router     │
│  (FREE)     │   │   Multi-Model    │
│  Integrated │   │   Support        │
│  Embeddings │   │                  │
└─────────────┘   └──────────────────┘`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Tech Stack Decisions</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Pinecone for Vector Database</h4>
                    <p className="text-slate-600 text-sm">
                      <strong>Why:</strong> Managed service with integrated embeddings (no separate embedding step), production-ready, and <strong>free tier supports 100K vectors</strong>—perfect for 10-20 PRDs.
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Alternative considered: ChromaDB (local) - rejected due to lack of managed scaling and reranking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">FastAPI for Backend</h4>
                    <p className="text-slate-600 text-sm">
                      <strong>Why:</strong> Modern, async Python framework with automatic OpenAPI docs—enables developers to test queries via Swagger UI without frontend.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Multi-LLM Router</h4>
                    <p className="text-slate-600 text-sm">
                      <strong>Why:</strong> Support for Azure OpenAI, Vertex AI (Gemini), Anthropic Bedrock (Claude), and Ollama ensures <strong>flexibility</strong>—developers can use existing LLM access or run 100% offline with Ollama.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Developer-Focused Prompts</h4>
                    <p className="text-slate-600 text-sm">
                      <strong>Why:</strong> Generic LLM responses aren't actionable. I designed role-specific prompts that return <strong>implementation plans, API designs, database schemas, and code structure recommendations</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Details */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-purple-600">03</span> Implementation Highlights
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1. Intelligent Document Processing</h3>
              <p>
                PRDs come in various formats (PDF, Markdown, DOCX) and can be 30+ pages long. I implemented:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Smart chunking:</strong> 1000-character chunks with 200-character overlap to preserve context across chunk boundaries
                </li>
                <li>
                  <strong>Metadata extraction:</strong> Filename, page numbers, section headers preserved for source citations
                </li>
                <li>
                  <strong>Auto-indexing:</strong> Place PRD in documents folder → automatic indexing on startup (no manual steps)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2. Semantic Search + Reranking</h3>
              <p>
                Simple vector search wasn't accurate enough. I added <strong>automatic reranking</strong> using Pinecone's hosted <code className="bg-slate-100 px-2 py-1 rounded text-sm">bge-reranker-v2-m3</code> model:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 my-4 border border-slate-200">
                <p className="text-sm text-slate-700">
                  <strong>Before reranking:</strong> Top 3 chunks contained answer 60% of the time<br />
                  <strong>After reranking:</strong> Top 3 chunks contained answer <strong>80%+ of the time</strong>
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3. Role-Specific Response Generation</h3>
              <p>
                Different developers need different answers. A Backend engineer asking "How do I implement scoring?" needs:
              </p>
              <div className="bg-blue-50 rounded-lg p-5 my-4 border border-blue-200">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ API endpoint design</li>
                  <li>✓ Database schema</li>
                  <li>✓ Authentication/authorization requirements</li>
                  <li>✓ Error handling strategies</li>
                  <li>✓ Testing approach</li>
                </ul>
              </div>
              <p>
                A Frontend engineer asking the same question needs:
              </p>
              <div className="bg-green-50 rounded-lg p-5 my-4 border border-green-200">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ UI component structure</li>
                  <li>✓ State management approach</li>
                  <li>✓ API integration points</li>
                  <li>✓ UX edge cases to handle</li>
                </ul>
              </div>
              <p>
                I designed separate prompt templates for each role to ensure answers were immediately actionable.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4. Cost Optimization: $0/Month</h3>
              <p>
                By using <strong>Pinecone's free tier</strong> (100K vectors with integrated embeddings) and existing LLM access (Azure OpenAI that teams already had), the chatbot costs <strong>$0/month to run</strong>.
              </p>
              <div className="bg-green-50 rounded-lg p-5 my-4 border border-green-200">
                <p className="font-semibold text-slate-900 mb-2">Cost Breakdown</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Pinecone: $0 (free tier, 100K vectors)</li>
                  <li>• Embeddings: $0 (Pinecone integrated embeddings)</li>
                  <li>• LLMs: $0 (using existing Azure OpenAI access)</li>
                  <li>• Hosting: $0 (runs locally or Render free tier)</li>
                </ul>
                <p className="font-bold text-green-700 mt-3">Total: $0/month</p>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-purple-600">04</span> Impact & Results
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="text-4xl font-bold text-green-700 mb-2">70%</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">Reduction in Clarification Requests</div>
                  <p className="text-slate-700 text-sm">
                    Developers now answer 70% of their own questions using the chatbot—freeing up PM time for strategic work.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="text-4xl font-bold text-blue-700 mb-2">&lt; 3s</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">Query Response Time</div>
                  <p className="text-slate-700 text-sm">
                    Vector search + LLM inference completes in under 3 seconds—fast enough for interactive use during development.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className="text-4xl font-bold text-purple-700 mb-2">2+ hrs</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">Time Saved Per Developer Per Week</div>
                  <p className="text-slate-700 text-sm">
                    Developers spend less time waiting for clarifications and more time shipping features.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <div className="text-4xl font-bold text-orange-700 mb-2">$0</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">Monthly Operating Cost</div>
                  <p className="text-slate-700 text-sm">
                    100% free using Pinecone free tier and existing LLM infrastructure—no additional budget required.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Example Usage</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6 text-slate-100">
                <p className="text-sm text-slate-400 mb-3">Developer Query:</p>
                <p className="text-sm mb-4">"How do I implement the website scoring feature?"</p>

                <p className="text-sm text-slate-400 mb-3">Chatbot Response:</p>
                <div className="text-sm space-y-2 text-slate-300">
                  <p><strong className="text-white">Implementation Plan:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>1. Create scoring API endpoint: <code className="bg-slate-800 px-1.5 py-0.5 rounded">POST /api/score</code></li>
                    <li>2. Database schema: <code className="bg-slate-800 px-1.5 py-0.5 rounded">score_history</code> table with fields...</li>
                    <li>3. Scoring algorithm: Use weighted factors (traffic, tech stack, company size)</li>
                    <li>4. Response format: Return score (0-100), confidence level, and factors</li>
                  </ul>
                  <p className="mt-3 text-xs text-slate-400">
                    📄 Sources: scoring-prd.pdf (pages 5-7), architecture-doc.md (section 3.2)
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded-r-lg my-8">
                <p className="text-lg italic text-slate-800 mb-2">
                  "This chatbot is like having a PM available 24/7. I don't have to wait hours for clarifications anymore—I just ask and get actionable implementation guidance instantly."
                </p>
                <p className="text-sm text-slate-600">— Backend Developer on the team</p>
              </blockquote>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-purple-600">05</span> Key Learnings
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1. Reranking is Non-Negotiable</h3>
              <p>
                Initial vector search alone wasn't accurate enough (60% top-3 accuracy). Adding automatic reranking boosted accuracy to 80%+ and made responses trustworthy enough for production use.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2. Role-Specific Prompts Matter</h3>
              <p>
                Generic responses weren't actionable. By tailoring prompts to Backend, Frontend, and Data Science roles, I ensured developers got <strong>exactly the information they needed</strong>—not generic summaries.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3. Free Tier is Production-Ready</h3>
              <p>
                Pinecone's free tier (100K vectors) is sufficient for 10-20 PRDs. This proved that <strong>you don't need a large budget to ship high-impact AI products</strong>—smart architecture and tool selection matter more than spending.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4. Developer Experience is Product Experience</h3>
              <p>
                The chatbot's success wasn't just about accuracy—it was about <strong>response speed ({'<'} 3s), source citations, and implementation guidance</strong>. Developers adopted it because it fit seamlessly into their workflow.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5. Build for Autonomy, Not Replacement</h3>
              <p>
                The goal wasn't to replace PM-developer communication—it was to <strong>enable developers to answer routine questions independently</strong>, freeing PMs to focus on strategic decisions and complex edge cases.
              </p>
            </div>
          </section>

          {/* Technical Details Link */}
          <section className="border-t pt-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-blue-600" />
                Want to see the code?
              </h3>
              <p className="text-slate-700 mb-4">
                The RAG QnA Chatbot is fully open-source and production-ready. Explore the architecture, tech stack, and implementation details.
              </p>
              <a
                href="https://github.com/ayandhanda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                View on GitHub
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

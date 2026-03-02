import Link from 'next/link';
import { ArrowLeft, Clock, Users, TrendingUp, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Ask AI - Natural Language Data Query Interface | Ayan Dhanda',
  description: 'Built a natural language query interface that reduced SDR data retrieval time by 95% and enabled non-technical users to self-serve data.',
};

export default function AskAICaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
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
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
            Shipped Product
          </span>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Ask AI: Natural Language Data Query Interface
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Built an AI-powered query interface that reduced data retrieval time from 1-2 hours to 5 minutes (95% reduction) and empowered non-technical SDRs to self-serve data.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-green-600" />
              <span className="text-3xl font-bold text-slate-900">95%</span>
            </div>
            <p className="text-slate-600">Time Reduction</p>
            <p className="text-sm text-slate-500 mt-1">1-2 hours → 5 minutes per query</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-3xl font-bold text-slate-900">50-80%</span>
            </div>
            <p className="text-slate-600">SDR Adoption</p>
            <p className="text-sm text-slate-500 mt-1">Moderate-to-high active usage</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <span className="text-3xl font-bold text-slate-900">100%</span>
            </div>
            <p className="text-slate-600">Self-Service</p>
            <p className="text-sm text-slate-500 mt-1">Non-technical users now independent</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 space-y-12">

          {/* Context */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-blue-600">01</span> Context
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <p>
                At <strong>Sprouts.ai</strong>, I served as an <strong>Associate Product Manager</strong> on a lean, fast-moving team building AI-powered sales intelligence tools. Our platform helps sales teams identify high-intent prospects through automated enrichment and intelligent signals.
              </p>
              <p>
                The SDR (Sales Development Representative) team was a critical user segment—responsible for outbound prospecting, account research, and personalized outreach. However, they faced a persistent bottleneck: <strong>accessing and analyzing data</strong>.
              </p>
              <p>
                Our internal data was stored across multiple systems: CRM (Salesforce), data warehouses, enrichment APIs, and third-party integrations. While this data was powerful, <strong>retrieving it required either SQL queries (for technical users) or manual exports/filters (slow and error-prone)</strong>.
              </p>
            </div>
          </section>

          {/* Problem Discovery */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-blue-600">02</span> Problem Discovery
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <p>
                Through interviews with 15+ SDRs and sales leaders, I identified three critical pain points:
              </p>

              <div className="bg-slate-50 rounded-lg p-6 my-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Pain Point #1: Time-Intensive Data Retrieval</h3>
                <p className="text-slate-700">
                  SDRs spent <strong>1-2 hours per query</strong> to pull basic data. For example, a query like "Show me healthcare companies with 50-200 employees that raised funding in the last 6 months" required:
                </p>
                <ul className="space-y-2 mt-3">
                  <li>• Requesting help from the data team (30-60 min wait)</li>
                  <li>• Manually filtering CRM exports (30-45 min)</li>
                  <li>• Cross-referencing multiple tools (15-30 min)</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 my-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Pain Point #2: Data Accessibility Barriers</h3>
                <p className="text-slate-700">
                  <strong>Non-technical SDRs were blocked</strong> by the need to write SQL or understand complex data schemas. This created dependencies on engineering and data science teams, who were already stretched thin.
                </p>
                <p className="text-slate-700 mt-2">
                  As one SDR put it: <em>"I know what data I need, but I have no idea how to get it without bothering someone."</em>
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 my-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Pain Point #3: Limited Personalization & Targeting</h3>
                <p className="text-slate-700">
                  Without easy access to enrichment data (recent news, funding, job changes), SDRs struggled to personalize outreach. This led to:
                </p>
                <ul className="space-y-2 mt-3">
                  <li>• Generic messaging that didn't resonate</li>
                  <li>• Lower response rates (sub-5% for cold outreach)</li>
                  <li>• Missed opportunities to engage at the right time</li>
                </ul>
              </div>

              <p className="font-semibold text-slate-900 mt-6">
                The opportunity was clear: <strong>democratize data access</strong> by building a natural language query interface that any SDR could use—regardless of technical skill.
              </p>
            </div>
          </section>

          {/* Solution Strategy */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-blue-600">03</span> Solution Strategy
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Why Natural Language?</h3>
              <p>
                I evaluated three approaches to solve the data accessibility problem:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-slate-900 mb-2">❌ Advanced Filters</h4>
                  <p className="text-sm text-slate-600">Still requires understanding of data structure. Complex queries become unwieldy.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-slate-900 mb-2">⚠️ Visual Query Builder</h4>
                  <p className="text-sm text-slate-600">Better than filters but limited flexibility. Still a learning curve.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-slate-900 mb-2">✅ Natural Language</h4>
                  <p className="text-sm text-slate-600">Zero learning curve. Intuitive. Handles complex queries effortlessly.</p>
                </div>
              </div>

              <p>
                I chose <strong>natural language</strong> because it had the lowest barrier to entry and could scale to handle increasingly complex queries as users got comfortable with the tool.
              </p>

              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Technical Architecture</h3>
              <p>
                The core technical challenge was <strong>semantic search</strong>: understanding user intent and mapping natural language to structured data queries.
              </p>

              <div className="bg-slate-900 rounded-lg p-6 my-6 text-slate-100">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Ask AI Architecture
                </h4>
                <div className="space-y-3 text-sm font-mono">
                  <div>User Query → <span className="text-blue-400">[Vector Embeddings]</span> → Semantic Search</div>
                  <div>↓</div>
                  <div>Match Query Intent → <span className="text-green-400">[Schema Mapping]</span> → Generate Query</div>
                  <div>↓</div>
                  <div>Execute Query → <span className="text-yellow-400">[Data Sources]</span> → Return Results</div>
                  <div>↓</div>
                  <div>Format & Present → <span className="text-purple-400">[UI Display]</span> → Actionable Insights</div>
                </div>
              </div>

              <p>
                I implemented <strong>vector database semantic search</strong> to understand user queries. This allowed the system to:
              </p>
              <ul className="space-y-2">
                <li>• Understand synonyms and context (<em>"funded companies"</em> = <em>"raised capital"</em>)</li>
                <li>• Handle ambiguous queries (<em>"big companies"</em> could mean revenue or employee count)</li>
                <li>• Learn from past queries to improve accuracy over time</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Data Sources Integrated</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    Company Data
                  </h4>
                  <p className="text-sm text-slate-600">Industry, size, revenue, location, tech stack</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    Contact Data
                  </h4>
                  <p className="text-sm text-slate-600">Job titles, departments, LinkedIn profiles, emails</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Real-Time Enrichment
                  </h4>
                  <p className="text-sm text-slate-600">News, funding rounds, job changes, hiring signals</p>
                </div>
              </div>
            </div>
          </section>

          {/* Execution */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-blue-600">04</span> Execution & Iteration
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900 mt-6 mb-4">Cross-Functional Collaboration</h3>
              <p>
                Shipping Ask AI required tight collaboration across engineering, design, and sales leadership:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Weekly Engineering Syncs</h4>
                    <p className="text-slate-600">
                      Collaborated with the engineering team to validate technical feasibility, prioritize features, and make architectural tradeoffs (e.g., latency vs. accuracy for semantic search).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Design Reviews for UI/UX</h4>
                    <p className="text-slate-600">
                      Worked with design to ensure the query interface was intuitive. We iterated on input suggestions, result formatting, and error handling to minimize friction.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Sales Leadership Buy-In</h4>
                    <p className="text-slate-600">
                      Secured adoption strategy support from sales leadership by demonstrating time savings in pilot. Created training materials and success metrics to drive rollout.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">Challenges & Solutions</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-slate-900 mb-2">Challenge: Query Ambiguity</h4>
                  <p className="text-slate-700 mb-2">
                    Early versions struggled with ambiguous queries like "big companies" (did users mean revenue or employees?).
                  </p>
                  <p className="text-slate-700">
                    <strong>Solution:</strong> Implemented clarifying prompts and smart defaults based on context. If ambiguous, Ask AI would ask follow-up questions or show multiple interpretations.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-slate-900 mb-2">Challenge: Query Latency</h4>
                  <p className="text-slate-700 mb-2">
                    Initial semantic search + query generation took 10-15 seconds, too slow for real-time use.
                  </p>
                  <p className="text-slate-700">
                    <strong>Solution:</strong> Optimized vector search with caching and pre-computed embeddings. Reduced latency to 2-3 seconds—fast enough for SDRs to use interactively.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-blue-600">05</span> Impact & Results
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <p className="text-xl font-semibold text-slate-900">
                Ask AI delivered immediate, measurable impact across efficiency, adoption, and outreach quality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="text-4xl font-bold text-green-700 mb-2">95%</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">Time Reduction</div>
                  <p className="text-slate-700 text-sm">
                    Complex queries that previously took 1-2 hours now completed in 5 minutes—enabling SDRs to run 10x more queries per day.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="text-4xl font-bold text-blue-700 mb-2">50-80%</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">SDR Adoption</div>
                  <p className="text-slate-700 text-sm">
                    Moderate-to-high adoption among SDR team within first 3 months. Active daily usage for prospecting and account research.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className="text-4xl font-bold text-purple-700 mb-2">100%</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">Self-Service</div>
                  <p className="text-slate-700 text-sm">
                    Non-technical SDRs now fully independent—zero reliance on data/engineering teams for standard queries.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <div className="text-4xl font-bold text-orange-700 mb-2">Improved</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">Outreach Quality</div>
                  <p className="text-slate-700 text-sm">
                    SDRs leveraged real-time enrichment data for personalized messaging, leading to better targeting and higher response rates.
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg my-8">
                <p className="text-lg italic text-slate-800 mb-2">
                  "Ask AI completely changed how I prospect. I used to wait hours for data pulls—now I just ask a question and get exactly what I need in seconds."
                </p>
                <p className="text-sm text-slate-600">— SDR Team Member, Sprouts.ai</p>
              </blockquote>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-blue-600">06</span> Key Learnings
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1. Solve for Non-Technical Users First</h3>
              <p>
                The biggest unlock wasn't the technology—it was <strong>democratizing access</strong>. By designing for the least technical user, we created a tool that everyone could use, not just power users.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2. Latency is a Feature</h3>
              <p>
                In AI products, <strong>speed matters as much as accuracy</strong>. We initially prioritized query accuracy, but users abandoned the tool if results took {'>'} 5 seconds. Optimizing latency was critical for adoption.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3. Iterate with Real Users Early</h3>
              <p>
                Our initial design assumed users would ask well-formed questions. Reality: queries were often vague or ambiguous. Testing with SDRs early surfaced these edge cases and drove key UX improvements.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4. Show, Don't Tell</h3>
              <p>
                Sales leadership was skeptical until we ran a live demo showing a 2-hour data pull completed in 30 seconds. <strong>Demonstrating ROI with real examples</strong> was far more persuasive than projected metrics.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

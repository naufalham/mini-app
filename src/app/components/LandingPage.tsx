import { Sparkles, TrendingUp, Zap, Send } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <div className="max-w-[430px] mx-auto text-white">
        {/* Header */}
        <header className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Bit AI" className="w-7 h-7" />
            <span className="font-bold text-lg">Bit AI</span>
          </div>
          <button className="px-4 py-1.5 border border-blue-500 text-blue-400 rounded-lg text-sm">
            Contact
          </button>
        </header>

        {/* Hero Section */}
        <section className="px-4 py-12 text-center">
          <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-700/50 rounded-full text-blue-400 text-xs mb-4">
            JOIN US IN BASE
          </div>
          <h1 className="text-3xl font-bold mb-4 leading-tight">
            Automate Your <br />
            <span className="text-blue-500">Web3 Social</span> <br />
            <span className="text-blue-500">Presence With AI</span>
          </h1>
          <p className="text-gray-400 text-sm mb-6 px-2">
            Harness real-time trends on Base to generate,
            schedule, and optimize your social growth
            automatically.
          </p>
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </button>
            <button className="text-blue-400 text-sm">
              Learn More →
            </button>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="px-4 py-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 h-3 bg-blue-800/30 rounded"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-800/20 rounded-lg p-3 h-24"></div>
                <div className="bg-blue-800/20 rounded-lg p-3 h-24 flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-blue-500/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="px-4 py-12">
          <div className="text-center mb-8">
            <div className="text-blue-400 text-xs tracking-widest mb-3">CORE FEATURES</div>
            <h2 className="text-3xl font-bold mb-3 leading-tight">
              Powered by the <br />
              <span className="text-blue-500">Base Ecosystem</span>
            </h2>
            <p className="text-gray-400 text-sm px-2">
              Advanced automation tools for the next generation of social networks,
              powered by AI and blockchain.
            </p>
          </div>

          <div className="space-y-4">
            {/* Trend Oracle */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Trend Oracle</h3>
                  <p className="text-gray-400 text-sm">
                    Stay ahead by identifying what's trending on Base.
                    Real-time data insights turn viral moments into growth
                    opportunities at scale.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Engine */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">AI Engine</h3>
                  <p className="text-gray-400 text-sm">
                    Generate high-quality Web3 content tailored to your
                    audience on-chain. Human-level creativity, machine-level
                    consistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Auto Post */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Send className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Auto Post</h3>
                  <p className="text-gray-400 text-sm">
                    Hands-free scheduling across decentralized social
                    platforms. Grow your presence and amplify your voice, 24/7,
                    effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">
              Ready to pulse?
            </h2>
            <p className="text-blue-100 text-sm mb-6">
              Join thousands of creators automating their growth on Base.
              The future of social is here.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 border-t border-blue-900/30">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>POWERED BY</span>
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-900/30 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-white text-xs">BASE</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <button className="text-gray-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="text-gray-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
              <button className="text-gray-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </button>
            </div>
            <p className="text-gray-500 text-xs">
              © 2025 Bit AI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

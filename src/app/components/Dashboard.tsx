import { Home, Zap, Plus, CreditCard, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Mock generated posts data
  const generatedPosts = [
    {
      id: 1,
      hook: "The blue waves are hitting differently this season! 🌊🔵",
      platform: "Farcaster",
      time: "2 mins ago",
      status: "POSTED"
    },
    {
      id: 2,
      hook: "Time to ride the $BASE wave! 🚀 The ecosystem is cooking",
      platform: "Lens",
      time: "15 mins ago",
      status: "POSTED"
    },
    {
      id: 3,
      hook: "When $BASE memes hit different 💎 The new wave is here",
      platform: "X",
      time: "1 hour ago",
      status: "SCHEDULED"
    },
    {
      id: 4,
      hook: "Blue vibes only! 🔵 $BASE network is changing the game",
      platform: "Farcaster",
      time: "2 hours ago",
      status: "POSTED"
    },
    {
      id: 5,
      hook: "Breaking: $BASE memes are now classified as essential",
      platform: "Lens",
      time: "3 hours ago",
      status: "DRAFT"
    },
    {
      id: 6,
      hook: "Another amazing post from AI generation system",
      platform: "X",
      time: "5 hours ago",
      status: "POSTED"
    },
    {
      id: 7,
      hook: "Blockchain culture is evolving with BASE ecosystem",
      platform: "Farcaster",
      time: "6 hours ago",
      status: "POSTED"
    },
  ];

  const totalPages = Math.ceil(generatedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = generatedPosts.slice(startIndex, startIndex + postsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'POSTED': return 'bg-green-500/20 text-green-400';
      case 'SCHEDULED': return 'bg-yellow-500/20 text-yellow-400';
      case 'DRAFT': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0D1F]">
      <div className="max-w-[430px] mx-auto text-white">
        {/* Header */}
        <header className="px-4 py-4 flex items-center justify-between bg-[#0F1328]">
          <div>
            <div className="text-xs text-gray-400">0x12...3456</div>
            <div className="text-xs text-blue-400 mt-0.5">BASE MAINNET</div>
          </div>
          <button className="px-3 py-1.5 border border-blue-500 text-blue-400 rounded-lg text-xs">
            Wallet Balance
          </button>
        </header>

        {/* Balance Cards */}
        <div className="px-4 py-6 grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-4">
            <div className="text-xs text-gray-400 mb-2">TOKEN BALANCE</div>
            <div className="text-2xl font-bold mb-1">250 Token</div>
            <div className="text-xs text-green-400">📈 +5.2%</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-4">
            <div className="text-xs text-gray-400 mb-2">POSTS TODAY</div>
            <div className="text-2xl font-bold mb-1">12</div>
            <div className="text-xs text-green-400">📈 +20%</div>
          </div>
        </div>

        {/* Quick Create */}
        <div className="px-4 pb-6">
          <div className="bg-[#1A1F3A] rounded-2xl p-6 relative">
            <div className="absolute top-4 right-4 px-2 py-1 bg-blue-600 rounded-md text-xs font-semibold">
              AI POWERED
            </div>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold mb-1">Quick Create</h3>
                <p className="text-sm text-gray-400">
                  Start AI generation for your next automated post on Base.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/ai-content-studio')}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Generate Now
            </button>
          </div>
        </div>

        {/* Generated Posts */}
        <div className="px-4 pb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold">Generated Posts</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-1 text-gray-400 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-400">{currentPage}/{totalPages}</span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-1 text-gray-400 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {currentPosts.map((post) => (
              <div key={post.id} className="bg-[#1A1F3A] border border-blue-700/30 rounded-xl p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-sm text-gray-300 leading-relaxed flex-1">{post.hook}</p>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap ${getStatusColor(post.status)}`}>
                    {post.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.platform}</span>
                  <span>{post.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-[#0F1328] border-t border-blue-900/30 px-4 py-3">
          <div className="max-w-[430px] mx-auto flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 text-blue-500">
              <Home className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => navigate('/ai-content-studio')}
              className="flex flex-col items-center gap-1 -mt-8"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/50 mb-1">
                <Zap className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <span className="text-xs text-blue-400 font-semibold">AI Studio</span>
            </button>
            <button
              onClick={() => navigate('/wallet')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <CreditCard className="w-5 h-5" />
              <span className="text-xs">Balance</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
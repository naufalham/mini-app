import { ArrowLeft, Settings, Home, Zap, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Wallet() {
  const navigate = useNavigate();

  const topupHistory = [
    { id: 1, amount: 100, date: 'Jan 28, 2026' },
    { id: 2, amount: 50, date: 'Jan 25, 2026' },
    { id: 3, amount: 150, date: 'Jan 20, 2026' },
  ];

  const generateActivities = [
    { id: 1, hook: "The blue waves are hitting differently this season!", date: 'Jan 29, 2026', time: '2 hours ago' },
    { id: 2, hook: "Time to ride the $BASE wave!", date: 'Jan 29, 2026', time: '5 hours ago' },
    { id: 3, hook: "When $BASE memes hit different", date: 'Jan 28, 2026', time: '1 day ago' },
    { id: 4, hook: "Blue vibes only!", date: 'Jan 28, 2026', time: '1 day ago' },
    { id: 5, hook: "Breaking: $BASE memes are now classified as essential", date: 'Jan 27, 2026', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0D1F] text-white max-w-[430px] mx-auto pb-20">
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-between bg-[#0F1328]">
        <button onClick={() => navigate('/dashboard')} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-center">
          <h1 className="font-bold">Wallet</h1>
          <p className="text-xs text-blue-400">BASE NETWORK</p>
        </div>
        <button className="text-white">
          <Settings className="w-6 h-6" />
        </button>
      </header>

      {/* Balance Card */}
      <div className="px-4 py-6">
        <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-700/30 rounded-3xl p-8 mb-6">
          {/* Balance Circle */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-4 border-blue-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Balance Amount */}
          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2">250 Token</div>
          </div>

          {/* Action Buttons */}
          <div className="w-full">
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
              <span className="text-lg">+</span>
              Buy Token
            </button>
          </div>
        </div>

        {/* Top Up History */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Top Up History</h3>
          </div>

          <div className="space-y-3">
            {topupHistory.map((item) => (
              <div key={item.id} className="bg-[#1A1F3A] border border-blue-700/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Top Up</h4>
                      <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">+{item.amount} Token</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Activity */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Generate Activity</h3>
          </div>

          <div className="space-y-3">
            {generateActivities.map((item) => (
              <div key={item.id} className="bg-[#1A1F3A] border border-blue-700/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1 line-clamp-1">{item.hook}</h4>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-400">{item.date}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-[#0F1328] border-t border-blue-900/30 px-4 py-3">
        <div className="flex items-center justify-around">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
          >
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
          <button className="flex flex-col items-center gap-1 text-blue-500">
            <CreditCard className="w-5 h-5" />
            <span className="text-xs">Balance</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
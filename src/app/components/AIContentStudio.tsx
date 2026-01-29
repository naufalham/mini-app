import { useState } from 'react';
import { ArrowLeft, Zap, Copy, RotateCcw, Home, CreditCard, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';
import PreviewPublish from './PreviewPublish';

type PersonalityType = 'Funny & Engaging' | 'Professional & Informative' | 'Bold & Provocative' | 'Casual & Friendly' | 'Technical & Detailed';

export default function AIContentStudio() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'generate' | 'hooks' | 'preview'>('generate');
  const [selectedPersonality, setSelectedPersonality] = useState<PersonalityType>('Funny & Engaging');
  const [additionalContext, setAdditionalContext] = useState('');
  const [selectedHook, setSelectedHook] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const hooks = [
    "The blue waves are hitting differently this season! 🌊🔵 Just bridge and chill while the $BASE ecosystem cooks up the next generation of meme legends.",
    "Time to ride the $BASE wave! 🚀 The ecosystem is cooking and memes are trending harder than ever. Are you ready?",
    "When $BASE memes hit different 💎 The new wave of blockchain culture is here and it's unstoppable!",
    "Blue vibes only! 🔵 $BASE network is changing the game one meme at a time. Join the revolution!",
    "Breaking: $BASE memes are now classified as essential nutrients for your portfolio 🌊💰"
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep('hooks');
    }, 2000);
  };

  const handleSelectHook = (index: number) => {
    setSelectedHook(index);
    setTimeout(() => {
      setStep('preview');
    }, 300);
  };

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  if (step === 'preview' && selectedHook !== null) {
    return <PreviewPublish selectedHook={hooks[selectedHook]} onBack={() => setStep('hooks')} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0D1F] text-white max-w-[430px] mx-auto pb-20">
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-between bg-[#0F1328]">
        <button onClick={() => step === 'generate' ? navigate('/dashboard') : setStep('generate')} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-center">
          <h1 className="font-bold">AI Content Studio</h1>
          <p className="text-xs text-blue-400">BASE NETWORK</p>
        </div>
        <div className="w-6"></div>
      </header>

      {step === 'generate' && (
        <div className="px-4 py-6">
          {/* Personality */}
          <div className="mb-6">
            <label className="block text-xs text-gray-400 mb-3 uppercase tracking-wider">Personality</label>
            <div className="relative">
              <select
                value={selectedPersonality}
                onChange={(e) => setSelectedPersonality(e.target.value as PersonalityType)}
                className="w-full bg-[#1A1F3A] border border-blue-700/30 rounded-xl p-4 text-sm text-white appearance-none cursor-pointer focus:outline-none focus:border-blue-500 pr-10"
              >
                <option value="Funny & Engaging">Funny & Engaging</option>
                <option value="Professional & Informative">Professional & Informative</option>
                <option value="Bold & Provocative">Bold & Provocative</option>
                <option value="Casual & Friendly">Casual & Friendly</option>
                <option value="Technical & Detailed">Technical & Detailed</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Additional Context */}
          <div className="mb-6">
            <label className="block text-xs text-gray-400 mb-3 uppercase tracking-wider">Additional Context</label>
            <textarea
              value={additionalContext}
              onChange={(e) => setAdditionalContext(e.target.value)}
              placeholder="Add specific keywords or instructions for the AI..."
              className="w-full bg-[#1A1F3A] border border-blue-700/30 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
              rows={4}
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <Zap className="w-5 h-5" />
            {isGenerating ? 'Generating...' : 'Generate Content'}
            <span className="ml-2 text-xs">- 1 Token</span>
          </button>
        </div>
      )}

      {step === 'hooks' && (
        <div className="px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">Draft Preview</h2>
            <button
              onClick={handleRegenerate}
              disabled={isGenerating}
              className="text-blue-400 text-sm flex items-center gap-1 hover:text-blue-300"
            >
              <RotateCcw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              Regenerate
            </button>
          </div>

          {/* Hooks List */}
          <div className="space-y-3">
            {isGenerating ? (
              <>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-[#1A1F3A] border border-blue-700/30 rounded-xl p-4 animate-pulse">
                    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {hooks.map((hook, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectHook(index)}
                    className="w-full bg-[#1A1F3A] border border-blue-700/30 hover:border-blue-500 rounded-xl p-4 text-left transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm text-gray-300 leading-relaxed flex-1">{hook}</p>
                      <button className="p-2 rounded-lg bg-blue-600/20 group-hover:bg-blue-600 transition-all">
                        <Copy className="w-4 h-4 text-blue-400 group-hover:text-white" />
                      </button>
                    </div>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}
      
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
          <button className="flex flex-col items-center gap-1 -mt-8">
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
  );
}
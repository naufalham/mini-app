import { X, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface PreviewPublishProps {
  selectedHook: string;
  onBack: () => void;
}

export default function PreviewPublish({ selectedHook, onBack }: PreviewPublishProps) {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedHook);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePublish = () => {
    // Mock publish action
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0D1F] text-white max-w-[430px] mx-auto">
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-between bg-[#0F1328] border-b border-gray-800">
        <button onClick={onBack} className="text-white">
          <X className="w-6 h-6" />
        </button>
        <h1 className="font-bold">Preview & Publish</h1>
        <div className="w-6"></div>
      </header>

      {/* Post Preview Section */}
      <div className="px-4 py-6">
        <h2 className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Post Preview</h2>
        
        <div className="bg-[#1A1F3A] border border-blue-700/30 rounded-2xl p-6 mb-6 relative">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600 transition-all"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-400" />
            ) : (
              <Copy className="w-5 h-5 text-blue-400" />
            )}
          </button>

          {/* Post Content */}
          <p className="text-base leading-relaxed text-gray-200 pr-12">
            {selectedHook}
          </p>
        </div>

        {/* Publish Button */}
        <button
          onClick={handlePublish}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all"
        >
          Publish Now
        </button>
      </div>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import { useQuickAuth, useMiniKit } from "@coinbase/onchainkit/minikit";
import { useRouter } from "next/navigation";
import { minikitConfig } from "../minikit.config";
import styles from "./page.module.css";


type Step = 'input' | 'select-hook' | 'result';

export default function AIContentGenerator() {
  const [loading, setLoading] = useState(false);
  const [hooks, setHooks] = useState<string[]>([]);
  const [selectedHook, setSelectedHook] = useState<string>('');
  const [result, setResult] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [step, setStep] = useState<Step>('input');
  const [form, setForm] = useState({
    topic: '',
    personality: 'Tsundere',
    userPrompt: '',
    provider: 'groq'
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Step 1: Generate 5 Hooks
  const generateHooks = async () => {
    if (!form.topic.trim()) {
      alert("Masukkan topik terlebih dahulu!");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/generate-hooks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (data.success && data.hooks?.length > 0) {
        setHooks(data.hooks);
        setStep('select-hook');
      } else {
        alert("Gagal generate hooks: " + (data.error || JSON.stringify(data)));
      }
    } catch (error) {
      alert("Gagal koneksi ke server: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Generate Full Content with Selected Hook
  const generateContent = async () => {
    if (!selectedHook) {
      alert("Pilih salah satu hook terlebih dahulu!");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, selectedHook })
      });
      const data = await response.json();
      setResult(data);
      setStep('result');
    } catch (error) {
      alert("Gagal koneksi ke server!");
    } finally {
      setLoading(false);
    }
  };

  // Reset to start over
  const resetAll = () => {
    setStep('input');
    setHooks([]);
    setSelectedHook('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 font-sans">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Persona Content AI 🚀</h1>
          <button onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {['input', 'select-hook', 'result'].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === s ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400'}`}>
                {i + 1}
              </div>
              {i < 2 && <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>}
            </div>
          ))}
        </div>

        {/* STEP 1: Input Form */}
        {step === 'input' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Topik Konten</label>
              <input type="text" className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Contoh: Belajar Blockchain"
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pilih Kepribadian</label>
              <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={form.personality}
                onChange={(e) => setForm({ ...form, personality: e.target.value })}>
                <option value="Tsundere">Tsundere (Ketus tapi peduli)</option>
                <option value="Yandere">Yandere (Obsesif/Protektif)</option>
                <option value="Sigma Male">Sigma Male (Dingin/To the point)</option>
                <option value="Anak Jaksel">Anak Jaksel (Mix English)</option>
                <option value="Kuudere">Kuudere (Dingin dan tenang)</option>
                <option value="Dandere">Dandere (Pemalu tapi manis)</option>
                <option value="Genki">Genki (Enerjik dan ceria)</option>
                <option value="Onii-chan">Onii-chan (Kakak laki-laki protektif)</option>
                <option value="Crypto Degen">Crypto Degen (Based & Onchain)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Prompt Tambahan (Opsional)</label>
              <textarea className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" rows={3}
                placeholder="Berikan instruksi khusus..."
                value={form.userPrompt}
                onChange={(e) => setForm({ ...form, userPrompt: e.target.value })} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">AI Provider</label>
              <div className="flex gap-4 mt-2">
                <label className="text-gray-700 dark:text-gray-300"><input type="radio" name="provider" value="groq" checked={form.provider === 'groq'} onChange={() => setForm({ ...form, provider: 'groq' })} /> Groq (Cepat)</label>
                <label className="text-gray-700 dark:text-gray-300"><input type="radio" name="provider" value="eigen" checked={form.provider === 'eigen'} onChange={() => setForm({ ...form, provider: 'eigen' })} /> EigenAI (Web3)</label>
              </div>
            </div>

            <button onClick={generateHooks} disabled={loading}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-500">
              {loading ? "Generating 5 Hooks..." : "🎣 Generate Hooks"}
            </button>
          </div>
        )}

        {/* STEP 2: Select Hook */}
        {step === 'select-hook' && (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pilih 1 dari 5 hook terbaik untuk konten kamu:</p>
            <div className="space-y-2">
              {hooks.map((hook, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedHook(hook)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${selectedHook === hook
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                    } text-gray-800 dark:text-white`}
                >
                  <span className="font-bold text-blue-600 dark:text-blue-400">#{index + 1}</span> {hook}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button onClick={() => setStep('input')}
                className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500">
                ← Kembali
              </button>
              <button onClick={generateContent} disabled={loading || !selectedHook}
                className="flex-1 bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 disabled:bg-green-300 dark:disabled:bg-green-500">
                {loading ? "Generating..." : "✨ Generate Konten"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Result */}
        {step === 'result' && result && (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-bold text-green-800 dark:text-green-200">Output ({result.personality}):</h2>
                <button
                  onClick={() => navigator.clipboard.writeText(result.content)}
                  className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                >
                  📋 Copy
                </button>
              </div>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap text-lg">{result.content}</p>
              <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-700 space-y-1">
                <p className="text-xs text-green-600 dark:text-green-400 font-medium">🎣 Hook: {result.selectedHook}</p>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium italic">🔥 Trends: {result.trendsUsed}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={resetAll}
                className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
                🔄 Buat Baru
              </button>
              <button onClick={() => setStep('select-hook')}
                className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500">
                ← Pilih Hook Lain
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const initialSuggestions = [
  "How do I optimize my mushroom yield?",
  "What is the best temperature for substrate?",
  "How can I prevent common mushroom diseases?",
  "Tell me about Green Group's substrate quality."
];

export default function AIPlanner() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
  if (!text.trim() || isLoading) return;

  const userMessage: Message = { role: 'user', content: text };
  setMessages(prev => [...prev, userMessage]);
  setInput('');
  setIsLoading(true);

  try {
    const response = await getGeminiResponse(text);
    const aiMessage: Message = { role: 'ai', content: response };
    setMessages(prev => [...prev, aiMessage]);
  } catch (error: any) {
    console.error('AI Planner error:', error);

    setMessages(prev => [
      ...prev,
      {
        role: 'ai',
        content: `Error: ${error?.message || 'Diçka shkoi keq.'}`,
      },
    ]);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section id="ai-planner" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="bg-primary-900 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
                    <Bot size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">AI Agricultural Planner</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-primary-200 text-xs font-medium uppercase tracking-widest">Expert Assistant</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setMessages([])}
                  className="p-2 text-primary-300 hover:text-white transition-colors"
                  title="Reset Chat"
                >
                  <RefreshCw size={20} />
                </button>
              </div>

              {/* Chat Messages */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
              >
                {messages.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-center px-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
                      <Sparkles size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Ready to Plan Your Harvest?</h4>
                    <p className="text-slate-500 mb-8">Ask me anything about mushroom cultivation, substrate optimization, or production planning.</p>
                    <div className="grid grid-cols-1 gap-3 w-full">
                      {initialSuggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleSend(suggestion)}
                          className="text-sm text-left p-4 bg-white border border-slate-200 rounded-2xl hover:border-primary-400 hover:bg-primary-50 transition-all text-slate-700 font-medium"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-4",
                      msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm",
                      msg.role === 'user' ? "bg-slate-900 text-white" : "bg-primary-600 text-white"
                    )}>
                      {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                    </div>
                    <div className={cn(
                      "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                      msg.role === 'user' 
                        ? "bg-slate-900 text-white rounded-tr-none" 
                        : "bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm"
                    )}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Bot size={20} />
                    </div>
                    <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-3">
                      <Loader2 size={18} className="animate-spin text-primary-600" />
                      <span className="text-sm text-slate-500 font-medium italic">Thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-6 bg-white border-t border-slate-100">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                  className="relative"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question here..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-700 text-white rounded-xl flex items-center justify-center hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary-700/20"
                  >
                    <Send size={20} />
                  </button>
                </form>
                <p className="text-[10px] text-slate-400 mt-4 text-center uppercase tracking-widest font-medium">
                  Powered by Gemini AI • Expert Agricultural Guidance
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-semibold tracking-widest uppercase text-sm"
            >
              Smart Farming
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8"
            >
              Plan Your Success with <span className="text-primary-600">AI Intelligence</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-slate-600 leading-relaxed"
            >
              <p>
                We believe that the future of agriculture lies in the intersection of tradition and technology. Our AI Agricultural Planner is designed to support farmers of all scales.
              </p>
              <p>
                Whether you are a commercial partner or a local farmer, our AI assistant provides instant, expert-level advice on cultivation, substrate management, and yield optimization.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Instant Expert Advice',
                  'Yield Optimization',
                  'Disease Prevention',
                  'Substrate Guidance',
                  '24/7 Availability',
                  'Regional Context'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

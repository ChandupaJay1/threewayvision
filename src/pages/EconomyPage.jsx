import { useState, useRef, useEffect } from 'react'

const translations = {
  si: {
    back: 'ආපසු ප්‍රධාන පිටුවට',
    title: 'ආර්ථික දැක්ම පද්ධතිය',
    subtitle: 'Strategic Economic Ecosystem',
    actionBtn: 'ආර්ථික දැක්ම මෙතැනින් බලන්න',
    sub1Title: 'Online Shopping',
    sub1Desc: 'ජාතික ඩිජිටල් වෙළඳපොළ',
    sub2Title: 'ව්‍යාපාර සැලසුම්',
    sub2Desc: 'උපායමාර්ගික සැලසුම්කරණය',
    sub3Title: 'ආයෝජන අවස්ථා',
    sub3Desc: 'ආරක්ෂිත ජාතික ආයෝජන',
    sub4Title: 'රැකියා අවස්ථා',
    sub4Desc: 'කුසලතා පදනම් කරගත් වෘත්තීන්',
    aiTitle: 'තුන් කල් ආර්ථික අනුශාසක',
    aiSubtitle: 'AI Strategic Advisor (A-B-C-D Logic)',
    aiPlaceholder: 'ඔබේ අරමුණ හෝ ගැටළුව මෙතැන ලියන්න...',
    aiSend: 'විමසන්න',
    aiInitial: 'තෙරුවන් සරණයි! මම "තුන් කල් දැක්ම" ඩිජිටල් අනුශාසකවරයායි. ආර්ථික හා ජාතික ගැටළුවලට විසඳුම් සෙවීමට පෙර, ඔබේ විමසීම පිටුපස ඇති අරමුණ මට පවසන්න.',
    modalTitle: 'ගැටලු විසඳීමේ ABCD රාමුව',
    modalSubtitle: 'චතුරාර්ය සත්‍ය පදනම් කරගත් සැලසුම්කරණය',
    modalIntro: '"තුන්කල් දැක්ම" ගැටලු විසඳීමේ රාමුව චතුරාර්ය සත්‍යය පදනම් කර ගත් ABCD ක්‍රමයයි. ඕනෑම ගැටලුවක් විසඳීමට සැලසුම්කරණයක් අවශ්‍යයි.',
    modalA: 'ගැටලු විශ්ලේෂණය කිරීම.',
    modalB: 'ගැටලුවලට මූලාරම්භක හේතු හඳුනා ගැනීම.',
    modalC: 'එම හේතු නැතිවීමෙන් උදාවන යහපත දැක ගැනීම.',
    modalD: 'එම යහපත කරා යාමට සැලසුම්කරණයයි.',
    selectStep: 'පියවර තෝරන්න (Select Step)',
    closeReport: 'Close Report'
  },
  ta: {
    back: 'முகப்பு பக்கத்திற்கு',
    title: 'பொருளாதார பார்வை அமைப்பு',
    subtitle: 'Strategic Economic Ecosystem',
    actionBtn: 'பொருளாதார பார்வை இங்கிருந்து பார்க்கவும்',
    sub1Title: 'Online Shopping',
    sub1Desc: 'தேசிய டிஜிட்டல் சந்தை',
    sub2Title: 'வணிக திட்டங்கள்',
    sub2Desc: 'மூலோபாய திட்டமிடல்',
    sub3Title: 'முதலீட்டு வாய்ப்புகள்',
    sub3Desc: 'பாதுகாப்பான தேசிய முதலீடு',
    sub4Title: 'வேலை வாய்ப்புகள்',
    sub4Desc: 'திறன்களை அடிப்படையாகக் கொண்ட தொழில்கள்',
    aiTitle: 'துன் கல் பொருளாதார ஆலோசகர்',
    aiSubtitle: 'AI Strategic Advisor (A-B-C-D Logic)',
    aiPlaceholder: 'உங்கள் இலக்கு அல்லது சிக்கல் இங்கு எழுதுங்கள்...',
    aiSend: 'கேளுங்கள்',
    aiInitial: 'வணக்கம்! நான் "துன் கல் பார்வை" டிஜிட்டல் ஆலோசகராக இருக்கிறேன். பொருளாதார மற்றும் தேசிய சிக்கல்களுக்கு தீர்வுகளைத் தேடுவதற்கு முன், உங்கள் கேள்வியின் பின்னணியில் உள்ள நோக்கத்தை என்னிடம் கூறுங்கள்.',
    modalTitle: 'சிக்கல் தீர்வுக்கான ABCD கட்டமைப்பு',
    modalSubtitle: 'நான்கு பெரிய உண்மைகளின் அடிப்படையில் திட்டமிடல்',
    modalIntro: '"துன் கல் பார்வை" சிக்கல் தீர்வு கட்டமைப்பு நான்கு பெரிய உண்மைகளின் அடிப்படையில் ABCD முறையாகும். எந்த சிக்கலையும் தீர்க்க ஒரு திட்டம் தேவைப்படுகிறது.',
    modalA: 'சிக்கலை பகுப்பாய்வு செய்தல்.',
    modalB: 'சிக்கல்களுக்கு அடிப்படைக் காரணங்களைக் கண்டறிதல்.',
    modalC: 'அந்த காரணங்கள் இல்லாததால் எழும் நல்லவற்றைக் கண்டறிதல்.',
    modalD: 'அந்த நல்லவற்றை அடைய ஒரு திட்டமிடல்.',
    selectStep: 'படியைத் தேர்ந்தெடுக்கவும் (Select Step)',
    closeReport: 'அறிக்கையை மூடு'
  },
  en: {
    back: 'Back to Home',
    title: 'Economic Vision System',
    subtitle: 'Strategic Economic Ecosystem',
    actionBtn: 'View Economic Vision Here',
    sub1Title: 'Online Shopping',
    sub1Desc: 'National Digital Marketplace',
    sub2Title: 'Business Plans',
    sub2Desc: 'Strategic Planning',
    sub3Title: 'Investment Opportunities',
    sub3Desc: 'Secure National Investment',
    sub4Title: 'Job Opportunities',
    sub4Desc: 'Skills-Based Careers',
    aiTitle: 'Three Way Economic Advisor',
    aiSubtitle: 'AI Strategic Advisor (A-B-C-D Logic)',
    aiPlaceholder: 'Write your goal or problem here...',
    aiSend: 'Ask',
    aiInitial: 'Greetings! I am the "Three Way Vision" digital advisor. Before seeking solutions for economic and national issues, tell me the purpose behind your inquiry.',
    modalTitle: 'ABCD Framework for Problem Solving',
    modalSubtitle: 'Planning based on the Four Noble Truths',
    modalIntro: 'The "Three Way Vision" problem-solving framework is the ABCD method based on the Four Noble Truths. A plan is needed to solve any problem.',
    modalA: 'Analyzing the problem.',
    modalB: 'Identifying the root causes of the problems.',
    modalC: 'Seeing the good that arises from the absence of those causes.',
    modalD: 'Planning to reach that good.',
    selectStep: 'Select Step',
    closeReport: 'Close Report'
  }
}

const API_KEY = "AIzaSyAc8U3xeho_EjtpoYgl4rp7KjJJSzU2mtE"

function EconomyPage({ lang, setCurrentPage, setOnlineshopClick, setBusinessplanClick }) {
  const t = translations[lang]
  const [showModal, setShowModal] = useState(false)
  const [chatStep, setChatStep] = useState(0)
  const [originalQuestion, setOriginalQuestion] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'ai', text: t.aiInitial }
  ])
  const chatBoxRef = useRef(null)

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages])

  const appendMessage = (role, text) => {
    setMessages(prev => [...prev, { role, text }])
  }

  const callGemini = async (prompt) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      })
      const data = await response.json()
      return data.candidates[0].content.parts[0].text
    } catch (e) {
      return "Communication Error. Please try again."
    }
  }

  const handleAI = async () => {
    const text = inputValue.trim()
    if (!text) return

    appendMessage('user', text)
    setInputValue('')
    setIsLoading(true)

    let langHint = lang === 'si' ? 'සිංහලෙන්' : (lang === 'ta' ? 'In Tamil' : 'In English')

    if (chatStep === 0) {
      setOriginalQuestion(text)
      const res = await callGemini(`You are Three Way Vision Advisor. Issue: "${text}". Ask a short follow-up question based on Noble Eightfold Path ${langHint}.`)
      appendMessage('ai', res)
      setChatStep(1)
    } else {
      const res = await callGemini(`Original: "${originalQuestion}". Answer: "${text}". Analyze using ABCD framework ${langHint}.`)
      appendMessage('ai', res)
      setChatStep(0)
    }
    setIsLoading(false)
  }

  return (
    <>
      <main className="pt-32 animate-fade">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">{t.title}</h2>
              <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mt-4">{t.subtitle}</p>
            </div>
            <button onClick={() => setCurrentPage('main')}
              className="px-6 py-3 rounded-2xl bg-slate-800/50 border border-white/10 text-xs hover:bg-white/10 transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg> <span>{t.back}</span>
            </button>
          </header>

          <div className="flex justify-start mb-20">
            <div onClick={() => setShowModal(true)} className="left-action-btn group">
              <div className="bg-blue-600/30 p-3 rounded-2xl group-hover:bg-blue-600/50 transition-colors">
                <svg className="w-8 h-8 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <div className="text-left pr-4">
                <span className="block text-white font-bold text-xl">{lang === 'si' ? 'ආර්ථික දැක්ම' : lang === 'ta' ? 'பொருளாதார பார்வை' : 'Economic Vision'}</span>
                <span className="block text-[10px] text-blue-400 uppercase tracking-widest font-bold italic">{t.actionBtn}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div onClick={() => setOnlineshopClick && setOnlineshopClick()} className="sub-card cursor-pointer" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600)' }}>
              <div className="relative z-10">
                <h4 className="text-white font-bold">{t.sub1Title}</h4>
                <p className="text-[10px] text-blue-300 uppercase">{t.sub1Desc}</p>
              </div>
            </div>
            <div onClick={() => setBusinessplanClick && setBusinessplanClick()} className="sub-card cursor-pointer" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600)' }}>
              <div className="relative z-10">
                <h4 className="text-white font-bold">{t.sub2Title}</h4>
                <p className="text-[10px] text-purple-300 uppercase">{t.sub2Desc}</p>
              </div>
            </div>
            <div className="sub-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600)' }}>
              <div className="relative z-10">
                <h4 className="text-white font-bold">{t.sub3Title}</h4>
                <p className="text-[10px] text-green-300 uppercase">{t.sub3Desc}</p>
              </div>
            </div>
            <div className="sub-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600)' }}>
              <div className="relative z-10">
                <h4 className="text-white font-bold">{t.sub4Title}</h4>
                <p className="text-[10px] text-orange-300 uppercase">{t.sub4Desc}</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto glass-card rounded-[3rem] overflow-hidden shadow-2xl border-blue-500/20">
            <div className="bg-blue-600/15 p-6 border-b border-white/5 text-center">
              <h2 className="text-2xl font-bold text-blue-300">{t.aiTitle}</h2>
              <p className="text-[10px] text-blue-400/60 tracking-[0.2em] uppercase mt-1">{t.aiSubtitle}</p>
            </div>
            <div ref={chatBoxRef} className="h-[450px] overflow-y-auto p-8 space-y-6 bg-slate-900/60">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'} animate-fade`}>
                  <div className={`${msg.role === 'ai' ? 'bg-slate-800/90 border-blue-500/20' : 'bg-blue-600/40 border-blue-400/20'} p-5 rounded-3xl ${msg.role === 'ai' ? 'rounded-tl-none' : 'rounded-tr-none'} border max-w-[85%] text-sm leading-loose whitespace-pre-line shadow-md`}>{msg.text}</div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-slate-900/90 border-t border-white/10 flex gap-4">
              <input type="text" placeholder={t.aiPlaceholder} value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAI()}
                className="flex-1 bg-slate-800/80 border border-slate-700 p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-sm transition-all" />
              <button onClick={handleAI} disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 px-10 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20 disabled:opacity-50">
                {isLoading ? '...' : t.aiSend}
              </button>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto p-6">
          <div className="modal-content animate-fade" style={{ maxWidth: '900px', margin: '1.5rem auto', borderRadius: '3rem', padding: '3.5rem', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255, 255, 255, 0.12)', boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)' }}>
            <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl font-bold text-gradient">{t.modalTitle}</h2>
                <p className="text-[11px] text-blue-400 uppercase tracking-widest mt-2">{t.modalSubtitle}</p>
              </div>
              <button onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-white transition-all transform hover:rotate-90">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="space-y-10">
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-8 rounded-[2.5rem] border border-blue-500/20 shadow-inner">
                <p className="text-blue-100 text-lg leading-relaxed mb-6 font-medium">{t.modalIntro}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
                  <p><strong>A -</strong> {t.modalA}</p>
                  <p><strong>B -</strong> {t.modalB}</p>
                  <p><strong>C -</strong> {t.modalC}</p>
                  <p><strong>D -</strong> {t.modalD}</p>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-center text-[10px] text-blue-400 uppercase tracking-[0.4em] mb-10 font-bold">{t.selectStep}</p>
                <div className="flex flex-wrap justify-center gap-10">
                  <div className="flex flex-col items-center">
                    <div onClick={() => alert('A: Analysis Start')}
                      className="abcd-icon bg-red-500/10 text-red-500 border-red-500/20">A</div>
                    <span className="text-[10px] mt-4 font-bold text-red-400/80 tracking-widest uppercase">Analysis</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div onClick={() => alert('B: Basis Identification Start')}
                      className="abcd-icon bg-orange-500/10 text-orange-500 border-orange-500/20">B</div>
                    <span className="text-[10px] mt-4 font-bold text-orange-400/80 tracking-widest uppercase">Basis</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div onClick={() => alert('C: Change Prediction Start')}
                      className="abcd-icon bg-green-500/10 text-green-500 border-green-500/20">C</div>
                    <span className="text-[10px] mt-4 font-bold text-green-400/80 tracking-widest uppercase">Change</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div onClick={() => alert('D: Design Implementation Start')}
                      className="abcd-icon bg-blue-500/10 text-blue-500 border-blue-500/20">D</div>
                    <span className="text-[10px] mt-4 font-bold text-blue-400/80 tracking-widest uppercase">Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center">
              <button onClick={() => setShowModal(false)}
                className="bg-white/5 hover:bg-white/10 px-14 py-4 rounded-2xl text-xs font-bold transition-all border border-white/10 uppercase tracking-[0.2em]">{t.closeReport}</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EconomyPage

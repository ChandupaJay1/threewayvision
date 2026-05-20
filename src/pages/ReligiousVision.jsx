import { useState } from 'react'
import BuddhistDetail from './religions/BuddhistDetail'
import ChristianDetail from './religions/ChristianDetail'
import IslamicDetail from './religions/IslamicDetail'
import HinduDetail from './religions/HinduDetail'

const translations = {
  si: {
    headerTitle: 'ආගමික පද්ධතිය',
    subtitle: 'තාක්ෂණික දියුණුවට විදර්ශනාත්මක විනයක් සහ ධර්මයේ මඟ පෙන්වීම ලබාදීම උදෙසා කෙරෙන කාලෝචිත මෙහෙවර',
    quote: '"සබ්බ පාපස්ස අකරණං, කුසලස්ස උපසම්පදා,<br>සචිත්ත පරියෝදපනං, ඒතං බුද්ධාන සාසනං."',
    quoteDesc: '(සියලු පව් නොකිරීම ද, කුසල් රැස් කිරීම ද, තම සිත පිරිසිදු කර ගැනීම ද යන මෙය බුදුවරුන්ගේ අනුශාසනාවයි.)',
    introBtn: 'හඳුන්වාදීම මෙතැනින්',
    buddhist: 'බෞද්ධ දැක්ම',
    buddhistDesc: 'Buddhist Wisdom Reflection',
    buddhistTitle: 'අවිහිංසාවාදී බෞද්ධ දර්ශනයේ හරය',
    buddhistSubtitle: 'The Core of Buddhist Non-Violence',
    christian: 'ක්‍රිස්තු දැක්ම',
    christianDesc: 'Christian Faith & Vision',
    christianTitle: 'ක්‍රිස්තු ධර්මයේ මූලික හරය',
    christianSubtitle: 'The Foundations of Christian Faith',
    islamic: 'ඉස්ලාම් දැක්ම',
    islamicDesc: 'Islamic Strategic Path',
    islamicTitle: 'ඉස්ලාම් දහමේ මූලික හරය',
    islamicSubtitle: 'The Core and Structure of Islam',
    hindu: 'හින්දු දැක්ම',
    hinduDesc: 'Hindu Spiritual Vision',
    hinduTitle: 'සනාතන හින්දු දර්ශනයේ හරය',
    hinduSubtitle: 'The Eternal Way - Sanatana Dharma',
    aiTitle: 'තුන් කල් ආගමික සහාය',
    aiSubtitle: 'Anuradhapura AI Engine 2.0',
    chatPlaceholder: 'ඔබේ ප්‍රශ්නය මෙතැන ලියන්න...',
    sendBtn: 'විමසන්න',
    botWelcome: 'තෙරුවන් සරණයි! ඔබගේ ජීවන මාවත ආලෝකමත් කිරීමට අවශ්‍ය ඕනෑම ආගමික උපදේශනයක් සහ තාක්ෂණික විනයක් පිළිබඳ ගැටළුවක් විමසීමට මම සූදානම්. ඔබේ ප්‍රශ්නය විමසන්න.',
    botTyping: 'සිතමින් පවතී...',
    botResponse: 'ඔබගේ ප්‍රශ්නය "තුන් කල් දැක්ම" දර්ශනය ඔස්සේ විශ්ලේෂණය කරමින් පවතී. තාක්ෂණික යුගයක මානවයාගේ ආධ්‍යාත්මික විනය රැකගැනීම සඳහා සියලු ආගමික හරයන් පොදු රාමුවකට ගෙන ඒම අපගේ අරමුණයි.',
    modalTitle: 'තුන් කල් දැක්ම | දර්ශනය සහ විග්‍රහය',
    closeBtn: 'වසා දමන්න',
    techDisciplineTitle: 'තාක්ෂණය සහ විදර්ශනාත්මක විනය:',
    back: '← ආපසු',
    comingSoon: 'විශේෂ නිවේදනය: විනයධර ධර්මධර භික්ෂූන් වහන්සේලාගේ එකතුවකින් ළඟදීම ධර්ම සංගායනාවක් කොට, ධර්මයත් විනයත් තාක්ෂණාරූඪ කිරීමෙන් අනතුරුව මෙම පිටුව සර්වසම්පූර්ණ කරනු ලැබේ.'
  },
  ta: {
    headerTitle: 'மத அமைப்பு',
    subtitle: 'தொழில்நுட்ப முன்னேற்றத்திற்கு மெய்யுணர்வு ஒழுக்கம் மற்றும் மதத்தின் வழிகாட்டுதலை வழங்குவதற்கு முன்வைக்கப்பட்ட நோக்கம்',
    quote: '"சப்ப பாப்பஸ்ஸ அகரணம், குசலஸ்ஸ உபசம்பதா,<br>சசித்த பரியோதபனம், ஏதம் புத்தான சாசனம்."',
    quoteDesc: '(அனைத்து பாவங்களையும் செய்யாமல், நற்பண்புகளை சேகரித்து, தங்கள் மனத்தை சுத்தப்படுத்துவது புத்தரின் அறிவுரையாகும்.)',
    introBtn: 'அறிமுகம் இங்கு',
    buddhist: 'பௌத்த பார்வை',
    buddhistDesc: 'பௌத்த ஞான பிரதிபலிப்பு',
    buddhistTitle: 'அவிஹிங்சாவாதீ பௌத்த பார்வையின் மைல',
    buddhistSubtitle: 'The Core of Buddhist Non-Violence',
    christian: 'கிறிஸ்தவ பார்வை',
    christianDesc: 'கிறிஸ்தவ நம்பிக்கை & பார்வை',
    christianTitle: 'கிறிஸ்தவ மதத்தின் அடிப்படை மைல',
    christianSubtitle: 'The Foundations of Christian Faith',
    islamic: 'இஸ்லாமிய பார்வை',
    islamicDesc: 'இஸ்லாமிய மூலோபாய பாதை',
    islamicTitle: 'இஸ்லாம் மதத்தின் அடிப்படை மைல',
    islamicSubtitle: 'The Core and Structure of Islam',
    hindu: 'இந்து பார்வை',
    hinduDesc: 'இந்து ஆன்மீக பார்வை',
    hinduTitle: 'சனாதன இந்து பார்வையின் மைல',
    hinduSubtitle: 'The Eternal Way - Sanatana Dharma',
    aiTitle: 'மூன்று கால மத உதவி',
    aiSubtitle: 'அனுராதபுரை AI இயந்திரம் 2.0',
    chatPlaceholder: 'உங்கள் கேள்வியை இங்கு எழுதுங்கள்...',
    sendBtn: 'அனுப்பு',
    botWelcome: 'தெருவான் சரணம்! உங்கள் வாழ்க்கைப் பாதையை பிரகாசப்படுத்த தேவையான எந்த மத ஆலோசனையும் மற்றும் தொழில்நுட்ப ஒழுக்கம் பற்றிய கேள்வியைக் கேட்க நான் தயாராக இருக்கிறேன். உங்கள் கேள்வியைக் கேளுங்கள்.',
    botTyping: 'யோசிக்கிறேன்...',
    botResponse: 'உங்கள் கேள்வியை "மூன்று கால பார்வை" மூலம் பகுப்பாய்வு செய்கிறேன். தொழில்நுட்ப யுகத்தில் மனிதனின் ஆன்மீக ஒழுக்கத்தை பாதுகாக்க அனைத்து மத பாதைகளையும் பொதுவான கட்டமைப்புக்கு கொண்டுவருவது எங்கள் நோக்கமாகும்.',
    modalTitle: 'மூன்று கால பார்வை | பார்வை மற்றும் பகுப்பாய்வு',
    closeBtn: 'மூடு',
    techDisciplineTitle: 'தொழில்நுட்பம் மற்றும் மெய்யுணர்வு ஒழுக்கம்:',
    back: '← பின்கு',
    comingSoon: 'விசேஷ நிவேதனம்: வினயதர தர்மதர பிக்ஷூ வதன்ஸ்களின் ஒன்றுவதினில் ளகாதீரம் தர்ம சங்காயனம் கொடு, தர்மமும் வினயமும் தாக்ஷணாரூடம் செய்வதன் அன்று இந்த பக்கம் சர்வஸம்பூர்ணம் செய்யப்படும்.'
  },
  en: {
    headerTitle: 'Religious System',
    subtitle: 'A timely mission to provide philosophical discipline and religious guidance for technological advancement',
    quote: '"Avoid all evil, cultivate good, purify your mind - this is the teaching of the Buddha."',
    quoteDesc: '(Not doing any evil, accumulating merit, and purifying one\'s mind - this is the Buddha\'s teaching.)',
    introBtn: 'Introduction Here',
    buddhist: 'Buddhist Vision',
    buddhistDesc: 'Buddhist Wisdom Reflection',
    buddhistTitle: 'The Core of Buddhist Non-Violence',
    buddhistSubtitle: 'The Core of Buddhist Non-Violence',
    christian: 'Christian Vision',
    christianDesc: 'Christian Faith & Vision',
    christianTitle: 'The Foundations of Christian Faith',
    christianSubtitle: 'The Foundations of Christian Faith',
    islamic: 'Islamic Vision',
    islamicDesc: 'Islamic Strategic Path',
    islamicTitle: 'The Core and Structure of Islam',
    islamicSubtitle: 'The Core and Structure of Islam',
    hindu: 'Hindu Vision',
    hinduDesc: 'Hindu Spiritual Vision',
    hinduTitle: 'The Eternal Way - Sanatana Dharma',
    hinduSubtitle: 'The Eternal Way - Sanatana Dharma',
    aiTitle: 'Three Way Religious Support',
    aiSubtitle: 'Anuradhapura AI Engine 2.0',
    chatPlaceholder: 'Type your question here...',
    sendBtn: 'Send',
    botWelcome: 'Blessings! I am ready to answer any religious advice and technical discipline questions to illuminate your life path. Ask your question.',
    botTyping: 'Thinking...',
    botResponse: 'Your question is being analyzed through the "Three Way Vision" perspective. Our goal is to bring all religious paths into a common framework to preserve the spiritual discipline of humanity in the technological age.',
    modalTitle: 'Three Way Vision | Vision and Analysis',
    closeBtn: 'Close',
    techDisciplineTitle: 'Technology and Philosophical Discipline:',
    back: '← Back',
    comingSoon: 'Special Notice: This page will be fully completed soon after a Dharma Council with Vinaya-dhara and Dharma-dhara monks, digitizing both Dharma and Vinaya.'
  }
}

const religionConfigs = {
  buddhist: {
    primaryColor: 'yellow',
    glassBg: 'rgba(13, 22, 43, 0.85)',
    borderColor: 'rgba(255, 215, 0, 0.3)',
    title: 'අවිහිංසාවාදී බෞද්ධ දර්ශනයේ හරය',
    subtitle: 'The Core of Buddhist Non-Violence',
    icon: 'dhamma-wheel',
    backgroundImage: 'https://images.unsplash.com/photo-1610452631580-0498a4d46765?q=80&w=800'
  },
  christian: {
    primaryColor: 'purple',
    glassBg: 'rgba(22, 12, 36, 0.85)',
    borderColor: 'rgba(168, 85, 247, 0.3)',
    title: 'ක්‍රිස්තු ධර්මයේ මූලික හරය',
    subtitle: 'The Foundations of Christian Faith',
    icon: 'cross',
    backgroundImage: 'https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=800'
  },
  islamic: {
    primaryColor: 'green',
    glassBg: 'rgba(10, 31, 16, 0.85)',
    borderColor: 'rgba(34, 197, 94, 0.3)',
    title: 'ඉස්ලාම් දහමේ මූලික හරය',
    subtitle: 'The Core and Structure of Islam',
    icon: 'crescent',
    backgroundImage: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800'
  },
  hindu: {
    primaryColor: 'orange',
    glassBg: 'rgba(36, 16, 10, 0.85)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
    title: 'සනාතන හින්දු දර්ශනයේ හරය',
    subtitle: 'The Eternal Way - Sanatana Dharma',
    icon: 'om',
    backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800'
  }
}

function ReligiousVision({ lang, setCurrentPage }) {
  const t = translations[lang]
  const [showModal, setShowModal] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'bot', text: t.botWelcome }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedReligion, setSelectedReligion] = useState(null)

  const toggleModal = () => setShowModal(!showModal)

  const handleAI = () => {
    if (!userInput.trim()) return

    const newMessage = { id: Date.now(), type: 'user', text: userInput }
    setChatMessages(prev => [...prev, newMessage])
    setUserInput('')
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      const botMessage = { id: Date.now() + 1, type: 'bot', text: t.botResponse }
      setChatMessages(prev => [...prev, botMessage])
    }, 1200)
  }

  const checkEnter = (event) => {
    if (event.key === 'Enter') handleAI()
  }

  const renderReligionIcon = (religion) => {
    if (religion === 'buddhist') {
      return (
        <div className="flex justify-center mb-6">
          <div className="dhamma-wheel">
            <div className="spoke" style={{ transform: 'rotate(0deg)' }}></div>
            <div className="spoke" style={{ transform: 'rotate(45deg)' }}></div>
            <div className="spoke" style={{ transform: 'rotate(90deg)' }}></div>
            <div className="spoke" style={{ transform: 'rotate(135deg)' }}></div>
          </div>
        </div>
      )
    } else if (religion === 'christian') {
      return (
        <div className="flex justify-center mb-6 pt-4">
          <div className="cross"></div>
        </div>
      )
    } else if (religion === 'islamic') {
      return (
        <div className="flex justify-center mb-4">
          <div className="crescent-container">
            <div className="crescent"></div>
            <div className="star">★</div>
          </div>
        </div>
      )
    } else if (religion === 'hindu') {
      return (
        <div className="flex justify-center mb-2">
          <div className="om-symbol">🕉</div>
        </div>
      )
    }
  }

  const renderReligionDetailPage = () => {
    const config = religionConfigs[selectedReligion]
    const colorClass = config.primaryColor
    const religionTitleKey = `${selectedReligion}Title`
    const religionSubtitleKey = `${selectedReligion}Subtitle`
    return (
      <main className="pt-28 pb-20 px-4 md:px-6 animate-fade">
        <style dangerouslySetInnerHTML={{ __html: `
          .glass-panel-${selectedReligion} { 
            background: ${config.glassBg}; 
            backdrop-filter: blur(20px); 
            border: 1px solid ${config.borderColor}; 
          }
          .detail-card-bg {
            background-size: cover;
            background-position: center;
            position: relative;
            overflow: hidden;
            border-radius: 2.5rem;
          }
          .detail-card-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(1, 2, 8, 0.95), rgba(1, 2, 8, 0.7));
          }
          .dhamma-wheel {
            width: 120px; height: 120px; border: 6px solid #ffd700; border-radius: 50%; position: relative;
            animation: spin 20s linear infinite; box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
          }
          .dhamma-wheel::before { content: ''; position: absolute; inset: 10px; border: 4px dashed #ffd700; border-radius: 50%; }
          .dhamma-wheel .spoke { position: absolute; width: 6px; height: 100%; background: #ffd700; left: 50%; top: 0; transform-origin: center; }
          @keyframes spin { 100% { transform: rotate(360deg); } }
          .cross { 
            width: 24px; height: 84px; background: #a855f7; position: relative; 
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.7); border-radius: 3px; 
          }
          .cross::after { 
            content: ''; position: absolute; width: 60px; height: 24px; background: #a855f7; 
            left: -18px; top: 18px; box-shadow: 0 0 30px rgba(168, 85, 247, 0.7); border-radius: 3px; 
          }
          .crescent-container { position: relative; width: 100px; height: 100px; display: inline-block; }
          .crescent { 
            width: 75px; height: 75px; border-radius: 50%; 
            box-shadow: -18px 18px 0 0 #22c55e; transform: rotate(-45deg);
            filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.5));
          }
          .star {
            position: absolute; top: 15px; right: 5px; font-size: 24px; color: #22c55e;
            text-shadow: 0 0 15px rgba(34, 197, 94, 0.8);
          }
          .om-symbol { 
            font-size: 80px; 
            color: #f97316; 
            text-shadow: 0 0 30px rgba(249, 115, 22, 0.7); 
            display: inline-block;
          }
        `}} />
        <div className="max-w-4xl mx-auto">
          <button onClick={() => setSelectedReligion(null)} className={`inline-block text-${colorClass}-400 font-bold text-sm mb-6 hover:underline relative z-10`}>
            {t.back}
          </button>
          
          <div className="detail-card-bg" style={{ backgroundImage: `url(${config.backgroundImage})` }}>
            <div className={`relative z-10 glass-panel-${selectedReligion} rounded-[2.5rem] p-8 text-center`}>
              {renderReligionIcon(selectedReligion)}
              <h1 className={`text-3xl md:text-4xl font-black text-${colorClass}-400 mb-2`}>{t[religionTitleKey]}</h1>
              <p className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">{t[religionSubtitleKey]}</p>
              
              <div className={`mt-6 bg-${colorClass}-500/10 border border-dashed border-${colorClass}-500/40 p-5 rounded-2xl text-justify`}>
                <p className={`text-${colorClass}-300 font-bold text-center text-sm md:text-base`}>
                  ⚠️ {t.comingSoon}
                </p>
              </div>
            </div>
          </div>

          {selectedReligion === 'buddhist' && <BuddhistDetail lang={lang} colorClass={colorClass} />}
          {selectedReligion === 'christian' && <ChristianDetail lang={lang} colorClass={colorClass} />}
          {selectedReligion === 'islamic' && <IslamicDetail lang={lang} colorClass={colorClass} />}
          {selectedReligion === 'hindu' && <HinduDetail lang={lang} colorClass={colorClass} />}
        </div>
      </main>
    )
  }

  if (selectedReligion) {
    return renderReligionDetailPage()
  }

  return (
    <main className="pt-28 pb-20 px-4 md:px-6 animate-fade">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-16">
          <div className="inline-block mb-4 p-1 rounded-2xl bg-gradient-to-r from-transparent via-purple-500/20 to-transparent">
            <h2 className="text-3xl md:text-6xl font-black px-4">
              <span className="text-gradient">{t.headerTitle}</span> | {lang === 'si' ? 'තුන් කල් දැක්ම' : lang === 'ta' ? 'துன் கல் தெக்ம' : 'Three Way Vision'}
            </h2>
          </div>
          <p className="text-blue-400 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-bold uppercase opacity-80 max-w-3xl mx-auto leading-relaxed px-2">
            {t.subtitle}
          </p>
          
          <div className="mt-8 max-w-2xl mx-auto p-6 bg-purple-500/5 rounded-2xl border border-purple-500/10 text-center">
            <p className="text-purple-400 font-bold italic text-base md:text-lg tracking-wide" dangerouslySetInnerHTML={{ __html: t.quote }}></p>
            <p className="text-slate-400 text-xs mt-2">
              {t.quoteDesc}
            </p>
          </div>

          <div className="mt-8">
            <button onClick={toggleModal} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-bold text-xs tracking-widest hover:from-purple-400 hover:to-pink-500 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] uppercase">
              {t.introBtn}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          
          <div onClick={() => setSelectedReligion('buddhist')} className="sub-card group cursor-pointer" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1610452631580-0498a4d46765?q=80&w=800)' }}>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h4 className="text-white text-xl font-black group-hover:text-yellow-400 transition-colors">{t.buddhist}</h4>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1">{t.buddhistDesc}</p>
            </div>
          </div>

          <div onClick={() => setSelectedReligion('christian')} className="sub-card group cursor-pointer" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=800)' }}>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h4 className="text-white text-xl font-black group-hover:text-purple-400 transition-colors">{t.christian}</h4>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1">{t.christianDesc}</p>
            </div>
          </div>

          <div onClick={() => setSelectedReligion('islamic')} className="sub-card group cursor-pointer" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800)' }}>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h4 className="text-white text-xl font-black group-hover:text-green-400 transition-colors">{t.islamic}</h4>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1">{t.islamicDesc}</p>
            </div>
          </div>

          <div onClick={() => setSelectedReligion('hindu')} className="sub-card group cursor-pointer" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800)' }}>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h4 className="text-white text-xl font-black group-hover:text-orange-400 transition-colors">{t.hindu}</h4>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1">{t.hinduDesc}</p>
            </div>
          </div>

        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-[2rem] md:rounded-[3rem] overflow-hidden">
          <div className="p-6 md:p-10 text-center border-b border-purple-500/10">
            <h3 className="text-2xl md:text-3xl font-black text-white">
              <span className="text-gradient">{t.aiTitle}</span>
            </h3>
            <p className="text-purple-500/60 text-xs font-bold tracking-[0.3em] mt-3 uppercase">{t.aiSubtitle}</p>
          </div>

          <div className="h-[350px] md:h-[400px] overflow-y-auto p-6 md:p-10 space-y-6 bg-black/40">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-4 md:p-6 ${msg.type === 'user' ? 'bg-purple-500 text-black' : 'bg-slate-900/40 border border-white/5'} ${msg.type === 'user' ? 'rounded-3xl rounded-tr-none' : 'rounded-3xl rounded-tl-none'} max-w-[85%]`}>
                  <p className="text-[14px] md:text-[15px] leading-relaxed">{msg.type === 'user' ? msg.text : <span className="text-blue-50">{msg.text}</span>}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="p-4 bg-slate-900/40 border border-white/5 rounded-3xl rounded-tl-none text-slate-400 text-[14px]">
                  {t.botTyping}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 md:p-8 bg-black/80 flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder={t.chatPlaceholder} 
              className="flex-1 bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl focus:outline-none focus:border-purple-500 text-white text-[14px] md:text-[15px]" 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={checkEnter}
            />
            <button onClick={handleAI} className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl text-white font-bold uppercase text-[12px] tracking-widest hover:from-purple-400 hover:to-pink-500 transition-all">{t.sendBtn}</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="glass-card w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2rem] md:rounded-[2.5rem] border border-purple-500/30 p-6 md:p-12 relative">
            
            <button onClick={toggleModal} className="absolute top-6 right-6 text-slate-400 hover:text-purple-400 text-2xl font-bold transition-colors">
              ✕
            </button>

            <h3 className="text-2xl md:text-3xl font-black text-gradient mb-6 border-b border-purple-500/20 pb-4">
              {t.modalTitle}
            </h3>
            
            <div className="text-slate-200 text-sm md:text-base leading-relaxed space-y-6 text-justify">
              <p>
                {lang === 'si' 
                  ? 'අද සමාජය තුළ ආගමික හරය පිළිබඳ නිසි අවබෝධයක් නොමැතිකම නිසා බොහෝ දෙනා ආගම් සහ දර්ශනයන් අයථා ලෙස පරිහරණය කරති. ඇතැමුන් මෙය සිතාමතාම සිදුකරන අතර, තවත් පිරිසක් නොදැනුවත්කම නිසාම ව්‍යසනයන් ඇති කර ගනිති. මෙහි කණගාටුදායකම තත්ත්වය නම්, මානව වර්ගයාගේ යහපත උදෙසා බිහිවූ ආගමික දර්ශනයන් තුළම හිඳිමින් මිනිසුන් එකිනෙකා සමඟ ගැටුම් ඇති කර ගැනීමයි.'
                  : lang === 'ta' 
                    ? 'இன்றைய சமூகத்தில் மத அடிப்படையின் சரியான புரிதல் இல்லாததால் பலர் மதங்களையும் பார்வைகளையும் தவறாகப் பயன்படுத்துகிறார்கள். சிலர் இதை விருப்பத்தால் செய்கிறார்கள், மற்றவர்கள் அறியாமையால் பிரச்சனைகளை உருவாக்குகிறார்கள். இங்கு மிகவும் வருத்தமான நிலை என்னவென்றால், மனித இனத்தின் நலனுக்காக உருவாக்கப்பட்ட மத பார்வைகளுக்குள்ளேயே இருந்து மனிதர்கள் ஒன்றுடன் ஒன்று மோதல்களை உருவாக்குகிறார்கள்.'
                    : 'In today\'s society, due to the lack of proper understanding of religious foundations, many people misuse religions and visions. Some do this intentionally, while others create problems out of ignorance. The most tragic situation here is that people create conflicts with each other while being within religious visions that were created for the good of humanity.'}
              </p>
              <p>
                {lang === 'si' 
                  ? 'ලෝකයේ සියලු සත්ත්වයන්ගේ යහපත පිණිස පවතින උතුම් ආගමික හරයන් අවභාවිත වීම වහාම වැළැක්විය යුතුය. මේ පිළිබඳව නිරන්තරයෙන් චෝදනා කරමින් සිටීමෙන් පමණක් පලක් නොවේ. සෑම ආගමික යාන්ත්‍රණයක් තුළම අන්තර්ගත වන "පරම සත්‍යය" සහ උසස් අනුශාසනාවන් ප්‍රායෝගිකව ජීවිතයට එකතු කර ගැනීමෙන් නිවැරදි ප්‍රතිපල නෙළා ගැනීමට මානවයාට පූර්ණ හැකියාව පවතී. නමුත් වර්තමානයේ පවතින විවිධ සමාජීය සහ මානසික අර්බුද හේතුවෙන් එම උතුම් පල නෙළා ගැනීමට විශාල බාධා මතු වී ඇත.'
                  : lang === 'ta' 
                    ? 'உலகின் அனைத்து உயிரினங்களின் நலனுக்காக இருக்கும் உயரிய மத பாதைகளின் தவறான பயன்பாட்டை உடனடியாகத் தடுக்க வேண்டும். இதைப் பற்றி தொடர்ந்து குற்றம் கூறுவதால் மட்டும் பயனில்லை. ஒவ்வொரு மத அமைப்பினுள்ளும் உள்ள "ஏற்கனவே உண்மை" மற்றும் உயரிய அறிவுரைகளை நடைமுறையில் வாழ்க்கையுடன் இணைக்குவதன் மூலம் சரியான பலன்களைப் பெற மனிதனுக்கு முழு திறன் உள்ளது. இருப்பினும், தற்போதைய பல சமூக மற்றும் மன இதயத்தொலைவுகளின் காரணமாக அந்த உயரிய பலனைப் பெறுவதற்கு பெரிய தடை ஏற்பட்டுள்ளது.'
                    : 'The misuse of great religious paths that exist for the good of all beings in the world must be immediately prevented. Merely constantly criticizing this will not help. Humanity has the full ability to reap proper results by practically integrating the "ultimate truth" and noble teachings contained within every religious mechanism into life. However, due to various social and mental crises that exist today, there is a great obstacle to reaping that great result.'}
              </p>
              <div className="bg-purple-500/5 border-l-4 border-purple-500 p-4 my-4 rounded-r-xl">
                <p className="font-bold text-purple-400">{t.techDisciplineTitle}</p>
                {lang === 'si' 
                  ? 'වර්තමාන ලෝකයේ දියුණුවත් සමඟ මිනිසා කාර්යබහුල වී කියවීමෙන් ඈත් වී ඇතත්, තාක්ෂණය දිනෙන් දින ඉහළ තලයකට ගමන් කරමින් පවතී. එහෙත්, අධ්‍යාත්මික විනයකින් තොරව සිදුවන මෙම තාක්ෂණික දියුණුව විනාශකාරී සමාජයක් බිහිකිරීමට මුල් වී ඇත. ලෝකය සතුව තාක්ෂණය තිබුණද, එය නිවැරදිව මෙහෙයවීමට අවශ්‍ය "විනය" ලෝකයට අහිමි වී තිබේ. අපගේ මෙම සැලසුම්කරණය මඟින් සිදු කරනුයේ එම තාක්ෂණයට <strong>විදර්ශනාත්මක විනයක්</strong> ලබා දීම සහ තාක්ෂණික මෙවලම් තුළ ධර්මය ස්ථාපිත කිරීමයි.'
                  : lang === 'ta' 
                    ? 'தற்போதைய உலகின் முன்னேற்றத்துடன் மனிதன் பல பணிகளால் நிரம்பி வாசிப்பிலிருந்து விலகியுள்ளானாலும், தொழில்நுட்பம் நாள்தோறும் உயர்ந்த நிலைக்கு செல்கிறது. இருப்பினும், ஆன்மீக ஒழுக்கம் இல்லாததால் இந்த தொழில்நுட்ப முன்னேற்றம் அழிவுகரமான சமூகத்தை உருவாக்குவதற்கு வழிவகுத்துள்ளது. உலகம் தொழில்நுட்பத்தைக் கொண்டிருந்தாலும், அதை சரியாக இயக்க தேவையான "ஒழுக்கம்" உலகத்திலிருந்து மறைந்துவிட்டது. எங்கள் இந்த திட்டம் மூலம் அந்த தொழில்நுட்பத்திற்கு <strong>மெய்யுணர்வு ஒழுக்கம்</strong> வழங்குவதையும் தொழில்நுட்ப கருவிகளுக்குள் மதத்தை நிலைநிறுத்துவதையும் செய்கிறோம்.'
                    : 'With the development of today\'s world, although humans are busy with work and away from reading, technology is moving to a higher level day by day. However, this technological development without spiritual discipline has led to the creation of a destructive society. Although the world has technology, the "discipline" needed to operate it properly has been lost to the world. What we do through this plan is to provide <strong>philosophical discipline</strong> to that technology and to establish religion within technological tools.'}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button onClick={toggleModal} className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs tracking-wider transition-colors">
                {t.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default ReligiousVision

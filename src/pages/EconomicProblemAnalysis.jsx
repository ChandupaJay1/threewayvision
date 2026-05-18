import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const translations = {
  si: {
    title: 'A - ආර්ථික ගැටලු විශ්ලේෂණය තුන් කල් දැක්ම',
    subtitle: 'දේශීය ව්‍යවසායකයා ධෛර්යමත් කරනු වෙනුවට, යාන්ත්‍රික නීති මඟින් ඔහුව විනාශ කරන වත්මන් මූල්‍ය පද්ධතියේ සහ බිම් මට්ටමේ සම්පත් අවම කළමනාකරණයේ පවතින බරපතලම දෝෂ පිළිබඳ විද්‍යාත්මක විග්‍රහය.',
    coreFlawTitle: 'යාන්ත්‍රික පීඩනය',
    coreFlawDesc: 'වත්මන් ආර්ථික රාමුව සකස් වී ඇත්තේ වැටුණු මිනිසා නැඟිටුවීමට නොව, ඔහුව කොන් කර මූල්‍ය ප්‍රවාහයෙන් සදහටම පලවා හැරීමටයි. "තුන් කල් දැක්ම" මුලින්ම මෙම මූලික දෝෂය හඳුනා ගනී.',
    problem1Title: '01. CRIB සහ අපරටේ නීතියේ විනාශකාරී බලපෑම',
    problem1Desc: 'කිසියම් ව්‍යාපාරිකයෙකු අර්බුදයකට ලක් වූ විට, බැංකු පද්ධතිය CRIB අසාදු ලේඛනගත කිරීම් සහ "පරාටේ" ප්‍රතිපාදන හරහා ඔහුගේ වත්කම් අත්පත් කරගනී. මෙමඟින් සිදුවන්නේ ව්‍යවසායකයා බියෙන් සහ සැකයෙන් පිරුණු, ආත්මවිශ්වාසයක් නොමැති තත්ත්වයට පත්වී මුළුමනින්ම අකර්මන්‍ය වීමයි.',
    problem2Title: '02. බිම් මට්ටමේ සම්පත් සහ මානව කුසලතා හඳුනා නොගැනීම',
    problem2Desc: 'වත්මන් සැලසුම්වල සෑම ග්‍රාම සේවා වසමකම පවතින භෞතික සම්පත්, මානව දක්ෂතා, දුර්වලතා හෝ අභියෝග නිසි ලෙස සිතියම්ගත කර නැත. මේ නිසා ග්‍රාමීය මට්ටමින් නව ව්‍යවසායකයින් බිහිවීමට ඇති මාවත් ඇහිරී පවතී.',
    problem3Title: '03. බටහිර යාන්ත්‍රික මූල්‍ය ක්‍රමවේදයන්ගේ අසාර්ථකත්වය',
    problem3Desc: 'මිනිසුන් කොන් කිරීම සහ මූල්‍යමය වශයෙන් සිරගත කිරීම මත පදනම් වූ බටහිර යාන්ත්‍රික ණය ක්‍රමවේදයන් දේශීය ආර්ථිකයට නොගැලපෙන බවත්, ඒවා සමස්ත රටම දැඩි ආර්ථික අගාධයකට ඇද දමන බවත් පැහැදිලිය.',
    quote: '"රෝග විනිශ්චය වැරදි නම් කිසිදු ප්‍රතිකාරයකින් පලක් නැත. අපගේ ආර්ථිකයේ සැබෑ රෝගය පවතින්නේ පුරවැසියා තුළ නොව, ඔහුව මිරිකා විනාශ කරන යාන්ත්‍රික පද්ධතිය තුළයි."',
    back: '← ආපසු'
  },
  en: {
    title: 'A - Economic Problem Analysis | Three-Way Vision',
    subtitle: 'A scientific diagnostic report illuminating how current mechanical financial systems and top-down structures actively paralyze domestic entrepreneurs instead of leveraging regional human capital.',
    coreFlawTitle: 'Mechanical Incarceration',
    coreFlawDesc: 'The existing architecture is designed to permanently exile a fallen citizen rather than safely rehabilitating their enterprise and practical expertise.',
    problem1Title: '01. Destructive Toll of CRIB & Parate Laws',
    problem1Desc: 'When an enterprise faces a liquidity shock, banking networks respond with aggressive blacklisting and Parate asset seizures. This induces perpetual panic and doubt, liquidating raw entrepreneurial confidence.',
    problem2Title: '02. Blindness to Micro-Level Assets & Talent',
    problem2Desc: 'There is zero systemic mapping of physical resources, regional weaknesses, or latent human talent inside individual Grama Niladhari divisions, choking natural local industrial incubation channels.',
    problem3Title: '03. The Collapse of Cold Mechanical Capital Models',
    problem3Desc: 'Importing rigid debt protocols optimized for mass financial exclusion over-leverages fragile developing ecosystems, turning productive infrastructure into stagnant bad debt.',
    quote: '"If the diagnosis is flawed, the cure is impossible. The structural failure of our economy is not a failure of individual citizen capability, but of a punitive system designed to crush them."',
    back: '← Back'
  },
  ta: {
    title: 'A - பொருளாதாரப் பிரச்சினைகள் பகுப்பாய்வு | முக்கால பார்வை',
    subtitle: 'உள்ளூர் தொழில்முனைவோரை ஊக்குவிப்பதற்கு பதிலாக, தற்போதைய நிதி அமைப்பில் உள்ள இயந்திரத்தனமான சட்டங்கள் மற்றும் அடிமட்ட வள நிர்வாகக் குறைபாடுகள் மூலம் அவர்களை முடக்கும் கடுமையான தவறுகள் பற்றிய பகுப்பாய்வு.',
    coreFlawTitle: 'இயந்திரத்தனமான அழுத்தம்',
    coreFlawDesc: 'தற்போதைய பொருளாதார கட்டமைப்பு வீழ்ந்த மனிதனை மீட்டெடுப்பதற்காக அல்ல, மாறாக அவனை ஒதுக்கி நிதி ஓட்டத்திலிருந்து நிரந்தரமாக விரட்டியடிப்பதற்காகவே வடிவமைக்கப்பட்டுள்ளது.',
    problem1Title: '01. CRIB மற்றும் பாரடே சட்டத்தின் அழிவுகரமான தாக்கம்',
    problem1Desc: 'ஒரு தொழிலதிபர் நெருக்கடியை எதிர்கொள்ளும் போது, வங்கி அமைப்பு CRIB கறுப்புப் பட்டியல் மற்றும் "பாரடே" விதிகள் மூலம் அவரது சொத்துக்களைக் கைப்பற்றுகிறது. இது தொழில்முனைவோரை பயம், சந்தேகம் மற்றும் தன்னம்பிக்கையற்ற நிலைக்கு தள்ளி, அவரை முற்றிலும் முடக்குகிறது.',
    problem2Title: '02. அடிமட்ட வளங்கள் மற்றும் மனித திறமைகளை கண்டறியாமை',
    problem2Desc: 'தற்போதைய திட்டங்களில், ஒவ்வொரு கிராம நிலதாரி பிரிவிலும் உள்ள பௌதீக வளங்கள், மனித திறமைகள், பலவீனங்கள் அல்லது சவால்கள் முறையாக வரைபடமாக்கப்படவில்லை. இதனால் கிராமிய அளவில் புதிய தொழில்முனைவோர் உருவாவதற்கான பாதைகள் அடைக்கப்பட்டுள்ளன.',
    problem3Title: '03. மேற்கத்திய இயந்திரத்தனமான நிதி முறைகளின் தோல்வி',
    problem3Desc: 'மனிதர்களை ஒதுக்கி வைப்பதிலும், நிதி ரீதியாக சிறைவைப்பதிலும் அடிப்படையாகக் கொண்ட மேற்கத்திய இயந்திரத்தனமான கடன் முறைகள் உள்ளூர் பொருளாதாரத்திற்குப் பொருந்தாது என்பதும், அவை ஒட்டுமொத்த நாட்டையும் கடுமையான பொருளாதாரப் பள்ளத்திற்குள் தள்ளுகின்றன என்பதும் தெளிவாகிறது.',
    quote: '"நோய் கண்டறிதல் தவறாக இருந்தால் எந்த சிகிச்சையும் பலனளிக்காது. நமது பொருளாதாரத்தின் உண்மையான நோய் குடிமகனிடம் இல்லை, மாறாக அவனை நசுக்கி அழிக்கும் இயந்திர அமைப்பிலேயே உள்ளது."',
    back: '← முதன்மைப் பலகத்திற்குத் திரும்பு'
  }
}

function EconomicProblemAnalysis({ lang, setLang, setCurrentPage }) {
  const t = translations[lang]

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0f050b', backgroundImage: 'linear-gradient(rgba(15, 5, 11, 0.96), rgba(2, 6, 23, 0.99)), url(https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1920)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '70px' }}>
      <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1 pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-6xl mx-auto">
            <header className="pt-12 pb-10 text-center">
              <div className="py-12 my-4 bg-slate-950/50 border-y-2 border-red-500/20 backdrop-blur-md">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent tracking-wide leading-[1.6] px-4">
                  {t.title}
                </h1>
              </div>

              <p className="text-slate-400 text-base md:text-lg max-w-4xl mx-auto leading-relaxed pt-4">
                {t.subtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-4 space-y-6">
                <div className="p-8 rounded-[2rem] relative overflow-hidden backdrop-blur-md bg-slate-900/45 border border-red-500/15 border-t-4 border-red-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
                  <span className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">The Core Flaw</span>
                  
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">
                    {t.coreFlawTitle}
                  </h3>
                  
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                    {t.coreFlawDesc}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                
                <div className="p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md bg-slate-900/45 border border-red-500/15">
                    
                  <div className="space-y-8">
                    
                    <div className="p-6 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <h4 className="text-lg font-bold text-white">
                          {t.problem1Title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {t.problem1Desc}
                      </p>
                    </div>

                    <div className="p-6 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <h4 className="text-lg font-bold text-white">
                          {t.problem2Title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {t.problem2Desc}
                      </p>
                    </div>

                    <div className="p-6 bg-slate-950/60 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <h4 className="text-lg font-bold text-white">
                          {t.problem3Title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {t.problem3Desc}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-r from-red-950/20 to-slate-950/40 border border-red-500/25 text-center backdrop-blur-sm">
              <p className="text-sm md:text-lg italic text-red-300 leading-relaxed">
                {t.quote}
              </p>
            </div>

            <div className="text-center pt-10">
              <button onClick={() => setCurrentPage('economy')} className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-slate-400 border border-white/10 transition-colors">
                {t.back}
              </button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default EconomicProblemAnalysis

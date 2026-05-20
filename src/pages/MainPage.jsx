const translations = {
  si: {
    badge: 'National Master Plan 2026',
    heroTitle: 'ජාතික අර්බුදයට නිවැරදි විසඳුම',
    heroDesc: 'අතීතය, වර්තමානය සහ අනාගතය නිවැරදිව කියවා ගනිමින් ශ්‍රී ලංකාව ගොඩනගන ප්‍රායෝගික දාර්ශනික මාර්ග සිතියම.',
    introBtn: 'හැඳින්වීම',
    economy: 'ආර්ථික දැක්ම',
    economyDesc: 'ජාතික සම්පත් සහ දත්ත මත පදනම් වූ නව ආර්ථික යාන්ත්‍රණය.',
    religion: 'ආගමික දැක්ම',
    religionDesc: 'දාර්ශනික හරය සහ තාක්ෂණික විනය මුසු වූ මානසික සාක්ෂරතාවය.',
    politics: 'දේශපාලනික දැක්ම',
    politicsDesc: 'ග්‍රාම සේවා වසම කේන්ද්‍ර කරගත් විනිවිදභාවයෙන් යුතු පාලනය.',
    projects: 'අපේ ව්‍යාපෘති',
    projectsDesc: 'සහන පියස සහ ඒකාබද්ධ සංචාරක යාන්ත්‍රණය ඇතුළු ක්‍රියාකාරී සැලසුම්.'
  },
  ta: {
    badge: 'தேசிய முதன்மை திட்டம் 2026',
    heroTitle: 'தேசிய நெருக்கடிக்கு சரியான தீர்வு',
    heroDesc: 'கடந்த காலம், நிகழ்காலம் மற்றும் எதிர்காலத்தை சரியாக வாசிப்பதன் மூலம் இலங்கையை கட்டியெழுப்பும் நடைமுறை தத்துவ வரைபடம்.',
    introBtn: 'அறிமுகம்',
    economy: 'பொருளாதார பார்வை',
    economyDesc: 'தேசிய வளங்கள் மற்றும் தரவுகளின் அடிப்படையில் புதிய பொருளாதார பொறிமுறை.',
    religion: 'மதப் பார்வை',
    religionDesc: 'தத்துவ சாராம்சம் மற்றும் தொழில்நுட்ப ஒழுக்கம் கலந்த மன அறிவு.',
    politics: 'அரசியல் பார்வை',
    politicsDesc: 'கிராம சேவகர் பிரிவை மையமாகக் கொண்ட வெளிப்படையான ஆட்சி.',
    projects: 'எங்கள் திட்டங்கள்',
    projectsDesc: 'நிவாரண இல்லம் மற்றும் ஒருங்கிணைந்த சுற்றுலா பொறிமுறை உள்ளிட்ட செயல் திட்டங்கள்.'
  },
  en: {
    badge: 'National Master Plan 2026',
    heroTitle: 'The Right Solution to National Crisis',
    heroDesc: 'A practical philosophical roadmap for building Sri Lanka by correctly interpreting the past, present, and future.',
    introBtn: 'Introduction',
    economy: 'Economic Vision',
    economyDesc: 'New economic mechanism based on national resources and data.',
    religion: 'Religious Vision',
    religionDesc: 'Mental literacy mixed with philosophical core and technical discipline.',
    politics: 'Political Vision',
    politicsDesc: 'Transparent governance centered on the Grama Niladhari division.',
    projects: 'Our Projects',
    projectsDesc: 'Action plans including relief housing and integrated tourism mechanism.'
  }
}

function MainPage({ lang, setCurrentPage, setIntroductionClick }) {
  const t = translations[lang]

  return (
    <main className="pt-32 animate-fade">
      <section className="max-w-7xl mx-auto px-6 text-center py-12">
        <div className="inline-block px-5 py-2 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.4em] uppercase">
          {t.badge}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-10">
          {t.heroTitle}<br />
          <span className="text-gradient">{lang === 'si' ? 'තුන් කල් දැක්ම' : lang === 'ta' ? 'துன் கல் தெக்ம' : 'Three Way Vision'}</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl mb-16 leading-relaxed">{t.heroDesc}</p>

        <div className="mb-16">
          <button onClick={() => setIntroductionClick && setIntroductionClick()} className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full text-white font-bold text-lg hover:from-amber-400 hover:to-yellow-500 transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)]">
            {t.introBtn}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div onClick={() => setCurrentPage('economy')} className="p-10 glass-card rounded-[2.5rem] border-blue-500/20 bg-blue-500/5">
            <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.economy}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{t.economyDesc}</p>
          </div>

          <div onClick={() => setCurrentPage('religion')} className="p-10 glass-card rounded-[2.5rem] border-purple-500/20 bg-purple-500/5">
            <div className="w-20 h-20 bg-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.religion}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{t.religionDesc}</p>
          </div>

          <div className="p-10 glass-card rounded-[2.5rem]">
            <div className="w-20 h-20 bg-orange-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.politics}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{t.politicsDesc}</p>
          </div>

          <div className="p-10 glass-card rounded-[2.5rem]">
            <div className="w-20 h-20 bg-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.projects}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{t.projectsDesc}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainPage

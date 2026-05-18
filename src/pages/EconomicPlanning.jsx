import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const translations = {
  si: {
    title: 'D - ආර්ථික සැලසුම්කරණය තුන් කල් දැක්ම',
    subtitle: 'ග්‍රාම නිලධාරී වසම් මට්ටමින් භෞතික හා මානව ප්‍රාග්ධනය සිතියම්ගත කර, දේශීය ව්‍යවසායකත්වය සක්‍රීය කිරීම තුළින් ජාතික ආර්ථිකය ස්වයංපෝෂිත කරන සහ දළ දේශීය නිෂ්පාදිතය (GDP) ඉහළ නංවන උපායමාර්ගික සැලැස්ම.',
    strategy1Title: 'ග්‍රාමීය මට්ටමේ විමධ්‍යගතකරණය',
    strategy1Desc: '"තුන් කල් දැක්ම" මාස්ටර් සැලැස්ම යනු ඉහළ සිට පහළට පනවන නීති මාලාවක් නොවේ. එය ශ්‍රී ලංකාවේ සෑම ග්‍රාම සේවා වසමකම පවතින සැබෑ ශක්‍යතාව හඳුනාගෙන ක්‍රියාත්මක වන බිම් මට්ටමේ සැලසුමකි.',
    primaryObjectiveTitle: 'ප්‍රධාන ඉලක්කය',
    primaryObjectiveDesc: 'රැකියා ප්‍රවර්ධනය, දේශීය කර්මාන්ත ද්‍රවශීලතාවය ආරක්ෂා කිරීම සහ ජාතික දළ දේශීය නිෂ්පාදිතයට (GDP) සෑම ගමකම දායකත්වය සෘජුවම ලබාගැනීම.',
    mappingTitle: 'මානව හා භෞතික සම්පත් විග්‍රහය',
    mappingSubtitle: 'Grama Niladhari Division Audit',
    phase1Title: 'භෞතික සහ මානව දක්ෂතා හඳුනාගැනීම',
    phase1Desc: 'සෑම ග්‍රාම සේවා වසමකම සිටින ශ්‍රම බලකායේ සැබෑ කුසලතා, වෘත්තීය හැකියාවන් සහ පවතින දේශීය ස්වභාවික සම්පත් පරිපූර්ණ ඩිජිටල් විග්‍රහයකට ලක් කෙරේ.',
    phase2Title: 'ශක්තීන්, දුර්වලතා, අවස්ථා සහ අභියෝග (SWOT)',
    phase2Desc: 'එම වසමට අදාළ කර්මාන්ත වල පවතින දුර්වලතා සහ අභියෝග (උදා: ප්‍රාග්ධන හිඟය, වෙළඳපොළ බිඳවැටීම) හඳුනාගෙන, ඒවා ජාතික මට්ටමේ Layer-B යාන්ත්‍රණය සමඟ බද්ධ කර විසඳුම් සපයයි.',
    phase3Title: 'අවශ්‍ය මාවත සොයාගැනීම (Strategic Pathway)',
    phase3Desc: 'සාම්ප්‍රදායික පොදු සැලසුම් වෙනුවට, ඒ ඒ ග්‍රාමීය අංශයන්ට ගැලපෙන නිවැරදිම සහ ලාභදායීම ආර්ථික මාවත (Custom Industry Pathway) තාක්ෂණික මඟපෙන්වීම් ඔස්සේ විවර කර දේ.',
    phase4Title: 'ග්‍රාමීය ව්‍යවසායකත්වය සහ GDP උද්දීපනය',
    phase4Desc: 'මෙලෙස ගම් මට්ටමින් නව ව්‍යවසායකයින් දහස් ගණනක් බිහිවීමෙන් ස්වයංක්‍රීයවම දේශීය රැකියා ප්‍රවර්ධනය වන අතර, එය සමස්ත දළ දේශීය නිෂ්පාදිතය ශීඝ්‍රයෙන් ඉහළ නැංවීමට මඟ පාදයි.',
    quote: '"සැබෑ ආර්ථික නිදහස යනු ඉහළින් ලැබෙන සහනාධාර නොවේ. සෑම ග්‍රාම සේවා වසමකම සැඟවුණු ප්‍රඥාව සහ සම්පත් නිවැරදිව කළමනාකරණය කර, ජාතික නිෂ්පාදනයට දායක කරවන \'D - ආර්ථික සැලසුම්කරණය තුන් කල් දැක්ම\' යි."',
    back: '← ආපසු'
  },
  en: {
    title: 'D - Economic Planning | Three-Way Vision',
    subtitle: 'A strategic framework mapping physical and human capital at the Grama Niladhari division level, empowering rural entrepreneurship to stabilize the national economy and exponentially accelerate GDP.',
    strategy1Title: 'Decentralization at Village Level',
    strategy1Desc: 'The "Three-Way Vision" Master Plan is not a top-down mandate. It is a bottom-up framework operating dynamically inside every single Grama Niladhari division in Sri Lanka.',
    primaryObjectiveTitle: 'Primary Objective',
    primaryObjectiveDesc: 'Job creation, protecting industrial liquidity, and capturing the organic contribution of every village into the national GDP.',
    mappingTitle: 'Human & Physical Resource Mapping',
    mappingSubtitle: 'Grama Niladhari Division Audit',
    phase1Title: 'Talent & Physical Asset Discovery',
    phase1Desc: 'The real hidden skills of the workforce, professional expertise, and available local natural resources within every division are subjected to an advanced digital auditing system.',
    phase2Title: 'Strengths, Weaknesses, Opportunities & Threats',
    phase2Desc: 'Local enterprise weaknesses and institutional challenges (e.g., credit gaps, market access) are audited and bridged by linking them with the national Layer-B adjustment loops.',
    phase3Title: 'Discovering the Custom Growth Vector',
    phase3Desc: 'Instead of generic macro plans, the most viable, cost-effective, and custom industrial pathway is mathematically assigned to each village using micro-data.',
    phase4Title: 'Rural Entrepreneurship & Macro Economic Leap',
    phase4Desc: 'Generating thousands of local entrepreneurs triggers an organic chain reaction of regional job creation, rapidly scaling the country\'s sovereign GDP output.',
    quote: '"True economic sovereignty is not found in high-level subsidies. It is found in unlocking and managing the hidden assets of every village to serve the sovereign collective GDP output."',
    back: '← Back'
  },
  ta: {
    title: 'D - பொருளாதார திட்டமிடல் | முக்கால பார்வை',
    subtitle: 'கிராம நிலதாரி பிரிவில் மனித மற்றும் பௌதீக வளங்களை வரைபடமாக்கி, உள்ளூர் தொழில்முனைவோரை ஊக்குவிப்பதன் மூலம் தேசிய பொருளாதாரத்தை மேம்படுத்தும் மற்றும் மொத்த உள்நாட்டு உற்பத்தியை (GDP) உயர்த்தும் மூலோபாய திட்டம்.',
    strategy1Title: 'கிராமிய அளவிலான பரவலாக்கம்',
    strategy1Desc: '"முக்கால பார்வை" மாஸ்டர் திட்டம் என்பது மேலிருந்து கீழ் விதிக்கப்படும் உத்தரவு அல்ல. இது இலங்கையின் ஒவ்வொரு கிராம நிலதாரி பிரிவிலும் உள்ள உண்மையான திறனை அங்கீகரிக்கும் அடிமட்ட திட்டமாகும்.',
    primaryObjectiveTitle: 'முதன்மை நோக்கம்',
    primaryObjectiveDesc: 'வேலை வாய்ப்புகளை மேம்படுத்துதல், உள்ளூர் தொழில்துறை பணப்புழக்கத்தை பாதுகாத்தல் மற்றும் தேசிய மொத்த உள்நாட்டு உற்பத்தியில் (GDP) ஒவ்வொரு கிராமத்தின் பங்களிப்பையும் நேரடியாகப் பெறுதல்.',
    mappingTitle: 'மனித மற்றும் பௌதீக வளங்கள் பகுப்பாய்வு',
    mappingSubtitle: 'Grama Niladhari Division Audit',
    phase1Title: 'பௌதீக மற்றும் மனித திறமைகளை கண்டறிதல்',
    phase1Desc: 'ஒவ்வொரு கிராம நிலதாரி பிரிவிலும் உள்ள தொழிலாளர்களின் உண்மையான திறமைகள், தொழில்முறை திறன்கள் மற்றும் உள்ளூர் இயற்கை வளங்கள் விரிவான டிஜிட்டல் பகுப்பாய்விற்கு உட்படுத்தப்படுகின்றன.',
    phase2Title: 'பலங்கள், பலவீனங்கள், வாய்ப்புகள் மற்றும் சவால்கள்',
    phase2Desc: 'அந்தப் பிரிவில் உள்ள தொழில்துறைகளின் பலவீனங்கள் மற்றும் சவால்கள் (எ.கா: மூலதனப் பற்றாக்குறை, சந்தை முடக்கம்) கண்டறியப்பட்டு, தேசிய அளவிலான Layer-B பொறிமுறையுடன் இணைக்கப்பட்டு தீர்வுகள் வழங்கப்படுகின்றன.',
    phase3Title: 'தேவையான பாதையை கண்டறிதல்',
    phase3Desc: 'பாரம்பரிய பொதுவான திட்டங்களுக்கு பதிலாக, அந்தந்த கிராமப்புற பிரிவுகளுக்கு ஏற்ற சரியான மற்றும் லாபகரமான பொருளாதார பாதை தொழில்நுட்ப வழிகாட்டல் மூலம் திறக்கப்படும்.',
    phase4Title: 'கிராமிய தொழில்முனைவோர் மற்றும் GDP ஊக்குவிப்பு',
    phase4Desc: 'இவ்வாறு கிராமிய அளவில் ஆயிரக்கணக்கான புதிய தொழில்முனைவோர்களை உருவாக்குவதன் மூலம் உள்ளூர் வேலைவாய்ப்புகள் தானாகவே மேம்படுத்தப்பட்டு, மொத்த உள்நாட்டு உற்பத்தி (GDP) வேகமாக அதிகரிக்க வழிவகுக்கும்.',
    quote: '"உண்மையான பொருளாதார சுதந்திரம் என்பது மேலிருந்து பெறப்படும் மானியங்கள் அல்ல. ஒவ்வொரு கிராம நிலதாரி பிரிவிலும் உள்ள மறைந்திருக்கும் ஞானத்தையும் வளங்களையும் சரியாக நிர்வகித்து, தேசிய உற்பத்திக்கு பங்களிக்கச் செய்வதே \'D - பொருளாதார திட்டமிடல் முக்கால பார்வை\' ஆகும்."',
    back: '← முதன்மைப் பலகத்திற்குத் திரும்பு'
  }
}

function EconomicPlanning({ lang, setLang, setCurrentPage }) {
  const t = translations[lang]

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0b1329', backgroundImage: 'linear-gradient(rgba(11, 19, 41, 0.96), rgba(15, 23, 42, 0.98)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '70px' }}>
      <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1 pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-6xl mx-auto">
            <header className="pt-12 pb-10 text-center">
              <div className="py-10 my-4 bg-slate-900/40 border-y-2 border-sky-500/20 backdrop-blur-md">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent tracking-wide leading-[1.6] px-4">
                  {t.title}
                </h1>
              </div>

              <p className="text-slate-400 text-base md:text-lg max-w-4xl mx-auto leading-relaxed pt-4">
                {t.subtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 rounded-[2rem] relative overflow-hidden backdrop-blur-md bg-slate-800/45 border border-sky-500/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                  <span className="bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Strategy 01</span>
                  
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">
                    {t.strategy1Title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    {t.strategy1Desc}
                  </p>
                </div>

                <div className="p-8 rounded-[2rem] backdrop-blur-md bg-slate-800/45 border border-sky-500/15 border-l-4 border-sky-500">
                  <h4 className="text-lg font-bold text-sky-400 mb-2">
                    {t.primaryObjectiveTitle}
                  </h4>
                  
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    {t.primaryObjectiveDesc}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                
                <div className="p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md bg-slate-800/45 border border-sky-500/15">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]">D</div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">
                        {t.mappingTitle}
                      </h2>
                      <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider mt-0.5">
                        {t.mappingSubtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    
                    <div className="p-5 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all">
                      <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block mb-1">01. Identification Phase</span>
                      <h4 className="text-base font-bold text-white mb-2">
                        {t.phase1Title}
                      </h4>
                      
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                        {t.phase1Desc}
                      </p>
                    </div>

                    <div className="p-5 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all">
                      <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block mb-1">02. Internal Audit</span>
                      <h4 className="text-base font-bold text-white mb-2">
                        {t.phase2Title}
                      </h4>
                      
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                        {t.phase2Desc}
                      </p>
                    </div>

                    <div className="p-5 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all">
                      <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block mb-1">03. Solution & Pathway</span>
                      <h4 className="text-base font-bold text-white mb-2">
                        {t.phase3Title}
                      </h4>
                      
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                        {t.phase3Desc}
                      </p>
                    </div>

                    <div className="p-5 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all">
                      <span className="text-xs text-sky-400 font-bold uppercase tracking-widest block mb-1">04. Economic Yield</span>
                      <h4 className="text-base font-bold text-white mb-2">
                        {t.phase4Title}
                      </h4>
                      
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                        {t.phase4Desc}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-r from-sky-950/30 to-slate-900/40 border border-sky-500/25 text-center backdrop-blur-sm">
              <p className="text-sm md:text-lg italic text-sky-300 leading-relaxed">
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

export default EconomicPlanning

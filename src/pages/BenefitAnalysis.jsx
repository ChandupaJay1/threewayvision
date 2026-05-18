import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const translations = {
  si: {
    title: 'C - යහපත විශ්ලේෂණය තුන් කල් දැක්ම',
    subtitle: 'පද්ධතිමය දෝෂ මඟහැරී නිවැරදි ජාතික සැලැස්ම ක්‍රියාවට නැංවුණේ නම්, උපදින නව පුරවැසියාගේ සිට සමස්ත රාජ්‍ය පාලනය සහ ගෝලීය ආර්ථිකය දක්වා ඇතිවන සමුච්චිත ප්‍රතිලාභ පිළිබඳ පුළුල් විග්‍රහය.',
    section1Title: 'උදාවන පුරවැසියාගේ මූල්‍ය නිදහස සහ මානසික ස්ථාවරත්වය',
    section1Subtitle: 'The Micro Level Impact: Individual Empowerment',
    s1p1Title: 'මානසික සහ සාමාජීය පුනරුත්ථාපනය',
    s1p1Desc: 'CRIB සහ "පරාටේ" නීතිය වැනි යාන්ත්‍රික පීඩනයන්ගෙන් මිදෙන පුරවැසියා, පද්ධතිය තමන්ව විනාශ නොකර නැවත නඟාසිටුවීමට ක්‍රියා කරන බව වටහා ගනී. මෙමඟින් බියෙන් සහ සැකයෙන් තොර, නිර්මාණශීලී, ඉහළ ආත්මවිශ්වාසයකින් යුත් ව්‍යවසායක මනසක් රට තුළ බිහිවේ.',
    s1p2Title: '"පරිණත ව්‍යවසායක පරපුරක්" රැකගැනීම',
    s1p2Desc: 'කිසියම් ව්‍යාපාරික උත්සාහයක් අසාර්ථක වූ පුරවැසියා යනු ප්‍රායෝගික අත්දැකීම් බහුල වටිනා මානව සම්පතකි. ඔහුව කොන් කර මූල්‍ය ප්‍රවාහයෙන් ඉවත් කරනවා වෙනුවට, බීජ ප්‍රාග්ධනය (Seed Capital) සහ නිවැරදි මඟපෙන්වීම ලබාදීමෙන් රටට අතිශය පරිණත ව්‍යවසායක ශ්‍රම බලකායක් ස්වයංක්‍රීයවම දායක කරගත හැක.',
    section2Title: 'රාජ්‍ය පාලන මට්ටම: විනිවිදභාවය සහ දළ දේශීය නිෂ්පාදිතයේ (GDP) පිම්ම',
    section2Subtitle: 'The Macro Level Impact: State & Governance',
    s2p1Title: '"කළු සල්ලි" ජාලයන් සුදු කිරීම සහ නිල මූල්‍ය ප්‍රවාහයට සම්බන්ධ කිරීම (White-Mapping)',
    s2p1Desc: 'බැංකු පද්ධතිය මඟින් ස්මාර්ට් සහන කාලසීමාවන් (Layer-B Loops) ලබාදෙන විට, පුරවැසියා අධික පොලී පීඩනය නිසා භූගත මූල්‍ය ජාවාරම්කරුවන් වෙත යන්නේ නැත. මින් පෙර අවිධිමත් ආර්ථිකයේ සැඟවී තිබූ බිලියන ගණනක "කළු සල්ලි", නීත්‍යානුකූල ව්‍යවසාය ඩිජිටල්කරණය හරහා සෘජුවම රාජ්‍ය මූල්‍ය ප්‍රවාහයට අවශෝෂණය කරගැනේ. මෙය රටේ ද්‍රවශීලතාවය ක්ෂණිකව ඉහළ නංවයි.',
    s2p2Title: 'නිෂ්පාදන ආර්ථිකය ස්ථාවර වීම සහ බදු පදනම (Tax Base) පුළුල් වීම',
    s2p2Desc: '"දඬුවම් මත පදනම් වූ ආර්ථිකය" වෙනුවට "පරිවර්තනීය යුක්තිය" ක්‍රියාත්මක වීම නිසා, සුළු හා මධ්‍ය පරිමාණ කර්මාන්තශාලා (SMEs) වසා දැමීම මුළුමනින්ම නතර වේ. සෑම නිෂ්පාදන ඒකකයක්ම සක්‍රීයව පැවතීම නිසා ජාතික නිෂ්පාදිතය (GDP) ස්වභාවිකවම ඉහළ යන අතර, බදු අනුපාත වැඩි නොකරම රාජ්‍යයට ලැබෙන සමස්ත බදු ආදායම් පදනම පුළුල් වේ.',
    section3Title: 'ගෝලීය මට්ටම: ශ්‍රී ලංකාව සදාචාරාත්මක ආර්ථික ප්‍රඥා කේන්ද්‍රස්ථානයක් වීම',
    section3Subtitle: 'The Global Horizon: Ethical Integration',
    s3p1Title: 'ගෝලීය සදාචාරාත්මක ආයෝජන සහ ස්වෛරී අරමුදල් ආකර්ෂණය',
    s3p1Desc: 'ලෝකය පුරා සිටින මානුෂීය සහ සදාචාරාත්මක ආයෝජකයින්ට සාම්ප්‍රදායික ණය උගුල් වෙනුවට, රටේ සැබෑ මානව වත්කම් සුරක්ෂිත කරන "ජාතික පුරවැසි පුනරුත්ථාපන අරමුදල" සමඟ සෘජුවම ආයෝජනය කිරීමට අවස්ථාව ලැබෙයි. මෙයින් රට ණය බරින් තොර ස්ථාවර විදේශ විනිමය ප්‍රවාහයකට හිමිකම් කියයි.',
    s3p2Title: 'හෙළ ප්‍රෞඪ ඉතිහාසයේ ආර්ථික ප්‍රඥාව සහ නව ලෝක ආර්ථික දර්ශනය',
    s3p2Desc: 'කොන් කිරීම සහ මිනිසුන් සිරගත කිරීම මත පදනම් වූ බටහිර යාන්ත්‍රික මූල්‍ය ක්‍රමවේද අසාර්ථක වෙමින් පවතින යුගයක, "මිනිසා රැකගෙන ආර්ථිකය ගොඩනැඟීමේ" හෙළ ප්‍රෞඪ ඉතිහාසයේ ආර්ථික ප්‍රඥාව නූතන AI තාක්ෂණය සමඟ මුසු කර ලෝකයටම දිය හැකි එකම ආදර්ශමත් විසඳුම "තුන් කල් දැක්ම" යි.',
    quote: '"නිවැරදි දැක්මක් යනු හුදෙක් ලේඛන පරීක්ෂාව නොවේ. වැටුණු පුරවැසියා ශක්තිමත් කිරීමෙන් රාජ්‍යයත්, රාජ්‍යයේ ස්ථාවරත්වය තුළින් මුළු මහත් ලෝකයත් සදාචාරාත්මකව ඒකාබද්ධ කරන එකම මාවත \'C - යහපත විශ්ලේෂණය තුන් කල් දැක්ම\' යි."',
    back: '← ආපසු'
  },
  en: {
    title: 'C - Benefit Analysis | Three-Way Vision',
    subtitle: 'A comprehensive analysis of the cumulative economic and social benefits, from the emerging citizen to state governance and the global economy, if the systemic flaws were resolved in a timely manner.',
    section1Title: 'Financial Freedom & Psychological Stability of the Citizen',
    section1Subtitle: 'The Micro Level Impact: Individual Empowerment',
    s1p1Title: 'Psychological and Social Rehabilitation',
    s1p1Desc: 'By escaping mechanical pressures like CRIB and the "Parate" law, the citizen realizes the system works to rehabilitate rather than destroy them. This gives birth to a fearless, doubt-free, creative, and highly self-confident entrepreneurial mind within the country.',
    s1p2Title: 'Retaining an "Experienced Entrepreneurial Generation"',
    s1p2Desc: 'A citizen who faces a business setback is a valuable asset with practical experience. Instead of exiling them from the financial system, providing seed capital and strategic guidance integrates a highly seasoned workforce back into the economy.',
    section2Title: 'State Level: Fiscal Transparency and Exponential GDP Growth',
    section2Subtitle: 'The Macro Level Impact: State & Governance',
    s2p1Title: 'Eradicating Black Markets via White-Mapping',
    s2p1Desc: 'When the banking core offers smart adjustment loops (Layer-B), citizens bypass predatory underground money lenders. Billions previously trapped in the informal shadow economy are transparently re-routed into the official banking system through digital white-mapping, instantly boosting formal market liquidity.',
    s2p2Title: 'Industrial Stabilization and Broadening of the Tax Base',
    s2p2Desc: 'By replacing punitive measures with Transformative Justice, the forced closure of small and medium enterprises (SMEs) is prevented. Continuous factory operations naturally accelerate GDP growth and expand the sovereign tax base organically, without raising individual tax rates.',
    section3Title: 'Global Scale: Sri Lanka as an Ethical Economic Wisdom Hub',
    section3Subtitle: 'The Global Horizon: Ethical Integration',
    s3p1Title: 'Attracting Ethical Global Investments & Sovereign Funds',
    s3p1Desc: 'Ethical global investors and humanitarian sovereign funds shift focus from debt traps to investing in Sri Lanka\'s "National Citizen Rehabilitation Fund." This anchors foreign direct investments (FDI) on human capital preservation rather than predatory compound high-interest cycles.',
    s3p2Title: 'The Historic Wisdom of Sri Lanka as a New Global Paradigm',
    s3p2Desc: 'In an era where cold Western debt systems based on exclusion and incarceration are failing, the historic economic wisdom of Sri Lanka—"preserve the human to build the economy"—blended with modern AI technology, stands as the only exemplary solution for the world through "Three-Way Vision".',
    quote: '"True vision is not merely legal auditing. It is the restoration of the fallen citizen that stabilizes the State, and through that state stability, merges the global economy into an ethical union."',
    back: '← Back'
  },
  ta: {
    title: 'C - நன்மைகள் பகுப்பாய்வு | முக்கால பார்வை',
    subtitle: 'முறையான குறைபாடுகள் சரியான நேரத்தில் தீர்க்கப்பட்டால், வளர்ந்து வரும் குடிமகன் முதல் மாநில நிர்வாகம் மற்றும் உலகளாவிய பொருளாதாரம் வரை ஏற்படும் ஒட்டுமொத்த பொருளாதார மற்றும் சமூக நன்மைகள் பற்றிய விரிவான பகுப்பாய்வு.',
    section1Title: 'குடிமகனின் நிதி சுதந்திரம் மற்றும் மன நிலைத்தன்மை',
    section1Subtitle: 'The Micro Level Impact: Individual Empowerment',
    s1p1Title: 'உளவியல் மற்றும் சமூக மறுவாழ்வு',
    s1p1Desc: 'CRIB மற்றும் "பாரடே" சட்டம் போன்ற இயந்திரத்தனமான அழுத்தங்களிலிருந்து தப்பிப்பதன் மூலம், கணினி தங்களை அழிப்பதற்குப் பதிலாக மறுவாழ்வு அளிக்க வேலை செய்கிறது என்பதை குடிமகன் உணர்கிறார். இது நாட்டிற்குள் அச்சமற்ற, சந்தேகமில்லாத, ஆக்கப்பூர்வமான மற்றும் அதிக தன்னம்பிக்கை கொண்ட தொழில் முனைவோர் மனதை உருவாக்குகிறது.',
    s1p2Title: '"அனுபவம் வாய்ந்த தொழில்முனைவோர் தலைமுறையை" தக்கவைத்தல்',
    s1p2Desc: 'வணிகப் பின்னடைவை எதிர்கொள்ளும் ஒரு குடிமகன் நடைமுறை அனுபவமுள்ள ஒரு மதிப்புமிக்க சொத்து. அவர்களை நிதி அமைப்பிலிருந்து ஒதுக்கி வைப்பதற்குப் பதிலாக, விதை மூலதனம் மற்றும் மூலோபாய வழிகாட்டுதலை வழங்குவது மிகவும் அனுபவமுள்ள பணியாளர்களை மீண்டும் பொருளாதாரத்தில் ஒருங்கிணைக்கிறது.',
    section2Title: 'மாநில நிலை: நிதி வெளிப்படைத்தன்மை மற்றும் அதிவேக GDP வளர்ச்சி',
    section2Subtitle: 'The Macro Level Impact: State & Governance',
    s2p1Title: 'ஒயிட்-மேப்பிங் மூலம் கருப்பு சந்தைகளை ஒழித்தல்',
    s2p1Desc: 'வங்கி அமைப்பு ஸ்மார்ட் சரிசெய்தல் சுழல்களை (Layer-B) வழங்கும்போது, குடிமக்கள் நிலத்தடி கந்துவட்டிக்காரர்களைத் தவிர்க்கிறார்கள். முறையற்ற நிழல் பொருளாதாரத்தில் முன்னர் சிக்கியிருந்த பில்லியன் கணக்கான பணம், டிஜிட்டல் ஒயிட்-மேப்பிங் மூலம் உத்தியோகபூர்வ வங்கி அமைப்பிற்குள் வெளிப்படையாக மாற்றப்பட்டு, சந்தை பணப்புழக்கத்தை உடனடியாக உயர்த்துகிறது.',
    s2p2Title: 'தொழில்துறை ஸ்திரத்தன்மை மற்றும் வரி அடிப்படையை விரிவாக்குதல்',
    s2p2Desc: 'தண்டனை நடவடிக்கைகளுக்குப் பதிலாக உருமாற்ற நீதியை வழங்குவதன் மூலம், சிறு மற்றும் நடுத்தர தொழில்துறைகளின் (SMEs) கட்டாய மூடல்கள் தடுக்கப்படுகின்றன. தொடர்ச்சியான தொழிற்சாலை செயல்பாடுகள் இயற்கையாகவே GDP வளர்ச்சியை துரிதப்படுத்துகின்றன மற்றும் தனிநபர் வரி விகிதங்களை உயர்த்தாமல் வரி அடிப்படையை ஆர்கானிக் முறையில் விரிவுபடுத்துகின்றன.',
    section3Title: 'உலகளாவிய அளவு: இலங்கை ஒரு நெறிமுறை பொருளாதார ஞான மையமாக மாறுதல்',
    section3Subtitle: 'The Global Horizon: Ethical Integration',
    s3p1Title: 'நெறிமுறை உலகளாவிய முதலீடுகள் மற்றும் இறையாண்மை நிதிகளை ஈர்த்தல்',
    s3p1Desc: 'நெறிமுறை உலகளாவிய முதலீட்டாளர்கள் கடன் பொறிகளிலிருந்து இலங்கையின் "தேசிய குடிமக்கள் மறுவாழ்வு நிதியில்" முதலீடு செய்வதில் கவனம் செலுத்துகிறார்கள். இது மனித மூலதனப் பாதுகாப்பில் அந்நிய நேரடி முதலீடுகளை (FDI) நங்கூரமிடுகிறது.',
    s3p2Title: 'இலங்கையின் வரலாற்றுச் சிறப்புமிக்க ஞானம் ஒரு புதிய உலகளாவிய முன்மாதிரியாகும்',
    s3p2Desc: 'ஒதுக்குதல் மற்றும் சிறைவாசம் ஆகியவற்றின் அடிப்படையிலான மேற்கத்திய கடன் அமைப்புகள் தோல்வியடைந்து வரும் ஒரு சகாப்தத்தில், இலங்கையின் வரலாற்றுப் பொருளாதார ஞானம் - "பொருளாதாரத்தை உருவாக்க மனிதனைப் பாதுகாத்தல்" - நவீன AI தொழில்நுட்பத்துடன் கலந்திருப்பது, "முக்கால பார்வை" மூலம் உலகிற்கு ஒரே முன்மாதிரியான தீர்வாக அமைகிறது.',
    quote: '"உண்மையான பார்வை என்பது வெறும் சட்டபூர்வமான தணிக்கை அல்ல. வீழ்ந்த குடிமகனை மீட்டெடுப்பதுதான் அரசை ஸ்திரப்படுத்துகிறது, அந்த மாநில ஸ்திரத்தன்மையின் மூலம் உலகப் பொருளாதாரத்தை ஒரு நெறிமுறை ஒன்றியமாக இணைக்கிறது."',
    back: '← முதன்மைப் பலகத்திற்குத் திரும்பு'
  }
}

function BenefitAnalysis({ lang, setLang, setCurrentPage }) {
  const t = translations[lang]

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#020617', backgroundImage: 'linear-gradient(rgba(2, 6, 23, 0.95), rgba(2, 6, 23, 0.98)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '70px' }}>
      <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1 pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          
          <header className="pb-12 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Thun Kal Dækma | Layer-C Report
            </div>
            
            <div className="border-t-2 border-b-2 border-emerald-500/30 py-12 my-6 bg-emerald-950/10 backdrop-blur-md overflow-hidden">
              <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-[1.5] px-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                {t.title}
              </h1>
            </div>

            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed pt-4">
              {t.subtitle}
            </p>
          </header>

          <div className="space-y-16">

            <section className="p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden bg-slate-800/35 backdrop-blur-md border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
              
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-[0_0_20px_rgba(5,150,105,0.4)]">01</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{t.section1Title}</h2>
                  <p className="text-sm text-emerald-400 font-semibold mt-1">{t.section1Subtitle}</p>
                </div>
              </div>

              <div className="space-y-8 pl-2 md:pl-16 border-l-3 border-emerald-500/40">
                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span>{t.s1p1Title}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {t.s1p1Desc}
                  </p>
                </div>

                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span>{t.s1p2Title}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {t.s1p2Desc}
                  </p>
                </div>
              </div>
            </section>

            <section className="p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden bg-slate-800/35 backdrop-blur-md border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl"></div>

              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-[0_0_20px_rgba(13,148,136,0.4)]">02</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{t.section2Title}</h2>
                  <p className="text-sm text-teal-400 font-semibold mt-1">{t.section2Subtitle}</p>
                </div>
              </div>

              <div className="space-y-8 pl-2 md:pl-16 border-l-3 border-teal-500/40">
                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                    <span>{t.s2p1Title}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {t.s2p1Desc}
                  </p>
                </div>

                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                    <span>{t.s2p2Title}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {t.s2p2Desc}
                  </p>
                </div>
              </div>
            </section>

            <section className="p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden bg-slate-800/35 backdrop-blur-md border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>

              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(22,163,74,0.4)]">03</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{t.section3Title}</h2>
                  <p className="text-sm text-green-400 font-semibold mt-1">{t.section3Subtitle}</p>
                </div>
              </div>

              <div className="space-y-8 pl-2 md:pl-16 border-l-3 border-green-500/40">
                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    <span>{t.s3p1Title}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {t.s3p1Desc}
                  </p>
                </div>

                <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    <span>{t.s3p2Title}</span>
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {t.s3p2Desc}
                  </p>
                </div>
              </div>
            </section>

            <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-r from-emerald-950/20 to-teal-950/20 border-2 border-emerald-500/25 text-center">
              <p className="text-sm md:text-lg italic text-emerald-300 leading-relaxed">
                {t.quote}
              </p>
            </div>

            <div className="text-center pt-6">
              <button onClick={() => setCurrentPage('economy')} className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-400 border border-white/10 transition-colors">
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

export default BenefitAnalysis

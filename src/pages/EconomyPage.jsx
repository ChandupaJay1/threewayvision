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
    closeReport: 'Close Report',
    quote: '"ඒකේන භෝගේ භුඤ්ජෙය්‍ය, ද්වීහි කම්මං පයෝජයේ, චතුත්ථංච නිධාපෙය්‍ය, ආපදාසු භවිස්සති"',
    quoteDesc: 'තමන් උපයන ධනයෙන් එක් කොටසක් තමාගේ පරිභෝජනය සඳහාද, කොටස් දෙකක් කර්මාන්ත හා ව්‍යාපාරික දියුණුව සඳහා (නැවත ආයෝජනයට) ද යොදවා, හතරවන කොටස අනාගතයේදී පැමිණිය හැකි හදිසි ආපදාවන්ගෙන් ආරක්ෂා වීම පිණිස තැන්පත් කර තැබිය යුතුය.',
    quoteSource: '— බුදුන් වහන්සේ (සිගාලෝවාද සූත්‍රය) —',
    abcdTitle: 'තුන් කල් ආර්ථික මූලධර්ම පද්ධතිය',
    aTitle: 'ප්‍රශ්නය',
    aDesc: 'The Problem Analysis',
    bTitle: 'හේතුව',
    bDesc: 'The Root Causes',
    cTitle: 'යහපත',
    cDesc: 'Benefits of Resolution',
    dTitle: 'සැලසුම',
    dDesc: 'The Action Plan'
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
    closeReport: 'அறிக்கையை மூடு',
    quote: '"ஏகேன போகே புஞ்செய்ய, த்வீஹி கம்மங் பயோஜயே, சதுத்தஞ்ச நிதாபேய்ய, ஆபாதாசு பவிச்சதி"',
    quoteDesc: 'தமிழ் நாட்டில் உள்ள தமிழர்களுக்கு பயன்படுத்துவதற்கு Tamil version of the quote.',
    quoteSource: '— புத்தர் —',
    abcdTitle: 'துன் கல் பொருளாதார மூலதர்ம முறை',
    aTitle: 'பிரச்சினை',
    aDesc: 'The Problem Analysis',
    bTitle: 'காரணம்',
    bDesc: 'The Root Causes',
    cTitle: 'நன்மை',
    cDesc: 'Benefits of Resolution',
    dTitle: 'திட்டம்',
    dDesc: 'The Action Plan'
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
    closeReport: 'Close Report',
    quote: '"One part for consumption, two parts for investment, fourth part saved for emergencies"',
    quoteDesc: 'From your earnings, one part for your own consumption, two parts for industrial and business development (re-investment), and the fourth part should be saved as a reserve for unexpected emergencies that may arise in the future.',
    quoteSource: '— Buddha (Sigalovada Sutta) —',
    abcdTitle: 'Three Way Economic Principles System',
    aTitle: 'The Problem',
    aDesc: 'The Problem Analysis',
    bTitle: 'The Cause',
    bDesc: 'The Root Causes',
    cTitle: 'The Benefit',
    cDesc: 'Benefits of Resolution',
    dTitle: 'The Plan',
    dDesc: 'The Action Plan'
  }
}

const coreModalData = {
  A: {
    tag: "A - Systemic Problem Analysis | Layer-A",
    si: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-red-500/20 pb-4">
          <h1 class="text-2xl md:text-3xl font-bold text-gradient-red py-1">A - ආර්ථික ගැටලු විශ්ලේෂණය තුන් කල් දැක්ම</h1>
          <p class="text-slate-400 text-sm mt-2">දේශීය ව්‍යවසායකයා ධෛර්යමත් කරනු වෙනුවට, යාන්ත්‍රික නීති මඟින් ඔහුව විනාශ කරන වත්මන් මූල්‍ය පද්ධතියේ සහ බිම් මට්ටමේ සම්පත් අවම කළමනාකරණයේ පවතින බරපතලම දෝෂ පිළිබඳ විද්‍යාත්මක විග්‍රහය.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-4 bg-red-950/20 border border-red-500/20 p-6 rounded-2xl">
            <span class="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">The Core Flaw</span>
            <h3 class="text-lg font-bold text-white mt-4 mb-2">යාන්ත්‍රික පීඩනය</h3>
            <p class="text-xs md:text-sm text-slate-400 leading-relaxed">වත්මන් ආර්ථික රාමුව සකස් වී ඇත්තේ වැටුණු මිනිසා නැඟිටුවීමට නොව, ඔහුව කොන් කර මූල්‍ය ප්‍රවාහයෙන් සදහටම පලවා හැරීමටයි.</p>
          </div>
          <div class="lg:col-span-8 space-y-4">
            <div class="p-5 bg-slate-900/60 rounded-xl border border-white/5 hover:border-red-500/30 transition-all">
              <h4 class="text-sm font-bold text-white mb-2">01. CRIB සහ අපරටේ නීතියේ විනාශකාරී බලපෑම</h4>
              <p class="text-xs text-slate-300 leading-relaxed">කිසියම් ව්‍යාපාරිකයෙකු අර්බුදයකට ලක් වූ විට, බැංකු පද්ධතිය CRIB අසාදු ලේඛනගත කිරීම් සහ "අපරටේ" ප්‍රතිපාදන හරහා ඔහුගේ වත්කම් අත්පත් කරගනී.</p>
            </div>
            <div class="p-5 bg-slate-900/60 rounded-xl border border-white/5 hover:border-red-500/30 transition-all">
              <h4 class="text-sm font-bold text-white mb-2">02. බිම් මට්ටමේ සම්පත් සහ මානව කුසලතා හඳුනා නොගැනීම</h4>
              <p class="text-xs text-slate-300 leading-relaxed">වත්මන් සැලසුම්වල සෑම ග්‍රාම සේවා වසමකම පවතින භෞතික සම්පත්, මානව දක්ෂතා, දුර්වලතා හෝ අභියෝග නිසි ලෙස සිතියම්ගත කර නැත.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    en: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-red-500/20 pb-4">
          <h1 class="text-2xl md:text-3xl font-bold text-gradient-red py-1">A - Economic Problem Analysis | Three-Way Vision</h1>
          <p class="text-slate-400 text-sm mt-2">A scientific diagnostic report illuminating how current mechanical financial systems actively paralyze domestic entrepreneurs.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-4 bg-red-950/20 border border-red-500/20 p-6 rounded-2xl">
            <span class="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">The Core Flaw</span>
            <h3 class="text-lg font-bold text-white mt-4 mb-2">Mechanical Incarceration</h3>
            <p class="text-xs md:text-sm text-slate-400 leading-relaxed">Existing architecture exiles fallen citizens instead of rehabilitating their enterprise.</p>
          </div>
          <div class="lg:col-span-8 space-y-4">
            <div class="p-5 bg-slate-900/60 rounded-xl border border-white/5">
              <h4 class="text-sm font-bold text-white mb-2">01. Destructive Toll of CRIB & Parate Laws</h4>
              <p class="text-xs text-slate-300 leading-relaxed">Banking networks respond with aggressive blacklisting and Parate asset seizures.</p>
            </div>
            <div class="p-5 bg-slate-900/60 rounded-xl border border-white/5">
              <h4 class="text-sm font-bold text-white mb-2">02. Blindness to Micro-Level Assets & Talent</h4>
              <p class="text-xs text-slate-300 leading-relaxed">Zero systemic mapping of physical resources or latent human talent.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    ta: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-red-500/20 pb-4">
          <h1 class="text-2xl md:text-3xl font-bold text-gradient-red py-1">A - பொருளாதாரப் பிரச்சினைகள் பகுப்பாய்வு | முக்கால பார்வை</h1>
          <p class="text-slate-400 text-sm mt-2">தற்போதைய நிதி அமைப்பில் உள்ள இயந்திரத்தனமான சட்டங்கள் மூலம் உள்ளூர் தொழில்முனைவோரை முദக்கும்.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-4 bg-red-950/20 border border-red-500/20 p-6 rounded-2xl">
            <span class="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">The Core Flaw</span>
            <h3 class="text-lg font-bold text-white mt-4 mb-2">இயந்திரத்தனமான அழுத்தம்</h3>
            <p class="text-xs md:text-sm text-slate-400 leading-relaxed">தற்போதைய பொருளாதார கட்டமைப்பு வீழ்ந்த மனிதனை மீட்டெடுப்பதற்காக அல்ல.</p>
          </div>
        </div>
      </div>
    `
  },
  B: {
    tag: "B - Root Cause Diagnostics | Layer-B",
    si: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-orange-500/20 pb-4 text-center">
          <div class="inline-block w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-xl font-bold text-orange-500 border border-orange-500/40 mb-3 shadow-[0_0_15px_rgba(249,115,22,0.3)]">B</div>
          <h1 class="text-2xl md:text-4xl font-bold text-gradient-orange py-1">B මූල හේතු විශ්ලේෂණය</h1>
          <p class="text-gray-400 text-xs uppercase tracking-widest mt-1">Root Cause Diagnostics</p>
        </div>
        <div class="p-4 rounded-xl bg-orange-950/10 border-l-4 border-orange-500 text-xs md:text-sm text-orange-200 italic leading-relaxed">
          "රාජ්‍යයක්, ව්‍යාපාරයක් හෝ පුරවැසියෙක් ආර්ථික අරාජිකත්වයට පත්වන්නේ නම්, එහි මූලිකම හේතුව බාහිර සාධක පමණක් නොව; අතීතය, වර්තමානය සහ අනාගතය නිවැරදිව ගළපන 'තුන් කල් දැක්මකින්' යුතු කළමනාකරණයක් නොමැතිකමයි."
        </div>
        <div class="space-y-4">
          <div class="report-card p-5 rounded-2xl bg-orange-500/5 border border-orange-500/20">
            <h3 class="text-base font-bold text-orange-400 mb-2">01. තුන් කල් දැක්මකින් යුතු කළමනාකරණය නොමැතිකම</h3>
            <p class="text-xs text-gray-300 leading-relaxed mb-3">ආර්ථික අරාජිකත්වය හටගන්නා ආකාරය පද්ධතිමය මට්ටම් 3ක් ඔස්සේ ක්‍රියාත්මක වේ:</p>
            <div class="space-y-2 text-[11px] text-gray-400">
              <div class="bg-slate-900/60 p-3 rounded-lg border border-orange-500/20"><strong class="text-white">● රාජ්‍ය මට්ටම (The State):</strong> රාජ්‍යයක් වශයෙන් සමස්ත රටම ආර්ථික අරාජිකත්වයට පත්වීමට මුල්ම සහ ප්‍රධානතම මූල හේතුව වන්නේ රට පාලනය කිරීම සඳහා නිසි 'තුන් කල් දැක්මකින්' යුතු උපායමාර්ගික කළමනාකරණයක් නොමැති කමයි.</div>
              <div class="bg-slate-900/60 p-3 rounded-lg border border-orange-500/20"><strong class="text-white">● ව්‍යාපාරික මට්ටම (The Business):</strong> ව්‍යාපාරයක් බිඳවැටී අරාජිකත්වයට පත්වන්නේ නම්, එම ව්‍යාපාරය මෙහෙයවීම තුළ දිගුකාලීන අවදානම් සහ අවස්ථා කළමනාකරණය කළ හැකි තුන් කල් දැකීමකින් යුතු ස්ථාවර කළමනාකරණ සැලැස්මක් නොමැති කමයි.</div>
            </div>
          </div>
        </div>
      </div>
    `,
    en: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-orange-500/20 pb-4 text-center">
          <h1 class="text-2xl md:text-3xl font-bold text-gradient-orange py-1">B: Root Cause Diagnostics</h1>
          <p class="text-gray-400 text-xs uppercase tracking-widest mt-1">Root Cause Diagnostics</p>
        </div>
        <div class="p-4 rounded-xl bg-orange-950/10 border-l-4 border-orange-500 text-xs md:text-sm text-orange-200 italic leading-relaxed">
          "If a state, enterprise, or individual faces economic collapse, it's the deficit of Three-Way Vision Management."
        </div>
      </div>
    `,
    ta: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-orange-500/20 pb-4 text-center">
          <h1 class="text-2xl md:text-3xl font-bold text-gradient-orange py-1">B: மூல காரணிகள் கண்டறிதல்</h1>
        </div>
      </div>
    `
  },
  C: {
    tag: "C - Cumulative Benefits | Layer-C",
    si: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-emerald-500/20 pb-4 text-center">
          <h1 class="text-2xl md:text-4xl font-bold text-gradient-green mt-3 py-1">C - යහපත විශ්ලේෂණය තුන් කල් දැක්ම</h1>
          <p class="text-gray-400 text-sm mt-2">පද්ධතිමය දෝෂ මඟහැරී නිවැරදි ජාතික සැලැස්ම ක්‍රියාවට නැංවුණේ නම්, උපදින නව පුරවැසියාගේ සිට සමස්ත රාජ්‍ය පාලනය සහ ගෝලීය ආර්ථිකය දක්වා ඇතිවන සමුච්චිත ප්‍රතිලාභ පිළිබඳ පුළුල් විග්‍රහය.</p>
        </div>
        <div class="space-y-4">
          <div class="p-6 bg-slate-900/60 rounded-[2rem] border border-white/5 pl-6 step-border">
            <h3 class="text-lg font-bold text-white mb-2">01. උදාවන පුරවැසියාගේ මූල්‍ය නිදහස සහ මානසික ස්ථාවරත්වය</h3>
            <p class="text-xs md:text-sm text-gray-300 leading-relaxed mb-2"><strong>● මානසික සහ සාමාජීය පුනරුත්ථාපනය:</strong> CRIB සහ "පරාටේ" නීතිය වැනි යාන්ත්‍රික පීඩනයන්ගෙන් මිදෙන පුරවැසියා, පද්ධතිය තමන්ව විනාශ නොකර නැවත නඟාසිටුවීමට ක්‍රියා කරන බව වටහා ගනී.</p>
          </div>
        </div>
      </div>
    `,
    en: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-emerald-500/20 pb-4 text-center">
          <h1 class="text-2xl md:text-3xl font-bold text-gradient-green py-1">C - Benefit Analysis | Three-Way Vision</h1>
          <p class="text-gray-400 text-sm mt-2">Cumulative economic and social benefits from the emerging citizen to state governance.</p>
        </div>
      </div>
    `,
    ta: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-emerald-500/20 pb-4 text-center">
          <h1 class="text-2xl md:text-3xl font-bold text-gradient-green py-1">C - நன்மைகள் பகுப்பாய்வு | முக்கால பார்வை</h1>
        </div>
      </div>
    `
  },
  D: {
    tag: "D - Strategic Action Pathway | Layer-D",
    si: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-sky-500/20 pb-4 text-center">
          <h1 class="text-2xl md:text-4xl font-bold text-gradient-blue py-1">D - ආර්ථික සැලසුම්කරණය තුන් කල් දැක්ම</h1>
          <p class="text-slate-400 text-sm mt-2">ග්‍රාම නිලධාරී වසම් මට්ටමින් භෞතික හා මානව ප්‍රාග්ධනය සිතියම්ගත කර, දේශීය ව්‍යවසායකත්වය සක්‍රීය කිරීම තුළින් ජාතික ආර්ථිකය ස්වයංපෝෂිත කරන සහ දළ දේශීය නිෂ්පාදිතය (GDP) ඉහළ නංවන උපායමාර්ගික සැලැස්ම.</p>
        </div>
      </div>
    `,
    en: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-sky-500/20 pb-4 text-center">
          <h1 class="text-2xl md:text-3xl font-bold text-gradient-blue py-1">D - Economic Planning | Three-Way Vision</h1>
          <p class="text-slate-400 text-sm mt-2">Strategic framework mapping physical and human capital at the Grama Niladhari division level.</p>
        </div>
      </div>
    `,
    ta: `
      <div class="space-y-6 animate-in fade-in duration-200">
        <div class="border-b border-sky-500/20 pb-4 text-center">
          <h1 class="text-2xl md:text-3xl font-bold text-gradient-blue py-1">D - பொருளாதார திட்டமிடல் | முக்கால பார்வை</h1>
        </div>
      </div>
    `
  }
}

const API_KEY = "AIzaSyAc8U3xeho_EjtpoYgl4rp7KjJJSzU2mtE"

function EconomyPage({ lang, setCurrentPage, setOnlineshopClick, setBusinessplanClick, setJobopportunitiesClick }) {
  const t = translations[lang]
  const [showModal, setShowModal] = useState(false)
  const [showABCD, setShowABCD] = useState(false)
  const [activeSection, setActiveSection] = useState('A')
  const [modalLang, setModalLang] = useState(lang)
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

  const openAnalysis = (section) => {
    setActiveSection(section)
    setShowModal(true)
  }

  const changeModalLang = (newLang) => {
    setModalLang(newLang)
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

          <section className="max-w-4xl mx-auto px-0 mb-12">
            <div className="glass-card p-6 md:p-8 rounded-[2.5rem] border-sky-500/20 bg-gradient-to-b from-slate-900/60 to-slate-950/80 text-center backdrop-blur-md relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
              
              <p className="text-sky-300 font-bold text-base md:text-xl tracking-wide mb-4 italic leading-relaxed">
                {t.quote}
              </p>
              
              <div className="h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent my-3 max-w-md mx-auto"></div>
              
              <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {lang === 'si' && (
                  <>තමන් උපයන ධනයෙන් <span className="text-emerald-400 font-semibold">එක් කොටසක්</span> තමාගේ පරිභෝජනය සඳහාද, <span className="text-sky-400 font-semibold">කොටස් දෙකක්</span> කර්මාන්ත හා ව්‍යාපාරික දියුණුව සඳහා (නැවත ආයෝජනයට) ද යොදවා, <span className="text-amber-400 font-semibold">හතරවන කොටස</span> අනාගතයේදී පැමිණිය හැකි හදිසි ආපදාවන්ගෙන් ආරක්ෂා වීම පිණිස තැන්පත් කර තැබිය යුතුය.</>
                )}
                {lang === 'ta' && (
                  <>தமிழ் மொழியில் உள்ள மறு மொழிப்பு.</>
                )}
                {lang === 'en' && (
                  <>From your earnings, <span className="text-emerald-400 font-semibold">one part</span> for your own consumption, <span className="text-sky-400 font-semibold">two parts</span> for industrial and business development (re-investment), and <span className="text-amber-400 font-semibold">the fourth part</span> should be saved as a reserve for unexpected emergencies that may arise in the future.</>
                )}
              </p>
              
              <p className="text-[10px] text-sky-500/70 font-bold tracking-widest uppercase mt-4 font-mono">
                {t.quoteSource}
              </p>
            </div>
          </section>

          <div className="flex justify-start mb-20">
            <div onClick={() => setShowABCD(!showABCD)} className="left-action-btn group">
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

          {showABCD && (
            <div className="mb-12 p-6 rounded-[2.5rem] bg-slate-900/40 border border-blue-500/20">
              <h3 className="text-center text-xl font-bold mb-6 text-blue-400">{t.abcdTitle}</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div onClick={() => openAnalysis('A')} className="abcd-card p-6 rounded-2xl text-center border-red-500/30 hover:border-red-500/60 cursor-pointer">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-[0_0_10px_rgba(220,38,38,0.5)]">A</div>
                  <h4 className="font-bold text-red-400 text-sm md:text-base">{t.aTitle}</h4>
                  <p className="text-[10px] text-gray-400 mt-1">{t.aDesc}</p>
                </div>
                <div onClick={() => window.location.href = '/root_cause.html'} className="abcd-card p-6 rounded-2xl text-center border-orange-500/30 hover:border-orange-500/60 cursor-pointer">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-[0_0_10px_rgba(249,115,22,0.5)]">B</div>
                  <h4 className="font-bold text-orange-400 text-sm md:text-base">{t.bTitle}</h4>
                  <p className="text-[10px] text-gray-400 mt-1">{t.bDesc}</p>
                </div>
                <div onClick={() => window.location.href = '/benefit_analysis.html'} className="abcd-card p-6 rounded-2xl text-center border-green-500/30 hover:border-green-500/60 cursor-pointer">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-[0_0_10px_rgba(22,163,74,0.5)]">C</div>
                  <h4 className="font-bold text-green-400 text-sm md:text-base">{t.cTitle}</h4>
                  <p className="text-[10px] text-gray-400 mt-1">{t.cDesc}</p>
                </div>
                <div onClick={() => openAnalysis('D')} className="abcd-card p-6 rounded-2xl text-center border-blue-500/30 hover:border-blue-500/60 cursor-pointer">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-[0_0_10px_rgba(37,99,235,0.5)]">D</div>
                  <h4 className="font-bold text-blue-400 text-sm md:text-base">{t.dTitle}</h4>
                  <p className="text-[10px] text-gray-400 mt-1">{t.dDesc}</p>
                </div>
              </div>
            </div>
          )}

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
            <div onClick={() => setJobopportunitiesClick && setJobopportunitiesClick()} className="sub-card cursor-pointer" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600)' }}>
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
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto p-6 flex items-center justify-center">
          <div className="analysis-popup-card w-full max-w-5xl rounded-[2.5rem] max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col bg-slate-900/95 border border-white/10">
            <div className="p-6 border-b border-white/10 flex flex-wrap justify-between items-center gap-4 sticky top-0 bg-slate-900 z-20">
              <div className="text-left">
                <h2 className="text-base md:text-lg font-bold text-gradient">තුන් කල් දැක්ම (Three-Way Vision)</h2>
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">{coreModalData[activeSection]?.tag}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => changeModalLang('si')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${modalLang === 'si' ? 'bg-orange-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>සිංහල</button>
                <button onClick={() => changeModalLang('en')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${modalLang === 'en' ? 'bg-orange-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>English</button>
                <button onClick={() => changeModalLang('ta')} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${modalLang === 'ta' ? 'bg-orange-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>தமிழ்</button>
                <button onClick={() => setShowModal(false)} className="ml-4 bg-white/10 hover:bg-red-600/40 p-2 rounded-full transition-colors text-white text-sm font-bold w-8 h-8 flex items-center justify-center">✕</button>
              </div>
            </div>
            <div className="p-6 md:p-10 text-left modal-inner-view">
              <div dangerouslySetInnerHTML={{ __html: coreModalData[activeSection]?.[modalLang] || coreModalData[activeSection]?.en || '' }} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EconomyPage

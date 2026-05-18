import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const translations = {
  si: {
    title: 'තුන් කල් දැක්ම',
    subtitle: 'සර්වකාලීන ජාතික මාර්ග සිතියම',
    metaIntro: 'ශ්‍රී ලංකාව මුහුණ දී සිටින ව්‍යුහාත්මක, ආර්ථික, ආගමික, සංස්කෘතික සහ පරිපාලනමය අභියෝගයන්ට ස්ථාවර සහ ප්‍රායෝගික විසඳුම් සපයනු පිණිස, දීර්ඝ කාලයක් පුරා සිදු කරන ලද ස්වාධීන පර්යේෂණ දත්ත ඇසුරින් මෙම ජාතික සැලැස්ම නිර්මාණය කර ඇත. මෙය විනයත්, ධර්මත් පදනම්ව ගොඩනැගුණු විද්‍යාත්මක කළමනාකරණ වැඩපිළිවෙළකි.',
    section1Title: '1. විශ්ලේෂණාත්මක පදනම: "A, B, C, D" තර්කන රාමුව',
    section1Desc: 'සැලැස්මෙහි අන්තර්ගත සෑම ක්ෂේත්‍රයක්ම සහ යෝජනාවක්ම, බුදුදහමේ උතුම් චතුරාර්ය සත්‍යය පදනම් කරගෙන නිර්මාණය කරන ලද "A, B, C, D" තර්කන ආකෘතිය ඔස්සේ ඉතා පැහැදිලිව විග්‍රහ කර ඇත:',
    s1f1: 'A - ගැටලුව (Problem / දුක්ඛ සත්‍යය): පද්ධතිවල පවතින අකාර්යක්ෂමතාව සහ විනිවිදභාවයෙන් තොරවීම හඳුනාගැනීම.',
    s1f2: 'B - හේතු (Causes / සමුදය සත්‍යය): එම ගැටලුවලට මුල් වූ පරිපාලනමය, ව්‍යුහාත්මක සහ මතවාදීමය හේතු මූලයන් විශ්ලේෂණය කිරීම.',
    s1f3: 'C - විසඳීමෙන් ලැබෙන ප්‍රතිලාභ (Benefits / නිරෝධ සත්‍යය): පද්ධතිය නිවැරදි කිරීමෙන් ජනතාවට සහ සමස්ත රටට ලැබෙන දිගුකාලීන ස්ථාවරත්වය සහ සහනය.',
    s1f4: 'D - විසඳුම් (Solutions / මාර්ග සත්‍යය): තාක්ෂණය, කළමනාකරණය සහ ආයතනික වගවීම පෙරදැරි කරගත් ප්‍රායෝගික ක්‍රියාමාර්ග මෙන්ම, තුන්කල් දැක්ම හඳුන්වා දෙන සැලසුම් සහ මාර්ගෝපදේශනය.',
    section2Title: '2. ක්‍රියාකාරී ව්‍යුහය: බිම් මට්ටමේ සිට ජාතික මට්ටම දක්වා',
    section2Desc: 'මෙම සැලැස්මේ මූලිකම ශක්තිය වන්නේ එය දිවයිනේ සියලුම ග්‍රාම සේවා වසම් ආවරණය වන පරිදි ක්‍රමීය මට්ටමෙන් සැලසුම් කර තිබීමයි. ඕනෑම ජාතික ප්‍රතිපත්තියක් සැකසීමට ප්‍රථම බිම් මට්ටමේ පවතින පහත සාධක නිවැරදිව තක්සේරු කරනු ලබයි:',
    s2i1: 'මානව හා භෞතික හැකියාවන්: ප්‍රදේශයේ පවතින ශ්‍රම බලකාය, නිපුණතා සහ ස්වාභාවික සම්පත් තක්සේරුව.',
    s2i2: 'දක්ෂතාවන්: ජනතාව සතු පාරම්පරික, කාර්මික සහ තාක්ෂණික කුසලතා සිතියම්ගත කිරීම.',
    s2i3: 'දුර්වලතාවන් සහ අභියෝග: පවතින පරිපාලනමය බාධා, මූල්‍ය හෝ තාක්ෂණික සාක්ෂරතාවය නොමැතිකම සහ වෙළෙඳපොළ අස්ථාවරත්වය හඳුනා ගැනීම.',
    section3Title: '3. ප්‍රධාන ක්ෂේත්‍ර 4ක කළමනාකරණ උපායමාර්ගය',
    section3Desc: 'හඳුනාගත් බිම් මට්ටමේ දත්ත සහ දේශීය ව්‍යවසායකයින්ගේ ප්‍රායෝගික ඥානය පදනම් කරගෙන, රටේ ප්‍රධාන අංශ හතරක් කළමනාකරණය සඳහා වන උපක්‍රම මෙසේ පෙළගස්වා ඇත:',
    s3h1: 'I. ආර්ථික කළමනාකරණය (Economic Management)',
    s3p1: 'දේශීය නිෂ්පාදකයින් සහ ව්‍යවසායකයින් මුහුණ දෙන වෙළෙඳපොළ ගැටලුවලට පිළියම් යොදමින්, ග්‍රාම සේවා වසම් මට්ටමින් හඳුනාගන්නා සම්පත්වලට අගය එකතු කිරීමේ (Value Addition) දේශීය කර්මාන්ත ශාලා සහ ඍජු වෙළෙඳපොළ ජාලකරණය ඇති කිරීම මෙයින් යෝජනා කෙරේ.',
    s3h2: 'II. ආගමික හා සංස්කෘතික කළමනාකරණය (Religious & Cultural Management)',
    s3l1: 'ගැටලුව හා හේතු: කාලෝචිතව බලන කල, ආගම් හා දර්ශන තුළ විවිධාකාර ගැටලු පවතී. මෙම ගැටළු වලට මූලික හේතුව ආගමික දර්ශනයේ සැබෑ හරය පිළිබඳ අවබෝධයක් නොමැතිකම සහ ආගමික ක්ෂේත්‍රයන් විවිධ මට්ටමින් අවභාවිත වීමයි. මේ හේතුවෙන් ආගමේ නියම හරය වියැකී ගොස් ආගම් හා දර්ශන තුළ බෙදුම්වාදයක් නිර්මාණය වී ඇත.',
    s3l2: 'විසඳුම් හා ප්‍රතිලාභ: ආගමික දර්ශනවල ඇති සැබෑ හරය තුළින් නිවැරදි ප්‍රතිඵල ජනිත කිරීමට නම් ආගම් තුළ පවතින මෙම ගැටලු නිරාකරණය කිරීම අත්‍යවශ්‍ය වේ. මේ සඳහා ජනතාවත් රාජ්‍යයත් සියලුම ආගම්වලට පොදුවේ ආරාධනා කොට, ඒ ඒ ආගම් තුළ ඇති ධර්මයත් විනයත් සංගායනා කරමින් එහි නියම හරය විදර්ශන (පැහැදිලි) කළ යුතුය. එම හරය තුළින් කාලෝචිතව ලෝකයා මුහුණ දෙන්නා වූ ගැටළු සහ ඒවාට හේතු විග්‍රහ කොට, හේතු නැතිවීමෙන් උදාවන යහපත පෙන්වා දී, එම යහපත කරා යාමට නිසි සැලසුම්කරණයක් ලබා දිය යුතුය. මෙමඟින් සමාජයේ සදාචාරාත්මක සහ මානසික ස්ථාවරත්වය උදෙසා ආගමික, ඓතිහාසික සහ දර්ශනික වටිනාකම් නූතන සමාජයට ගැළපෙන සේ කළමනාකරණය කිරීමත් සිදු කෙරේ.',
    s3h3: 'III. දේශපාලනික හා පරිපාලන කළමනාකරණය (Political & Administrative Management)',
    s3p3: 'ඉහළ සිට පහළට විධාන දෙන අකාර්යක්ෂම පරිපාලන ව්‍යුහය වෙනුවට, රාජ්‍ය පරිපාලනය සහ තීරණ ගැනීමේ ක්‍රියාවලිය විමධ්‍යගත කිරීම. ග්‍රාම සේවා වසම් මට්ටමෙන් රැස්කරන සැබෑ දත්ත මත පදනම්ව ජාතික ප්‍රතිපත්ති සකස් කිරීම (Data-driven Policy Making) සහ ආයතනික වගවීම තහවුරු කිරීම මෙහි අරමුණයි.',
    s3h4: 'IV. තාක්ෂණික කළමනාකරණය (Technological Management)',
    s3p4: 'රාජ්‍ය සේවා සහ බැංකු පද්ධති සම්පූර්ණයෙන්ම ඩිජිටල්කරණය කරමින් විනිවිදභාවය ඇති කිරීම සහ පාසල් පද්ධතිය තුළට "තාක්ෂණික දක්ෂතා හඳුනාගැනීමේ පරිසර පද්ධති" (Talent Mapping) හඳුන්වා දෙමින් අනාගත ගෝලීය වෙළෙඳපොළට ගැළපෙන ශ්‍රම බලකායක් නිර්මාණය කිරීම මෙයින් සිදු කෙරේ.',
    section4Title: '4. ක්‍රියාවට නැංවීමේ ආකෘතිය (Implementation Model)',
    f1: 'සියලුම ග්‍රාම සේවා වසම්වල මානව, භෞතික සහ ව්‍යවසායකත්ව විභවතා හඳුනාගැනීම',
    f2: 'ABCD රාමුව අනුව ආර්ථික, ආගමික, දේශපාලනික හා තාක්ෂණික ගැටලු විශ්ලේෂණය',
    f3: 'දේශීය ව්‍යවසායකයින්ගේ දායකත්වයෙන් යුත් ක්‍රමීය කළමනාකරණ සැලසුම්',
    back: '← ආපසු'
  },
  en: {
    title: 'Three Way Vision',
    subtitle: 'The Eternal National Roadmap Blueprint',
    metaIntro: 'Designed to deliver stable and actionable solutions to the structural, economic, religious, cultural, and administrative challenges encompassing Sri Lanka. This national plan has been formulated based on long-term independent research data—a scientific management program fundamentally rooted in discipline (Vinaya) and righteousness (Dharma).',
    section1Title: '1. Analytical Foundation: The "A, B, C, D" Logic Framework',
    section1Desc: 'Every operational node and strategic proposal inside this dynamic roadmap is thoroughly analyzed through the ABCD logic framework, which is fundamentally inspired by the deep logic of the Four Noble Truths:',
    s1f1: 'A - Problem (Dukkha): Identification and isolation of deep systemic inefficiencies, operational friction, and lack of transparency.',
    s1f2: 'B - Causes (Samudaya): Comprehensive root-cause analysis tracing back bureaucratic, infrastructural, and ideological origins.',
    s1f3: 'C - Benefits of Resolution (Nirodha): Forecasting generational dividends, macro stabilization, and systemic relief for citizens.',
    s1f4: 'D - Solutions (Magga): Practical execution based on technology, management, structural accountability, alongside the strategic action plans and blueprints introduced by Three Way Vision.',
    section2Title: '2. Operational Topography: Decentralized Grassroots Grid',
    section2Desc: 'The foundational framework architecture executes from the village level upwards, securing macro metrics via systematic validation of all Grama Niladhari divisions. Prior to establishing structural policies, decentralized assessments map out:',
    s2i1: 'Human & Material Capacity: Deep auditing of local workforce volumes, resource dynamics, and latent raw capital.',
    s2i2: 'Native Competencies: Comprehensive ledgering of ancestral industrial craftsmanship and modern digital skill levels.',
    s2i3: 'Vulnerabilities & Friction Points: Profiling localized red tape, credit bottlenecks, and direct market access constraints.',
    section3Title: '3. Strategic Execution Matrix: The Four Pillars',
    section3Desc: 'Leveraging verified empirical grassroots intel combined with elite domestic entrepreneurial data, the roadmap configures four primary execution branches:',
    s3h1: 'I. Economic Management',
    s3p1: 'Direct remediation of market access limits for home growers and visual creators. Implementing automated value addition systems mapped specifically to local resources while initiating non-intermediated, hyper-fluid direct trade networks.',
    s3h2: 'II. Religious & Cultural Management',
    s3l1: 'Problem & Causes: Contemporary spiritual and philosophical ecosystems exhibit fragmentation. The operational failure stems from losing the authentic baseline core of philosophical doctrines alongside structural misuse across various socioeconomic platforms. This has diluted true existential morality, fostering ideological isolationism.',
    s3l2: 'Solutions & Benefits: To manifest the raw operational value of ancient wisdom, resolving these structural deviations is a critical baseline requirement. The framework calls for a universal public invitation to consolidate, re-verify, and clarify the authentic Core Truth (Dharma & Vinaya) across all beliefs. By extracting this pristine logic, the model diagnoses global issues, traces root causes, shows the equilibrium of absolute remediation, and outputs actionable roadmaps. This systematically deploys psychological tranquility ecosystems centered around historical heritage nodes.',
    s3h3: 'III. Political & Administrative Management',
    s3p3: 'Dissolving highly centralized top-down bureaucratic control chains in favor of a distributed horizontal matrix. Shifting the complete legislative machinery onto a continuous feed of absolute grassroots data (Data-driven Policy Making) to enforce absolute systemic transparency.',
    s3h4: 'IV. Technological Management',
    s3p4: 'Total digitizing of state interfaces and ledger networks via automated protocols. Integrating advanced individual talent optimization matrixing (Talent Mapping) into the primary educational ecosystem to stream high-yield, globally aligned digital assets.',
    section4Title: '4. Implementation Architecture',
    f1: 'Comprehensive Audit of Human, Resource & Enterprise Potential at Grassroots Grid',
    f2: 'ABCD Logic Processing of Fiscal, Cultural, Systemic & Technological Inefficiencies',
    f3: 'Data-Driven Strategic Management Plan with Local Entrepreneurial Integration',
    back: '← Back'
  },
  ta: {
    title: 'முக்காலத் தரிசனம்',
    subtitle: 'காலமற்ற தேசிய வழிவரைபடம்',
    metaIntro: 'இலங்கை எதிர்கொள்ளும் வ்யூஹாத்மக, பொருளாதார, மத, கலாசார மற்றும் நிர்வாக சவால்களுக்கு நிலையான மற்றும் நடைமுறை தீர்வுகளை வழங்குவதற்காக, நீண்ட காலமாக மேற்கொள்ளப்பட்ட சுயாதீன ஆராய்ச்சி தரவுகளின் அடிப்படையில் இந்த தேசிய திட்டம் உருவாக்கப்பட்டுள்ளது. இது ஒழுக்கத்தையும் தர்மத்தையும் அடிப்படையாகக் கொண்ட ஒரு அறிவியல் மேலாண்மை திட்டமாகும்.',
    section1Title: '1. பகுப்பாய்வு அடிப்படை: "A, B, C, D" தர்க்கக் கட்டமைப்பு',
    section1Desc: 'இத்திட்டத்தில் உள்ள ஒவ்வொரு துறையும் முன்மொழிவும், பௌத்த தத்துவத்தின் உன்னதமான சதுராரிய சத்தியங்களை (நான்கு ஆரிய உண்மைகள்) அடிப்படையாகக் கொண்டு வடிவமைக்கப்பட்ட "A, B, C, D" தர்க்க மாதிரியின் மூலம் பகுப்பாய்வு செய்யப்பட்டுள்ளது:',
    s1f1: 'A - பிரச்சினை (Problem / துக்கம்): கட்டமைப்புகளில் உள்ள திறமையின்மை மற்றும் வெளிப்படைத்தன்மையற்ற தன்மையை அடையாளங்காணல்.',
    s1f2: 'B - காரணங்கள் (Causes / துக்க உற்பத்தி): இப்பிரச்சினைகளுக்குக் காரணமான நிர்வாக, வ்யூஹாத்மக மற்றும் கருத்தியல் ரீதியான மூலக் காரணங்களை பகுப்பாய்வு செய்தல்.',
    s1f3: 'C - தீர்வின் பலன்கள் (Benefits / துக்க நிவர்த்தி): கட்டமைப்பைச் சீரமைப்பதன் மூலம் மக்களுக்குக் கிடைக்கும் நீண்டகால நிலையான நன்மைகள் மற்றும் நிம்மதி.',
    s1f4: 'D - தீர்வுகள் (Solutions / நிவர்த்தி வழி): தொழில்நுட்பம், மேலாண்மை மற்றும் நிறுவனப் பொறுப்புக்கூறலை அடிப்படையாகக் கொண்ட நடைமுறை நடவடிக்கைகள் மற்றும் முக்காலத் தரிசனம் அறிமுகப்படுத்தும் திட்டவட்டமான வழிவரைபட வழிகாட்டல்கள்.',
    section2Title: '2. செயல்பாட்டுக் கட்டமைப்பு: அடிமட்டத்திலிருந்து தேசிய மட்டம் வரை',
    section2Desc: 'இத்திட்டத்தின் முதன்மையான பலம் என்னவெனில், இது நாட்டின் அனைத்து கிராம சேவை பிரிவுகளையும் உள்ளடக்கியதாக முறையாகத் திட்டமிடப்பட்டுள்ளது. எந்தவொரு தேசியக் கொள்கையையும் வகுப்பதற்கு முன், அடிமட்டத்திலுள்ள பின்வரும் காரணிகள் துல்லியமாக மதிப்பிடப்படுகின்றன:',
    s2i1: 'மனித மற்றும் பௌதீகத் திறன்கள்: அப்பகுதியில் உள்ள உழைக்கும் சக்தி, திறன்கள் மற்றும் இயற்கை வளங்களின் மதிப்பீடு.',
    s2i2: 'திறமைகள்: மக்களிடம் உள்ள பாரம்பரிய, தொழிற்துறை மற்றும் தொழில்நுட்பக் திறன்களை வரைபடமாக்கல்.',
    s2i3: 'பலவீனங்கள் மற்றும் சவால்கள்: தற்போதுள்ள நிர்வாகத் தடைகள், நிதி அல்லது தொழில்நுட்ப அறிவு இல்லாமை மற்றும் சந்தை நிலையற்ற தன்மைகளை கண்டறிதல்.',
    section3Title: '3. நான்கு முக்கிய துறைகளின் மேலாண்மை உத்தி',
    section3Desc: 'அடிமட்ட தரவுகள் மற்றும் உள்நாட்டு தொழில்முனைவோரின் நடைமுறை அறிவின் அடிப்படையில், நாட்டின் நான்கு முக்கிய துறைகளை நிர்வகிப்பதற்கான உத்திகள் பின்வருமாறு வரிசைப்படுத்தப்பட்டுள்ளன:',
    s3h1: 'I. பொருளாதார மேலாண்மை (Economic Management)',
    s3p1: 'உள்நாட்டு உற்பத்தியாளர்கள் மற்றும் தொழில்முனைவோர் எதிர்கொள்ளும் சந்தைப் பிரச்சினைகளுக்குத் தீர்வுகாணல். கிராம சேவைப் பிரிவுகளில் கண்டறியப்படும் வளங்களுக்கு மதிப்பு சேர்க்கும் (Value Addition) உள்நாட்டு தொழிற்சாலைகள் மற்றும் இடைத்தரகர்கள் இல்லாத நேரடி சந்தை வலையமைப்பை உருவாக்குதல்.',
    s3h2: 'II. மத மற்றும் கலாசார மேலாண்மை (Religious & Cultural Management)',
    s3l1: 'பிரச்சினையும் காரணங்களும்: சமகாலத்தில் மதங்கள் மற்றும் தத்துவங்களுக்குள் பல்வேறு சிக்கல்கள் காணப்படுகின்றன. இவற்றுக்கு முதன்மைக் காரணம், ஆன்மீக தத்துவங்களின் உண்மையான சாரத்தை உணராமல் இருப்பதும், அவை வெவ்வேறு மட்டங்களில் தவறாகப் பயன்படுத்தப்படுவதும் ஆகும். இதனால் மதத்தின் உண்மையான நோக்கம் சிதைந்து, பிரிவினைவாதம் உருவாகியுள்ளது.',
    s3l2: 'தீர்வுகள் மற்றும் பலன்கள்: தத்துவங்களின் உண்மையான சாரத்தின் மூலம் சரியான நேர்மறை விளைவுகளை enfrentar செய்ய இந்த சிக்கல்களைக் களைவது கட்டாயமாகும். இதற்காக, அனைத்து மதங்களுக்கும் பொதுவான அழைப்பு விடுத்து, அந்தந்த மதங்களின் தர்மத்தையும் வினயத்தையும் (ஒழுக்கத்தையும்) மறுசீராய்வு செய்து அதன் உண்மையான சாரத்தை வெளிப்படுத்த வேண்டும். அதன் மூலம் உலகளாவிய பிரச்சினைகளையும் காரணங்களையும் பகுப்பாய்வு செய்து, தீர்வுக்கான திட்டவட்டமான வழிமுறைகளை வழங்க வேண்டும். இது சமூகத்தின் ஒழுக்க மற்றும் மன ஸ்திரத்தன்மைக்கு வழிவகுக்கும்.',
    s3h3: 'III. அரசியல் மற்றும் நிர்வாக மேலாண்மை (Political & Administrative Management)',
    s3p3: 'மேலிருந்து கீழ்நோக்கி உத்தரவிடும் திறமையற்ற நிர்வாக முறைக்கு பதிலாக, நிர்வாக அதிகாரப் பரவலாக்கல். கிராம சேவை மட்டத்தில் சேகரிக்கப்படும் உண்மையான தரவுகளின் அடிப்படையில் தேசியக் கொள்கைகளை வகுத்தல் (Data-driven Policy Making) மற்றும் நிறுவனப் பொறுப்புக்கூறலை உறுதி செய்தல்.',
    s3h4: 'IV. தொழில்நுட்ப மேலாண்மை (Technological Management)',
    s3p4: 'அரசாங்க சேவைகள் மற்றும் வங்கி அமைப்புகளை முழுமையாக டிஜிட்டல் மயமாக்குவதன் மூலம் வெளிப்படைத்தன்மையை ஏற்படுத்துதல். பள்ளி அமைப்பிற்குள் "திறன் வரைபட சுற்றுச்சூழல் அமைப்புகளை" (Talent Mapping) அறிமுகப்படுத்தி, எதிர்கால உலகளாவிய சந்தைக்கு ஏற்ற மனித வளத்தை உருவாக்குதல்.',
    section4Title: '4. செயல்படுத்தல் கட்டமைப்பு',
    f1: 'அடிமட்ட தரவுகளில் மனித, வள மற்றும் தொழில்முனைவோர் திறன்களின் முழுமையான கணக்கெடுப்பு',
    f2: 'ABCD தர்க்க முறையின் மூலம் பொருளாதார, கலாசார, கட்டமைப்பு மற்றும் தொழில்நுட்ப சிக்கல்கள் பகுப்பாய்வு',
    f3: 'உள்நாட்டு தொழில்முனைவோர் ஒருங்கிணைப்புடன் தரவு ஆதாரத்தில் மேலாண்மை திட்டம்',
    back: '← முதன்மைப் பலகத்திற்குத் திரும்பு'
  }
}

function Introduction({ lang, setLang, setCurrentPage }) {
  const t = translations[lang]

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#020617', backgroundImage: 'radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%), url(https://www.transparenttextures.com/patterns/stardust.png)', paddingTop: '70px' }}>
      <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1 pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          
          <header className="pt-12 pb-10 text-center">
            <div className="py-10 my-4 bg-slate-900/40 border-y-2 border-amber-500/20 backdrop-blur-md">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-wide leading-[1.6] px-4">
                {t.title}
              </h1>
            </div>
            
            <h2 className="text-xl md:text-2xl text-white opacity-90 text-shadow-[0_0_15px_rgba(255,255,255,0.2)] max-w-2xl mx-auto font-normal mb-6">
              {t.subtitle}
            </h2>
            
            <div className="mt-6 text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed text-center bg-white/[0.02] p-6 rounded-xl border border-white/[0.05] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
              {t.metaIntro}
            </div>
          </header>

          <div className="space-y-10">
            
            <section className="p-8 md:p-10 rounded-[2rem] backdrop-blur-md bg-white/[0.06] border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <h2 className="text-amber-400 text-2xl md:text-3xl mb-6 border-b border-white/[0.12] pb-3 font-semibold">
                {t.section1Title}
              </h2>
              
              <p className="mb-6 text-base md:text-lg text-justify opacity-90 text-slate-300">
                {t.section1Desc}
              </p>

              <div className="space-y-4">
                <div className="bg-white/[0.03] border border-white/[0.12] rounded-xl p-5 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all">
                  <strong className="text-amber-400 text-lg md:text-xl inline-block mb-1">{t.s1f1.split(':')[0]}:</strong>
                  <span className="text-slate-300">{t.s1f1.split(':')[1]}</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.12] rounded-xl p-5 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all">
                  <strong className="text-amber-400 text-lg md:text-xl inline-block mb-1">{t.s1f2.split(':')[0]}:</strong>
                  <span className="text-slate-300">{t.s1f2.split(':')[1]}</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.12] rounded-xl p-5 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all">
                  <strong className="text-amber-400 text-lg md:text-xl inline-block mb-1">{t.s1f3.split(':')[0]}:</strong>
                  <span className="text-slate-300">{t.s1f3.split(':')[1]}</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.12] rounded-xl p-5 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all">
                  <strong className="text-amber-400 text-lg md:text-xl inline-block mb-1">{t.s1f4.split(':')[0]}:</strong>
                  <span className="text-slate-300">{t.s1f4.split(':')[1]}</span>
                </div>
              </div>
            </section>

            <section className="p-8 md:p-10 rounded-[2rem] backdrop-blur-md bg-white/[0.06] border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <h2 className="text-amber-400 text-2xl md:text-3xl mb-6 border-b border-white/[0.12] pb-3 font-semibold">
                {t.section2Title}
              </h2>
              
              <p className="mb-6 text-base md:text-lg text-justify opacity-90 text-slate-300">
                {t.section2Desc}
              </p>

              <div className="space-y-3">
                <div className="pl-6 mb-3 relative text-base md:text-lg text-slate-300">
                  <span className="absolute left-0 text-amber-400 text-sm">◆</span>
                  <strong>{t.s2i1.split(':')[0]}:</strong>
                  <span>{t.s2i1.split(':')[1]}</span>
                </div>
                <div className="pl-6 mb-3 relative text-base md:text-lg text-slate-300">
                  <span className="absolute left-0 text-amber-400 text-sm">◆</span>
                  <strong>{t.s2i2.split(':')[0]}:</strong>
                  <span>{t.s2i2.split(':')[1]}</span>
                </div>
                <div className="pl-6 mb-3 relative text-base md:text-lg text-slate-300">
                  <span className="absolute left-0 text-amber-400 text-sm">◆</span>
                  <strong>{t.s2i3.split(':')[0]}:</strong>
                  <span>{t.s2i3.split(':')[1]}</span>
                </div>
              </div>
            </section>

            <section className="p-8 md:p-10 rounded-[2rem] backdrop-blur-md bg-white/[0.06] border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <h2 className="text-amber-400 text-2xl md:text-3xl mb-6 border-b border-white/[0.12] pb-3 font-semibold">
                {t.section3Title}
              </h2>
              
              <p className="mb-6 text-base md:text-lg text-justify opacity-90 text-slate-300">
                {t.section3Desc}
              </p>

              <h3 className="text-yellow-400 mt-8 mb-4 text-xl md:text-2xl font-semibold">
                {t.s3h1}
              </h3>
              <p className="mb-5 text-base md:text-lg text-justify opacity-90 text-slate-300">
                {t.s3p1}
              </p>

              <h3 className="text-yellow-400 mt-8 mb-4 text-xl md:text-2xl font-semibold">
                {t.s3h2}
              </h3>
              <div className="pl-6 mb-4 relative text-base md:text-lg text-slate-300">
                <span className="absolute left-0 text-amber-400 text-sm">◆</span>
                <strong>{t.s3l1.split(':')[0]}:</strong>
                <span>{t.s3l1.split(':')[1]}</span>
              </div>
              <div className="pl-6 mb-4 relative text-base md:text-lg text-slate-300">
                <span className="absolute left-0 text-amber-400 text-sm">◆</span>
                <strong>{t.s3l2.split(':')[0]}:</strong>
                <span>{t.s3l2.split(':')[1]}</span>
              </div>

              <h3 className="text-yellow-400 mt-8 mb-4 text-xl md:text-2xl font-semibold">
                {t.s3h3}
              </h3>
              <p className="mb-5 text-base md:text-lg text-justify opacity-90 text-slate-300">
                {t.s3p3}
              </p>

              <h3 className="text-yellow-400 mt-8 mb-4 text-xl md:text-2xl font-semibold">
                {t.s3h4}
              </h3>
              <p className="mb-5 text-base md:text-lg text-justify opacity-90 text-slate-300">
                {t.s3p4}
              </p>
            </section>

            <section className="p-8 md:p-10 rounded-[2rem] backdrop-blur-md bg-white/[0.06] border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <h2 className="text-amber-400 text-2xl md:text-3xl mb-6 border-b border-white/[0.12] pb-3 font-semibold">
                {t.section4Title}
              </h2>
              
              <div className="flex flex-col items-center gap-4 mt-8 p-5 bg-slate-900/40 rounded-xl border border-white/[0.12]">
                <div className="bg-white/[0.05] border border-white/[0.12] px-6 py-3 rounded-full text-center font-medium max-w-[90%] text-sm md:text-base text-slate-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  {t.f1}
                </div>
                <div className="text-amber-400 text-xl md:text-2xl text-shadow-[0_0_8px_rgba(255,201,71,0.5)]">▼</div>
                <div className="bg-white/[0.05] border border-amber-500/30 bg-amber-500/[0.05] text-amber-400 px-6 py-3 rounded-full text-center font-medium max-w-[90%] text-sm md:text-base shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  {t.f2}
                </div>
                <div className="text-amber-400 text-xl md:text-2xl text-shadow-[0_0_8px_rgba(255,201,71,0.5)]">▼</div>
                <div className="bg-white/[0.05] border border-white/[0.12] px-6 py-3 rounded-full text-center font-medium max-w-[90%] text-sm md:text-base text-slate-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  {t.f3}
                </div>
              </div>
            </section>

            <div className="text-center pt-10">
              <button onClick={() => setCurrentPage('main')} className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-slate-400 border border-white/10 transition-colors">
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

export default Introduction

import { useState, useRef, useEffect } from 'react'

const translations = {
  si: {
    badge: 'Thun Kal Dækma | Strategic National Core',
    headerTitle: 'දේශපාලනික දැක්ම "තුන් කල් දැක්ම" (Three-Way Vision)',
    headerSubtitle: 'ABCD රාමුව අනුව සකස් කරන ලද උපායමාර්ගික ජාතික වාර්තාව',
    back: '← ආපසු',
    introText: 'ලංකාවේ සමස්ත දේශපාලන ඉතිහාසය පුරාම සිදු වූයේ පුද්ගලයන් මාරු කිරීම මිස, පද්ධතිමය වෙනසක් (Systemic Change) ඇති කරන විනිවිදභාවයකින් යුතු සැලසුම්කරණයකට බලය ලබා දීම නොවේ. "තුන් කල් දැක්ම" මඟින් ඉදිරිපත් කරන්නේ ග්‍රාමීය මට්ටමේ සිට රාජ්‍ය පාලන ව්‍යුහය දක්වා පවතින දූෂිත ක්‍රමවේදය වෙනස් කර, බුදුදහමේ ආදර්ශයන්ට අනුකූලව සහ සහයෝගීතාව පෙරදැරි කරගත් නව දේශපාලන යාන්ත්‍රණයකි.',
    viewIntroBtn: 'හඳුන්වාදීම බලන්න (View Intro)',
    
    // Core Philosophy
    corePhilosophyBadge: 'Core Philosophy',
    corePhilosophyTitle: 'පද්ධති කේන්ද්‍රීය දර්ශනය',
    corePhilosophyDesc: '"තුන් කල් දැක්ම" යනු පුද්ගල කේන්ද්‍රීය දේශපාලනයක් නොව, පද්ධති කේන්ද්‍රීය දර්ශනයකි. එය තාක්ෂණයේ විනිවිදභාවයත්, බෞද්ධ දර්ශනයේ අවිහිංසාව, මෛත්‍රිය සහ ප්‍රඥාවත් එකට යා කරමින් 21 වැනි සියවස සඳහා නිර්මාණය කරන ලද විශ්වීය පාලන යාන්ත්‍රණයයි.',
    
    // Sovereign Query Matrix
    queryMatrixBadge: 'Live Query Controller',
    queryMatrixTitle: 'සජීවී විමසුම් පාලකය',
    queryMatrixSystemBooted: 'System Booted: ABCD Strategic Validation Module Active.',
    queryMatrixPlaceholder: 'පද්ධතිමය හෝ ආගමික පාලන ගැටලුවක් ඇතුළත් කරන්න...',
    queryMatrixExecute: 'Execute',
    queryMatrixResponse: 'Verification Node Response: දත්ත විශ්ලේෂණය සාර්ථකයි. \'තුන් කල් දැක්ම\' උපායමාර්ගික රාමුව (ABCD) මඟින් මෙම පද්ධතිමය ගැටලුව විග්‍රහ කර ඇත.',
    
    // Strategic Framework
    frameworkBadge: 'Strategic Framework',
    frameworkTitle: 'ඉදිරි දේශපාලනික සැලසුම්',
    frameworkDesc: 'දිස්ත්‍රික්ක 25ම ආවරණය වන පරිදි මාස 25ක කාලරාමුවක් තුළ රාජ්‍ය යාන්ත්‍රණය ඩිජිටල්කරණය (Google Gemini/X Grok) සහ ග්‍රාමීය ව්‍යවසායකත්ව ආදර්ශයන් (200 Opportunities) හරහා ජාතික පරිවර්තනයක් ඇති කිරීම.',
    
    // Section A
    sectionATitle: 'ගැටලු විශ්ලේෂණය (Problem Analysis) - පවතින අරාජිකත්වය',
    sectionASub1Title: '📌 විනිවිදභාවයකින් යුතු සැලසුම්කරණයක් නොමැතිකම',
    sectionASub1Desc: 'මේ වන තෙක් කිසිදු දේශපාලන පක්ෂයක් හෝ නායකයෙක් ග්‍රාමීය මට්ටමේ සිට ජාතික මට්ටම දක්වා මූල්‍ය හා පරිපාලන තොරතුරු 100%ක් ජනතාවට විවෘතව පෙනෙන (Live Transparent Dashboard) සැලසුම්කරණයක් රටට ඉදිරිපත් කර නැත.',
    sectionASub2Title: '📌 ව්‍යුහාත්මක දූෂණය (Institutional Corruption)',
    sectionASub2Desc: 'ග්‍රාමීය මට්ටමේ (ග්‍රාම නිලධාරී, ප්‍රාදේශීය ලේකම්) සිට ඉහළම රාජ්‍ය පාලනය සහ දේශපාලන අධිකාරිය දක්වා සමස්ත යාන්ත්‍රණයම වංචාව, බොරු අත්සන් සහ අල්ලස් මත පදනම් වූ දූෂිත ජාලයකින් වෙළී පැවතීම.',
    sectionASub3Title: '📌 පරපීඩක දේශපාලන සංස්කෘතිය',
    sectionASub3Desc: 'අනෙකාගේ පරාජය තමාගේ ජයග්‍රහණය ලෙස සලකන, බලය සඳහා පමණක් මරාගන්නා, කුහක සහ ආත්මාර්ථකාමී දේශපාලන ප්‍රතිපත්තියක් පැවතීම.',
    sectionASub4Title: '📌 ආගමික හරය අවභාවිතය',
    sectionASub4Desc: 'ආගමික අනුශාසනාවන්ට හිස නමනවා වෙනුවට, ආගම තමන්ගේ දේශපාලන වාසි සහ ඡන්ද පදනම රැකගැනීමේ ආයුධයක් ලෙස අවභාවිත කිරීම.',
    
    // Section B
    sectionBTitle: 'මූල හේතු විශ්ලේෂණය (Root Causes) - පිරිහීමට හේතු',
    sectionBSub1Title: 'සම්පත් කළමනාකරණය නොමැතිකම',
    sectionBSub1Desc: 'රටේ පවතින මානව හැකියා, දක්ෂතා සහ භෞතික සම්පත් නිවැරදිව හඳුනාගෙන ඒවා රටේ දළ දේශීය නිෂ්පාදිතයට (GDP) දායක කරගැනීමේ විද්‍යාත්මක යාන්ත්‍රණයක් නොමැතිකම.',
    sectionBSub2Title: 'ආකල්ප සහ ගුණධර්ම පිරිහීම',
    sectionBSub2Desc: 'පුරවැසියාගේ සිට නායකයා දක්වා "ලැබෙන අවස්ථාවෙන් තමන් විතරක් උපරිම වංචනික ප්‍රයෝජන ගැනීම" (Opportunistic Corruption) සාධාරණීකරණය කරන මනෝභාවයක් සමාජගත වීම.',
    sectionBSub3Title: 'නිලධාරීවාදයේ අඳුරු පැතිකඩ',
    sectionBSub3Desc: 'නිසි යාන්ත්‍රණයක් තිබුණද, පෞද්ගලික අරමුණු සහ විනය පිරිහීම හේතුවෙන් නීතියේ සහ පාලනයේ දොරවල් මුදලට වැසී යාම.',
    sectionBSub4Title: 'විඤ්ඤාණයේ මායාවට හසුවීම',
    sectionBSub4Desc: 'ප්‍රශ්න සමඟ ගැටෙමින්, මාන්නය සහ මෝහය (මුලාව) පෙරදැරි කරගෙන භෞතික ලෝකයේ ආශාවන් පසුපස හඹා යෑම මිස මධ්‍යස්ථව සිතීමට කාලය වෙන් නොකිරීම.',
    
    // Section C
    sectionCTitle: 'යහපත විශ්ලේෂණය (Benefits of Resolution) - හේතු නැතිවීමෙන් උදාවන ප්‍රතිඵල',
    sectionCSub1Title: 'පූර්ණ විනිවිදභාවය සහ විශ්වාසය:',
    sectionCSub1Desc: 'රාජ්‍ය අයවැය, වියදම් සහ ව්‍යාපෘති සියල්ල තාක්ෂණය (Web/AI) හරහා විවෘත කිරීම නිසා වංචාව සහ හොරකම 100%ක් නතර වී පුරවැසියා සහ රජය අතර අන්‍යෝන්‍ය විශ්වාසය ගොඩනැගේ.',
    sectionCSub2Title: 'සහයෝගී සංස්කෘතිය (Collaborative Joy):',
    sectionCSub2Desc: '"අනෙකාගේ ජයග්‍රහණය දෙස බලා සතුටු වන" (මුදිතාව) සහ එකිනෙකාට සහයෝගය දක්වන සාමකාමී දේශපාලන හා සාමාජීය වටපිටාවක් නිර්මාණය වීම.',
    sectionCSub3Title: 'කායික හා මානසික සුවය:',
    sectionCSub3Desc: 'ආර්ථික පීඩනය සහ සමාජීය ගැටලු අවම වීම තුළින් ජනතාවට ධර්මය අවබෝධ කරගැනීමට සහ ප්‍රත්‍යක්ෂ කරගැනීමට අවශ්‍ය කායික හා මානසික නිදහස උදාවේ.',
    sectionCSub4Title: 'AI විනය රාමුවක් සහ ජාත්‍යන්තර පිළිගැනීම:',
    sectionCSub4Desc: 'තාක්ෂණය අවභාවිතය වැළැක්වීම සඳහා UNESCO AI ආචාරධර්ම (AI Ethics) රාමුවට අනුකූල පරිපාලනයක් බිහිවීමෙන් රටේ ආර්ථිකය (IMF ඉලක්ක ඇතුළුව) ස්ථාවර වේ.',
    
    // Section D
    sectionDTitle: 'සැලසුම්කරණය (Solutions & Action Plan) - "තුන් කල් දැක්ම" යාන්ත්‍රණය',
    sectionDIntro: '🎯 මෙම යහපත කරා ළඟාවීම සඳහා මාස 25ක් ඇතුළත දිස්ත්‍රික්ක 25ම ආවරණය වන පරිදි ක්‍රියාත්මක වන ප්‍රායෝගික රාජ්‍ය පරිපාලන සැලැස්ම මෙසේය:',
    sectionDItem1Title: '1. ග්‍රාමීය මට්ටමේ සිට ඩිජිටල්කරණය (Village to Nation AI Integration)',
    sectionDItem1Bullet1: 'නිලධාරීන්ගේ වගවීම සහ වගකීම සහතික කිරීම සඳහා Google Gemini සහ X Grok තාක්ෂණයන් රාජ්‍ය පද්ධතියට බද්ධ කිරීම.',
    sectionDItem1Bullet2: 'කම්කරු පඩි, ද්‍රව්‍ය නිකුත් කිරීම් සහ ව්‍යාපෘති කාලසටහන් සියල්ල ඩිජිටල් පද්ධතියක් හරහා ස්වයංක්‍රීයව නිරීක්ෂණය කිරීම (පූර්ණ විනිවිද භාවය තහවුරු කිරීම.).',
    sectionDItem2Title: '2. සර්වකාලීන ආර්ථික ව්‍යවසායකත්වය (200 Opportunities Matrix)',
    sectionDItem2Desc: '"thunkal_master_plan_200_services" ලේඛනයේ ඇති පරිදි, දේශීය සම්පත් උපරිමයෙන් භාවිත කරමින් (උදා: Natural Eco Cabin, Eco Furniture, Eco Gardenscaping) පරිසර හිතකාමී ව්‍යවසායන් ග්‍රාමීය මට්ටමින් අරඹා රැකියා හිඟකම සහ ආර්ථික පීඩනය මුලිනුපුටා දැමීම.',
    sectionDItem3Title: '3. දේශපාලනය සහ රාජ්‍ය පාලනය සඳහා බුදුදහමේ ආදර්ශයන් ඇතුළත් කිරීම',
    sectionDItem3Bullet1: 'බුදුරජාණන් වහන්සේ දේශනා කරන ලද "දස රාජ ධර්ම" සහ චක්කවත්ති සීහනාද සූත්‍රයේ එන පාලන ප්‍රතිපත්ති රාජ්‍ය යාන්ත්‍රණයේ මූලික විනය රාමුව බවට පත් කිරීම.',
    sectionDItem3Bullet2: 'රටේ පාලකයන්ට සහ ජනතාවට මධ්‍යස්ථව සිතීමට සහ තමා තුළ ඇති මෝහය දැකීමට උපකාර වන ආධ්‍යාත්මික කවුන්සලින් සේවාවක් ස්ථාපිත කිරීම.',
    sectionDItem4Title: '4. ජාතික ධර්ම සංගායනාව සහ ආගමික සමගිය',
    sectionDItem4Bullet1: 'බුද්ධ ශාසනයේ ධර්මධර විනයධර භික්ෂූන් වහන්සේලාගේ මධ්‍යස්ථ දායකත්වයෙන් සහ ධර්ම සංගායනාවක් පවත්වා, පිටකයේ හරය තාක්ෂණාරූඪ කිරීම.',
    sectionDItem4Bullet2: 'සියලුම ආගම්වල මුල්කාලීන ආදරයේ සහ දයාවේ හරය රජයේ සහාය ඇතිව ප්‍රසිද්ධ කිරීම.',
    
    // Buddhist teachings
    buddhistTitle: '☸️ බුදුරජාණන් වහන්සේ දේශනා කළ දේශපාලන සහ රාජ්‍ය පාලන උපදේශයන්',
    buddhistSubtitle: 'බුදු දහම යනු හුදෙක් ලෝකෝත්තර විමුක්තිය පමණක් නොව, මෙලොව ජීවිතය සාර්ථක කරගැනීම සඳහා පාලකයන් අරමුණු කරමින් දේශනා කළ උතුම් දර්ශනයකි.',
    kutadantaTitle: 'කූටදන්ත සූත්‍රය',
    kutadantaSubtitle: '(Kutadanta Sutta)',
    kutadantaDesc: 'රටක අපරාධ සහ වංචා නැති කිරීමට නම් දඬුවම් දීම පමණක් ප්‍රමාණවත් නොවන බවත්, පාලකයා විසින් ගොවීන්ට බීජ, ව්‍යවසායකයන්ට ප්‍රාග්ධනය සහ රාජ්‍ය සේවකයන්ට නිසි වැටුප් ලබා දී ආර්ථිකය ශක්තිමත් කළ යුතු බවත් බුදුන් වහන්සේ පෙන්වා දී ඇත. (මෙය "තුන් කල් දැක්ම" ව්‍යාපාරික අවස්ථා 200 සැලසුමට සෘජුවම ගැලපේ).',
    chakkavattiTitle: 'චක්කවත්ති සීහනාද සූත්‍රය',
    chakkavattiSubtitle: '(Chakkavatti Sihanada Sutta)',
    chakkavattiDesc: 'රටක දරිද්‍රතාවය (හිඟනකම) ඇති වූ විට, එයින් සොරකම, වංචාව සහ ප්‍රචණ්ඩත්වය බිහිවන ආකාරයත්, රටක් අරාජික වීමට පාලකයාගේ අදූරදර්ශී ආර්ථික ප්‍රතිපත්ති හේතු වන ආකාරයත් මෙහි පැහැදිලි කරයි. "ඉපදෙනකොට හිඟන්නෙක් වුණත් මියයන්නේ හිඟන්නෙක් විදිහටද" යන්න තීරණය වන්නේ රටේ පාලන යාන්ත්‍රණයේ සාධාරණත්වය මතය.',
    saptaTitle: 'සප්ත අපරිහානීය ධර්ම',
    saptaSubtitle: '(Seven Factors of Non-Decline)',
    saptaDesc: 'ලිච්ඡවී රජවරුන්ට දේශනා කළ මෙම ධර්මතාවලට අනුව, පාලකයන් නිතර රැස්වීම, සමගියෙන් රැස්වී සමගියෙන් විසිරීම, පැනවූ නීති ගරු කිරීම සහ වැඩිහිටියන්ට/ආගමික නායකයන්ට සවන්දීම තුළින් රටක් කිසිලෙසකත් අරාජික නොවන බව පෙන්වා දී ඇත.',
    
    // Bottom Quote & Button
    bottomQuote: '"දේශපාලනය යනු බලය ලබාගැනීමේ සූදුවක් නොවේ. එය සෑම පුරවැසියෙකුගේම සැඟවුණු කුසලතා හඳුනාගෙන ජාතික නිෂ්පාදනය උදෙසා ඒවා විද්‍යාත්මකව පෙළගස්වන පාලන තන්ත්‍රයයි."',
    backBtn: '← ආපසු ප්‍රධාන පුවරුවට'
  },
  ta: {
    badge: 'Thun Kal Dækma | Strategic National Core',
    headerTitle: 'முக்கால அரசியல் கட்டமைப்பு (Thun Kal Dækma)',
    headerSubtitle: 'உத்திசார் தேசிய அறிக்கை: ABCD கட்டமைப்பு',
    back: '← பின்கு',
    introText: 'இலங்கையின் ஒட்டுமொத்த அரசியல் வரலாற்றில் நபர் மாற்றம் மட்டுமே நிகழ்ந்ததே தவிர, கட்டமைப்பு மாற்றத்தை (Systemic Change) ஏற்படுத்தும் வெளிப்படையான திட்டமிடலுக்கு அதிகாரம் வழங்கப்படவில்லை. "முக்கால தொலைநோக்கு" கிராமிய மட்டத்திலிருந்து அரச நிர்வாகம் வரை நிலவும் ஊழல் முறைகளை மாற்றி, பௌத்த தர்மத்தின் வழிகாட்டல்களுக்கு இணங்க கூட்டுறவை அடிப்படையாகக் கொண்ட புதிய அரசியல் பொறிமுறையை முன்வைக்கிறது.',
    viewIntroBtn: 'அறிமுகத்தைக் காண்க (View Intro)',
    
    // Core Philosophy
    corePhilosophyBadge: 'Core Philosophy',
    corePhilosophyTitle: 'கட்டமைப்பு மைய தத்துவம்',
    corePhilosophyDesc: '"முக்கால தொலைநோக்கு" என்பது தனிநபர் மைய அரசியல் அல்ல, அது ஒரு கட்டமைப்பு சார்ந்த (System-Driven) தத்துவமாகும். இது தொழில்நுட்பத்தின் வெளிப்படைத்தன்மையையும், பௌத்த தத்துவத்தின் அகிம்சை, மைத்திரி மற்றும் ஞானத்தையும் ஒன்றிணைத்து 21 ஆம் நூற்றாண்டிற்காக உருவாக்கப்பட்ட உலகளாவிய ஆட்சி முறையாகும்.',
    
    // Sovereign Query Matrix
    queryMatrixBadge: 'Live Query Controller',
    queryMatrixTitle: 'நேரடி வினவல் பொறிமுறை',
    queryMatrixSystemBooted: 'System Booted: ABCD Strategic Validation Module Active.',
    queryMatrixPlaceholder: 'உள்ளிடுக: கட்டமைப்பு ரீதியான அல்லது தார்மீக குறைபாட்டை உள்ளிடவும்...',
    queryMatrixExecute: 'Execute',
    queryMatrixResponse: 'Verification Node Response: தரவு பகுப்பாய்வு வெற்றிகரமாக முடிந்தது. \'முக்கால தொலைநோக்கு\' மூலோபாய கட்டமைப்பு (ABCD) இந்த கட்டமைப்பு ரீதியான பிரச்சினையை பகுப்பாய்வு செய்துள்ளது.',
    
    // Strategic Framework
    frameworkBadge: 'Strategic Framework',
    frameworkTitle: 'எதிர்கால அரசியல் திட்டங்கள்',
    frameworkDesc: '25 மாவட்டங்களையும் உள்ளடக்கிய 25 மாத காலக்கெடுவுக்குள் பொது நிர்வாகத்தை டிஜிட்டல் மயமாக்குதல் மற்றும் 200 பொருளாதார வாய்ப்புகள் மூலம் தேசிய மாற்றத்தை ஏற்படுத்துதல்.',
    
    // Section A
    sectionATitle: 'பிரச்சினை பகுப்பாய்வு (Problem Analysis) - தற்போதைய அராஜகம்',
    sectionASub1Title: '📌 வெளிப்படையான திட்டமிடல் இல்லாமை',
    sectionASub1Desc: 'எந்தவொரு அரசியல் கட்சியோ அல்லது தலைவரோ கிராம மட்டத்திலிருந்து தேசிய மட்டம் வரை நிதி மற்றும் நிர்வாகத் தகவல்களை 100% மக்களுக்கு வெளிப்படையாகக் காட்டும் (Live Transparent Dashboard) திட்டமிடலை நாட்டுக்கு முன்வைக்கவில்லை.',
    sectionASub2Title: '📌 நிறுவன ஊழல் (Institutional Corruption)',
    sectionASub2Desc: 'கிராம மட்டத்திலிருந்து (கிராம அலுவலர், பிரதேச செயலாளர்) மிக உயர்ந்த அரசாங்க நிர்வாகம் மற்றும் அரசியல் அதிகாரம் வரையிலான முழுமையான பொறிமுறையும் மோசடி, போலி கையெழுத்து மற்றும் லஞ்சம் ஆகியவற்றை அடிப்படையாகக் கொண்ட ஒரு ஊழல் வலையமைப்பால் சூழப்பட்டுள்ளது.',
    sectionASub3Title: '📌 பழிவாங்கும் அரசியல் கலாச்சாரம்',
    sectionASub3Desc: 'மற்றவரின் தோல்வியைத் தனது வெற்றியாகக் கருதும், அதிகாரத்திற்காக மட்டுமே போராடும், வஞ்சக மற்றும் சுயநல அரசியல் கொள்கை நிலவுவது.',
    sectionASub4Title: '📌 மத விழுமியங்களைத் தவறாகப் பயன்படுத்துதல்',
    sectionASub4Desc: 'மத வழிகாட்டல்களுக்குக் கீழ்ப்படிவதற்குப் பதிலாக, மதத்தைத் தங்களது அரசியல் லாபத்திற்காகவும் வாக்கு வங்கியைப் பாதுகாக்கவும் ஒரு ஆயுதமாகத் தவறாகப் பயன்படுத்துவது.',
    
    // Section B
    sectionBTitle: 'மூல காரணங்கள் பகுப்பாய்வு (Root Causes) - வீழ்ச்சிக்கான காரணங்கள்',
    sectionBSub1Title: 'வள மேலாண்மை இல்லாமை',
    sectionBSub1Desc: 'நாட்டின் மனித வளங்கள், திறமைகள் மற்றும் பௌதீக வளங்களைச் சரியாகக் கண்டறிந்து, அவற்றை நாட்டின் மொத்த உள்நாட்டு உற்பத்திக்கு (GDP) பங்களிக்கச் செய்வதற்கான அறிவியல் ரீதியான பொறிமுறை இல்லாமை.',
    sectionBSub2Title: 'அணுகுமுறை மற்றும் நற்பண்புகள் வீழ்ச்சி',
    sectionBSub2Desc: 'குடிமகன் முதல் தலைவர் வரை "கிடைக்கும் வாய்ப்பைப் பயன்படுத்தித் தனக்கு மட்டுமே அதிகபட்ச மோசடிப் பலனைப் பெறுவதை" (Opportunistic Corruption) நியாயப்படுத்தும் ஒரு மனநிலை சமூகமயமாக்கல்.',
    sectionBSub3Title: 'அதிகாரத்துவத்தின் இருண்ட பக்கம்',
    sectionBSub3Desc: 'சரியான பொறிமுறை இருந்தாலும், தனிப்பட்ட நோக்கங்கள் மற்றும் ஒழுக்க வீழ்ச்சி காரணமாக சட்டம் மற்றும் நிர்வாகத்தின் கதவுகள் பணத்திற்காக மூடப்படுவது.',
    sectionBSub4Title: 'நனவின் மாயையில் சிக்கிக் கொள்ளல்',
    sectionBSub4Desc: 'பிரச்சினைகளுடன் போராடி, அகந்தை மற்றும் மாயையை (முரட்டுத்தனம்) முன்னிறுத்தி பௌதீக உலகின் ஆசைகளின் பின்னால் ஓடுவதே தவிர, நடுநிலையாகச் சிந்திப்பதற்கு நேரத்தைச் ஒதுக்காமல் இருப்பது.',
    
    // Section C
    sectionCTitle: 'நன்மைகள் பகுப்பாய்வு (Benefits of Resolution) - தீர்வினால் ஏற்படும் விளைவுகள்',
    sectionCSub1Title: 'முழு வெளிப்படைத்தன்மை மற்றும் நம்பிக்கை:',
    sectionCSub1Desc: 'தொழில்நுட்பத்தின் (Web/AI) மூலம் அரசாங்க வரவுசெலவுத் திட்டம், செலவுகள் மற்றும் திட்டங்கள் அனைத்தையும் திறப்பதன் மூலம் ஊழல் மற்றும் திருட்டு 100% நிறுத்தப்பட்டு, குடிமகனுக்கும் அரசாங்கத்திற்கும் இடையே பரஸ்பர நம்பிக்கை கட்டியெழுப்பப்படும்.',
    sectionCSub2Title: 'கூட்டுறவு கலாச்சாரம் (Collaborative Joy):',
    sectionCSub2Desc: '"மற்றவரின் வெற்றியைக் கண்டு மகிழ்ச்சியடையும்" (முதிதா) மற்றும் ஒருவருக்கொருவர் ஆதரவளிக்கும் அமைதியான அரசியல் மற்றும் சமூகச் சூழலை உருவாக்குதல்.',
    sectionCSub3Title: 'உடல் மற்றும் மன நலம்:',
    sectionCSub3Desc: 'பொருளாதார நெருக்கடி மற்றும் சமூகப் பிரச்சினைகளைக் குறைப்பதன் மூலம் மக்களுக்குத் தர்மத்தைப் புரிந்துகொள்வதற்கும் உணர்வதற்கும் தேவையான உடல் மற்றும் மன சுதந்திரம் கிடைக்கும்.',
    sectionCSub4Title: 'AI ஒழுங்குமுறை மற்றும் சர்வதேச அங்கீகாரம்:',
    sectionCSub4Desc: 'தொழில்நுட்பத் தவறான பயன்பாட்டைத் தடுப்பதற்காக யுனெஸ்கோ AI ஒழுக்கநெறி (AI Ethics) கட்டமைப்பிற்கு இணங்கக்கூடிய நிர்வாகத்தை உருவாக்குவதன் மூலம் நாட்டின் பொருளாதாரம் (IMF இலக்குகள் உட்பட) ஸ்திரமடையும்.',
    
    // Section D
    sectionDTitle: 'திட்டமிடல் (Solutions & Action Plan) - "முக்கால தொலைநோக்கு" பொறிமுறை',
    sectionDIntro: '🎯 இந்த நன்மைகளை அடைவதற்காக 25 மாதங்களுக்குள் 25 மாவட்டங்களையும் உள்ளடக்கிய நடைமுறை அரசாங்க நிர்வாகத் திட்டம் பின்வருமாறு:',
    sectionDItem1Title: '1. கிராம மட்டத்திலிருந்து டிஜிட்டல் மயமாக்கல் (Village to Nation AI Integration)',
    sectionDItem1Bullet1: 'அதிகாரிகளின் பொறுப்புக்கூறல் மற்றும் பொறுப்பை உறுதி செய்வதற்காக கூகிள் ஜெமினி (Google Gemini) மற்றும் எக்ஸ் குரோக் (X Grok) தொழில்நுட்பங்களை அரசாங்க அமைப்பில் இணைத்தல்.',
    sectionDItem1Bullet2: 'தொழிலாளர் ஊதியம், பொருட்கள் வெளியீடு மற்றும் திட்ட கால அட்டவணைகள் அனைத்தையும் டிஜிட்டல் முறை மூலம் தானாகவே கண்காணித்தல் (முழு வெளிப்படைத்தன்மையை உறுதி செய்தல்).',
    sectionDItem2Title: '2. நிலையான பொருளாதார தொழில்முனைவு (200 Opportunities Matrix)',
    sectionDItem2Desc: '"thunkal_master_plan_200_services" ஆவணத்தில் குறிப்பிட்டுள்ளபடி, உள்ளூர் வளங்களை அதிகபட்சமாகப் பயன்படுத்தி (உதாரணமாக: Natural Eco Cabin, Eco Furniture, Eco Gardenscaping) கிராமிய மட்டத்தில் சூழல் நட்பு தொழில்களைத் தொடங்கி வேலையின்மை மற்றும் பொருளாதார நெருக்கடியை ஒழித்தல்.',
    sectionDItem3Title: '3. அரசியல் மற்றும் அரசாங்க நிர்வாகத்திற்கு பௌத்த தர்மத்தின் வழிகாட்டல்களை இணைத்தல்',
    sectionDItem3Bullet1: 'புத்த பெருமான் போதித்த "தச ராஜ தர்மம்" மற்றும் சக்கவத்தி சீஹநாத சூத்திரத்தில் உள்ள ஆட்சி ஆலோசனைகளை அரசாங்க பொறிமுறையின் அடிப்படை ஒழுக்க கட்டமைப்பாக மாற்றுதல்.',
    sectionDItem3Bullet2: 'நாட்டின் ஆட்சியாளர்களும் மக்களும் நடுநிலையாகச் சிந்திக்கவும் தங்களுக்குள் இருக்கும் மாயையைக் கண்டறியவும் உதவும் ஆன்மீக ஆலோசனைக் சேவையொன்றை நிறுவுதல்.',
    sectionDItem4Title: '4. தேசிய தர்ம சபை மற்றும் மத நல்லிணக்கம்',
    sectionDItem4Bullet1: 'பௌத்த சாசனத்தின் தர்மதர வினயதர பிக்சுகளின் நடுநிலையான பங்களிப்போடு தர்ம சபையொன்றை நடத்தி, பீடகத்தின் சாரத்தை தொழில்நுட்ப மயமாக்குதல்.',
    sectionDItem4Bullet2: 'அனைத்து மதங்களினதும் ஆரம்பகால அன்பு மற்றும் கருணையின் சாரத்தை அரசாங்கத்தின் ஆதரவோடு பிரபலப்படுத்துதல்.',
    
    // Buddhist teachings
    buddhistTitle: '☸️ புத்தர் போதித்த அரசியல் மற்றும் அரசாங்க நிர்வாக ஆலோசனைகள்',
    buddhistSubtitle: 'பௌத்த தர்மம் என்பது வெறும் ஆன்மீக விடுதலை மட்டுமல்ல, இந்த உலக வாழ்க்கையை வெற்றிகரமாக மாற்றுவதற்காக ஆட்சியாளர்களை இலக்காகக் கொண்டு போதித்த ஒரு உயரிய தத்துவமாகும்.',
    kutadantaTitle: 'கூடதந்த சூத்திரம்',
    kutadantaSubtitle: '(Kutadanta Sutta)',
    kutadantaDesc: 'ஒரு நாட்டில் குற்றங்களையும் மோசடிகளையும் ஒழிக்க தண்டிப்பது மட்டுமே போதாது என்றும், ஆட்சியாளர் விவசாயிகளுக்கு விதைகள், தொழில்முனைவோருக்கு மூலதனம் மற்றும் அரசு ஊழியர்களுக்கு சரியான ஊதியம் வழங்கி பொருளாதாரத்தை வலுப்படுத்த வேண்டும் என்றும் புத்தர் சுட்டிக்காட்டியுள்ளார். (இது "முக்கால தொலைநோக்கு" 200 வணிக வாய்ப்புகள் திட்டத்துடன் நேரடியாக ஒத்துப்போகிறது).',
    chakkavattiTitle: 'சக்கவத்தி சீஹநாத சூத்திரம்',
    chakkavattiSubtitle: '(Chakkavatti Sihanada Sutta)',
    chakkavattiDesc: 'ஒரு நாட்டில் வறுமை ஏற்படும் போது, அதிலிருந்து திருட்டு, மோசடி மற்றும் வன்முறை எவ்வாறு உருவாகிறது என்பதையும், ஒரு நாடு அராஜகமாக மாறுவதற்கு ஆட்சியாளரின் தொலைநோக்கற்ற பொருளாதாரக் கொள்கைகள் எவ்வாறு காரணமாகின்றன என்பதையும் இது விளக்குகிறது. "பிறக்கும் போது ஏழையாகப் பிறந்தாலும் ஏழையாகவே இறக்கிறாரா" என்பது நாட்டின் ஆட்சிப் பொறிமுறையின் நியாயத்தன்மையைப் பொறுத்தே தீர்மானிக்கப்படுகிறது.',
    saptaTitle: 'சப்த அபரிஹானிய தர்மம்',
    saptaSubtitle: '(Seven Factors of Non-Decline)',
    saptaDesc: 'லிச்சாவி மன்னர்களுக்குப் போதிக்கப்பட்ட தர்மங்களின்படி, ஆட்சியாளர்கள் அடிக்கடி கூடுவது, ஒற்றுமையுடன் கூடி ஒற்றுமையுடன் கலைவது, விதிக்கப்பட்ட சட்டங்களை மதிப்பதோடு, பெரியவர்கள்/மதத் தலைவர்களுக்குச் செவிசாய்ப்பதன் மூலம் ஒரு நாடு ஒருபோதும் வீழ்ச்சியடையாது என்று சுட்டிக்காப்பட்டுள்ளது.',
    
    // Bottom Quote & Button
    bottomQuote: '"அரசியல் என்பது அதிகாரத்தைப் பெறுவதற்கான ஒரு விளையாட்டு அல்ல. ஒவ்வொரு குடியாளரின் மறைந்த திறன்களைக் கண்டறிந்து தேசிய உற்பத்திக்கு அவற்றை அறிவியல் ரீதியாக வளர்க்கும் ஒரு ஆட்சி முறையாகும்."',
    backBtn: '← முதன்மைப் பலகத்திற்குத் திரும்பு'
  },
  en: {
    badge: 'Thun Kal Dækma | Strategic National Core',
    headerTitle: 'Three-Way Vision (Thun Kal Dækma)',
    headerSubtitle: 'Strategic National Report: ABCD Framework',
    back: '← Back',
    introText: "Throughout Sri Lanka's political history, transitions have merely replaced individuals rather than empowering systemic change rooted in transparent planning. \"Three-Way Vision\" introduces a paradigm shift from grassroots to state governance, replacing institutional corruption with a collaborative mechanism aligned with Buddhist principles.",
    viewIntroBtn: 'View Intro',
    
    // Core Philosophy
    corePhilosophyBadge: 'Core Philosophy',
    corePhilosophyTitle: 'System-Driven Paradigm',
    corePhilosophyDesc: '"Three-Way Vision" is a system-driven philosophy, uniting algorithmic transparency with Buddhist principles of non-violence, compassion, and wisdom tailored for 21st-century universal governance.',
    
    // Sovereign Query Matrix
    queryMatrixBadge: 'Live Query Controller',
    queryMatrixTitle: 'Sovereign Query Matrix',
    queryMatrixSystemBooted: 'System Booted: ABCD Strategic Validation Module Active.',
    queryMatrixPlaceholder: 'Terminal: Input systemic or doctrinal flaw for vector mapping...',
    queryMatrixExecute: 'Execute',
    queryMatrixResponse: 'Verification Node Response: Data analysis successful. The \'Three-Way Vision\' strategic framework (ABCD) has analyzed this systemic issue.',
    
    // Strategic Framework
    frameworkBadge: 'Strategic Framework',
    frameworkTitle: 'Future Political Roadmap',
    frameworkDesc: 'A defined 25-month rollout map spanning all 25 districts, targeting direct state digitization (Gemini/Grok engines) and local manufacturing vectors via the 200 Opportunities Matrix.',
    
    // Section A
    sectionATitle: 'Problem Analysis - Present Systemic Anarchy',
    sectionASub1Title: '📌 Total Absence of Transparent Planning',
    sectionASub1Desc: 'No political entity has ever delivered a 100% Live Transparent Dashboard connecting financial and administrative metrics from village layers to national oversight.',
    sectionASub2Title: '📌 Deep Institutional Corruption Layers',
    sectionASub2Desc: 'From Grama Niladhari and Divisional Secretariats to the highest echelons, the governance apparatus is entangled in embezzlement, resource theft (diesel, cement, steel), forged documentation, and bribery.',
    sectionASub3Title: '📌 Predatory & Zero-Sum Political Culture',
    sectionASub3Desc: 'A hyper-selfish political landscape operating on zero-sum logic, where power is weaponized and the downfall of others is viewed as individual victory.',
    sectionASub4Title: '📌 Exploitation of Spiritual Values',
    sectionASub4Desc: 'Instead of submitting to genuine spiritual counseling, leadership uses religion purely as an opportunistic tool to solidify vote banks.',
    
    // Section B
    sectionBTitle: 'Root Causes - Structural Vectors of Decline',
    sectionBSub1Title: 'Resource Mismanagement Matrix',
    sectionBSub1Desc: "The absence of a scientific mechanism to correctly identify and mobilize the country's human skills, talents, and physical assets to contribute to the Gross Domestic Product (GDP).",
    sectionBSub2Title: 'Normalization of Opportunism',
    sectionBSub2Desc: 'Socialization of a mindset that justifies "extracting maximum personal fraudulent benefit from any given opportunity" (Opportunistic Corruption) from the average citizen to the supreme leader.',
    sectionBSub3Title: 'Bureaucratic Decay',
    sectionBSub3Desc: 'Even if a proper mechanism exists, the doors of law and governance are closed for money due to personal gains and decay of discipline.',
    sectionBSub4Title: 'Delusion of Consciousness',
    sectionBSub4Desc: 'Chasing physical desires under pride and delusion while battling problems, rather than dedicating time to reflect neutrally.',
    
    // Section C
    sectionCTitle: 'Benefits of Resolution - Systemic Dividends',
    sectionCSub1Title: 'Absolute Transparency & Trust:',
    sectionCSub1Desc: 'Opening all state budgets, expenditures, and projects through technology (Web/AI) will stop fraud and theft 100%, building mutual trust between citizens and state.',
    sectionCSub2Title: 'Collaborative Culture (Collaborative Joy):',
    sectionCSub2Desc: 'Cultivating a peaceful political and social environment where people support each other and celebrate the success of others (Mudita).',
    sectionCSub3Title: 'Physical and Mental Well-being:',
    sectionCSub3Desc: 'Minimizing economic pressure and social issues provides the physical and mental freedom necessary for citizens to understand and realize spiritual truth.',
    sectionCSub4Title: 'AI Discipline Framework & International Recognition:',
    sectionCSub4Desc: 'Establishing governance aligned with the UNESCO AI Ethics framework to prevent technology abuse, stabilizing the economy (including IMF targets).',
    
    // Section D
    sectionDTitle: 'Solutions & Action Plan - Execution Architecture',
    sectionDIntro: '🎯 Practical state administration plan operating across all 25 districts within 25 months to achieve this well-being:',
    sectionDItem1Title: '1. Village to Nation AI Integration',
    sectionDItem1Bullet1: 'Integrating Google Gemini and X Grok technologies into the state system to guarantee official accountability and responsibility.',
    sectionDItem1Bullet2: 'Automatically monitoring labor wages, material issuance, and project timelines through a digital system (ensuring absolute transparency).',
    sectionDItem2Title: '2. Sustainable Economic Entrepreneurship (200 Opportunities Matrix)',
    sectionDItem2Desc: 'As outlined in the "thunkal_master_plan_200_services" document, launching eco-friendly enterprises (e.g., Natural Eco Cabin, Eco Furniture, Eco Gardenscaping) at the rural level using local resources to eradicate unemployment and economic pressure.',
    sectionDItem3Title: '3. Integrating Buddhist Examples for Politics and State Governance',
    sectionDItem3Bullet1: 'Making the "Ten Royal Virtues" (Dasa Raja Dharma) and governance principles in the Chakkavatti Sihanada Sutta the core disciplinary framework of the state apparatus.',
    sectionDItem3Bullet2: 'Establishing a spiritual counseling service that helps leaders and citizens reflect neutrally and identify self-delusion.',
    sectionDItem4Title: '4. National Dharma Council and Religious Harmony',
    sectionDItem4Bullet1: 'Conducting a Dharma council with the neutral contribution of Vinaya-dhara and Dharma-dhara monks of the Buddha Sasana, digitizing the core of the Pitaka.',
    sectionDItem4Bullet2: 'Promoting the original core of love and compassion of all religions with government support.',
    
    // Buddhist teachings
    buddhistTitle: '☸️ Buddhist Principles of Political and State Governance',
    buddhistSubtitle: 'Buddhism is not merely about transcendental liberation, but a noble philosophy containing direct advice for rulers to make worldly life successful.',
    kutadantaTitle: 'Kutadanta Sutta',
    kutadantaSubtitle: '(Kutadanta Sutta)',
    kutadantaDesc: 'The Buddha pointed out that giving punishments alone is not enough to eliminate crime and fraud in a country; the ruler must strengthen the economy by providing seeds to farmers, capital to entrepreneurs, and proper salaries to public servants. (This directly aligns with the "Three-Way Vision" 200 business opportunities plan).',
    chakkavattiTitle: 'Chakkavatti Sihanada Sutta',
    chakkavattiSubtitle: '(Chakkavatti Sihanada Sutta)',
    chakkavattiDesc: "This explains how poverty in a country gives rise to theft, fraud, and violence, and how a ruler's short-sighted economic policies lead to systemic anarchy. Whether \"one who is born poor also dies poor\" is determined by the fairness of the state governance mechanism.",
    saptaTitle: 'Seven Factors of Non-Decline',
    saptaSubtitle: '(Seven Factors of Non-Decline)',
    saptaDesc: 'According to these principles taught to the Licchavi kings, a nation will never decline if rulers meet frequently, assemble and disperse in harmony, respect established laws, and listen to elders/religious leaders.',
    
    // Bottom Quote & Button
    bottomQuote: '"Politics is not a game of gaining power. It is a governance mechanism that identifies the hidden talents of every citizen and scientifically develops them for national production."',
    backBtn: '← Back to Master Panel'
  }
}

function PoliticalVision({ lang, setCurrentPage }) {
  const t = translations[lang]
  const chatBoxRef = useRef(null)
  
  // Interactive Query Simulator States
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Scroll simulator chat to bottom
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSimulateQuery = () => {
    const text = inputValue.trim()
    if (!text) return

    // Add user question to simulator chat
    setMessages(prev => [...prev, { type: 'user', content: text }])
    setInputValue('')
    setIsTyping(true)

    // Trigger simulation response after 800ms
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { type: 'system', content: t.queryMatrixResponse }])
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSimulateQuery()
    }
  }

  return (
    <main 
      className="min-h-screen pt-28 pb-20 px-4 md:px-6 animate-fade" 
      style={{ 
        backgroundColor: '#0b0713', 
        backgroundImage: 'linear-gradient(rgba(11, 7, 19, 0.96), rgba(15, 12, 30, 0.98)), url(https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1920)', 
        backgroundAttachment: 'fixed', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Top Header & Navigation */}
      <header className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(234,179,8,0.5)]"></div>
          <span className="text-xs font-bold tracking-widest text-purple-300 uppercase">{t.badge}</span>
        </div>
        <button 
          onClick={() => setCurrentPage('main')}
          className="px-6 py-3 rounded-2xl bg-slate-800/50 border border-white/10 text-xs hover:bg-white/10 transition-all flex items-center gap-2 text-purple-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg> 
          <span>{t.back}</span>
        </button>
      </header>

      {/* Main Vision Title */}
      <section className="text-center max-w-7xl mx-auto px-4 md:px-6">
        <div className="py-8 my-4 bg-purple-950/20 border-y border-amber-500/20 backdrop-blur-md rounded-2xl">
          <h1 
            className="text-3xl md:text-5xl font-bold tracking-wide py-2" 
            style={{ 
              background: 'linear-gradient(to right, #fef08a, #eab308)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}
          >
            {t.headerTitle}
          </h1>
          <span className="text-xl md:text-2xl text-purple-300 font-medium block mt-2">
            {t.headerSubtitle}
          </span>
        </div>
        
        {/* Intro Text Panel */}
        <div className="max-w-6xl mx-auto bg-slate-950/50 p-8 rounded-2xl border border-purple-900/30 mt-6 text-center flex flex-col items-center gap-4">
          <p className="text-purple-200/90 text-lg md:text-xl leading-relaxed">
            {t.introText}
          </p>
          <button 
            onClick={() => setCurrentPage('polotics_intro')}
            className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-[0_0_12px_rgba(234,179,8,0.2)] hover:shadow-[0_0_18px_rgba(234,179,8,0.4)] cursor-pointer"
          >
            {t.viewIntroBtn}
          </button>
        </div>
      </section>

      {/* Core Philosophies & Simulator Matrix Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Core Philosophy */}
          <div 
            className="p-6 rounded-[2rem] backdrop-blur-md flex flex-col justify-between" 
            style={{ background: 'rgba(30, 20, 45, 0.35)', border: '1px solid rgba(234, 179, 8, 0.12)' }}
          >
            <div>
              <span 
                className="text-amber-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider" 
                style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.2)' }}
              >
                {t.corePhilosophyBadge}
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-3">
                {t.corePhilosophyTitle}
              </h3>
              <p className="text-sm text-purple-200/70 leading-relaxed">
                {t.corePhilosophyDesc}
              </p>
            </div>
          </div>

          {/* Card 2: Interactive Query Matrix Simulator */}
          <div 
            className="p-6 rounded-[2rem] flex flex-col justify-between" 
            style={{ background: 'rgba(30, 20, 45, 0.35)', border: '1px solid rgba(234, 179, 8, 0.12)' }}
          >
            <div>
              <span 
                className="text-amber-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider" 
                style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.2)' }}
              >
                {t.queryMatrixBadge}
              </span>
              <h4 className="text-sm font-bold text-amber-400 mt-4 mb-3 uppercase tracking-wider">
                {t.queryMatrixTitle}
              </h4>
              
              <div 
                ref={chatBoxRef}
                className="h-32 overflow-y-auto bg-slate-950/80 p-4 rounded-xl border border-purple-950 space-y-2 mb-3 text-xs text-purple-200"
              >
                <p className="text-amber-300 font-semibold">{t.queryMatrixSystemBooted}</p>
                <p className="text-purple-300/80">{t.queryMatrixPlaceholder}</p>
                
                {messages.map((msg, idx) => (
                  <div key={idx} className="mt-1">
                    {msg.type === 'user' ? (
                      <p className="text-white">→ {msg.content}</p>
                    ) : (
                      <p className="text-amber-400 font-semibold">{msg.content}</p>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <p className="text-slate-400 italic">Thinking...</p>
                )}
              </div>
            </div>
            
            <div className="flex gap-2">
              <input 
                type="text" 
                className="flex-1 bg-slate-900 border border-purple-500/30 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-amber-500" 
                placeholder="..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button 
                onClick={handleSimulateQuery}
                className="bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs transition-colors"
              >
                {t.queryMatrixExecute}
              </button>
            </div>
          </div>

          {/* Card 3: Strategic Framework / Future Political Roadmap */}
          <div 
            className="p-6 rounded-[2rem] bg-gradient-to-b from-purple-950/20 to-slate-950/40 flex flex-col justify-between" 
            style={{ background: 'rgba(30, 20, 45, 0.35)', border: '1px solid rgba(234, 179, 8, 0.12)' }}
          >
            <div>
              <span 
                className="text-amber-400 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider" 
                style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.2)' }}
              >
                {t.frameworkBadge}
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-3">
                {t.frameworkTitle}
              </h3>
              <p className="text-sm text-purple-200/70 leading-relaxed">
                {t.frameworkDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABCD Framework Content Grid (Problem, Root Cause, Benefits, Action Plan) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12 space-y-12">
        
        {/* Layer A Card */}
        <div 
          className="p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md"
          style={{ background: 'rgba(30, 20, 45, 0.35)', border: '1px solid rgba(234, 179, 8, 0.12)' }}
        >
          <div className="flex items-center gap-4 border-b border-purple-900/50 pb-5 mb-6">
            <span className="w-10 h-10 rounded-full bg-red-900/40 border border-red-500/50 flex items-center justify-center text-red-400 font-bold text-lg">A</span>
            <h2 className="text-2xl font-bold text-white">{t.sectionATitle}</h2>
          </div>

          <div className="space-y-6 text-base">
            <div className="bg-purple-950/10 p-6 rounded-2xl border border-purple-950/60">
              <strong className="text-amber-400 block mb-2 text-lg">{t.sectionASub1Title}</strong>
              <p className="text-purple-200/90 leading-relaxed">{t.sectionASub1Desc}</p>
            </div>

            <div className="bg-purple-950/10 p-6 rounded-2xl border border-purple-950/60">
              <strong className="text-amber-400 block mb-2 text-lg">{t.sectionASub2Title}</strong>
              <p className="text-purple-200/90 leading-relaxed">{t.sectionASub2Desc}</p>
            </div>

            <div className="bg-purple-950/10 p-6 rounded-2xl border border-purple-950/60">
              <strong className="text-amber-400 block mb-2 text-lg">{t.sectionASub3Title}</strong>
              <p className="text-purple-200/90 leading-relaxed">{t.sectionASub3Desc}</p>
            </div>

            <div className="bg-purple-950/10 p-6 rounded-2xl border border-purple-950/60">
              <strong className="text-amber-400 block mb-2 text-lg">{t.sectionASub4Title}</strong>
              <p className="text-purple-200/90 leading-relaxed">{t.sectionASub4Desc}</p>
            </div>
          </div>
        </div>

        {/* Layer B Card */}
        <div 
          className="p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md"
          style={{ background: 'rgba(30, 20, 45, 0.35)', border: '1px solid rgba(234, 179, 8, 0.12)' }}
        >
          <div className="flex items-center gap-4 border-b border-purple-900/50 pb-5 mb-6">
            <span className="w-10 h-10 rounded-full bg-amber-900/40 border border-amber-500/50 flex items-center justify-center text-amber-400 font-bold text-lg">B</span>
            <h2 className="text-2xl font-bold text-white">{t.sectionBTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="p-6 bg-purple-950/20 rounded-xl border border-purple-950/60">
              <span className="text-amber-300 font-bold block mb-2 text-lg">{t.sectionBSub1Title}</span>
              <p className="text-purple-200/80 leading-relaxed">{t.sectionBSub1Desc}</p>
            </div>
            <div className="p-6 bg-purple-950/20 rounded-xl border border-purple-950/60">
              <span className="text-amber-300 font-bold block mb-2 text-lg">{t.sectionBSub2Title}</span>
              <p className="text-purple-200/80 leading-relaxed">{t.sectionBSub2Desc}</p>
            </div>
            <div className="p-6 bg-purple-950/20 rounded-xl border border-purple-950/60">
              <span className="text-amber-300 font-bold block mb-2 text-lg">{t.sectionBSub3Title}</span>
              <p className="text-purple-200/80 leading-relaxed">{t.sectionBSub3Desc}</p>
            </div>
            <div className="p-6 bg-purple-950/20 rounded-xl border border-purple-950/60">
              <span className="text-amber-300 font-bold block mb-2 text-lg">{t.sectionBSub4Title}</span>
              <p className="text-purple-200/80 leading-relaxed">{t.sectionBSub4Desc}</p>
            </div>
          </div>
        </div>

        {/* Layer C Card */}
        <div 
          className="p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md"
          style={{ background: 'rgba(30, 20, 45, 0.35)', border: '1px solid rgba(234, 179, 8, 0.12)' }}
        >
          <div className="flex items-center gap-4 border-b border-purple-900/50 pb-5 mb-6">
            <span className="w-10 h-10 rounded-full bg-green-900/40 border border-green-500/50 flex items-center justify-center text-green-400 font-bold text-lg">C</span>
            <h2 className="text-2xl font-bold text-white">{t.sectionCTitle}</h2>
          </div>

          <div className="space-y-5 text-base">
            <div className="flex items-start gap-4 bg-purple-950/5 p-5 rounded-xl border border-purple-950/40">
              <div className="mt-1 text-green-400 font-bold text-xl">✓</div>
              <div>
                <strong className="text-white text-lg block mb-1">{t.sectionCSub1Title}</strong>
                <p className="text-purple-200/90 leading-relaxed">{t.sectionCSub1Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-purple-950/5 p-5 rounded-xl border border-purple-950/40">
              <div className="mt-1 text-green-400 font-bold text-xl">✓</div>
              <div>
                <strong className="text-white text-lg block mb-1">{t.sectionCSub2Title}</strong>
                <p className="text-purple-200/90 leading-relaxed">{t.sectionCSub2Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-purple-950/5 p-5 rounded-xl border border-purple-950/40">
              <div className="mt-1 text-green-400 font-bold text-xl">✓</div>
              <div>
                <strong className="text-white text-lg block mb-1">{t.sectionCSub3Title}</strong>
                <p className="text-purple-200/90 leading-relaxed">{t.sectionCSub3Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-purple-950/5 p-5 rounded-xl border border-purple-950/40">
              <div className="mt-1 text-green-400 font-bold text-xl">✓</div>
              <div>
                <strong className="text-white text-lg block mb-1">{t.sectionCSub4Title}</strong>
                <p className="text-purple-200/90 leading-relaxed">{t.sectionCSub4Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer D Card */}
        <div 
          className="p-8 md:p-10 rounded-[2.5rem] border border-amber-500/30 bg-purple-950/10"
        >
          <div className="flex items-center gap-4 border-b border-amber-500/30 pb-5 mb-6">
            <span className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg">D</span>
            <h2 className="text-2xl font-bold text-amber-300">{t.sectionDTitle}</h2>
          </div>

          <p className="text-base md:text-lg text-amber-200/90 italic mb-6">
            {t.sectionDIntro}
          </p>

          <div className="space-y-6 text-base">
            <div className="p-6 bg-slate-950/60 rounded-xl border border-purple-500/10">
              <h4 className="font-bold text-white mb-3 text-lg">{t.sectionDItem1Title}</h4>
              <ul className="list-disc pl-5 space-y-2 text-purple-200/80 leading-relaxed">
                <li>{t.sectionDItem1Bullet1}</li>
                <li>{t.sectionDItem1Bullet2}</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-950/60 rounded-xl border border-purple-500/10">
              <h4 className="font-bold text-white mb-2 text-lg">{t.sectionDItem2Title}</h4>
              <p className="text-purple-200/80 leading-relaxed">{t.sectionDItem2Desc}</p>
            </div>

            <div className="p-6 bg-slate-950/60 rounded-xl border border-purple-500/10">
              <h4 className="font-bold text-white mb-3 text-lg">{t.sectionDItem3Title}</h4>
              <ul className="list-disc pl-5 space-y-2 text-purple-200/80 leading-relaxed">
                <li>{t.sectionDItem3Bullet1}</li>
                <li>{t.sectionDItem3Bullet2}</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-950/60 rounded-xl border border-purple-500/10">
              <h4 className="font-bold text-white mb-3 text-lg">{t.sectionDItem4Title}</h4>
              <ul className="list-disc pl-5 space-y-2 text-purple-200/80 leading-relaxed">
                <li>{t.sectionDItem4Bullet1}</li>
                <li>{t.sectionDItem4Bullet2}</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* Buddhist Scriptural Teachings Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12">
        <div 
          className="p-8 md:p-12 rounded-[2.5rem] border border-purple-500/30 backdrop-blur-sm"
          style={{ background: 'rgba(15, 23, 42, 0.4)' }}
        >
          <div className="border-b border-purple-900/40 pb-5 mb-8 text-center">
            <h3 
              className="text-2xl md:text-3xl font-bold inline-flex items-center gap-3"
              style={{ background: 'linear-gradient(to right, #fef08a, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {t.buddhistTitle}
            </h3>
            <p className="text-purple-300 text-base md:text-lg mt-3">
              {t.buddhistSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base leading-relaxed">
            
            {/* Kutadanta Sutta Card */}
            <div className="p-6 bg-purple-950/20 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-amber-500/20 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl mb-4">01</div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {t.kutadantaTitle}<br/>
                  <span className="text-sm text-amber-400 font-medium block mt-1">{t.kutadantaSubtitle}</span>
                </h4>
                <p className="text-purple-200/90 leading-relaxed">{t.kutadantaDesc}</p>
              </div>
            </div>

            {/* Chakkavatti Sihanada Sutta Card */}
            <div className="p-6 bg-purple-950/20 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-amber-500/20 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl mb-4">02</div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {t.chakkavattiTitle}<br/>
                  <span className="text-sm text-amber-400 font-medium block mt-1">{t.chakkavattiSubtitle}</span>
                </h4>
                <p className="text-purple-200/90 leading-relaxed">{t.chakkavattiDesc}</p>
              </div>
            </div>

            {/* Sapta Aparihaniya Dharma Card */}
            <div className="p-6 bg-purple-950/20 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-amber-500/20 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl mb-4">03</div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {t.saptaTitle}<br/>
                  <span className="text-sm text-amber-400 font-medium block mt-1">{t.saptaSubtitle}</span>
                </h4>
                <p className="text-purple-200/90 leading-relaxed">{t.saptaDesc}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12">
        <div className="p-8 rounded-[2.5rem] bg-gradient-to-r from-purple-950/30 to-slate-950/50 border border-amber-500/25 text-center backdrop-blur-sm">
          <p className="text-base md:text-xl italic text-amber-200 leading-relaxed">
            {t.bottomQuote}
          </p>
        </div>
      </section>

      {/* Bottom Back Button */}
      <footer className="text-center pt-10">
        <button 
          onClick={() => setCurrentPage('main')} 
          className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-base font-semibold text-purple-300 border border-white/10 transition-colors"
        >
          {t.backBtn}
        </button>
      </footer>
    </main>
  )
}

export default PoliticalVision

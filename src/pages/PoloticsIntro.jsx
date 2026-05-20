import React from 'react'

const translations = {
  si: {
    badge: 'National Strategic Reform Report',
    title: 'තුන් කල් දැක්ම',
    subtitle: 'දේශපාලන හඳුන්වාදීම සහ පද්ධතිමය ප්‍රතිසංස්කරණ මූලෝපාය',
    back: '← ආපසු',
    
    // Layer A
    layerATitle: 'පද්ධතිමය ගැටලු විශ්ලේෂණය',
    layerASubtitle: 'Layer-A: Diagnostic Layer (A, B, C, D තාර්කික රාමුව)',
    layerAIntroTitle: '[01] හැඳින්වීම: දේශපාලන ක්‍රමවේදයේ ව්‍යුහාත්මක අර්බුදය (The Structural Crisis)',
    layerAIntroDesc: 'වත්මන් දේශපාලන අර්බුදය යනු හුදෙක් පාලනය මෙහෙයවන පුද්ගලයන්ගේ හෝ පක්ෂවල මාරුවීමක් මත විසඳිය හැකි සරල ගැටලුවක් නොවේ. එය රටේ පවතින ආයතනික පරිපාලන නීති, මධ්‍යගත දේශපාලන තීරණ සහ බිම් මට්ටමේ පුරවැසියාගේ සැබෑ දක්ෂතා හා දත්ත (Grassroots Human Capital Datasets) අතර පවතින දීර්ඝකාලීන විසන්ධිවීමක් නිසා හටගත් ව්‍යුහාත්මක දෝෂයකි. "තුන් කල් දැක්ම" පර්යේෂණාත්මක සැලැස්මට අනුව, වත්මන් දේශපාලන ව්‍යුහය සකස් වී ඇත්තේ රටේ සැඟවුණු මානව කුසලතා සහ සම්පත් හඳුනාගෙන ඒවා ජාතික පාලනයට සහ නිෂ්පාදනයට විද්‍යාත්මකව පෙළගැස්වීමට නොව, පටු දේශපාලනික න්‍යායපත්‍ර ආරක්ෂා කරගනිමින් සමස්ත රාජ්‍ය යාන්ත්‍රණයම නිද්‍රාශීලී කිරීමටයි.',
    layerAProblemsHeader: '[02] ප්‍රධාන දේශපාලනික පද්ධතිමය ගැටලු (Core Political System Flaws)',
    p1_title: '1. ප්‍රතිපත්ති රහිත පුද්ගල කේන්ද්‍රීය දේශපාලනය සහ රාජ්‍ය තාන්ත්‍රික ස්ථාවරත්වයක් නොමැතිකම',
    p1_nature: 'පද්ධතිමය ස්වභාවය: රාජ්‍ය පාලනය සහ උපායමාර්ගික තීන්දු තීරණ ගනු ලබන්නේ ස්ථාවර, දිගුකාලීන ජාතික ප්‍රතිපත්ති මාලාවක් මත පදනම්ව නොව, බලයට පත්වන පුද්ගලයන්ගේ හෝ පාලක රෙජීමයන්ගේ දේශපාලනික පැවැත්ම සහ වාසි තකාය.',
    p1_impact: 'දේශපාලනික බලපෑම: ආණ්ඩුවෙන් ආණ්ඩුවට හෝ පුද්ගලයාගෙන් පුද්ගලයාට ජාතික ප්‍රතිපත්ති අත්තනෝමතික ලෙස වෙනස් වීම නිසා රාජ්‍ය තන්ත්‍රයේ දිගුකාලීන ස්ථාවරත්වය සම්පූර්ණයෙන්ම බිඳවැටේ.',
    p2_title: '2. ආයතනික විනිවිදභාවය නොමැතිකම සහ නිලධාරී වගවීම අධීක්ෂණයට විද්‍යාත්මක ක්‍රමවේදයක් නොමැතිකම',
    p2_nature: 'පද්ධතිමය ස්වභාවය: රාජ්‍ය ආයතන, විමධ්‍යගත පරිපාලන ව්‍යුහයන් සහ සිවිල් සේවය ක්‍රියාත්මක වීමේදී දූෂණය, සම්පත් අවභාවිතය සහ ප්‍රමාදයන් වැළැක්වීමට සමත් විද්‍යාත්මක ඩිජිටල් අධීක්ෂණ පද්ධතියක් (Algorithmic Auditing Core) ක්‍රියාත්මක නොවීම.',
    p2_impact: 'දේශපාලනික බලපෑම: රාජ්‍ය නිලධාරීන්ගේ සහ දේශපාලන අධිකාරියේ වගවීම (Institutional Accountability) බිම් මට්ටමට සාපේක්ෂව නිරීක්ෂණය කළ නොහැකි වීම නිසා, මහජන සේවය කාර්යක්ෂම කිරීම වෙනුවට නිලධාරීවාදී පීඩනය සහ පාලන ලූපයන්හි දූෂණය ස්වයංක්‍රීයවම ආරක්ෂා වේ.',
    p3_title: '3. ග්‍රාම සේවා වසම් මට්ටමේ මානව කුසලතා සහ ප්‍රාදේශීය විභවයන් සිතියම්ගත නොකිරීම (Zero Data Integration)',
    p3_nature: 'පද්ධතිමය ස්වභාවය: ජාතික මට්ටමේ පාලන තීන්දු ගැනීමේදී සහ ව්‍යවස්ථාදායක සැලසුම් සැකසීමේදී, රටේ පවතින මූලිකම පරිපාලන ඒකකය වන සෑම ග්‍රාම නිලධාරී වසමකම සිටින සැබෑ මානව ප්‍රාග්ධනය, සුවිශේෂී දක්ෂතා, ව්‍යවසායකත්ව විභවයන් හෝ ප්‍රාදේශීය අභියෝග පිළිබඳව කිසිදු මධ්‍යගත දත්ත පද්ධතියක් (Data Array) පරිශීලනය නොකිරීම.',
    p3_impact: 'දේශපාලනික බලපෑම: බිම් මට්ටමේ සිටින සැබෑ නිර්මාණකරුවන් සහ දක්ෂයන් රාජ්‍ය නායකත්ව ව්‍යුහයෙන් සම්පූර්ණයෙන්ම හුදෙකලා වන අතර, ඉහළ සිට පහළට පනවන (Top-Down) අසාර්ථක දේශපාලන ව්‍යාපෘති නිසා රටේ මානව ප්‍රාග්ධනය (Human Capital) දේශපාලනිකවම නාස්ති වී යයි.',
    p4_title: '4. පොදු ජන යටිතල පහසුකම් පාලනය සහ ජාතික ශ්‍රම බලකා සැපයුම අතර පවතින ප්‍රතිපත්තිමය විසන්ධිවීම',
    p4_nature: 'පද්ධතිමය ස්වභාවය: රාජ්‍ය අධ්‍යාපන පද්ධතියේ විෂය මාලාවන්, තාක්ෂණික පුහුණු ව්‍යුහයන් සහ පොදු යටිතල පහසුකම් කළමනාකරණය, රටේ වත්මන් කාර්මික, ව්‍යවසායකත්ව හෝ ගෝලීය තාක්ෂණික ඉල්ලුමට සරිලන පරිදි වෙනස් නොවීම.',
    p4_impact: 'දේශපාලනික බලපෑම: පාසල් සහ විශ්වවිද්‍යාල පද්ධතියෙන් පිටවන තාරුණ්‍යයේ කුසලතා සහ රටේ සැබෑ නිෂ්පාදන ව්‍යුහයන්ට අවශ්‍ය කුසලතා අතර විශාල ව්‍යුහාත්මක පරතරයක් (Skill Mismatch) නිර්මාණය වේ. මෙම ප්‍රතිපත්තිමය විසන්ධිවීම නිසා තරුණ ශ්‍රම බලකාය දේශපාලනික වශයෙන් අකර්මන්‍ය තත්ත්වයට පත් වේ.',
    noteA: '📌 [03] නිගමනය (Systemic Footnote): දේශපාලන පද්ධතියේ පවතින සැබෑ අර්බුදය හුදෙක් මැතිවරණ මඟින් මුහුණු මාරු කිරීමෙන් පමණක් විසඳිය නොහැක. එය විසඳිය හැක්කේ බිම් මට්ටමේ පවතින සැබෑ මානව කුසලතා, ප්‍රාදේශීය දත්ත සහ ආයතනික වගවීම එකිනෙකට සම්බන්ධ කරන, විද්‍යාත්මක සහ විනිවිදභාවයෙන් යුත් "තුන් කල් දේශපාලන පාලන ව්‍යුහයක්" රාජ්‍ය තාන්ත්‍රයට ආදේශ කිරීමෙන් පමණි.',

    // Layer B
    layerBTitle: 'මූල හේතු විශ්ලේෂණය',
    layerBSubtitle: 'Layer-B: Root Causes / Diagnostic Core',
    layerBIntroTitle: '[01] හැඳින්වීම: පද්ධතිමය දෝෂයන්හි මුල් මූලාශ්‍ර (The Root Source of Flaws)',
    layerBIntroDesc: 'පළමු පියවරෙන් (Layer-A) අප හඳුනාගත් දේශපාලනික ගැටලු අහඹුවෙන් සිදුවූ ඒවා නොවේ. ඒවා දශක ගණනාවක් තිස්සේ මෙරට පාලන තන්ත්‍රය තුළ ව්‍යුහාත්මකව මුල් බැසගෙන ඇති මූලධර්මීය වැරදීම් කිහිපයක ප්‍රතිඵල වේ. දේශපාලන ක්‍රමයේ පවතින මෙම මූල හේතු (Root Causes) නිවැරදි නොකර, හුදෙක් නීති රීති පැනවීමෙන් හෝ පුද්ගලයන් මාරු කිරීමෙන් පද්ධතිමය ස්ථාවරත්වයක් ලබාගත නොහැක.',
    layerBHeader: '[02] ප්‍රධාන දේශපාලනික පද්ධතිමය මූල හේතු (Core Political Root Causes)',
    r1_title: '1. දත්ත රහිත (Data-Void) සහ ආනුභවික නොවන ව්‍යවස්ථාදායක ක්‍රියාවලිය',
    r1_nature: 'මුල් හේතුව: වත්මන් දේශපාලන ක්‍රමයේ පනවන බොහෝ නීති සහ ප්‍රතිපත්ති, බිම් මට්ටමේ පවතින සැබෑ තත්ත්වයන් (Empirical Grassroots Realities) මත පදනම් වූ දත්ත විශ්ලේෂණයකින් තොරව, හුදෙක් මධ්‍යගත දේශපාලන කාර්යාල හෝ නිලධාරී කණ්ඩායම්වල පටු මතයන් මත පමණක් සකස් වීමයි.',
    r1_impact: 'පද්ධතිමය ප්‍රතිඵලය: නීති සම්පාදනයේදී සහ ක්‍රියාත්මක කිරීමේදී රටේ සැබෑ මිනිස් ශ්‍රමය, ප්‍රාදේශීය සම්පත් සහ ගැටලු පිළිබඳව කිසිදු ඩිජිටල් සිතියම්ගත කිරීමක් (Data Array Layer) සිදු නොවේ. මේ නිසා ප්‍රතිපත්ති සහ බිම් මට්ටම අතර ස්වභාවික විසන්ධිවීමක් හටගනී.',
    r2_title: '2. ආයතනික පාලනය තුළ ස්වයංක්‍රීය ගැලපුම් ලූප (Adjustment Loops) සහ ඩිජිටල් විගණනයක් නොමැතිකම',
    r2_nature: 'මුල් හේතුව: රාජ්‍ය පරිපාලන ව්‍යුහය සකස් වී ඇත්තේ පෞරාණික නිලධාරීවාදී ක්‍රමවේදයන් මතය. එහිදී කිසියම් ආයතනයක හෝ නිලධාරියෙකුගේ ප්‍රගතිය, කාර්යක්ෂමතාවය හෝ දූෂණය පිළිබඳව තථ්‍ය කාලීනව (Real-Time) ස්වයංක්‍රීයව හඳුනාගෙන පද්ධතිය නිවැරදි කරන තාක්ෂණික ලූප (Automated Governance Adjustment Loops) ක්‍රියාත්මක නොවීම.',
    r2_impact: 'පද්ධතිමය ප්‍රතිඵලය: දේශපාලන අධිකාරියට සහ නිලධාරීන්ට තම වගකීම්වලින් බැහැර වීමට නෛතික සහ ව්‍යුහාත්මක හිඩැස් නිර්මාණය වන අතර, වැරදි සිදුකරන්නන් හඳුනා ගැනීමට ඇති ක්‍රමවේද ප්‍රමාද වීම නිසා වගවීම (Accountability) මුළුමනින්ම බිඳවැටේ.',
    r3_title: '3. කේන්ද්‍රීය දේශපාලන බලය සහ විමධ්‍යගත පරිපාලන ඒකක (ග්‍රාම සේවා වසම්) අතර ක්‍රමවේදගත සහසම්බන්ධතාවයක් නොමැතිකම',
    r3_nature: 'මුල් හේතුව: පාලන බලය සහ තීන්දු තීරණ ගැනීමේ මධ්‍යස්ථාන කොළඹ වැනි ප්‍රධාන නගරවල කේන්ද්‍රගත වී තිබීමයි. මූලිකම පරිපාලන ඒකකය වන ග්‍රාම නිලධාරී වසම් මට්ටමෙන් එකතු වන දත්ත, අවශ්‍යතා හෝ මානව කුසලතා, ජාතික දේශපාලන න්‍යායපත්‍රය (Macro-Policy Blueprint) සමඟ සෘජුව සහ ස්වයංක්‍රීයව බද්ධ වන සන්නිවේදන යාන්ත්‍රණයක් නොමැත.',
    r3_impact: 'පද්ධතිමය ප්‍රතිඵලය: ග්‍රාමීය මට්ටමේ ව්‍යවසායකත්ව විභවයන් සහ තරුණ කුසලතා ජාතික මට්ටමට ගලා ඒම ව්‍යුහාත්මකවම වැළකෙන අතර, ඉහළ සිට පහළට ක්‍රියාත්මක වන තීරණ බිම් මට්ටමේදී අසාර්ථක වේ.',
    r4_title: '4. මානව ප්‍රාග්ධන සංවර්ධනය (අධ්‍යාපනය) සහ රාජ්‍ය යටිතල පහසුකම් උපායමාර්ගිකව බද්ධ නොකිරීම',
    r4_nature: 'මුල් හේතුව: අධ්‍යාපන පද්ධතිය සහ රටේ පවතින භෞතික යටිතල පහසුකම් (බලශක්තිය, ප්‍රවාහනය, තාක්ෂණික ජාල) කළමනාකරණය කරන අමාත්‍යාංශ සහ ආයතන, එකිනෙකින් වෙන් වූ ස්වාධීන කොටස් (Isolated Silos) ලෙස ක්‍රියාත්මක වීමයි. ජාතික නිෂ්පාදනය සහ කුසලතා සිතියම්ගත කිරීම (Talent Mapping) මූලික කරගත් ඒකාබද්ධ පද්ධති සැලැස්මක් (Unified System Design) රාජ්‍ය තන්ත්‍රය සතු නොවීම මෙයට ප්‍රධානතම හේතුවයි.',
    r4_impact: 'පද්ධතිමය ප්‍රතිඵලය: යටිතල පහසුකම් සඳහා වැය කරන රජයේ ප්‍රාග්ධනයෙන් නිසි නිෂ්පාදන ප්‍රතිලාභයක් නොලැබෙන අතර, අධ්‍යාපන පද්ධතියෙන් බිහිවන මානව ශ්‍රමය රටේ පවතින හෝ අනාගතයේ බිහිවන කාර්මික අවශ්‍යතාවලට නොගැලපීම නිසා සමස්ත රටම නිද්‍රාශීලී තත්ත්වයට පත් වේ.',
    noteB: '📌 [03] නිගමනය (Layer-B Footnote): "තුන් කල් දැක්ම" විශ්ලේෂණයට අනුව, වත්මන් දේශපාලන ව්‍යුහයේ ගැටලුවලට මූලිකම හේතුව වන්නේ "දත්ත රහිත පාලනය" (Governance in a Data Vacuum) සහ "පද්ධතිමය වගවීමක් නොමැතිකමයි".',

    // Layer C
    layerCTitle: 'පද්ධතිමය යහපත විශ්ලේෂණය',
    layerCSubtitle: 'Layer-C: Impact Layer (A, B, C, D තාර්කික රාමුව)',
    layerCIntroTitle: '[01] හැඳින්වීම: පද්ධතිමය සමතුලිතතාවයේ ප්‍රතිලාභ (The Value of Systemic Equilibrium)',
    layerCIntroDesc: '"තුන් කල් දැක්ම" උපායමාර්ගික රාමුවට අනුව, දේශපාලන ක්‍රමයේ පවතින මූලික ව්‍යුහාත්මක දෝෂ සහ දත්ත රහිත පාලන ක්‍රමවේදයන් ඉවත් කිරීමෙන් ලැබෙන ප්‍රතිලාභය හුදෙක් ආණ්ඩු මාරුවක ප්‍රතිලාභවලට වඩා සුවිශේෂී වේ. එයින් බිහිවන්නේ ස්වයංක්‍රීයවම දූෂණය අවම කරන, බිම් මට්ටමේ මානව කුසලතා ඉහළට ගලා එන්නට සලස්වන සහ රාජ්‍ය ආයතන වගවීමෙන් බැඳ තබන ස්ථාවර පාලන තන්ත්‍රයකි.',
    layerCHeader: '[02] අපේක්ෂිත ප්‍රධාන දේශපාලනික සහ පරිපාලනමය යහපත (Core Governance Benefits)',
    b1_title: '1. දත්ත කේන්ද්‍රීය ව්‍යවස්ථාදායක ස්ථාවරත්වය සහ දිගුකාලීන ජාතික ප්‍රතිපත්ති සුරක්ෂිත වීම',
    b1_nature: 'පද්ධතිමය යහපත: නීති සම්පාදනය සහ ප්‍රතිපත්ති සැකසීම බිම් මට්ටමේ සැබෑ ආනුභවික දත්ත (Empirical Data Arrays) මත පදනම් වීම නිසා, ආණ්ඩු හෝ පුද්ගලයන් මාරු වුවද වෙනස් නොවන ශක්තිමත් ජාතික ප්‍රතිපත්ති මාලාවක් රට තුළ ස්ථාපිත වේ.',
    b1_impact: 'දේශපාලනික බලපෑම: අත්තනෝමතික සහ පටු දේශපාලන තීන්දු නතර වන අතර, රාජ්‍ය තාන්ත්‍රයේ දිගුකාලීන ස්ථාවරත්වය සහ විශ්වසනීයත්වය දේශීය මෙන්ම ජාත්‍යන්තර වශයෙන්ද තහවුරු වේ.',
    b2_title: '2. තථ්‍ය කාලීන විගණනය (Real-Time Auditing) සහ නිලධාරී වගවීම උපරිම වීම',
    b2_nature: 'පද්ධතිමය යහපත: රාජ්‍ය පරිපාලනය තුළ ඩිජිටල් ස්වයංක්‍රීය ගැලපුම් ලූප (Governance Adjustment Loops) ක්‍රියාත්මක වීම හරහා, ඕනෑම රාජ්‍ය ආයතනයක කාර්යක්ෂමතාවය සහ සම්පත් භාවිතය තථ්‍ය කාලීනව නිරීක්ෂණය කිරීමට හැකි වේ.',
    b2_impact: 'දේශපාලනික බලපෑම: දූෂණය, අල්ලස සහ සම්පත් නාස්තිය සිදුවන අවස්ථාවේදීම පද්ධතිය විසින්ම එය හඳුනාගෙන නීතිමය පියවර ගැනීමට මඟ පාදන බැවින්, නිලධාරීවාදී පීඩනය සහ දේශපාලන අතපෙවීම් මුළුමනින්ම නැති වී මහජන සේවය උපරිම වේ.',
    b3_title: '3. ග්‍රාම සේවා වසම් මට්ටමේ මානව ප්‍රාග්ධනය ජාතික පාලනයට සෘජුව දායක කරගැනීම',
    b3_nature: 'පද්ධතිමය යහපත: මූලිකම පරිපාලන ඒකකය වන ග්‍රාම නිලධාරී වසම් මට්ටමේ සිටින සැබෑ මානව කුසලතා සහ ව්‍යවසායකත්ව විභවයන් ජාතික දත්ත පද්ධතියට (Macro-Policy Blueprint) සෘජුවම බද්ධ වීමයි.',
    b3_impact: 'දේශපාලනික බලපෑම: බිම් මට්ටමේ සිටින සැබෑ දක්ෂයන්, නව නිපැයුම්කරුවන් සහ නිර්මාණකරුවන් රටේ නායකත්ව ව්‍යුහය සහ රාජ්‍ය සැලසුම්කරණය සමඟ සහසම්බන්ධ වන බැවින්, ඉහළ සිට පහළට පනවන අසාර්ථක දේශපාලන ව්‍යාපෘති වෙනුවට සැබෑ මහජන අවශ්‍යතා ඉටුකරන ප්‍රජාතන්ත්‍රවාදී පාලනයක් බිහි වේ.',
    b4_title: '4. උපායමාර්ගික මානව සම්පත් කළමනාකරණය සහ ශ්‍රම බලකායේ පූර්ණ සක්‍රීයතාවය',
    b4_nature: 'පද්ධතිමය යහපත: රටේ අධ්‍යාපන පද්ධතිය (කුසලතා සිතියම්ගත කිරීම) සහ භෞතික යටිතල පහසුකම් (බලශක්ති, ප්‍රවාහන, තාක්ෂණික ජාල) එකම ඒකාබද්ධ පද්ධති සැලැස්මක් (Unified System Design) යටතේ කළමනාකරණය වීමයි.',
    b4_impact: 'දේශපාලනික බලපෑම: පාසල් සහ විශ්වවිද්‍යාල පද්ධතියෙන් පිටවන තාරුණ්‍යයට රටේ සැබෑ නිෂ්පාදන ව්‍යුහයන් සහ තාක්ෂණික අවශ්‍යතාවන් සමඟ සෘජුවම බද්ධ වීමට අවස්ථාව ලැබෙන බැවින්, තරුණ ශ්‍රම බලකාය අකර්මන්‍ය වීම වැළකී ඔවුන් ජාතික සංවර්ධනයේ ප්‍රධානතම කොටස්කරුවන් බවට පත් වේ.',
    noteC: '📌 [03] නිගමනය (Layer-C Footnote): "තුන් කල් දැක්ම" මඟින් පෙන්වා දෙන්නේ දේශපාලන පද්ධතියක ව්‍යුහාත්මක මුල් හේතු නිවැරදි කිරීමෙන් රටේ සමස්ත පාලන තන්ත්‍රයම විනිවිදභාවයකින් යුත්, ස්වයංක්‍රීයවම දූෂණය පාලනය කරන යාන්ත්‍රණයක් බවට පත්වන ආකාරයයි.',

    // Layer D
    layerDTitle: 'ප්‍රතිසංස්කරණ සැලසුම්කරණය',
    layerDSubtitle: 'Layer-D: Architectural Blueprint Layer (Solutions)',
    layerDIntroTitle: '[01] හැඳින්වීම: දත්ත කේන්ද්‍රීය පාලන තන්ත්‍රය (The Algorithmic Democratic Framework)',
    layerDIntroDesc: '"තුන් කල් දැක්ම" උපායමාර්ගික සැලැස්මේ අවසාන සහ ප්‍රධානතම පියවර වන්නේ විද්‍යාත්මක දත්ත පද්ධති මත පදනම් වූ දේශපාලන පරිවර්තනයයි. වත්මන් දේශපාලනයේ පවතින "දත්ත රහිත පාලනය" (Governance in a Data Vacuum) සහ "පුද්ගල කේන්ද්‍රීය න්‍යායපත්‍ර" මුළුමනින්ම අහෝසි කර, බිම් මට්ටමේ මානව කුසලතා සහ ආයතනික වගවීම එකිනෙකට ස්වයංක්‍රීයව බද්ධ කරන නව රාජ්‍ය පාලන ව්‍යුහයක් මෙමඟින් සැලසුම් කෙරේ.',
    layerDHeader: '[02] ප්‍රධාන උපායමාර්ගික දේශපාලන විසඳුම් (Core Governance Solutions)',
    s1_title: '1. ආනුභවික දත්ත මත පදනම් වූ ව්‍යවස්ථාදායක සහ ස්ථාවර ජාතික ප්‍රතිපත්ති මාලාව',
    s1_nature: 'මූලෝපායික විසඳුම: රටේ පනවන සෑම නීතියක් සහ ප්‍රතිපත්තියක්ම සැකසීමට පෙර, බිම් මට්ටමේ සැබෑ දත්ත (Empirical Micro-level Datasets) විද්‍යාත්මකව විශ්ලේෂණය කරන මධ්‍යගත රාජ්‍ය ප්‍රතිපත්ති දත්ත පද්ධතියක් (National Data Core) ස්ථාපිත කිරීම.',
    s1_impact: 'දේශපාලනික පරිවර්තනය: ආණ්ඩු හෝ පුද්ගලයන් මාරු වුවද, දත්ත සාධක මත ගොඩනැඟූ ජාතික ප්‍රතිපත්ති අත්තනෝමතික ලෙස වෙනස් කිරීමට දේශපාලන අධිකාරියට ඇති බලය සීමා වේ. මෙයින් ව්‍යවස්ථාදායකයේ දිගුකාලීන ස්ථාවරත්වය තහවුරු වේ.',
    s2_title: '2. තථ්‍ය කාලීන ඩිජිටල් විගණනය සහ ස්වයංක්‍රීය ආයතනික වගවීම (Automated Auditing Loops)',
    s2_nature: 'මූලෝපායික විසඳුම: සෑම රාජ්‍ය ආයතනයකම ක්‍රියාවලිය, මූල්‍ය පරිහරණය සහ මහජන සේවා සැපයීමේ වේගය තථ්‍ය කාලීනව (Real-Time) අධීක්ෂණය කෙරෙන ඩිජිටල් පාලන ලූප (Governance Adjustment Loops) හඳුන්වා දීම.',
    s2_impact: 'දේශපාලනික පරිවර්තනය: පරිපාලන ප්‍රමාදයන් හෝ දූෂණ ක්‍රියා සිදුවන අවස්ථාවේදීම පද්ධතිය විසින්ම එය හඳුනාගෙන ස්වයංක්‍රීයව නිවැරදි කිරීමේ ක්‍රියාවලීන් ක්‍රියාත්මක වේ. මේ මඟින් දේශපාලන අතපෙවීම් වැළකෙන අතර නිලධාරී වගවීම උපරිම වේ.',
    s3_title: '3. ග්‍රාම සේවා වසම් මට්ටමේ මානව කුසලතා සහ ප්‍රාදේශීය දත්ත ජාතික සැලැස්මට ඒකාබද්ධ කිරීම (Talent & Resource Mapping)',
    s3_nature: 'මූලෝපායික විසඳුම: දිවයිනේ සෑම ග්‍රාම නිලධාරී වසමකම සිටින මානව ප්‍රාග්ධනය, සුවිශේෂී ව්‍යවසායකත්ව විභවයන් සහ ප්‍රාදේශීය සම්පත් ඩිජිටල් සිතියම්ගත කිරීමකට (Data Array Integration) ලක් කර එය ජාතික සැලසුම්කරණ යාන්ත්‍රණය (Macro-Policy Blueprint) සමඟ සෘජුව සහ සහසම්බන්ධිතව බද්ධ කිරීම.',
    s3_impact: 'දේශපාලනික පරිවර්තනය: ඉහළ සිට පහළට පනවන (Top-Down) අසාර්ථක දේශපාලන ව්‍යාපෘති ක්‍රමය මුළුමනින්ම නැති වී, බිම් මට්ටමේ සිටින සැබෑ නිර්මාණකරුවන් සහ දක්ෂයන් ජාතික සංවර්ධනයේ ප්‍රධාන නියමුවන් බවට පත් කෙරෙන සැබෑ ප්‍රජාතන්ත්‍රවාදී ව්‍යුහයක් බිහි වේ.',
    s4_title: '4. මානව ප්‍රාග්ධන සංවර්ධනය (අධ්‍යාපනය) සහ රාජ්‍ය යටිතල පහසුකම් ඒකාබද්ධ පද්ධති සැලැස්ම (Unified System Design)',
    s4_nature: 'මූලෝපායික විසඳුම: අධ්‍යාපන ක්ෂේත්‍රයේ කුසලතා සිතියම්ගත කිරීම් (Talent Mapping) සහ රටේ පවතින උපායමාර්ගික යටිතල පහසුකම් (බලශක්තිය, ප්‍රවාහනය, සන්නිවේදනය) කළමනාකරණය, එකම ජාතික නිෂ්පාදන සැලැස්මක් යටතේ ඒකාබද්ධ කිරීම.',
    s4_impact: 'දේශපාලනික පරිවර්තනය: පාසල් සහ විශ්වවිද්‍යාල පද්ධතියෙන් පිටවන තාරුණ්‍යයට රටේ සැබෑ කාර්මික සහ තාක්ෂණික ඉල්ලුමට සරිලන වෘත්තීය අවස්ථා සෘජුවම හිමි වේ. මෙමඟින් රටේ මානව ප්‍රාග්ධනය දේශපාලනිකව නාස්ති වීම වැළකී, පූර්ණ කාර්යක්ෂමතාවයකින් යුත් ශ්‍රම බලකායක් රට තුළ ගොඩනැඟේ.',
    noteD: '📌 [03] අවසාන සමාලෝචනය (The Master Architecture Core): "තුන් කල් දැක්ම" ප්‍රතිසංස්කරණ මූලෝපාය මඟින් පාලන තන්ත්‍රයට හඳුන්වා දෙන්නේ හුදෙක් දේශපාලන පොරොන්දු මාලාවක් නොවේ. එය දත්ත විනිවිදභාවය, ආයතනික වගවීම සහ බිම් මට්ටමේ මානව ශ්‍රමයේ වටිනාකම එකිනෙක බද්ධ කරන විද්‍යාත්මක පාලන ආකෘතියකි (Empirical Systemic Governance Model) වේ. මෙම A, B, C, D තාර්කික සැලැස්ම ක්‍රියාවට නැංවීමෙන් රටේ දේශපාලන සහ පරිපාලන ව්‍යුහය ස්ථාවර මාවතකට යොමු කළ හැකිය.',
    
    footer: '© 2026 තුන් කල් දැක්ම (Three-Way Vision) - ජාතික ප්‍රතිසංස්කරණ මූලෝපායික වාර්තාව'
  },
  en: {
    badge: 'National Strategic Reform Report',
    title: 'Three-Way Vision',
    subtitle: 'Political Introduction & Systemic Reform Strategy',
    back: '← Back',
    
    // Layer A
    layerATitle: 'Systemic Problem Analysis',
    layerASubtitle: 'Layer-A: Diagnostic Layer (ABCD Logical Framework)',
    layerAIntroTitle: '[01] Introduction: The Structural Crisis of the Political System',
    layerAIntroDesc: 'The current political crisis is not a simple problem that can be resolved by replacing individuals or parties. It is a structural defect caused by a long-term disconnection between the country\'s institutional administrative laws, centralized political decisions, and the actual skills and data of grassroots citizens (Grassroots Human Capital Datasets). According to the "Three-Way Vision" strategic plan, the current political structure is set up to paralyze the state apparatus rather than mobilize the country\'s human resources and capital.',
    layerAProblemsHeader: '[02] Core Political System Flaws',
    p1_title: '1. Principle-less Individual-centric Politics & Lack of Diplomatic Stability',
    p1_nature: 'Systemic Nature: Governance and strategic decisions are made for the political survival of individuals or regimes rather than being based on stable, long-term national policies.',
    p1_impact: 'Political Impact: Arbitrary changes in national policies from government to government break the long-term stability of the state.',
    p2_title: '2. Lack of Institutional Transparency & Scientific Audit of Official Accountability',
    p2_nature: 'Systemic Nature: The absence of an algorithmic auditing core to prevent corruption, resource misappropriation, and delays in government institutions and civil service.',
    p2_impact: 'Political Impact: Accountability cannot be monitored relative to the grassroots, meaning institutional decay and corruption are protected inside administrative loops.',
    p3_title: '3. Zero Data Integration at the Grama Niladhari Division Level',
    p3_nature: 'Systemic Nature: Centralized policy plans do not map or query actual human capital datasets, local entrepreneurial potential, or regional challenges from the basic administrative units.',
    p3_impact: 'Political Impact: Grassroots creators and talented youths are isolated, while top-down failed political projects waste human capital.',
    p4_title: '4. Disconnection between Public Infrastructure Control & National Labor Force Supply',
    p4_nature: 'Systemic Nature: Curricula, technical training structures, and infrastructure management are disconnected from contemporary industrial and global technological demands.',
    p4_impact: 'Political Impact: A massive structural mismatch (Skill Mismatch) occurs, leaving the young labor force politically and economically inactive.',
    noteA: '📌 [03] Systemic Footnote: The true crisis of the political system cannot be solved by merely changing faces through elections. It can only be solved by integrating a scientific and transparent "Three-Way Political Governance Structure" that connects grassroots skills, regional data, and institutional accountability.',

    // Layer B
    layerBTitle: 'Root Cause Diagnostics',
    layerBSubtitle: 'Layer-B: Root Causes / Diagnostic Core',
    layerBIntroTitle: '[01] Introduction: The Root Source of Systemic Flaws',
    layerBIntroDesc: 'The political issues identified in Layer-A are not accidental. They are results of fundamental systemic errors that have been structurally embedded in the governance structure for decades. Without fixing these root causes, simply passing laws or replacing people will not yield stability.',
    layerBHeader: '[02] Core Political Root Causes',
    r1_title: '1. Data-Void and Non-Empirical Legislative Process',
    r1_nature: 'Root Cause: Laws and policies are passed based on centralized political agendas or narrow bureaucratic opinions, completely void of empirical grassroots realities and data analysis.',
    r1_impact: 'Systemic Result: No digital mapping (Data Array Layer) of actual human labor or resources is referenced, creating a natural disconnect between policy and reality.',
    r2_title: '2. Absence of Automated Governance Adjustment Loops & Digital Auditing',
    r2_nature: 'Root Cause: The public administration structure is based on archaic methods without automated feedback loops to audit efficiency, progress, or corruption in real-time.',
    r2_impact: 'Systemic Result: Legal and structural loopholes protect offenders, leading to a complete breakdown of institutional accountability.',
    r3_title: '3. Disconnect between Centralized Power & Decentralized Basic Administrative Units',
    r3_nature: 'Root Cause: Decisions are highly centralized in major cities like Colombo, with no automatic data exchange mechanism to link the Grama Niladhari levels with the macro-policy blueprint.',
    r3_impact: 'Systemic Result: Grassroots innovations and talent are prevented from reaching national channels, and top-down decisions fail at the local level.',
    r4_title: '4. Failure to Strategically Integrate Human Capital Development & State Infrastructure',
    r4_nature: 'Root Cause: Education curriculum, training, and state infrastructure are managed as isolated silos without a unified system design for talent mapping and national production.',
    r4_impact: 'Systemic Result: Public capital spent on infrastructure yields low returns, and the graduates output does not align with industrial needs, stagnating the economy.',
    noteB: '📌 [03] Layer-B Footnote: According to the "Three-Way Vision" diagnostics, the foundational cause of political issues is "governance in a data vacuum" and "lack of automated accountability".',

    // Layer C
    layerCTitle: 'Systemic Benefit Analysis',
    layerCSubtitle: 'Layer-C: Impact Layer (ABCD Logical Framework)',
    layerCIntroTitle: '[01] Introduction: The Value of Systemic Equilibrium',
    layerCIntroDesc: 'Solving the root causes of the political system results in benefits far superior to a simple change of government. It yields a self-correcting administration that reduces corruption, integrates grassroots talent, and binds public institutions to real-time audits.',
    layerCHeader: '[02] Core Governance Benefits',
    b1_title: '1. Data-Driven Legislative Stability & Secure Long-Term Policies',
    b1_nature: 'Systemic Benefit: Policies are formulated based on empirical data arrays, leading to consistent, long-term national blueprints that remain unaffected by political transitions.',
    b1_impact: 'Political Impact: Arbitrary political decisions stop, establishing domestic and international confidence in the state\'s stability.',
    b2_title: '2. Real-Time Auditing & Maximized Official Accountability',
    b2_nature: 'Systemic Benefit: Incorporating digital adjustment loops allows real-time tracking of institutional efficiency and resource utilization.',
    b2_impact: 'Political Impact: Corruption, bribery, and wastage are identified and corrected immediately by the system, maximizing public service.',
    b3_title: '3. Integration of Grassroots Human Capital in National Governance',
    b3_nature: 'Systemic Benefit: Local skills and entrepreneurial capabilities are linked directly to the macro-policy blueprint via data array integration.',
    b3_impact: 'Political Impact: Creators and innovators collaborate directly with national planners, replacing top-down failures with a truly collaborative democracy.',
    b4_title: '4. Strategic Human Resource Management & Active Labor Force',
    b4_nature: 'Systemic Benefit: Managing education, training, and infrastructure under a single unified system design.',
    b4_impact: 'Political Impact: Youth graduation is mapped to real industrial demands, preventing human capital waste and driving national development.',
    noteC: '📌 [03] Layer-C Footnote: Fixing structural root causes turns the entire political apparatus into a transparent, self-regulating mechanism.',

    // Layer D
    layerDTitle: 'Reform Planning & Solutions',
    layerDSubtitle: 'Layer-D: Architectural Blueprint Layer (Solutions)',
    layerDIntroTitle: '[01] Introduction: The Algorithmic Democratic Framework',
    layerDIntroDesc: 'The final step of the "Three-Way Vision" reform is data-driven political transformation. By replacing the "data vacuum" and "individual agendas" with digital integrations, we establish an algorithmic democratic model linking grassroots assets directly to state planning.',
    layerDHeader: '[02] Core Governance Solutions',
    s1_title: '1. Empirical Data-Driven Legislative Process & National Policy Core',
    s1_nature: 'Strategic Solution: Establish a centralized National Data Core to analyze empirical micro-level datasets before passing any law or policy.',
    s1_impact: 'Political Transformation: Limits the power of politicians to arbitrarily change national policies, stabilizing the legislative process.',
    s2_title: '2. Real-Time Digital Auditing & Automated Governance Loops',
    s2_nature: 'Strategic Solution: Introduce automated auditing feedback loops to track financials, workflows, and service delivery in real-time.',
    s2_impact: 'Political Transformation: Prevents administrative delays and eliminates political interference in public operations.',
    s3_title: '3. Digital Mapping & Integration of Grassroots Assets to National Planning',
    s3_nature: 'Strategic Solution: Implement talent and resource mapping across all GN divisions, linking local outputs to the national development blueprint.',
    s3_impact: 'Political Transformation: Eliminates top-down failures, empowering local creators as active leaders in national growth.',
    s4_title: '4. Unified Design for Human Capital and State Infrastructure',
    s4_nature: 'Strategic Solution: Merge education pipelines, technical training systems, and industrial infrastructure planning under a single Unified System Design.',
    s4_impact: 'Political Transformation: Connects student talent directly to modern industrial demands, eliminating the skill mismatch and driving productivity.',
    noteD: '📌 [03] The Master Architecture Core: The "Three-Way Vision" reform is not a set of political promises. It is a scientific, empirical governance model linking data transparency, accountability, and grassroots labor values. Implementing this logical framework guides the state onto a stable path.',
    
    footer: '© 2026 Three-Way Vision - National Strategic Reform Report'
  },
  ta: {
    badge: 'National Strategic Reform Report',
    title: 'முக்கால தொலைநோக்கு',
    subtitle: 'அரசியல் அறிமுகம் மற்றும் கட்டமைப்பு சீர்திருத்த உத்தி',
    back: '← பின்கு',
    
    // Layer A
    layerATitle: 'கட்டமைப்பு பிரச்சினைகள் பகுப்பாய்வு',
    layerASubtitle: 'Layer-A: Diagnostic Layer (ABCD தர்க்கரீதியான கட்டமைப்பு)',
    layerAIntroTitle: '[01] அறிமுகம்: அரசியல் அமைப்பின் வ්‍යூහාත්මක அச்சுறுத்தல்',
    layerAIntroDesc: 'தற்போதைய அரசியல் நெருக்கடி என்பது நபர்களை அல்லது கட்சிகளை மாற்றுவதன் மூலம் தீர்க்கப்படக்கூடிய ஒரு எளிய பிரச்சினை அல்ல. இது நாட்டின் நிறுவன நிர்வாக சட்டங்கள், மையப்படுத்தப்பட்ட அரசியல் முடிவுகள் மற்றும் அடிமட்ட குடிமக்களின் உண்மையான திறமைகள் மற்றும் தரவுகளுக்கு (Grassroots Human Capital Datasets) இடையே உள்ள நீண்டகால துண்டிப்பினால் ஏற்பட்ட ஒரு கட்டமைப்பு குறைபாடு ஆகும்.',
    layerAProblemsHeader: '[02] முக்கிய அரசியல் கட்டமைப்பு குறைபாடுகள்',
    p1_title: '1. கொள்கையற்ற தனிநபர் மைய அரசியல் மற்றும் தூதரக ஸ்திரத்தன்மை இல்லாமை',
    p1_nature: 'கட்டமைப்பு தன்மை: நிலையான, நீண்டகால தேசிய கொள்கைகளின் அடிப்படையில் அல்லாமல், தனிநபர்கள் அல்லது ஆட்சிகளின் அரசியல் பிழைப்பிற்காக நிர்வாக முடிவுகள் எடுக்கப்படுகின்றன.',
    p1_impact: 'அரசியல் தாக்கம்: அரசாங்கத்திற்கு அரசாங்கம் கொள்கைகள் மாற்றப்படுவதால், அரசின் நீண்டகால ஸ்திரத்தன்மை முற்றாக சீர்குலைகிறது.',
    p2_title: '2. நிறுவன வெளிப்படைத்தன்மை இல்லாமை மற்றும் அதிகாரிகளின் பொறுப்புக்கூறல் தணிக்கை இல்லாமை',
    p2_nature: 'கட்டமைப்பு தன்மை: அரச நிறுவனங்கள் மற்றும் பொது சேவைகளில் ஊழல் மற்றும் தாமதங்களை தடுக்கக்கூடிய ஒரு டிஜிட்டல் கண்காணிப்பு தணிக்கை முறைமை (Algorithmic Auditing Core) இல்லாதது.',
    p2_impact: 'அரசியல் தாக்கம்: பொறுப்புக்கூறல் அடிமட்ட அளவில் கண்காணிக்கப்பட முடியாததால், ஊழல் மற்றும் முறைகேடுகள் தடையின்றி பாதுகாக்கப்படுகின்றன.',
    p3_title: '3. கிராம அலுவலர் பிரிவு மட்டத்திலான தரவு ஒருங்கிணைப்பு இல்லாமை',
    p3_nature: 'கட்டமைப்பு தன்மை: கொள்கை திட்டமிடலின் போது மனித வளம், உள்ளூர் தொழில்முனைவு மற்றும் பிராந்திய சவால்கள் குறித்த எந்தவொரு மையப்படுத்தப்பட்ட தரவு அமைப்பும் (Data Array Layer) பயன்படுத்தப்படுவதில்லை.',
    p3_impact: 'அரசியல் தாக்கம்: அடிமட்ட படைப்பாளிகள் மற்றும் திறமையாளர்கள் புறக்கணிக்கப்படுகிறார்கள், மற்றும் தோல்வியடைந்த அரசியல் திட்டங்களால் மனித வளம் வீணடிக்கப்படுகிறது.',
    p4_title: '4. பொது உள்கட்டமைப்பு கட்டுப்பாடு மற்றும் தேசிய தொழிலாளர் விநியோகத்திற்கு இடையிலான கொள்கை துண்டிப்பு',
    p4_nature: 'கட்டமைப்பு தன்மை: கல்வி முறைமை மற்றும் பயிற்சி திட்டங்கள் நாட்டின் தற்போதைய தொழில் மற்றும் உலகளாவிய தொழில்நுட்ப தேவைகளுக்கு ஏற்ப மாற்றியமைக்கப்படவில்லை.',
    p4_impact: 'அரசியல் தாக்கம்: ஒரு பெரிய திறன் முரண்பாடு (Skill Mismatch) உருவாகிறது, இதனால் இளைய தொழிலாளர் சக்தி செயலற்றதாகிறது.',
    noteA: '📌 [03] இறுதி முடிவு: அரசியல் அமைப்பின் உண்மையான நெருக்கடி தேர்தல்களின் மூலம் முகங்களை மாற்றுவதால் தீர்க்கப்படாது. அடிமட்ட திறன்கள், பிராந்திய தரவுகள் மற்றும் நிறுவன பொறுப்புக்கூறலை இணைக்கும் ஒரு அறிவியல் பூர்வமான "முக்கால அரசியல் ஆட்சி கட்டமைப்பை" அரச தந்திரத்தில் புகுத்துவதன் மூலமே இதை தீர்க்க முடியும்.',

    // Layer B
    layerBTitle: 'மூல காரணங்கள் பகுப்பாய்வு',
    layerBSubtitle: 'Layer-B: Root Causes / Diagnostic Core',
    layerBIntroTitle: '[01] அறிமுகம்: கட்டமைப்பு குறைபாடுகளின் மூல ஆதாரங்கள்',
    layerBIntroDesc: 'முதலாவது கட்டத்தில் நாம் கண்டறிந்த அரசியல் பிரச்சினைகள் தற்செயலாக நிகழ்ந்தவை அல்ல. அவை பல தசாப்தங்களாக ஆட்சி முறையில் கட்டமைக்கப்பட்ட மூல காரணங்களின் விளைவுகளாகும். இந்த மூல காரணங்களை சரிசெய்யாமல் ஸ்திரத்தன்மையை எட்ட முடியாது.',
    layerBHeader: '[02] முக்கிய அரசியல் மூல காரணங்கள்',
    r1_title: '1. தரவுகள் அற்ற மற்றும் அனுபவத்திற்கு அப்பாற்பட்ட சட்டமியற்றும் செயல்முறை',
    r1_nature: 'மூல காரணம்: சட்டங்களும் கொள்கைகளும் அடிமட்ட உண்மைகளை புறக்கணித்து, மையப்படுத்தப்பட்ட அரசியல் தேவைகள் அல்லது குறுகிய அதிகாரத்துவ கருத்துக்களின் அடிப்படையில் மட்டுமே உருவாக்கப்படுகின்றன.',
    r1_impact: 'கட்டமைப்பு முடிவு: மனித உழைப்பு அல்லது பிராந்திய வளங்கள் பற்றிய எந்தவொரு டிஜிட்டல் வரைபடமும் (Data Array Layer) பயன்படுத்தப்படுவதில்லை, இதனால் கொள்கைக்கும் உண்மைக்கும் இடையே துண்டிப்பு ஏற்படுகிறது.',
    r2_title: '2. தானியங்கி உத்திசார் சரிசெய்தல் மற்றும் டிஜிட்டல் தணிக்கை இல்லாமை',
    r2_nature: 'மூல காரணம்: அரச நிர்வாகம் பழைய முறைகளையே பின்பற்றுகிறது, அங்கு செயல்திறன் அல்லது ஊழலை உடனுக்குடன் கண்காணிக்கும் தொழில்நுட்ப முறைமைகள் (Governance Adjustment Loops) இல்லை.',
    r2_impact: 'கட்டமைப்பு முடிவு: சட்ட மற்றும் கட்டமைப்பு துவாரங்கள் குற்றவாளிகளை பாதுகாக்கின்றன, இதனால் பொறுப்புக்கூறல் முற்றாக சீர்குலைகிறது.',
    r3_title: '3. மையப்படுத்தப்பட்ட அதிகாரத்திற்கும் விകേന്ദ്രப்படுத்தப்பட்ட கிராமிய அலகுகளுக்கும் இடையிலான தொடர்பு இல்லாமை',
    r3_nature: 'மூல காரணம்: முடிவுகள் கொழும்பு போன்ற முக்கிய நகரங்களில் மட்டுமே எடுக்கப்படுகின்றன, கிராமிய மட்ட தகவல்களை கொள்கை வரைபடத்துடன் இணைக்கும் தானியங்கி தரவு தொடர்பு முறைமை இல்லை.',
    r3_impact: 'கட்டமைப்பு முடிவு: கிராமிய கண்டுபிடிப்புகள் மற்றும் திறமைகள் தேசிய மட்டத்தை அடைவது தடுக்கப்பட்டு, உள்ளூரில் திட்டங்கள் தோல்வியடைகின்றன.',
    r4_title: '4. மனித வள மேம்பாடு மற்றும் அரச உள்கட்டமைப்பை ஒருங்கிணைப்பதில் தோல்வி',
    r4_nature: 'மூல காரணம்: கல்வி அலகுகள் மற்றும் அரச உள்கட்டமைப்பு நிறுவனங்கள் ஒன்றோடொன்று தொடர்பற்ற தனித்தனி பிரிவுகளாக இயங்குகின்றன.',
    r4_impact: 'கட்டமைப்பு முடிவு: உள்கட்டமைப்பிற்கு செலவிடப்படும் அரச நிதி குறைந்த லாபத்தையே தருகிறது, மற்றும் பட்டதாரிகளின் திறன்கள் தொழில்துறை தேவைகளுடன் ஒத்துப்போவதில்லை.',
    noteB: '📌 [03] மூல காரணங்கள் முடிவு: அரசியல் பிரச்சினைகளின் அடிப்படை காரணம் "தரவுகள் அற்ற ஆட்சி" மற்றும் "தானியங்கி பொறுப்புக்கூறல் இல்லாமை" ஆகும்.',

    // Layer C
    layerCTitle: 'கட்டமைப்பு நன்மைகள் பகுப்பாய்வு',
    layerCSubtitle: 'Layer-C: Impact Layer (ABCD தர்க்கரீதியான கட்டமைப்பு)',
    layerCIntroTitle: '[01] அறிமுகம்: கட்டமைப்பு சமநிலையின் நன்மைகள்',
    layerCIntroDesc: 'அரசியல் அமைப்பின் மூல காரணங்களை சரிசெய்வது வெறுமனே அரசாங்க மாற்றத்தை விட சிறந்த நன்மைகளை தரும். இது ஊழலை குறைத்து, அடிமட்ட திறன்களை ஒருங்கிணைத்து, அரச நிறுவனங்களை நிகழ்நேர தணிக்கைக்கு உட்படுத்துகிறது.',
    layerCHeader: '[02] முக்கிய ஆட்சி நன்மைகள்',
    b1_title: '1. தரவு அடிப்படையிலான கொள்கை ஸ்திரத்தன்மை',
    b1_nature: 'கட்டமைப்பு நன்மை: கொள்கைகள் அனுபவபூர்வமான தரவுகளின் அடிப்படையில் உருவாக்கப்படுவதால், அரசியல் மாற்றங்களால் பாதிக்கப்படாத நிலையான தேசிய திட்டங்கள் அமையும்.',
    b1_impact: 'அரசியல் தாக்கம்: தன்னிச்சையான அரசியல் முடிவுகள் தடுக்கப்பட்டு, நாட்டின் ஸ்திரத்தன்மை உள்நாட்டிலும் சர்வதேச அளவிலும் உறுதிப்படுத்தப்படும்.',
    b2_title: '2. நிகழ்நேர தணிக்கை மற்றும் அதிகபட்ச பொறுப்புக்கூறல்',
    b2_nature: 'கட்டமைப்பு நன்மை: டிஜிட்டல் கண்காணிப்பு முறைமைகளை செயல்படுத்துவதன் மூலம் நிறுவனங்களின் செயல்திறனை உடனுக்குடன் கண்காணிக்க முடியும்.',
    b2_impact: 'அரசியல் தாக்கம்: ஊழல் மற்றும் விரயங்கள் முறைமையால் உடனடியாக கண்டறியப்பட்டு சரிசெய்யப்படும், இதனால் பொது சேவை மேம்படும்.',
    b3_title: '3. தேசிய ஆட்சியில் அடிமட்ட மனித வளங்களின் பங்களிப்பு',
    b3_nature: 'கட்டமைப்பு நன்மை: உள்ளூர் திறமைகளும் தொழில்முனைவு ஆற்றல்களும் தரவு ஒருங்கிணைப்பு மூலம் நேரடியாக தேசிய கொள்கை வரைபடத்துடன் இணைக்கப்படுகின்றன.',
    b3_impact: 'அரசியல் தாக்கம்: அடிமட்ட படைப்பாளிகள் தேசிய திட்டமிடுபவர்களுடன் நேரடியாக இணைகிறார்கள், இது உண்மையான கூட்டுறவு ஜனநாயகத்தை உருவாக்கும்.',
    b4_title: '4. உத்திசார் மனித வள மேலாண்மை மற்றும் செயலில் உள்ள தொழிலாளர் சக்தி',
    b4_nature: 'கட்டமைப்பு நன்மை: கல்வி, பயிற்சி மற்றும் உள்கட்டமைப்பை ஒரே ஒருங்கிணைந்த முறைமையின் கீழ் நிர்வகித்தல்.',
    b4_impact: 'அரசியல் தாக்கம்: மாணவர்கள் திறன்கள் தொழில்துறை தேவைகளுக்கு ஏற்ப வடிவமைக்கப்பட்டு, மனித வளம் வீணாகாமல் தடுக்கப்படும்.',
    noteC: '📌 [03] நன்மைகள் முடிவு: கட்டமைப்பு காரணங்களை சரிசெய்வது ஒட்டுமொத்த அரசியல் அமைப்பையும் ஒரு வெளிப்படையான, தானியங்கி ஒழுங்குமுறை அமைப்பாக மாற்றுகிறது.',

    // Layer D
    layerDTitle: 'சீர்திருத்த திட்டமிடல் மற்றும் தீர்வுகள்',
    layerDSubtitle: 'Layer-D: Architectural Blueprint Layer (Solutions)',
    layerDIntroTitle: '[01] அறிமுகம்: கணினி வழி ஜனநாயக கட்டமைப்பு',
    layerDIntroDesc: '"முக்கால தொலைநோக்கு" திட்டத்தின் இறுதி படி தரவு அடிப்படையிலான அரசியல் மாற்றமாகும். தரவு அற்ற தன்மை மற்றும் தனிநபர் நிகழ்ச்சி நிரல்களுக்கு பதிலாக டிஜிட்டல் முறைமைகளை புகுத்துவதன் மூலம் அடிமட்ட வளங்களை நேரடியாக அரச திட்டமிடலுடன் இணைக்கும் கணினி வழி ஜனநாயக மாதிரியை நிறுவுகிறோம்.',
    layerDHeader: '[02] முக்கிய ஆட்சி தீர்வுகள்',
    s1_title: '1. அனுபவ தரவு அடிப்படையிலான சட்டவாக்க செயல்முறை மற்றும் தேசிய கொள்கை மையம்',
    s1_nature: 'உத்திசார் தீர்வு: எந்தவொரு சட்டம் அல்லது கொள்கையையும் இயற்றுவதற்கு முன் அடிமட்ட தரவுகளை பகுப்பாய்வு செய்ய ஒரு தேசிய கொள்கை தரவு மையத்தை நிறுவுதல்.',
    s1_impact: 'அரசியல் மாற்றம்: அரசியல்வாதிகள் தன்னிச்சையாக கொள்கைகளை மாற்றுவதை கட்டுப்படுத்தி, சட்டவாக்க செயல்முறையை ஸ்திரப்படுத்துகிறது.',
    s2_title: '2. நிகழ்நேர டிஜிட்டல் தணிக்கை மற்றும் தானியங்கி ஆட்சி முறைமைகள்',
    s2_nature: 'உத்திசார் தீர்வு: நிதியியல், பணிப்பாய்வு மற்றும் சேவைகளை உடனுக்குடன் கண்காணிக்க தானியங்கி தணிக்கை முறைமைகளை அறிமுகப்படுத்துதல்.',
    s2_impact: 'அரசியல் மாற்றம்: நிர்வாக தாமதங்களை தடுத்து, பொது செயல்பாடுகளில் அரசியல் தலையீடுகளை நீக்குகிறது.',
    s3_title: '3. அடிமட்ட வளங்களை தேசிய திட்டமிடலுடன் இணைக்கும் டிஜிட்டல் வரைபடம்',
    s3_nature: 'உத்திசார் தீர்வு: அனைத்து பிரிவுகளிலும் திறமைகள் மற்றும் வளங்கள் பற்றிய டிஜிட்டல் வரைபடத்தை உருவாக்கி, அவற்றை தேசிய வளர்ச்சி திட்டத்துடன் இணைத்தல்.',
    s3_impact: 'அரசியல் மாற்றம்: அடிமட்ட படைப்பாளிகளை நாட்டின் வளர்ச்சியில் முக்கிய பங்காளிகளாக மாற்றுகிறது.',
    s4_title: '4. மனித வளம் மற்றும் அரச உள்கட்டமைப்பிற்கான ஒருங்கிணைந்த வடிவமைப்பு',
    s4_nature: 'உத்திசார் தீர்வு: கல்வி வழிகள், தொழில் பயிற்சி மற்றும் தொழில்துறை உள்கட்டமைப்பு திட்டமிடல் ஆகியவற்றை ஒரே ஒருங்கிணைந்த வடிவமைப்பின் கீழ் கொண்டு வருதல்.',
    s4_impact: 'அரசியல் மாற்றம்: மாணவர்களின் திறமைகளை நவீன தொழில்துறை தேவைகளுடன் நேரடியாக இணைத்து, திறன் முரண்பாடுகளை நீக்குகிறது.',
    noteD: '📌 [03] முதன்மை வடிவமைப்பு: "முக்கால தொலைநோக்கு" சீர்திருத்தம் என்பது வெறும் அரசியல் வாக்குறுதிகள் அல்ல. இது தரவு வெளிப்படைத்தன்மை, பொறுப்புக்கூறல் மற்றும் அடிமட்ட உழைப்பை இணைக்கும் ஒரு அறிவியல் பூர்வமான ஆட்சி மாதிரியாகும். இந்த தர்க்கரீதியான கட்டமைப்பை செயல்படுத்துவது நாட்டை ஸ்திரமான பாதைக்கு கொண்டு செல்லும்.',
    
    footer: '© 2026 முக்கால தொலைநோக்கு - தேசிய கட்டமைப்பு சீர்திருத்த அறிக்கை'
  }
}

function PoloticsIntro({ lang, setCurrentPage }) {
  const t = translations[lang]

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
      <header className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div className="flex items-center gap-3">
          <span 
            className="text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider"
            style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.2)' }}
          >
            {t.badge}
          </span>
        </div>
        <button 
          onClick={() => setCurrentPage('politics')}
          className="px-6 py-3 rounded-2xl bg-slate-800/50 border border-white/10 text-xs hover:bg-white/10 transition-all flex items-center gap-2 text-purple-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg> 
          <span>{t.back}</span>
        </button>
      </header>

      {/* Hero Banner */}
      <section className="text-center max-w-5xl mx-auto px-4 mb-16">
        <h1 
          className="text-4xl md:text-6xl font-bold tracking-wide py-2 mb-3"
          style={{ 
            background: 'linear-gradient(to right, #ffffff, #e0e7ff, #c7d2fe)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}
        >
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-purple-300 font-light max-w-3xl mx-auto">
          {t.subtitle}
        </p>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
      </section>

      {/* Main Content Layout Container */}
      <div className="max-w-5xl mx-auto px-4 space-y-16">

        {/* LAYER A */}
        <section 
          className="p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md"
          style={{ background: 'rgba(30, 20, 45, 0.35)', border: '1px solid rgba(234, 179, 8, 0.12)' }}
        >
          <div className="flex items-center space-x-4 mb-8 border-b border-purple-950/40 pb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-950/30 text-red-400 font-bold text-xl border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]">A</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{t.layerATitle}</h2>
              <p className="text-xs text-purple-400 font-medium tracking-wide mt-1 uppercase">{t.layerASubtitle}</p>
            </div>
          </div>

          <div className="bg-slate-950/40 border-l-4 border-slate-500 p-5 rounded-r-2xl mb-8">
            <h4 className="text-amber-400 font-bold text-base mb-2">{t.layerAIntroTitle}</h4>
            <p className="text-purple-200/95 leading-relaxed text-sm md:text-base">{t.layerAIntroDesc}</p>
          </div>

          <h3 className="text-lg font-bold text-white mb-5">{t.layerAProblemsHeader}</h3>
          
          <div className="space-y-6">
            {/* Point 1 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50">
              <h4 className="font-bold text-white flex items-start gap-2 text-base">
                <span className="text-indigo-400">1.</span> {t.p1_title}
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mt-3 pl-6 text-sm text-purple-200/80">
                <div className="bg-slate-950/50 p-4 rounded-xl border border-purple-950/40">
                  <span className="text-red-400 font-bold block mb-1 uppercase tracking-wider text-xs">Nature</span>
                  {t.p1_nature}
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-purple-950/40">
                  <span className="text-purple-300 font-bold block mb-1 uppercase tracking-wider text-xs">Impact</span>
                  {t.p1_impact}
                </div>
              </div>
            </div>

            {/* Point 2 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50">
              <h4 className="font-bold text-white flex items-start gap-2 text-base">
                <span className="text-indigo-400">2.</span> {t.p2_title}
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mt-3 pl-6 text-sm text-purple-200/80">
                <div className="bg-slate-950/50 p-4 rounded-xl border border-purple-950/40">
                  <span className="text-red-400 font-bold block mb-1 uppercase tracking-wider text-xs">Nature</span>
                  {t.p2_nature}
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-purple-950/40">
                  <span className="text-purple-300 font-bold block mb-1 uppercase tracking-wider text-xs">Impact</span>
                  {t.p2_impact}
                </div>
              </div>
            </div>

            {/* Point 3 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50">
              <h4 className="font-bold text-white flex items-start gap-2 text-base">
                <span className="text-indigo-400">3.</span> {t.p3_title}
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mt-3 pl-6 text-sm text-purple-200/80">
                <div className="bg-slate-950/50 p-4 rounded-xl border border-purple-950/40">
                  <span className="text-red-400 font-bold block mb-1 uppercase tracking-wider text-xs">Nature</span>
                  {t.p3_nature}
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-purple-950/40">
                  <span className="text-purple-300 font-bold block mb-1 uppercase tracking-wider text-xs">Impact</span>
                  {t.p3_impact}
                </div>
              </div>
            </div>

            {/* Point 4 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50">
              <h4 className="font-bold text-white flex items-start gap-2 text-base">
                <span className="text-indigo-400">4.</span> {t.p4_title}
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mt-3 pl-6 text-sm text-purple-200/80">
                <div className="bg-slate-950/50 p-4 rounded-xl border border-purple-950/40">
                  <span className="text-red-400 font-bold block mb-1 uppercase tracking-wider text-xs">Nature</span>
                  {t.p4_nature}
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-purple-950/40">
                  <span className="text-purple-300 font-bold block mb-1 uppercase tracking-wider text-xs">Impact</span>
                  {t.p4_impact}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-purple-950/40 text-sm text-purple-300/80 italic leading-relaxed">
            {t.noteA}
          </div>
        </section>

        {/* LAYER B */}
        <section 
          className="p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md"
          style={{ background: 'rgba(30, 20, 45, 0.35)', border: '1px solid rgba(234, 179, 8, 0.12)' }}
        >
          <div className="flex items-center space-x-4 mb-8 border-b border-purple-950/40 pb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-950/30 text-amber-400 font-bold text-xl border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]">B</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{t.layerBTitle}</h2>
              <p className="text-xs text-purple-400 font-medium tracking-wide mt-1 uppercase">{t.layerBSubtitle}</p>
            </div>
          </div>

          <div className="bg-slate-950/40 border-l-4 border-slate-500 p-5 rounded-r-2xl mb-8">
            <h4 className="text-amber-400 font-bold text-base mb-2">{t.layerBIntroTitle}</h4>
            <p className="text-purple-200/95 leading-relaxed text-sm md:text-base">{t.layerBIntroDesc}</p>
          </div>

          <h3 className="text-lg font-bold text-white mb-5">{t.layerBHeader}</h3>

          <div className="space-y-6">
            {/* Root Cause 1 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50">
              <h4 className="font-bold text-white flex items-start gap-2 text-base">
                <span className="text-amber-400">1.</span> {t.r1_title}
              </h4>
              <div className="space-y-3 mt-3 pl-6 text-sm text-purple-200/80">
                <p><strong>{lang === 'si' ? 'මුල් හේතුව:' : lang === 'ta' ? 'மூல காரணம்:' : 'Root Cause:'}</strong> {t.r1_nature}</p>
                <p className="text-xs bg-slate-950/40 p-3 rounded-xl border border-purple-950/40 text-purple-300">
                  <strong>{lang === 'si' ? 'පද්ධතිමය ප්‍රතිඵලය:' : lang === 'ta' ? 'கட்டமைப்பு முடிவு:' : 'Systemic Result:'}</strong> {t.r1_impact}
                </p>
              </div>
            </div>

            {/* Root Cause 2 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50">
              <h4 className="font-bold text-white flex items-start gap-2 text-base">
                <span className="text-amber-400">2.</span> {t.r2_title}
              </h4>
              <div className="space-y-3 mt-3 pl-6 text-sm text-purple-200/80">
                <p><strong>{lang === 'si' ? 'මුල් හේතුව:' : lang === 'ta' ? 'மூல காரணம்:' : 'Root Cause:'}</strong> {t.r2_nature}</p>
                <p className="text-xs bg-slate-950/40 p-3 rounded-xl border border-purple-950/40 text-purple-300">
                  <strong>{lang === 'si' ? 'පද්ධතිමය ප්‍රතිඵලය:' : lang === 'ta' ? 'கட்டமைப்பு முடிவு:' : 'Systemic Result:'}</strong> {t.r2_impact}
                </p>
              </div>
            </div>

            {/* Root Cause 3 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50">
              <h4 className="font-bold text-white flex items-start gap-2 text-base">
                <span className="text-amber-400">3.</span> {t.r3_title}
              </h4>
              <div className="space-y-3 mt-3 pl-6 text-sm text-purple-200/80">
                <p><strong>{lang === 'si' ? 'මුල් හේතුව:' : lang === 'ta' ? 'மூல காரணம்:' : 'Root Cause:'}</strong> {t.r3_nature}</p>
                <p className="text-xs bg-slate-950/40 p-3 rounded-xl border border-purple-950/40 text-purple-300">
                  <strong>{lang === 'si' ? 'පද්ධතිමය ප්‍රතිඵලය:' : lang === 'ta' ? 'கட்டமைப்பு முடிவு:' : 'Systemic Result:'}</strong> {t.r3_impact}
                </p>
              </div>
            </div>

            {/* Root Cause 4 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50">
              <h4 className="font-bold text-white flex items-start gap-2 text-base">
                <span className="text-amber-400">4.</span> {t.r4_title}
              </h4>
              <div className="space-y-3 mt-3 pl-6 text-sm text-purple-200/80">
                <p><strong>{lang === 'si' ? 'මුල් හේතුව:' : lang === 'ta' ? 'மூல காரணம்:' : 'Root Cause:'}</strong> {t.r4_nature}</p>
                <p className="text-xs bg-slate-950/40 p-3 rounded-xl border border-purple-950/40 text-purple-300">
                  <strong>{lang === 'si' ? 'පද්ධතිමය ප්‍රතිඵලය:' : lang === 'ta' ? 'கட்டமைப்பு முடிவு:' : 'Systemic Result:'}</strong> {t.r4_impact}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-purple-950/40 text-sm text-purple-300/80 italic leading-relaxed">
            {t.noteB}
          </div>
        </section>

        {/* LAYER C */}
        <section 
          className="p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md"
          style={{ background: 'rgba(30, 20, 45, 0.35)', border: '1px solid rgba(234, 179, 8, 0.12)' }}
        >
          <div className="flex items-center space-x-4 mb-8 border-b border-purple-950/40 pb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-950/30 text-emerald-400 font-bold text-xl border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]">C</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{t.layerCTitle}</h2>
              <p className="text-xs text-purple-400 font-medium tracking-wide mt-1 uppercase">{t.layerCSubtitle}</p>
            </div>
          </div>

          <div className="bg-slate-950/40 border-l-4 border-slate-500 p-5 rounded-r-2xl mb-8">
            <h4 className="text-amber-400 font-bold text-base mb-2">{t.layerCIntroTitle}</h4>
            <p className="text-purple-200/95 leading-relaxed text-sm md:text-base">{t.layerCIntroDesc}</p>
          </div>

          <h3 className="text-lg font-bold text-white mb-5">{t.layerCHeader}</h3>

          <div className="space-y-6 text-sm md:text-base">
            {/* Benefit 1 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> {t.b1_title}
              </h4>
              <p className="text-purple-200/80 pl-6"><strong>{lang === 'si' ? 'පද්ධතිමය යහපත:' : lang === 'ta' ? 'கட்டமைப்பு நன்மை:' : 'Systemic Benefit:'}</strong> {t.b1_nature}</p>
              <p className="text-amber-300 font-medium pl-6"><strong>{lang === 'si' ? 'දේශපාලනික බලපෑම:' : lang === 'ta' ? 'அரசியல் தாக்கம்:' : 'Political Impact:'}</strong> {t.b1_impact}</p>
            </div>

            {/* Benefit 2 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> {t.b2_title}
              </h4>
              <p className="text-purple-200/80 pl-6"><strong>{lang === 'si' ? 'පද්ධතිමය යහපත:' : lang === 'ta' ? 'கட்டமைப்பு நன்மை:' : 'Systemic Benefit:'}</strong> {t.b2_nature}</p>
              <p className="text-amber-300 font-medium pl-6"><strong>{lang === 'si' ? 'දේශපාලනික බලපෑම:' : lang === 'ta' ? 'அரசியல் தாக்கம்:' : 'Political Impact:'}</strong> {t.b2_impact}</p>
            </div>

            {/* Benefit 3 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> {t.b3_title}
              </h4>
              <p className="text-purple-200/80 pl-6"><strong>{lang === 'si' ? 'පද්ධතිමය යහපත:' : lang === 'ta' ? 'கட்டமைப்பு நன்மை:' : 'Systemic Benefit:'}</strong> {t.b3_nature}</p>
              <p className="text-amber-300 font-medium pl-6"><strong>{lang === 'si' ? 'දේශපාලනික බලපෑම:' : lang === 'ta' ? 'அரசியல் தாக்கம்:' : 'Political Impact:'}</strong> {t.b3_impact}</p>
            </div>

            {/* Benefit 4 */}
            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-950/50 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> {t.b4_title}
              </h4>
              <p className="text-purple-200/80 pl-6"><strong>{lang === 'si' ? 'පද්ධතිමය යහපත:' : lang === 'ta' ? 'கட்டமைப்பு நன்மை:' : 'Systemic Benefit:'}</strong> {t.b4_nature}</p>
              <p className="text-amber-300 font-medium pl-6"><strong>{lang === 'si' ? 'දේශපාලනික බලපෑම:' : lang === 'ta' ? 'அரசியல் தாக்கம்:' : 'Political Impact:'}</strong> {t.b4_impact}</p>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-purple-950/40 text-sm text-purple-300/80 italic leading-relaxed">
            {t.noteC}
          </div>
        </section>

        {/* LAYER D */}
        <section 
          className="p-8 md:p-10 rounded-[2.5rem] border border-indigo-500/30"
          style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(30, 27, 75, 0.4))' }}
        >
          <div className="flex items-center space-x-4 mb-8 border-b border-indigo-900/40 pb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white font-bold text-xl shadow-[0_0_12px_rgba(99,102,241,0.4)]">D</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{t.layerDTitle}</h2>
              <p className="text-xs text-indigo-400 font-medium tracking-wide mt-1 uppercase">{t.layerDSubtitle}</p>
            </div>
          </div>

          <div className="bg-indigo-950/40 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-8">
            <h4 className="text-indigo-300 font-bold text-base mb-2">{t.layerDIntroTitle}</h4>
            <p className="text-purple-200/95 leading-relaxed text-sm md:text-base">{t.layerDIntroDesc}</p>
          </div>

          <h3 className="text-lg font-bold text-white mb-5">{t.layerDHeader}</h3>

          <div className="space-y-6 text-sm md:text-base">
            {/* Solution 1 */}
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/50 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-xs text-white">1</span> {t.s1_title}
              </h4>
              <p className="text-purple-200/80 pl-8"><strong>{lang === 'si' ? 'මූලෝපායික විසඳුම:' : lang === 'ta' ? 'உத்திசார் தீர்வு:' : 'Strategic Solution:'}</strong> {t.s1_nature}</p>
              <p className="text-emerald-400 font-medium pl-8"><strong>{lang === 'si' ? 'දේශපාලනික පරිවර්තනය:' : lang === 'ta' ? 'அரசியல் மாற்றம்:' : 'Political Transformation:'}</strong> {t.s1_impact}</p>
            </div>

            {/* Solution 2 */}
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/50 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-xs text-white">2</span> {t.s2_title}
              </h4>
              <p className="text-purple-200/80 pl-8"><strong>{lang === 'si' ? 'මූලෝපායික විසඳුම:' : lang === 'ta' ? 'உத்திசார் தீர்வு:' : 'Strategic Solution:'}</strong> {t.s2_nature}</p>
              <p className="text-emerald-400 font-medium pl-8"><strong>{lang === 'si' ? 'දේශපාලනික පරිවර්තනය:' : lang === 'ta' ? 'அரசியல் மாற்றம்:' : 'Political Transformation:'}</strong> {t.s2_impact}</p>
            </div>

            {/* Solution 3 */}
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/50 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-xs text-white">3</span> {t.s3_title}
              </h4>
              <p className="text-purple-200/80 pl-8"><strong>{lang === 'si' ? 'මූලෝපායික විසඳුම:' : lang === 'ta' ? 'உத்திசார் தீர்வு:' : 'Strategic Solution:'}</strong> {t.s3_nature}</p>
              <p className="text-emerald-400 font-medium pl-8"><strong>{lang === 'si' ? 'දේශපාලනික පරිවර්තනය:' : lang === 'ta' ? 'அரசியல் மாற்றம்:' : 'Political Transformation:'}</strong> {t.s3_impact}</p>
            </div>

            {/* Solution 4 */}
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/50 space-y-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-xs text-white">4</span> {t.s4_title}
              </h4>
              <p className="text-purple-200/80 pl-8"><strong>{lang === 'si' ? 'මූලෝපායික විසඳුම:' : lang === 'ta' ? 'உத்திசார் தீர்வு:' : 'Strategic Solution:'}</strong> {t.s4_nature}</p>
              <p className="text-emerald-400 font-medium pl-8"><strong>{lang === 'si' ? 'දේශපාලනික පරිවර්තනය:' : lang === 'ta' ? 'அரசியல் மாற்றம்:' : 'Political Transformation:'}</strong> {t.s4_impact}</p>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-indigo-900/60 bg-indigo-950/50 p-5 rounded-2xl text-sm leading-relaxed text-purple-200/90">
            {t.noteD}
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 mt-16 pt-8 border-t border-purple-950/40 text-center text-xs text-purple-400/60">
        <p>{t.footer}</p>
      </footer>
    </main>
  )
}

export default PoloticsIntro

export const projectsList = [
  {
    id: 'gatalu1',
    name: {
      si: 'අතරමැදි සූරාකෑම වැළැක්වීමේ සැලසුම් වාර්තාව',
      en: 'Anti-Exploitation Blueprint Report',
      ta: 'இடைத்தரகர் சுரண்டல் எதிர்ப்பு வரைபடம்'
    },
    headerText: {
      si: 'තුන්කල් දැක්ම | අතරමැදි සූරාකෑම වැළැක්වීමේ සැලසුම් වාර්තාව',
      en: 'Thun Kal Dekma | Anti-Exploitation Systemic Blueprint',
      ta: 'துன் கல் தக்ம | இடைத்தரகர் சுரண்டல் எதிர்ப்பு வரைபடம்'
    },
    searchPlaceholder: {
      si: 'පද්ධති සංරචක හෝ ක්‍රියාවලි සොයන්න...',
      en: 'Search system components or processes...',
      ta: 'கூறுகள் அல்லது செயல்முறைகளைத் தேடுங்கள்...'
    },
    tableHeaders: {
      si: ['ක්‍රියාකාරී මට්ටම', 'තාක්ෂණික / ව්‍යුහාත්මක යාන්ත්‍රණය', 'පද්ධතිමය ප්‍රතිඵලය'],
      en: ['Operational Level', 'Technical / Structural Mechanism', 'Systemic Outcome'],
      ta: ['செயல்பாட்டு மட்டம்', 'தொழில்நுட்ப / கட்டமைப்பு வழிமுறை', 'முறையியல் முடிவு']
    },
    pageLabel: {
      si: 'පිටුව',
      en: 'Page',
      ta: 'பக்கம்'
    },
    slides: {
      si: [
        {
          title: "<span class='framework-badge'>A</span> ප්‍රශ්නය (The Problem): අතරමැදියන්ගේ ව්‍යුහාත්මක සූරාකෑම",
          bgImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>ශ්‍රී ලංකාවේ ග්‍රාමීය කෘෂිකාර්මික සහ ව්‍යවසායකත්ව ක්ෂේත්‍රය මුහුණ දෙන දැවැන්තම පද්ධතිමය රික්තය වන්නේ නිෂ්පාදකයා සහ අවසාන පාරිභෝගිකයා අතර පවතින අසාධාරණ අතරමැදි ජාලයයි. මෙමඟින් පාර්ශව දෙකම එකසේ පීඩාවට පත් වේ:</p><ul class='styled-list'><li><b>ගොවියා සහ නිෂ්පාදකයා අගාධයට යාම:</b> මාස ගණනාවක් තිස්සේ දහඩිය හෙළා, ප්‍රාග්ධනය යොදවා කරන නිෂ්පාදනයට ස්ථාවර හෝ සාධාරණ මිලක් ගොවියාට නොලැබේ. අස්වැන්න නෙළන කාලයට මිල හිතාමතාම පහත දැමීමට අතරමැදියා කටයුතු කරයි.</li><li><b>පාරිභෝගිකයා අධික මිලක් ගෙවීම:</b> ගමෙන් රුපියල් 50කට ගන්නා එළවළු හෝ නිෂ්පාදනය නගරයේ පාරිභෝගිකයා අතට පත්වන්නේ රුපියල් 250කය. අතරමැදියා කිසිදු අගය එකතු කිරීමක් (Value Addition) නොකර 300%-500% ක අධික ලාභයක් ලබයි.</li><li><b>ආර්ථික නිදහස අහිමි වීම:</b> මෙමඟින් දළ දේශීය නිෂ්පාදිතයට (GDP) උපරිම දායකත්වයක් දිය හැකි ග්‍රාමීය ව්‍යවසායකයා සදාකාලික ණයකරුවෙකු බවට පත් වේ.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B</span> හේතුව (The Causes): පද්ධතියේ පවතින රික්තයන්",
          bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>මෙම ප්‍රශ්නය පුද්ගල දුර්වලතාවයකට වඩා වසර ගණනාවක් තිස්සේ පාලකයන් විසින් නොසලකා හරින ලද පද්ධතිමය දෝෂ (Systemic Defects) 3ක් නිසා හටගෙන ඇත:</p><div class='layout-grid'><div class='chart-wrapper'><canvas id='marketAsymmetryChart'></canvas></div><div><ul class='styled-list'><li><b>තොරතුරු සහ මිල පාරදෘශ්‍යභාවය නොමැතිකම (Information Asymmetry):</b> නගරයේ පවතින සැබෑ වෙළඳපොළ ඉල්ලුම හෝ නියමිත මිල ගණන් පිළිබඳ නිවැරදි දත්ත ග්‍රාමීය නිෂ්පාදකයා සතුව නොමැත. එම තොරතුරු ඒකාධිකාරය පවතින්නේ අතරමැදියා සතුවය.</li><li><b>මධ්‍යගත භෞතික වෙළඳපොළ මත යැපීම:</b> සියලුම නිෂ්පාදන දඹුල්ල හෝ මීගොඩ වැනි භෞතික ආර්ථික මධ්‍යස්ථාන වෙත ප්‍රවාහනය කළ යුතුය. එහිදී ප්‍රවාහන පිරිවැය සහ අතරමැදියාගේ හිතුමතය මත මිල තීරණය වේ.</li><li><b>ගබඩාකරණ සහ පූර්ව සැලසුම්කරණ (Pre-planning) දුර්වලතා:</b> අස්වැන්න නරක් වීමට පෙර විකුණාගත යුතු බැවින්, අතරමැදියා කියන ඕනෑම අඩු මිලකට නිෂ්පාදනය පවරා දීමට නිෂ්පාදකයාට සිදුවේ.</li></ul></div></div>",
          chartType: 'radar',
          chartId: 'marketAsymmetryChart'
        },
        {
          title: "<span class='framework-badge'>C</span> යහපත (Benefits of Resolution): පද්ධතිය නිවැරදි වීමෙන් උදාවන පොදු යහපත",
          bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>මෙම ගැටලුව ඩිජිටල් විනයක් හරහා විසඳීමෙන් පුරවැසියාගේ සිට මුළු මහත් ජාතික ආර්ථිකයටම සුවිශේෂී ප්‍රතිලාභ හිමි වේ:</p><ul class='styled-list'><li><b>කායික සහ මානසික සහනය:</b> ගොවියාට තමන්ගේ මහන්සියට සරිලන සෘජු ආදායමක් ලැබෙන විට ණය බරින් නිදහස් වී, නිදහස් මනසක් (Equanimity) සහිතව නිෂ්පාදන ධාරිතාව ඉහළ නැංවිය හැකිය.</li><li><b>ජීවන වියදම පහළ යාම:</b> පාරිභෝගිකයාට අතරමැදි පිරිවැයකින් තොරව, නැවුම් නිෂ්පාදන ඉතා සාධාරණ මිලකට මිලදී ගැනීමට අවස්ථාව ලැබේ.</li><li><b>ග්‍රාමීය ආර්ථික පිබිදීම:</b> ගමට කෙලින්ම මුදල් ගලා ඒම නිසා නාගරික-ග්‍රාමීය ආර්ථික විෂමතාවය නැති වී, ග්‍රාම සේවා වසම් මට්ටමින් නව ව්‍යවසායකයන් බිහි වේ. රට ණය අර්බුදයෙන් මුදවා ගැනීමට අවශ්‍ය දළ දේශීය නිෂ්පාදිතයේ (GDP) වේගවත් වර්ධනයක් සිදුවේ.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>D</span> සැලසුම - 1 කොටස: පුරවැසි මට්ටම සහ ග්‍රාමීය ඩිජිටල් කේන්ද්‍රස්ථානය",
          bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The Village Digital Hub සහ ප්‍රායෝගික යාන්ත්‍රණය:</b> 'තුන් කල් දැක්ම' මඟින් තාක්ෂණය සහ විනය මුසු කළ විසඳුම් ව්‍යුහය:</p><input type='text' id='tableFilterInput' class='table-filter' placeholder='සොයන්න...'><table id='contentDataTable'><thead><tr><th>ක්‍රියාකාරී මට්ටම</th><th>තාක්ෂණික / ව්‍යුහාත්මක යාන්ත්‍රණය</th><th>පද්ධතිමය ප්‍රතිඵලය</th></tr></thead><tbody><tr><td><b>පුරවැසි මට්ටම (දින 7ක වැඩමුළුව)</b></td><td>සෑම වසමකම ස්වේච්ඡා කණ්ඩායම් හරහා ගොවීන්, ව්‍යවසායකයන් සහ නිෂ්පාදන ධාරිතාව පිළිබඳ දත්ත රැස් කිරීම.</td><td>සෑම ග්‍රාම සේවා වසමකම සවිස්තරාත්මක 'හැකියා සිතියමක්' (Capability Map) නිර්මාණය වීම.</td></tr><tr><td><b>The Village Digital Hub</b></td><td>සෑම වසමකටම ආවේණික ඩිජිටල් පද්ධතියක්. ගොවියා බෝග ප්‍රමාණය සහ අස්වැන්න ලැබෙන දිනය ඇතුළත් කිරීම.</td><td>අතරමැදියා සතුව තිබූ තොරතුරු ඒකාධිකාරය බිඳවැටී දත්ත පාරදෘශ්‍යභාවය තහවුරු වීම.</td></tr><tr><td><b>Layer-B විනයධර තාක්ෂණය</b></td><td>පද්ධතිය තුළ මිල සූරාකෑමක් හෝ දූෂිත මූල්‍ය ගනුදෙනුවක් සිදුවීමට උත්සාහ කළහොත් 'විනයධර තර්කනය' මඟින් එය එසැණින් අවහිර කිරීම.</td><td>පුද්ගල අභිමතය මත නොව ස්වයංක්‍රීයව සිදුවන Layer-B ස්වයංක්‍රීය අවහිරය (Automatic Block) මඟින් සූරාකෑම වැළකීම.</td></tr></tbody></table>",
          hasFilterableTable: true
        },
        {
          title: "<span class='framework-badge'>D</span> සැලසුම - 2 කොටස: රාජ්‍ය මට්ටම, බෙදාහැරීම සහ ජනාධිපති අධීක්ෂණය",
          bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>අනුරාධපුර ප්‍රඥාව සහ උත්තරීතර පාලන ව්‍යුහය:</b></p><div class='layout-grid'><div><p><b>Health & Logistics Loop:</b> දිස්ත්‍රික් මෙහෙයුම් මධ්‍යස්ථාන හරහා ප්‍රවාහන ජාලය (Logistics) ක්‍රමවත් කෙරේ. අතරමැදියාගේ භෞතික මැදිහත්වීම ඉවත් කර, ප්‍රවාහනය පමණක් කාර්යක්ෂම සේවාවක් ලෙස බද්ධ කෙරේ.</p><p><b>ජනාධිපති මෙහෙයුම් මධ්‍යස්ථානය:</b> මුළු රටේම නිෂ්පාදන දත්ත සහ මිල ගණන් ජනාධිපතිවරයා යටතේ පවතින ප්‍රධාන පාලන මධ්‍යස්ථානයෙන් සජීවීව (Live Monitoring) නිරීක්ෂණය කරයි.</p><p><b>අනුරාධපුර ප්‍රඥාව (වැව් පද්ධතියේ දැක්ම):</b> අතීතයේ නියඟයට කල්තියා වැව් පතුලේ නිදන් තැන්පත් කළා සේ, මෙම පද්ධතිය හරහා ඉදිරි මාස 6 තුළ රටේ වගා කෙරෙන බෝග ප්‍රමාණය කල්තියා විශ්ලේෂණය කරයි. එකම එළවළු වර්ගය රට පුරා වගා කර මිල බිඳවැටීමේ අර්බුදය (Overproduction) මින් වැළකේ.</p><div class='quote-box'>\"තුන් කල් දැක්ම මඟින් අතරමැදියා ඉවත් කරන්නේ බලහත්කාරයෙන් නොවේ. තාක්ෂණය ක්‍රියා කරන්නේ ධර්මය සහ විනය ආරක්ෂා කරන භෞතික වැටක් ලෙසයි.\"</div></div><div class='chart-wrapper'><canvas id='gdpGrowthChart'></canvas></div></div>",
          chartType: 'line',
          chartId: 'gdpGrowthChart'
        }
      ],
      en: [
        {
          title: "<span class='framework-badge'>A</span> The Problem: Structural Exploitation by Middlemen",
          bgImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>The greatest systemic void faced by Sri Lanka's rural agricultural and entrepreneurial sectors is the unfair intermediary network existing between the producer and the final consumer. This inflicts equal hardship on both parties:</p><ul class='styled-list'><li><b>Plight of the Farmer and Producer:</b> Farmers do not receive a stable or fair price for their production despite sweating and investing capital for months. The middleman deliberately drives down prices during harvest seasons.</li><li><b>Consumer Pays Exorbitant Prices:</b> Vegetables or products purchased from the village for LKR 50 reach the urban consumer at LKR 250. Middlemen pocket 300%-500% profits without adding any value.</li><li><b>Loss of Economic Freedom:</b> This keeps the rural entrepreneur, who could maximally contribute to the Gross Domestic Product (GDP), trapped as a perpetual debtor.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B</span> The Causes: Existing Systemic Voids",
          bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>Rather than an individual failure, this problem stems from 3 structural Systemic Defects neglected by rulers for generations:</p><div class='layout-grid'><div class='chart-wrapper'><canvas id='marketAsymmetryChart'></canvas></div><div><ul class='styled-list'><li><b>Information Asymmetry:</b> Rural producers lack accurate data regarding real urban market demand or set standard prices. The monopoly over this information remains solely with the middleman.</li><li><b>Dependence on Centralized Physical Markets:</b> All produce must be transported to physical economic centers like Dambulla or Meegoda, where prices are dictated by transport overheads and the middleman's whims.</li><li><b>Storage and Pre-planning Weaknesses:</b> Since produce must be sold before spoiling, producers are forced to surrender their goods at any low rate specified by the middleman.</li></ul></div></div>",
          chartType: 'radar',
          chartId: 'marketAsymmetryChart'
        },
        {
          title: "<span class='framework-badge'>C</span> Benefits of Resolution: Common Good via Systemic Correction",
          bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>Resolving this issue via digital discipline unlocks exceptional benefits ranging from individual citizens to the entire national economy:</p><ul class='styled-list'><li><b>Physical and Mental Relief:</b> When farmers receive a direct income matching their hard work, they break free from debt, increasing production capacity with absolute peace of mind (Equanimity).</li><li><b>Reduction in Cost of Living:</b> Consumers gain the opportunity to purchase fresh produce at highly fair prices, completely free of middleman markups.</li><li><b>Rural Economic Awakening:</b> Capital flows directly into villages, erasing the urban-rural economic disparity and fostering new entrepreneurs at the Grama Niladhari division level. This triggers rapid GDP growth required to rescue the nation from debt crises.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>D</span> The Action Plan - Part 1: Citizen Level & The Village Digital Hub",
          bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The Village Digital Hub & Practical Framework:</b> How 'Three-Way Vision' infuses technology with structural discipline:</p><input type='text' id='tableFilterInput' class='table-filter' placeholder='Search...'><table id='contentDataTable'><thead><tr><th>Operational Level</th><th>Technical / Structural Mechanism</th><th>Systemic Outcome</th></tr></thead><tbody><tr><td><b>Citizen Level (7-Day Workshop)</b></td><td>Gathering data on farmers, entrepreneurs, and production capacities via volunteer groups in every division.</td><td>Creation of a detailed localized 'Capability Map' for each Grama Niladhari division.</td></tr><tr><td><b>The Village Digital Hub</b></td><td>A unique digital portal for each division. Farmers log their crop quantities and expected harvest dates into the system.</td><td>The information monopoly of middlemen is shattered, establishing true data transparency.</td></tr><tr><td><b>Layer-B Disciplinary Tech</b></td><td>If any price exploitation, artificial inflation, or corrupt financial transactions are attempted, the built-in 'Disciplinary Logic' blocks it instantly.</td><td>Exploitation is averted via the automatic Layer-B block, independent of human discretion or intervention.</td></tr></tbody></table>",
          hasFilterableTable: true
        },
        {
          title: "<span class='framework-badge'>D</span> The Action Plan - Part 2: State Level, Logistics & Presidential Oversight",
          bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>Anuradhapura Wisdom and Supreme Governance Infrastructure:</b></p><div class='layout-grid'><div><p><b>Health & Logistics Loop:</b> The state coordinates the distribution framework via District Operational Centers. Physical interference by middlemen is eradicated, embedding transport purely as an efficient logistics service.</p><p><b>Presidential Operations Center:</b> National production data and live market pricing are monitored directly under the President's central command post (Live Monitoring), technically sealing off bureaucracy and fraud.</p><p><b>Anuradhapura Wisdom (Cascade Tank Vision):</b> Mirroring how ancient ancestors securely placed resources at the base of reservoirs ahead of droughts, this system pre-analyzes crop configurations across the island for the upcoming 6 months. This prevents countrywide overproduction of single crop types and subsequent price crashes.</p><div class='quote-box'>\"Three-Way Vision does not eliminate the middleman by force. Technology acts as a structural fence that protects righteousness and collective discipline.\"</div></div><div class='chart-wrapper'><canvas id='gdpGrowthChart'></canvas></div></div>",
          chartType: 'line',
          chartId: 'gdpGrowthChart'
        }
      ],
      ta: [
        {
          title: "<span class='framework-badge'>A</span> பிரச்சினை: இடைத்தரகர்களின் கட்டமைக்கப்பட்ட சுரண்டல்",
          bgImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>இலங்கையின் கிராமப்புற விவசாய மற்றும் தொழில்முனைவோர் துறை எதிர்கொள்ளும் மிகப்பெரிய முறையியல் வெற்றிடம் உற்பத்தியாளருக்கும் இறுதி நுகர்வோருக்கும் இடையில் நிலவும் நியாயமற்ற இடைத்தரகர் வலையமைப்பாகும். இதனால் இரு தரப்பினரும் சமமாக பாதிக்கப்படுகின்றனர்:</p><ul class='styled-list'><li><b>விவசாயியும் உற்பத்தியாளரும் அதலபாதாளத்திற்குச் செல்லல்:</b> பல மாதங்களாக வியர்வை சிந்தி, மூலதனமிட்டு உற்பத்தி செய்யும் பொருட்களுக்கு விவசாயிக்கு நிலையான அல்லது நியாயமான விலை கிடைப்பதில்லை. அறுவடை காலத்தில் விலையை வேண்டுமென்றே குறைக்க இடைத்தரகர் நடவடிக்கை எடுக்கிறார்.</li><li><b>நுகர்வோர் அதிக விலை செலுத்த வேண்டியிருத்தல்:</b> கிராமத்தில் 50 ரூபாய்க்கு வாங்கப்படும் காய்கறி அல்லது உற்பத்திப் பொருள், நகரத்து நுகர்வோரைச் சென்றடையும் போது 250 ரூபாயாக மாறுகிறது. இடைத்தரகர்கள் எந்த மதிப்பையும் கூட்டாமல் 300%-500% வரை லாபம் பெறுகிறார்கள்.</li><li><b>பொருளாதார சுதந்திரம் இழக்கப்படல்:</b> இதன் மூலம் மொத்த உள்நாட்டு உற்பத்திக்கு (GDP) அதிகபட்ச பங்களிப்பை வழங்கக்கூடிய கிராமப்புற தொழில்முனைவோர் நிரந்தர கடனாளியாக மாறுகிறார்.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B</span> காரணங்கள் (Root Causes): அமைப்பில் உள்ள வெற்றிடங்கள்",
          bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>இப்பிரச்சினை தனிநபர் பலவீனத்தை விட, பல வருடங்களாக ஆட்சியாளர்களால் புறக்கணிக்கப்பட்ட 3 முறையியல் குறைபாடுகளால் (Systemic Defects) ஏற்பட்டுள்ளது:</p><div class='layout-grid'><div class='chart-wrapper'><canvas id='marketAsymmetryChart'></canvas></div><div><ul class='styled-list'><li><b>தகவல் மற்றும் விலை வெளிப்படைத்தன்மை இன்மை (Information Asymmetry):</b> நகரத்தில் உள்ள உண்மையான சந்தை தேவை அல்லது நிர்ணயிக்கப்பட்ட விலைகள் பற்றிய துல்லியமான தரவுகள் கிராமப்புற உற்பத்தியாளரிடம் இல்லை. அந்தத் தகவல் ஏகபோகம் இடைத்தரகரிடமே உள்ளது.</li><li><b>மத்தியஸ்த பெளதீக சந்தைகளில் தங்கியிருத்தல்:</b> அனைத்து உற்பத்திகளும் தம்புள்ளை அல்லது மீகொட போன்ற பெளதீக பொருளாதார மையங்களுக்கு கொண்டு செல்லப்பட வேண்டும். அங்கு போக்குவரத்து செலவு மற்றும் இடைத்தரகரின் விருப்பத்தின் பேரில் விலை தீர்மானிக்கப்படுகிறது.</li><li><b>களஞ்சியப்படுத்தல் மற்றும் முன்திட்டமிடல் (Pre-planning) பலவீனங்கள்:</b> அறுவடை அழுகுவதற்கு முன் விற்கப்பட வேண்டும் என்பதால், இடைத்தரகர் கூறும் எந்தவொரு குறைந்த விலைக்கும் உற்பத்தியை ஒப்படைக்க உற்பத்தியாளர் கட்டாயப்படுத்தப்படுகிறார்.</li></ul></div></div>",
          chartType: 'radar',
          chartId: 'marketAsymmetryChart'
        },
        {
          title: "<span class='framework-badge'>C</span> பயன்கள் (Benefits of Resolution): முறைமை சீರமைப்புப் பயன்கள்",
          bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>டிஜிட்டல் ஒழுக்கத்தின் மூலம் இப்பிரச்சினைக்கு தீர்வுகாண்பதன் ஊடாக குடிமகன் முதல் ஒட்டுமொத்த தேசிய பொருளாதாரம் வரை தனித்துவமான நன்மைகள் கிடைக்கும்:</p><ul class='styled-list'><li><b>உடல் மற்றும் மன நிவாரணம்:</b> விவசாயிக்கு தனது உழைப்புக்கேற்ற நேரடி வருமானம் கிடைக்கும் போது, அவர் கடன் சுமையிலிருந்து விடுபட்டு, சமநிலை மனதுடன் (Equanimity) உற்பத்தித் திறனை அதிகரிக்க முடியும்.</li><li><b>வாழ்க்கைச் செலவு குறைவடைதல்:</b> நுகர்வோருக்கு இடைத்தரகர் செலவுகள் இன்றி, புதிய உற்பத்திப் பொருட்களை மிகவும் நியாயமான விலையில் கொள்வனவு செய்ய வாய்ப்பு கிடைக்கிறது.</li><li><b>கிராமப்புற பொருளாதார எழுச்சி:</b> கிராமத்திற்கு நேரடியாக பணம் பாய்வதால் நகர-கிராமப்புற பொருளாதார சமமின்மை நீங்கி, கிராம சேவை உத்தியோகத்தர் பிரிவு மட்டத்தில் புதிய தொழில்முனைவோர்கள் உருவாவார்கள். மொத்த உள்நாட்டு உற்பத்தியின் (GDP) விரைவான வளர்ச்சி ஏற்படும்.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>D</span> திட்டம் - பகுதி 1: குடிமகன் மட்டம் மற்றும் கிராமப்புற டிஜிட்டல் மையம்",
          bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The Village Digital Hub மற்றும் நடைமுறை வழிமுறை:</b> 'துன் கல் தக்ம' தொழில்நுட்பம் மற்றும் ஒழுக்கத்தை கலந்த தீர்வு கட்டமைப்பு:</p><input type='text' id='tableFilterInput' class='table-filter' placeholder='தேடுங்கள்...'><table id='contentDataTable'><thead><tr><th>செயல்பாட்டு மட்டம்</th><th>தொழில்நுட்ப / கட்டமைப்பு வழிமுறை</th><th>முறையியல் முடிவு</th></tr></thead><tbody><tr><td><b>குடிமகன் மட்டம் (7 நாட்கள் பயிலරங்கு)</b></td><td>ஒவ்வொரு பிரிவிலும் உள்ள தன்னார்வக் குழுக்கள் மூலம் விவசாயிகள், தொழில்முனைவோர் மற்றும் உற்பத்தித் திறன் பற்றிய தரவுகளை சேகரித்தல்.</td><td>ஒவ்வொரு கிராம சேவைப் பிரிவிலும் விரிவான 'திறன் வரைபடம்' (Capability Map) உருவாக்கப்படல்.</td></tr><tr><td><b>The Village Digital Hub</b></td><td>ஒவ்வொரு பிரிவிற்கும் உரிய டிஜிட்டல் அமைப்பு. விவசாயி பயிர் அளவு மற்றும் அறுவடை தேதியை அமைப்பில் உள்ளீடு செய்தல்.</td><td>இடைத்தரகரிடம் இருந்த தகவல் ஏகபோகம் உடைக்கப்பட்டு தரவு வெளிப்படைத்தன்மை உறுதி செய்யப்படல்.</td></tr><tr><td><b>Layer-B ஒழுக்கவியல் தொழில்நுட்பம்</b></td><td>அமைப்பினுள் விலை சுரண்டல் அல்லது ஊழல்மிக்க நிதி பரிவர்த்தனைகள் முயற்சிக்கப்பட்டால், 'ஒழுக்கவியல் தர்க்கம்' மூலம் அது உடனுக்குடன் தடுக்கப்படும்.</td><td>நபர்களின் விருப்பப்படி அல்லாமல், தானியங்கி முறையில் செயல்படும் Layer-B தானியங்கி தடுப்பு (Automatic Block) மூலம் சுரண்டல் தடுக்கப்படல்.</td></tr></tbody></table>",
          hasFilterableTable: true
        },
        {
          title: "<span class='framework-badge'>D</span> திட்டம் - பகுதி 2: அரச மட்டம், விநியோகம் மற்றும் ஜனாதிபதி கண்காணிப்பு",
          bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>அனுராதபுர ஞானம் மற்றும் உன்னத ஆட்சி கட்டமைப்பு:</b></p><div class='layout-grid'><div><p><b>Health & Logistics Loop:</b> மாவட்ட செயல்பாட்டு மையங்கள் ஊடாக போக்குவரத்து வலையமைப்பு (Logistics) முறைப்படுத்தப்படும். இடைத்தரகரின் பெளதீக தலையீடு அகற்றப்பட்டு, போக்குவரத்து ஒரு திறமையான சேவையாக இணைக்கப்படும்.</p><p><b>ஜனாதிபதி செயல்பாட்டு மையம்:</b> நாடு முழுவதினதும் உற்பத்தித் தரவுகள் மற்றும் விலைகள் ஜனாதிபதியின் கீழ் உள்ள பிரதான கட்டுப்பாட்டு மையத்திலிருந்து நேரலையாக (Live Monitoring) கண்காணிக்கப்படும்.</p><p><b>அனுராதபுர ஞானம் (குளங்கள் அமைப்பின் தொலைநோக்கு):</b> கடந்த காலத்தில் வறட்சியை முன்கூட்டியே கணித்து குளத்தின் அடியில் புதையல்களை சேமித்து வைத்தது போல, இந்த அமைப்பின் மூலம் அடுத்த 6 மாதங்களில் நாட்டில் பயிரிடப்படும் பயிர்களின் அளவு முன்கூட்டியே பகுப்பாய்வு செய்யப்படும். இதன் மூலம் ஒரே வகையான காய்கறிகளை நாடு முழுவதும் பயிரிட்டு விலை வீழ்ச்சியடையும் நெருக்கடி (Overproduction) தடுக்கப்படும்.</p><div class='quote-box'>\"துன் கல் தக்ம அமைப்பானது இடைத்தரகரை பலவந்தமாக அகற்றுவதில்லை. தொழில்நுட்பமானது அறத்தையும் ஒழுக்கத்தையும் பாதுகாக்கும் ஒரு பெளதீக வேலியாக செயல்படுகிறது.\"</div></div><div class='chart-wrapper'><canvas id='gdpGrowthChart'></canvas></div></div>",
          chartType: 'line',
          chartId: 'gdpGrowthChart'
        }
      ]
    }
  },
  {
    id: 'gatalu2',
    name: {
      si: 'ග්‍රාමීය ණය උගුල් තුරන් කිරීමේ ජාතික මාර්ග සිතියම',
      en: 'Rural Debt Traps Elimination Roadmap',
      ta: 'கிராமப்புற கடன் பொறிகள் ஒழிப்பு வரைபடம்'
    },
    headerText: {
      si: 'තුන්කල් දැක්ම | ග්‍රාමීය ණය උගුල් පද්ධතිමயமாக තුරන් කිරීමේ ජාතික මාර්ග සිතියම',
      en: 'Thun Kal Dekma | Roadmap for Systemic Elimination of Rural Debt Traps',
      ta: 'துன்கல் தெக்ம | கிராமப்புற கடன் பொறிகளை ஒழிப்பதற்கான தேசிய வரைபடம்'
    },
    searchPlaceholder: {
      si: 'පද්ධති සංරචක හෝ ක්‍රියාවලි සොයන්න...',
      en: 'Search components, technical frameworks or workflows...',
      ta: 'கூறுகள் அல்லது செயல்முறைகளைத் தேடுங்கள்...'
    },
    tableHeaders: {
      si: ['පද්ධතිමය මට්ටම', 'ව්‍යුහාත්මක යාන්ත්‍රණය', 'පුරවැසි / රාජ්‍ය ප්‍රතිඵලය'],
      en: ['Systemic Level', 'Structural Mechanism', 'Citizen / State Outcome'],
      ta: ['முறையான நிலை', 'கட்டமைப்பு வழிமுறை', 'குடிமகன் / அரசு விளைவு']
    },
    pageLabel: {
      si: 'පිටුව',
      en: 'Page',
      ta: 'பக்கம்'
    },
    slides: {
      si: [
        {
          title: "<span class='framework-badge'>A</span> ප්‍රශ්නය (The Problem): ක්ෂුද්‍ර මූල්‍ය ණය සහ ව්‍යුහාත්මක වහල්භාවය",
          bgImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>ග්‍රාමීය සමාජය වෙලාගෙන ඇති ප්‍රධානතම සමාජ-ආර්ථික පිළිකාව වන්නේ අවිධිමත් සහ සූරාකෑමේ ස්වරූපයක් ගත් ක්ෂුද්‍ර මූල්‍ය ණය උගුල්ය. මෙම ව්‍යුහාත්මක වහල්භාවයේ ප්‍රධාන ලක්ෂණ සහ බිහිසුණු ප්‍රතිඵල 3 මෙසේය:</p><ul class='styled-list'><li><b>සූරාකෑමේ ස්වභාවය:</b> 40% සිට 100% දක්වා වූ අසාධාරණ සහ අධික වාර්ෂික පොලී අනුපාතයන් හිතුමතේ පුරවැසියාගෙන් අය කිරීම.</li><li><b>ප්‍රජාව පීඩාවට පත්වීම:</b> සතිපතා වාරික ගෙවාගත නොහැකි වූ විට සිදුවන මානසික හිංසනය සහ දේපළ බලහත්කාරයෙන් අත්පත් කර ගැනීම නිසා පවුල් සංස්ථා මුළුමනින්ම බිඳවැටේ.</li><li><b>පද්ධතියේ පවතින රික්තය:</b> සාම්ප්‍රදායික බැංකු පද්ධතිය මඟින් දැඩි නිලධාරීවාදී ලේඛන ඉල්ලා සිටීම නිසා ග්‍රාමීය පුරවැසියාට වෙනත් විකල්පයක් ඉතිරි නොවේ.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B</span> හේතුව (The Causes): ණය උගුල නිර්මාණය වීමට බලපෑ මූලික සාධක",
          bgImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>මෙම ප්‍රශ්නය වසර ගණනාවක් තිස්සේ සාම්ප්‍රදායික පාලකයන් විසින් නොසලකා හරින ලද පද්ධතිමය දෝෂ (Systemic Defects) නිසා හටගෙන ඇත:</p><div class='layout-grid'><div class='chart-wrapper'><canvas id='debtVulnerabilityChart'></canvas></div><div><ul class='styled-list'><li><b>ස්ථාවර ආදායමක් නොමැතිකම:</b> දෛනික හෝ මාසික ස්ථාවර ආදායම් මාර්ග නොමැති වීම නිසා එදිනෙදා පරිභෝජන අවශ්‍යතා සඳහා පවා ණය වීමට සිදුවීම.</li><li><b>සහනදායී ණය පද්ධතියක රික්තය:</b> රාජ්‍ය මූල්‍ය ආයතනවල පවතින දැඩි නිලධාරීවාදය නිසා මිනිසුන් පහසුවෙන් ලබාගත හැකි සූරාකෑමේ ණය ජාලයන් වෙත යොමු වීම.</li><li><b>මූල්‍ය සාක්ෂරතාවය නොමැතිකම:</b> සංකීර්ණ පොලී ප්‍රකාශන සහ වැල් පොලී ක්‍රමවේදයන්ගේ සැබෑ බරපතලකම පිළිබඳ ග්‍රාමීය පුරවැසියා නිසි ලෙස දැනුවත් නොවීම.</li></ul></div></div>",
          chartType: 'radar',
          chartId: 'debtVulnerabilityChart'
        },
        {
          title: "<span class='framework-badge'>C</span> යහපත (Benefits of Resolution): ණය බරින් නිදහස් වීමේ පොදු ප්‍රශ්චාත් ප්‍රතිඵලය",
          bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>මෙම පද්ධතිමය දෝෂය ඩිජිටල් සහ තාක්ෂණික විනයක් හරහා නිවැරදි කිරීම තුළින් සමාජයට ලැබෙන සුවිශේෂී ප්‍රතිලාභ:</p><ul class='styled-list'><li><b>මානසික සුවය:</b> නිරන්තර බිය සහ පීඩනය තුරන් වී, බුද්ධිමය අවදිවීමට අත්‍යවශ්‍ය කරන සංසුන් මනස (Equanimity) පුරවැසියා තුළ ස්වයංක්‍රීයව නිර්මාණය වේ.</li><li><b>ග්‍රාමීය ප්‍රාග්ධනය ගම තුළම ඉතිරි වීම:</b> ගමේ ජනතාව උපයන මුදල් සූරාකන සමාගම්වලට නොගොස් ගම තුළම කැරකැවෙන බැවින් ග්‍රාමීය ආර්ථිකයේ මුදල් ප්‍රවේගය (Velocity of Wealth) වේගයෙන් පිබිදේ.</li><li><b>ශ්‍රම බලකාය සක්‍රීය වීම:</b> ණය බරින් මිරිකී සිටි ජනතාව නැවත රටේ සක්‍රීය නිෂ්පාදන ක්‍රියාවලියට (GDP) සිය උපරිම දායකත්වය ලබාදීම ආරම්භ කරයි.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>D</span> සැලසුම - 1 කොටස: පුරවැසි මට්ටම, ඩිජිටල් බැංකුකරණය සහ සහයෝගිතා අරමුදල",
          bgImage: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The Village Digital Hub සහ Trust Score යාන්ත්‍රණය:</b> 'තුන් කල් දැක්ම' 5 වන පරිච්ඡේදයට අනුව ක්‍රියාත්මක වන තාක්ෂණික ව්‍යුහය:</p><input type='text' id='tableFilterInput' class='table-filter' placeholder='පද්ධති සංරචක සොයන්න...'><table id='contentDataTable'><thead><tr><th>පද්ධතිමය මට්ටම</th><th>ව්‍යුහාත්මක යාන්ත්‍රණය</th><th>පුරවැසි / රාජ්‍ය ප්‍රතිඵලය</th></tr></thead><tbody><tr><td><b>The Village Digital Hub</b></td><td>සෑම පුරවැසියෙකුගේම දක්ෂතා, ණය බර සහ මූල්‍ය අවශ්‍යතා ඇතුළත් විනිවිදභාවයෙන් යුතු දත්ත පද්ධතියක් ගොඩනැඟීම.</td><td>ගමේ සම්පත් සහ සැබෑ අවශ්‍යතා නිරූපණය වන සවිස්තරාත්මක 'හැකියා සිතියමක්' (Capability Mapping) නිර්මාණය වීම.</td></tr><tr><td><b>Community Trust Loop</b></td><td>භෞතික ඇපකර වෙනුවට ගමේ පුරවැසියන් එකිනෙකා ඇපකරුවන් වන (Peer-to-Peer Trust) ඩිජිටල් ජාලයක් සෑදීම.</td><td>පුද්ගලයාගේ 'සමාජයීය විනය සහ හැකියා ලකුණු' (Trust Score) මූල්‍ය පහසුකම් සඳහා එකම පදනම කරගැනීම.</td></tr><tr><td><b>Layer-B විනයධර තාක්ෂණය</b></td><td>සියලුම මූල්‍ය ගනුදෙනු Layer-B මෘදුකාංගමය වැටට යටත් කර උපරිම පොලී සීමාවන් පද්ධතියෙන්ම පාලනය කිරීම.</td><td>සූරාකෑමේ පොලී අනුපාත පද්ධතිය මඟින් එසැණින් ස්වයංක්‍රීයව අවහිර කිරීම (Automatic Block).</td></tr></tbody></table>",
          hasFilterableTable: true
        },
        {
          title: "<span class='framework-badge'>D</span> සැලසුම - 2 කොටස: රාජ්‍ය විනය, සහන ණය සහ අනුරාධපුර ප්‍රඥාව",
          bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>ආදායම් මාර්ග සහතික කිරීම සහ උත්තරීතර පාලන ව්‍යුහය:</b></p><div class='layout-grid'><div><p><b>Digital Emergency Loop:</b> හදිසි සෞඛ්‍ය හෝ අධ්‍යාපන අවශ්‍යතාවලදී 0% පොලී සහිත සහන මූල්‍ය පහසුකම් (Micro-credits) තත්පර කිහිපයකින් දුරකථනය හරහා ලබාගත හැකි ඩිජිටල් පද්ධතියක් ක්‍රියාත්මක කිරීම.</p><p><b>Income Security:</b> Direct Market Link තාක්ෂණය හරහා නිෂ්පාදන සඳහා අතරමැදියන් තොරව සාධාරණ මිලක් ලබා දීමෙන් ණය වීමේ අවශ්‍යතාවය 80%කින් පහත හෙළීම.</p><p><b>අතීත අනුරාධපුර ප්‍රඥාව:</b> ජාතික ආර්ථිකයෙන් උපයන ලාභයෙන් කොටසක් 'ජාතික හදිසි පුනරුත්ථාපන අරමුදලක්' (National Risk Buffer) ලෙස වෙන් කර ආර්ථික කඩාවැටීම්වලට ලක්වන පුරවැසියන් සහනශීලීව පුනරුත්ථාපනය කිරීම.</p><div class='quote-box'>\"තුන් කල් දැක්ම සැලසුම තුළ, ක්ෂුද්‍ර මූල්‍ය ණය උගුල විනාශ කර දැමෙන්නේ පුරවැසියා සවිබල ගැන්වීම සහ Layer-B තාක්ෂණික විනය ඒකාබද්ධ කිරීමෙනි.\"</div></div><div class='chart-wrapper'><canvas id='capitalRetentionChart'></canvas></div></div>",
          chartType: 'line',
          chartId: 'capitalRetentionChart'
        }
      ],
      en: [
        {
          title: "<span class='framework-badge'>A</span> The Problem: Microfinance Debts and Structural Bondage",
          bgImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>The core socio-economic cancer consuming rural society is the informal, predatory network of microfinance debt traps.</p><ul class='styled-list'><li><b>Exploitative Nature:</b> Charging exorbitant annual interest rates ranging from 40% to 100% from vulnerable citizens.</li><li><b>Community Distress:</b> Failure to meet weekly quotas triggers severe psychological abuse, fracturing families.</li><li><b>Systemic Vacuum:</b> Because traditional banks demand rigid physical collateral, rural citizens have no alternative during sudden emergencies.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B</span> The Causes: Root Failure Points of the Debt Cycle",
          bgImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>This crisis stems directly from structural defects neglected by conventional governance models:</p><div class='layout-grid'><div class='chart-wrapper'><canvas id='debtVulnerabilityChart'></canvas></div><div><ul class='styled-list'><li><b>Lack of Stable Income:</b> Absent regular local income streams, rural citizens are forced into debt for basic consumption needs.</li><li><b>Absence of Concessional Credit:</b> Aggressive bureaucracy in regular banks pushes desperate citizens toward predatory networks.</li><li><b>Deficit in Financial Literacy:</b> Rural citizens remain unaware of the complex compound interest calculation mechanisms.</li></ul></div></div>",
          chartType: 'radar',
          chartId: 'debtVulnerabilityChart'
        },
        {
          title: "<span class='framework-badge'>C</span> Benefits of Resolution: Post-Correction Landscape",
          bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>Correcting this flaw via continuous digital discipline unlocks outstanding advantages for the entire economy:</p><ul class='styled-list'><li><b>Psychological Relief:</b> Eliminating existential fear constructs the absolute peace of mind (Equanimity) required for community cohesion.</li><li><b>Rural Capital Retention:</b> Wealth circulates within the local economy rather than being siphoned off, accelerating the Velocity of Wealth.</li><li><b>Labor Force Revitalization:</b> Citizens return as active contributors to the national GDP production process.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>D</span> The Action Plan - Part 1: Citizen Empowerment & Trust Loops",
          bgImage: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The Village Digital Hub and the Trust Score Engine:</b> Operational response designed under Chapter 5 of 'Three-Way Vision':</p><input type='text' id='tableFilterInput' class='table-filter' placeholder='Search components...'><table id='contentDataTable'><thead><tr><th>Systemic Level</th><th>Structural Mechanism</th><th>Citizen / State Outcome</th></tr></thead><tbody><tr><td><b>The Village Digital Hub</b></td><td>Compiling an integrated data profile logging unique skills and debt profiles of every citizen.</td><td>Creation of an authenticated 'Capability Map' offering absolute transparency.</td></tr><tr><td><b>Community Trust Loop</b></td><td>Replacing physical collateral with a Peer-to-Peer digital trust matrix among local producers.</td><td>Utilizing a citizen's 'Trust Score' as the sole foundation for acquiring credit lines.</td></tr><tr><td><b>Layer-B Disciplinary Tech</b></td><td>Subjecting financial transactions to the Layer-B code-driven compliance fence embedded in the Central Bank system.</td><td>Automatically blocking financial flows instantly if an institution breaches the Ethical Interest Limit.</td></tr></tbody></table>",
          hasFilterableTable: true
        },
        {
          title: "<span class='framework-badge'>D</span> The Action Plan - Part 2: State Discipline & Anuradhapura Wisdom",
          bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>Securing Income Streams and Supreme State Calibration:</b></p><div class='layout-grid'><div><p><b>Digital Emergency Loop:</b> Deploying instant micro-credits at 0% interest rates directly via mobile phones within seconds during emergencies.</p><p><b>Income Security:</b> Direct Market Link tech guarantees maximum pricing for local producers, causing borrowing requirements to plummet by 80%.</p><p><b>Anuradhapura Wisdom:</b> Routing a percentage of national revenue to a 'National Risk Buffer' to provide skill-based rehabilitation for citizens undergoing economic shock.</p><div class='quote-box'>\"Under the Three-Way Vision framework, the microfinance debt trap is dismantled by integrating citizen empowerment with Layer-B technical discipline.\"</div></div><div class='chart-wrapper'><canvas id='capitalRetentionChart'></canvas></div></div>",
          chartType: 'line',
          chartId: 'capitalRetentionChart'
        }
      ],
      ta: [
        {
          title: "<span class='framework-badge'>A</span> பிரச்சினை: மைக்ரோஃபோனான்ஸ் கடன் மற்றும் கட்டமைப்பு அடிமைத்தனம்",
          bgImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>கிராமப்புற சமூகத்தை உலுக்கி வரும் முக்கிய சமூக-பொருளாதாரப் புற்றுநோய் சுரண்டல் மைக்ரோஃபோனான்ஸ் கடன் பொறிகளாகும்.</p><ul class='styled-list'><li><b>சுரண்டல் தன்மை:</b> பாதிக்கப்படக்கூடிய குடிமக்களிடம் 40% முதல் 100% வரை அதிகப்படியான வட்டி விகிதங்களை தன்னிச்சையாக வசூலித்தல்.</li><li><b>சமூக துயரம்:</b> வாராந்திர தவணைகளை செலுத்தத் தவறும்போது கடுமையான உளவியல் ரீதியான துன்புறுத்தல் ஏற்பட்டு, குடும்பங்கள் சிதைந்து போதல்.</li><li><b>முறையான வெற்றிடம்:</b> பாரம்பரிய வங்கிகள் கடுமையான பிணைகளைக் கோருவதால், அவசர காலங்களில் கிராமப்புற மக்களுக்கு வேறு வழியில்லாமல் போகிறது.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B</span> காரணங்கள்: கடன் சுழற்சியின் அடிப்படை தோல்விப் புள்ளிகள்",
          bgImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>இந்த நெருக்கடியானது பல தசாப்தங்களாக வழக்கமான நிர்வாக மாதிரிகளால் புறக்கணிக்கப்பட்ட முறையான குறைபாடுகளிலிருந்து நேரடியாக எழுகிறது:</p><div class='layout-grid'><div class='chart-wrapper'><canvas id='debtVulnerabilityChart'></canvas></div><div><ul class='styled-list'><li><b>நிலையான வருமானம் இல்லாமை:</b> முறையான உள்ளூர் வருமான ஆதாரங்கள் இல்லாததால், மக்கள் அன்றாட நுகர்வுத் தேவைகளுக்காகவும் கடன் வாங்க வேண்டிய கட்டாயத்தில் உள்ளனர்.</li><li><b>சலுகை பெற்ற கடன் இல்லாமை:</b> அரசு நிதி நிறுவனங்களில் உள்ள கடுமையான அதிகாரத்துவ தாமதங்கள் மக்களை சுரண்டல் கடன் நெட்வொர்க்குகளை நோக்கி தள்ளுகின்றன.</li><li><b>நிதி கல்வியறிவு பற்றாக்குறை:</b> கிராமப்புற குடிமக்களுக்கு கூட்டு வட்டி கணக்கீட்டு முறைகளின் உண்மையான தீவிரம் பற்றி இன்னும் தெரியவில்லை.</li></ul></div></div>",
          chartType: 'radar',
          chartId: 'debtVulnerabilityChart'
        },
        {
          title: "<span class='framework-badge'>C</span> தீர்வினால் ஏற்படும் நன்மைகள்: திருத்தத்திற்குப் பிந்தைய நிலப்பரப்பு",
          bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>டிஜிட்டல் ஒழுக்கத்தின் மூலம் இந்த குறைபாட்டை சரிசெய்வது ஒட்டுமொத்த பொருளாதாரத்திற்கும் சிறந்த நன்மைகளைத் திறக்கிறது:</p><ul class='styled-list'><li><b>உளவிவியல் நிவாரணம்:</b> அச்சுறுத்தல்களை நீக்குவது சமூக ஒற்றுமைக்கு தேவையான முழுமையான மன அமைதியை (Equanimity) உருவாக்குகிறது.</li><li><b>கிராமப்புற மூலதனத் தக்கவைப்பு:</b> கிராமங்களில் உருவாக்கப்படும் செல்வம் உள்ளூர் பொருளாதாரத்திற்குள்ளேயே சுழன்று, செல்வத்தின் வேகத்தை (Velocity of Wealth) அதிகரிக்கிறது.</li><li><b>தொழிலாளர் படை புத்துயிர் பெறல்:</b> கடனில் மூழ்கியிருந்த குடிமக்கள் மீண்டும் தேசிய மொத்த உள்நாட்டு உற்பத்தி (GDP) உற்பத்தி செயல்பாட்டில் தீவிர பங்களிப்பாளர்களாக மாறுகிறார்கள்.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>D</span> செயல் திட்டம் - பகுதி 1: குடிமக்கள் அதிகாரம் மற்றும் சமூக நம்பிக்கை சுழற்சிகள்",
          bgImage: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The Village Digital Hub மற்றும் Trust Score எஞ்சின்:</b> 'மூன்று வழிப் பார்வை' (Three-Way Vision) அத்தியாயம் 5 இன் கீழ் வடிவமைக்கப்பட்ட செயல்பாட்டு பதில்:</p><input type='text' id='tableFilterInput' class='table-filter' placeholder='கூறுகளைத் தேடுங்கள்...'><table id='contentDataTable'><thead><tr><th>முறையான நிலை</th><th>கட்டமைப்பு வழிமுறை</th><th>குடிமகன் / அரசு விளைவு</th></tr></thead><tbody><tr><td><b>The Village Digital Hub</b></td><td>ஒவ்வொரு குடிமகனின் தனித்துவமான திறன்கள் மற்றும் கடன் விவரங்களை பதிவு செய்யும் ஒருங்கிணைந்த தரவு சுயவிவரத்தை உருவாக்குதல்.</td><td>உள்ளூர் வளங்கள் மற்றும் தேவைகள் பற்றிய முழுமையான வெளிப்படைத்தன்மையை வழங்கும் 'திறன் வரைபடம்' உருவாக்கம்.</td></tr><tr><td><b>Community Trust Loop</b></td><td>பௌதீக பிணைகளுக்கு பதிலாக உள்ளூர் உற்பத்தியாளர்களிடையே ஒருவருக்கொருவர் ஆதரவளிக்கும் டிஜிட்டல் நம்பிக்கை மேட்ரிக்ஸை உருவாக்குதல்.</td><td>கடன் பெறுவதற்கான ஒரே அடிப்படையாக ஒரு குடிமகனின் சமூக ஒழுக்கம் மற்றும் 'Trust Score' ஐப் பயன்படுத்துதல்.</td></tr><tr><td><b>Layer-B ஒழுங்குமுறை தொழில்நுட்பம்</b></td><td>மத்திய வங்கி அமைப்பில் உட்பொதிக்கப்பட்ட Layer-B குறியீடு சார்ந்த இணக்க வேலிக்கு நிதி பரிவர்த்தனைகளை உட்படுத்தல்.</td><td>ஒரு நிறுவனம் நெறிமுறை வட்டி வரம்பை மீற முயன்றால், நிதி ஓட்டங்களை உடனடியாக தானாகவே தடுத்தல்.</td></tr></tbody></table>",
          hasFilterableTable: true
        },
        {
          title: "<span class='framework-badge'>D</span> செயல் திட்டம் - பகுதி 2: மாநில ஒழுக்கம் மற்றும் அனுராதபுர ஞானம்",
          bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>வருமான வழிகளைப் பாதுகாத்தல் மற்றும் உச்ச மாநில அளவுத்திருத்தம்:</b></p><div class='layout-grid'><div><p><b>Digital Emergency Loop:</b> அவசர மருத்துவ அல்லது கல்வித் தேவைகளின் போது 0% வட்டி விகிதத்தில் உடனடி மைக்ரோ-கெடிட்களை மொபைல் போன்கள் மூலம் நொடிகளில் வழங்குதல்.</p><p><b>Income Security:</b> Direct Market Link தொழில்நுட்பம் உள்ளூர் உற்பத்தியாளர்களுக்கு இடைத்தரகர்கள் இல்லாமல் அதிகபட்ச விலையை உத்தரவாதம் செய்கிறது, இதனால் கடன் வாங்கும் தேவை 80% குறைகிறது.</p><p><b>அனுராதபுர ஞானம்:</b> தேசிய வருவாயில் ஒரு பகுதியை 'தேசிய அவசரக்கால மறுவாழ்வு நிதியத்திற்கு' (National Risk Buffer) திருப்பி விற்று, பொருளாதார அதிர்ச்சிக்குள்ளாகும் குடிமக்களுக்கு திறன் அடிப்படையிலான மறுவாழ்வு அளித்தல்.</p><div class='quote-box'>\"மூன்று வழிப் பார்வை கட்டமைப்பின் கீழ், மைக்ரோஃபோனான்ஸ் கடன் பொறியானது குடிமக்கள் அதிகாரம் மற்றும் Layer-B தொழில்நுட்ப ஒழுக்கத்தை ஒருங்கிணைப்பதன் மூலம் தகர்க்கப்படுகிறது.\"</div></div><div class='chart-wrapper'><canvas id='capitalRetentionChart'></canvas></div></div>",
          chartType: 'line',
          chartId: 'capitalRetentionChart'
        }
      ]
    }
  },
  {
    id: 'gatalu3',
    name: {
      si: 'මහා පද්ධතිමය සැලසුම් වාර්තාව',
      en: 'Systemic Blueprint & Master Plan',
      ta: 'முறையியல் மற்றும் கட்டமைப்பு அறிக்கை'
    },
    headerText: {
      si: 'තුන්කල් දැක්ම | පද්ධතිමය සැලසුම් සහ ව්‍යුහාත්මක මහා සැලැස්ම',
      en: 'Thun Kal Dekma | Systemic Blueprint & Structural Master Plan',
      ta: 'துன்கல் தெக்ம | முறையியல் திட்ட மற்றும் கட்டமைப்பு அறிக்கை'
    },
    searchPlaceholder: {
      si: 'පද්ධති සංරචක හෝ ක්‍රියාවලි සොයන්න...',
      en: 'Search system components or processes...',
      ta: 'கூறுகள் அல்லது செயல்முறைகளைத் தேடுங்கள்...'
    },
    tableHeaders: {
      si: ['ක්‍රියාකාරී මට්ටම', 'තාක්ෂණික / ව්‍යුහාත්මක යාන්ත්‍රණය', 'පද්ධතිමය ප්‍රතිඵලය'],
      en: ['Operational Level', 'Technical / Structural Mechanism', 'Systemic Outcome'],
      ta: ['செயல்பாட்டு மட்டம்', 'தொழில்நுட்ப / கட்டமைப்பு வழிமுறை', 'முறையியல் முடிவு']
    },
    pageLabel: {
      si: 'පිටුව',
      en: 'Page',
      ta: 'பக்கம்'
    },
    slides: {
      si: [
        {
          title: "<span class='framework-badge'>A</span> ප්‍රශ්නය 01: අතරමැදියන්ගේ ව්‍යුහාත්මක සූරාකෑම",
          bgImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>ශ්‍රී ලංකාවේ ග්‍රාමීය කෘෂිකාර්මික සහ ව්‍යවසායකත්ව ක්ෂේත්‍රය මුහුණ දෙන දැවැන්තම පද්ධතිමය රික්තය වන්නේ නිෂ්පාදකයා සහ අවසාන පාරිභෝගිකයා අතර පවතින අසාධාරණ අතරමැදි ජාලයයි. මෙමඟින් පාර්ශව දෙකම එකසේ පීඩාවට පත් වේ:</p><ul class='styled-list'><li><b>ගොවියා සහ නිෂ්පාදකයා අගාධයට යාම:</b> මාස ගණනාවක් තිස්සේ දහඩිය හෙළා, ප්‍රාග්ධනය යොදවා කරන නිෂ්පාදනයට ස්ථාවර හෝ සාධාරණ මිලක් ගොවියාට නොලැබේ. අස්වැන්න නෙළන කාලයට මිල හිතාමතාම පහත දැමීමට අතරමැදියා කටයුතු කරයි.</li><li><b>පාරිභෝගිකයා අධික මිලක් ගෙවීම:</b> ගමෙන් රුපියල් 50කට ගන්නා එළවළු හෝ නිෂ්පාදනය නගරයේ පාරිභෝගිකයා අතට පත්වන්නේ රුපියල් 250කය.</li><li><b>ආර්ථික නිදහස අහිමි වීම:</b> මෙමඟින් දළ දේශීය නිෂ්පාදිතයට (GDP) උපරිම දායකත්වයක් දිය හැකි ග්‍රාමීය ව්‍යවසායකයා සදාකාලික ණයකරුවෙකු බවට පත් වේ.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B</span> හේතුව සහ යහපත: පද්ධතියේ පවතින රික්තයන් සහ නිවැරදි වීමේ ප්‍රතිලාභ",
          bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>මෙම ප්‍රශ්නය වසර ගණනාවක් තිස්සේ පාලකයන් විසින් නොසලකා හරින ලද පද්ධතිමය දෝෂ (Systemic Defects) නිසා හටගෙන ඇත. එය නිවැරදි කිරීමෙන් පොදු යහපත උදාවේ:</p><div class='layout-grid'><div class='chart-wrapper'><canvas id='marketAsymmetryChart'></canvas></div><div><ul class='styled-list'><li><b>තොරතුරු රික්තය (Information Asymmetry):</b> සැබෑ වෙළඳපොළ ඉල්ලුම හෝ නියමිත මිල ගණන් පිළිබඳ නිවැරදි දත්ත නිෂ්පාදකයා සතුව නැත. එම තොරතුරු ඒකාධිකාරය පවතින්නේ අතරමැදියා සතුවය.</li><li><b>මධ්‍යගත භෞතික වෙළඳපොළ මත යැපීම:</b> සියලුම නිෂ්පාදන දඹුල්ල හෝ මීගොඩ වැනි භෞතික ආර්ථික මධ්‍යස්ථාන වෙත ප්‍රවාහනය කළ යුතුය.</li><li><b>කායික සහ මානසික සහනය (Equanimity):</b> ගොවියාට තමන්ගේ මහන්සියට සරිලන සෘජු ආදායමක් ලැබෙන විට ණය බරින් නිදහස් වී, නිදහස් මනසක් සහිතව නිෂ්පාදන ධාරිතාව සහ ග්‍රාමීය GDP අගය ඉහළ නැංවිය හැකිය.</li></ul></div></div>",
          chartType: 'radar',
          chartId: 'marketAsymmetryChart'
        },
        {
          title: "<span class='framework-badge'>D</span> සැලසුම 01: ග්‍රාමීය ඩිජිටල් කේන්ද්‍රස්ථානය සහ Layer-B විනය වැට",
          bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The Village Digital Hub සහ ප්‍රායෝගික යාන්ත්‍රණය:</b> 'තුන් කල් දැක්ම' මඟින් තාක්ෂණය සහ විනය මුසු කළ ව්‍යුහය:</p><input type='text' id='tableFilterInput' class='table-filter' placeholder='සොයන්න...'><table id='contentDataTable'><thead><tr><th>ක්‍රියාකාරී මට්ටම</th><th>තාක්ෂණික / ව්‍යුහාත්මක යාන්ත්‍රණය</th><th>පද්ධතිමය ප්‍රතිඵලය</th></tr></thead><tbody><tr><td><b>පුරවැසි මට්ටම (දින 7ක වැඩමුළුව)</b></td><td>සෑම වසමකම ස්වේච්ඡා කණ්ඩායම් හරහා ගොවීන් සහ නිෂ්පාදන ධාරිතාව පිළිබඳ දත්ත රැස් කිරීම.</td><td>සෑම ග්‍රාම සේවා වසමකම සවිස්තරාත්මක 'හැකියා සිතියමක්' (Capability Map) නිර්මාණය වීම.</td></tr><tr><td><b>The Village Digital Hub</b></td><td>සෑම වසමකටම ආවේණික ඩිජිටල් පද්ධතියක්. ගොවියා බෝග ප්‍රමාණය සහ අස්වැන්න ලැබෙන දිනය ඇතුළත් කිරීම.</td><td>අතරමැදියා සතුව තිබූ තොරතුරු ඒකාධිකාරය බිඳවැටී දත්ත පාරදෘශ්‍යභාවය තහවුරු වීම.</td></tr><tr><td><b>Layer-B විනයධර තාක්ෂණය</b></td><td>පද්ධතිය තුළ මිල සූරාකෑමක් හෝ දූෂිත මූල්‍ය ගනුදෙනුවක් සිදුවීමට උත්සාහ කළහොත් 'විනයධර තර්කනය' මඟින් එය එසැණින් අවහිර කිරීම.</td><td>පුද්ගල අභිමතය මත නොව ස්වයංක්‍රීයව සිදුවන Layer-B ස්වයංක්‍රීය අවහිරය (Automatic Block) මඟින් සූරාකෑම වැළකීම.</td></tr></tbody></table>",
          hasFilterableTable: true
        },
        {
          title: "<span class='framework-badge'>A</span> ප්‍රශ්නය 02: ණය උගුල් සහ CRIB අසාධුගත කිරීමේ මර්දනය",
          bgImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>වැටුණු මිනිසා වළපල්ලට ඇද දමන අනුකම්පා විරහිත වත්මන් පද්ධතිය:</b> ව්‍යාපාරයක් පාඩු වී, ආර්ථික බලපෑම් හමුවේ ණය වාරිකයක් අතපසු වූ සැණින් අද පද්ධතිය කරන්නේ එම පුරවැසියාව CRIB (ණය තොරතුරු කාර්යාංශය) හරහා 'Blacklist' (අසාධුගත) කිරීමයි.</p><ul class='styled-list'><li><b>මූල්‍ය මරණ දණ්ඩනය:</b> Blacklist වූ පසු ඔහුට කිසිදු නීත්‍යානුකූල බැංකුවකින් නැවත ණයක් හෝ මූල්‍ය පහසුකමක් ලබාගත නොහැකි වේ.</li><li><b>විකල්පයන් අහිමි කිරීම:</b> නැඟී සිටීමට ප්‍රාග්ධනයක් නොමැති වූ විට, ඔහුව බලහත්කාරයෙන්ම 40%-100% දක්වා අධික පොලී අය කරන ක්ෂුද්‍ර මූල්‍ය උගුල් හෝ නීති විරෝධී ආර්ථිකයකට තල්ලු කරනු ලබයි.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B & C</span> හේතු, යහපත සහ අනුරාධපුර ප්‍රඥාවේ අවදානම් කළමනාකරණය",
          bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>නම්‍යශීලී නොවන යාන්ත්‍රික නීති නිසා මිනිසුන් සියදිවි නසාගැනීම් දක්වා දුරදිග යයි. වැටුණු මිනිසා තැලීම වෙනුවට ඔහුව නැඟිටුවීමෙන් රටට විශාල ආර්ථික ශක්තියක් ලැබේ:</p><div class='layout-grid'><div><ul class='styled-list'><li><b>පරිණත ව්‍යවසායක පරපුරක්:</b> ව්‍යාපාරයක් කර අසාර්ථක වූ මිනිසා යනු වටිනා 'පාඩම්' ඉගෙන ගත් අයෙකි. ඔහුව කොන් කරනවා වෙනුවට නැවත නැඟිටුවීමෙන්, රටට වඩාත් පරිණත ව්‍යවසායකයන් පිරිසක් (Resilient Entrepreneurs) දළ දේශීය නිෂ්පාදිතයට (GDP) දායක කරගත හැක.</li><li><b>සංසුන් මනස (Equanimity):</b> බිය, සැකය සහ ණය බරින් මිරිකී අකර්මණ්‍ය වූ ජනතාව නිදහස් මනසක් සහිතව නැවත රටේ සක්‍රීය නිෂ්පාදන ක්‍රියාවලියට දායක වේ.</li></ul></div><div class='chart-wrapper'><canvas id='cribImpactChart'></canvas></div></div>",
          chartType: 'bar',
          chartId: 'cribImpactChart'
        },
        {
          title: "<span class='framework-badge'>D</span> සැලසුම 02: White-mapping සහ ව්‍යාපාරික පණගැන්වීමේ ලූපය",
          bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>CRIB මර්දනය වෙනුවට 'පුනරුත්ථාපන සහ ප්‍රාග්ධන සහයෝගිතා' ජාතික මාර්ග සිතියම:</b></p><div class='layout-grid'><div><p><b>White-mapping (හැකියා ප්‍රතිස්ථාපනය):</b> සාම්ප්‍රදායික කොන් කරන CRIB ක්‍රමය වෙනුවට, Layer-B හරහා ක්‍රියාත්මක වන 'කුසලතා සහ සදාචාර ලකුණු පද්ධතියක්' (Talent & Integrity Score) හඳුන්වා දේ. පුරවැසියාගේ දක්ෂතා සහ වත්කම් නැවත සිතියම්ගත කරයි.</p><p><b>Business Resuscitation Loop:</b> රටේ පොදු ආර්ථික බලපෑමක් හෝ ස්වභාවික විපතක් සිදුවන අවස්ථාවලදී, Layer-B මෘදුකාංගමය වැට මඟින් සියලුම ව්‍යාපාරිකයන්ගේ ණය වාරික ස්වයංක්‍රීයව අත්හිටුවනු ලබයි (Automatic Freeze).</p><p><b>නැවත ඇරඹුම් ප්‍රාග්ධනය (Restart Capital):</b> දින 21ක ප්‍රායෝගික පුහුණුවෙන් පසු, කිසිදු භෞතික ඇපයකින් තොරව, 0% පොලී පදනම මත 'නැවත ඇරඹුම් ප්‍රාග්ධනයක්' ජනාධිපති මෙහෙයුම් මධ්‍යස්ථානය සෘජුවම ඔහුගේ ඩිජිටල් ගිණුමට මුදා හරී. මෙය පෝෂණය කරන්නේ <b>ජාතික පුරවැසි පුනරුත්ථාපන අරමුදල (National Citizen Buffer Fund)</b> මඟිනි.</p></div><div class='chart-wrapper'><canvas id='gdpGrowthChart'></canvas></div></div>",
          chartType: 'line',
          chartId: 'gdpGrowthChart'
        }
      ],
      en: [
        {
          title: "<span class='framework-badge'>A</span> Problem 01: Structural Exploitation by Middlemen",
          bgImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>The greatest systemic void faced by Sri Lanka's rural agricultural and entrepreneurial sectors is the unfair intermediary network existing between the producer and the final consumer. This inflicts equal hardship on both parties:</p><ul class='styled-list'><li><b>Plight of the Farmer and Producer:</b> Farmers do not receive a stable or fair price for their production despite sweating and investing capital for months. The middleman deliberately drives down prices during harvest seasons.</li><li><b>Consumer Pays Exorbitant Prices:</b> Vegetables or products purchased from the village for LKR 50 reach the urban consumer at LKR 250.</li><li><b>Loss of Economic Freedom:</b> This keeps the rural entrepreneur, who could maximally contribute to the Gross Domestic Product (GDP), trapped as a perpetual debtor.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B</span> Causes and Benefits 01: Eradicating Asymmetry & Restoring Equanimity",
          bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>This problem is caused by systemic defects ignored by rulers for years. Solving it yields the common good:</p><div class='layout-grid'><div class='chart-wrapper'><canvas id='marketAsymmetryChart'></canvas></div><div><ul class='styled-list'><li><b>Information Asymmetry:</b> Rural producers lack accurate data regarding real urban market demand. The monopoly over this information remains with the middleman.</li><li><b>Dependence on Centralized Physical Markets:</b> All produce must be transported to physical economic centers like Dambulla.</li><li><b>Mental Peace (Equanimity):</b> Receiving direct matching income lets farmers break free from debt, increasing GDP with peace of mind.</li></ul></div></div>",
          chartType: 'radar',
          chartId: 'marketAsymmetryChart'
        },
        {
          title: "<span class='framework-badge'>D</span> Action Plan 01: The Village Digital Hub and Layer-B Disciplinary Fence",
          bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The Village Digital Hub & Practical Framework:</b> How 'Three-Way Vision' infuses technology with discipline:</p><input type='text' id='tableFilterInput' class='table-filter' placeholder='Search...'><table id='contentDataTable'><thead><tr><th>Operational Level</th><th>Technical / Structural Mechanism</th><th>Systemic Outcome</th></tr></thead><tbody><tr><td><b>Citizen Level (7-Day Workshop)</b></td><td>Gathering data on farmers and production capacities via volunteer groups in every division.</td><td>Creation of a detailed localized 'Capability Map'.</td></tr><tr><td><b>The Village Digital Hub</b></td><td>A unique digital portal for each division. Farmers log crop quantities and harvest dates.</td><td>The information monopoly of middlemen is shattered.</td></tr><tr><td><b>Layer-B Disciplinary Tech</b></td><td>If any price exploitation or corrupt financial transactions are attempted, the built-in logic blocks it instantly.</td><td>Exploitation is averted via the automatic Layer-B block, independent of human discretion.</td></tr></tbody></table>",
          hasFilterableTable: true
        },
        {
          title: "<span class='framework-badge'>A</span> Problem 02: Debt Traps & Draconian CRIB Blacklisting",
          bgImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The merciless current system that pushes fallen citizens into ruin:</b> Once a business faces a setback and misses an installment, the system blacklists them via CRIB.</p><ul class='styled-list'><li><b>Financial Death Sentence:</b> Once blacklisted, citizens are locked out of all legal banking lines. Traditional finance crushes the fallen instead of supporting them.</li><li><b>Forced Into Sub-prime Traps:</b> Devoid of restart capital, citizens are forced into 40%-100% microfinance traps or illegal shadow economies.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B & C</span> Causes & Benefits 02: Salvaging the Resilient Entrepreneur",
          bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>Rigid mechanical laws push citizens to suicide. Salvaging instead of crushing them brings immense economic power back to the country:</p><div class='layout-grid'><div><ul class='styled-list'><li><b>Resilient Entrepreneurs:</b> A citizen who failed has learned invaluable lessons. Re-empowering them feeds seasoned talent back into the national GDP.</li><li><b>Equanimity:</b> Citizens freed from debt fear actively contribute to production.</li></ul></div><div class='chart-wrapper'><canvas id='cribImpactChart'></canvas></div></div>",
          chartType: 'bar',
          chartId: 'cribImpactChart'
        },
        {
          title: "<span class='framework-badge'>D</span> Action Plan 02: White-mapping & Business Resuscitation Loop",
          bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>Replacing CRIB oppression with the national roadmap for rehabilitation and capital cooperation:</b></p><div class='layout-grid'><div><p><b>White-mapping:</b> Introducing a 'Talent & Integrity Score' via Layer-B to map and restore capabilities instead of traditional CRIB blacklisting.</p><p><b>Business Resuscitation Loop:</b> Automatically freezing debt installments (Automatic Freeze) via the Layer-B fence during national shocks or natural disasters.</p><p><b>Restart Capital:</b> Directly releasing 0%-interest capital from the <b>National Citizen Buffer Fund</b> into the citizen's digital account after a 21-day practical training module.</p></div><div class='chart-wrapper'><canvas id='gdpGrowthChart'></canvas></div></div>",
          chartType: 'line',
          chartId: 'gdpGrowthChart'
        }
      ],
      ta: [
        {
          title: "<span class='framework-badge'>A</span> பிரச்சினை 01: இடைத்தரகர்களின் வ්‍යூහාත්මක சுரண்டல்",
          bgImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>இலங்கையின் கிராமப்புற விவசாய மற்றும் தொழில்முனைவோர் துறை எதிர்கொள்ளும் மிகப்பெரிய முறையியல் வெற்றிடம் உற்பத்தியாளருக்கும் இறுதி நுகர்வோருக்கும் இடையில் நிலவும் நியாயமற்ற இடைத்தரகர் வலையமைப்பாகும். இதனால் இரு தரப்பினரும் சமமாக பாதிக்கப்படுகின்றனர்:</p><ul class='styled-list'><li><b>விவசாயியும் உற்பத்தியாளரும் அதலபாதாளத்திற்குச் செல்லல்:</b> உற்பத்திகளுக்கு விவசாயிக்கு நிலையான அல்லது நியாயமான விலை கிடைப்பதில்லை. அறுவடை காலத்தில் விலையை இடைத்தரகர் திட்டமிட்டுக் குறைக்கிறார்.</li><li><b>நுகர்வோர் அதிக விலை செலுத்த வேண்டியிருத்தல்:</b> கிராமத்தில் 50 ரூபாய்க்கு வாங்கப்படும் காய்கறி, நுகர்வோரைச் சென்றடையும் போது 250 ரூபாயாக மாறுகிறது.</li><li><b>பொருளாதார சுதந்திரம் இழக்கப்படல்:</b> இதன் மூலம் மொத்த உள்நாட்டு உற்பத்திக்கு (GDP) அதிகபட்ச பங்களிப்பை வழங்கக்கூடிய கிராமப்புற தொழில்முனைவோர் நிரந்தர கடனாளியாக மாறுகிறார்.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B</span> காரணமும் நன்மையும்: அமைப்பில் உள்ள வெற்றிடங்கள் மற்றும் சீரமைப்பின் நன்மைகள்",
          bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>இப்பிரச்சினை முறையியல் குறைபாடுகளால் ஏற்பட்டுள்ளது. இதனை சரிசெய்வதால் பொது நன்மை கிடைக்கும்:</p><div class='layout-grid'><div class='chart-wrapper'><canvas id='marketAsymmetryChart'></canvas></div><div><ul class='styled-list'><li><b>தகவல் வெற்றிடம் (Information Asymmetry):</b> சந்தை தேவை அல்லது விலைகள் பற்றிய தரவுகள் கிராமப்புற உற்பத்தியாளரிடம் இல்லை. அந்தத் தகவல் ஏகபோகம் இடைத்தரகரிடமே உள்ளது.</li><li><b>மத்தியஸ்த பெளதீக சந்தைகளில் தங்கியிருத்தல்:</b> அனைத்து உற்பத்திகளும் தம்புள்ளை போன்ற பெளதீக மையங்களுக்கு கொண்டு செல்லப்பட வேண்டும்.</li><li><b>மன அமைதி (Equanimity):</b> விவசாயிக்கு உழைப்புக்கேற்ற நேரடி வருமானம் கிடைக்கும் போது, அவர் கடன் சுமையிலிருந்து விடுபட்டு உற்பத்தியை அதிகரிக்க முடியும்.</li></ul></div></div>",
          chartType: 'radar',
          chartId: 'marketAsymmetryChart'
        },
        {
          title: "<span class='framework-badge'>D</span> திட்டம் 01: கிராமப்புற டிஜிட்டல் மையம் மற்றும் Layer-B ஒழுக்கவியல் தடுப்பு வேலி",
          bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>The Village Digital Hub மற்றும் நடைமுறை வழிமுறை:</b> 'துன் கல் தக்ம' தொழில்நுட்பம் மற்றும் ஒழுக்கத்தை கலந்த தீர்வு கட்டமைப்பு:</p><input type='text' id='tableFilterInput' class='table-filter' placeholder='தேடுங்கள்...'><table id='contentDataTable'><thead><tr><th>செயல்பாட்டு மட்டம்</th><th>தொழில்நுட்ப / கட்டமைப்பு வழிமுறை</th><th>முறையியல் முடிவு</th></tr></thead><tbody><tr><td><b>குடிமகன் மட்டம் (7 நாட்கள் பயிலரங்கு)</b></td><td>விவசாயிகள் மற்றும் உற்பத்தித் திறன் பற்றிய தரவுகளை சேகரித்தல்.</td><td>விரிவான 'திறன் வரைபடம்' (Capability Map) உருவாக்கப்படல்.</td></tr><tr><td><b>The Village Digital Hub</b></td><td>ஒவ்வொரு பிரிவிற்கும் உரிய டிஜிட்டல் அமைப்பு. விவசாயி அறுவடை தேதியை அமைப்பில் உள்ளீடு செய்தல்.</td><td>இடைத்தரகரிடம் இருந்த தகவல் ஏகபோகம் உடைக்கப்படல்.</td></tr><tr><td><b>Layer-B ஒழுக்கவியல் தொழில்நுட்பம்</b></td><td>விலை சுரண்டல் முயற்சிக்கப்பட்டால், 'ஒழக்கவியல் தர்க்கம்' மூலம் அது தடுக்கப்படும்.</td><td>தானியங்கி முறையில் செயல்படும் Layer-B தானியங்கி தடுப்பு மூலம் சுரண்டல் தடுக்கப்படல்.</td></tr></tbody></table>",
          hasFilterableTable: true
        },
        {
          title: "<span class='framework-badge'>A</span> பிரச்சினை 02: கடன் பொறிகள் மற்றும் CRIB அச்சுறுத்தல்",
          bgImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>வீழ்ந்த குடிமகனை மேலும் அழிக்கும் தற்போதைய இரக்கமற்ற வங்கி முறைமை:</b> வ්‍යාපාරයක් நஷ்டமடைந்து ණය වාරිකයක් தவறினால் CRIB மூலம் அபாதுகாக்கப்படுகிறது.</p><ul class='styled-list'><li><b>நிதி மரண தண்டனை:</b> பிளாக்லிஸ்ட் செய்யப்பட்ட பின் சட்டபூர்வ வங்கிகளில் மீண்டும் கடன் வசதிகள் பெற முடியாது.</li><li><b>சலுகையற்ற நிலைக்கு தள்ளப்படல்:</b> மூலதனம் இன்றி, மக்கள் 40%-100% நுண்நிதி கடன்களில் அல்லது சட்டவிரோத நிழல் பொருளாதாரத்தில் வீழ்கின்றனர்.</li></ul>"
        },
        {
          title: "<span class='framework-badge'>B & C</span> காரணங்கள் மற்றும் நன்மைகள்: அனுபவமுள்ள தொழில்முனைவோர்களைக் காப்பாற்றுதல்",
          bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p>நெகிழ்வற்ற சட்டங்களால் மக்கள் தற்கொலை வரை செல்கிறார்கள். வீழ்ந்தவரைத் தாங்குவது நாட்டிற்கு பலம் சேர்க்கும்:</p><div class='layout-grid'><div><ul class='styled-list'><li><b>மீளெழுச்சி மிக்க தொழில்முனைவோர்:</b> தோல்வியுற்றவர் அனுபவம் நிறைந்த மனித வளம். அவரை ஓரங்கட்டாமல் மீட்டெடுப்பது GDP இற்கு பங்களிக்கும்.</li><li><b>மன அமைதி:</b> பயம், கடனில் இருந்து விடுபட்ட மக்கள் உற்பத்தியில் ஈடுபடுவர்.</li></ul></div><div class='chart-wrapper'><canvas id='cribImpactChart'></canvas></div></div>",
          chartType: 'bar',
          chartId: 'cribImpactChart'
        },
        {
          title: "<span class='framework-badge'>D</span> திட்டம் 02: White-mapping மற்றும் மறுவாழ்வு சுழற்சி",
          bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
          bodyHtml: "<p><b>CRIB அச்சுறுத்தலுக்குப் பதிலாக தேசிய மறுவாழ்வு மற்றும் மூலதன உதவி வீதி வரைபடம்:</b></p><div class='layout-grid'><div><p><b>White-mapping:</b> Layer-B மூலம் 'திறன் மற்றும் நேர்மை மதிப்பெண்' (Talent & Integrity Score) அறிமுகப்படுத்தப்பட்டு, திறன்கள் மீண்டும் வரைபடமாக்கப்படுகின்றன.</p><p><b>Business Resuscitation Loop:</b> பேரிடர் அல்லது பொருளாதார அதிர்ச்சியின் போது ණය தவணைகள் தானாகவே இடைநிறுத்தப்படும்.</p><p><b>மீள் தொடக்க மூலதனம் (Restart Capital):</b> 21 நாட்கள் பயிற்சிக்குப் பின் 0% வட்டியில் <b>தேசிய குடிமக்கள் மறுவாழ்வு நிதி (National Citizen Buffer Fund)</b> ஊடாக ඩිஜிட்டல் கணக்கில் மூலதனம் வழங்கப்படும்.</p></div><div class='chart-wrapper'><canvas id='gdpGrowthChart'></canvas></div></div>",
          chartType: 'line',
          chartId: 'gdpGrowthChart'
        }
      ]
    }
  },
  {
    id: 'gatalu4',
    name: {
      si: 'ප්‍රාදේශීය ව්‍යවසායකත්ව ප්‍රාග්ධන සහ ආයෝජන ව්‍යුහය',
      en: 'Regional Entrepreneurship Capital & Investment Framework',
      ta: 'வகைப்பட்ட தொழில்முனைவோர் மூலதனக் கட்டமைப்பு'
    },
    headerText: {
      si: 'තුන්කල් දැක්ම | ප්‍රාදේශීය ව්‍යවසායකත්ව ප්‍රාග්ධන සහ ආයෝජන ව්‍යුහය',
      en: 'Thun Kal Dekma | Regional Entrepreneurship Capital & Investment Framework',
      ta: 'துன்கல் தெக்ம | பிராந்திய தொழில்முனைவோர் மூலதன மற்றும் முதலீட்டு கட்டமைப்பு'
    },
    searchPlaceholder: {
      si: 'පද්ධති සංරචක හෝ ක්‍රියාවලි සොයන්න...',
      en: 'Search components or processes...',
      ta: 'கூறுகள் அல்லது செயல்முறைகளைத் தேடுங்கள்...'
    },
    tableHeaders: {
      si: ['යාන්ත්‍රණ දර්ශකය', 'වත්මන් තත්ත්වය', 'තුන්කල් ඉලක්කය'],
      en: ['System Index', 'Current State', 'Three-Way Goal'],
      ta: ['முறைமை காட்டி', 'தற்போதைய நிலை', 'துன்கல் இலக்கு']
    },
    pageLabel: {
      si: 'පිටුව',
      en: 'Page',
      ta: 'பக்கம்'
    },
    layoutType: 'structured',
    slides: {
      si: [
        {
          letter: "A",
          meta: "ව්‍යවසායකත්ව ගැටලු විශ්ලේෂණය",
          title: "ප්‍රශ්නය: සම නොවන ව්‍යවසායකත්ව අවස්ථා සහ ප්‍රාග්ධනය අහිමි වීම",
          desc: "ග්‍රාමීය තරුණ පරපුර සතුව ඉහළ ව්‍යවසායකත්ව කුසලතා පැවතුණ ද, ඔවුන්ට ව්‍යාපාර ඇරඹීමට අවශ්‍ය මූලික බීජ ප්‍රාග්ධනය (Seed Capital) සහ නිවැරදි මඟපෙන්වීම ලබාගැනීමට කිසිදු ක්‍රමානුකූල ව්‍යුහයක් නොමැත.",
          matrix: [
            "ග්‍රාමීය නව නිපැයුම්කරුවන්ට මූලික ව්‍යාපාරික බීජ ප්‍රාග්ධනය (Seed Capital) කිසිසේත් නොලැබීම.",
            "තාක්ෂණික උපදෙස්, ව්‍යාපාර ලියාපදිංචිය සහ ගෝලීය වෙළඳපොළ සම්බන්ධතා පිළිබඳ අවබෝධයක් නොමැතිකම.",
            "බැංකු පද්ධති මඟින් දේපළ ඇපකරයන් ඉල්ලා සිටීම නිසා දක්ෂ තරුණ පරපුර ව්‍යවසායකත්වයෙන් බැහැර වීම.",
            "ව්‍යවසායකත්ව පුහුණු සහ උපදේශන මධ්‍යස්ථාන (Incubators) සියල්ල නාගරික කලාපවලට පමණක් සීමා වීම."
          ],
          buddhist: "කූටදන්ත සූත්‍රය: රාජ්‍යය විසින් සම්පත් සහ ව්‍යවසායකත්ව ප්‍රාග්ධනය සමව විමධ්‍යගත නොකරන්නේ නම්, සමාජය තුළ ආර්ථික පරිහානිය සහ ව්‍යසනයන් වැළැක්විය නොහැක.",
          table: [
            ["ග්‍රාමීය ප්‍රාග්ධන ප්‍රවේශය", "12% (දැඩි ඇපකර මත)", "100% (ඇප රහිත බීජ ප්‍රාග්ධනය)"],
            ["වෘත්තීය මඟපෙන්වීම", "0% (නාගරික කලාපවලට පමණි)", "සියලුම ප්‍රාදේශීය ලේකම් මට්ටමින්"],
            ["ගෝලීය වෙළඳපොළ සබැඳියාව", "0.5% (අතරමැදියන් හරහා)", "ඩිජිටල් ජාලය හරහා 85% ක් සෘජුවම"]
          ],
          th1: "පද්ධති දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        },
        {
          letter: "B",
          meta: "මූල හේතු විශ්ලේෂණය",
          title: "මූල හේතු: කේන්ද්‍රීය මූල්‍ය ව්‍යුහය සහ ඇපකර මත පදනම් වූ බැංකුකරණය",
          desc: "ග්‍රාමීය තරුණයන් ව්‍යාපාරික ක්ෂේත්‍රයෙන් බැහැරව සිටින්නේ ඔවුන්ගේ දක්ෂතාවල අඩුවක් නිසා නොව, භෞතික වත්කම්වලට පමණක් මුල්තැන දෙන මධ්‍යගත මූල්‍ය ව්‍යුහය නිසාය.",
          matrix: [
            "ව්‍යාපාරික අදහසේ ගුණාත්මකභාවය වෙනුවට දේපළ ඇපකර මත පමණක් ණය තීරණය කරන සම්ප්‍රදායික බැංකු ක්‍රමය.",
            "කර්මාන්ත සංවර්ධන මණ්ඩල වැනි රාජ්‍ය ආයතන ග්‍රාමීය මට්ටමින් අක්‍රීයව පැවතීම.",
            "සාම්ප්‍රදායික අධ්‍යාපන ක්‍රමය මඟින් නවීන ඩිජිටල් සාක්ෂරතාවය හෝ ව්‍යාපාරික දැනුම ලබා නොදීම.",
            "ප්‍රාදේශීය ආර්ථිකයන් තුළට ව්‍යවසායකත්ව ආයෝජන (Venture Capital) ආකර්ෂණය කරගැනීමට ව්‍යුහයක් නොමැතිකම."
          ],
          buddhist: "චක්කවත්ති සීහනාද සූත්‍රය: ධනය සහ අවස්ථා කිහිප දෙනෙකු අතර පමණක් කේන්ද්‍රගත වීම මුළු මහත් පද්ධතියේම බිඳවැටීමට සහ දරිද්‍රතාවයට මුල් හේතුව වේ.",
          table: [
            ["ණය තක්සේරු පදනම", "භෞතික වත්කම් / ඇපකර", "ව්‍යාපාරික ආකෘතිය සහ කුසලතාවය"],
            ["රාජ්‍ය ආයතනික සහාය", "මධ්‍යගත / නිලධාරීවාදී", "විමධ්‍යගත / ඩිජිටල් තාක්ෂණික"],
            ["තාක්ෂණික යෙදවුම්", "නැත (සාම්ප්‍රදායික ක්‍රම)", "නවීන AI සහ ඩිජිටල් මෙවලම් සබඳතා"]
          ],
          th1: "මූලික දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        },
        {
          letter: "C",
          meta: "ප්‍රතිලාභ විශ්ලේෂණය",
          title: "යහපත: සමබර ප්‍රාදේශීය ආර්ථික පුනරුදය සහ තරුණ ස්වෛරීභාවය",
          desc: "මෙම බාධක ඉවත් කිරීම තුළින් ග්‍රාමීය තරුණ පරපුර රැකියා සොයන්නන්ගෙන් රැකියා මවන්නන් බවට පත්වන අතර, සමස්ත රටේම ආර්ථික සමතුලිතතාවය සුරක්ෂිත වේ.",
          matrix: [
            "දේශීය සම්පත් ඇසුරින් අගය එකතු කළ නිෂ්පාදන (Value-Added Products) බිහිවීම.",
            "තරුණයන් රැකියා සොයා නාගරික කලාපවලට හෝ විදේශයන්ට සංක්‍රමණය වීම (Brain Drain) සීමා වීම.",
            "ප්‍රාදේශීය මට්ටමින් නව ධන උත්පාදනය සිදුවීම නිසා පවුල් මට්ටමේ ආර්ථික ස්වාධීනත්වය ළඟා වීම.",
            "ණය උගුල් සහ ක්ෂුද්‍ර මුදල් සූරාකෑම්වලින් තොර සදාචාරාත්මක ව්‍යවසායකත්ව සංස්කෘතියක් බිහිවීම."
          ],
          buddhist: "සියලු ප්‍රදේශවල තරුණයන්ට ජීවනෝපාය මාර්ග විවෘත වන විට සමාජය තුළ සාමය, එකමුතුකම සහ සාධාරණත්වය ස්වයංක්‍රීයවම තහවුරු වන බව බුදු දහම පෙන්වා දෙයි.",
          table: [
            ["තරුණයන්ගේ භූමිකාව", "රැකියා සොයන්නන්", "රැකියා මවන්නන් (Entrepreneurs)"],
            ["ප්‍රාදේශීය ආර්ථිකය", "අඩපණ වූ / පරාධීන", "ස්වයංපෝෂිත / අපනයන නැඹුරු"],
            ["සමාජ ආතතිය", "ඉතා ඉහළ", "අවම (තෘප්තිමත් තරුණ පරපුර)"]
          ],
          th1: "ප්‍රතිඵල දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        },
        {
          letter: "D",
          meta: "සැලසුම්කරණය සහ ක්‍රියාමාර්ග",
          title: "සැලැස්ම: ලාභය මත පදනම් වූ සාධාරණ ප්‍රතිලාභ සහ පියවරෙන් පියවර ප්‍රාග්ධන මුදාහැරීම",
          desc: "0% පොලී ක්‍රමය වෙනුවට ආයෝජකයා ආරක්ෂා වන, ව්‍යවසායකයාට සහනයක් වන 'තුන් කල් දැක්ම' ප්‍රායෝගික ව්‍යවසායකත්ව ප්‍රාග්ධන ආකෘතිය මෙසේ ක්‍රියාත්මක වේ:",
          matrix: [
            "පියවර 1 (තක්සේරුව): ව්‍යවසායකයා ඉදිරිපත් කරන ව්‍යාපාරික අදහස, සම්පත් සහ වෙළඳපොළ සාධක විනිවිදභාවයෙන් යුතුව විශ්ලේෂණය කර අවශ්‍ය නිවැරදි මුදල (උදා: රු. 100,000) තක්සේරු කිරීම.",
            "පියවර 2 (අරමුදල් සැපයීම): 'තුන් කල් දැක්ම' ආයෝජන අරමුදලෙන් හෝ බාහිර ආයෝජකයෙකු සම්බන්ධ කර මෙම රු. 100,000 ව්‍යාපාරයේ අවශ්‍යතාවය අනුව පියවරෙන් පියවර මුදාහැරීම.",
            "පියවර 3 (අනිවාර්ය අධ්‍යයනය): ප්‍රාග්ධනය ලබාගන්නා සියලුම දෙනා, එම මුදල සම්පූර්ණයෙන් ගෙවා නිම කරන තෙක් 'තුන් කල් දැක්ම' පද්ධතිමය අධ්‍යයනයන්ට සහ වෘත්තීය උපදේශනයන්ට අනිවාර්යයෙන් එකඟ විය යුතුය.",
            "පියවර 4 (ලාභයෙන් කොටසක් ගෙවීම): ස්ථාවර මාසික වාරික වෙනුවට, ව්‍යාපාරයේ සියලු වියදම් හැර ඉතිරි වන ශුද්ධ ලාභය කොටස් 4කට බෙදා ඉන් කොටස් 2ක් (50%) ආයෝජනය පියවීම සඳහා මාසිකව අය කරගනු ලැබේ.",
            "පියවර 5 (ආයෝජක ආරක්ෂණය සහ 5% ප්‍රතිලාභය): ව්‍යාපාරය ලාභ ලැබීමට මාස 5ක් ගත වුවහොත් එම මාස 5 තුළ කිසිදු මුදලක් අය නොකෙරේ. ආයෝජකයාගේ අවදානම සහ කාලය වෙනුවෙන්, මුදල් ගෙවා නිම කිරීමට ගතවන සමස්ත කාලය සඳහා මාසිකව 5% ක සාධාරණ අගය එකතු කිරීමක් මුල් ප්‍රාග්ධනයට එකතු වේ."
          ],
          buddhist: "සප්ත අපරිහානීය ධර්ම: පාලකයන්, ආයෝජකයන් සහ තරුණ ව්‍යවසායකයන් නිතර රැස්වී, නව තාක්ෂණය සහ සාධාරණ ප්‍රතිලාභ බෙදී යන ක්‍රමවේද සාකච්ඡා කිරීමෙන් ආර්ථිකය කිසිදා පිරිහෙන්නේ නැත.",
          table: [
            ["මුදල් මුදාහැරීමේ ක්‍රමය", "එකවර ලබාදීම", "අවශ්‍යතාවය අනුව පියවරෙන් පියවර"],
            ["ආපසු අය කරගැනීම", "ලාභ-අලාභ නොබලා ස්ථාවර වාරික", "සියලු වියදම් හැර ශුද්ධ ලාභයෙන් 2/4 පංගුවක්"],
            ["පොලී/ප්‍රතිලාභ ව්‍යුහය", "අධික බැංකු පොලී", "කාලය මත පදනම් වූ 5% සාධාරණ ප්‍රතිලාභය"],
            ["අධ්‍යයන එකඟතාවය", "කිසිදු පද්ධතිමය පුහුණුවක් නැත", "මුදල ගෙවා නිමවන තෙක් අනිවාර්ය අධ්‍යයනය"]
          ],
          th1: "යාන්ත්‍රණ දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        }
      ],
      en: [
        {
          letter: "A",
          meta: "ENTREPRENEURSHIP PROBLEM ANALYSIS",
          title: "The Problem: Unequal Opportunities & Loss of Seed Capital Access",
          desc: "Rural youth possess high entrepreneurial potential, but they completely lack structural access to initial seed capital and professional mentorship.",
          matrix: [
            "Complete deprivation of initial startup seed capital for rural innovators.",
            "Total lack of technical guidance, business registration support, and global market insights.",
            "Banking systems demanding physical collateral, entirely isolating talented rural youth.",
            "Concentration of business incubator hubs exclusively within major urban centers."
          ],
          buddhist: "Kutadanta Sutta: If resources and entrepreneurship capital are not equitably decentralized by the state, structural economic decay is inevitable.",
          table: [
            ["Rural Capital Access", "12% (Collateralized)", "100% (Zero-Collateral Seed Capital)"],
            ["Professional Mentorship", "0% (Urban Centric)", "Active Across All Divisional Secretariats"],
            ["Global Market Sync", "0.5% (Middlemen)", "85% Direct via Integrated Digital Platform"]
          ],
          th1: "System Index", th2: "Current State", th3: "Three-Way Goal"
        },
        {
          letter: "B",
          meta: "ROOT CAUSE ANALYSIS",
          title: "Root Causes: Centralized Financial Architecture & Collateral Dependency",
          desc: "The alienation of rural youth from business setups is driven by a legacy centralized banking ecosystem that prioritizes brick-and-mortar assets over human potential.",
          matrix: [
            "Systemic failure of evaluating loan viability based on asset parameters instead of model quality.",
            "Complete institutional inertia of state industrial development boards at the rural grassroots.",
            "Inability of legacy education setups to transfer advanced digital literacy or standard business logic.",
            "Absence of regional structural channels to pull venture investments into rural economies."
          ],
          buddhist: "Chakkavatti Sihanada Sutta: Hoarding opportunities within elite cartels triggers total systemic imbalance and generational poverty.",
          table: [
            ["Credit Evaluation", "Physical Assets / Collateral", "Business Model Quality & Grit"],
            ["State Support Flow", "Centralized / Bureaucratic", "Decentralized / Digitally Driven"],
            ["Tech Optimization", "None (Legacy Frameworks)", "Advanced AI & Digital Tooling Sync"]
          ],
          th1: "Source Index", th2: "Current State", th3: "Three-Way Goal"
        },
        {
          letter: "C",
          meta: "BENEFITS OF RESOLUTION",
          title: "The Benefits: Balanced Regional Regeneration & Youth Empowerment",
          desc: "Dismantling these barriers transforms rural youth from desperate job seekers into innovative job creators, securing absolute macroeconomic balance.",
          matrix: [
            "Birth of highly scalable value-added regional industries leveraging local resources.",
            "Mitigation of local brain drain and erratic youth migration to highly congested urban capitals.",
            "Unlocking regional capital creation to build robust sovereign family balance sheets.",
            "Eradication of microfinance debt traps, replacing them with ethical business models."
          ],
          buddhist: "Canonical insights confirm that flattening opportunity landscapes automatically nurtures civic peace, mutual delight, and systemic integrity.",
          table: [
            ["Youth Economic Role", "Job Seekers", "Job Creators / Scalable Founders"],
            ["Regional Economy", "Stagnant / Dependent", "Self-Sustaining / Export Oriented"],
            ["Systemic Friction", "High Generational Despair", "Minimized (Thriving Co-Creation)"]
          ],
          th1: "Impact Index", th2: "Current State", th3: "Three-Way Goal"
        },
        {
          letter: "D",
          meta: "STRATEGIC SOLUTIONS & ACTION",
          title: "The Solution: Profit-Share Based Capital & Time-Indexed Investor Returns",
          desc: "Replacing non-viable 0% frameworks with an equitable revenue-share framework balanced with a 5% dynamic monthly index:",
          matrix: [
            "Step 1 (Evaluation): Conducting structural analysis on the entrepreneur's idea and resource allocation to calculate capital requirements (e.g., LKR 100,000).",
            "Step 2 (Fund Flow): Disbursing the LKR 100,000 progressively based on milestones rather than upfront lumpsums.",
            "Step 3 (Mandatory Study): Capital recipients must structurally commit to Three-Way Vision framework evaluation modules until the total fund balance is cleared.",
            "Step 4 (Revenue Share Flow): Eliminating fixed monthly metrics; instead, the net operational profit is divided into 4 units, where 2 units (50%) are routed monthly to clear the capital balance.",
            "Step 5 (Time-Indexed Protection): If the enterprise takes 5 months to yield net returns, no payments are extracted during that period. To safeguard investor velocity, a standard 5% time-multiplier indexes onto the capital base monthly relative to repayment duration."
          ],
          buddhist: "Sapta Aparihaniya Dhamma: When leaders, investors, and youth assemble frequently to exchange technological metrics and fair revenue structures, financial regression is eliminated.",
          table: [
            ["Disbursement Protocol", "Upfront Lumpsum (High Risk)", "Progressive Milestone-Driven Transfers"],
            ["Capital Recovery", "Fixed Installments Despite Loss", "50% Share of Net Post-Expense Profits"],
            ["Return Architecture", "Compounded Interest", "50% Revenue Share + 5% Monthly Time Index"],
            ["Educational Bounds", "No Structural Accountability", "Mandatory Dynamic Mastery Until Clearance"]
          ],
          th1: "Mechanism Index", th2: "Current State", th3: "Three-Way Goal"
        }
      ],
      ta: [
        {
          letter: "A",
          meta: "தொழில்முனைவோர் சிக்கல் பகுப்பாய்வு",
          title: "பிரச்சனை: சமமற்ற தொழில்முனைவோர் வாய்ப்புகள் மற்றும் மூலதன இழப்பு",
          desc: "கிராமப்புற இளைஞர்களிடம் சிறந்த வணிகக் கருத்துக்கள் இருந்தாலும், அவற்றை நடைமுறைப்படுத்தத் தேவையான ஆரம்ப மூலதனம் (Seed Capital) மற்றும் முறையான தொழில்முறை வழிகாட்டல் கிடைக்க வழிமுறைகள் இல்லை.",
          matrix: [
            "கிராமப்புற கண்டுபிடிப்பாளர்களுக்கு ஆரம்பக்கட்ட வணிக மூலதனம் (Seed Capital) முற்றிலும் கிடைக்காமை.",
            "தொழில்நுட்ப வழிகாட்டல், வணிகப் பதிவு மற்றும் உலகளாவிய சந்தை வாய்ப்புகள் பற்றிய அறிவின்மை.",
            "வங்கி அமைப்புகள் பிணையாணைகளை கோருவதால், திறமையான கிராமப்புற இளைஞர்கள் புறக்கணிக்கப்படல்.",
            "வணிக மேம்பாட்டு மையங்கள் (Incubators) அனைத்தும் நகர்ப்புறங்களில் மட்டுமே குவிந்திருத்தல்."
          ],
          buddhist: "கூடதந்த சூத்திரம்: நாட்டின் வளங்களும் தொழில்முனைவோர் மூலதனமும் அரசாங்கத்தால் சமமாக பரவலாக்கப்படාவிட்டால், சமூகத்தில் பொருளாதார வீழ்ச்சி மற்றும் வறுமை தீவிரமடையும்.",
          table: [
            ["கிராமப்புற மூலதன அணுகல்", "12% (பிணை மீது)", "100% (பிணையற்ற ஆரம்ப மூலதனம்)"],
            ["தொழில்முறை வழிகாட்டல்", "0% (நகரங்களுக்கு மட்டும்)", "அனைத்து பிரதேச செயலக மட்டங்களிலும்"],
            ["உலகளாவிய சந்தை இணைப்பு", "0.5% (இடைத்தரகர் மூலம்)", "டிஜிட்டல் தளம் மூலம் 85% நேரடியாக"]
          ],
          th1: "முறைமை காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        },
        {
          letter: "B",
          meta: "மூலக் காரண பகுப்பாய்வு",
          title: "மூலக் காரணங்கள்: மையப்படுத்தப்பட்ட நிதி கட்டமைப்பு மற்றும் பிணை சார்ந்த வங்கிமுறை",
          desc: "கிராமப்புற இளைஞர்கள் வணிகத்தில் ஈடுபಡ முடியாமல் போவதற்கு அவர்களின் தனிப்பட்ட திறமையின்மை காரணமல்ல; மாறாக, சொத்துக்களை மட்டுமே அடிப்படையாகக் கொண்ட பாரம்பரிய நிதி அமைப்பே காரணமாகும்.",
          matrix: [
            "வணிகக் கருத்தின் தரத்தை மதிப்பிடுவதற்குப் பதிலாக, சொத்துப் பிணைகளை மட்டும் கோரும் வங்கி முறை.",
            "அரசு தொழில் வளர்ச்சி සභා கிராமப்புற மட்டങ്ങളിൽ செயலற்று இருத்தல்.",
            "பாரம்பரிய கல்வி முறையினால் மேம்பட்ட டிஜிட்டல் அறிவு அல்லது வணிக நெறிமுறைகளை வழங்க முடியාமை.",
            "கிராமப்புற பொருளாதாரங்களுக்குள் துணிகர முதலீடுகளை ஈர்ப்பதற்கான பிராந்திய கட்டமைப்புகள் இல்லාமை."
          ],
          buddhist: "சக்கவத்தி சீஹநாத சூத்திரம்: நாட்டின் செல்வமும் வணிக வாய்ப்புகளும் ஒரு சில உயரடுக்கு குழுக்களிடம் மட்டுமே குவிந்திருப்பது ஒட்டுமொத்த அமைப்பின் அழிவிற்கும் வறுமைக்கும் வழிவகுக்கும்.",
          table: [
            ["கடன் மதிப்பீட்டு அடிப்படை", "பௌதிக சொத்துக்கள்", "வணிக மாதிரி மற்றும் திறமை"],
            ["அரச நிறுவன ஆதரவு", "மையப்படுத்தப்பட்டது", "பரவலாக்கப்பட்டது / டிஜிட்டல் மயம்"],
            ["தொழில்நுட்ப பயன்பாடு", "இல்லை", "மேம்பட்ட AI மற்றும் டிஜிட்டல் கருவிகள்"]
          ],
          th1: "மூலக் காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        },
        {
          letter: "C",
          meta: "தீர்வின் நன்மைகள் பகுப்பாய்வு",
          title: "நன்மைகள்: சமநிலையான பிராந்திய பொருளாதார மறுமலர்ச்சி மற்றும் இளைஞர் இறையாண்மை",
          desc: "இந்த தடைகளை நீக்குவதன் மூலம், கிராமப்புற இளைஞர்கள் வேலை தேடுபவர்களாக அல்லாமல், வேலை உருவாக்குபவர்களாக மாறுவார்கள்; இது நாட்டின் மேக்ரோ-பொருளாதார சமநிலையை உறுதி செய்யும்.",
          matrix: [
            "உள்ளூர் வளங்களைப் பயன்படுத்தி பிராந்திய அளவில் அதிக மதிப்பு கூட்டப்பட்ட தொழிற்சாலைகள் உருவாதல்.",
            "இளைஞர்கள் வேலை தேடி நகரங்களுக்கு அல்லது வெளிநாடுகளுக்கு புலம்பெயர்வது கணிசமாகக் குறைதல்.",
            "பிராந்திய மட்டத்திலான மூலதன உருவாக்கம் மூலம் குடும்ப பொருளாதார சுதந்திரம் நிலைநாட்டப்படல்.",
            "நுண்கடன் கடன் பொறிகள் ஒழிக்கப்பட்டு, அதற்குப் பதிலாக நெறிமுறை சார்ந்த வணிகக் கலாச்சாரம் மலர்தல்."
          ],
          buddhist: "அனைத்துப் பகுதி இளைஞர்களுக்கும் வாழ்வாதார வாய்ப்புகள் திறக்கப்படும் போது, சமூகத்தில் அமைதி, ஒற்றுமை மற்றும் பரஸ்பர மகிழ்ச்சி (முதிதா) தானாகவே நிலைபெறும்.",
          table: [
            ["இளையோர் பங்கு", "வேலை தேடுபவர்கள்", "வேலை உருவாக்குபவர்கள் (தொழில்முனைவோர்)"],
            ["பிராந்திய பொருளாதாரம்", "தேக்கநிலை / சார்ந்தது", "சுயசார்பு / ஏற்றுமதி நோக்குடையது"],
            ["சமூக அழுத்தங்கள்", "மிக அதிகம் (விரக்தி)", "குறைந்தபட்சம் (நிறைவான இளைய சமுதாயம்)"]
          ],
          th1: "தாக்கக் காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        },
        {
          letter: "D",
          meta: "மூலோபாயத் திட்டங்கள் සහ ක්‍රියාවන්",
          title: "திட்டம்: இலாபப் பகிர்வு மூலதனம் සහ කාල පදනම් ආයෝජක ප්‍රතිලාභ",
          desc: "நடைமுறைக்கு சாத்தியமற்ற 0% வட்டி முறைக்கு பதிலாக, முதலீட்டாளர்களைப் பாதுகாக்கும் மற்றும் தொழில்முனைவோருக்கு සුවයක් වන 'துன்கல் தெக்ம' நடைமுறை மூலதன மாதிரி பின்வருமாறு செயல்படும்:",
          matrix: [
            "படி 1 (மதிப்பீடு): தொழில்முனைவோர் சமர்ப்பிக்கும் வணிகக் கருத்து, உள்ளூர் வளங்கள் மற்றும் சந்தை காரணிகளை வெளிப்படையாக பகுப்பாய்வு செய்து, தேவையான துல்லியமான தொகையை (உதாரணம்: ரூ. 100,000) மதிப்பீடு செய்தல்.",
            "படி 2 (நிதி வழங்கல்): 'துன்கல் தெக்ම' முதலீட்டு நிதியத்திலிருந்து அல்லது வெளி முதலீட்டாளர்களை இணைத்து, இந்த ரூ. 100,000 தொகையை ஒரே தடவையில் வழங்காமல், வணிகத்தின் தேவைகளின் அடிப்படையில் படிப்படியாக வழங்குதல்.",
            "படி 3 (கட்டாயக் கல்வி): மூலதனத்தைப் பெறும் அனைவரும், அந்த நிதி முழுமையாக திருப்பிச் செலுத்தப்படும் வரை, 'துன்கல் தெக்ම' கட்டமைப்பு ஆய்வுகள் மற்றும் மூலோபாய வழிகாட்டல்களுக்கு கட்டாயம் இணங்க வேண்டும்.",
            "படி 4 (இலாபப் பகிர்வு): நிலையான மாதாந்திர தவணைகளை ஒழித்து; அதற்குப் பதிலாக, வணிகத்தின் அனைத்து இயக்கச் செலவுகளும் நீக்கப்பட்ட பின் எஞ்சியிருக்கும் நிகර இலாபத்தை 4 பாகங்களாகப் பிரித்து, அதில் 2 பாகங்களை (50%) மூலதனத்தை அடைப்பதற்காக மாதாந்திரம் வசූලිத்தல்.",
            "படி 5 (முதலீட்டாளர் பாதுகாப்பு மற்றும் 5% வருவாய்): வணிகம் இலாபம் ஈட்ட 5 மாதங்கள் எடுத்தால், அந்த 5 மாதங்களில் எந்தப் பணமும் வசூலிக்கப்பட மாட்டாது. முதலீட்டாளரின் இடர் සහ காலத்தைக் கருத்தில் கொண்டு, மூலதனம் முழுமையாக செலுத்தப்படும் காலத்திற்கு மாதத்திற்கு 5% நியாயமான கால மதிப்பு அசல் மூலதனத்துடன் சேர்க்கப்படும்."
          ],
          buddhist: "சப்த அபரிஹானிய தர்மம்: ஆட்சியாளர்கள், முதலீட்டாளர்கள் மற்றும் இளம் தொழில்முனைவோர் அடிக்கடி கூடி, புதிய தொழில்நுட்பங்கள் மற்றும் நியாயமான இலாபப் பகிர்வு முறைகளை விවාදනය කිරීමෙන් நிதி வீழ்ச்சியைத் தடுக்கலாம்.",
          table: [
            ["நிதி வழங்கும் முறை", "ஒரே தடவையில் வழங்கல் (அபாயகரமானது)", "தேවைகளின் அடிப்படையில் படிப்படியாக வழங்கல்"],
            ["மூලதன மீட்பு", "நிலையான தவணை", "செலவுகள் நீக்கப்பட்ட நிகර இලාபத்தில் 2/4 பங்கு"],
            ["வருவாய் மாதிரி", "கூட்டு வட்டி", "நிகர இලාபத்தில் 50% + 5% மாதாந்திர கால மதிப்பு"],
            ["கல்வி உடன்படிக்கை", "எந்தக் கட்டுப்பாடும் இல்லை", "நிதி முழுமையாக திருப்பிச் செலுத்தும் வரை கட்டாயப் பயிற்சி"]
          ],
          th1: "முறைமை காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        }
      ]
    }
  },
  {
    id: 'gatalu5',
    name: {
      si: 'අතරමැදි සූරාකෑම වැළැක්වීමේ පද්ධතිමය සැලසුම',
      en: 'Anti-Exploitation Systemic Plan',
      ta: 'இடைத்தரகர் சுரண்டல் எதிர்ப்பு முறையியல் திட்டம்'
    },
    headerText: {
      si: 'තුන්කල් දැක්ම | අතරමැදි සූරාකෑම වැළැක්වීමේ පද්ධතිමය සැලසුම',
      en: 'Thun Kal Dekma | Anti-Exploitation Systemic Plan',
      ta: 'துன்கல் தெக்ம | இடைத்தரகர் சுரண்டல் தடுப்பு முறையியல் திட்டம்'
    },
    searchPlaceholder: {
      si: 'පද්ධති සංරචක හෝ ක්‍රියාවලි සොයන්න...',
      en: 'Search components or processes...',
      ta: 'கூறுகள் அல்லது செயல்முறைகளைத் தேடுங்கள்...'
    },
    tableHeaders: {
      si: ['යාන්ත්‍රණ දර්ශකය', 'වත්මන් තත්ත්වය', 'තුන්කල් ඉලක්කය'],
      en: ['System Index', 'Current State', 'Three-Way Goal'],
      ta: ['முறைமை காட்டி', 'தற்போதைய நிலை', 'துன்கல் இலக்கு']
    },
    pageLabel: {
      si: 'පිටුව',
      en: 'Page',
      ta: 'பக்கம்'
    },
    layoutType: 'structured',
    slides: {
      si: [
        {
          letter: "A",
          meta: "පාරිභෝගික ගැටලු විශ්ලේෂණය",
          title: "ගැටලුව: අතරමැදි පිරිවැය හේතුවෙන් පාරිභෝගිකයාට අධික මිලකට භාණ්ඩ මිලදී ගැනීමට සිදුවීම",
          desc: "නිෂ්පාදකයාගේ සිට පාරිභෝගිකයා වෙත භාණ්ඩ ගලායන සාම්ප්‍රදායික සැපයුම් දාමය තුළ ක්‍රියාත්මක වන බහුස්තර අතරමැදියන් (Multi-tier Middlemen) තමන් කිසිදු අගය එකතු කිරීමක් නොකර, කෘතිම හිඟයන් මවමින් භාණ්ඩ මිල අධික ලෙස ඉහළ දමයි.",
          matrix: [
            "නිෂ්පාදකයාට සාධාරණ මිලක් නොලැබෙන අතර, පාරිභෝගිකයාට නිෂ්පාදන පිරිවැය මෙන් 300% කට වඩා වැඩි මිලක් ගෙවීමට සිදුවීම.",
            "අතරමැදියන් විසින් ප්‍රවාහන, ගබඩා සහ ඒකාධිකාරී ලාභාංශ පාරිභෝගිකයා පිට පැටවීම.",
            "නිෂ්පාදකයා සහ අවසාන පාරිභෝගිකයා අතර සෘජු සන්නිවේදනයක් හෝ විනිවිද පෙනෙන වෙළඳපොළක් නොමැතිකම.",
            "කෘතිම මිල උච්චාවචනයන් පාලනය කිරීමට පවතින නීතිමය රාමු අසාර්ථක වීම."
          ],
          buddhist: "දසරාජ ධර්මය: රාජ්‍ය පාලකයන් වෙළඳපොළ අක්‍රමිකතා සහ අතරමැදි සූරාකෑම් පාලනය කරමින් සාධාරණ මිලක් තහවුරු කිරීමට කටයුතු නොකළහොත් ජනතාව දැඩි ආර්ථික දුෂ්කරතාවලට ලක් වේ.",
          table: [
            ["පාරිභෝගික මිල අනුපාතය", "නිෂ්පාදන පිරිවැය මෙන් 3 ගුණයක්", "නිෂ්පාදන පිරිවැයට සාපේක්ෂව 1.3 ගුණයක්"],
            ["මිල ස්ථාවරත්වය", "දෛනිකව විශාල ලෙස වෙනස් වේ", "විනිවිද පෙනෙන ස්ථාවර මිල පදනම"],
            ["ගුණාත්මක භාවය", "අවම (කල් තබා ගන්නා රසායනික සහිත)", "නැවුම් සහ ගුණාත්මක දේශීය නිෂ්පාදන"]
          ],
          th1: "පද්ධති දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        },
        {
          letter: "B",
          meta: "මූල හේතු විශ්ලේෂණය",
          title: "මූල හේතු: ඒකාධිකාරී තොග වෙළඳපොළ සහ විමධ්‍යගත ජාල නොමැතිකම",
          desc: "පාරිභෝගිකයාට අධික මිලක් ගෙවීමට සිදුව ඇත්තේ නිෂ්පාදනයේ හිඟකමක් නිසා නොව, අතරමැදියන් විසින් මිල පාලනය කරන ඒකාධිකාරී භෞතික වෙළඳපොළ ජාලය නිසාය.",
          matrix: [
            "නිෂ්පාදන තොග එක් රැස් කොට මිල තීරණය කිරීමේ බලය සීමිත අතරමැදියන් පිරිසක් සතු වීම.",
            "නිෂ්පාදකයාට සිය අස්වැන්න සෘජුවම පාරිභෝගිකයා වෙත අලෙවි කිරීමට අවශ්‍ය විමධ්‍යගත ප්‍රවාහන හා ගබඩා පහසුකම් නොමැතිකම.",
            "රජයේ මිල පාලන ආයතන සක්‍රීයව වෙළඳපොළට මැදිහත් නොවීම.",
            "නිෂ්පාදන සැපයුම් දාමයේ පවතින දත්ත විනිවිදභාවය නොමැතිකම."
          ],
          buddhist: "කූටදන්ත සූත්‍රය: වෙළඳාම සහ කෘෂිකර්මාන්තය සඳහා රාජ්‍ය මැදිහත් වීමෙන් නිසි පහසුකම් හා මිල පාලනයන් සලසා නොදීම ආර්ථිකයේ බිඳවැටීමට සෘජුවම බලපායි.",
          table: [
            ["මිල තීරණය කිරීමේ බලය", "ඒකාධිකාරී තොග වෙළෙන්දන්", "සෘජු ඉල්ලුම සහ සැපයුම් දත්ත මත"],
            ["ප්‍රවාහන සැපයුම් ජාලය", "මධ්‍යගත භෞතික වෙළඳපොළ මත", "විමධ්‍යගත සෘජු ප්‍රවාහන පද්ධතිය"],
            ["දත්ත පාරදෘශ්‍යභාවය", "සම්පූර්ණයෙන්ම රහසිගතයි", "විවෘත ඩිජිටල් මිල පද්ධතියක්"]
          ],
          th1: "මූලික දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        },
        {
          letter: "C",
          meta: "යහපත විශ්ලේෂණය",
          title: "යහපත: ජීවන පිරිවැය පහළ යෑම සහ නිෂ්පාදක-පාරිභෝගික සවිබල ගැන්වීම",
          desc: "අතරමැදි ඒකාධිකාරය බිඳ දැමීම තුළින් පාරිභෝගික ජීවන වියදම පහත වැටෙන අතර, නිෂ්පාදකයාගේ මූල්‍ය ස්ථාවරත්වය සහ ආර්ථිකයේ සාධාරණත්වය තහවුරු වේ.",
          matrix: [
            "පාරිභෝගික ජීවන වියදම සැලකිය යුතු මට්ටමකින් පහළ යාම.",
            "නිෂ්පාදකයාට සිය නිෂ්පාදන සඳහා ඉහළ සහ සාධාරණ මිලක් සෘජුවම ලැබීම.",
            "වෙළඳපොළ තුළ කෘතිම හිඟයන් හා මිල උච්චාවචනයන් මුළුමනින්ම තුරන් වීම.",
            "විනිවිද පෙනෙන වෙළඳ සංස්කෘතියක් තුළින් රටේ මූල්‍ය සංසරණය විධිමත් වීම."
          ],
          buddhist: "අන්‍යෝන්‍ය සහයෝගීතාවය: නිෂ්පාදකයා සහ පාරිභෝගිකයා අතර පවතින සෘජු හා සාධාරණ ගනුදෙනු තුළින් සමාජයේ සදාචාරාත්මක අගයන් සහ පොදු යහපත ස්ථාවර වේ.",
          table: [
            ["පාරිභෝගික තෘප්තිය", "ඉතා අවම (මිල පීඩනය නිසා)", "උපරිම (සාධාරණ මිල සහ නැවුම් බව)"],
            ["නිෂ්පාදක ආදායම", "අස්ථාවර / අවම", "ස්ථාවර / ඉහළ මට්ටමක"],
            ["වෙළඳ සාධාරණත්වය", "නැත (සූරාකෑම අධිකයි)", "සම්පූර්ණ විනිවිදභාවය සහ සාධාරණත්වය"]
          ],
          th1: "ප්‍රතිඵල දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        },
        {
          letter: "D",
          meta: "උපායමාර්ගික සැලසුම් සහ ක්‍රියාමාර්ග",
          title: "සැලැස්ම: 'තුන්කල්' සෘජු සැපයුම් පද්ධතිය සහ විමධ්‍යගත ඩිජිටල් වෙළඳපොළ",
          desc: "අතරමැදියාගේ අසාධාරණ මැදිහත් වීම ව්‍යුහාත්මකව ඉවත් කර, නිෂ්පාදකයා සහ පාරිභෝගිකයා සෘජුවම සම්බන්ධ කරන 'තුන්කල්' විමධ්‍යගත සැපයුම් ජාලය මෙසේ ක්‍රියාත්මක වේ:",
          matrix: [
            "පියවර 1 (ඩිජිටල් ලියාපදිංචිය): සෑම ප්‍රදේශයකම නිෂ්පාදකයන් සහ පාරිභෝගික සමිති 'තුන්කල්' ඩිජිටල් සැපයුම් ජාලය තුළ ලියාපදිංචි කිරීම.",
            "පියවර 2 (සෘජු මිල නියම කිරීම): අතරමැදි තැරැව්කාර ලාභ නොමැතිව, නිෂ්පාදන පිරිවැය සහ ප්‍රවාහන වියදම් පමණක් එකතු කර අවසාන පාරිභෝගික මිල සෘජුවම පද්ධතිය තුළ තීරණය කිරීම.",
            "පියවර 3 (විමධ්‍යගත ප්‍රවාහනය): දිස්ත්‍රික් මට්ටමින් ක්‍රියාත්මක වන රාජ්‍ය හා පෞද්ගලික ඒකාබද්ධ ප්‍රවාහන සේවා (Logistics Loops) හරහා භාණ්ඩ ගමෙන් කෙලින්ම පාරිභෝගික මධ්‍යස්ථාන වෙත ප්‍රවාහනය කිරීම.",
            "පියවර 4 (සෘජු බෙදාහැරීම): ග්‍රාම සේවා වසම් මට්ටමින් පාරිභෝගික සමිති සහ ඩිජිටල් බෙදාහැරීමේ මධ්‍යස්ථාන (Consumer Hubs) හරහා පාරිභෝගිකයා අතට භාණ්ඩ පත් කිරීම.",
            "පියවර 5 (මූල්‍ය විනය හා Layer-B වැට): සැපයුම් ජාලය තුළ මිල සූරාකෑම් හෝ නීති විරෝධී මිල කෘතිමව වෙනස් කිරීම් සිදුවීම Layer-B ස්වයංක්‍රීය විනය වැට මඟින් එසැණින් වළක්වාලීම."
          ],
          buddhist: "සප්ත අපරිහානීය ධර්ම: සැපයුම් දාමයේ සියලුම පාර්ශවකරුවන් නිතර රැස්වී ගැටලු සාකච්ඡා කරමින් විනිවිද පෙනෙන වෙළඳ ප්‍රතිපත්තියක් ක්‍රියාත්මක කිරීමෙන් ආර්ථික සුරක්ෂිතභාවය ඇති වේ.",
          table: [
            ["සැපයුම් දාම ව්‍යුහය", "බහු ස්ථර අතරමැදියන් සහිතයි", "සෘජු නිෂ්පාදක-පාරිභෝගික සබැඳියාව"],
            ["ප්‍රවාහන කළමනාකරණය", "අතරමැදියාගේ අභිමතය පරිදි", "විමධ්‍යගත රාජ්‍ය-පෞද්ගලික ලොජිස්ටික්ස් ලූප්"],
            ["මූල්‍ය ගනුදෙනු", "මුදල් මත සහ සූරාකෑමට ලක්වේ", "Layer-B තාක්ෂණය යටතේ විනිවිද පෙනෙන ඩිජිටල් මූල්‍ය"]
          ],
          th1: "යාන්ත්‍රණ දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        }
      ],
      en: [
        {
          letter: "A",
          meta: "CONSUMER PROBLEM ANALYSIS",
          title: "The Problem: High Prices for Consumers due to Intermediary Costs",
          desc: "In the traditional supply chain, multi-tier middlemen artificially inflate retail prices by engineering artificial shortages and taking huge markups without adding value.",
          matrix: [
            "Producers fail to get fair prices, while consumers are forced to pay upwards of 300% of production costs.",
            "Middlemen transfer transportation, storage, and monopolistic profit margins directly to consumers.",
            "Absence of direct communication channels or a transparent market between producers and end consumers.",
            "Failure of existing legal and regulatory frameworks to control artificial price fluctuations."
          ],
          buddhist: "Dasa Raja Dhamma: Rulers must stabilize prices and eliminate exploitation to protect citizens from severe economic hardship.",
          table: [
            ["Consumer Price Ratio", "3x Production Cost", "1.3x Production Cost"],
            ["Price Stability", "Fluctuates wildly daily", "Transparent stable pricing base"],
            ["Product Quality", "Poor (Contains chemical preservatives)", "Fresh, direct local products"]
          ],
          th1: "System Index", th2: "Current State", th3: "Three-Way Goal"
        },
        {
          letter: "B",
          meta: "ROOT CAUSE ANALYSIS",
          title: "Root Causes: Monopolistic Wholesale Markets & Lack of Decentralized Networks",
          desc: "Exorbitant prices are not caused by product scarcity, but by the monopolistic physical market infrastructure controlled by middlemen.",
          matrix: [
            "Wholesale stocks and price determination are centralized in a few intermediary hands.",
            "Lack of decentralized transport and storage facilities prevents producers from selling directly to consumers.",
            "Complete lack of active, strategic market intervention by state price control institutions.",
            "Total deficit in data transparency across the supply chain."
          ],
          buddhist: "Kutadanta Sutta: Failing to establish proper market infrastructure and state price controls directly triggers macroeconomic decay.",
          table: [
            ["Price Control Power", "Monopolistic Wholesalers", "Direct Demand & Supply Data Sync"],
            ["Transport Logistics", "Centralized Physical Markets", "Decentralized Direct Logistics Loops"],
            ["Data Transparency", "Strictly Monopolized & Hidden", "Open Digital Pricing Portal"]
          ],
          th1: "Source Index", th2: "Current State", th3: "Three-Way Goal"
        },
        {
          letter: "C",
          meta: "BENEFITS OF RESOLUTION",
          title: "The Benefits: Lower Cost of Living & Producer-Consumer Empowerment",
          desc: "Dismantling intermediary monopolies significantly lowers the cost of living, while boosting producer income and ensuring systemic market fairness.",
          matrix: [
            "Substantial decrease in the consumer cost of living.",
            "Producers receive stable and fair prices directly for their harvest.",
            "Complete elimination of artificial shortages and speculative price spikes.",
            "Circulation of wealth within the real economy through transparent trade practices."
          ],
          buddhist: "Mutual Co-existence: Establishing direct, fair trade between producers and consumers secures ethical societal values and common wealth.",
          table: [
            ["Consumer Satisfaction", "Very Low (Under Price Pressure)", "High (Fair Prices & Fresh Quality)"],
            ["Producer Income", "Volatile & Insufficient", "Stable & Higher Profitability"],
            ["Trade Equity", "None (High Exploitation)", "Absolute Transparency & Fairness"]
          ],
          th1: "Impact Index", th2: "Current State", th3: "Three-Way Goal"
        },
        {
          letter: "D",
          meta: "STRATEGIC SOLUTIONS & ACTION",
          title: "The Plan: 'Thunkal' Direct Supply System & Decentralized Digital Market",
          desc: "Structurally bypassing intermediary networks and linking producers directly to consumers via the 'Thunkal' decentralized logistics network:",
          matrix: [
            "Step 1 (Digital Sync): Registering producers and consumer cooperatives into the 'Thunkal' supply database.",
            "Step 2 (Direct Pricing): Determining end retail prices strictly based on production cost + transportation, bypassing broker commissions.",
            "Step 3 (Decentralized Logistics): Direct transport of produce from farm to consumer hubs via collaborative public-private District Logistics Loops.",
            "Step 4 (Direct Distribution): Distributing goods to consumers via community consumer hubs and digital outlets at the Grama Niladhari division level.",
            "Step 5 (Financial Discipline): Leveraging Layer-B code boundaries to block any attempted price manipulation or illicit brokerage fees automatically in real-time."
          ],
          buddhist: "Sapta Aparihaniya Dhamma: Regular consensus assemblies among logistics providers, farmers, and consumers ensure transparent trade policies and lasting economic security.",
          table: [
            ["Supply Chain Protocol", "Multi-tiered Brokerage Networks", "Direct Producer-to-Consumer Setup"],
            ["Logistics Management", "Controlled by Middlemen Cartels", "Decentralized Public-Private Loops"],
            ["Financial System", "Predatory Cash Transactions", "Layer-B Guarded Digital Payments"]
          ],
          th1: "Mechanism Index", th2: "Current State", th3: "Three-Way Goal"
        }
      ],
      ta: [
        {
          letter: "A",
          meta: "நுகர்வோர் சிக்கல் பகுப்பாய்வு",
          title: "பிரச்சினை: இடைத்தரகர்களின் செலவுகளால் நுகர்வோருக்கு அதிக விலை",
          desc: "பாரம்பரிய விநியோகச் சங்கிலியில், பல அடுக்கு இடைத்தரகர்கள் எவ்வித மதிப்பையும் கூட்டாமல், செயற்கையான பற்றாக்குறைகளை உருவாக்கி சில்லறை விலையை செயற்கையாக உயர்த்துகின்றனர்.",
          matrix: [
            "உற்பத்தியாளர்கள் நியாயமான விலையைப் பெறுவதில்லை, நுகர்வோர் உற்பத்தி செலவை விட 300% க்கும் அதிகமாக செலுத்த வேண்டிய கட்டாயத்தில் உள்ளனர்.",
            "போக்குவரத்து, சேமிப்பு மற்றும் ஏகபோக லாப வரம்புகளை இடைத்தரகர்கள் நேரடியாக நுகர்வோருக்கு மாற்றுகின்றனர்.",
            "உற்பத்தியாளர்களுக்கும் இறுதி நுகர்வோருக்கும் இடையே நேரடி தொடர்பு அல்லது வெளிப்படையான சந்தை இல்லாதது.",
            "செயற்கை விலை ஏற்ற இறக்கங்களைக் கட்டுப்படுத்த தற்போதைய சட்ட கட்டமைப்புகள் தவறிவிட்டன."
          ],
          buddhist: "தச ராஜ தர்மம்: கடுமையான பொருளாதார நெருக்கடியிலிருந்து குடிமக்களைப் பாதுகாக்க ஆட்சியாளர்கள் விலைகளை நிலைப்படுத்தி சுரண்டலை ஒழிக்க வேண்டும்.",
          table: [
            ["விலை விகிதம்", "உற்பத்தி செலவை விட 3 மடங்கு", "உற்பத்தி செலவை விட 1.3 மடங்கு"],
            ["விலை ஸ்திரத்தன்மை", "தினமும் கடுமையாக மாறுகிறது", "வெளிப்படையான நிலையான விலை அடிப்படை"],
            ["தயாரிப்பு தரம்", "மோசம் (இரசாயனப் பாதுகாப்பு கொண்டது)", "புதிய, நேரடி உள்ளூர் தயாரிப்புகள்"]
          ],
          th1: "முறைமை காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        },
        {
          letter: "B",
          meta: "மூலக் காரண பகுப்பாய்வு",
          title: "மூலக் காரணங்கள்: ஏகபோக மொத்த விற்பனை சந்தைகள் மற்றும் பரவலாக்கப்பட்ட நெட்வொர்க்குகள் இல்லாமை",
          desc: "அதிகப்படியான விலைகள் தயாரிப்பு பற்றாக்குறையால் ஏற்படுவதில்லை, மாறாக இடைத்தரகர்களால் கட்டுப்படுத்தப்படும் ஏகபோக பெளதீக சந்தை கட்டமைப்பால் ஏற்படுகிறது.",
          matrix: [
            "மொத்த பங்குகள் மற்றும் விலை நிர்ணயம் ஒரு சில இடைத்தரகர்களின் கைகளில் குவிந்துள்ளது.",
            "பரவலாக்கப்பட்ட போக்குவரத்து மற்றும் சேமிப்பு வசதிகள் இல்லாததால் உற்பத்தியாளர்கள் நுகர்வோருக்கு நேரடியாக விற்க முடிவதில்லை.",
            "அரசு விலை கட்டுப்பாட்டு நிறுவனங்களால் சந்தையில் நேரடி தலையீடுகள் எதுவும் இல்லை.",
            "விநியோகச் சங்கிலியில் தரவு வெளிப்படைத்தன்மை முற்றிலும் இல்லை."
          ],
          buddhist: "கூடதந்த சூத்திரம்: முறையான சந்தை உள்கட்டமைப்பு மற்றும் அரசாங்க விலை கட்டுப்பாடுகளை நிறுவத் தவறுவது மேக்ரோ பொருளாதார சரிவை நேரடியாகத் தூண்டுகிறது.",
          table: [
            ["விலை கட்டுப்பாட்டு அதிகாரம்", "ஏகபோக மொத்த விற்பனையாளர்கள்", "நேரடி தேவை மற்றும் விநியோக தரவு ஒத்திசைவு"],
            ["போக்குவரத்து தளவாடங்கள்", "மத்திய பெளதீக சந்தைகள்", "பரவலாக்கப்பட்ட நேரடி தளவாட சுழல்கள்"],
            ["தரவு வெளிப்படைத்தன்மை", "ரகசியமாக ஏகபோகப்படுத்தப்பட்டுள்ளது", "திறந்த டிஜிட்டல் விலை போர்டல்"]
          ],
          th1: "மூலக் காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        },
        {
          letter: "C",
          meta: "நன்மைகள் பகுப்பாய்வு",
          title: "நன்மைகள்: குறைந்த வாழ்க்கைச் செலவு மற்றும் உற்பத்தியாளர்-நுகர்வோர் அதிகாரம்",
          desc: "இடைத்தரகர் ஏகபோகங்களை ஒழிப்பது வாழ்க்கைச் செலவை கணிசமாகக் குறைக்கிறது, உற்பத்தியாளர் வருவாயை அதிகரிக்கிறது மற்றும் சந்தை நியாயத்தை உறுதி செய்கிறது.",
          matrix: [
            "நுகர்வோரின் வாழ்க்கைச் செலவில் கணிசமான குறைவு.",
            "உற்பத்தியாளர்கள் தங்கள் அறுவடைக்கு நிலையான மற்றும் நியாயமான விலையை நேரடியாகப் பெறுகிறார்கள்.",
            "செயற்கை பற்றாக்குறைகள் மற்றும் விலை உயர்வுகள் முற்றிலும் ஒழிக்கப்படுகின்றன.",
            "வெளிப்படையான வர்த்தக நடைமுறைகள் மூலம் செல்வத்தின் வேகம் அதிகரிக்கிறது."
          ],
          buddhist: "பரஸ்பர சகவாழ்வு: உற்பத்தியாளர்களுக்கும் நுகர்வோருக்கும் இடையே நேரடி, நியாயமான வர்த்தகத்தை நிறுவுவது நெறிமுறை சார்ந்த சமூக விழுமியங்களை பாதுகாக்கிறது.",
          table: [
            ["நுகர்வோர் திருப்தி", "மிகவும் குறைவு (விலை அழுத்தம் காரணமாக)", "அதிகம் (நியாயமான விலை & புதிய தரம்)"],
            ["உற்பத்தியாளர் வருமானம்", "நிலையற்றது & போதுமானதாக இல்லை", "நிலையான & அதிக லாபம்"],
            ["வர்த்தக சமநிலை", "இல்லை (அதிக சுரண்டல்)", "முழுமையான வெளிப்படைத்தன்மை மற்றும் நியாயத்தன்மை"]
          ],
          th1: "தாக்கக் காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        },
        {
          letter: "D",
          meta: "உපායමාර්ගික සැලසුම් සහ ක්‍රියාවන්",
          title: "திட்டம்: 'துன்கல்' நேரடி விநியோக முறை மற்றும் பரவலாக்கப்பட்ட டிஜிட்டல் சந்தை",
          desc: "இடைத்தரகர் நெட்வொர்க்குகளைத் தவிர்த்து, உற்பத்தியாளர்களை நுகர்வோருடன் நேரடியாக இணைக்கும் 'துன்கல்' பரவலாக்கப்பட்ட தளவாட நெட்வொர்க்:",
          matrix: [
            "படி 1 (டிஜிட்டல் ஒத்திசைவு): உற்பத்தியாளர்கள் மற்றும் நுகர்வோர் கூட்டுறவுகளை 'துன்கல்' விநியோக தரவுத்தளத்தில் பதிவு செய்தல்.",
            "படி 2 (நேரடி விலை நிர்ணயம்): தரகர் கமிஷன்களைத் தவிர்த்து, உற்பத்திச் செலவு + போக்குவரத்து அடிப்படையில் சில்லறை விலையை நிர்ணயித்தல்.",
            "படி 3 (பரவலாக்கப்பட்ட தளவாடங்கள்): கூட்டு பொது-தனியார் மாவட்ட தளவாட சுழல்கள் மூலம் பண்ணையிலிருந்து நுகர்வோர் மையங்களுக்கு நேரடியாக கொண்டு செல்லல்.",
            "படி 4 (நேரடி விநியோகம்): கிராம சேவை உத்தியோகத்தர் மட்டத்தில் உள்ள நுகர்வோர் மையங்கள் மூலம் நுகர்வோருக்கு விநியோகித்தல்.",
            "படி 5 (நிதி ஒழுக்கம்): எந்தவொரு விலை கையாளுதலையும் தானாகவே தடுத்து நிறுத்த Layer-B குறியீடு எல்லைகளைப் பயன்படுத்துதல்."
          ],
          buddhist: "சப்த அபரிஹானிய தர்மம்: தளவாட வழங்குநர்கள், விவசாயிகள் மற்றும் நுகர்வோர் இடையே வழக்கமான கூட்டங்கள் வெளிப்படையான வர்த்தகக் கொள்கைகளை உறுதி செய்கின்றன.",
          table: [
            ["விநியோகச் சங்கிலி முறை", "பல அடுக்கு இடைத்தரகர் நெட்வொர்க்குகள்", "நேரடி உற்பத்தியாளர்-நுகர்வோர் அமைப்பு"],
            ["தளவாட மேலாண்மை", "இடைத்தரகர் குழுக்களால் கட்டுப்படுத்தப்படுகிறது", "பரவலாக்கப்பட்ட பொது-தனியார் தளவாட சுழல்கள்"],
            ["நிதி அமைப்பு", "சுரண்டல் ரொக்கப் பரிவர்த்தனைகள்", "Layer-B பாதுகாக்கப்பட்ட டிஜிட்டல் கொடுப்பனவுகள்"]
          ],
          th1: "முறைமை காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        }
      ]
    }
  }
];

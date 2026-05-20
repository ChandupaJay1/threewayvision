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
      si: 'සැපයුම් දාම සමානතා මාස්ටර් මැට්‍රික්ස්',
      en: 'Supply Chain Equalization Matrix',
      ta: 'விநியோகச் சங்கிலி சமநிலை மேட்ரிக்ஸ்'
    },
    headerText: {
      si: 'තුන්කල් දැක්ම | සැපයුම් දාම සමානතා මාස්ටර් මැට්‍රික්ස්',
      en: 'Thun Kal Dekma | Supply Chain Equalization Matrix',
      ta: 'துன்கல் தெக்ம | விநியோகச் சங்கிலி சமநிலை மேட்ரிக்ஸ்'
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
          buddhist: "මහා වණිජ ජාතකය: වෙළඳාමේදී කූට ලෙස මිල ඉහළ දැමීම සහ අතරමැදි සූරාකෑම හරහා සමාජයේ සාමාන්‍ය ජනයා පීඩාවට පත් කිරීම සමස්ත රටක ආර්ථික සදාචාරය බිඳවැටීමට මඟ පාදයි.",
          table: [
            ["පාරිභෝගික මිල පිරිවැය", "300% - 400% (අධිකයි)", "නිෂ්පාදන මිල + සාධාරණ සේවා ගාස්තු 15%"],
            ["සැපයුම් දාමයේ ස්ථර", "4 - 6 (අතරමැදි ස්ථර)", "0 - 1 (සෘජු ඩිජිටල් ජාලය)"],
            ["මිල විනිවිදභාවය", "0% (රහසිගත මිල තීරණ)", "100% (බ්ලොක්චේන්/ඩිජිටල් පද්ධතිය හරහා)"]
          ],
          th1: "පද්ධති දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        },
        {
          letter: "B",
          meta: "මූල හේතු විශ්ලේෂණය",
          title: "මූල හේතු: ඒකාධිකාරී තොග වෙළඳපොළ සහ විමධ්‍යගත ජාල නොමැතිකම",
          desc: "භාණ්ඩ මිල ඉහළ යන්නේ සැපයුමේ හිඟකමක් නිසා නොවේ. භාණ්ඩ එකතු කිරීමේ, ප්‍රවාහනය කිරීමේ සහ බෙදාහැරීමේ පාලනය සීමිත අතරමැදියන් පිරිසක් අතේ කේන්ද්‍රගත වී තිබීම මෙයට ප්‍රධානතම හේතුවයි.",
          matrix: [
            "ගොවියාට හෝ නිෂ්පාදකයාට තම නිෂ්පාදන සෘජුවම වෙළඳපොළට හඳුන්වා දීමට ඇති ප්‍රවාහන හා මූල්‍ය දුෂ්කරතා.",
            "ප්‍රධාන ආර්ථික මධ්‍යස්ථාන ඒකාධිකාරී තොග වෙළෙන්දන්ගේ ග්‍රහණයට නතු වී තිබීම.",
            "පාරිභෝගිකයාට භාණ්ඩයේ සැබෑ නිෂ්පාදන පිරිවැය දැනගැනීමට ඇති තොරතුරු පරතරය (Information Asymmetry).",
            "රාජ්‍ය අංශයේ මැදිහත්වීම් නිලධාරීවාදී මන්දගාමීත්වයකින් යුක්ත වීම."
          ],
          buddhist: "කුටදන්ත සූත්‍රය: නිෂ්පාදකයා සහ පාරිභෝගිකයා අතර පවතින හුවමාරු ක්‍රියාවලිය විනිවිදභාවයෙන් තොර වූ විට සහ රාජ්‍යය විසින් සැපයුම් ජාල විධිමත් නොකරන විට රටේ දුප්පත්කම රජ කරයි.",
          table: [
            ["වෙළඳපොළ පාලනය", "සීමිත අතරමැදි කල්ලියක් සතුව ඇත", "විමධ්‍යගත නිෂ්පාදක සමූහාණ්ඩු සතුව ඇත"],
            ["තොරතුරු ගලායාම", "රහසිගත මිල ගණන්", "විවෘත ඩිජිටල් මිල දර්ශකය"],
            ["ප්‍රවාහන කාර්යක්ෂමතාව", "අකාර්යක්ෂම / නාස්තිය අධිකයි", "සංකාණ්ඩිත ප්‍රවාහන ජාලකරණය"]
          ],
          th1: "ප්‍රභව දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        },
        {
          letter: "C",
          meta: "යහපත විශ්ලේෂණය",
          title: "යහපත: ජීවන පිරිවැය පහළ යෑම සහ නිෂ්පාදක-පාරිභෝගික සවිබල ගැන්වීම",
          desc: "අතරමැදි ස්ථර ඉවත් කිරීමෙන් පාරිභෝගිකයාට සාධාරණ මිලකට භාණ්ඩ ලැබෙන අතරම, නිෂ්පාදකයාට ඉහළ ආදායමක් හිමි වේ. එමඟින් සමස්ත දේශීය ආර්ථිකයේ මුදල් සංසරණය වඩාත් සක්‍රීය වේ.",
          matrix: [
            "පාරිභෝගිකයාගේ මාසික ජීවන පිරිවැය අවම වශයෙන් 40% කින් පහළ යෑම.",
            "නිෂ්පාදකයාට ක්ෂණික සහ සාධාරණ මුදල් ලැබීම නිසා නිෂ්පාදනය ඉහළ නැංවීමට පෙළඹීම.",
            "කෘතිම මිල උච්චාවචනයන් සහ කළු කඩ මාෆියාව මුළුමනින්ම තුරන් වීම.",
            "ප්‍රාදේශීය මට්ටමින් නව රැකියා අවස්ථා සහ කාර්යක්ෂම ප්‍රවාහන ව්‍යවසායකයින් බිහිවීම."
          ],
          buddhist: "වියග්ඝපජ්ජ සූත්‍රය: භෝග සහ ධනය ආරක්ෂා කරගනිමින්, අනවශ්‍ය ලෙස අතරමැදියන්ට නාස්ති වීමට නොදී පාරිභෝගිකයා අර්ථවත් ලෙස ජීවත් වීම සැබෑ ආර්ථික සමෘද්ධියයි.",
          table: [
            ["ජීවන පිරිවැය පීඩනය", "ඉතා ඉහළ (ණය වීමට සිදු වේ)", "සමබර සහ ඉතිරි කිරීම් සහිතයි"],
            ["නිෂ්පාදක ආදායම", "අවම මට්ටමක (ණය උගුලක)", "ලාභදායී සහ ස්ථාවරයි"],
            ["වෙළඳපොළ සදාචාරය", "සූරාකෑම මත පදනම් වූවක්", "සාධාරණ සහ සදාචාරාත්මක හුවමාරුවක්"]
          ],
          th1: "ප්‍රතිඵල දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        },
        {
          letter: "D",
          meta: "උපායමාර්ගික සැලසුම් සහ ක්‍රියාමාර්ග",
          title: "සැලැස්ම: 'තුන්කල්' සෘජු සැපයුම් පද්ධතිය සහ විමධ්‍යගත ඩිජිටල් වෙළඳපොළ",
          desc: "අතරමැදියාගේ සූරාකෑම නැවැත්වීම සඳහා 'තුන්කල් දැක්ම' මඟින් හඳුන්වා දෙන තාක්ෂණික සහ ව්‍යුහාත්මක යාන්ත්‍රණය මෙසේය:",
          matrix: [
            "පියවර 1 (සෘජු ඩිජිටල් ජාලය): සෑම ප්‍රාදේශීය ලේකම් කොට්ඨාසයකම සිටින නිෂ්පාදකයින් සහ ඔවුන්ගේ නිෂ්පාදන ධාරිතාව 'තුන්කල් ඩිජිටල් ජාලය' (Dynamic Digital Registry) වෙත සෘජුවම සම්බන්ධ කිරීම.",
            "පියවර 2 (ස්මාර්ට් ප්‍රවාහන පද්ධතිය): පවතින පෞද්ගලික සහ රාජ්‍ය ප්‍රවාහන පද්ධති ඒකාබද්ධ කරමින්, නිෂ්පාදකයාගේ සිට පාරිභෝගිකයාගේ නගරයට හෝ නිවසටම භාණ්ඩ ප්‍රවාහනය සඳහා ස්ථාවර සේවා ගාස්තුවක් සහිත 'තුන්කල් ප්‍රවාහන බලකායක්' පිහිටුවීම.",
            "පියවර 3 (මිල විනිවිදභාවය - QR ක්‍රමය): පාරිභෝගිකයා මිලදී ගන්නා සෑම භාණ්ඩයකටම QR කේතයක් අමුණන අතර, එමඟින් නිෂ්පාදකයාගේ මිල, ප්‍රවාහන පිරිවැය සහ රජයේ බදු වෙන වෙනම පාරිභෝගිකයාට සෘජුවම බලාගත හැකි වීම.",
            "පියවර 4 (විමධ්‍යගත ගබඩා සංකීර්ණ): නාගරික මට්ටමින් 'පාරිභෝගික සමූහාණ්ඩු' (Consumer Hubs) මඟින් පාලනය වන විමධ්‍යගත සිසිලන සහ ගබඩා සංකීර්ණ පිහිටුවා භාණ්ඩ සෘජුවම තොග වශයෙන් ගෙන්වා බෙදාහැරීම.",
            "පියවර 5 (මූල්‍ය පහසුකම්): අතරමැදියාගේ අත්තිකාරම් මුදල් උගුලෙන් නිෂ්පාදකයා මුදවා ගැනීමට, 'තුන්කල් අරමුදල' හරහා ඇප රහිත, කෙටි කාලීන බීජ ණය සහ කඩිනම් පියවීම් ක්‍රමවේද ඩිජිටල් බැංකුකරණය හරහා ක්‍රියාත්මක කිරීම."
          ],
          buddhist: "සප්ත අපරිහානීය ධර්ම: නිෂ්පාදකයින්, පාරිභෝගිකයින් සහ ප්‍රවාහන ව්‍යවසායකයින් නිතර රැස්වී, විනිවිද පෙනෙන මිල පද්ධති සාකච්ඡා කර තීන්දු ගැනීමෙන් වෙළඳ විපත වළක්වා ගත හැකිය.",
          table: [
            ["මිල නියම කිරීමේ ක්‍රමය", "අතරමැදියාගේ අභිමතය පරිදි", "නිෂ්පාදන පිරිවැය පදනම් කරගත් සූත්‍රයක්"],
            ["භාණ්ඩ බෙදාහැරීම", "බහුස්තර ප්‍රවාහන ප්‍රවේශය", "සෘජු සැපයුම් දාම ක්‍රියාවලිය"],
            ["පාරිභෝගික ආරක්ෂාව", "නොමැත (සූරාකෑමට ලක් වේ)", "QR විනිවිදභාවය හරහා උපරිම ආරක්ෂාව"],
            ["මූල්‍ය ස්වාධීනත්වය", "අතරමැදියාගේ ණය මත යැපීම", "ඩිජිටල් 'තුන්කල්' ක්ෂණික ගෙවීම්"]
          ],
          th1: "යාන්ත්‍රණ දර්ශකය", th2: "වත්මන් තත්ත්වය", th3: "තුන්කල් ඉලක්කය"
        }
      ],
      en: [
        {
          letter: "A",
          meta: "Consumer Problem Analysis",
          title: "The Problem: High Consumer Prices Driven by Multi-tier Middlemen Inflation",
          desc: "The traditional supply chain is heavily exploited by multiple layers of middlemen who artificially inflate prices and create synthetic scarcity without adding any real value.",
          matrix: [
            "Producers are underpaid while consumers pay over 300% of the actual production cost.",
            "Middlemen shift logistics, storage inefficiencies, and monopoly margins entirely onto consumers.",
            "Absolute lack of direct communication channels or structural transparency between producer and consumer.",
            "Existing legal and regulatory frameworks completely fail to control artificial market manipulations."
          ],
          buddhist: "Maha-Vanija Jataka: Exploitative hoarding and unfair middleman markup structures erode the socio-economic moral fabric of a sovereign market.",
          table: [
            ["Consumer Price Load", "300% - 400% (Exploitative)", "Production Cost + 15% Fair Service Margin"],
            ["Supply Chain Tiers", "4 - 6 Middlemen Interventions", "0 - 1 (Direct Digital Infrastructure)"],
            ["Price Transparency", "0% (Asymmetric Hidden Matrix)", "100% (Blockchain/Open Source Ledger)"]
          ],
          th1: "System Index", th2: "Current State", th3: "Three-Way Goal"
        },
        {
          letter: "B",
          meta: "Root Cause Analysis",
          title: "Root Causes: Monopolistic Wholesale Distribution & Absence of Decentralized Networks",
          desc: "High prices do not stem from a deficit in production, but from centralized control over collection, transit, and distribution by legacy broker cartels.",
          matrix: [
            "Logistical and financial barriers preventing regional farmers from directly reaching urban retail spaces.",
            "Major economic hubs heavily gatekept by a consolidated group of wholesale brokers.",
            "Severe information asymmetry keeping the final consumer blind to actual baseline production costs.",
            "Bureaucratic inertia preventing state distribution setups from executing agile market interventions."
          ],
          buddhist: "Kutadanta Sutta: Asymmetric exchange corridors and failure to decentralize logistics networks trigger absolute structural poverty.",
          table: [
            ["Market Sovereignty", "Held by Centralized Broker Cartels", "Owned by Decentralized Producer Communes"],
            ["Information Velocity", "Proprietary / Opaque", "Real-time Public Digital Index"],
            ["Logistics Efficiency", "Fragmented / High Post-Harvest Waste", "Optimized Intermodal Sync Network"]
          ],
          th1: "Source Index", th2: "Current State", th3: "Three-Way Goal"
        },
        {
          letter: "C",
          meta: "Benefits of Resolution",
          title: "The Benefits: Drastic Cost of Living Reduction & Empowered Consumer-Producer Alliances",
          desc: "Flattening the supply chain secures an immediate cost reduction for the consumer while expanding the profit margin for the base producer, boosting velocity of capital.",
          matrix: [
            "Immediate drop of at least 40% in monthly household consumer expenditure.",
            "Guaranteed fair payouts for producers, triggering high volume local manufacturing.",
            "Complete eradication of artificial price gouging and black-market manipulation tactics.",
            "Generation of high-efficiency regional transit setups and micro-logistics entrepreneurship."
          ],
          buddhist: "Vyagghapajja Sutta: Safeguarding wealth from middleman friction guarantees structural asset preservation and authentic material prosperity.",
          table: [
            ["Cost of Living Stress", "Critical (Forced Debt Dependency)", "Equilibrated with High Savings Capacity"],
            ["Producer Revenue Flow", "Marginal (Systemic Debt Trap)", "Highly Lucrative & Predictable"],
            ["Market Integrity", "Extractive and Asymmetric", "Equitable and Symmetric Exchange"]
          ],
          th1: "Impact Index", th2: "Current State", th3: "Three-Way Goal"
        },
        {
          letter: "D",
          meta: "Strategic Action Plan",
          title: "The Solution: 'Thun Kal' Direct Logistics & Decentralized Digital Hubs",
          desc: "The programmatic model engineered by Three-Way Vision to permanently bypass exploitative middleman interventions:",
          matrix: [
            "Step 1 (Direct Digital Registry): Mapping all regional manufacturers and their dynamic output capacities directly onto the encrypted 'Thun Kal Digital Network'.",
            "Step 2 (Integrated Logistics Corp): Syncing public and private transit nodes into an agile fleet operating under fixed, regulated service tariffs from farm to urban hub.",
            "Step 3 (QR-Indexed Cost Architecture): Attaching end-to-end trace QR codes on items, breaking down baseline producer cost, freight tracking fee, and state levy.",
            "Step 4 (Decentralized Consumer Hubs): Erecting community-governed cold storage facilities in urban sectors to receive direct mass-volume dispatches.",
            "Step 5 (Sovereign Micro-Finance Anchor): Deploying unsecured short-term bridge financing via the 'Thun Kal Fund' to break producer reliance on predatory broker advances."
          ],
          buddhist: "Sapta Aparihaniya Dhamma: Direct, frequent assembly of producers, logistics operators, and consumer collectives effectively neutralizes market regression.",
          table: [
            ["Pricing Formula", "Broker Discretion / Speculation", "Cost-Plus Scientific Margin Formula"],
            ["Distribution Velocity", "Convoluted Intermediary Stops", "Direct End-to-End Fulfilment Nodes"],
            ["Consumer Protection", "None (Highly Vulnerable)", "Absolute via Transparent QR Provenance"],
            ["Capital Velocity", "Delayed / Dependent on Intermediary", "Instant Digital Settlement Protocols"]
          ],
          th1: "Mechanism Index", th2: "Current State", th3: "Three-Way Goal"
        }
      ],
      ta: [
        {
          letter: "A",
          meta: "நுகர்வோர் சிக்கல் பகுப்பாய்வு",
          title: "பிரச்சனை: இடைத்தரகர் செலவுகளால் நுகர்வோர் அதிக விலைக்கு பொருட்களை வாங்குதல்",
          desc: "பாரம்பரிய விநியோகச் சங்கிலியில் உள்ள பல அடுக்கு இடைத்தரகர்கள் எந்தவொரு மதிப்புக் கூட்டலையும் செய்யாமல், செயற்கை பற்றாக்குறையை உருவாக்கி, நுகர்வோருக்குப் பொருட்களை அதிக விலைக்கு விற்கிறார்கள்.",
          matrix: [
            "உற்பத்தியாளருக்கு நியாயமான விலை கிடைப்பதில்லை, நுகர்வோர் உற்பத்தி செலவை விட 300% க்கும் அதிகமான விலையை செலுத்துகிறார்கள்.",
            "போக்குவரத்து, சேமிப்பு மற்றும் ஏகபோக லாபங்களை இடைத்தரகர்கள் நுகர்வோர் மீது சுமத்துகின்றனர்.",
            "உற்பத்தியாளருக்கும் இறுதி நுகர்வோருக்கும் இடையே நேரடித் தொடர்பு அல்லது வெளிப்படையான சந்தை இல்லை.",
            "செயற்கை விலை ஏற்ற இறக்கங்களைக் கட்டுப்படுத்த தற்போதைய சட்டக் கட்டமைப்புகள் தவறிவிட்டன."
          ],
          buddhist: "மகா வணிஜ ஜாதகம்: வர்த்தகத்தில் மோசடியாக விலையை உயர்த்துவதும் இடைத்தரகர் சுரண்டலும் சமூகத்தின் சாதாரண மக்களை பாதித்து நாட்டின் பொருளாதார ஒழுக்கத்தை சீர்குலைக்கும்.",
          table: [
            ["நுகர்வோர் விலை", "300% - 400% (அதிகம்)", "உற்பத்தி விலை + 15% நியாயமான கட்டணம்"],
            ["விநியோக அடுக்குகள்", "4 - 6 அடுக்குகள்", "0 - 1 (நேரடி டிஜிட்டல் நெட்வொர்க்)"],
            ["விலை வெளிப்படைத்தன்மை", "0% (ரகசிய விலை)", "100% (டிஜிட்டல் முறை மூலம்)"]
          ],
          th1: "முறைமை காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        },
        {
          letter: "B",
          meta: "மூலக் காரண பகுப்பாய்வு",
          title: "மூலக் காரணங்கள்: ஏகபோக மொத்த சந்தை மற்றும் பரவலாக்கப்பட்ட நெட்வொர்க் இல்லாமை",
          desc: "பொருட்களின் விலை உயர்வதற்கு விநியோகப் பற்றாக்குறை காரணமல்ல. பொருட்களை சேகரித்தல், கொண்டு சேர்த்தல் ஆகியவற்றின் கட்டுப்பாடு சில இடைத்தரகர்களிடம் மட்டுமே குவிந்திருப்பதுதான் காரණம்.",
          matrix: [
            "விவசாயிகள் அல்லது உற்பத்தியாளர்கள் தங்கள் பொருட்களை நேரடியாக சந்தைக்கு கொண்டு செல்வதில் உள்ள போக்குவரத்து மற்றும் நிதி சிக்கல்கள்.",
            "முக்கிய பொருளாதார மையங்கள் ஏகபோக மொத்த வியாபாரிகளின் பிடியில் இருப்பது.",
            "நுகர்வோருக்கு பொருளின் உண்மையான உற்பத்தி செலவு தெரியாமல் இருக்கும் தகவல் இடைவெளி.",
            "அரசு துறையின் தலையீடுகள் அதிகாரத்துவ மந்தநிலையுடன் இருப்பது."
          ],
          buddhist: "கூடதந்த சூத்திரம்: உற்பத்தியாளருக்கும் நுகர்வோருக்கும் இடையிலான பரிமாற்றம் வெளிப்படைத்தன்மை இல்லாமல் இருக்கும்போது நாட்டின் வறுமை அதிகரிக்கும்.",
          table: [
            ["சந்தை கட்டுப்பாடு", "குறிப்பிட்ட இடைத்தரகர்களிடம்", "பரவலாக்கப்பட்ட உற்பத்தியாளர்களிடம்"],
            ["தகவல் ஓட்டம்", "ரகசிய விலை விவரங்கள்", "திறந்த டிஜிட்டல் விலை குறியீடு"],
            ["போக்குவரத்து திறன்", "திறனற்றது / வீணாதல் அதிகம்", "ஒருங்கிணைந்த போக்குவரத்து நெட்வொர்க்"]
          ],
          th1: "மூலக் காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        },
        {
          letter: "C",
          meta: "தீர்வின் நன்மைகள்",
          title: "நன்மைகள்: வாழ்க்கைச் செலவு குறைதல் மற்றும் உற்பத்தியாளர்-நுகர்வோர் வலுப்பெறுதல்",
          desc: "இடைத்தரகர் அடுக்குகளை அகற்றுவதன் மூலம் நுகர்வோருக்கு நியாயமான விலையில் பொருட்கள் கிடைப்பதுடன் உற்பத்தியாளருக்கும் அதிக வருமானம் கிடைக்கும்.",
          matrix: [
            "நுகர்வோரின் மாதாந்திர வாழ்க்கைச் செலவு குறைந்தது 40% வரை குறையும்.",
            "உற்பத்தியாளருக்கு உடனடி வருமானம் கிடைப்பதால் உற்பத்தியை அதிகரிக்க தூண்டப்படுவார்கள்.",
            "செயற்கை விலை ஏற்ற இறக்கங்கள் மற்றும் கருப்பு சந்தை மாஃபியா முற்றிலும் ஒழிக்கப்படும்.",
            "பிராந்திய மட்டத்தில் புதிய வேலை வாய்ப்புகளும் திறமையான போக்குவரத்து நிறுவனங்களும் உருவாகும்."
          ],
          buddhist: "வியக்கபஜ்ஜ சூத்திரம்: பயிர்களையும் செல்வத்தையும் பாதுகாத்து, இடைத்தரகர்களால் வீணாகாமல் தடுத்து நுகர்வோர் வாழ்வதே உண்மையான பொருளாதார செழிப்பு.",
          table: [
            ["வாழ்க்கைச் செலவு அழுத்தம்", "மிக அதிகம் (கடன் சுமை)", "சமநிலையானது மற்றும் சேமிப்புடையது"],
            ["உற்பத்தியாளர் வருமானம்", "மிகக் குறைவு (கடன் பொறியில்)", "லாபகரமானது மற்றும் நிலையானது"],
            ["சந்தை நெறிமுறை", "சுரண்டல் சார்ந்தது", "நியாயமான மற்றும் நெறிமுறை சார்ந்தது"]
          ],
          th1: "தாக்கக் காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        },
        {
          letter: "D",
          meta: "மூலோபாய திட்டங்கள்",
          title: "திட்டம்: 'துன்கல்' நேரடி விநியோக முறை மற்றும் பரவலாக்கப்பட்ட டிஜிட்டல் சந்தை",
          desc: "இடைத்தரகர் சுரண்டலைத் தடுக்க 'துன்கல் தெக்ம' அறிமுகப்படுத்தும் தொழில்நுட்ப மற்றும் கட்டமைப்பு வழிமுறை பின்வருமாறு:",
          matrix: [
            "படி 1 (நேரடி டிஜிட்டல் நெட்வொர்க்): ஒவ்வொரு பிரதேச செயலகப் பிரிவிலும் உள்ள உற்பத்தியாளர்களை 'துன்கல் டிஜிட்டல் நெட்வொர்க்' உடன் நேரடியாக இணைத்தல்.",
            "படி 2 (ஸ்மார்ட் போக்குவரத்து முறை): உற்பத்தியாளரிடமிருந்து நுகர்வோரின் நகரத்திற்கு பொருட்களைக் கொண்டு சேர்க்க நிலையான கட்டணத்துடன் கூடிய 'துன்கல் போக்குவரத்து படை' அமைத்தல்.",
            "படி 3 (விலை வெளிப்படைத்தன்மை - QR முறை): நுகர்வோர் வாங்கும் ஒவ்வொரு பொருளிலும் QR குறியீடு இருக்கும், அதன் மூலம் உற்பத்தி விலை மற்றும் போக்குவரத்து செலவை நேரடியாகப் பார்க்கலாம்.",
            "படி 4 (பரவலாக்கப்பட்ட கிடங்குகள்): நுகர்வோர் மையங்களால் நிர்வகிக்கப்படும் குளிரூட்டப்பட்ட கிடங்குகளை அமைத்து பொருட்களை நேரடியாக விநியோகித்தல்.",
            "படி 5 (நிதி வசதிகள்): இடைத்தரகர்களின் கடன் பொறியில் இருந்து உற்பத்தியாளர்களை மீட்க, 'துன்கல் நிதியம்' மூலம் பிணையற்ற குறுகிய கால கடன்களை வழங்குதல்."
          ],
          buddhist: "சப்த அபரிஹானிய தர்மம்: உற்பத்தியாளர்கள், நுகர்வோர்கள் மற்றும் போக்குவரத்து அமைப்புகள் அடிக்கடி கூடி விவாதிப்பதன் மூலம் வர்த்தக வீழ்ச்சியைத் தடுக்கலாம்.",
          table: [
            ["விலை நிர்ணய முறை", "இடைத்தரகரின் விருப்பப்படி", "உற்பத்தி செலவு அடிப்படையிலான சூத்திரம்"],
            ["பொருட்கள் விநியோகம்", "பல அடுக்கு போக்குவரத்து", "நேரடி விநியோகச் சங்கிலி முறை"],
            ["நுகர்வோர் பாதுகாப்பு", "இல்லை (சுரண்டப்படுகிறார்கள்)", "QR வெளிப்படைத்தன்மை மூலம் அதிகபட்ச பாதுகாப்பு"],
            ["நிதி சுதந்திரம்", "இடைத்தரகரின் கடனில் யேபல்", "டிஜிட்டல் உடனடி கொடுப்பனவுகள்"]
          ],
          th1: "செயல்முறை காட்டி", th2: "தற்போதைய நிலை", th3: "துன்கல் இலக்கு"
        }
      ]
    }
  },
  {
    id: 'gatalu6',
    name: {
      si: 'මූල්‍ය සාක්ෂරතාවය සහ මානව-භෞතික හැකියාවන් සංවර්ධන පද්ධතිය',
      en: 'Financial Literacy & Human Capital Development System',
      ta: 'நிதி கல்வியறிவு மற்றும் மனித-பௌதீக திறன் மேம்பாட்டு அமைப்பு'
    },
    headerText: {
      si: 'තුන්කල් දැක්ම | මූල්‍ය සාක්ෂරතාවය සහ මානව-භෞතික හැකියාවන් සංවර්ධන පද්ධතිය',
      en: 'Thun Kal Dekma | Human Capital & Financial Literacy Embedded System',
      ta: 'துன்கல் தெக்ம | நிதி கல்வியறிவு மற்றும் மனித திறன் மேம்பாட்டு அமைப்பு'
    },
    searchPlaceholder: {
      si: 'පද්ධති සංරචක හෝ ක්‍රියාවලි සොයන්න...',
      en: 'Search components or processes...',
      ta: 'கூறுகள் அல்லது செயல்முறைகளைத் தேடுங்கள்...'
    },
    tableHeaders: {
      si: ['පද්ධති දර්ශකය', 'වත්මන් තත්ත්වය', 'තුන්කල් ඉලක්කය'],
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
          letter: 'A',
          meta: 'මූල්‍ය හා මානව ගැටලු විශ්ලේෂණය',
          title: 'ගැටලුව: ග්‍රාමීය මට්ටමින් මූල්‍ය සාක්ෂරතාවය සහ ආදායම්-වියදම් කළමනාකරණ ක්‍රමවේදයක් නොමැති වීම',
          desc: 'ග්‍රාමීය ජනතාව උපයන ආදායම නිවැරදිව අයවැයගත කිරීමට හෝ ආයෝජනය කිරීමට විද්‍යාත්මක ක්‍රමවේදයක් නොමැත. මූල්‍ය සාක්ෂරතාවය සහ තමන් සතු මානව හා භෞතික හැකියාවන් හඳුනා නොගැනීම නිසා ඔවුන් ක්ෂුද්‍ර මූල්‍ය ණය උගුල්වල සහ ආර්ථික ව්‍යාකූලතාවල සිරවී සිටිති.',
          matrix: [
            'පවුල් මට්ටමින් තමන්ගේ ආදායම් සහ වියදම් පද්ධතිගතව කළමනාකරණය කරගැනීමට ග්‍රාමීය මට්ටමින් කිසිදු ක්‍රමවේදයක් නොමැති වීම.',
            'තමන් සතු සැබෑ මානව හැකියාවන් (Human Skills) සහ ප්‍රාදේශීය භෞතික සම්පත් (Physical Assets) හඳුනාගෙන සංවර්ධනය කිරීමට පද්ධතියක් නොමැති වීම.',
            'අතාර්කික වියදම් රටාවන් සහ ක්ෂුද්‍ර මූල්‍ය සමාගම්වල අධික පොලී ණය උගුල්වලට ග්‍රාමීය ප්‍රජාව ගොදුරු වීම.',
            'ප්‍රාදේශීය මට්ටමේ දක්ෂතා සහ සම්පත්, ගෝලීය වෙළඳපොළ (Global Market) සමඟ බද්ධ කිරීමට පාලමක් නොමැතිකම.'
          ],
          buddhist: 'සිඟාලෝවාද සූත්‍රය: බුදු දහම පෙන්වා දෙන්නේ තමන් උපයන ධනය කොටස් හතරකට (භෝග විභජන ක්‍රමය) බෙදා, ඉන් එක් කොටසක් පරිභෝජනයටත්, කොටස් දෙකක් ව්‍යාපාර හා නිෂ්පාදන කටයුතුවලටත්, හතරවන කොටස හදිසි ආපදාවකදී ප්‍රයෝජනයට ගැනීමට ඉතිරි කළ යුතු බවයි.',
          table: [
            ['ග්‍රාමීය මූල්‍ය සාක්ෂරතාවය', '5% ට වඩා අඩු (අසංවිධානාත්මක)', '100% ප්‍රායෝගික සාක්ෂරතාවය'],
            ['ආදායම්-වියදම් පාලනය', 'සැලසුමකින් තොරව (ණය බරිත)', 'ඩිජිටල් අයවැයකරණය සහ ස්වයං-පාලනය'],
            ['හැකියාවන් හඳුනාගැනීම', 'හුදෙකලා වූ සහ භාවිතයට නොගත්', 'දිස්ත්‍රික් මට්ටමින් සිතියම්ගත කළ දත්ත පද්ධතියක්']
          ],
          th1: 'පද්ධති දර්ශකය',
          th2: 'වත්මන් තත්ත්වය',
          th3: 'තුන්කල් ඉලක්කය'
        },
        {
          letter: 'B',
          meta: 'මූල හේතු විශ්ලේෂණය',
          title: 'මූල හේතු: සාම්ප්‍රදායික අධ්‍යාපන ක්‍රමයේ දුර්වලතාවය සහ උපදේශන යාන්ත්‍රණයක් නොමැතිකම',
          desc: 'වත්මන් ආර්ථික පරිහානියට මූලික හේතුව වන්නේ පාසල් සහ විශ්වවිද්‍යාල පද්ධතිය තුළින් ප්‍රායෝගික මූල්‍ය කළමනාකරණය හෝ මානව කුසලතා ඔප්නැංවීමක් සිදු නොකිරීමයි.',
          matrix: [
            'පාසල් සහ විශ්වවිද්‍යාල අධ්‍යාපනය තුළ ප්‍රායෝගික මූල්‍ය පාලනය හෝ ව්‍යවසායකත්ව ඥානය උගන්වනු නොලැබීම.',
            'මානව සහ භෞතික දුර්වලතා හඳුනාගෙන ඒවා මඟහරවා ගැනීමට ග්‍රාමීය මට්ටමින් ක්‍රියාත්මක වන රාජ්‍ය උපදේශන (Counseling) ජාලයක් නොමැති වීම.',
            'විශ්වවිද්‍යාල පර්යේෂණ සහ අධ්‍යයන කටයුතු ප්‍රායෝගික බිම් මට්ටමේ ආර්ථික ගැටලු විසඳීම සඳහා බද්ධ නොකිරීම.',
            'ග්‍රාමීය ප්‍රජාවට තමන්ගේ මූල්‍ය ප්‍රගතිය සහ හැකියාවන් ස්වයං-ඇගයීමකට ලක් කිරීමට තාක්ෂණික මෙවලම් නොමැතිකම.'
          ],
          buddhist: 'ව්‍යග්ඝපජ්ජ සූත්‍රය: ආර්ථික ස්ථාවරත්වය සඳහා සමජීවිකතා සහ උට්ඨාන සම්පදා තිබිය යුතුය. අධ්‍යාපනය තුළින් මෙම ගුණාංග මිනිසා තුළ වර්ධනය නොකිරීම පද්ධතියේ බිඳවැටීමට මූලික හේතුවයි.',
          table: [
            ['අධ්‍යාපනික ප්‍රවේශය', 'න්‍යායාත්මක (ප්‍රායෝගික නොවන)', 'කුසලතා හා මූල්‍ය විද්‍යාව මත පදනම් වූ'],
            ['රාජ්‍ය උපදේශන සේවා', 'නොමැත (නිලධාරීවාදී)', 'සක්‍රීය ප්‍රාදේශීය උපදේශන සහ සැලසුම්කරණය'],
            ['විශ්වවිද්‍යාල දායකත්වය', 'හුදෙකලා පර්යේෂණ පමණි', 'ග්‍රාමීය ආර්ථික පරිවර්තන උපදේශකත්වය']
          ],
          th1: 'ප්‍රභව දර්ශකය',
          th2: 'වත්මන් තත්ත්වය',
          th3: 'තුන්කල් ඉලක්කය'
        },
        {
          letter: 'C',
          meta: 'යහපත හා විභවතා විශ්ලේෂණය',
          title: 'යහපත: ගෝලීය මට්ටමේ කුසලතා සංවර්ධනය, ස්වයං-කළමනාකරණය සහ යථාර්ථය අවබෝධය',
          desc: 'ග්‍රාමීය මට්ටමින් මානව හා භෞතික විභවතාවයන් නිවැරදිව හඳුනාගෙන උපදේශනය සහ සැලසුම්කරණය සිදුකිරීමෙන්, ග්‍රාමීය පුරවැසියාට ගෝලීය මට්ටමට ආර්ථික සන්නද්ධතාවයක් සහ මූල්‍ය ස්වාධීනත්වයක් ළඟා කරගත හැකිය.',
          matrix: [
            'ග්‍රාමීය මට්ටමේ සිටම මානව හැකියාවන් සහ දක්ෂතා හඳුනාගෙන ඒවා උපරිම කාර්යක්ෂමතාවයෙන් වර්ධනය කිරීම.',
            'මානව හා භෞතික දුර්වලතා කල්තියා හඳුනාගෙන, විද්‍යාත්මක සැලසුම්කරණය තුළින් එම දුර්වලතා මඟහැරවීම.',
            'පවුල් ඒකක සතු ආදායම් සහ වියදම් රටාවන් නිවැරදිව පාලනය වීම නිසා ණය බරින් තොර ස්ථාවර ව්‍යවසායක සමාජයක් බිහිවීම.',
            'යථාර්ථය අවබෝධ කරගත් පරිහරණය තුළින් ආර්ථික පීඩනය තුරන් වී උසස් ජීවන තත්ත්වයක් උදාවීම.'
          ],
          buddhist: 'අංගුත්තර නිකාය (අණන සූත්‍රය): අත්ථි සුඛ, භෝග සුඛ, අනණ සුඛ සහ අනවජ්ජ සුඛ — මෙම සතුට උදා වන්නේ මූල්‍ය ස්වයං-කළමනාකරණය තුළිනි.',
          table: [
            ['පුරවැසි ණය බරිතභාවය', 'ඉතා ඉහළ (ණය උගුලක)', '0% (ණය නැතිකමේ සතුට)'],
            ['සම්පත් පරිභෝජනය', 'අතාර්කික සහ නාස්තිකාර', 'යථාර්ථවාදී සහ තාර්කික පරිහරණය'],
            ['කුසලතා මට්ටම', 'දේශීය / සාම්ප්‍රදායික', 'ගෝලීය මට්ටමට ගැළපෙන (Global Standard)']
          ],
          th1: 'ප්‍රතිඵල දර්ශකය',
          th2: 'වත්මන් තත්ත්වය',
          th3: 'තුන්කල් ඉලක්කය'
        },
        {
          letter: 'D',
          meta: 'සැලසුම්කරණය සහ ක්‍රියාමාර්ග',
          title: 'සැලැස්ම: පාසල් හා විශ්වවිද්‍යාල ප්‍රතිසංස්කරණ සහ ප්‍රාදේශීය උපදේශන යාන්ත්‍රණය',
          desc: "'තුන් කල් දැක්ම' මඟින් සමස්ත පාසල් විෂය මාලාව සහ විශ්වවිද්‍යාල පද්ධතිය ව්‍යූහාත්මක ප්‍රතිසංස්කරණයකට ලක් කරයි. සෑම ප්‍රාදේශීය ලේකම් කාර්යාලයකම මානව-භෞතික සම්පත් තක්සේරුකරණ සහ මූල්‍ය උපදේශන මධ්‍යස්ථාන පිහිටුවනු ලැබේ.",
          matrix: [
            "පාසල් අධ්‍යාපනයට 6 ශ්‍රේණියේ සිටම 'ප්‍රායෝගික මූල්‍ය විද්‍යාව සහ අයවැයකරණය' අනිවාර්ය විෂයයක් ලෙස ඇතුළත් කිරීම.",
            'විශ්වවිද්‍යාල පද්ධතිය මඟින් සෑම දිස්ත්‍රික්කයකම ග්‍රාමීය මානව සහ භෞතික සම්පත් සිතියම්ගත කිරීම (Asset & Talent Mapping) සිදු කිරීම.',
            "ග්‍රාමීය මට්ටමින් 'තුන්කල් මූල්‍ය සහායක' ඩිජිටල් පද්ධතියක් (AI Financial Companion) හඳුන්වා දීම.",
            'ප්‍රාදේශීය ලේකම් කොට්ඨාස මට්ටමින් මානව කුසලතා සංවර්ධන සහ මූල්‍ය උපදේශන නිලධාරී යාන්ත්‍රණයක් ස්ථාපිත කිරීම.'
          ],
          buddhist: 'සප්ත අපරිහානීය ධර්ම: අධ්‍යාපනඥයන්, විශ්වවිද්‍යාල පර්යේෂකයන් සහ ප්‍රාදේශීය ප්‍රජාව නිරන්තරයෙන් රැස්වී දත්ත පදනම් කරගනිමින් මිනස් ශ්‍රමය සහ සම්පත් කළමනාකරණය කිරීම තුළින් දේශය කිසිදා පිරිහෙන්නේ නැත.',
          table: [
            ['අධ්‍යාපන ප්‍රතිසංස්කරණ', 'න්‍යායාත්මක / සාම්ප්‍රදායික', 'දිගුකාලීන පද්ධතිමය පාසල් හා වර්සිටි ප්‍රතිසංස්කරණ'],
            ['මූල්‍ය කළමනාකරණ මෙවලම්', 'නොමැත (අතින් ලියන / අනුමාන)', 'AI-Driven සජීවී අයවැයකරණ මෘදුකාංග'],
            ['කුසලතා පරිවර්තනය', 'ප්‍රාදේශීය මට්ටමේ සිරවීම', 'ගෝලීය මට්ටමේ වෘත්තීය නිපුණතාවය']
          ],
          th1: 'යාන්ත්‍රණ දර්ශකය',
          th2: 'වත්මන් තත්ත්වය',
          th3: 'තුන්කල් ඉලක්කය'
        }
      ],
      en: [
        {
          letter: 'A',
          meta: 'HUMAN & FINANCIAL PROBLEM ANALYSIS',
          title: 'The Problem: Lack of Financial Literacy & Absence of Rural Income-Expenditure Tracking',
          desc: 'Rural populations lack scientific methods to budget or invest income properly. Due to an inability to identify human potential and local assets, they remain trapped in micro-finance debt loops and localized economic stagnation.',
          matrix: [
            'Total absence of a localized micro-budgeting platform for families to systematically control expenditures.',
            'No structured metric to identify and leverage latent human skills and regional material resources.',
            'Vulnerability to predatory micro-finance networks driven by irrational consumption traps.',
            'Lack of an institutional bridge connecting rural capacity directly to the global value ecosystem.'
          ],
          buddhist: 'Sigalovada Sutta: The Buddha pioneered the fourfold wealth allocation model (Bhoga Vibhajana): 1 part for consumption, 2 parts for economic investment, and 1 part secured as a buffer for emergency reserves.',
          table: [
            ['Rural Financial Literacy', 'Below 5% (Disorganized)', '100% Practical Empowerment'],
            ['Income-Expenditure Control', 'Unplanned (Debt-Driven)', 'Digital Micro-Budgeting & Autonomy'],
            ['Asset/Talent Discovery', 'Isolated & Underutilized', 'District-Mapped Open Data Ledger']
          ],
          th1: 'System Metric',
          th2: 'Current Status',
          th3: 'Three-Way Target'
        },
        {
          letter: 'B',
          meta: 'ROOT CAUSE ANALYSIS',
          title: 'Root Causes: Outdated Curriculum & Deficient Grassroots Advisory Infrastructure',
          desc: 'The core failure lies within an educational model that insulates schools and universities from ground-level economics. There is no active administrative framework translating academic research into localized wealth planning.',
          matrix: [
            'Primary and secondary curricula completely exclude practical asset management and entrepreneurial science.',
            'Absence of state-backed cognitive and financial counseling networks to systematically address human and systemic friction.',
            'Academic research institutes operate in silos, failing to interface with immediate rural development needs.',
            'Lack of intuitive technological instruments allowing citizens to audit their own financial trajectory.'
          ],
          buddhist: "Vyagghapajja Sutta: Sustainable economic balance requires 'Samajivikata' and 'Utthana-Sampada'. Neglecting these in modern academic models breaks the socio-economic equilibrium.",
          table: [
            ['Educational Framework', 'Theoretical / Abstract', 'Skill & Financial Intelligence Architecture'],
            ['State Counseling Access', 'Non-existent (Bureaucratic)', 'Active Decentralized Planning & Coaching Units'],
            ['University Integration', 'Isolated Monographs', 'Direct Grassroots Economic Intervention']
          ],
          th1: 'Root Indicator',
          th2: 'Current Status',
          th3: 'Three-Way Target'
        },
        {
          letter: 'C',
          meta: 'BENEFITS & POTENTIAL ANALYSIS',
          title: 'Benefits: Global Skill Equalization, Financial Autonomy & Rational Consumption',
          desc: 'By deploying structured capability mapping and micro-counseling, rural citizens transition from vulnerable laborers to highly organized, globally competitive asset managers.',
          matrix: [
            'Maximization of regional human capital through structured, early-stage talent profiling.',
            'Proactive mitigation of human and physical vulnerabilities via targeted structural engineering.',
            'Eradication of household debt cycles, resulting in a credit-stable, highly resilient enterprise network.',
            'Realization of rationalized resource utilization, lifting families into lasting psychological and material stability.'
          ],
          buddhist: 'Anana Sutta: Atthi-Sukha, Bhoga-Sukha, Anana-Sukha, and Anavajja-Sukha — accessible only via rigorous self-governance.',
          table: [
            ['Household Debt Burden', 'Critically High (Debt Trap)', '0% (The Supreme Peace of Debtlessness)'],
            ['Resource Consumption', 'Erratic & Speculative', 'Data-Driven / Rational Consumption'],
            ['Talent Competitiveness', 'Isolated / Traditional', 'Global Standard Professional Alignment']
          ],
          th1: 'Impact Metric',
          th2: 'Current Status',
          th3: 'Three-Way Target'
        },
        {
          letter: 'D',
          meta: 'STRATEGIC PLAN & INTERVENTIONS',
          title: 'The Plan: Comprehensive Curricular Reform & Localized Counseling Infrastructure',
          desc: "The 'Three-Way Vision' initiates structural educational evolution alongside specialized local infrastructure in every Divisional Secretariat.",
          matrix: [
            "Mandatory integration of 'Practical Financial Intelligence & Resource Budgeting' into secondary education starting from Grade 6.",
            'Mobilization of national universities to conduct open-source regional Asset & Talent Mapping across all 25 districts.',
            "Launch of the 'Thun Kal Companion' mobile engine—an AI financial auditor localized for family resource optimization.",
            'Establishment of dedicated Capacity & Counseling Units within every Divisional Secretariat.'
          ],
          buddhist: 'Sapta Aparihaniya Dhamma: When educationists, state researchers, and grassroots leaders meet in unified assembly to process data and audit capacity, structural degeneration is permanently averted.',
          table: [
            ['Educational Interventions', 'Static / Outdated Curriculum', 'Long-term Structural School & Varsity Reforms'],
            ['Analytical Toolkits', 'None (Manual / Speculative)', 'AI-Driven Real-time Budgeting Companion'],
            ['Skill Deployment', 'Confined to Local Markets', 'Global Digital Value Chain Integration']
          ],
          th1: 'Mechanism Index',
          th2: 'Current Status',
          th3: 'Three-Way Goal'
        }
      ],
      ta: [
        {
          letter: 'A',
          meta: 'மனித மற்றும் நிதி சிக்கல் பகுப்பாய்வு',
          title: 'பிரச்சினை: நிதி கல்வியறிவு இல்லாமை மற்றும் கிராமப்புற வருமான-செலவு கண்காணிப்பு இல்லாமை',
          desc: 'கிராமப்புற மக்களுக்கு வருமானத்தை திட்டமிடவோ முதலீடு செய்யவோ அறிவியல் முறைகள் இல்லை. மனித திறன்களையும் உள்ளூர் வளங்களையும் அடையாளம் காண முடியாததால் நுண்நிதி கடன் பொறிகளில் சிக்கியுள்ளனர்.',
          matrix: [
            'குடும்பங்கள் செலவுகளை முறையாக கட்டுப்படுத்த கிராமப்புற மைக்ரோ-பட்ஜெட்டிங் தளம் இல்லை.',
            'மறைமுக மனித திறன்கள் மற்றும் பிராந்திய வளங்களை கண்டறிய அமைப்பு இல்லை.',
            'அறிவற்ற நுகர்வு பொறிகளால் சுரண்டல் நுண்நிதி நெட்வொர்க்குகளுக்கு ஆளாகுதல்.',
            'கிராமப்புற திறனை உலகளாவிய மதிப்பு சுழலுடன் இணைக்க நிறுவன பாலம் இல்லை.'
          ],
          buddhist: 'சிங்காலோவாத சூத்திரம்: நான்கு பகுதி செல்வ பிரிப்பு மாதிரி (போக விபஜன) — நுகர்வு, முதலீடு, அவசரகால இருப்பு.',
          table: [
            ['கிராமப்புற நிதி கல்வியறிவு', '5% க்கும் குறைவு', '100% நடைமுறை அதிகாரம்'],
            ['வருமான-செலவு கட்டுப்பாடு', 'திட்டமிடாத (கடன் சார்ந்த)', 'டிஜிட்டல் மைக்ரோ-பட்ஜெட்டிங்'],
            ['வள/திறன் கண்டறிதல்', 'தனிமைப்படுத்தப்பட்டது', 'மாவட்ட வரைபட தரவு பதிவேடு']
          ],
          th1: 'முறைமை காட்டி',
          th2: 'தற்போதைய நிலை',
          th3: 'துன்கல் இலக்கு'
        },
        {
          letter: 'B',
          meta: 'மூலக் காரண பகுப்பாய்வு',
          title: 'மூலக் காரணங்கள்: பழமையான பாடத்திட்டம் மற்றும் பிராந்திய ஆலோசனை குறைபாடு',
          desc: 'பாடசாலைகளும் பல்கலைக்கழகங்களும் நிலப்பரப்பு பொருளாதாரத்திலிருந்து தனிமைப்படுத்தப்பட்ட கல்வி மாதிரியே முக்கிய தோல்வியாகும்.',
          matrix: [
            'பாடத்திட்டத்தில் நடைமுறை சொத்து மேலாண்மை அல்லது தொழில்முனைவோர் அறிவியல் இல்லை.',
            'மனித மற்றும் பொருளாதார உராய்சல்களை சரிசெய்ய அரசு ஆலோசனை நெட்வொர்க் இல்லை.',
            'பல்கலைக்கழக ஆராய்ச்சி கிராமப்புற தேவைகளுடன் இணைக்கப்படவில்லை.',
            'பொருளாதார பாதையை தணிக்கை செய்ய தொழில்நுட்ப கருவிகள் இல்லை.'
          ],
          buddhist: 'வியக்கபஜ்ஜ சூத்திரம்: சமஜீவிகதா மற்றும் உத்தான-சம்பதா — நவீன கல்வியில் இவை புறக்கணிக்கப்படுவது சமநிலையை உடைக்கிறது.',
          table: [
            ['கல்வி கட்டமைப்பு', 'கோட்பாட்டு / சுருக்கமான', 'திறன் மற்றும் நிதி நுண்ணறிவு'],
            ['அரசு ஆலோசனை', 'இல்லை (அதிகாரத்துவ)', 'பரவலாக்கப்பட்ட திட்டமிடல்'],
            ['பல்கலைக்கழக ஒருங்கிணைப்பு', 'தனிமைப்படுத்தப்பட்ட ஆய்வு', 'நேரடி கிராமப்புற தலையீடு']
          ],
          th1: 'மூலக் காட்டி',
          th2: 'தற்போதைய நிலை',
          th3: 'துன்கல் இலக்கு'
        },
        {
          letter: 'C',
          meta: 'நன்மைகள் பகுப்பாய்வு',
          title: 'நன்மைகள்: உலகளாவிய திறன் சமநிலை, நிதி சுதந்திரம்',
          desc: 'திறன் வரைபடமும் நுண்-ஆலோசனையும் மூலம் கிராமப்புற குடிமக்கள் உலகளாவிய போட்டியிடும் சொத்து மேலாளர்களாக மாறுகிறார்கள்.',
          matrix: [
            'ஆரம்பக்கட்ட திறமை வரைபடமிடல் மூலம் மனித மூலதனத்தை அதிகரித்தல்.',
            'மனித மற்றும் பௌதீக பலவீனங்களை முன்கூட்டியே குறைத்தல்.',
            'குடும்ப கடன் சுழற்சிகளை ஒழித்தல்.',
            'வளங்களின் தர்க்கரீதியான பயன்பாடு மூலம் நிலையான வாழ்க்கை.'
          ],
          buddhist: 'அனன சூத்திரம்: அத்தி-சுகம், போக-சுகம், அனன-சுகம், அனவஜ்ஜ-சுகம் — கடுமையான சுய-ஆளுமை மூலம் மட்டுமே.',
          table: [
            ['குடும்ப கடன் சுமை', 'மிக உயர்', '0% (கடனற்ற அமைதி)'],
            ['வள நுகர்வு', 'அச்சுறுத்தல் / ஊகம்', 'தரவு-சார்ந்த நுகர்வு'],
            ['திறன் போட்டித்தன்மை', 'பாரம்பரிய / தனிமை', 'உலக தரநிலை']
          ],
          th1: 'தாக்கக் காட்டி',
          th2: 'தற்போதைய நிலை',
          th3: 'துன்கல் இலக்கு'
        },
        {
          letter: 'D',
          meta: 'மூலோபாயத் திட்டம்',
          title: 'திட்டம்: பாடத்திட்ட சீர்திருத்தம் மற்றும் பிராந்திய ஆலோசனை',
          desc: "'துன்கல் தெக்ம' ஒவ்வொரு பிரதேச செயலகத்திலும் திறன் மற்றும் நிதி ஆலோசனை மையங்களை நிறுவுகிறது.",
          matrix: [
            '6 ஆம் வகுப்பு முதல் நடைமுறை நிதி நுண்ணறிவு கட்டாய பாடம்.',
            '25 மாவட்டங்களிலும் Asset & Talent Mapping.',
            "'துன்கல் Companion' AI நிதி தணிக்கை பயன்பாடு.",
            'திறன் & ஆலோசனை பிரிவுகள் நிறுவல்.'
          ],
          buddhist: 'சப்த அபரிஹானிய தம்மா: கல்வியாளர்கள், ஆராய்ச்சியாளர்கள், பிராந்திய தலைவர்கள் ஒன்றிணைந்து தரவு செயலாக்கினால் வீழ்ச்சி தடுக்கப்படும்.',
          table: [
            ['கல்வி தலையீடுகள்', 'நிலையான பாடத்திட்டம்', 'நீண்டகால சீர்திருத்தம்'],
            ['பகுப்பாய்வு கருவிகள்', 'கையேடு / ஊகம்', 'AI நேரடி பட்ஜெட்டிங்'],
            ['திறன் பயன்பாடு', 'உள்ளூர் சந்தை மட்டும்', 'உலக டிஜிட்டல் சங்கிலி']
          ],
          th1: 'முறைமை காட்டி',
          th2: 'தற்போதைய நிலை',
          th3: 'துன்கல் இலக்கு'
        }
      ]
    }
  },
  {
    id: 'gatalu7',
    name: {
      si: 'ප්‍රාදේශීය නිපුණතා සහ සහජ දක්ෂතා සවිබලගැන්වීමේ ජාතික පද්ධතිය',
      en: 'Regional Talents & Inherent Skills Empowerment System',
      ta: 'பிராந்திய திறமைகள் மற்றும் உள்ளார்ந்த திறன்கள் அதிகாரமளிப்பு அமைப்பு'
    },
    headerText: {
      si: 'තුන්කල් දැක්ම | ප්‍රාදේශීය නිපුණතා ඌන-උපයෝජන අර්බුදය සහ සහජ දක්ෂතා තාක්ෂණික ප්‍රතිසංවිධානය',
      en: 'Thun Kal Dekma | Regional Skill Underutilization & Talent Technical Restructuring',
      ta: 'துன்கல் தெக்ம | பிராந்திய திறமை குறைபாடு மற்றும் திறன் தொழில்நுட்ப மறுசீரமைப்பு'
    },
    searchPlaceholder: {
      si: 'දත්ත මැට්‍රික්ස් සොයන්න...',
      en: 'Search matrix data...',
      ta: 'மேட்ரிக்ஸ் தரவைத் தேடுங்கள்...'
    },
    pageLabel: {
      si: 'පිටුව',
      en: 'Page',
      ta: 'பக்கம்'
    },
    layoutType: 'analytics',
    slides: {
      si: [
        {
          letter: 'A',
          title: 'නිපුණතා සහ සහජ හැකියාවන්ගේ අවතක්සේරුව (Problem Specification)',
          content: 'ග්‍රාමීය තරුණ ප්‍රජාව සතු සහජ ඩිජිටල්, කාර්මික හෝ නිර්මාණාත්මක දක්ෂතාවලට සරිලන වටිනාකමක් හෝ රැකියා අවස්ථා ගම තුළ නොමැති වීම මහා ජාතික නාස්තියකි.',
          bullets: ['ග්‍රාමීය තරුණ දක්ෂතාවලින් 72%කට වඩා නුසුදුසු රැකියාවල නිරත වීම.', 'ආදායම් අසමතුලිතතාවය නිසා ඇතිවන මානසික සහ ආර්ථික බංකොලොත්භාවය.'],
          buddhistTitle: 'සිඟාලෝවාද සූත්‍රය: කුසලතා සහ සම්මා ආජීවය',
          buddhistText: 'පුද්ගලයෙකු සතු සහජ හැකියාවන් සහ නිපුණතාවන් (සිප්පස්ස) හඳුනාගෙන, ඒවාට අනුකූලව සදාචාරාත්මක රැකියාවල (සම්මා ආජීව) නිරත වීමට අවස්ථාව සැලසීම ආර්ථික පරිහානිය වැළැක්වීමේ මූලිකම පදනමයි.',
          tableTitle: 'ග්‍රාමීය නිපුණතා ඌන-උපයෝජන දර්ශකය',
          tableHeaders: ['කලාපීය දර්ශකය', 'වත්මන් තත්ත්වය', 'තුන්කල් ඉලක්කය'],
          tableRows: [
            ['නිපුණතා සහ රැකියා අනුසූචිය', '28% (අසමතුලිතයි)', '100% (සමතුලිතයි)'],
            ['තරුණ ශ්‍රම සංක්‍රමණය', '65% (ගම පාලු වීම)', '15%ට අඩු (රඳවා ගැනීම)']
          ],
          chartLabel: 'නිපුණතා භාවිතය (%)',
          chartData: [28, 95],
          chartCategories: ['වත්මන් තත්ත්වය', 'තුන්කල් ප්‍රතිසංවිධානය']
        },
        {
          letter: 'B',
          title: 'මූල හේතු විශ්ලේෂණය (Root Cause Analysis)',
          content: 'සියලුම තාක්ෂණික, කාර්මික සහ මූල්‍ය අවස්ථා නාගරික කේන්ද්‍රගතව පැවතීමත්, ගම තුළ පවතින නිපුණතා ගෝලීය වෙළඳපොළට සම්බන්ධ කිරීමට සමත් විමධ්‍යගත යාන්ත්‍රණයක් නොමැති වීමත් මෙයට මූලික හේතුවයි.',
          bullets: ['ජාතික කුසලතා සිතියම්කරණ පද්ධතියක් (Talent Mapping) නොමැතිකම.', 'විභාග කේන්ද්‍රීය අධ්‍යාපනය මඟින් සහජ දක්ෂතා සහතික නොකිරීම.'],
          buddhistTitle: 'කූටදන්ත සූත්‍රය: ප්‍රාග්ධනය සහ අවස්ථා විමධ්‍යගත කිරීම',
          buddhistText: 'සම්පත් සහ ව්‍යාපාරික අවස්ථා අගනගරයට පමණක් සීමා නොකර, ජනතාව වෙසෙන ප්‍රදේශවලටම ප්‍රාග්ධනය සහ යටිතල පහසුකම් විමධ්‍යගතව සැපයීමෙන් ආර්ථිකය ස්ථාවර කළ හැක.',
          tableTitle: 'අවස්ථා කේන්ද්‍රගත වීමේ අනුපාතය',
          tableHeaders: ['මූල හේතු සාධකය', 'පවතින බාධකය', 'තුන්කල් විසඳුම'],
          tableRows: [
            ['අවස්ථා විමධ්‍යගතකරණය', '05% (සියල්ල නගරයට)', '100% (සෑම ගමකටම ඩිජිටල් නෝඩයක්)'],
            ['කුසලතා සහතිකකරණය', 'විභාග සහතික මත පමණි', 'Blockchain සහජ කුසලතා ලෙජරය']
          ],
          chartLabel: 'ප්‍රාදේශීය අවස්ථා ව්‍යාප්තිය (%)',
          chartData: [5, 92],
          chartCategories: ['වත්මන් ව්‍යුහය', 'තුන්කල් විමධ්‍යගතකරණය']
        },
        {
          letter: 'C',
          title: 'යහපත සහ ප්‍රතිලාභ විශ්ලේෂණය (Benefits of Resolution)',
          content: 'මෙම ගැටලුව විසඳීමෙන් ගම තුළම හිඳිමින් තමන්ගේ සහජ හැකියාවන් ඔස්සේ ගෝලීය ආර්ථිකයට දායක වීමට අවස්ථාව ලැබේ.',
          bullets: ['ග්‍රාමීය පවුල් ඒකකවල සාමාන්‍ය මාසික ආදායම 250% කින් ඉහළ යාම.', 'ගෝලීය විදේශ විනිමය සෘජුවම ගම්මාන කරා ගලා ඒම.'],
          buddhistTitle: 'වියග්ඝපජ්ජ සූත්‍රය: සමජීවිකතාව සහ ආර්ථික සතුට',
          buddhistText: 'තමන්ගේ දක්ෂතාවලට අනුකූලව ජීවිකාව සමබරව පවත්වා ගැනීමෙන් (සමජීවිකතා) ලබන ආර්ථික ස්ථාවරත්වය, පුද්ගලයාගේ සහ පවුලේ සතුට මෙන්ම සමාජයේ දිගුකාලීන දියුණුව සලසයි.',
          tableTitle: 'පද්ධතිමය විභව ප්‍රතිලාභ දර්ශකය',
          tableHeaders: ['ප්‍රතිලාභ ක්ෂේත්‍රය', 'වත්මන් අර්බුදය', 'විසඳීමෙන් පසු ප්‍රතිලාභය'],
          tableRows: [
            ['ග්‍රාමීය මාසික ආදායම', 'ණය බරින් මිරිකුණු අවම ආදායම', 'ස්ථාවර ඉහළ ආදායම් සහ ඉතිරි කිරීම්'],
            ['සමාජයීය තෘප්තිමත්භාවය', 'අසහනය සහ තරුණ නොසන්සුන්තාවය', 'ආත්ම අභිමානය සහිත වෘත්තිකයන්']
          ],
          chartLabel: 'ග්‍රාමීය ආර්ථික ස්වයංපෝෂිතභාවය (%)',
          chartData: [15, 88],
          chartCategories: ['වත්මන් තත්ත්වය', 'තුන්කල් දැක්ම ප්‍රතිඵලය']
        },
        {
          letter: 'D',
          title: 'උපායමාර්ගික සැලසුම් සහ ක්‍රියාමාර්ග (Strategic Solutions)',
          content: "ගම තුළ ව්‍යුහාත්මක විප්ලවයක් සිදුකරන 'තුන්කල් දැක්ම' පියවර 5ක ප්‍රායෝගික සැලැස්ම මෙසේය:",
          bullets: [
            "පියවර 1: 'තුන්කල් ජාතික කුසලතා දත්ත ලෙජරය' (Dynamic Competency Mapping) පිහිටුවීම.",
            "පියවර 2: සෑම ප්‍රාදේශීය ලේකම් කොට්ඨාසයකම 'තුන්කල් සහජ දක්ෂතා උපයෝජන ඩිජිටල් මධ්‍යස්ථාන' (Smart Hubs) පිහිටුවීම.",
            "පියවර 3: 'තුන්කල් දක්ෂතා අරමුදල' හරහා 0% පොලී පදනම මත 'නැවත ඇරඹුම් ප්‍රාග්ධනය' මුදා හැරීම.",
            'පියවර 4: බ්ලොක්චේන් QR වෙළඳපොළ හරහා ශිල්පීන් සෘජුවම ගෝලීය ගැනුම්කරුවන් වෙත සම්බන්ධ කිරීම.',
            "පියවර 5: 'ජාතික පුරවැසි පුනරුත්ථාපන සහ කුසලතා බෆරය' මඟින් තාක්ෂණික වෙනස්වීම්වලදී පුරවැසියා ආරක්ෂා කිරීම."
          ],
          buddhistTitle: 'සප්ත අපරිහානීය ධර්ම: සාමූහික පද්ධතිමය ප්‍රගතිය',
          buddhistText: 'ප්‍රාදේශීය ව්‍යවසායකයින් සහ කළමනාකරුවන් නිතර රැස්වී, විනිවිද පෙනෙන කුසලතා පද්ධති සාකච්ඡා කර සාමූහික තීන්දු ගැනීම තුළින් ආර්ථික පරිහානිය මුළුමනින්ම වැළැක්විය හැක.',
          tableTitle: 'තුන්කල් උපායමාර්ගික ක්‍රියාන්විත සැසඳීම',
          tableHeaders: ['යාන්ත්‍රණ දර්ශකය', 'සාම්ප්‍රදායික ක්‍රමවේදය', 'තුන්කල් විසඳුම'],
          tableRows: [
            ['රැකියා උත්පාදන විලාසය', 'දේශපාලන සහන පත්වීම්', 'සහජ දක්ෂතා පදනම් ඩිජිටල් ව්‍යවසායකත්වය'],
            ['මූල්‍යකරණ යාන්ත්‍රණය', 'ඇප කොන්දේසි සහිත 30% ණය', '5% කාලීන ප්‍රතිලාභය සහිත 0% සෘජු ප්‍රාග්ධනය']
          ],
          chartLabel: 'කුසලතා රැකියා උත්පාදන ධාරිතාවය (%)',
          chartData: [12, 96],
          chartCategories: ['පැරණි ක්‍රමවේදය', 'තුන්කල් උපායමාර්ගික ක්‍රියාවලිය']
        }
      ],
      en: [
        {
          letter: 'A',
          title: 'Undervaluation of Inherent Talents (Problem Specification)',
          content: 'The lack of employment matching the innate digital, technical, or creative talents of rural youth is a monumental national waste, forcing migration into overcrowded cities.',
          bullets: ['Over 72% of rural youth talents are mismatched or underutilized.', 'Severe financial insolvency caused by systemic income-to-skill misalignment.'],
          buddhistTitle: 'Sigalovada Sutta: Skills and Right Livelihood',
          buddhistText: "Identifying an individual's innate skills (Sippassa) and providing matching, ethical avenues of economic livelihood (Samma Ajiva) is the foundational pillar to prevent societal economic decline.",
          tableTitle: 'Rural Skill Underutilization Matrix',
          tableHeaders: ['Regional Indicator', 'Current Status', 'Thun Kal Target'],
          tableRows: [
            ['Skill-to-Job Alignment Index', '28% (Severe Mismatch)', '100% (Perfect Equilibrium)'],
            ['Youth Migration (Village to City)', '65% (Rural Depletion)', 'Less than 15% (Retention)']
          ],
          chartLabel: 'Skill Utilization Efficiency (%)',
          chartData: [28, 95],
          chartCategories: ['Current Status', 'Thun Kal Restructuring']
        },
        {
          letter: 'B',
          title: 'Root Cause Analysis',
          content: 'The primary driver is a hyper-centralized economy where all financial and modern digital assets are hoarded in urban capitals, isolating the village from modern supply chains.',
          bullets: ['Absence of a sovereign digital platform for regional Talent Mapping.', 'Archaic exam-centric education that fails to validate intrinsic human capability.'],
          buddhistTitle: 'Kutadanta Sutta: Decentralization of Capital and Incentives',
          buddhistText: 'True economic equilibrium is achieved only when the sovereign aggressively decentralizes capital and core infrastructures (Kasi Gorakkha) to where the citizens reside.',
          tableTitle: 'Opportunity Centralization Ratios',
          tableHeaders: ['Root Cause Matrix', 'Existing Impediment', 'Thun Kal Solution Grid'],
          tableRows: [
            ['Opportunity Distribution', '05% (Colombo-Centric)', '100% (Every Village a Tech Node)'],
            ['Competency Certification', 'Paper-Exam Dependent', 'Blockchain Immutable Skill Ledger']
          ],
          chartLabel: 'Regional Opportunity Distribution (%)',
          chartData: [5, 92],
          chartCategories: ['Centralized Structure', 'Thun Kal Decentralization']
        },
        {
          letter: 'C',
          title: 'Benefits of Resolution',
          content: 'By creating localized high-tech frameworks, rural creators can access global markets from their ancestral homes, organically resolving urban housing crises.',
          bullets: ['Immediate 250% expansion of average rural household disposable income.', 'Direct automated pipeline for digital foreign exchange entry into local villages.'],
          buddhistTitle: 'Vyagghapajja Sutta: Balanced Livelihood and Asset Preservation',
          buddhistText: 'Combining safe asset preservation (Arakkha Sampada) with a well-balanced livelihood mapped precisely to intrinsic capabilities (Samajivikata) yields total socio-economic longevity.',
          tableTitle: 'Systemic Potential Benefits Matrix',
          tableHeaders: ['Benefit Domain', 'Current Crisis', 'Resolved Systemic State'],
          tableRows: [
            ['Rural Monthly Income Baseline', 'Debt-Ridden Subsistence', 'Resilient High-Yield Savings Base'],
            ['Socio-Psychological Fulfillment', 'Anguish & Instability', 'High-Dignity Autonomous Professionals']
          ],
          chartLabel: 'Rural Economic Self-Sufficiency (%)',
          chartData: [15, 88],
          chartCategories: ['Current State', 'Thun Kal Vision Outcome']
        },
        {
          letter: 'D',
          title: 'Strategic Solutions & Action',
          content: "The 'Thun Kal Dækma' introduces a high-velocity 5-step structural execution plan:",
          bullets: [
            "Step 1: Establishment of the 'Thun Kal Sovereign Digital Skill Ledger' for real-time Talent Mapping.",
            'Step 2: Deployment of solar-powered Decentralized Digital Work Nodes (Smart Hubs) within every regional secretariat.',
            "Step 3: Disbursing 0% interest seed capital via the 'Thun Kal Talent Fund' without physical collateral, utilizing a 5% stable lifetime repayment multiplier.",
            'Step 4: Activating a blockchain QR transaction network to link creators directly with global buyers.',
            'Step 5: Instituting a National Skill Buffer Reserve to securely re-skill citizens during technological shifts.'
          ],
          buddhistTitle: 'Sapta Aparihaniya Dhamma: Collective Assembly & Governance Harmony',
          buddhistText: 'When regional tech creators, physical artisans, and public asset managers frequently assemble (Abhinhu Sannipatha) to debate under open laws, systemic economic collapse becomes impossible.',
          tableTitle: 'Thun Kal Strategic Matrix Comparison',
          tableHeaders: ['Mechanism Indicator', 'Legacy Methodologies', 'Thun Kal Sovereign Grid'],
          tableRows: [
            ['Job Creation Dynamic', 'Political Subsidies / Bureaucracy', 'Innate Skill-Mapped Digital Entrepreneurship'],
            ['Capitalization Framework', 'Asset-Backed 30% Usurious Loans', '0% Direct Seed Capital with 5% Multiplier']
          ],
          chartLabel: 'Innate Skill Job Generation Capacity (%)',
          chartData: [12, 96],
          chartCategories: ['Legacy Welfare Paradigm', 'Thun Kal Strategic Framework']
        }
      ],
      ta: [
        {
          letter: 'A',
          title: 'உள்ளார்ந்த ஆற்றல்களின் குறைமதிப்பீடு (Problem Specification)',
          content: 'கிராமப்புற இளைஞர்களின் உள்ளார்ந்த டிஜிட்டல், தொழில்நுட்ப அல்லது ஆக்கப்பூர்வமான திறமைகளுக்கு பொருந்தும் வேலை வாய்ப்புகள் கிடைக்காதது தேசிய இழப்பாகும்.',
          bullets: ['72% க்கும் அதிகமான கிராமப்புற இளைஞர்களின் திறமைகள் தகுதியற்ற வேலைகளில் வீணடிக்கப்படுகின்றன.', 'திறமைக்கேற்ற வருமானம் இல்லாததால் ஏற்படும் பொருளாதார திவால்நிலை.'],
          buddhistTitle: 'சிங்காலோவாத சூத்திரம்: திறன்கள் மற்றும் சம்மா ஆஜீவா',
          buddhistText: 'ஒரு நபரின் உள்ளார்ந்த திறமைகளை சரியாகக் கண்டறிந்து, அதற்குப் பொருத்தமான நெறிமுறையான வாழ்வாதார வழிகளை வழங்குவதே சமூக வீழ்ச்சியைத் தடுப்பதற்கான அடிப்படைத் தூணாகும்.',
          tableTitle: 'கிராமப்புற திறமை குறைபாட்டு குறியீடு',
          tableHeaders: ['பிராந்திய குறியீடு', 'தற்போதைய நிலை', 'துன்கல் இலக்கு'],
          tableRows: [
            ['திறமை-வேலை சீரமைப்பு', '28% (கடுமையான முரண்பாடு)', '100% (முழுமையான சமநிலை)'],
            ['இளைஞர்கள் இடப்பெயர்வு', '65% (கிராமங்கள் காலியாதல்)', '15% க்கும் குறைவு (தக்கவைப்பு)']
          ],
          chartLabel: 'திறன் பயன்பாட்டு திறன் (%)',
          chartData: [28, 95],
          chartCategories: ['தற்போதைய நிலை', 'துன்கல் மறுசீரமைப்பு']
        },
        {
          letter: 'B',
          title: 'மூல காரண பகுப்பாய்வு (Root Cause Analysis)',
          content: 'அனைத்து தொழில்நுட்ப, தொழில்துறை மற்றும் நிதி வாய்ப்புகளும் தலைநகரங்களில் மட்டுமே குவிக்கப்பட்டுள்ளதே இதற்குக் காரணமாகும்.',
          bullets: ['தேசிய அளவில் பிராந்திய திறமைகளை வரைபடமாக்குவதற்கான டிஜிட்டல் பதிவேடு இல்லாமை.', 'பரீட்சைகளை மட்டுமே மையமாகக் கொண்ட பழமையான கல்வி முறை.'],
          buddhistTitle: 'கூடதந்த சூத்திரம்: மூலதனம் மற்றும் உள்கட்டமைப்பு பரவலாக்கல்',
          buddhistText: 'மூலதனத்தையும், உள்கட்டமைப்பையும் மக்கள் வசிக்கும் பகுதிகளுக்கு ஆட்சியாளர் பரவலாக்கும்போது மட்டுமே பொருளாதார ஸ்திரத்தன்மை ஏற்படும்.',
          tableTitle: 'வாய்ப்பு மையப்படுத்தல் விகிதங்கள்',
          tableHeaders: ['மூல காரண மேட்ரிக்ஸ்', 'தற்போதைய தடை', 'துன்கல் தீர்வு'],
          tableRows: [
            ['வாய்ப்பு பரவலாக்கம்', '05% (நகர ஏகபோகம்)', '100% (ஒவ்வொரு கிராமமும் ஒரு தொழில்நுட்ப மையம்)'],
            ['திறன் சான்றளிப்பு', 'காகிதத் தேர்வுகளை சார்ந்தது', 'பிளாக்செயினில் பாதுகாக்கப்பட்ட திறன் பதிவேடு']
          ],
          chartLabel: 'பிராந்திய வாய்ப்பு விநியோகம் (%)',
          chartData: [5, 92],
          chartCategories: ['மையப்படுத்தப்பட்ட கட்டமைப்பு', 'துன்கல் பரவலாக்கம்']
        },
        {
          letter: 'C',
          title: 'தீர்வின் நன்மைகள் (Benefits of Resolution)',
          content: 'கிராமப்புற குடிமக்கள் தங்கள் சொந்த இடங்களை விட்டு வெளியேறாமல் உலகளாவிய பொருளாதாரத்திற்கு பங்களிக்க முடியும்.',
          bullets: ['கிராமப்புற குடும்பங்களின் சராசரி மாதாந்திர வருமானம் உடனடியாக 250% அதிகரிக்கும்.', 'டிஜிட்டல் அந்நிய செலாவணி நேரடியாக கிராமப்புற பொருளாதாரத்திற்குள் பாயும்.'],
          buddhistTitle: 'வியக்கபஜ்ஜ சூத்திரம்: சமஜீவிகதா மற்றும் சொத்து பாதுகாப்பு',
          buddhistText: 'ஈட்டிய சொத்துக்களைப் பாதுகாப்பதையும் (ஆரக்கா சம்பதா) ஒருவருடைய உள்ளார்ந்த திறன்களுக்கு ஏற்ப வாழ்வாதாரத்தை சமநிலைப்படுத்துவதையும் (சமஜீவிகதா) இணைப்பது நீண்டகால பொருளாதார பாதுகாப்பை ஏற்படுத்தும்.',
          tableTitle: 'கட்டமைப்பு சாத்தியமான நன்மைகள் மேட்ரிக்ஸ்',
          tableHeaders: ['நன்மை டொமைன்', 'தற்போதைய நெருக்கடி', 'தீர்க்கப்பட்ட கட்டமைப்பு நிலை'],
          tableRows: [
            ['கிராமப்புற மாதாந்திர வருமானம்', 'கடன் சுமையால் நசுக்கப்பட்ட வருமானம்', 'நெகிழ்ச்சியான அதிக வருமானம் மற்றும் சேமிப்பு'],
            ['சமூக-உளவியல் திருப்தி', 'இளைஞர்களின் அதிருப்தி', 'சுயமரியாதை கொண்ட உலகளாவிய வல்லுநர்கள்']
          ],
          chartLabel: 'கிராமப்புற பொருளாதார தற்சார்பு (%)',
          chartData: [15, 88],
          chartCategories: ['தற்போதைய நிலை', 'துன்கல் பார்வை விளைவு']
        },
        {
          letter: 'D',
          title: 'உපායமாර්ගික திட்டங்கள் (Strategic Solutions)',
          content: "'துன்கல் தெக்ம' 5-படி உத்திகள் கொண்ட செயல் திட்டத்தை அறிமுகப்படுத்துகிறது:",
          bullets: [
            "படி 1: 'துன்கல் இறையாண்மை டிஜிட்டல் திறன் பதிவேடு' உருவாக்குதல்.",
            "படி 2: அனைத்து பிராந்திய செயலகங்களிலும் 'துன்கல் ஸ்மார்ட் மையங்களை' அமைத்தல்.",
            "படி 3: 'துன்கல் திறன் நிதியம்' மூலம் 0% வட்டி விதை மூலதனம் வழங்குதல்.",
            'படி 4: பிளாக்செயினுடன் கூடிய QR வர்த்தக பொறிமுறை.',
            'படி 5: தேசிய திறன் பாதுகாப்பு நிதி.'
          ],
          buddhistTitle: 'சப்த அபரிஹானிய தம்மா: கூட்டு நிர்வாக இணக்கம்',
          buddhistText: 'பிராந்திய தொழில்முனைவோர், தொழில்நுட்ப உருவாக்குநர்கள் மற்றும் அரசு அதிகாரிகள் அடிக்கடி கூடி வெளிப்படையான விவாதங்களை நடத்தும்போது பொருளாதார வீழ்ச்சி முற்றிலும் தடுக்கப்படும்.',
          tableTitle: 'துன்கல் மூலோபாய மேட்ரிக்ஸ் ஒப்பீடு',
          tableHeaders: ['பொறிமுறை குறியீடு', 'பாரம்பரிய முறைகள்', 'துன்கல் இறையாண்மை கட்டமைப்பு'],
          tableRows: [
            ['வேலை உருவாக்க இயக்கவியல்', 'அரசியல் மானியங்கள்', 'திறன் அடிப்படையிலான டிஜிட்டல் தொழில்முனைவோர்'],
            ['மூலதன கட்டமைப்பு', '30% வட்டி கொண்ட கடன்கள்', '5% பெருக்கியுடன் 0% நேரடி விதை மூலதனம்']
          ],
          chartLabel: 'உள்ளார்ந்த திறன் வேலை உருவாக்க திறன் (%)',
          chartData: [12, 96],
          chartCategories: ['பாரம்பரிய மானிய முறை', 'துன்கல் மூலோபாய கட்டமைப்பு']
        }
      ]
    }
  }
];

export {
  projectsHubMeta,
  sectorTabs,
  sectorOrder,
  strategicMatrix,
  strategicMatrixSi,
  issueProjectLinks,
  getDrawerAbcd
} from './strategicMatrixData.js';

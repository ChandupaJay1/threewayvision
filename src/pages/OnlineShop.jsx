import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const uiDictionary = {
  si: {
    navTitle: "තුන් කල් දැක්ම", navBadge: "ව්‍යාපාරික අංශය", navSub: "දේශීය අන්තර්ජාල වෙළඳපොළ යාන්ත්‍රණය",
    regBtn: "+ නව ලියාපදිංචිය", heroBadge: "Empirical Local Market Ecosystem",
    heroTitle: "ග්‍රාමීය නිෂ්පාදකයා සහ පාරිභෝගිකයා සෘජුව බද්ධ කරන ජාලය",
    heroDesc: "අත් මැදියන්ගෙන් තොරව සෑම ග්‍රාම සේවා වසමකම පවතින සැබෑ නිෂ්පාදන ධාරිතාවය සහ සේවාවන් තථ්‍ය කාලීනව (Real-Time) සමස්ත ජාතිය සමඟ සහසම්බන්ධ කරන විද්‍යාත්මක වෙළඳපොළ ආකෘතිය.",
    asideCatTitle: "ප්‍රධාන අංශ", asideDistTitle: "ප්‍රාදේශීය පෙරහන", labelDist: "දිස්ත්‍රික්කය තෝරන්න",
    labelDiv: "ප්‍රාදේශීය ලේකම් කොට්ඨාසය", allCat: "📦 සියලුම අංශ එක්වර", activeTrade: "සක්‍රීය වෙළඳාම",
    buyBtn: "මිලදී ගන්න / විමසන්න", modalHeading: "සෘජු ව්‍යවසායක සන්නිවේදනය", modalSub: "අත් මැදියන්ගෙන් තොර පද්ධතිය හරහා මෙම ග්‍රාමීය නිෂ්පාදකයා සමඟ සෘජුව ගනුදෙනු කිරීමට සම්බන්ධතාවයක් මෙයින් ස්ථාපිත කෙරේ.",
    allDist: "සියලුම දිස්ත්‍රික්ක (25)", allDiv: "සියලුම ප්‍රාදේශීය ලේකම් කොට්ඨාස", chooseDiv: "දිස්ත්‍රික්කයක් තෝරන්න...",
    footer: "© 2026 තුන් කල් දැක්ම (Three-Way Vision) ජාතික මූලෝපායික ප්‍රතිසංස්කරණ පද්ධතිය. සියලුම හිමිකම් ඇවිරිණි.",
    success: "තුන් කල් දැක්ම සෘජු වෙළඳපොළ ජාලය හරහා ඔබේ පණිවිඩය ව්‍යවසායකයා වෙත සාර්ථකව යොමු කෙරුණා!",
    allTitle: "සියලුම දේශීය නිෂ්පාදන සහ සේවා", badgeCount: "භාණ්ඩ [COUNT]ක් පවතී"
  },
  ta: {
    navTitle: "துன் கல் தக்ம", navBadge: "வணிகப் பிரிவு", navSub: "உள்ளூர் இணைய சந்தை பொறிமுறை",
    regBtn: "+ புதிய பதிவு", heroBadge: "Empirical Local Market Ecosystem",
    heroTitle: "கிராமப்புற உற்பத்தியாளரையும் நுகர்வோரையும் நேரடியாக இணைக்கும் நெட்வொர்க்",
    heroDesc: "இடைத்தரகர்கள் இல்லாமல், ஒவ்வொரு கிராம உத்தியோகத்தர் பிரிவிலும் உள்ள உண்மையான உற்பத்தித் திறன் மற்றும் சேவைகளை நிகழ்நேரத்தில் முழு தேசத்துடனும் இணைக்கும் அறிவியல் சந்தை மாதிரி.",
    asideCatTitle: "முக்கிய பிரிவுகள்", asideDistTitle: "பிராந்திய வடிகட்டி", labelDist: "மாவட்டத்தைத் தேர்ந்தெடுக்கவும்",
    labelDiv: "பிரதேச செயலகப் பிரிவு", allCat: "📦 அனைத்து பிரிவுகளும்", activeTrade: "செயலில் உள்ள வர்த்தகம்",
    buyBtn: "வாங்க / விசாரிக்க", modalHeading: "நேரடி உற்பத்தியாளர் தொடர்பு", modalSub: "இடைத்தரகர்கள் இல்லாத அமைப்பின் மூலம் இந்த கிராமப்புற உற்பத்தியாளருடன் நேரடியாக வணிகம் செய்வதற்கான தொடர்பு இதன் மூலம் நிறுவப்பட்டுள்ளது.",
    allDist: "அனைத்து மாவட்டங்களும் (25)", allDiv: "அனைத்து பிரதேச செயலகங்களும்", chooseDiv: "மாவட்டத்தைத் தேர்ந்தெடுக்கவும்...",
    footer: "© 2026 துன் கல் தக்ம (Three-Way Vision) தேசிய மூலோபாய சீர்திருத்த அமைப்பு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    success: "நேரடி சந்தை நெட்வொர்க் மூலம் உங்கள் செய்தி உற்பத்தியாளருக்கு வெற்றிகரமாக அனுப்பப்பட்டது!",
    allTitle: "அனைத்து உள்ளூர் தயாரிப்புகள் மற்றும் சேவைகள்", badgeCount: "[COUNT] தயாரிப்புகள் உள்ளன"
  },
  en: {
    navTitle: "Three-Way Vision", navBadge: "Business Sector", navSub: "Empirical Local Market Ecosystem",
    regBtn: "+ New Registration", heroBadge: "Empirical Local Market Ecosystem",
    heroTitle: "Direct Network Connecting Village Producers & Consumers",
    heroDesc: "A scientific marketplace model directly integrating the real production capacity and services of every Grama Niladhari division nationwide in real-time without middlemen.",
    asideCatTitle: "Core Categories", asideDistTitle: "Regional Filter", labelDist: "Select District",
    labelDiv: "Divisional Secretariat", allCat: "📦 All Sectors", activeTrade: "Active Trade",
    buyBtn: "Buy / Inquire", modalHeading: "Direct Producer Communication", modalSub: "This establishes a direct secure link with the rural entrepreneur through a strictly disintermediated framework.",
    allDist: "All Districts (25)", allDiv: "All Divisions", chooseDiv: "Choose District...",
    footer: "© 2026 Three-Way Vision National Strategic Reform System. All Rights Reserved.",
    success: "Your transaction request has been securely routed to the rural producer via Three-Way Vision Network!",
    allTitle: "All Local Products & Services", badgeCount: "[COUNT] Products Available"
  }
}

const locationData = {
  "anuradhapura": ["නුවරගම් පළාත් මධ්‍යම", "තඹුත්තේගම", "මිහින්තලේ", "කැබිතිගොල්ලෑව"],
  "colombo": ["තිඹිරිගස්යාය", "කඩුවෙල", "මහරගම", "රත්මලාන"],
  "gampaha": ["කැළණිය", "කඩවත්ත", "මීගමුව", "ජා-ඇල"],
  "kandy": ["මහනුවර කඩවත් සතර", "හාරිස්පත්තුව", "උඩුනුවර", "කුණ්ඩසාලේ"],
  "galle": ["ගාල්ල කඩවත් සතර", "අම්බලන්ගොඩ", "හික්කඩුව", "ඇල්පිටිය"],
  "kurunegala": ["කුරුණෑගල නගරය", "කුලියාපිටිය", "පන්නල", "වාරියපොළ"],
  "matara": ["මාතර නගරය", "වැලිගම", "දික්වැල්ල", "හක්මන"],
  "hambantota": ["තංගල්ල", "අම්බලන්තොට", "තිස්සමහාරාමය"],
  "jaffna": ["යාපනය නගරය", "චාවකච්චේරි", "පේදුරුතුඩුව"],
  "kalutara": ["මතුගම", "පානදුර", "හොරණ"],
  "matale": ["මාතලේ නගරය", "දඹුල්ල", "සිගිරිය"],
  "nuwaraeliya": ["නුවරඑළිය නගරය", "වලපනේ", "හැටන්"],
  "badulla": ["බදුල්ල නගරය", "බණ්ඩාරවෙල", "මහියංගනය"],
  "monaragala": ["මොනරාගල නගරය", "වැල්ලවාය", "කතරගම"],
  "kegalle": ["කෑගල්ල නගරය", "මාවනැල්ල", "වරකාපොළ"],
  "ratnapura": ["රත්නපුර නගරය", "පැල්මඩුල්ල", "බලන්ගොඩ"],
  "trincomalee": ["ත්‍රිකුණාමලය නගරය", "කන්තලේ"],
  "batticaloa": ["මඩකලපුව නගරය", "වාලච්චේනයි"],
  "ampara": ["අම්පාර නගරය", "කල්මුණේ"],
  "puttalam": ["පුත්තලම නගරය", "හලාවත", "මාරවිල"],
  "mannar": ["මන්නාරම නගරය"],
  "vavuniya": ["වවුනියාව නගරය"],
  "mullaaitivu": ["මුලතිව් නගරය"],
  "kilinochchi": ["කිලිනොච්චිය නගරය"],
  "polonnaruwa": ["තමන්කඩුව", "හිඟුරක්ගොඩ"]
}

const districtDisplayNames = {
  si: { "anuradhapura": "අනුරාධපුරය", "colombo": "කොළඹ", "gampaha": "ගම්පහ", "kandy": "මහනුවර", "galle": "ගාල්ල", "kurunegala": "කුරුණෑගල", "matara": "මාතර", "hambantota": "හම්බන්තොට", "jaffna": "යාපනය", "kalutara": "කළුතර", "matale": "මාතලේ", "nuwaraeliya": "නුවරඑළිය", "badulla": "බදුල්ල", "monaragala": "මොනරාගල", "kegalle": "කෑගල්ල", "ratnapura": "රත්නපුර", "trincomalee": "ත්‍රිකුණාමලය", "batticaloa": "මඩකලපුව", "ampara": "අම්පාර", "puttalam": "පුත්තලම", "mannar": "මන්නාරම", "vavuniya": "වවුනියාව", "mullaaitivu": "මුලතිව්", "kilinochchi": "කිලිනොච්චිය", "polonnaruwa": "පොළොන්නරුව" },
  ta: { "anuradhapura": "அனுராதபுரம்", "colombo": "கொழும்பு", "gampaha": "கம்பஹா", "kandy": "கண்டி", "galle": "காலி", "kurunegala": "குருநாகல்", "matara": "மாத்தறை", "hambantota": "ஹம்பாந்தோட்டை", "jaffna": "யாழ்ப்பாணம்", "kalutara": "களுத்துறை", "matale": "மாத்தளை", "nuwaraeliya": "நுவரெலியா", "badulla": "பதுளை", "monaragala": "மொனராகலை", "kegalle": "கேகாலை", "ratnapura": "இரத்தினபுரி", "trincomalee": "திருகோணமலை", "batticaloa": "மட்டக்களப்பு", "ampara": "அம்பாறை", "puttalam": "புத்தளம்", "mannar": "மன்னார்", "vavuniya": "வவுனியா", "mullaaitivu": "முல்லைத்தீவு", "kilinochchi": "கிளிநொச்சி", "polonnaruwa": "பொலன்னறுவை" },
  en: { "anuradhapura": "Anuradhapura", "colombo": "Colombo", "gampaha": "Gampaha", "kandy": "Kandy", "galle": "Galle", "kurunegala": "Kurunegala", "matara": "Matara", "hambantota": "Hambantota", "jaffna": "Jaffna", "kalutara": "Kalutara", "matale": "Matale", "nuwaraeliya": "Nuwara Eliya", "badulla": "Badulla", "monaragala": "Monaragala", "kegalle": "Kegalle", "ratnapura": "Ratnapura", "trincomalee": "Trincomalee", "batticaloa": "Batticaloa", "ampara": "Ampara", "puttalam": "Puttalam", "mannar": "Mannar", "vavuniya": "Vavuniya", "mullaaitivu": "Mullaitivu", "kilinochchi": "Kilinochchi", "polonnaruwa": "Polonnaruwa" }
}

const masterPlanCategories = {
  "production": { si: "🌾 1. නිෂ්පාදන ක්ෂේත්‍රය", ta: "🌾 1. உற்பத்தித் துறை", en: "🌾 1. Manufacturing & Production" },
  "service": { si: "🛠️ 2. සේවා ක්ෂේත්‍රය", ta: "🛠️ 2. சேவைத் துறை", en: "🛠️ 2. Service & Maintenance" },
  "food": { si: "🌾 3. අත්‍යවශ්‍ය ආහාර ක්ෂේත්‍රය", ta: "🌾 3. அத்தியாவசிய உணவு", en: "🌾 3. Essential Food Production" },
  "handicrafts": { si: "🪵 4. අත්කම් නිර්මාණ", ta: "🪵 4. கைவினைப்பொருட்கள்", en: "🪵 4. Handicrafts & Souvenirs" },
  "hospitality": { si: "🏡 5. හෝටල් හා කබානා", ta: "🏡 5. விடுதிகள் மற்றும் கபானா", en: "🏡 5. Hospitality & Cabanas" },
  "transport": { si: "🚛 6. ප්‍රවාහන සේවාව", ta: "🚛 6. போக்குவரத்து சேவை", en: "🚛 6. Transportation & Logistics" },
  "interior": { si: "🎨 7. අභ්‍යන්තර සැලසුම්කරණය", ta: "🎨 7. உள்துறை வடிவமைப்பு", en: "🎨 7. Interior & Wall Art" }
}

const productsCatalog = [
  { id: "66", category: "hospitality", name: { si: "පරිසර හිතකාමී මොඩියුලර් කබානා ඉදිකිරීම", ta: "சுற்றுச்சூழல் நட்பு மொடிலார் கபானா", en: "Eco-Friendly Luxury Modular Cabana" }, desc: { si: "ස්වාභාවික දැව, උණ බම්බු සහ මැටි උපයෝගී කරගනිමින් නිවාඩු කුටි සැලසුම් කිරීම.", ta: "இயற்கை மரம் மற்றும் மூங்கில் கொண்டு வடிவமைக்கப்பட்ட விடுதிகள்.", en: "Premium structural design using natural bamboo, log timber, and organic aesthetics." }, price: { si: "ගිවිසුම්ගත මිල ගණන්", ta: "ஒப்பந்த விலை", en: "Contract Pricing" }, image: "https://images.unsplash.com/photo-1590005354167-6da97870c913?q=80&w=1200&auto=format&fit=crop", district: "matale", division: "සිගිරිය", brand: "Natural Eco Cabin" },
  { id: "14", category: "production", name: { si: "Rustic දේශීය ලී ඇඳ නිර්මාණය", ta: "ரஸ்டிக் இயற்கை மர படுக்கை", en: "Handcrafted Rustic Log Timber Platform Bed" }, desc: { si: "දේශීය දැව කඳන්වල ස්වාභාවික රළු නිමාව ආරක්ෂා කර නිපදවූ ඇඳන්.", ta: "இயற்கை மரக்கட்டைகளால் செய்யப்பட்ட வலுவான படுக்கை வடிவமைப்பு.", en: "Solid raw log frame emphasizing authentic wood grains." }, price: { si: "රු. 45,000.00", ta: "ரூ. 45,000.00", en: "LKR 45,000.00" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500&auto=format&fit=crop", district: "anuradhapura", division: "නුවරගම් පළාත් මධ්‍යම", brand: "Natural Eco Cabin" },
  { id: "94", category: "interior", name: { si: "ස්වාභාවික දැවමය අභ්‍යන්තර ආවරණ කොටස් (Partition)", ta: "இயற்கை மர உட்புற பகிர்வு", en: "Organic Room Divider Partition" }, desc: { si: "කාමර හෝ ආලින්ද වෙන් කිරීම සඳහා සකස් කළ කලාත්මක ලී ආකෘතිය.", ta: "அறை பகிர்வுக்கான கலைநயமிக்க இயற்கை மர வடிவமைப்பு.", en: "Artistic branch lattice divider perfectly tailored for premium interiors." }, price: { si: "රු. 18,500.00", ta: "ரூ. 18,500.00", en: "LKR 18,500.00" }, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=500&auto=format&fit=crop", district: "colombo", division: "තිඹිරිගස්යාය", brand: "Natural Eco Cabin" },
  { id: "01", category: "production", name: { si: "ග්‍රාමීය උස් ලී ස්ටූල් සහ මේස කට්ටලය", ta: "உயரமான மர நாற்காலிகள் மற்றும் மேஜை", en: "Rustic Raw Log High Stools Set" }, desc: { si: "ගෙවතු, ආලින්ද හෝ කැෆේ සඳහා ගැලපෙන ස්වාභාවික රෆ්-කට් නිමාව.", ta: "உள் முற்றம் அல்லது கஃபேக்களுக்கு ஏற்ற இயற்கை மர நாற்காலி தொகுப்பு.", en: "Eco-aesthetic round pillar logs turned into functional bar seating layouts." }, price: { si: "රු. 28,000.00", ta: "ரூ. 28,000.00", en: "LKR 28,000.00" }, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=500&auto=format&fit=crop", district: "gampaha", division: "කැළණිය", brand: "Natural Eco Cabin" },
  { id: "21", category: "service", name: { si: "සූර්ය බල ශක්ති (Solar) සහ ඉන්වර්ටර් නඩත්තුව", ta: "சூரிய சக்தி மற்றும் இன்வெர்டர் பராமரிப்பு", en: "Solar Energy & Inverter Maintenance" }, desc: { si: "සූර්ය පැනල පිරිසිදු කිරීම සහ හදිසි බැටරි අලුත්වැඩියාව.", ta: "சூரிய பேனல்களை சுத்தம் செய்தல் மற்றும் அவசர பேட்டரி பழுதுபார்ப்பு.", en: "Professional cleaning and backup configuration for solar arrays." }, price: { si: "රු. 3,500.00 සිට", ta: "ரூ. 3,500.00", en: "LKR 3,500.00 Up" }, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop", district: "colombo", division: "මහරගම", brand: "තුන් කල් දැක්ම" },
  { id: "36", category: "food", name: { si: "පාරම්පරික සහල් මෝල සහ ඇසුරුම්කරණය", ta: "பாரம்பரிய அரிசி ஆலை மற்றும் பேக்கேஜிங்", en: "Traditional Rice & Organic Grain Packs" }, desc: { si: "සුවඳැල්, කළු හීනටි, කුරුක්කන් වැනි දේශීය ධාන්‍ය වර්ග කොටා ඇසුරුම් කිරීම.", ta: "உள்ளூர் பாரம்பரிய அரிசி வகைகள் சுத்தமான முறையில் பேக் செய்யப்படுகிறது.", en: "Authentic local traditional healthy rice varieties milled cleanly." }, price: { si: "රු. 240.00 / කි.ග්‍රෑ", ta: "ரூ. 240.00", en: "LKR 240.00 / kg" }, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500&auto=format&fit=crop", district: "anuradhapura", division: "තඹුත්තේගම", brand: "තුන් කල් දැක්ම" },
  { id: "52", category: "handicrafts", name: { si: "පන් පැදුරු සහ කාර්මික පන් විවීම", ta: "பாய் மற்றும் கைவினைப் பாய் நெசவு", en: "Traditional Reed Weaving & Mats" }, desc: { si: "පන් සහ වැටකේ කොළ උපයෝගී කරගනිමින් බෑග්, තොප්පි, පැදුරු නිපදවීම.", ta: "கைவினைப் பாய்கள் மற்றும் தொப்பிகள் நெசவு செய்தல்.", en: "Artisan woven handcraft bags, mats and interior layout properties." }, price: { si: "රු. 1,500.00 සිට", ta: "ரூ. 1,500.00", en: "LKR 1,500.00 Up" }, image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=500&auto=format&fit=crop", district: "galle", division: "හික්කඩුව", brand: "තුන් කල් දැක්ම" },
  { id: "81", category: "transport", name: { si: "ග්‍රාමීය එළවළු සහ පළතුරු ශීතකරණ ප්‍රවාහනය", ta: "கிராமப்புற காய்கறி குளிர்சாதன போக்குவரத்து", en: "Refrigerated Village Cold-Chain Transport" }, desc: { si: "ගොවීන්ගේ නිෂ්පාදන නරක් නොවී නගරයේ වෙළඳපොළ වෙත ආරක්ෂිතව ප්‍රවාහනය.", ta: "விவசாய விளைபொருட்களை பாதுகாப்பாக சந்தைக்கு கொண்டு சேர்த்தல்.", en: "Secure cold chain transit saving fresh agri-crops from damage." }, price: { si: "කි.මී එකකට රු. 150.00", ta: "கிமீ ரூ. 150.00", en: "LKR 150.00 / km" }, image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=500&auto=format&fit=crop", district: "nuwaraeliya", division: "හැටන්", brand: "තුන් කල් දැක්ම" }
]

function OnlineShop({ lang, setCurrentPage, setLang }) {
  const d = uiDictionary[lang]
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedDivision, setSelectedDivision] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalProduct, setModalProduct] = useState(null)

  const filteredProducts = productsCatalog.filter(item => {
    const matchesCategory = !selectedCategory || item.category === selectedCategory
    const matchesSearch = item.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) || item.desc[lang].toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDistrict = !selectedDistrict || item.district === selectedDistrict
    const matchesDivision = !selectedDivision || item.division === selectedDivision
    return matchesCategory && matchesSearch && matchesDistrict && matchesDivision
  })

  const handleProductClick = (product) => {
    setModalProduct(product)
    setShowModal(true)
  }

  const getCategoryName = (cat) => cat ? masterPlanCategories[cat][lang] : d.allTitle

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0b1329' }}>
      <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full" style={{ paddingTop: '120px' }}>
        <section className="hero-bg rounded-3xl p-6 sm:p-10 border border-white/10 mb-12 relative overflow-hidden shadow-2xl" style={{
          backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.95) 40%, rgba(15, 23, 42, 0.6) 100%), url(https://images.unsplash.com/photo-1590005354167-6da97870c913?q=80&w=1200&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="max-w-3xl relative z-10 bg-slate-950/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/5">
            <span className="bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">{d.heroBadge}</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4 mb-4 leading-tight">{d.heroTitle}</h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{d.heroDesc}</p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="space-y-6">
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">{d.asideCatTitle}</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <button onClick={() => setSelectedCategory("")} className={`w-full flex justify-between items-center p-2.5 rounded-lg transition-all ${selectedCategory === '' ? 'bg-blue-600/20 border border-blue-500/30' : 'hover:bg-white/5'} text-left`}>
                    <span>{d.allCat}</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-md">{productsCatalog.length}</span>
                  </button>
                </li>
                {Object.entries(masterPlanCategories).map(([key, names]) => (
                  <li key={key}>
                    <button onClick={() => setSelectedCategory(key)} className={`w-full flex justify-between items-center p-2.5 rounded-lg transition-all ${selectedCategory === key ? 'bg-blue-600/20 border border-blue-500/30' : 'hover:bg-white/5'} text-left`}>
                      <span>{names[lang]}</span>
                      <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md">{productsCatalog.filter(p => p.category === key).length}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">{d.asideDistTitle}</h3>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{d.labelDist}</label>
                <select value={selectedDistrict} onChange={(e) => { setSelectedDistrict(e.target.value); setSelectedDivision("") }} className="w-full bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                  <option value="">{d.allDist}</option>
                  {Object.entries(districtDisplayNames[lang]).map(([key, name]) => (
                    <option key={key} value={key}>{name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{d.labelDiv}</label>
                <select value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)} disabled={!selectedDistrict} className="w-full bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                  <option value="">{selectedDistrict ? d.allDiv : d.chooseDiv}</option>
                  {selectedDistrict && locationData[selectedDistrict]?.map((div, idx) => (
                    <option key={idx} value={div}>{div}</option>
                  ))}
                </select>
              </div>
            </div>
          </aside>
          <div className="lg:col-span-3 space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>📦</span> <span>{getCategoryName(selectedCategory)}</span>
                </h3>
                <span className="text-xs bg-blue-600/30 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-semibold">
                  {d.badgeCount.replace('[COUNT]', filteredProducts.length)}
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((item) => (
                    <div key={item.id} onClick={() => handleProductClick(item)} className="bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all group flex flex-col justify-between cursor-pointer">
                      <div className="h-48 w-full overflow-hidden bg-slate-800 relative">
                        <img src={item.image} alt={item.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <span className="absolute top-2 left-2 bg-blue-600 font-bold text-white px-2 py-0.5 rounded text-xs">ID: {item.id}</span>
                        <span className="absolute bottom-2 right-2 bg-slate-950/80 border border-white/10 text-emerald-400 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide font-mono uppercase">{item.brand}</span>
                      </div>
                      <div className="p-5 flex-1">
                        <h4 className="text-white font-bold text-base mb-2 leading-tight">{item.name[lang]}</h4>
                        <p className="text-slate-400 text-sm mb-3 leading-relaxed line-clamp-2">{item.desc[lang]}</p>
                        <div className="flex justify-between items-end">
                          <div>
                            <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wide">{item.division}</span>
                          </div>
                          <span className="text-blue-400 font-bold text-sm">{item.price[lang]}</span>
                        </div>
                      </div>
                      <div className="px-5 pb-5">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                          {d.buyBtn}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400 bg-slate-900/20 rounded-2xl border border-white/5 border-dashed">
                  🔍 No matching items found. Please try another selection.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {showModal && modalProduct && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-base font-bold text-white">{d.modalHeading}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white text-xl font-bold">&times;</button>
            </div>
            <div className="p-6 text-sm text-slate-300 max-h-60 overflow-y-auto">
              <p>{d.modalSub}</p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-xl border border-white/5">
                <h4 className="font-bold text-white mb-2">{modalProduct.name[lang]}</h4>
                <p className="text-xs text-slate-400">{modalProduct.desc[lang]}</p>
              </div>
            </div>
            <div className="p-4 bg-slate-950/50 border-t border-white/5 flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-xl">{d.modalHeading ? 'Close' : 'Close'}</button>
              <button onClick={() => { alert(d.success); setShowModal(false); }} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl">Confirm</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default OnlineShop

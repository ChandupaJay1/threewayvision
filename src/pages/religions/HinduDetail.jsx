import React from 'react'

const content = {
  si: {
    introTitle: "හින්දු දර්ශනයේ කෙටි හැඳින්වීමකි.",
    sections: [
      {
        id: "scriptures",
        title: "1. පූජනීය මූලාශ්‍ර: ශ්‍රැති සහ ස්මෘති (The Sacred Texts)",
        desc: "හින්දු සාහිත්‍ය ප්‍රධාන කොටස් දෙකකට බෙදේ:",
        bullets: [
          "ශ්‍රැති (Shruti - ඇසුණු දේ): සෘෂිවරුන් විසින් විශ්වයේ ගැඹුරු සත්‍යයන් භාවනාවෙන් වටහාගෙන ප්‍රකාශ කළ සදාකාලික දේව වාක්‍යයන් වේ. මෙයට ප්‍රධාන වේද 4 (ඍග්, යජුර්, සාම, අථර්ව) සහ උපනිෂද් ඇතුළත් වේ.",
          "ස්මෘති (Smriti - මතක තබා ගත් දේ): ශ්‍රැති ධර්මයන් සරලව සමාජගත කිරීම සඳහා මිනිසුන් විසින් ලියන ලද ග්‍රන්ථ වේ. මෙයට රාමායනය, මහාභාරතය වැනි මහා කාව්‍යයන්, පුරාණ සහ භගවත් ගීතාව (ජීවිත රාජකාරි පැහැදිලි කරන) ඇතුළත් වේ."
        ]
      },
      {
        id: "purusharthas",
        title: "2. පුරුෂාර්ථ 4: මිනිස් ජීවිතයේ අරමුණු (Purushartha)",
        desc: "මිනිසෙකු තම ලෞකික හා ආධ්‍යාත්මික ජීවිතය තුළ සාක්ෂාත් කරගත යුතු ප්‍රධාන අරමුණු හතරකි:",
        bullets: [
          "ධර්ම (Dharma - සදාචාරය): විශ්වීය නීතියට හා යුතුකමට එකඟව සදාචාරාත්මකව ජීවත් වීම.",
          "අර්ථ (Artha - ධනය): ධාර්මික ක්‍රම මගින් ලෞකික පැවැත්ම සඳහා අවශ්‍ය ධනය සහ ආරක්ෂාව උපයා ගැනීම.",
          "කාම (Kama - ආශාව): සදාචාර සීමාවන් තුළ ආදරය, ලිංගිකත්වය සහ ලෞකික සැප විඳීම.",
          "මෝක්ෂ (Moksha - විමුක්තිය): සසර බැඳීම්වලින් සහ උපත් චක්‍රයෙන් මිදී සදාකාලික නිදහස (විමුක්තිය) ලැබීම. මෙය ජීවිතයේ පරම අරමුණයි."
        ]
      },
      {
        id: "philosophies",
        title: "3. මූලික දාර්ශනික සංකල්ප 4 (Core Philosophies)",
        desc: "හින්දු දර්ශනයේ පදනම සකස් කරන ප්‍රධාන සංකල්ප හතරකි:",
        bullets: [
          "කර්මය (Karma): සෑම ක්‍රියාවකටම ඵලයක් ඇත යන විශ්වීය නියමය. සිතින්, කයින්, වචනයෙන් කරන සෑම දෙයකටම මේ ආත්මයේදී හෝ ඉදිරි ආත්මවලදී ප්‍රතිඵල ලැබේ.",
          "සංසාරය (Samsara): ආත්මය අවසාන විමුක්තිය ලබන තෙක් නැවත නැවත උපත ලබමින් යන ගමන.",
          "ආත්මන් (Atman): සෑම ජීවියෙකු තුළම පවතින සදාකාලික, නොනැසෙන, පිරිසිදු ආත්මය.",
          "බ්‍රහ්මන් (Brahman): මුළු විශ්වයේම පවතින එකම සහ සදාකාලික පරම සත්‍යය, විශ්වයේ ශක්තිය හෝ පරමාත්මය."
        ]
      },
      {
        id: "trimurti",
        title: "4. ත්‍රිමූර්තිය - ත්‍රිත්වය (The Trimurti)",
        desc: "විශ්වයේ ක්‍රියාවලීන් තුන සංකේතවත් කරන ප්‍රධාන දේව ස්වරූප තුනකි:",
        bullets: [
          "මහා බ්‍රහ්ම: විශ්වය නිර්මාණය කරන්නා (The Creator).",
          "මහා විෂ්ණු: විශ්වය ආරක්ෂා කරන්නා සහ පාලනය කරන්නා (The Preserver).",
          "මහා ශිව: විශ්වයේ විනාශය සහ නැවත උපත සිදුකරන්නා (The Destroyer)."
        ]
      },
      {
        id: "yoga",
        title: "5. මෝක්ෂය සඳහා වන යෝග මාර්ග 4 (The Four Paths of Yoga)",
        desc: "පුද්ගලයෙකුගේ මානසික නැඹුරුව අනුව මෝක්ෂය (විමුක්තිය) ලබා ගැනීම සඳහා උපදෙස් දෙන මාර්ග හතරකි:",
        bullets: [
          "ඥාන යෝග (Jnana Yoga): දැනුම, ප්‍රඥාව සහ දාර්ශනික ගවේෂණය මගින් සත්‍යය අවබෝධ කර ගැනීම.",
          "භක්ති යෝග (Bhakti Yoga): දෙවියන් වහන්සේ කෙරෙහි ඇති අචල භක්තිය, ආදරය සහ සිත කැප කිරීම මගින් විමුක්තිය සෙවීම.",
          "කර්ම යෝග (Karma Yoga): ක්‍රියාවන්හි ප්‍රතිඵල පිළිබඳව බලාපොරොත්තු රහිතව, නිහතමානීව සහ පරාර්ථකාමීව තමාගේ වගකීම් ඉටු කිරීම.",
          "රාජ යෝග (Raja Yoga): සිත සහ කය පාලනය කරමින් භාවනාව සහ සමාධිය මගින් මානසික ශක්තිය දියුණු කර ගැනීම (අෂ්ටාංග යෝගය)."
        ]
      }
    ],
    summary: "සාරාංශය: හින්දු දර්ශනයේ මූලික හරය වන්නේ තමා තුළ සිටින \"ආත්මය\" (Atman) සහ මුළු විශ්වයම වෙලාගත් \"පරමාත්මය\" (Brahman) එකක්ම බව වටහාගෙන සදාකාලික මෝක්ෂය (විමුක්තිය) ලැබීමයි. ඒ සඳහා ධර්මය අනුව ජීවත් වෙමින්, තමාට පැවරුණු යුතුකම් පරාර්ථකාමීව ඉටුකිරීම ප්‍රධාන වේ."
  },
  en: {
    introTitle: "A Brief Introduction to Hindu Philosophy",
    sections: [
      {
        id: "scriptures",
        title: "1. Sacred Sources: Shruti and Smriti (The Sacred Texts)",
        desc: "Hindu literature is broadly categorized into two main divisions:",
        bullets: [
          "Shruti (What is Heard): Eternal cosmic truths revealed to ancient sages (rishis) during deep meditation. This contains the four Vedas (Rig, Yajur, Sama, Atharva) and the philosophical Upanishads.",
          "Smriti (What is Remembered): Texts of human origin that clarify and pass down truths through stories and epics. Includes the Ramayana, Mahabharata, Puranas, and the Bhagavad Gita (which explains duty and righteousness)."
        ]
      },
      {
        id: "purusharthas",
        title: "2. The Four Goals of Human Life (Purusharthas)",
        desc: "Four essential aspirations or values that direct a human's lifecycle and goals:",
        bullets: [
          "Dharma (Righteousness/Duty): Living a moral, ethical, and duty-bound life in alignment with cosmic order.",
          "Artha (Wealth/Prosperity): Earning material security and economic prosperity through ethical, honest practices.",
          "Kama (Desire/Pleasure): Pursuing love, aesthetic enjoyment, and sensory pleasure within moral boundaries.",
          "Moksha (Spiritual Liberation): Breaking free from the infinite cycle of rebirth (Samsara) to realize ultimate freedom and union. This is the supreme goal."
        ]
      },
      {
        id: "philosophies",
        title: "3. Four Core Philosophy Concepts (Core Philosophies)",
        desc: "The fundamental pillars of Hindu metaphysics and worldview:",
        bullets: [
          "Karma: The universal law of cause and effect. Every action (mental or physical) generates a matching consequence in this or subsequent lifetimes.",
          "Samsara: The continuous cycle of birth, death, and reincarnation that the soul undergoes until it achieves liberation.",
          "Atman: The eternal, indestructible, and divine soul residing within every living entity.",
          "Brahman: The ultimate, unchanging, supreme cosmic reality that underpins all existence."
        ]
      },
      {
        id: "trimurti",
        title: "4. The Trinity (Trimurti)",
        desc: "The three major manifestations of the Divine representing the natural cycles of reality:",
        bullets: [
          "Brahma: The Creator deity who brings the cosmos into existence.",
          "Vishnu: The Preserver and Protector who sustains order and balance (Dharma) in the universe.",
          "Shiva: The Destroyer and Regenerator who dissolves existence to facilitate fresh creation."
        ]
      },
      {
        id: "yoga",
        title: "5. The Four Paths of Yoga",
        desc: "Four spiritual pathways mapped out to achieve Moksha based on a seeker's individual traits:",
        bullets: [
          "Jnana Yoga: The path of intellectual knowledge, discrimination, and spiritual wisdom.",
          "Bhkati Yoga: The path of profound love, emotional devotion, and surrender to the Supreme Divine.",
          "Karma Yoga: The path of selfless, duty-oriented action without attachment to personal gain or results.",
          "Raja Yoga: The path of physical and mental discipline, concentration, and deep meditation (Ashtanga Yoga)."
        ]
      }
    ],
    summary: "Summary: The core objective of Hindu philosophy is realizing that the individual soul (Atman) is identical with the supreme cosmic reality (Brahman) to achieve liberation (Moksha). Living ethically in accordance with Dharma and executing duty selflessly are vital anchors of this journey."
  },
  ta: {
    introTitle: "இந்து தத்துவத்தின் சுருக்கமான அறிமுகம்",
    sections: [
      {
        id: "scriptures",
        title: "1. புனித ஆதாரங்கள்: சுருதி மற்றும் ஸ்மிருதி (The Sacred Texts)",
        desc: "இந்து மத இலக்கியங்கள் பொதுவாக இரண்டு பெரும் பிரிவுகளாக பிரிக்கப்படுகின்றன:",
        bullets: [
          "சுருதி (கேட்கப்பட்டது): தியானத்தின் போது பண்டைய ரிஷிகளுக்கு வெளிப்படுத்தப்பட்ட பிரபஞ்ச உண்மையின் நித்திய வார்த்தைகள். இதில் நான்கு வேதங்கள் (ரிக், யஜுர், சாம, அதர்வண) மற்றும் தத்துவங்கள் நிறைந்த உபநிடதங்கள் அடங்கும்.",
          "ஸ்மிருதி (நினைவுகூரப்பட்டது): மனிதர்களால் எழுதப்பட்டு, ஆன்மீக உண்மைகளை கதைகள் மற்றும் இதிகாசங்கள் மூலம் விளக்கும் நூல்கள். இதில் இராமாயணம், மகாபாரதம், புராணங்கள் மற்றும் கடமையை விளக்கும் பகவத் கீதை ஆகியவை அடங்கும்."
        ]
      },
      {
        id: "purusharthas",
        title: "2. மனித வாழ்க்கையின் நான்கு இலக்குகள் (புருஷார்த்தங்கள்)",
        desc: "ஒரு மனிதன் தன் லௌகிக மற்றும் ஆன்மீக வாழ்க்கையில் அடைய வேண்டிய 4 முக்கிய இலக்குகள்:",
        bullets: [
          "தர்மம் (அறநெறி/கடமை): பிரபஞ்ச ஒழுங்கு மற்றும் கடமைகளுக்கு ஏற்ப ஒழுக்கமான, நேர்மையான வாழ்க்கையை வாழ்தல்.",
          "அர்த்தம் (பொருள்/செல்வம்): நேர்மையான மற்றும் தார்மீக வழிகளில் பொருள் செல்வம் மற்றும் பொருளாதார பாதுகாப்பை ஈட்டுதல்.",
          "காமம் (இன்பம்/விருப்பம்): தார்மீக எல்லைகளுக்குள் அன்பு, சிற்றின்பம் மற்றும் உணர்ச்சிப்பூர்வமான மகிழ்ச்சியை அனுபவித்தல்.",
          "மோட்சம் (வீடுபேறு/விடுதலை): பிறப்பு மற்றும் இறப்பு சுழற்சியிலிருந்து (சம்சாரம்) விடுதலை பெற்று, ஆன்மாவின் இறுதி எல்லையை அடைதல். இதுவே வாழ்க்கையின் இறுதி இலக்காகும்."
        ]
      },
      {
        id: "philosophies",
        title: "3. நான்கு அடிப்படை தத்துவ கருத்துக்கள் (Core Philosophies)",
        desc: "இந்து தத்துவத்தின் அடிப்படை தூண்களாக விளங்கும் நான்கு கருத்துக்கள்:",
        bullets: [
          "கர்மா: காரண-காரிய விதி. ஒரு செயலுக்கு (உடல் அல்லது மன ரீதியான) இந்த பிறவியிலோ அல்லது அடுத்த பிறவிகளிலோ அதற்குரிய பலன் கண்டிப்பாக உண்டு.",
          "சம்சாரம்: ஆன்மா விடுதலை அடையும் வரை தொடர்ந்து நிகழும் பிறப்பு, இறப்பு மற்றும் மறுபிறப்பு சுழற்சி.",
          "ஆத்மா: ஒவ்வொரு உயிரினத்திற்குள்ளும் இருக்கும் நித்தியமான, அழியாத ஆன்மா.",
          "பிரம்மம்: பிரபஞ்சத்தின் அனைத்து இருப்புக்கும் அடிப்படையாக இருக்கும் மாறாத, பரம்பொருள் அல்லது பேரான்மா."
        ]
      },
      {
        id: "trimurti",
        title: "4. மும்மூர்த்திகள் (The Trimurti)",
        desc: "பிரபஞ்ச சுழற்சியைக் குறிக்கும் இறைவனின் மூன்று முக்கிய வடிவங்கள்:",
        bullets: [
          "பிரம்மன்: பிரபஞ்சத்தைப் படைக்கும் படைப்புக் கடவுள் (The Creator).",
          "விஷ்ணு: பிரபஞ்சத்தைக் காத்து, தர்மத்தை நிலைநிறுத்தும் காக்கும் கடவுள் (The Preserver).",
          "சிவன்: பிரபஞ்சத்தை ஒடுக்கி, புதிய படைப்புக்கு வழிவகுக்கும் அழிக்கும் கடவுள் (The Destroyer)."
        ]
      },
      {
        id: "yoga",
        title: "5. மோட்சத்தை அடைய யோகாவின் நான்கு பாதைகள் (The Four Paths of Yoga)",
        desc: "ஒருவரின் இயல்புக்கு ஏற்ப மோட்சத்தை அடைய பரிந்துரைக்கப்படும் நான்கு ஆன்மீக வழிகள்:",
        bullets: [
          "ஞான யோகம்: அறிவு, ஞானம் மற்றும் தத்துவ விசாரணை மூலம் உண்மையை உணரும் பாதை.",
          "பக்தி யோகம்: இறைவன் மீது முழுமையான அன்பு, பக்தி மற்றும் சரணாகதி செலுத்தும் பாதை.",
          "கர்ம யோகம்: பலனை எதிர்பார்க்காமல் சுயநலமின்றி கடமைகளைச் செய்யும் பாதை.",
          "ராஜ யோகம்: தியானம், மனக் கட்டுப்பாடு மற்றும் உடற்பயிற்சி (அஷ்டாங்க யோகம்) மூலம் ஆன்மீக சக்தியை வளர்க்கும் பாதை."
        ]
      }
    ],
    summary: "சுருக்கம்: இந்து தத்துவத்தின் முக்கிய நோக்கம், தனி ஆன்மா (ஆத்மா) பேரான்மாவுடன் (பிரம்மம்) ஒன்றிணைவதை உணர்ந்து வீடுபேறு (மோட்சம்) அடைவதாகும். தர்மத்தின்படி வாழ்வதும், சுயநலமின்றி கடமைகளைச் செய்வதும் இந்த ஆன்மீகப் பயணத்தின் முக்கிய தூண்களாகும்."
  }
}

function HinduDetail({ lang, colorClass }) {
  const t = content[lang] || content['en']

  return (
    <div className={`mt-8 glass-panel-hindu rounded-[2.5rem] p-6 md:p-10 space-y-8 text-justify text-sm md:text-base`}>
      <p className="text-orange-400 font-bold text-center text-lg bg-orange-500/5 py-3 rounded-xl border border-orange-500/10">
        {t.introTitle}
      </p>

      {t.sections.map((section) => {
        return (
          <div key={section.id} className="p-6 bg-black/40 rounded-2xl border border-orange-500/10 hover:border-orange-500/20 transition-all">
            <h3 className="text-xl font-bold text-orange-400 mb-3">{section.title}</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">{section.desc}</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              {section.bullets.map((bullet, idx) => {
                const parts = bullet.split(':')
                if (parts.length > 1) {
                  return (
                    <li key={idx} className="leading-relaxed">
                      <strong className="text-orange-400/90">{parts[0]}:</strong>{parts.slice(1).join(':')}
                    </li>
                  )
                }
                return (
                  <li key={idx} className="leading-relaxed">{bullet}</li>
                )
              })}
            </ul>
          </div>
        )
      })}

      <div className="bg-orange-950/40 p-6 rounded-2xl border border-orange-500/20 text-justify text-xs md:text-sm leading-relaxed text-orange-300 font-medium">
        {t.summary}
      </div>
    </div>
  )
}

export default HinduDetail

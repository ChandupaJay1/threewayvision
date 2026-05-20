import React from 'react'

const content = {
  si: {
    introTitle: "ක්‍රිස්තු දර්ශනයේ කෙටි හැඳින්වීමකි.",
    sections: [
      {
        id: "scriptures",
        title: "1. මූලික පදනම: ශුද්ධ වූ බයිබලය (The Scriptures)",
        desc: "කිතුනු දහමේ එකම සහ ප්‍රධානතම මූලාශ්‍රය බයිබලයයි. එය ප්‍රධාන කොටස් දෙකකි:",
        bullets: [
          "පැරණි ගිවිසුම (Old Testament): ලෝකය මැවීම, යුදෙව් ජනතාවගේ ඉතිහාසය, දෙවියන් වහන්සේගේ නීති සහ මනුෂ්‍ය වර්ගයා ගැලවීම සඳහා ගැලවුම්කරුවෙකු (මෙසියස්) පැමිණෙන බවට කළ අනාගතවාක්‍ය මෙයට ඇතුළත් වේ.",
          "අලුත් ගිවිසුම (New Testament): ජේසුස් ක්‍රිස්තුස් වහන්සේගේ උපත, ජීවිතය, දේශනා, කුරුසියේ මරණය, උත්ථානය සහ මුල් කිතුනු සභාවේ ව්‍යාප්තිය පිළිබඳව සඳහන් වේ."
        ]
      },
      {
        id: "trinity",
        title: "2. මූලික ඇදහිල්ල: ත්‍රිත්වය (The Holy Trinity)",
        desc: "කිතුනු දහමේ මූලිකම දේව ධර්මය වන්නේ දෙවියන් වහන්සේ \"එක්කෙනෙකු\" වන නමුත් උන්වහන්සේ පුද්ගලභාවයන් (Persons) තුනකින් ප්‍රකාශ වන බවයි:",
        bullets: [
          "පියාණන් වන දෙවියන් වහන්සේ: මැවුම්කරු සහ පාලකයාණන්.",
          "පුත්‍රයාණන් වන දෙවියන් වහන්සේ: මනුෂ්‍ය වර්ගයා පවින් මුදවා ගැනීමට මෙලොවට පැමිණි ජේසුස් ක්‍රිස්තුස් වහන්සේ.",
          "ශුද්ධාත්මයාණන් වන දෙවියන් වහන්සේ: ඇදහිලිවන්තයන් තුළ ජීවත් වෙමින් ඔවුන්ව මෙහෙයවන සහ ශක්තිමත් කරන ආධ්‍යාත්මික බලය."
        ]
      },
      {
        id: "commandments",
        title: "3. දේව පනත් සහ ආඥා (The Commandments)",
        desc: "කිතුනුවෙකුගේ සදාචාරාත්මක සහ ප්‍රායෝගික ජීවිතය පාලනය වන ප්‍රධාන නීති මාලාවන් දෙකකි.",
        details: [
          {
            subtitle: "● දස පනත (The Ten Commandments):",
            text: "(පැරණි ගිවිසුමෙන්) දෙවියන් වහන්සේ විසින් මෝසෙස් ප්‍රොපේතවරයා හරහා ලබාදුන්, මිනිසා සහ දෙවියන් අතර මෙන්ම මිනිසා සහ මිනිසා අතර සබඳතාවය පාලනය කරන මූලික නීති 10කි. (උදා: එකම දෙවියන්ට වැඳීම, මව්පියන්ට ගරු කිරීම, මිනී නොමැරීම, සොරකම් නොකිරීම, බොරු සාක්ෂි නොදීම ආදිය)."
          },
          {
            subtitle: "● ප්‍රධාන ප්‍රේමයේ ආඥා 2:",
            quote: [
              "\"උඹේ මුළු හෘදයෙන්ද, මුළු ආත්මයෙන්ද, මුළු බුද්ධියෙන්ද, මුළු ශක්තියෙන්ද උඹේ දෙවි වූ ස්වාමීන් වහන්සේට ප්‍රේම කරන්න.\"",
              "\"උඹට මෙන් උඹේ අසල්වැසියාට ප්‍රේම කරන්න.\""
            ]
          }
        ]
      },
      {
        id: "fruits",
        title: "4. ශුද්ධාත්මයාණන් වහන්සේගේ ඵල 9 (The Fruit of the Spirit)",
        desc: "බුදුදහමේ බොජ්ඣංග හෝ ඉන්ද්‍රිය ධර්ම මෙන්, සැබෑ කිතුනුවෙකුගේ සිත තුළ ශුද්ධාත්මයාණන්ගේ මෙහෙයවීම නිසා ස්වභාවිකවම හටගන්නා උසස් ආධ්‍යාත්මික ගුණාංග 9කි (ගලාති 5:22-23):",
        items: [
          "ප්‍රේමය (Love)", "ප්‍රීතිය (Joy)", "සමාදානය (Peace)", 
          "ඉවසීම (Patience)", "දයාව (Kindness)", "යහපත්කම (Goodness)", 
          "විශ්වාසවන්තකම (Faithfulness)", "මෘදුකම (Gentleness)", "ස්වයං පාලනය (Self-Control)"
        ]
      },
      {
        id: "virtues",
        title: "5. දේවධර්මීය සහ සදාචාරාත්මක ගුණධර්ම (The Virtues)",
        desc: "කිතුනු ජීවිතයක පැවැත්ම සඳහා අත්‍යවශ්‍ය වන ප්‍රධාන කුසලතා වැනි ගුණාංග සමුදායකි.",
        details: [
          {
            subtitle: "● ප්‍රධාන ආධ්‍යාත්මික ගුණාංග 3 (The Theological Virtues):",
            text: "බයිබලයට අනුව (1 කොරින්ති 13:13) උසස්ම දේ මේවාය:",
            subBullets: [
              "ඇදහිල්ල (Faith): දෙවියන් වහන්සේ කෙරෙහි තබන අචල විශ්වාසය.",
              "බලාපොරොත්තුව (Hope): සදාකාලික ජීවිතය සහ දේව පොරොන්දු කෙරෙහි ඇති අපේක්ෂාව.",
              "ප්‍රේමය (Charity/Love): සියල්ලටම වඩා උසස්, කොන්දේසි විරහිත ආදරය."
            ]
          }
        ]
      },
      {
        id: "beatitudes",
        title: "6. කන්ද උඩ දේශනාවේ \"භාග්‍යවන්තයෝ\" (The Beatitudes)",
        desc: "ජේසුස් වහන්සේ විසින් දේශනා කරන ලද, ආධ්‍යාත්මික දියුණුව ලබන්නන්ගේ සිතේ ස්වභාවය විදහා දක්වන කරුණු 8කි (මතෙව් 5):",
        bullets: [
          "ආත්මයෙන් දිළිඳු අය (නිහතමානී අය) භාග්‍යවන්තයෝය.",
          "ශෝක වන්නෝ (පව් ගැන කණගාටු වන්නෝ) භාග්‍යවන්තයෝය.",
          "මෘදු ගුණැත්තෝ භාග්‍යවන්තයෝය.",
          "ධර්මිෂ්ඨකමට සාගිනි ඇත්තෝ භාග්‍යවන්තයෝය.",
          "දයාවන්තයෝ භාග්‍යවන්තයෝය.",
          "සිතින් පවිත්‍ර වූවෝ භාග්‍යවන්තයෝය.",
          "සමාදානය කරන්නෝ භාග්‍යවන්තයෝය.",
          "ධර්මිෂ්ඨකම නිසා පීඩා විඳින්නෝ භාග්‍යවන්තයෝය."
        ]
      }
    ],
    summary: "සාරාංශය: කිතුනු දහමේ හරය වන්නේ \"ගැලවීම\" (Salvation) යන්නයි. මිනිසා තමාගේම උත්සාහයෙන් පමණක් නොව, දෙවියන් වහන්සේගේ \"කෘපාව\" (Grace) එනම් අනුග්‍රහය සහ ජේසුස් වහන්සේ කෙරෙහි තබන ඇදහිල්ල තුළින් පාපයෙන් මිදී, සදාකාලික ජීවිතය (ස්වර්ගය) කරා ගමන් කරන බව මෙයින් ඉගැන්වේ. සියලු නීති සහ වත්පිළිවෙත්වල අවසාන ඉලක්කය දෙවියන් වහන්සේට සහ සෙසු මිනිසාට \"ප්‍රේම කිරීම\" යන්නයි."
  },
  en: {
    introTitle: "A Brief Introduction to Christian Philosophy",
    sections: [
      {
        id: "scriptures",
        title: "1. The Foundation: The Holy Bible (The Scriptures)",
        desc: "The Bible is the single and primary source of the Christian faith. It is divided into two main parts:",
        bullets: [
          "Old Testament: Covers the creation of the world, the history of the Jewish people, the laws of God, and prophecies foretelling the coming of a Savior (Messiah) to redeem humanity.",
          "New Testament: Records the birth, life, teachings, crucifixion, resurrection of Jesus Christ, and the expansion of the early Christian church."
        ]
      },
      {
        id: "trinity",
        title: "2. The Core Belief: The Holy Trinity",
        desc: "The fundamental theology of Christianity is that God is One, yet manifested in three distinct Persons:",
        bullets: [
          "God the Father: The Creator and Sovereign Ruler of the universe.",
          "God the Son: Jesus Christ, who came to earth to redeem mankind from sin.",
          "God the Holy Spirit: The spiritual power that lives within, guides, and strengthens believers."
        ]
      },
      {
        id: "commandments",
        title: "3. Commandments and Decrees (The Commandments)",
        desc: "A Christian's moral and practical life is governed by two main sets of laws.",
        details: [
          {
            subtitle: "● The Ten Commandments:",
            text: "(From the Old Testament) 10 basic laws given by God through the Prophet Moses, regulating the relationship between God and humanity as well as between human beings. (e.g., worshiping only one God, honoring parents, not killing, not stealing, not bearing false witness)."
          },
          {
            subtitle: "● The Two Great Commandments of Love:",
            quote: [
              "\"Love the Lord your God with all your heart, with all your soul, with all your mind, and with all your strength.\"",
              "\"Love your neighbor as yourself.\""
            ]
          }
        ]
      },
      {
        id: "fruits",
        title: "4. The Nine Fruits of the Holy Spirit (The Fruit of the Spirit)",
        desc: "Noble spiritual qualities that naturally arise in the heart of a true Christian under the guidance of the Holy Spirit (Galatians 5:22-23):",
        items: [
          "Love", "Joy", "Peace", 
          "Patience", "Kindness", "Goodness", 
          "Faithfulness", "Gentleness", "Self-Control"
        ]
      },
      {
        id: "virtues",
        title: "5. Theological and Moral Virtues (The Virtues)",
        desc: "Essential qualities necessary for Christian living.",
        details: [
          {
            subtitle: "● The Three Theological Virtues:",
            text: "According to the Scriptures (1 Corinthians 13:13), the greatest qualities are:",
            subBullets: [
              "Faith: Unwavering trust in God.",
              "Hope: Expectation of eternal life and divine promises.",
              "Love: The greatest of all, unconditional love."
            ]
          }
        ]
      },
      {
        id: "beatitudes",
        title: "6. The Beatitudes in the Sermon on the Mount",
        desc: "Eight blessings taught by Jesus in the Sermon on the Mount, showing the spiritual disposition of those who grow spiritually (Matthew 5):",
        bullets: [
          "Blessed are the poor in spirit (the humble), for theirs is the kingdom of heaven.",
          "Blessed are those who mourn (who grieve over sins), for they shall be comforted.",
          "Blessed are the meek, for they shall inherit the earth.",
          "Blessed are those who hunger and thirst for righteousness, for they shall be filled.",
          "Blessed are the merciful, for they shall obtain mercy.",
          "Blessed are the pure in heart, for they shall see God.",
          "Blessed are the peacemakers, for they shall be called sons of God.",
          "Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven."
        ]
      }
    ],
    summary: "Summary: The core of Christianity is \"Salvation.\" It teaches that humans are redeemed not merely by their own efforts, but through God's \"Grace\" (divine favor) and faith in Jesus Christ, transitioning from sin to eternal life (heaven). The ultimate goal of all laws and rituals is to \"Love\" God and fellow humans."
  },
  ta: {
    introTitle: "கிறிஸ்தவ தத்துவத்தின் சுருக்கமான அறிமுகம்",
    sections: [
      {
        id: "scriptures",
        title: "1. அடிப்படைப் பன்னம்: புனித விவிலியம் (The Scriptures)",
        desc: "கிறிஸ்தவ நம்பிக்கையின் ஒரே மற்றும் முக்கிய ஆதாரம் விவிலியம் (பைபிள்) ஆகும். இது இரண்டு முக்கிய பிரிவுகளாக பிரிக்கப்பட்டுள்ளது:",
        bullets: [
          "பழைய ஏற்பாடு (Old Testament): உலகம் படைக்கப்பட்ட வரலாறு, யூத மக்களின் வரலாறு, இறைவனின் சட்டங்கள் மற்றும் மனிதகுலத்தை பாவத்திலிருந்து மீட்க இரட்சகர் (மேசியா) வருவார் என்ற தீர்க்கதரிசனங்கள் ஆகியவற்றை உள்ளடக்கியது.",
          "புதிய ஏற்பாடு (New Testament): இயேசு கிறிஸ்துவின் பிறப்பு, வாழ்க்கை, போதனைகள், சிலுவை மரணம், உயிர்த்தெழுதல் மற்றும் ஆரம்பகால கிறிஸ்தவ சபையின் பரவல் ஆகியவற்றை விவரிக்கிறது."
        ]
      },
      {
        id: "trinity",
        title: "2. அடிப்படை விசுவாசம்: திருத்துவம் (The Holy Trinity)",
        desc: "இறைவன் ஒருவரே, ஆனால் அவர் மூன்று ஆட்களாக வெளிப்படுகிறார் என்பதே கிறிஸ்தவத்தின் அடிப்படை கோட்பாடாகும்:",
        bullets: [
          "தந்தை இறைவன்: பிரபஞ்சத்தின் படைப்பாளர் மற்றும் ஆளுபவர்.",
          "மகன் இறைவன்: மனிதகுலத்தை பாவத்திலிருந்து மீட்க உலகிற்கு வந்த இயேசு கிறிஸ்து.",
          "தூய ஆவியான இறைவன் (பரிசுத்த ஆவி): விசுவாசிகளுக்குள் வாழ்ந்து, அவர்களை வழிநடத்தி, பலப்படுத்தும் ஆன்மீக ஆற்றல்."
        ]
      },
      {
        id: "commandments",
        title: "3. இறை கட்டளைகளும் சட்டங்களும் (The Commandments)",
        desc: "ஒரு கிறிஸ்தவரின் தார்மீக மற்றும் நடைமுறை வாழ்க்கை இரண்டு முக்கிய சட்டத்தொகுப்புகளால் நிர்வகிக்கப்படுகிறது.",
        details: [
          {
            subtitle: "● பத்து கட்டளைகள் (The Ten Commandments):",
            text: "(பழைய ஏற்பாட்டிலிருந்து) இறைவனால் மோசே தீர்க்கதரிசி மூலமாக வழங்கப்பட்ட, இறைவனுக்கும் மனிதனுக்கும், மனிதனுக்கும் மனிதனுக்கும் இடையிலான உறவை ஒழுங்குபடுத்தும் 10 அடிப்படை விதிகள் (எ.கா: ஒரே இறைவனை வணங்குதல், பெற்றோரை மதித்தல், கொலை செய்யாமை, திருடாமை, பொய் சாட்சி சொல்லாமை)."
          },
          {
            subtitle: "● அன்பின் இரண்டு முக்கிய கட்டளைகள்:",
            quote: [
              "\"உன் முழு இதயத்தோடும், முழு ஆத்துமாவோடும், முழு மனதோடும், முழு ஆற்றலோடும் உன் கடவுளாகிய ஆண்டவரிடம் அன்பு செலுத்துவாயாக.\"",
              "\"உன்னைப்போல் உன் அண்டை வீட்டாரிடமும் அன்பு செலுத்துவாயாக.\""
            ]
          }
        ]
      },
      {
        id: "fruits",
        title: "4. தூய ஆவியின் 9 கனிகள் (The Fruit of the Spirit)",
        desc: "தூய ஆவியின் வழிநடத்துதலால் ஒரு உண்மையான கிறிஸ்தவரின் மனதில் இயற்கையாகவே உருவாகும் உயரிய ஆன்மீக பண்புகள் (கலாத்தியர் 5:22-23):",
        items: [
          "அன்பு (Love)", "மகிழ்ச்சி (Joy)", "அமைதி (Peace)", 
          "பொறுமை (Patience)", "தயவு (Kindness)", "நற்பண்பு (Goodness)", 
          "விசுவாசம் (Faithfulness)", "சாந்தம் (Gentleness)", "இச்சை அடக்கம் (Self-Control)"
        ]
      },
      {
        id: "virtues",
        title: "5. ஆன்மீக மற்றும் தார்மீக நற்பண்புகள் (The Virtues)",
        desc: "கிறிஸ்தவ வாழ்க்கைக்கு அவசியமான முக்கிய நற்பண்புகள்.",
        details: [
          {
            subtitle: "● மூன்று முக்கிய ஆன்மீக நற்பண்புகள் (The Theological Virtues):",
            text: "விவிலியத்தின்படி (1 கொரிந்தியர் 13:13) மிக உன்னதமான பண்புகள் இவை:",
            subBullets: [
              "விசுவாசம் (Faith): கடவுள் மீது வைக்கும் அசைக்க முடியாத நம்பிக்கை.",
              "நம்பிக்கை (Hope): நித்திய வாழ்வு மற்றும் இறை வாக்குறுதிகள் மீதான எதிர்பார்ப்பு.",
              "அன்பு (Love): எல்லாவற்றிலும் மேலான, நிபந்தனையற்ற அன்பு."
            ]
          }
        ]
      },
      {
        id: "beatitudes",
        title: "6. மலைப்பொழிவின் \"பேறுகள்\" (The Beatitudes)",
        desc: "இயேசு மலைப்பொழிவில் போதித்த, ஆன்மீக வளர்ச்சியடைபவர்களின் மனநிலையை வெளிப்படுத்தும் 8 பேறுகள் (மத்தேயு 5):",
        bullets: [
          "ஏழ்மையான மனத்தினர் (தாழ்மையானவர்கள்) பேறுபெற்றோர், ஏனெனில் விண்ணரசு அவர்களுக்குரியது.",
          "துயருறுவோர் (பாவங்களுக்காக வருந்துவோர்) பேறுபெற்றோர், ஏனெனில் அவர்கள் ஆறுதல் பெறுவர்.",
          "சாந்தகுணமுள்ளவர்கள் பேறுபெற்றோர், ஏனெனில் அவர்கள் நாட்டை உரிமைசொத்தாக்கிக் கொள்வர்.",
          "நீதிநெறிக்காக பசித்து தாகමாய் இருப்போர் பேறுபெற்றோர், ஏனெனில் அவர்கள் நிறைவுபெறுவர்.",
          "இரக்கமுடையோர் பேறுபெற்றோர், ஏனெனில் அவர்கள் இரக்கம் பெறுவர்.",
          "தூய உள்ளத்தினர் பேறுபெற்றோர், ஏனெனில் அவர்கள் கடவுளைக் காண்பர்.",
          "அமைதி ஏற்படுத்துவோர் பேறுபெற்றோர், ஏனெனில் அவர்கள் கடவுளின் மக்கள் என அழைக்கப்படுவர்.",
          "நீதியின் பொருட்டு துன்புறுத்தப்படுவோர் பேறுபெற்றோர், ஏனெனில் விண்ணரசு அவர்களுக்குரியது."
        ]
      }
    ],
    summary: "சுருக்கம்: கிறிஸ்தவத்தின் மையக்கருத்து \"மீட்பு\" (இரட்சிப்பு) என்பதாகும். மனிதன் தன் சொந்த முயற்சியால் மட்டுமல்லாமல், கடவுளின் \"அருள்\" (கிருபை) மற்றும் இயேசுவின் மீதான விசுவாசத்தினால் பாவத்திலிருந்து விடுவிக்கப்பட்டு, நித்திய வாழ்வை (விண்ணகம்) அடைகிறான் என்று இது போதிக்கிறது. அனைத்து விதிகள் மற்றும் சடங்குகளின் இறுதி இலக்கு கடவுளிடமும் பிறரிடமும் \"அன்பு செலுத்துவதே\" ஆகும்."
  }
}

function ChristianDetail({ lang, colorClass }) {
  const t = content[lang] || content['en']

  return (
    <div className={`mt-8 glass-panel-christian rounded-[2.5rem] p-6 md:p-10 space-y-8 text-justify text-sm md:text-base`}>
      <p className="text-purple-400 font-bold text-center text-lg bg-purple-500/5 py-3 rounded-xl border border-purple-500/10">
        {t.introTitle}
      </p>

      {t.sections.map((section) => {
        if (section.id === "scriptures" || section.id === "trinity" || section.id === "beatitudes") {
          return (
            <div key={section.id} className="p-6 bg-black/40 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-3">{section.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{section.desc}</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                {section.bullets.map((bullet, idx) => {
                  const parts = bullet.split(':')
                  if (parts.length > 1) {
                    return (
                      <li key={idx} className="leading-relaxed">
                        <strong className="text-purple-400/90">{parts[0]}:</strong>{parts.slice(1).join(':')}
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
        }

        if (section.id === "commandments") {
          return (
            <div key={section.id} className="p-6 bg-black/40 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-all space-y-4">
              <h3 className="text-xl font-bold text-purple-400 mb-2">{section.title}</h3>
              <p className="text-slate-300 mb-2 leading-relaxed">{section.desc}</p>
              
              {section.details.map((detail, idx) => (
                <div key={idx} className="space-y-2">
                  {detail.text && (
                    <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                      <strong className="text-purple-300 block mb-2">{detail.subtitle}</strong>
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{detail.text}</p>
                    </div>
                  )}
                  {detail.quote && (
                    <div className="bg-purple-500/5 border-l-4 border-purple-500 p-4 rounded-r-xl space-y-2">
                      <strong className="text-purple-300 block mb-1">{detail.subtitle}</strong>
                      {detail.quote.map((q, qIdx) => (
                        <p key={qIdx} className="text-xs md:text-sm italic text-slate-300 leading-relaxed">{q}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        }

        if (section.id === "fruits") {
          return (
            <div key={section.id} className="p-6 bg-black/40 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-all space-y-4">
              <h3 className="text-xl font-bold text-purple-400 mb-2">{section.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{section.desc}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center text-xs md:text-sm">
                {section.items.map((item, idx) => (
                  <div key={idx} className="bg-purple-950/30 p-3 rounded-lg border border-purple-500/10 text-purple-300 font-bold hover:bg-purple-950/50 hover:border-purple-500/30 transition-all">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )
        }

        if (section.id === "virtues") {
          return (
            <div key={section.id} className="p-6 bg-black/40 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-all space-y-4">
              <h3 className="text-xl font-bold text-purple-400 mb-2">{section.title}</h3>
              <p className="text-slate-300 mb-2 leading-relaxed">{section.desc}</p>
              
              {section.details.map((detail, idx) => (
                <div key={idx} className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <strong className="text-purple-300 block mb-2">{detail.subtitle}</strong>
                  {detail.text && <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-3">{detail.text}</p>}
                  {detail.subBullets && (
                    <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-slate-300">
                      {detail.subBullets.map((sub, sIdx) => {
                        const parts = sub.split(':')
                        if (parts.length > 1) {
                          return (
                            <li key={sIdx} className="leading-relaxed">
                              <strong className="text-purple-400/90">{parts[0]}:</strong>{parts.slice(1).join(':')}
                            </li>
                          )
                        }
                        return <li key={sIdx} className="leading-relaxed">{sub}</li>
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )
        }

        return null
      })}

      <div className="bg-purple-950/40 p-6 rounded-2xl border border-purple-500/20 text-justify text-xs md:text-sm leading-relaxed text-purple-300 font-medium">
        {t.summary}
      </div>
    </div>
  )
}

export default ChristianDetail

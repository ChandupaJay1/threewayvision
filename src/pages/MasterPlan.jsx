import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sectors = [
  {
    id: 1,
    title: '01. දේශීය දැව, සැහැල්ලු ගෘහ භාණ්ඩ සහ පරිසර හිතකාමී නිෂ්පාදන ක්ෂේත්‍රය',
    jobs: 12500,
    desc: 'දේශීය දැව වටිනාකම් එකතු කිරීම්, සැහැල්ලු ගෘහ භාණ්ඩ, පැළ රඳවන, පොල් කටු සහ උණ බම්බු ආශ්‍රිත නවීන පරිසර හිතකාමී නිෂ්පාදන සැකසීමේ කාර්මික ජාලය.',
    roles: [
      { name: 'දැව තාක්ෂණික ශිල්පීන් සහ කැටයම්කරුවන්', count: 4500 },
      { name: 'පොල් කටු සහ උණ බම්බු ආකෘති නිර්මාණකරුවන්', count: 3500 },
      { name: 'නිෂ්පාදන සැලසුම් (CAD/Furniture Designers)', count: 1500 },
      { name: 'ගුණාත්මක භාවය පාලකයන් සහ ලොජිස්තිකා නිලධාරීන්', count: 3000 }
    ]
  },
  {
    id: 2,
    title: '02. කාර්මික නඩත්තු, පුනර්ජනනීය බල ශක්ති සහ ජංගම ඉංජිනේරු සේවා',
    jobs: 15000,
    desc: 'සුර්ය බල ශක්ති පද්ධති (Solar), ජෛව වායු ඒකක, ගෘහස්ථ විදුලි උපකරණ සහ ජංගම කාර්මික පෑස්සුම් / අළුත්වැඩියා සේවා සැපයීමේ කලාපීය ජාලය.',
    roles: [
      { name: 'සුර්ය පැනල සහ ඉන්වර්ටර් තාක්ෂණික ශිල්පීන්', count: 5000 },
      { name: 'ජංගම යාන්ත්‍රික සහ පෑස්සුම් (Welding) ක්‍රියාකරුවන්', count: 4000 },
      { name: 'ජල පොම්ප, ශීතකරණ සහ විදුලි උපකරණ කාර්මිකයන්', count: 3500 },
      { name: 'ප්‍රාදේශීය සේවා සම්බන්ධීකාරකවරුන් සහ පරිපාලකයින්', count: 2500 }
    ]
  },
  {
    id: 3,
    title: '03. දේශීය කෘෂි බෝග, කාබනික පොහොර සහ අගය එකතු කළ ආහාර නිෂ්පාදනය',
    jobs: 18000,
    desc: 'පාරම්පරික සහල්, පිරිසිදු පොල්තෙල්, වියළන ලද පළතුරු, බිම්මල් වගාව, කුළුබඩු කෙටීම සහ මහා පරිමාණ කාබනික කොම්පෝස්ට් නිෂ්පාදනය.',
    roles: [
      { name: 'කාබනික වගා සහ බෝග ක්ෂේත්‍ර පරීක්ෂකවරුන්', count: 5500 },
      { name: 'ආහාර සැකසුම් සහ ඇසුරුම් කරණ තාක්ෂණික ශිල්පීන්', count: 5000 },
      { name: 'තත්ත්ව ආරක්ෂණ (Food Quality Assurance) නිලධාරීන්', count: 3000 },
      { name: 'ගබඩා කරණ සහ කලාපීය බෙදාහැරීමේ ක්‍රියාකරුවන්', count: 4500 }
    ]
  },
  {
    id: 4,
    title: '04. පාරම්පරික අත්කම්, සංස්කෘතික නිපැයුම් සහ විසිතුරු භාණ්ඩ කලාව',
    jobs: 8500,
    desc: 'පන්, වේවැල්, තල් කොළ විවීම, සාම්ප්‍රදායික වෙස් මුහුණු, පිත්තල කැටයම් සහ දේශීය සන්නාම සහිත බිත්ති සැරසිලි කර්මාන්තය.',
    roles: [
      { name: 'සාම්ප්‍රදායික අත්කම් ශිල්පීන් සහ රේන්ද විවන්නන්', count: 3500 },
      { name: 'නවීන විසිතුරු භාණ්ඩ සහ ආභරණ නිර්මාණකරුවන්', count: 2000 },
      { name: 'කලාගාර සහ ප්‍රදර්ශන කුටි කළමනාකරුවන්', count: 1500 },
      { name: 'ග්‍රාමීය සමුපකාර අලෙවි ප්‍රවර්ධන නිලධාරීන්', count: 1500 }
    ]
  },
  {
    id: 5,
    title: '05. හරිත උද්‍යාන කරණය, වහල වගාව සහ පාරිසරික වාස්තු විද්‍යා සේවා',
    jobs: 7500,
    desc: 'සිරස් වගා පද්ධති, බොන්සායි තවාන්, දිය ඇලි සහ මත්ස්‍ය පොකුණු සැලසුම් කිරීම, සහ නාගරික නිවාස සඳහා වහල උද්‍යාන සැකසීම.',
    roles: [
      { name: 'භූ දර්ශන නිර්මාණකරුවන් (Landscape Designers)', count: 2000 },
      { name: 'හයිඩ්‍රොපොනික් සහ සිරස් වගා තාක්ෂණික ශිල්පීන්', count: 2500 },
      { name: 'දුර්ලභ ශාක සහ දේශීය තවාන් නඩත්තුකරුවන්', count: 1800 },
      { name: 'ක්ෂේත්‍ර මෙහෙයුම් සහ සවිකිරීම් සහායකයින්', count: 1200 }
    ]
  },
  {
    id: 6,
    title: '06. ප්‍රාදේශීය ලොජිස්තිකා, ශීත කරණ ප්‍රවාහනය සහ කුරියර් සංචිත',
    jobs: 9000,
    desc: 'කෘෂි අස්වනු නරක් නොවී ප්‍රවාහනය කරන ශීත කරණ මෙහෙයුම්, ප්‍රජා කුරියර් ජාල සහ බර වාහන සම්බන්ධීකරණ පද්ධති.',
    roles: [
      { name: 'ප්‍රජා බෙදා හැරීම් සහ යතුරු පැදි කුරියර්වරුන්', count: 3500 },
      { name: 'ශීත කරණ රථ සහ බර වාහන මෙහෙයුම්කරුවන්', count: 2500 },
      { name: 'ඩිජිටල් ලොජිස්තිකා (Route Optimizers) සැලසුම්කරුවන්', count: 1500 },
      { name: 'කලාපීය ගබඩා සහ සැපයුම් දාම සම්බන්ධීකාරකවරුන්', count: 1500 }
    ]
  },
  {
    id: 7,
    title: '07. හෙළ වෙදකම, ආයුර්වේද සුවතා සහ දේශීය ශාකසාර ස්පා සේවා',
    jobs: 9500,
    desc: 'ආයුර්වේද විෂහරණ කුටි, ශිරෝධාරා මානසික සුවතා මධ්‍යස්ථාන, පාරම්පරික තෙල් සහ ඖෂධීය නිෂ්පාදන කුටි මෙහෙයුම්.',
    roles: [
      { name: 'ප්‍රමිතිගත ආයුර්වේද සුවතා සහ සම්බාහන සේවකයන්', count: 4000 },
      { name: 'ඖෂධීය තෙල් සහ පත්තු නිෂ්පාදන ශිල්පීන්', count: 2000 },
      { name: 'සුවතා මධ්‍යස්ථාන උපදේශකවරුන් සහ කාර්ය මණ්ඩලය', count: 2000 },
      { name: 'ජංගම සහ නිවසටම පැමිණෙන සුවතා සහායකයින්', count: 1500 }
    ]
  },
  {
    id: 8,
    title: '08. ප්‍රජා උපදේශනය, මානසික සුවතාවය සහ පෞරුෂ වර්ධන ඇකඩමි',
    jobs: 6000,
    desc: 'පවුල් සංරක්ෂණය, ළමා මනෝ විද්‍යාව, වෘත්තීය ආතති කළමනාකරණය, කථන ආබාධ ප්‍රතිකාර සහ භාවනා මධ්‍යස්ථාන පරිපාලනය.',
    roles: [
      { name: 'සුදුසුකම්ලත් ප්‍රජා මනෝ විද්‍යා උපදේශකවරුන්', count: 2000 },
      { name: 'ළමා සහ යොවුන් පෞරුෂ වර්ධන පුහුණු කරුවන්', count: 1500 },
      { name: 'කථන සහ කලා / සංගීත ප්‍රතිකාර (Therapists) ශිල්පීන්', count: 1300 },
      { name: 'සුවතා අසපු සහ භාවනා මධ්‍යස්ථාන සහායකයින්', count: 1200 }
    ]
  },
  {
    id: 9,
    title: '09. පරිසර හිතකාමී සහ වික්‍රමාන්විත ජලජ විනෝදාස්වාද සංචාරක කර්මාන්තය',
    jobs: 10000,
    desc: 'ග්‍රාමීය වැව් ආශ්‍රිත කයැකිං, පාවෙන ආපනශාලා, පහුරු විනෝද සේවා, වනජීවී සෆාරි සහ රාත්‍රී කඳවුරු මෙහෙයුම් ජාලය.',
    roles: [
      { name: 'ජලජ ක්‍රීඩා උපදේශකයන් සහ ජීවිත ගලවා ගන්නන්', count: 3500 },
      { name: 'පරිසර සහ වනජීවී සංචාරක මඟපෙන්වන්නන් (Guides)', count: 2500 },
      { name: 'පාවෙන සහ ග්‍රාමීය ආපනශාලා සේවා කාර්ය මණ්ඩලය', count: 2500 },
      { name: 'කඳවුරු සහ බෝට්ටු නඩත්තු තාක්ෂණික ශිල්පීන්', count: 1500 }
    ]
  },
  {
    id: 10,
    title: '10. කෘතිම බුද්ධිය (AI), ඩිජිටල් සාක්ෂරතාවය සහ උපායමාර්ගික කළමනා කරණය',
    jobs: 11000,
    desc: 'ග්‍රාමීය AI පුහුණු මධ්‍යස්ථාන, ඊ - කොමර්ස් අපනයන සම්බන්ධීකරණය, සිනමාත්මක වීඩියෝ චිත්‍රාගාර සහ ප්‍රාදේශීය ප්‍රගති නිරීක්ෂණ කාර්යාල.',
    roles: [
      { name: 'AI සහ ඩිජිටල්技術 උපදේශකවරුන්', count: 3500 },
      { name: 'වීඩියෝ සංස්කාරකවරුන් සහ Cinematic Prompt ශිල්පීන්', count: 2500 },
      { name: 'ඊ - කොමර්ස් සහ ගෝලීය වෙළඳපොළ මෙහෙයුම්කරුවන්', count: 2500 },
      { name: 'තුන් කල් දැක්ම ප්‍රාදේශීය ප්‍රගති නිරීක්ෂණ නිලධාරීන්', count: 2500 }
    ]
  }
]

function MasterPlan({ lang, setLang, setCurrentPage }) {
  const [openSector, setOpenSector] = useState(null)

  const toggleSector = (id) => {
    setOpenSector(openSector === id ? null : id)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f4f6f7', paddingTop: '70px' }}>
      <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-green-800 to-green-700 text-white text-center py-10 px-5 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">තුන් කල් දැක්ම (Three-Way Vision) Master Plan</h1>
          <h2 className="text-xl md:text-2xl font-normal opacity-90">රැකියා ලක්ෂයක (100,000) ජාතික උපායමාර්ගික වෘත්තීය ක්ෂේත්‍ර කළමනාකරණ රාමුව</h2>
        </div>

        <div className="max-w-6xl mx-auto py-8 px-5">
          
          <div className="bg-white rounded-xl p-6 mb-8 shadow-md border-l-5 border-orange-500">
            <strong className="block mb-2">Executive Summary (හැඳින්වීම):</strong>
            <p className="text-gray-700 mb-4">
              මෙම නිල සැලසුම් වාර්තාව මඟින් වසර 7ක ස්වාධීන පර්යේෂණ මත පදනම් වූ "තුන් කල් දැක්ම" ජාතික උපායමාර්ගික වැඩපිළිවෙළ යටතේ ප්‍රාදේශීය මට්ටමින් බිහිකරනු ලබන සමස්ත රැකියා ලක්ෂයේ (100,000) වෘත්තීය ව්‍යාප්තිය සහ කළමනාකරණ රාමුව ක්ෂේත්‍ර 10 ක් ඔස්සේ ක්‍රමවත්ව දක්වයි. ක්ෂේත්‍රයක් මත ක්ලික් කර එහි අභ්‍යන්තර වෘත්තීය භූමිකාවන් අධ්‍යයනය කළ හැකිය.
            </p>
            
            <div className="bg-orange-50 border-2 border-dashed border-orange-400 rounded-lg p-4 text-center text-xl font-bold text-orange-800">
              මුළු එකතුව (Grand Total) = 100,000 රැකියා අවස්ථා
            </div>
          </div>

          <div className="space-y-4">
            {sectors.map((sector) => (
              <div key={sector.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div 
                  onClick={() => toggleSector(sector.id)}
                  className={`p-5 cursor-pointer flex justify-between items-center font-semibold text-lg border-b border-gray-100 user-select-none ${openSector === sector.id ? 'bg-green-50 text-green-800' : 'bg-white text-gray-800'}`}
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <span>{sector.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-base whitespace-nowrap border border-green-200">
                      ඉලක්කගත රැකියා: {sector.jobs.toLocaleString()}
                    </span>
                    <span className={`border-solid border-gray-500 border-0 border-r-3 border-b-3 inline-block p-1 transition-transform ${openSector === sector.id ? 'rotate-[-135deg]' : 'rotate-45'}`}></span>
                  </div>
                </div>
                
                <div 
                  className={`bg-gray-50 overflow-hidden transition-all duration-300 ${openSector === sector.id ? 'max-h-[500px]' : 'max-h-0'}`}
                >
                  <div className="p-4 italic text-gray-600 bg-green-50 border-b border-gray-200 text-base">
                    {sector.desc}
                  </div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">විශේෂිත වෘත්තීය භූමිකාව (Professional Role)</th>
                        <th className="p-3 text-right text-sm font-semibold text-gray-700 w-36">රැකියා සංඛ්‍යාව</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sector.roles.map((role, idx) => (
                        <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                          <td className="p-3 text-left">{role.name}</td>
                          <td className="p-3 text-right font-semibold text-gray-700 w-36">{role.count.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center py-8 mt-12 border-t border-gray-200 text-gray-500 text-sm">
            Thun Kal Dækma Employment Blueprint • Strategic Human Resource Management Framework
          </div>
          
          <div className="text-center mb-8">
            <button onClick={() => setCurrentPage('economy')} className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-semibold text-gray-700 border border-gray-300 transition-colors">
              ← ආපසු
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default MasterPlan

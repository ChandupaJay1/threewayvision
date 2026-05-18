import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projectData = [
  {id: "01", name: "ග්‍රාමීය ලීවැඩ සහ පීඩනික පීලි කර්මාන්තය", desc: "දේශීය දැවයෙන් සැහැල්ලු ගෘහ භාණ්ඩ, පැළ රඳවන සහ කෘෂි ප්‍රවාහන පෙට්ටි නිපදවීම. කෘෂි අස්වනු ප්‍රවාහනයේදී සිදුවන හානිය අවම කරන විශේෂිත සැහැල්ලු ලී පෙට්ටි."},
  {id: "02", name: "ස්වයංක්‍රීය පොල්කටු ආශ්‍රිත නිෂ්පාදන", desc: "පොල් කටු ඔපදමා පරිසර හිතකාමී මුළුතැන්ගෙයි උපකරණ සහ ත්‍යාග භාණ්ඩ නිපදවීම."},
  {id: "03", name: "ජෛව වායු (Bio - Gas) පොලිටනල් කුටි", desc: "ග්‍රාමීය සත්ව අපද්‍රව්‍ය මඟින් ක්‍රියාත්මක වන ප්‍රමිතිගත ජෛව වායු පද්ධති එකලස් කිරීම."},
  {id: "04", name: "ගෑස් සිලින්ඩර ආරක්ෂිත ලෝහ පෙට්ටි", desc: "ගෘහස්ථ ගෑස් සිලින්ඩර සුරක්ෂිතව තැබිය හැකි වාතාශ්‍රය සහිත ලෝහ ආවරණ නිපදවීම."},
  {id: "05", name: "පළතුරු සහ එළවළු සංරක්ෂණ ලී කුටි", desc: "දුරු සහ වියළි කොළ අධි පීඩනයෙන් තෙරපා කාර්මික දහන කුට්ටි (Pellets) බවට පත් කිරීම."},
  {id: "06", name: "ග්‍රාමීය හයිඩ්‍රොලික් පිදුරු මෙවලම්", desc: "පිදුරු සහ ග්‍රාමීය අපද්‍රව්‍ය සම්පීඩනය කර ගවයින්ට සහ සතුන්ට අවශ්‍ය ආහාර තට්ටු සැකසීම."},
  {id: "07", name: "ස්වයංපෝෂිත කුරුළු කූඩු සහ උපකරණ", desc: "ගෙවතු සහ සත්ව ගොවිපළවල් සඳහා දැවයෙන් නිපදවන ස්වයංක්‍රීය ආහාර බඳුන් සහ කූඩු."},
  {id: "08", name: "ලී සෙරෙප්පු සහ පාදම් නිෂ්පාදනය", desc: "සැහැල්ලු දැව සහ පන් රෙදි මිශ්‍ර කර නිපදවන සුව පහසු සංචාරක නිවාඩු නිකේතන පාවහන්."},
  {id: "09", name: "ග්‍රාමීය ලී හැඳි සහ මුළුතැන්ගෙයි භාණ්ඩ", desc: "පොල් මී සහ කිතුල් දැවයෙන් නිපදවන සෞඛ්‍යාරක්ෂිත උපකරණ."},
  {id: "10", name: "උත්සව සඳහා මොඩියලර් ලී මණ්ඩප", desc: "පහසුවෙන් එකලස් කළ හැකි සහ ගලවා ඉවත් කළ හැකි ප්‍රදර්ශන කුටි නිපදවීම."},
  {id: "11", name: "ස්වාභාවික පොල්කොහු පැදුරු සහ ඇතිරිලි", desc: "පොල් කොහු සහ කෙඳි උපයෝගී කර ගනිමින් කාර්මික සහ ගෘහස්ථ ඇතිරිලි නිපදවීම."},
  {id: "12", name: "පරිසර හිතකාමී ගඩොල් (Eco - Bricks)", desc: "පස් සහ සිමෙන්ති නිසි ලෙස මිශ්‍ර කර අධි පීඩනයෙන් තෙරපා නිපදවන ගඩොල්."},
  {id: "13", name: "කොහොඹ තෙල් සහ ස්වාභාවික කෘමි නාශක", desc: "කොහොඹ ඇට සහ ඖෂධීය ශාකසාර උපයෝගී කර ගනිමින් කාබනික කෘමිනාශක නිපදවීම."},
  {id: "14", name: "උණ බම්බු ආශ්‍රිත ගෘහ භාණ්ඩ", desc: "උණ බම්බු සැකසීම මඟින් පුටු, මේස, රාක්ක සහ විසිතුරු භාණ්ඩ නිර්මාණය කිරීම."},
  {id: "15", name: "කාබනික කොම්පෝස්ට් සහ දියර පොහොර", desc: "වසමේ දිරායන අපද්‍රව්‍ය කළමනා කරණය කර උසස් තත්ත්වයේ කාබනික පොහොර නිපදවීම."},
  {id: "16", name: "සුවඳකාරක සහ ඖෂධීය ධූප පෙට්ටි", desc: "ස්වාභාවික රම්පේ, කරපිංචා සහ කුරුඳු කුඩු උපයෝගී කර ගනිමින් සුවඳ ධූප නිපදවීම."},
  {id: "17", name: "මැටි වහල උළු සහ බිම් ඇතුරුම්", desc: "සාම්ප්‍රදායික උළු සහ බිම් ඇතුරුම් ගඩොල් නිපදවීම."},
  {id: "18", name: "දේශීය පැපඩම් සහ වඩි නිෂ්පාදනය", desc: "උඳු, කුරක්කන් සහ ධාන්‍ය වර්ග මිශ්‍ර කර ග්‍රාමීය මට්ටමින් නිෂ්පාදනය."},
  {id: "19", name: "ප්‍රතිචක්‍රීකරණය කළ කඩදාසි ඇසුරුම්", desc: "භාවිතයෙන් ඉවත් කළ කඩදාසි මඟින් බෑග් සහ ඇසුරුම් නිපදවීම."},
  {id: "20", name: "දේශීය අත්යන්ත්‍ර රෙදිපිළි ඒකක", desc: "සාම්ප්‍රදායික අත්යන්ත්‍ර ක්‍රම මඟින් සාරි, ඇඳ ඇතිරිලි විවීම."}
]

function BusinessPlan({ lang, setCurrentPage, setLang }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)

  const filteredProjects = projectData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.includes(searchQuery)
  )

  const showPopup = (num, name, text) => {
    setModalData({ num, name, text })
    setShowModal(true)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F7F5' }}>
      <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
      <header style={{ 
        background: 'linear-gradient(rgba(10, 26, 11, 0.9), rgba(20, 54, 22, 0.95)), url(https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3) no-repeat center center/cover',
        color: '#FFFFFF', textAlign: 'center', padding: '120px 20px 80px 20px', borderBottom: '6px solid #C5A059', position: 'relative', marginTop: '80px'
      }}>
        <button 
          onClick={() => setCurrentPage('economy')} 
          style={{
            position: 'absolute', top: '30px', left: '20px', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', 
            padding: '10px 20px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.3)', 
            fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
        >
          <i className="fa-solid fa-arrow-left"></i> ආපසු
        </button>
        <h1 style={{ fontFamily: 'Abhaya Libre, serif', fontSize: '3.5rem', marginBottom: '15px', textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
          තුන් කල් දැක්ම (Three-Way Vision)
        </h1>
        <h2 style={{ fontFamily: 'Abhaya Libre, serif', fontSize: '1.8rem', color: '#C5A059', marginBottom: '25px', fontWeight: '400' }}>
          පූර්ණ ජාතික උපායමාර්ගික ව්‍යාපාර සහ සේවා සැලැස්ම
        </h2>
        <p style={{ maxWidth: '950px', margin: '0 auto', fontSize: '1.2rem', color: '#E0E0E0', lineHeight: '1.8', textAlign: 'justify', textAlignLast: 'center' }}>
          වත්මන් ආර්ථික පීඩනයන්ගෙන් මිදී ස්වයංපෝෂිත දේශීය ආර්ථිකයක් ගොඩනැඟීම උදෙසා, ග්‍රාමීය මට්ටමින් සැඟව පවතින පුරවැසියාගේ සහජ කුසලතා සහ අද්විතීය දක්ෂතාවන් උපරිමයෙන් ඉස්මතු කර, ඔවුන් සෘජුවම දේශීය නිෂ්පාදන ක්‍රියාවලියට දායක කරවීම සඳහා "තුන් කල් දැක්ම" දීර්ඝකාලීන උපායමාර්ගික මාස්ටර් ප්ලෑන සකස් කර ඇත. මෙම නිල ද්වාරය මඟින් දැනට සාර්ථකව ආරම්භ කර ඇති ප්‍රධාන පරිසර හිතකාමී ව්‍යාපාරික සන්නාමය මෙන්ම, ඉදිරියේදී දිවයින පුරා ප්‍රාදේශීය මට්ටමින් ක්‍රියාත්මක කිරීමට යෝජිත සමස්ත ව්‍යාපාරික අවස්ථා 200ම විනිවිදභාවකින් යුතුව ජනගත කරනු ලබයි.
        </p>
      </header>

      <section style={{ maxWidth: '1200px', margin: '-40px auto 60px auto', padding: '0 20px' }}>
        <div style={{ 
          background: '#FFFFFF', borderRadius: '20px', padding: '45px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', 
          border: '1px solid rgba(197, 160, 89, 0.3)', textAlign: 'center', position: 'relative'
        }}>
          <div style={{ 
            position: 'absolute', top: '20px', right: '20px', background: '#2E7D32', color: '#FFFFFF', padding: '5px 15px', 
            borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px'
          }}>
            <i className="fa-solid fa-circle-check"></i> දැනට ආරම්භ කර ඇති ප්‍රධාන ව්‍යාපාරය
          </div>
          <div style={{ fontFamily: 'Abhaya Libre, serif', fontSize: '3rem', color: '#143616', marginBottom: '5px' }}>
            Natural Eco <span style={{ color: '#2E7D32' }}>Cabin</span>
          </div>
          <div style={{ fontSize: '1.1rem', color: '#C5A059', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Leaders in Eco-Sustainable Solutions & Hospitality
          </div>
          <p style={{ maxWidth: '800px', margin: '0 auto 35px auto', fontSize: '1.05rem', color: '#4A4A4A' }}>
            දේශීය ස්වාභාවික අමුද්‍රව්‍ය පමණක් උපයෝගී කරගනිමින්, පරිසර පද්ධතිවලට හානි නොවන පරිදි උසස් තත්ත්වයේ හෝටල් (Hotels) සහ පරිසර හිතකාමී නිවාඩු කුටි (Cabana) සැලසුම් කිරීම හා ඉදිකිරීමේ ප්‍රමුඛතම ජාතික ව්‍යාපෘතියයි. මෙම මූලික ව්‍යාපාරය හරහා ග්‍රාමීය ශ්‍රමිකයින්ට සෘජු ව්‍යවසායකත්ව අවස්ථා උදාකර දෙමින්, පහත දැක්වෙන ප්‍රධාන මෙහෙයුම් අංශ 3 ඔස්සේ සමස්ත ජාලයම සවිබල ගන්වයි.
          </p>
          <div style={{ 
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '20px'
          }}>
            <div style={{ 
              background: '#F9FBF9', padding: '30px', borderRadius: '15px', borderTop: '4px solid #2E7D32', transition: 'all 0.3s ease', textAlign: 'left', cursor: 'pointer'
            }} 
                 onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)' }}
                 onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                 onClick={() => showPopup('ප්‍රධාන සන්නාම අංශය', 'Natural Eco Landscaping', 'Hotel සහ ගෙවතු අලංකරණය: ස්වාභාවික සුන්දරත්වය උපරිමයෙන් ඉස්මතු වන පරිදි පරිසර හිතකාමී සංකල්පයන්ට අනුකූලව හෝටල් පරිශ්‍ර සහ නිවාස ගෙවතු සැලසුම් කිරීම, කෘතිම දියඇලි, තණකොළ ඇතිරීම සහ වෘත්තීය මට්ටමේ භූමි දර්ශන නිර්මාණය (Landscaping) කටයුතු.')}>
              <i className="fa-solid fa-mountain-sun" style={{ fontSize: '2rem', color: '#C5A059', marginBottom: '15px' }}></i>
              <h3 style={{ fontFamily: 'Abhaya Libre, serif', fontSize: '1.5rem', color: '#143616', marginBottom: '12px' }}>Natural Eco Landscaping</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>හෝටල් සංකීර්ණ සහ ගෙවතු සෞන්දර්යාත්මකව පරිසර හිතකාමී ලෙස අලංකරණය කිරීමේ විශේෂිත සේවා අංශය.</p>
            </div>
            <div style={{ 
              background: '#F9FBF9', padding: '30px', borderRadius: '15px', borderTop: '4px solid #2E7D32', transition: 'all 0.3s ease', textAlign: 'left', cursor: 'pointer'
            }} 
                 onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)' }}
                 onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                 onClick={() => showPopup('ප්‍රධාන සන්නාම අංශය', 'Natural Eco Furniture', 'ගෘහභාණ්ඩ නිෂ්පාදනය: දේශීය ස්වාභාවික දැව, උණ බම්බු සහ පරිසර හිතකාමී අමුද්‍රව්‍ය පමණක් උපයෝගී කරගනිමින්, කල්පැවැත්මෙන් ඉහළ මෙන්ම දැවයේ ස්වාභාවික රළු නිමාව (Rustic look) රැකෙන පරිදි නිපදවන සුවිශේෂී මෝස්තර සහිත දැරිය හැකි මිලෙහි ගෘහභාණ්ඩ.')}>
              <i className="fa-solid fa-couch" style={{ fontSize: '2rem', color: '#C5A059', marginBottom: '15px' }}></i>
              <h3 style={{ fontFamily: 'Abhaya Libre, serif', fontSize: '1.5rem', color: '#143616', marginBottom: '12px' }}>Natural Eco Furniture</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>ස්වාභාවික නිමාව රැකගත්, පරිසර හිතකාමී සහ දැරිය හැකි මිලකට සකස් කළ ගෘහභාණ්ඩ නිෂ්පාදන අංශය.</p>
            </div>
            <div style={{ 
              background: '#F9FBF9', padding: '30px', borderRadius: '15px', borderTop: '4px solid #2E7D32', transition: 'all 0.3s ease', textAlign: 'left', cursor: 'pointer'
            }} 
                 onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)' }}
                 onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                 onClick={() => showPopup('ප්‍රධාන සන්නාම අංශය', 'Natural Eco Interior Design', 'Wall Art සහ අභ්‍යන්තර සැලසුම්කරණය: ස්වාභාවික මැටි, උණ බම්බු, පන් කෙඳි සහ ත්‍රිමාණ ලී පුවරු භාවිතයෙන් කාර්යාල, හෝටල් සහ නිවාස අභ්‍යන්තරය උසස් සෞන්දර්යාත්මක පෙනුමකින් හැඩගැන්වීම සහ සුවිශේෂී Wall Art නිර්මාණකරණය.')}>
              <i className="fa-solid fa-paint-roller" style={{ fontSize: '2rem', color: '#C5A059', marginBottom: '15px' }}></i>
              <h3 style={{ fontFamily: 'Abhaya Libre, serif', fontSize: '1.5rem', color: '#143616', marginBottom: '12px' }}>Natural Eco Interior Design</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>ස්වාභාවික අමුද්‍රව්‍ය, මැටි සහ ලී කලාව මුසු කරමින් සිදු කරනු ලබන උසස් තත්ත්වයේ Wall Art සහ අභ්‍යන්තර අලංකරණ අංශය.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Abhaya Libre, serif', fontSize: '2.5rem', color: '#143616', marginBottom: '15px', position: 'relative' }}>
          මාස්ටර් ප්ලෑන් එකෙහි අන්තර්ගත විෂය පථයන්
          <div style={{ 
            content: '', display: 'block', width: '80px', height: '3px', background: '#C5A059', margin: '10px auto 0 auto'
          }}></div>
        </h2>
        <p style={{ textAlign: 'center', color: '#666', fontSize: '1.1rem', marginBottom: '30px' }}>
          ප්‍රාදේශීය කුසලතා කේන්ද්‍ර කරගනිමින් ජාතික ආර්ථිකය නඟාසිටුවන ක්ෂේත්‍ර 9
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '40px' }}>
          <div style={{ 
            background: '#FFFFFF', padding: '20px', borderRadius: '10px', textAlign: 'center', fontWeight: '600', 
            fontSize: '1.1rem', color: '#143616', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #E8EFE8'
          }}>
            <i className="fa-solid fa-boxes-stacked" style={{ display: 'block', fontSize: '1.8rem', color: '#2E7D32', marginBottom: '10px' }}></i>
            නිෂ්පාදන ක්ෂේත්‍රය
          </div>
          <div style={{ 
            background: '#FFFFFF', padding: '20px', borderRadius: '10px', textAlign: 'center', fontWeight: '600', 
            fontSize: '1.1rem', color: '#143616', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #E8EFE8'
          }}>
            <i className="fa-solid fa-handshake-angle" style={{ display: 'block', fontSize: '1.8rem', color: '#2E7D32', marginBottom: '10px' }}></i>
            සේවා සැපයීම
          </div>
          <div style={{ 
            background: '#FFFFFF', padding: '20px', borderRadius: '10px', textAlign: 'center', fontWeight: '600', 
            fontSize: '1.1rem', color: '#143616', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #E8EFE8'
          }}>
            <i className="fa-solid fa-screwdriver-wrench" style={{ display: 'block', fontSize: '1.8rem', color: '#2E7D32', marginBottom: '10px' }}></i>
            තාක්ෂණික නඩත්තු
          </div>
          <div style={{ 
            background: '#FFFFFF', padding: '20px', borderRadius: '10px', textAlign: 'center', fontWeight: '600', 
            fontSize: '1.1rem', color: '#143616', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #E8EFE8'
          }}>
            <i className="fa-solid fa-bowl-food" style={{ display: 'block', fontSize: '1.8rem', color: '#2E7D32', marginBottom: '10px' }}></i>
            ආහාර නිෂ්පාදන
          </div>
          <div style={{ 
            background: '#FFFFFF', padding: '20px', borderRadius: '10px', textAlign: 'center', fontWeight: '600', 
            fontSize: '1.1rem', color: '#143616', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #E8EFE8'
          }}>
            <i className="fa-solid fa-wand-magic-sparkles" style={{ display: 'block', fontSize: '1.8rem', color: '#2E7D32', marginBottom: '10px' }}></i>
            දේශීය අත්කම්
          </div>
          <div style={{ 
            background: '#FFFFFF', padding: '20px', borderRadius: '10px', textAlign: 'center', fontWeight: '600', 
            fontSize: '1.1rem', color: '#143616', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #E8EFE8'
          }}>
            <i className="fa-solid fa-mortar-pestle" style={{ display: 'block', fontSize: '1.8rem', color: '#2E7D32', marginBottom: '10px' }}></i>
            ආයූර්වේද සුවතා
          </div>
          <div style={{ 
            background: '#FFFFFF', padding: '20px', borderRadius: '10px', textAlign: 'center', fontWeight: '600', 
            fontSize: '1.1rem', color: '#143616', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #E8EFE8'
          }}>
            <i className="fa-solid fa-comments" style={{ display: 'block', fontSize: '1.8rem', color: '#2E7D32', marginBottom: '10px' }}></i>
            උපදේශන සේවා
          </div>
          <div style={{ 
            background: '#FFFFFF', padding: '20px', borderRadius: '10px', textAlign: 'center', fontWeight: '600', 
            fontSize: '1.1rem', color: '#143616', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #E8EFE8'
          }}>
            <i className="fa-solid fa-map-location-dot" style={{ display: 'block', fontSize: '1.8rem', color: '#2E7D32', marginBottom: '10px' }}></i>
            පරිසර සංචාරක
          </div>
          <div style={{ 
            background: '#FFFFFF', padding: '20px', borderRadius: '10px', textAlign: 'center', fontWeight: '600', 
            fontSize: '1.1rem', color: '#143616', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', border: '1px solid #E8EFE8'
          }}>
            <i className="fa-solid fa-water" style={{ display: 'block', fontSize: '1.8rem', color: '#2E7D32', marginBottom: '10px' }}></i>
            ජල විනෝදාස්වාද
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '60px auto 80px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Abhaya Libre, serif', fontSize: '2.5rem', color: '#143616', marginBottom: '15px', position: 'relative' }}>
          අනාගත යෝජිත ව්‍යාපාරික අවස්ථා 200 ක නාමාවලිය
          <div style={{ 
            content: '', display: 'block', width: '80px', height: '3px', background: '#C5A059', margin: '10px auto 0 auto'
          }}></div>
        </h2>
        <p style={{ textAlign: 'center', color: '#666', fontSize: '1.1rem', marginBottom: '30px' }}>
          පුරවැසි හැකියාවන් මත පදනම්ව ග්‍රාමීය මට්ටමින් ක්‍රියාවට නැංවීමට සැලසුම් කර ඇති ව්‍යාපෘති
        </p>
        <div style={{ 
          maxWidth: '500px', margin: '30px auto', position: 'relative'
        }}>
          <i className="fa-solid fa-magnifying-glass" style={{ 
            position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#C5A059', fontSize: '1.2rem'
          }}></i>
          <input type="text" placeholder="ව්‍යාපාරයේ නම හෝ අංකය ටයිප් කරන්න..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 style={{ 
                   width: '100%', padding: '15px 20px 15px 50px', border: '2px solid #C5A059', borderRadius: '30px', fontSize: '1rem', 
                   outline: 'none', background: '#FFFFFF'
                 }} />
        </div>
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px'
        }}>
          {filteredProjects.map((item) => (
            <div key={item.id} style={{ 
              background: '#FFFFFF', borderRadius: '12px', padding: '25px', border: '1px solid #E2E8F0', cursor: 'pointer', 
              transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }} 
                 onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.borderColor = '#2E7D32'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)' }}
                 onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none' }}
                 onClick={() => showPopup(item.id, item.name, item.desc)}>
              <div>
                <span style={{ 
                  background: '#FFF9E6', color: '#B58A33', fontSize: '0.75rem', padding: '2px 10px', borderRadius: '4px', 
                  fontWeight: 'bold', display: 'inline-block', marginBottom: '10px', alignSelf: 'flex-start'
                }}>
                  ව්‍යාපෘතිය
                </span>
                <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#C5A059', marginBottom: '5px' }}>
                  අංකය: {item.id}
                </div>
                <h3 style={{ fontFamily: 'Abhaya Libre, serif', fontSize: '1.3rem', color: '#143616', marginBottom: '10px', lineHeight: '1.4' }}>
                  {item.name}
                </h3>
                <p style={{ 
                  fontSize: '0.95rem', color: '#555', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal && modalData && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', 
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', 
          zIndex: '2000', padding: '20px'
        }} onClick={() => setShowModal(false)}>
          <div style={{ 
            background: '#FFFFFF', padding: '40px', borderRadius: '16px', maxWidth: '600px', width: '100%', 
            position: 'relative', borderTop: '6px solid #C5A059', boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
          }} onClick={(e) => e.stopPropagation()}>
            <span style={{ 
              position: 'absolute', top: '20px', right: '20px', fontSize: '1.8rem', cursor: 'pointer', color: '#999'
            }} onClick={() => setShowModal(false)}>&times;</span>
            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#C5A059', marginBottom: '10px' }}>
              {modalData.num}
            </div>
            <div style={{ 
              fontFamily: 'Abhaya Libre, serif', fontSize: '1.8rem', color: '#143616', marginBottom: '20px'
            }}>
              {modalData.name}
            </div>
            <div style={{ 
              fontSize: '1.1rem', color: '#333', lineHeight: '1.8', borderLeft: '3px solid #2E7D32', paddingLeft: '15px'
            }}>
              {modalData.text}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default BusinessPlan

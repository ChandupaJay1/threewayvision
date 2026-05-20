import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import { projectsList } from '../data/projectsData'
import Chart from 'chart.js/auto'

function ProjectsHub({ lang, setLang, setCurrentPage }) {
  const [activeProjectId, setActiveProjectId] = useState('gatalu1')
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [tableSearchQuery, setTableSearchQuery] = useState('')

  // Find the selected project and its translated labels
  const project = projectsList.find(p => p.id === activeProjectId) || projectsList[0]
  const currentLangSlides = project.slides[lang] || project.slides['si']
  const slide = currentLangSlides[activeSlideIndex] || currentLangSlides[0]

  // Translate basic UI labels
  const staticLabels = {
    si: {
      backBtn: '← ප්‍රධාන මෙනුවට',
      allProjects: 'ජාතික ව්‍යාපෘති 5',
      prevBtn: '← පසුපසට',
      nextBtn: 'ඉදිරියට →',
      buddhistTitle: 'බුදු දහමේ ආර්ථික ප්‍රඥාව',
      matrixTitle: 'පද්ධතිමය විශ්ලේෂණ ලක්ෂණ',
      searchPlaceholder: 'සොයන්න...'
    },
    en: {
      backBtn: '← Back to Main',
      allProjects: '5 National Projects',
      prevBtn: '← Prev',
      nextBtn: 'Next →',
      buddhistTitle: 'Economic Wisdom in Buddhism',
      matrixTitle: 'Systemic Analysis Matrix',
      searchPlaceholder: 'Search...'
    },
    ta: {
      backBtn: '← முதன்மைப் பலகை',
      allProjects: '5 தேசிய திட்டங்கள்',
      prevBtn: '← முந்தைய',
      nextBtn: 'அடுத்த →',
      buddhistTitle: 'பௌத்த பொருளாதார ஞானம்',
      matrixTitle: 'அமைப்பு பகுப்பாய்வு மேட்ரிக்ஸ்',
      searchPlaceholder: 'தேடுங்கள்...'
    }
  }[lang]

  // Reset slide index when changing projects
  useEffect(() => {
    setActiveSlideIndex(0)
    setTableSearchQuery('')
  }, [activeProjectId])

  // Handle table search filtering for legacy HTML slides
  useEffect(() => {
    const input = document.getElementById('tableFilterInput')
    if (input) {
      input.value = tableSearchQuery
      const handleKeyUp = (e) => {
        const query = e.target.value
        setTableSearchQuery(query)
        filterRows(query)
      }
      input.addEventListener('keyup', handleKeyUp)
      // Initial filter if query exists
      filterRows(tableSearchQuery)

      return () => {
        input.removeEventListener('keyup', handleKeyUp)
      }
    }
  }, [activeProjectId, activeSlideIndex, lang, tableSearchQuery])

  const filterRows = (query) => {
    const table = document.getElementById('contentDataTable')
    if (!table) return
    const tr = table.getElementsByTagName('tr')
    const filter = query.toUpperCase()

    for (let i = 1; i < tr.length; i++) {
      let rowContainsQuery = false
      const tdArray = tr[i].getElementsByTagName('td')
      for (let j = 0; j < tdArray.length; j++) {
        if (tdArray[j]) {
          const textValue = tdArray[j].textContent || tdArray[j].innerText
          if (textValue.toUpperCase().indexOf(filter) > -1) {
            rowContainsQuery = true
            break
          }
        }
      }
      tr[i].style.display = rowContainsQuery ? "" : "none"
    }
  }

  // Handle Chart rendering
  useEffect(() => {
    let activeCharts = []

    const initCharts = () => {
      // Destroy any charts left behind
      activeCharts.forEach(c => c.destroy())
      activeCharts = []

      // 1. Radar Chart: marketAsymmetryChart
      const asymmetryCanvas = document.getElementById('marketAsymmetryChart')
      if (asymmetryCanvas) {
        const ctx = asymmetryCanvas.getContext('2d')
        const chart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: lang === 'si' ? ['තොරතුරු රික්තය', 'මධ්‍යගත මිල පාලනය', 'ගබඩා දුර්වලතා', 'සූරාකෑමේ අවදානම'] : 
                    lang === 'ta' ? ['தகவல் வெற்றிடம்', 'மத்தியஸ்த விலை', 'களஞ்சிய பலவீனம்', 'சுரண்டல் ஆபத்து'] :
                    ['Info Asymmetry', 'Centralized Pricing', 'Storage Deficit', 'Exploitation Risk'],
            datasets: [{
              label: lang === 'si' ? 'සාම්ප්‍රදායික ක්‍රමය' : lang === 'ta' ? 'பாரம்பரிய முறை' : 'Traditional System',
              data: [95, 90, 85, 95],
              fill: true,
              backgroundColor: 'rgba(248, 113, 113, 0.2)',
              borderColor: '#f87171',
              pointBackgroundColor: '#f87171',
            }, {
              label: 'Three-Way Vision',
              data: [10, 15, 12, 5],
              fill: true,
              backgroundColor: 'rgba(251, 191, 36, 0.2)',
              borderColor: '#fbbf24',
              pointBackgroundColor: '#fbbf24',
            }]
          },
          options: { 
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#ffffff', font: { size: 11 } } } },
            scales: { r: { grid: { color: 'rgba(255,255,255,0.1)' }, angleLines: { color: 'rgba(255,255,255,0.1)' }, pointLabels: { color: '#ffffff', font: { size: 10 } } } }
          }
        })
        activeCharts.push(chart)
      }

      // 2. Radar Chart: debtVulnerabilityChart
      const vulnerabilityCanvas = document.getElementById('debtVulnerabilityChart')
      if (vulnerabilityCanvas) {
        const ctx = vulnerabilityCanvas.getContext('2d')
        let labels = ['Interest Pressure', 'Collateral Deficit', 'Literacy Void', 'Social Humiliation']
        if (lang === 'si') labels = ['පොලී පීඩනය', 'ඇපකර ලිපිගොනු', 'මූල්‍ය සාක්ෂරතාවය', 'සමාජයීය හිංසනය']
        if (lang === 'ta') labels = ['வட்டி அழுத்தம்', 'பிணை பற்றாக்குறை', 'கல்வியறிவு இன்மை', 'சமூக அவமானம்']

        const chart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: labels,
            datasets: [{
              label: lang === 'si' ? 'සාම්ප්‍රදායික ක්ෂුද්‍ර මූල්‍ය' : (lang === 'ta' ? 'பாரம்பரிய மைக்ரோஃபோனான்ஸ்' : 'Conventional Microfinance'),
              data: [98, 95, 85, 95],
              fill: true,
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              borderColor: '#ef4444',
              pointBackgroundColor: '#ef4444',
            }, {
              label: 'Three-Way Vision (Trust Loop)',
              data: [5, 0, 95, 0],
              fill: true,
              backgroundColor: 'rgba(251, 191, 36, 0.2)',
              borderColor: '#fbbf24',
              pointBackgroundColor: '#fbbf24',
            }]
          },
          options: { 
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#ffffff', font: { size: 11 } } } },
            scales: { r: { grid: { color: 'rgba(255,255,255,0.1)' }, angleLines: { color: 'rgba(255,255,255,0.1)' }, pointLabels: { color: '#ffffff', font: { size: 10 } } } }
          }
        })
        activeCharts.push(chart)
      }

      // 3. Line Chart: gdpGrowthChart
      const gdpCanvas = document.getElementById('gdpGrowthChart')
      if (gdpCanvas) {
        const ctx = gdpCanvas.getContext('2d')
        let labels = []
        let data = []
        let label = ''

        if (activeProjectId === 'gatalu1') {
          labels = lang === 'si' ? ['වසම් දත්ත', 'ඩිජිටල් කේන්ද්‍රය', 'Layer-B බද්ධය', 'සෘජු වෙළඳපොළ', 'ප්‍රඥාවන්ත ව්‍යවසාය'] : 
                   lang === 'ta' ? ['பிரிவு தரவு', 'டிஜிட்டல் மையம்', 'Layer-B இணைப்பு', 'நேரடி சந்தை', 'சுயாதீன தொழில்முனைவு'] :
                   ['Division Data', 'Digital Hub', 'Layer-B Integration', 'Direct Market', 'Empowered Enterprise']
          data = [20, 45, 70, 90, 98]
          label = lang === 'si' ? 'ග්‍රාමීය ආර්ථික පිබිදීම %' : lang === 'ta' ? 'கிராமப்புற பொருளாதார எழுச்சி %' : 'Rural Economic Growth %'
        } else {
          // Project 3
          labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7']
          data = [12, 28, 45, 62, 78, 89, 96]
          label = lang === 'si' ? 'ග්‍රාමීය ආර්ථික පිබිදීම %' : lang === 'ta' ? 'கிராமப்புற பொருளாதாரம் %' : 'Rural Wealth Influx %'
        }

        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: label,
              data: data,
              borderColor: '#fbbf24',
              backgroundColor: 'rgba(251, 191, 36, 0.1)',
              fill: true,
              tension: 0.3
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#ffffff' } } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } },
              y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#ffffff' } }
            }
          }
        })
        activeCharts.push(chart)
      }

      // 4. Line Chart: capitalRetentionChart
      const retentionCanvas = document.getElementById('capitalRetentionChart')
      if (retentionCanvas) {
        const ctx = retentionCanvas.getContext('2d')
        let labels = ['Capability Map', 'Trust Score', 'Layer-B Cap', 'Emergency Loop', 'Eye of Dharma']
        if (lang === 'si') labels = ['හැකියා සිතියම', 'Trust Score', 'Layer-B වැට', 'සහන ණය', 'ධර්මයේ ඇස']
        if (lang === 'ta') labels = ['திறன் வரைபடம்', 'நம்பிக்கை மதிப்பெண்', 'Layer-B வேலி', 'அவசரகால கடன்', 'தர்மத்தின் கண்']

        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: lang === 'si' ? 'ග්‍රාමීය ප්‍රාග්ධන රඳවාගැනීම %' : (lang === 'ta' ? 'கிராமப்புற மூலதனத் தக்கவைப்பு %' : 'Rural Capital Retention %'),
              data: [25, 55, 80, 94, 99],
              borderColor: '#fbbf24',
              backgroundColor: 'rgba(251, 191, 36, 0.15)',
              fill: true,
              tension: 0.3
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#ffffff' } } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: '#ffffff' } },
              y: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: '#ffffff' }, min: 0, max: 100 }
            }
          }
        })
        activeCharts.push(chart)
      }

      // 5. Bar Chart: cribImpactChart
      const cribCanvas = document.getElementById('cribImpactChart')
      if (cribCanvas) {
        const ctx = cribCanvas.getContext('2d')
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: lang === 'si' ? ['ප්‍රාග්ධනය අහිමිවීම', 'ක්ෂුද්‍ර මූල්‍ය උගුල්', 'මානසික ආතතිය', 'ව්‍යවසායකත්වය විනාශවීම'] : 
                    lang === 'ta' ? ['மூலதன இழப்பு', 'நுண்நிதிப் பொறி', 'மன அழுத்தம்', 'தொழில்முனைவோர் அழிவு'] :
                    ['Capital Deprivation', 'Microfinance Trap', 'Mental Depression', 'Entrepreneurial Loss'],
            datasets: [{
              label: lang === 'si' ? 'වත්මන් CRIB ක්‍රමය' : lang === 'ta' ? 'தற்போதைய CRIB முறை' : 'Current CRIB System',
              data: [98, 92, 96, 88],
              backgroundColor: 'rgba(248, 113, 113, 0.7)',
              borderColor: '#f87171',
              borderWidth: 1
            }, {
              label: 'Three-Way Vision (White-mapping)',
              data: [5, 4, 8, 2],
              backgroundColor: 'rgba(251, 191, 36, 0.7)',
              borderColor: '#fbbf24',
              borderWidth: 1
            }]
          },
          options: { 
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#ffffff', font: { size: 11 } } } },
            scales: { 
              x: { grid: { display: false }, ticks: { color: '#ffffff', font: { size: 10 } } },
              y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#ffffff' } }
            }
          }
        })
        activeCharts.push(chart)
      }
    }

    const timer = setTimeout(initCharts, 120)

    return () => {
      clearTimeout(timer)
      activeCharts.forEach(c => c.destroy())
    }
  }, [activeProjectId, activeSlideIndex, lang])

  // Slide Deck Navigation handlers
  const handlePrev = () => {
    setActiveSlideIndex(prev => (prev === 0 ? currentLangSlides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveSlideIndex(prev => (prev === currentLangSlides.length - 1 ? 0 : prev + 1))
  }

  // Filter local structured tables (Projects 4 & 5)
  const getFilteredTable = (tableData) => {
    if (!tableData) return []
    if (!tableSearchQuery) return tableData
    return tableData.filter(row => 
      row.some(cell => cell.toLowerCase().includes(tableSearchQuery.toLowerCase()))
    )
  }

  return (
    <div className="min-h-screen flex flex-col text-white" style={{
      backgroundColor: '#020617',
      backgroundImage: 'linear-gradient(rgba(2, 6, 23, 0.96), rgba(2, 6, 23, 0.99)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '80px'
    }}>
      <style>{`
        /* Custom scoped styles to ensure legacy and modern layout compatibilities */
        .layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 1.5rem;
        }
        @media(min-width: 768px) {
          .layout-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        .chart-wrapper {
          min-height: 280px;
          height: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px border rgba(255, 255, 255, 0.05);
          border-radius: 1.25rem;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .styled-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }
        .styled-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1rem;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #cbd5e1;
        }
        .styled-list li::before {
          content: '✓';
          position: absolute;
          left: 0.25rem;
          top: 0.15rem;
          color: #fbbf24;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .quote-box {
          border-left: 4px solid #fbbf24;
          background: rgba(251, 191, 36, 0.05);
          padding: 1.25rem;
          border-radius: 0 1rem 1rem 0;
          font-style: italic;
          color: #f3f4f6;
          margin: 1.5rem 0;
          line-height: 1.6;
        }
        .table-filter {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 0.75rem;
          margin-bottom: 1.25rem;
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s ease;
        }
        .table-filter:focus {
          border-color: #fbbf24;
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.2);
        }
        #contentDataTable, .data-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin: 1rem 0;
          background: rgba(15, 23, 42, 0.4);
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        #contentDataTable th, #contentDataTable td, .data-table th, .data-table td {
          padding: 1rem;
          text-align: left;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        #contentDataTable th, .data-table th {
          background: rgba(255, 255, 255, 0.05);
          color: #fbbf24;
          font-weight: bold;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        #contentDataTable td, .data-table td {
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          color: #e2e8f0;
        }
        #contentDataTable tr:last-child td, .data-table tr:last-child td {
          border-bottom: none;
        }
        #contentDataTable tr:hover td, .data-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }
        .framework-badge {
          display: inline-block;
          width: 1.75rem;
          height: 1.75rem;
          line-height: 1.75rem;
          text-align: center;
          background: #fbbf24;
          color: #020617;
          border-radius: 0.5rem;
          font-weight: 900;
          margin-right: 0.75rem;
          vertical-align: middle;
        }
      `}</style>

      <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />

      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-6 py-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Back button and Project Selector (Span 4) */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <button
            onClick={() => setCurrentPage('main')}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all font-semibold"
          >
            {staticLabels.backBtn}
          </button>

          <div className="p-6 rounded-[2rem] bg-slate-900/60 backdrop-blur-xl border border-white/5 shadow-2xl">
            <h2 className="text-xl font-bold text-gradient mb-6 pb-3 border-b border-white/10 flex items-center justify-between">
              <span>{staticLabels.allProjects}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-extrabold uppercase tracking-wider">
                Thun Kal
              </span>
            </h2>

            <div className="flex flex-col gap-4">
              {projectsList.map((p, idx) => {
                const isActive = p.id === activeProjectId
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveProjectId(p.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-amber-500/10 border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.15)]' 
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isActive ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(245,158,11,0.4)]' : 'bg-slate-800 text-gray-400'
                      }`}>
                        0{idx + 1}
                      </span>
                      <span className={`text-[10px] font-extrabold tracking-widest uppercase ${
                        isActive ? 'text-amber-400' : 'text-gray-500'
                      }`}>
                        National Diagnostic
                      </span>
                    </div>
                    <p className={`text-sm font-bold leading-snug mt-2 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}>
                      {p.name[lang] || p.name['si']}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </aside>

        {/* Right Side: Active Project Slide Viewer (Span 8) */}
        <main className="lg:col-span-8 flex flex-col">
          <div className="flex-1 rounded-[2.5rem] bg-slate-950/80 border border-white/10 overflow-hidden shadow-2xl flex flex-col relative"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.93), rgba(15, 23, 42, 0.97)), url(${slide.bgImage || ''})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Header section inside card */}
            <div className="p-6 md:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-900/60 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-[0.2em] mb-1">
                  {project.headerText[lang] ? 'Active Roadmap Slide Deck' : 'Three-Way Vision Diagnostic'}
                </span>
                <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                  {project.headerText[lang] || project.headerText['si']}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 self-start sm:self-center px-4 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-xs font-bold text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                {project.pageLabel[lang]} {activeSlideIndex + 1} / {currentLangSlides.length}
              </div>
            </div>

            {/* Slide Body */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
              
              {/* Layout Type 1: Plain HTML string (used for gatalu1 - gatalu3) */}
              {project.layoutType !== 'structured' ? (
                <div className="animate-fade">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 text-white pb-3 border-b border-white/5 flex items-center" 
                    dangerouslySetInnerHTML={{ __html: slide.title }} 
                  />
                  <div className="text-sm md:text-base text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: slide.bodyHtml }} 
                  />
                </div>
              ) : (
                /* Layout Type 2: Structured Slide Layout (used for gatalu4 - gatalu5) */
                <div className="animate-fade space-y-6">
                  {/* Top Header Badge Row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                      {slide.letter}
                    </span>
                    <span className="px-4 py-1.5 rounded-xl bg-slate-800 border border-white/10 text-xs font-extrabold uppercase text-amber-400 tracking-wider">
                      {slide.meta}
                    </span>
                  </div>

                  {/* Main Header */}
                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug">
                      {slide.title}
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed italic">
                      {slide.desc}
                    </p>
                  </div>

                  {/* Matrix List Grid */}
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
                      {staticLabels.matrixTitle}
                    </h4>
                    <ul className="styled-list my-0">
                      {slide.matrix && slide.matrix.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buddhist Wisdom Box */}
                  {slide.buddhist && (
                    <div className="quote-box">
                      <div className="flex items-center gap-2 mb-2 not-italic">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span className="text-[10px] font-extrabold tracking-widest uppercase text-amber-400">
                          {staticLabels.buddhistTitle}
                        </span>
                      </div>
                      "{slide.buddhist}"
                    </div>
                  )}

                  {/* Table Comparison Section */}
                  {slide.table && (
                    <div className="space-y-4">
                      <input
                        type="text"
                        className="table-filter"
                        placeholder={staticLabels.searchPlaceholder}
                        value={tableSearchQuery}
                        onChange={(e) => setTableSearchQuery(e.target.value)}
                      />

                      <div className="overflow-x-auto">
                        <table className="data-table">
                          <thead>
                            <tr>
                              <th>{slide.th1}</th>
                              <th>{slide.th2}</th>
                              <th>{slide.th3}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {getFilteredTable(slide.table).map((row, rIdx) => (
                              <tr key={rIdx}>
                                <td><strong>{row[0]}</strong></td>
                                <td><span className="text-red-400 font-semibold">{row[1]}</span></td>
                                <td><span className="text-emerald-400 font-semibold">{row[2]}</span></td>
                              </tr>
                            ))}
                            {getFilteredTable(slide.table).length === 0 && (
                              <tr>
                                <td colSpan="3" className="text-center text-gray-500 py-6">
                                  No matching records found.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Slide Navigation footer controls */}
            <div className="p-6 border-t border-white/10 flex items-center justify-between bg-slate-900/60 backdrop-blur-md">
              <button
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 text-gray-300 transition-all"
              >
                {staticLabels.prevBtn}
              </button>

              <div className="text-xs font-semibold text-gray-400 tracking-wider">
                {staticLabels.pageLabel} {activeSlideIndex + 1} / {currentLangSlides.length}
              </div>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
              >
                {staticLabels.nextBtn}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProjectsHub

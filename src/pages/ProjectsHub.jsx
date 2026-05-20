import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import {
  projectsList,
  projectsHubMeta,
  sectorTabs,
  strategicMatrix,
  issueProjectLinks,
  getDrawerAbcd
} from '../data/projectsData'
import Chart from 'chart.js/auto'

function resolveLinkedAbcd(issue, lang) {
  const projectId = issueProjectLinks[String(issue.index)]
  if (!projectId) return getDrawerAbcd(issue)

  const proj = projectsList.find((p) => p.id === projectId)
  const slides = proj?.slides?.[lang] || proj?.slides?.si
  if (!slides?.length) return getDrawerAbcd(issue)

  const slideA = slides.find((s) => s.letter === 'A') || slides[0]
  const slideB = slides.find((s) => s.letter === 'B')
  const slideC = slides.find((s) => s.letter === 'C')
  const slideD = slides.find((s) => s.letter === 'D')

  const joinMatrix = (s) => (s?.matrix ? s.matrix.join('\n\n') : s?.content || s?.desc || '')

  if (proj.layoutType === 'structured' || proj.layoutType === 'analytics') {
    return {
      problem: slideA.title || issue.text,
      causes: joinMatrix(slideB) || getDrawerAbcd(issue).causes,
      benefits: joinMatrix(slideC) || getDrawerAbcd(issue).benefits,
      solutions: joinMatrix(slideD) || getDrawerAbcd(issue).solutions
    }
  }

  return getDrawerAbcd(issue)
}

function ProjectsHub({ lang, setLang, setCurrentPage }) {
  const [hubView, setHubView] = useState('matrix')
  const [activeSector, setActiveSector] = useState('eco')
  const [drawerIssue, setDrawerIssue] = useState(null)
  const [activeProjectId, setActiveProjectId] = useState('gatalu1')
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [tableSearchQuery, setTableSearchQuery] = useState('')

  const hubMeta = projectsHubMeta[lang] || projectsHubMeta.si
  const matrixData = strategicMatrix[lang] || strategicMatrix.si
  const activeSectorData = matrixData[activeSector]
  const sectorTabList = sectorTabs[lang] || sectorTabs.si

  // Find the selected project and its translated labels
  const project = projectsList.find(p => p.id === activeProjectId) || projectsList[0]
  const currentLangSlides = project.slides[lang] || project.slides['si']
  const slide = currentLangSlides[activeSlideIndex] || currentLangSlides[0]

  const openSolutionDrawer = (issue, levelKey) => {
    const linkedProject = issueProjectLinks[String(issue.index)]
    setDrawerIssue({
      issue,
      levelKey,
      linkedProject,
      abcd: resolveLinkedAbcd(issue, lang)
    })
  }

  const openLinkedReport = () => {
    if (!drawerIssue?.linkedProject) return
    setActiveProjectId(drawerIssue.linkedProject)
    setActiveSlideIndex(0)
    setDrawerIssue(null)
    setHubView('reports')
  }

  // Translate basic UI labels (ABCD reports view)
  const staticLabels = {
    si: {
      backBtn: hubMeta.backBtn,
      allProjects: hubMeta.allProjects,
      prevBtn: '← පසුපසට',
      nextBtn: 'ඉදිරියට →',
      buddhistTitle: 'බුදු දහමේ ආර්ථික ප්‍රඥාව',
      matrixTitle: 'පද්ධතිමය විශ්ලේෂණ ලක්ෂණ',
      chartTitle: 'තත්කාලීන පද්ධතිමය ප්‍රක්ෂේපණ ප්‍රස්තාරය',
      searchPlaceholder: 'සොයන්න...',
      noResults: 'ගැලපෙන දත්ත නොමැත.'
    },
    en: {
      backBtn: projectsHubMeta.en.backBtn,
      allProjects: projectsHubMeta.en.allProjects,
      prevBtn: '← Prev',
      nextBtn: 'Next →',
      buddhistTitle: 'Economic Wisdom in Buddhism',
      matrixTitle: 'Systemic Analysis Matrix',
      chartTitle: 'Systemic Analytical Projection Chart',
      searchPlaceholder: 'Search...',
      noResults: 'No matching records found.'
    },
    ta: {
      backBtn: projectsHubMeta.ta.backBtn,
      allProjects: projectsHubMeta.ta.allProjects,
      prevBtn: '← முந்தைய',
      nextBtn: 'அடுத்த →',
      buddhistTitle: 'பௌத்த பொருளாதார ஞானம்',
      matrixTitle: 'அமைப்பு பகுப்பாய்வு மேட்ரிக்ஸ்',
      chartTitle: 'பகுப்பாய்வு முன்கணிப்பு விளக்கப்படம்',
      searchPlaceholder: 'தேடுங்கள்...',
      noResults: 'பொருந்தும் பதிவுகள் இல்லை.'
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
    if (hubView !== 'reports') return undefined

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

      // 5. Bar Chart: analyticsChartMatrix (gatalu7)
      const analyticsCanvas = document.getElementById('analyticsChartMatrix')
      if (analyticsCanvas && slide.chartData) {
        const ctx = analyticsCanvas.getContext('2d')
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: slide.chartCategories,
            datasets: [{
              label: slide.chartLabel,
              data: slide.chartData,
              backgroundColor: ['rgba(248, 113, 113, 0.75)', 'rgba(52, 211, 153, 0.75)'],
              borderColor: ['#f87171', '#34d399'],
              borderWidth: 2,
              borderRadius: 6,
              barThickness: 50
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#ffffff', font: { weight: '600' } } } },
            scales: {
              y: { beginAtZero: true, max: 100, ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.05)' } },
              x: { ticks: { color: '#cbd5e1' }, grid: { display: false } }
            }
          }
        })
        activeCharts.push(chart)
      }

      // 6. Bar Chart: cribImpactChart
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
  }, [activeProjectId, activeSlideIndex, lang, hubView])

  // Slide Deck Navigation handlers
  const handlePrev = () => {
    setActiveSlideIndex(prev => (prev === 0 ? currentLangSlides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveSlideIndex(prev => (prev === currentLangSlides.length - 1 ? 0 : prev + 1))
  }

  const getSlideTableData = () => slide.table || slide.tableRows || []

  const getFilteredTable = (tableData) => {
    if (!tableData) return []
    if (!tableSearchQuery) return tableData
    return tableData.filter(row =>
      row.some(cell => cell.toLowerCase().includes(tableSearchQuery.toLowerCase()))
    )
  }

  const defaultBg = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80'
  const slideBg = slide.bgImage || defaultBg

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

      {hubView === 'matrix' ? (
        <div
          className="flex-1 flex flex-col overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #020d14 0%, #041916 50%, #08241b 100%)' }}
        >
          <header className="shrink-0 flex flex-wrap items-center justify-between gap-4 px-6 md:px-10 py-4 border-b border-white/[0.06] bg-[#02090d]/90 backdrop-blur-xl">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 rounded-full border-2 border-amber-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                  <path d="M10 50C10 50 28 25 50 25C72 25 90 50 90 50C90 50 72 75 50 75C28 75 10 50 10 50Z" stroke="#fbbf24" strokeWidth="8" />
                  <circle cx="50" cy="50" r="14" fill="#fbbf24" />
                </svg>
              </div>
              <div className="min-w-0">
                <h1 className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                  {hubMeta.pageTitle}
                </h1>
                <p className="text-xs md:text-sm text-emerald-300/90 font-medium mt-1 max-w-3xl leading-relaxed hidden sm:block">
                  {hubMeta.pageSubtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setHubView('reports')}
                className="px-4 py-2 rounded-full text-xs font-bold border border-amber-500/30 text-amber-300 hover:bg-amber-500/10"
              >
                {hubMeta.viewReports}
              </button>
              <span className="text-xs font-bold text-amber-400 border border-amber-500/20 px-4 py-2 rounded-full bg-amber-500/[0.03] hidden md:inline">
                {hubMeta.systemTag}
              </span>
            </div>
          </header>

          <div className="flex flex-1 min-h-0 flex-col lg:flex-row overflow-hidden">
            <aside className="lg:w-[340px] shrink-0 border-b lg:border-b-0 lg:border-r border-amber-500/15 bg-[#020c0a]/60 p-4 overflow-y-auto max-h-[40vh] lg:max-h-none">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500 font-bold px-2 mb-3">
                {hubMeta.sidebarSectors}
              </p>
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {sectorTabList.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveSector(tab.id)}
                    className={`text-left px-4 py-3 rounded-xl border transition-all min-w-[200px] lg:min-w-0 ${
                      activeSector === tab.id
                        ? 'bg-amber-500/10 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(250,204,21,0.08)]'
                        : 'border-white/[0.04] text-slate-300 hover:border-amber-500/25 hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className="block font-semibold text-sm">{tab.label}</span>
                    <span className="block text-[0.7rem] text-slate-500 mt-0.5">{tab.enTitle}</span>
                  </button>
                ))}
              </div>
            </aside>

            <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#02090d]/20">
              {activeSectorData && (
                <>
                  <div className="mb-8 pb-5 border-b border-white/[0.08]">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white">{activeSectorData.name}</h2>
                    <p className="text-sm text-emerald-300/80 mt-2">{activeSectorData.desc}</p>
                  </div>

                  {activeSectorData.levels.map((level) => {
                    if (!level.issues?.length) return null
                    const dotClass =
                      level.key === 'citizen'
                        ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
                        : level.key === 'state'
                          ? 'bg-amber-400 shadow-[0_0_8px_#fbbf24]'
                          : 'bg-red-400 shadow-[0_0_8px_#f87171]'
                    const titleClass =
                      level.key === 'citizen'
                        ? 'text-emerald-400'
                        : level.key === 'state'
                          ? 'text-amber-400'
                          : 'text-red-400'

                    return (
                      <div key={level.key} className="mb-9">
                        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.04]">
                          <span className={`w-2 h-2 rounded-full ${dotClass}`} />
                          <span className={`text-sm font-bold uppercase tracking-wider ${titleClass}`}>
                            {level.name}
                          </span>
                        </div>
                        <div className="space-y-3">
                          {level.issues.map((issue) => (
                            <div
                              key={issue.index}
                              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-amber-500/15 bg-[#021e16]/70 hover:border-emerald-500/30 hover:translate-x-1 transition-all"
                            >
                              <div className="flex gap-4 items-start">
                                <span className="text-xs font-bold text-white/30 bg-white/[0.03] border border-white/[0.05] px-2 py-1 rounded-md min-w-[52px] text-center">
                                  #{String(issue.index).padStart(3, '0')}
                                </span>
                                <p className="text-sm md:text-base text-slate-200 leading-relaxed">{issue.text}</p>
                              </div>
                              <button
                                type="button"
                                onClick={() => openSolutionDrawer(issue, level.key)}
                                className="shrink-0 px-4 py-2 rounded-lg border border-amber-400 text-amber-400 text-xs font-bold hover:bg-gradient-to-r hover:from-yellow-200 hover:via-amber-400 hover:to-yellow-600 hover:text-[#02090d] hover:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all"
                              >
                                {hubMeta.solutionBtn}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </>
              )}
            </main>
          </div>

          <footer className="shrink-0 text-center py-3 text-xs text-white/30 border-t border-white/[0.05] bg-[#020608]/90 tracking-wide">
            {hubMeta.footer}
          </footer>

          <div
            className={`fixed inset-0 z-[200] bg-[#02090d]/75 backdrop-blur-md transition-opacity ${
              drawerIssue ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setDrawerIssue(null)}
            aria-hidden={!drawerIssue}
          />
          <aside
            className={`fixed top-0 right-0 z-[201] h-full w-full max-w-[520px] bg-gradient-to-b from-[#041412] to-[#020b0d] border-l border-amber-400 shadow-[-30px_0_60px_rgba(0,0,0,0.8)] p-8 flex flex-col transition-[right] duration-300 ${
              drawerIssue ? 'right-0' : '-right-full'
            }`}
          >
            {drawerIssue && (
              <>
                <div className="flex justify-between items-start border-b border-white/[0.08] pb-5">
                  <div>
                    <span className="text-xs font-bold text-amber-400 tracking-widest">
                      ISSUE MATRIX #{String(drawerIssue.issue.index).padStart(3, '0')} [
                      {drawerIssue.levelKey.toUpperCase()} LEVEL]
                    </span>
                    <h4 className="text-lg font-bold text-white mt-2 leading-snug">{drawerIssue.issue.text}</h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDrawerIssue(null)}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 flex items-center justify-center font-bold"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto mt-6 space-y-4 pr-2">
                  {(['problem', 'causes', 'benefits', 'solutions']).map((key) => (
                    <div
                      key={key}
                      className={`pl-4 py-4 rounded-r-xl border-l-[3px] ${
                        key === 'solutions'
                          ? 'border-emerald-400 bg-emerald-500/[0.02]'
                          : 'border-amber-400 bg-white/[0.02]'
                      }`}
                    >
                      <div
                        className={`text-xs font-extrabold uppercase tracking-wider mb-2 ${
                          key === 'solutions' ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {hubMeta.drawerLabels[key]}
                      </div>
                      <p className={`text-sm leading-relaxed ${key === 'solutions' ? 'text-emerald-300 font-medium' : 'text-slate-300'}`}>
                        {drawerIssue.abcd[key]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/[0.05] space-y-3">
                  {drawerIssue.linkedProject && (
                    <button
                      type="button"
                      onClick={openLinkedReport}
                      className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400"
                    >
                      {hubMeta.openReport}
                    </button>
                  )}
                  <p className="text-center text-[0.7rem] text-white/30 tracking-widest">
                    THREE-WAY VISION SYSTEM LOGIC ENGINE • © 2026
                  </p>
                </div>
              </>
            )}
          </aside>
        </div>
      ) : (
      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-6 py-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Back button and Project Selector (Span 4) */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <button
            onClick={() => setCurrentPage('main')}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all font-semibold"
          >
            {staticLabels.backBtn}
          </button>

          <button
            type="button"
            onClick={() => setHubView('matrix')}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 transition-all font-semibold text-sm"
          >
            ← {hubMeta.viewMatrix}
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
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.93), rgba(15, 23, 42, 0.97)), url(${slideBg})`,
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
              
              {/* Layout Type 1: Plain HTML slides (gatalu1 - gatalu3) */}
              {!project.layoutType || project.layoutType === 'legacy' ? (
                <div className="animate-fade">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 text-white pb-3 border-b border-white/5 flex items-center" 
                    dangerouslySetInnerHTML={{ __html: slide.title }} 
                  />
                  <div className="text-sm md:text-base text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: slide.bodyHtml }} 
                  />
                </div>
              ) : project.layoutType === 'analytics' ? (
                /* Layout Type 3: Analytics slides with chart (gatalu6-style matrix + gatalu7) */
                <div className="animate-fade space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                      {slide.letter}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug">
                      {slide.title}
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed">
                      {slide.content}
                    </p>
                  </div>

                  {slide.bullets && (
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
                      <ul className="styled-list my-0">
                        {slide.bullets.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {slide.buddhistText && (
                    <div className="quote-box">
                      <div className="flex items-center gap-2 mb-2 not-italic">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span className="text-[10px] font-extrabold tracking-widest uppercase text-amber-400">
                          {slide.buddhistTitle || staticLabels.buddhistTitle}
                        </span>
                      </div>
                      "{slide.buddhistText}"
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {slide.tableRows && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-amber-400">{slide.tableTitle}</h4>
                        <input
                          type="text"
                          className="table-filter"
                          placeholder={project.searchPlaceholder?.[lang] || staticLabels.searchPlaceholder}
                          value={tableSearchQuery}
                          onChange={(e) => setTableSearchQuery(e.target.value)}
                        />
                        <div className="overflow-x-auto">
                          <table className="data-table">
                            <thead>
                              <tr>
                                {(slide.tableHeaders || []).map((h, i) => (
                                  <th key={i}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {getFilteredTable(slide.tableRows).map((row, rIdx) => (
                                <tr key={rIdx}>
                                  <td><strong>{row[0]}</strong></td>
                                  <td><span className="text-red-400 font-semibold">{row[1]}</span></td>
                                  <td><span className="text-emerald-400 font-semibold">{row[2]}</span></td>
                                </tr>
                              ))}
                              {getFilteredTable(slide.tableRows).length === 0 && (
                                <tr>
                                  <td colSpan="3" className="text-center text-gray-500 py-6">
                                    {staticLabels.noResults}
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {slide.chartData && (
                      <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
                          {staticLabels.chartTitle}
                        </h4>
                        <div className="chart-wrapper" style={{ minHeight: 260 }}>
                          <canvas id="analyticsChartMatrix"></canvas>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Layout Type 2: Structured Slide Layout (gatalu4 - gatalu6) */
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
                            {getFilteredTable(getSlideTableData()).map((row, rIdx) => (
                              <tr key={rIdx}>
                                <td><strong>{row[0]}</strong></td>
                                <td><span className="text-red-400 font-semibold">{row[1]}</span></td>
                                <td><span className="text-emerald-400 font-semibold">{row[2]}</span></td>
                              </tr>
                            ))}
                            {getFilteredTable(getSlideTableData()).length === 0 && (
                              <tr>
                                <td colSpan="3" className="text-center text-gray-500 py-6">
                                  {staticLabels.noResults}
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
                {project.pageLabel[lang] || project.pageLabel['si']} {activeSlideIndex + 1} / {currentLangSlides.length}
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
      )}
    </div>
  )
}

export default ProjectsHub

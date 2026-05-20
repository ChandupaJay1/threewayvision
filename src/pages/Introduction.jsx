import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { introductionContent, introductionNav } from '../data/introductionData'
import { introductionChapters } from '../data/introductionChapters'

const abcdColors = {
  a: 'border-t-red-500',
  b: 'border-t-amber-500',
  c: 'border-t-emerald-500',
  d: 'border-t-blue-500'
}

const abcdTitleColors = {
  a: 'text-red-400',
  b: 'text-amber-400',
  c: 'text-emerald-400',
  d: 'text-blue-400'
}

function renderBlock(block, idx) {
  switch (block.type) {
    case 'h3':
      return (
        <h3 key={idx} className="text-amber-300/90 mt-8 mb-4 text-xl md:text-2xl font-semibold">
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p key={idx} className="mb-5 text-base md:text-lg text-justify text-slate-300 leading-relaxed font-light">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={idx} className="space-y-3 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="pl-6 relative text-base md:text-lg text-slate-300 leading-relaxed">
              <span className="absolute left-0 text-amber-400 text-sm">◆</span>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'center':
      return (
        <p key={idx} className="text-center font-semibold text-slate-200 my-6 text-base md:text-lg">
          {block.text}
        </p>
      )
    case 'pillars':
      return (
        <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {block.items.map((pillar, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6"
            >
              <h5 className="text-white text-lg font-semibold mb-2 border-l-[3px] border-amber-500 pl-3">
                {pillar.title}
              </h5>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>
      )
    case 'philosophy':
      return (
        <div
          key={idx}
          className="mt-8 p-8 md:p-10 rounded-2xl text-center border border-amber-500/30 bg-gradient-to-br from-indigo-950/80 to-slate-900/80 shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
        >
          <p className="italic text-lg md:text-2xl text-amber-200/90 leading-relaxed mb-6 tracking-wide">
            {block.stanza}
          </p>
          <p className="font-bold text-amber-400 text-sm md:text-base tracking-wider">{block.attribution}</p>
        </div>
      )
    default:
      return null
  }
}

function Introduction({ lang, setLang, setCurrentPage }) {
  const t = introductionContent[lang] || introductionContent.si
  const nav = introductionNav[lang] || introductionNav.si
  const chapters = introductionChapters[lang] || introductionChapters.si
  const [activeId, setActiveId] = useState('intro')

  useEffect(() => {
    const sectionIds = ['intro', ...chapters.map((c) => c.id)]
    const onScroll = () => {
      let current = 'intro'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 180) current = id
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [chapters])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#090d16',
        backgroundImage:
          'radial-gradient(circle at 50% 0%, #1e293b 0%, #090d16 70%)',
        paddingTop: '70px'
      }}
    >
      <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />

      <div className="flex flex-1 flex-col lg:flex-row">
        <aside className="lg:w-80 shrink-0 lg:fixed lg:left-0 lg:top-[70px] lg:bottom-0 lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-amber-500/15 bg-gradient-to-b from-slate-900 to-slate-950 z-40">
          <div className="p-6 text-center border-b border-white/5">
            <h3 className="text-xl text-amber-400 font-bold tracking-wide drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              {t.title}
            </h3>
            <span className="text-xs text-slate-500 uppercase tracking-[0.2em]">Universal Vision</span>
          </div>
          <nav className="p-4 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`whitespace-nowrap lg:whitespace-normal text-left px-4 py-3 rounded-lg text-sm transition-all border ${
                  activeId === item.id
                    ? 'bg-amber-500/15 text-white border-l-4 border-l-amber-500 border-amber-500/20'
                    : 'text-slate-400 border-transparent hover:bg-white/[0.04] hover:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 lg:ml-80 pb-16">
          <header
            id="intro"
            className="scroll-mt-24 px-6 md:px-12 pt-12 pb-10 text-center border-b border-amber-500/15 relative"
          >
            <span className="inline-block px-5 py-2 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 border border-amber-500/50 rounded-full bg-amber-500/10">
              {t.heroBadge}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              {t.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-amber-200/90 font-normal mb-8">{t.subtitle}</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed font-light">
              {t.metaIntro}
            </p>
          </header>

          <div className="max-w-5xl mx-auto px-4 md:px-10 py-10 space-y-10">
            <section className="scroll-mt-24 p-8 md:p-10 rounded-3xl backdrop-blur-md bg-slate-900/50 border border-white/[0.08] shadow-xl relative overflow-hidden">
              <span className="absolute top-0 left-0 w-1.5 h-full bg-amber-500 rounded-l-3xl" />
              <h2 className="text-2xl md:text-3xl text-white mb-2 font-semibold flex flex-wrap items-center gap-3">
                <span className="text-amber-400 text-sm uppercase tracking-wider">{t.frameworkLabel}</span>
                <span>{t.section1Title}</span>
              </h2>
              <p className="text-slate-300 mb-8 mt-4 leading-relaxed">{t.section1Desc}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {t.abcd.map((item) => (
                  <div
                    key={item.key}
                    className={`bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 border-t-4 ${abcdColors[item.key]} hover:bg-white/[0.04] transition-colors`}
                  >
                    <h4 className={`text-lg font-semibold mb-2 ${abcdTitleColors[item.key]}`}>
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-amber-300/90 text-xl font-semibold mb-4">{t.section2Title}</h3>
              <p className="text-slate-300 mb-4">{t.section2Desc}</p>
              <ul className="space-y-3 mb-10">
                {t.s2Items.map((item, i) => (
                  <li key={i} className="pl-6 relative text-slate-300 leading-relaxed">
                    <span className="absolute left-0 text-amber-400">◆</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-amber-300/90 text-xl font-semibold mb-4">{t.section3Title}</h3>
              <ul className="space-y-3 mb-10">
                {t.s3Items.map((item, i) => (
                  <li key={i} className="pl-6 relative text-slate-300 leading-relaxed">
                    <span className="absolute left-0 text-amber-400">◆</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-amber-300/90 text-xl font-semibold mb-4">{t.section4Title}</h3>
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 p-5 rounded-2xl bg-black/20 border border-white/[0.05]">
                {t.processSteps.map((step, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center gap-3 flex-1">
                    <div className="flex-1 w-full bg-slate-800/80 border border-amber-500/20 rounded-xl px-4 py-4 text-center text-sm md:text-base font-medium text-slate-200 shadow-md">
                      {step}
                    </div>
                    {i < t.processSteps.length - 1 && (
                      <span className="text-amber-400 text-xl font-bold hidden md:block">➔</span>
                    )}
                    {i < t.processSteps.length - 1 && (
                      <span className="text-amber-400 text-xl font-bold md:hidden">▼</span>
                    )}
                  </div>
                ))}
              </div>

              <h3 className="text-amber-300/90 text-xl font-semibold mt-10 mb-4">{t.section5Title}</h3>
              <ul className="space-y-3">
                {t.s5Items.map((item, i) => (
                  <li key={i} className="pl-6 relative text-slate-300 leading-relaxed">
                    <span className="absolute left-0 text-amber-400">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {chapters.map((chapter) => (
              <section
                key={chapter.id}
                id={chapter.id}
                className="scroll-mt-24 p-8 md:p-10 rounded-3xl backdrop-blur-md bg-slate-900/50 border border-white/[0.08] shadow-xl relative overflow-hidden"
              >
                <span className="absolute top-0 left-0 w-1.5 h-full bg-amber-500 rounded-l-3xl" />
                <h2 className="text-2xl md:text-3xl text-white mb-6 font-semibold border-b border-white/[0.06] pb-4">
                  <span className="block text-amber-400 text-sm uppercase tracking-wider mb-2">
                    {chapter.label}
                  </span>
                  {chapter.title}
                </h2>
                {chapter.blocks.map((block, idx) => renderBlock(block, idx))}
              </section>
            ))}

            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => setCurrentPage('main')}
                className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-slate-400 border border-white/10 transition-colors"
              >
                {t.back}
              </button>
            </div>
          </div>

          <footer className="text-center py-10 px-6 border-t border-white/5 text-slate-500 text-sm font-semibold bg-slate-950">
            {t.footer}
          </footer>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Introduction

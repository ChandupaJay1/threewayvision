import { useState } from 'react'

const translations = {
  si: { brand: 'තුන් කල් දැක්ම', subBrand: 'THREE WAY VISION', lang: 'Language' },
  ta: { brand: 'துன் கல் தெக்ம', subBrand: 'THREE WAY VISION', lang: 'மொழி' },
  en: { brand: 'Three Way Vision', subBrand: 'THREE WAY VISION', lang: 'Language' }
}

function Navbar({ lang, setLang, setCurrentPage }) {
  const [showLangMenu, setShowLangMenu] = useState(false)

  const changeLanguage = (newLang) => {
    setLang(newLang)
    document.documentElement.lang = newLang
    setShowLangMenu(false)
  }

  return (
    <nav className="fixed w-full z-50 glass-nav flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => setCurrentPage('main')}>
          <span className="text-xl md:text-2xl font-bold text-gradient">{translations[lang].brand}</span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400/80 uppercase">{translations[lang].subBrand}</span>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="relative">
            <button onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all p-2 rounded-xl bg-white/5 border border-white/10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129">
                </path>
              </svg>
              <span className="hidden md:inline text-xs font-bold uppercase tracking-widest">{translations[lang].lang}</span>
            </button>
            {showLangMenu && (
              <div className="absolute right-0 top-full mt-2 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-xl min-w-[120px] overflow-hidden z-60 shadow-2xl">
                <button onClick={() => changeLanguage('si')} className="w-full px-5 py-2.5 text-left text-white text-sm hover:bg-blue-500/30 transition">සිංහල</button>
                <button onClick={() => changeLanguage('ta')} className="w-full px-5 py-2.5 text-left text-white text-sm hover:bg-blue-500/30 transition">தமிழ்</button>
                <button onClick={() => changeLanguage('en')} className="w-full px-5 py-2.5 text-left text-white text-sm hover:bg-blue-500/30 transition">English</button>
              </div>
            )}
          </div>

          <a href="https://wa.me/94772640842" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.897-5.335 11.9-11.894a11.83 11.83 0 00-3.486-8.413z" />
            </svg>
          </a>
          <a href="http://www.youtube.com/@Three-wayvision" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-red-500 transition-all transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

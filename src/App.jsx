import { useState } from 'react'
import Navbar from './components/Navbar'
import MainPage from './pages/MainPage'
import EconomyPage from './pages/EconomyPage'
import OnlineShop from './pages/OnlineShop'
import BusinessPlan from './pages/BusinessPlan'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('main')
  const [lang, setLang] = useState('si')

  return (
    <>
      {currentPage === 'onlineshop' ? (
        <OnlineShop lang={lang} setCurrentPage={setCurrentPage} setLang={setLang} />
      ) : currentPage === 'businessplan' ? (
        <BusinessPlan lang={lang} setCurrentPage={setCurrentPage} setLang={setLang} />
      ) : (
        <div className="universe-bg min-h-screen">
          <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
          {currentPage === 'main' && (
            <MainPage lang={lang} setCurrentPage={setCurrentPage} />
          )}
          {currentPage === 'economy' && (
            <EconomyPage lang={lang} setCurrentPage={setCurrentPage} setOnlineshopClick={() => setCurrentPage('onlineshop')} setBusinessplanClick={() => setCurrentPage('businessplan')} setJobopportunitiesClick={() => setCurrentPage('businessplan')} />
          )}
          <Footer />
        </div>
      )}
    </>
  )
}

export default App

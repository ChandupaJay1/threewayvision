import { useState } from 'react'
import Navbar from './components/Navbar'
import MainPage from './pages/MainPage'
import EconomyPage from './pages/EconomyPage'
import OnlineShop from './pages/OnlineShop'
import BusinessPlan from './pages/BusinessPlan'
import BenefitAnalysis from './pages/BenefitAnalysis'
import RootCause from './pages/RootCause'
import MasterPlan from './pages/MasterPlan'
import EconomicPlanning from './pages/EconomicPlanning'
import EconomicProblemAnalysis from './pages/EconomicProblemAnalysis'
import Introduction from './pages/Introduction'
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
      ) : currentPage === 'benefitanalysis' ? (
        <BenefitAnalysis lang={lang} setCurrentPage={setCurrentPage} setLang={setLang} />
      ) : currentPage === 'rootcause' ? (
        <RootCause lang={lang} setCurrentPage={setCurrentPage} setLang={setLang} />
      ) : currentPage === 'masterplan' ? (
        <MasterPlan lang={lang} setCurrentPage={setCurrentPage} setLang={setLang} />
      ) : currentPage === 'economicplanning' ? (
        <EconomicPlanning lang={lang} setCurrentPage={setCurrentPage} setLang={setLang} />
      ) : currentPage === 'economicproblemanalysis' ? (
        <EconomicProblemAnalysis lang={lang} setCurrentPage={setCurrentPage} setLang={setLang} />
      ) : currentPage === 'introduction' ? (
        <Introduction lang={lang} setCurrentPage={setCurrentPage} setLang={setLang} />
      ) : (
        <div className="universe-bg min-h-screen">
          <Navbar lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
          {currentPage === 'main' && (
            <MainPage lang={lang} setCurrentPage={setCurrentPage} setIntroductionClick={() => setCurrentPage('introduction')} />
          )}
          {currentPage === 'economy' && (
            <EconomyPage lang={lang} setCurrentPage={setCurrentPage} setOnlineshopClick={() => setCurrentPage('onlineshop')} setBusinessplanClick={() => setCurrentPage('businessplan')} setJobopportunitiesClick={() => setCurrentPage('masterplan')} setBenefitAnalysisClick={() => setCurrentPage('benefitanalysis')} setRootCauseClick={() => setCurrentPage('rootcause')} setEconomicPlanningClick={() => setCurrentPage('economicplanning')} setEconomicProblemAnalysisClick={() => setCurrentPage('economicproblemanalysis')} />
          )}
          <Footer />
        </div>
      )}
    </>
  )
}

export default App

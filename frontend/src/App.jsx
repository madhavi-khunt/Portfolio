import Header from './Components/Header'
import HeroSection from './Pages/HeroSection'
import StatsSection from './Pages/StatsSection'
import ProfileCard from './Pages/ProfileCard'
import './App.css'

function App() {

  return (
    <>
     <div className="container">
      <Header />
      <div className="content">
        <ProfileCard />
        <div>
          <HeroSection />
          <StatsSection />
          {/* <CTAButtons /> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default App

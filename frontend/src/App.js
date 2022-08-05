import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import LandingPage from "./Screens/LandingPage/LandingPage"

const App=()=>{
  return(
    <div className="App" style={{padding:"0px",margin:"0px"}}>
      <Header/>
      <main>
        <LandingPage/>
      </main>
      <Footer/>
    </div>
  )
}
export default App
import {Navbar,Welcome,Footer, Services, Transactions} from './components/index.js'


const App = () =>{
 
  return (
    <div className = "App">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
    </div>
    <Services/>
    <Transactions/>
    <Footer/>
    </div>
  )
}

export default App

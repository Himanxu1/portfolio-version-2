import { Outlet, useResolvedPath } from 'react-router-dom'
import './App.css'
import Info from './Components/Info'
import Footer from './Components/Footer'


function App() {
  
  return (
    <>
  
     <Info/>
     <Outlet/>
     <Footer/>

    </>
  )
}

export default App

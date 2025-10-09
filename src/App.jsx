import { useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './Pages/HomePage.jsx'
import RecipePage from './Pages/RecipePage.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Routes>
        <Route 
            path="/" 
            element= {<HomePage/>} 
        />
        <Route 
            path="/recipes" 
            element={<RecipePage/>} 
        />
      </Routes>
    <Footer />
    </>
  )
}

export default App

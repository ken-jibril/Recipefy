import { useState } from 'react'
import { Router, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './Pages/HomePage.jsx'
import RecipePage from './Pages/RecipePage.jsx'
import Footer from './components/Footer.jsx'
import RecipeDetails from './Pages/RecipeDetails.jsx'

function App() {

  const location = useLocation();
  const hideNavigation = location.pathname.startsWith("/recipe/")

  return (
    <div className='flex flex-col min-h-screen'>
      {!hideNavigation && <Navbar />}
    {/* <Navbar /> */}

    <main className="flex-grow">
      <Routes>
        <Route 
            path="/" 
            element= {<HomePage/>} 
        />
        <Route 
            path="/recipes" 
            element={<RecipePage/>} 
        />
        <Route
               path="/recipe/:id"
               element={<RecipeDetails />}
        />
      </Routes>
    </main>

    <Footer />
    </div>
  )
}

export default App

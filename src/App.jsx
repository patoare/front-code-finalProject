import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Login from './pages/Login'
import Trends from './pages/Trends'
import TherapistsPage from './pages/AllTherapists'
import NavBar from './components/NavBar'




function App() {
  

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<h2>home</h2>} />
        <Route path="/signup" element={< SignupPage />} />
        <Route path='/login' element={< Login />} />
        <Route path="/therapists" element={< TherapistsPage />} />
        <Route path="/trends" element={< Trends />} />
        <Route path="*" element={<h3>404 Page</h3>} />
        </Routes>
    </>
  )
}

export default App

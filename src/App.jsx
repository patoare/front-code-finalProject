import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Login from './pages/Login'
import Trends from './pages/Trends'
import Treatment from './pages/Treatment'
import TherapistsPage from './pages/AllTherapists'
import Therapist from './pages/Therapist'
import NewTreatmentPage from './pages/CreateTto'
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'
import ProfilePage from './pages/ProfilePage'
import AnonymusRoute from './components/AnonymusRoute'



function App() {
  

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<h2>home</h2>} />
        <Route path="/signup" element={<AnonymusRoute> <SignupPage /> </AnonymusRoute>} />
        <Route path='/login' element={<AnonymusRoute> <Login /> </AnonymusRoute>} />
        <Route path='/profile' element={< ProfilePage />} />
        <Route path='/profile/:id' element={< ProfilePage />} />
        <Route path="/treatments/new" element={<PrivateRoute> <NewTreatmentPage /> </PrivateRoute>} />
        <Route path="/therapists" element={<PrivateRoute> <TherapistsPage /> </PrivateRoute>} />
        <Route path="/trends" element={<PrivateRoute> <Trends /> </PrivateRoute>} />
        <Route path="/treatment/:id" element={ <Treatment />} />
        <Route path="/therapist/:id" element={ <Therapist />} />
        <Route path="*" element={<h3>404 Page</h3>} />
        </Routes>
    </>
  )
}

export default App

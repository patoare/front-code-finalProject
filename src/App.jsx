import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Login from './pages/Login'
import Trends from './pages/Trends'
import Treatment from './pages/Treatment'
import Comments from './pages/Comments'
import TherapistsPage from './pages/AllTherapists'
import Therapist from './pages/Therapist'
import NewTreatmentPage from './pages/CreateTto'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import ProfilePage from './pages/ProfilePage'
import AnonymusRoute from './components/AnonymusRoute'
import "./style/App.css";
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'


function App() {
  

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/signup" element={<AnonymusRoute> <SignupPage /> </AnonymusRoute>} />
        <Route path='/login' element={<AnonymusRoute> <Login /> </AnonymusRoute>} />
        <Route path='/profile/:id' element={< ProfilePage />} />
        <Route path='/comments' element={< Comments />} />
        <Route path='/comments/:id' element={< Comments />} />
        <Route path="/treatments/new" element={<PrivateRoute> <NewTreatmentPage /> </PrivateRoute>} />
        <Route path="/therapists" element={<PrivateRoute> <TherapistsPage /> </PrivateRoute>} />
        <Route path="/trends" element={<PrivateRoute> <Trends /> </PrivateRoute>} />
        <Route path="/treatment/:id" element={ <Treatment />} />
        <Route path="/therapist/:id" element={ <Therapist />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App

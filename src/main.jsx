import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider, { AuthContext } from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

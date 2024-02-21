import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Card from './Pages/Card'
import Home from './Pages/Home'
import Identity from './Pages/Identity'
import Settings from './Pages/Settings'
import Upgrade from './Pages/Upgrade'
import Benefits from './Pages/Benefits'
import Features from './Pages/Features'
import Pricing from './Pages/Pricing'
import { useContext } from 'react'
import { tokenAuthContext } from './ContextAPI/TokenAuth'



function App() {
  const { isAutherised, setIsAutherised } = useContext(tokenAuthContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />
        <Route path='/cards' element={isAutherised ? <Card /> : <Home />} />
        <Route path='/identities' element={isAutherised ? <Identity /> : <Home />} />
        <Route path='/settings' element={isAutherised ? <Settings /> : <Home />} />
        <Route path='/upgrade' element={isAutherised ? <Upgrade /> : <Home />} />
        <Route path='/benefits' element={<Benefits />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </>
  )
}

export default App

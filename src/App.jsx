import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Card from './Pages/Card'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Identity from './Pages/Identity'
import Settings from './Pages/Settings'
import Trash from './Pages/Trash'
import Upgrade from './Pages/Upgrade'
import Benefits from './Pages/Benefits'
import Features from './Pages/Features'
import Pricing from './Pages/Pricing'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/cards' element={<Card />} />
        <Route path='/identities' element={<Identity />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/trash' element={<Trash />} />
        <Route path='/upgrade' element={<Upgrade />} />
        <Route path='/benefits' element={<Benefits />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </>
  )
}

export default App

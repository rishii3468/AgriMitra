import React from 'react'
import {Route, Routes} from 'react-router'
import AgriConnect from './pages/HomePage'
import MarketPlace from './pages/MarketplacePage'
import PaymentPage from './pages/PaymentPage'
import SignUp from './pages/RegistrationPage'
import Login from './pages/LoginPage'
import ListCropForm from './pages/ListItemPage'
import ComingSoon from './pages/ComingSoon'
import AboutPage from './pages/AboutUs'
import KnowledgePage from './pages/KnowledgePage'
import Equipment from './pages/EquipmentsPage'

const App = () => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 -z-10 h-full w-full'>
        <Routes>
          <Route path="/" element={<AgriConnect />}/>
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/list-crop" element={<ListCropForm />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="*" element={<div className="text-center text-red-500">Page Not Found</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
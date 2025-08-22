import React from 'react'
import {Route, Routes} from 'react-router'
import AgriConnect from './pages/HomePage'
import MarketPlace from './pages/MarketplacePage'
import PaymentPage from './pages/PaymentPage'
import SignUp from './pages/RegistrationPage'
import Login from './pages/LoginPage'

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
          <Route path="*" element={<div className="text-center text-red-500">Page Not Found</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
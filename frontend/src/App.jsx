import React from 'react'
import {Route, Routes} from 'react-router'
import AgriConnect from './pages/HomePage'
import MarketPlace from './pages/MarketplacePage'
import PaymentPage from './pages/PaymentPage'

const App = () => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 -z-10 h-full w-full'>
        <Routes>
          <Route path="/" element={<AgriConnect />}/>
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
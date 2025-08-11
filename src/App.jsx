import React from 'react'
import Header from './Components/Header'
import ProductShow from './Components/ProductShow'
import ProductShow2 from './Components/ProductShow2'
import Faqs from './Components/Faqs'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <ProductShow/>
      <ProductShow2/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default App
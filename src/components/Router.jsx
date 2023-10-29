import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const Router = () => {
  return (
    <>

   
<Routes>

<Route path='/' element={<Main />}/>
<Route path='/header' element={<Header />}/>
<Route path='/footer' element={<Footer />}/>
</Routes>
    </>
  )
}

export default Router
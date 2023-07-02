import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPages from './pages/RegisterPages'
import LoginPages from './pages/LoginPages'
import Header from './components/shared/Header'
import CartPages from './pages/CartPages'
import { getCartThunk } from './store/slices/Cart.slice'
import PurchasesPages from './pages/PurchasesPages'
import Footer from './components/shared/Footer'




function App() {
 
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(getAllProductsThunk())
  dispatch(getCartThunk())
 }, [])
 

  return (
    <div className='app'>
      <Header/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id'  element={<ProductIdPage/>} />
        <Route path='/register' element={<RegisterPages/>} />
        <Route path='/login' element={<LoginPages/>} />

        
          <Route path='/cart' element={<CartPages/>} />
          <Route path='/purchases' element={<PurchasesPages/>} />
        

     </Routes>
     <Footer />
    </div>
  )
}

export default App

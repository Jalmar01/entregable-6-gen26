import { useSelector } from "react-redux"
import CartElement from "../components/cart/CartElement"
import usePurchases from "../hooks/usePurchases"
import '../components/cart/styles/CartElement.css'
import { useState } from "react"

const CartPages = () => {

const cart = useSelector(state =>state.cart)

const totalPrice = cart.reduce((acc, ccv) =>{
 const subTotal = ccv.quantity * ccv.product.price
 return acc + subTotal 
}, 0)

const {makePurchases} = usePurchases()

const handlePurchases = ()  => {
  makePurchases()
}

const [isClose, setIsClose] = useState(false)

const handleClose = () => {
  setIsClose(open)
}

  return (
    <section className="cart__modal">
      <div className="cart">
        <div onClick={handleClose} className={`cart__icon ${'open'}`}>
        <span></span>
        <span></span>
        <span></span>
        </div>
          <div className="minimalist__scroll">
            <h2 className="cartpages__title">My cart</h2>
              {
                cart.map(prod => (
                  <CartElement
                    key={prod.id}
                    prod={prod}
                  />
                ))
              }
           </div>
          <footer className="checkout__section">
            <div className="checkout__total"><span>Total:</span><span>{totalPrice}</span></div>
            <button className="checkout__btn" onClick={handlePurchases}>Buy Product</button>
          </footer>
      </div>
    </section>
  )
}

export default CartPages
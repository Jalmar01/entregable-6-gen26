import { useSelector } from "react-redux"

const CartPages = () => {

const cart = useSelector(state =>state.cart)

console.log(cart);


  return (
    <div>
      <h2>Cart</h2>
      <div>

      </div>
    </div>
  )
}

export default CartPages
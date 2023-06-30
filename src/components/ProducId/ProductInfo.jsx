import { useState } from "react";
import './styles/ProductInfo.css';
import { postCartThunk } from "../../store/slices/Cart.slice";
import {useDispatch} from "react-redux";


const ProductInfo = ({ product }) => {

const [quantity, setQuantity] = useState(1)

    const handlMinus = () => {
        if(quantity -1 >= 1)
        setQuantity( state => state-1)
    }


const handleAdd = () => setQuantity(state => state +1)

    const dispatch = useDispatch()
  
const handleAddToCart = () => {
   dispatch(postCartThunk(product, quantity)) 
}

  

  return (
    <article className="productinfo__info">
        <h3 className="productinfo__brand">{product?.brand}</h3>
        <h2 className="productinfo__title">{product?.title}</h2>
        <p className="productinfo__description">{product?.description}</p>
        <footer className="productinfo__footer">
            <ul className="productinfo__ul">
                <li className="productinfo__container-price">
                    <span className="productinfo__span">Price</span>
                    <span className="productinfo__price">${product?.price}</span>
                </li>
                <li className="productinfo__container-quantity">
                   <span className="productinfo__quantity-span">Quantity</span> 
                   <div className="productinfo__btn-quantity">
                     <div className="productinfo__minus"onClick={handlMinus}>-</div>
                     <div className="productinfo__quantity-value">{quantity}</div>
                     <div className="productinfo__btn-add"onClick={handleAdd }>+</div>
                   </div>
                </li>
            </ul>
            <button onClick={handleAddToCart} className="productinfo__btn-cart">Add to cart
                <i className='bx bx-cart'></i>
            </button>
        </footer>
    </article>
  )
}

export default ProductInfo
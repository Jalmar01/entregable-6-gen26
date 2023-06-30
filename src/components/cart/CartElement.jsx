import { deleteCartThunk } from "../../store/slices/Cart.slice"
import {useDispatch} from 'react-redux'
import './styles/CartElement.css'

const CartElement = ({prod}) => {

  const dispatch =  useDispatch()

const handleDelete = () => {
    dispatch(deleteCartThunk(prod.id))
}

  return (
    <article className="cartelement__container-article">
        <header className="cartelement__header">
            <img src={prod.product.images[0].url} alt="" />
        </header>
        <section className="cartelement__info">
            <h3 className="cartelement__info-title">{prod.product.title}</h3>
          <div className="container__btn-p">
                <p><span>{prod.quantity}</span> x <span>{prod.product.price}</span></p>
                <button className="cartelement__btn" onClick={handleDelete}>
                    <i className='bx bxs-trash'></i>
                </button>
          </div>
        </section>
        <footer className="container__footer">
            <span>Subtotal:</span> <span>{prod.quantity * prod.product.price}</span>
        </footer>
    </article>
  )
}

export default CartElement
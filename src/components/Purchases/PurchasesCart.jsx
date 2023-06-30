import './styles/PurchasesCart.css'

const PurchasesCart = ({ prod }) => {



  return (
    <article className="purchases__container">
       <div className='purchases__container-img'>
           <img className='purchases__img' src={prod.product.images[0].url} alt="" />
       </div>
        <div className='purchases__name'>
           {prod.product.title}
        </div>
        <div className='purchases__quantity'>
            {prod.quantity}
        </div>
        <div className='purchases__price'>
            {prod.product.price}
        </div>
    </article>
  )
}

export default PurchasesCart
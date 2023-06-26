import { useSelector } from "react-redux"
import CardProduct from "../components/home/CardProduct";


const Home = () => {

 const products = useSelector( states => states.products)


  return (
    <div >
        <h1>Home</h1>
        <div className="product__container-card">
            {
                products?.map(prod => (
                    <CardProduct
                        key={prod.id}
                        prod={prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Home
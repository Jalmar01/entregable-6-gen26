import { useEffect } from "react";
import usefetch from "../../hooks/usefetch";
import CardProduct from "../home/CardProduct";

const SimilarProducts = ({product}) => {

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
 const [productsByCategory, getProductByCategory ] = usefetch(baseUrl)

 useEffect(() => {
  if(product) {
   getProductByCategory(`/products?categoryId=${product.category.id}`)
  }
 }, [product])
 

  return (
    <div>
      <h2 className="similar__pruct-title">Similar product</h2>
      <div className="product__container-card">
      {
        productsByCategory?.map(prod => {
          if(product.id !== prod.id ) {
              return  (<CardProduct 
                key={prod.id}
                prod={prod}
              />)
          }
         
        })
      }
      </div>
    </div>
  )
}

export default SimilarProducts

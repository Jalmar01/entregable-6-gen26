import { useParams } from "react-router-dom"
import usefetch from "../hooks/usefetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProducId/ProductInfo"
import SimilarProducts from "../components/ProducId/SimilarProducts"

const ProductIdPage = () => {

const {id} = useParams()
const baseUrl ='https://e-commerce-api-v2.academlo.tech/api/v1'
const [ product, getProductById ] = usefetch(baseUrl)

useEffect(() => {
  getProductById(`/products/${id}`)
}, [id])

  return (
    <div>
        <ProductInfo
          product={product}
        />
        <SimilarProducts
          product={product}
        />
    </div>
  )
}

export default ProductIdPage
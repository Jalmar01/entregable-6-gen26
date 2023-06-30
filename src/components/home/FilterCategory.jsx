import { useEffect } from "react"
import usefetch from "../../hooks/usefetch"
import { getAllProductsThunk } from "../../store/slices/products.slice"
import {useDispatch} from "react-redux"
import './styles/FilterCategory.css'

const FilterCategory = () => {

const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
 const [categories, getAllCategories] = usefetch(baseUrl)

 useEffect(() => {
   getAllCategories('/categories')
 }, [])

 const dispatch = useDispatch()
 
const handleFilterCategory = (id) => {
 const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
 if(id){
    dispatch(getAllProductsThunk(url))
 }else {
    dispatch(getAllProductsThunk())
 }
}

  return (
    <article>
       <div>
             <ul>
                <h2>Categories</h2>
                <li
                  onClick={() => handleFilterCategory()}
                >
                    All Categories
                </li>
                {
                    categories?.map(category => (
                        <li
                            onClick={() => handleFilterCategory(category.id)}
                            key={category.id}
                        >
                            {category.name}
                        </li>
                    ))
                }
             </ul>
        </div>
      
    </article>
  )
}

export default FilterCategory
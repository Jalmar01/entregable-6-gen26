import { useSelector } from "react-redux"
import CardProduct from "../components/home/CardProduct";
import { useState } from "react";
import FilterCategory from "../components/home/FilterCategory";
import FilterPrice from "../components/home/FilterPrice";
import './styles/Home.css'

const Home = () => {

    const [inputValue, setInputValue] = useState("")
    const [priceMinMax, setPriceMinMax] = useState({
        min:0,
        max:Infinity
    })

    const products = useSelector(states => states.products)

    const handleSearchName = e => {
        setInputValue(e.target.value.toLowerCase())

    }

    const callbackFilter = prod => prod.title.toLowerCase().includes(inputValue)


    const cbFilterPrice = prod => {
        const condMin =  priceMinMax.min <= prod.price
        const condMax = prod.price <= priceMinMax.max 
         return  condMin && condMax 
    }

    

    return (
        <div className="home">
           
            <aside className="container_filter">
            <FilterPrice setPriceMinMax={setPriceMinMax}/>    
            <FilterCategory/>
            </aside>

            <div className="container__input">
                <input 
                    value={inputValue} 
                    onChange={handleSearchName} 
                    type="text" 
                    placeholder="Enter a Keyword"
                />
            </div>
            <div className="product__container-card">
                   
                {
                    products?.filter(callbackFilter).filter(cbFilterPrice).map(prod => (
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
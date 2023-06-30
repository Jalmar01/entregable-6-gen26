import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import PurchasesCart from "../components/Purchases/PurchasesCart"


const PurchasesPages = () => {

const {purchases, getAllPurchases} = usePurchases()

useEffect(() => {
 getAllPurchases()
}, [])


  return (
    <div>
       <h2 className="purchases__title">My purchases</h2>
        <div>
            {
                purchases?.map(prod => (
                    <PurchasesCart
                        key={prod.id}
                        prod={prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasesPages
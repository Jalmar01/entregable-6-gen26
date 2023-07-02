import { useForm } from 'react-hook-form'
import './styles/FilterPrice.css'


const FilterPrice = ({  priceMinMax, setPriceMinMax}) => {

const {register, handleSubmit, reset} = useForm()

 const submit = data => {
   const min = data.from.trim() === "" ? 0 : +data.from
   const max = data.to.trim() === "" ? Infinity : +data.to
  
   setPriceMinMax({min, max})
 } 

 const handleResetFilter = () => {
    setPriceMinMax({min:0, max:Infinity})
    reset({
        from: "",
        to:""
    })
 }
 
    return (
        <article>
            <h2>Price</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="from">From</label>
                    <input {...register('from')} type="number" id="from" />
                </div>
                <div>
                    <label htmlFor="to">To</label>
                    <input {...register('to')} type="number" id="to" />
                </div>
                <button className='filter__btn'>Filter for Price</button>
            </form>
            {
                priceMinMax.min !== 0 || priceMinMax.max !== Infinity 
                ? <p>From {priceMinMax.min} to {priceMinMax.max} <b onClick={handleResetFilter}>x</b></p>
                : ""
            }

        </article>
    )
}

export default FilterPrice
import { useForm } from 'react-hook-form'
import './styles/FilterPrice.css'


const FilterPrice = ({ setPriceMinMax }) => {

const {register, handleSubmit} = useForm()

 const submit = data => {
   const min = data.form.trim() === "" ? 0 : +data.form
   const max = data.to.trim() === "" ? Infinity : +data.to
  
   setPriceMinMax({min, max})
 }
    
    return (
        <article>
            <h2>Price</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="form">Form</label>
                    <input {...register('form')} type="number" id="form" />
                </div>
                <div>
                    <label htmlFor="to">To</label>
                    <input {...register('to')} type="number" id="to" />
                </div>
                <button className='filter__btn'>Filter for Price</button>
            </form>

        </article>
    )
}

export default FilterPrice
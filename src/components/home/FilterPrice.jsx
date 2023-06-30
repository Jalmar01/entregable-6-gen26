import './styles/FilterPrice.css'
const FilterPrice = () => {


    
    return (
        <article>
            <h2>Price</h2>
            <form>
                <div>
                    <label htmlFor="form">Form</label>
                    <input type="text" id="form" />
                </div>
                <div>
                    <label htmlFor="to">To</label>
                    <input type="text" id="to" />
                </div>
                <button className='filter__btn'>Filter for Price</button>
            </form>

        </article>
    )
}

export default FilterPrice
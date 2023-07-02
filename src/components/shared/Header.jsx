import { useState } from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom'


const Header = () => {


const [isOpen, setIsOpen ] = useState(false)

const handleIsOpen = () => {
    setIsOpen(!isOpen)
}





  return (
    <header className='header__container'>
       <div className='header'>
            <nav className='hedeader__navbar'>
                <h1 className='logo'>
                    <Link className='logo__link'  to='/'> e-commerce </Link>
                </h1>
                <ul className={`container__icon-header ${isOpen && 'open'}`}>
                      <li className='icon__header'>
                        <Link className='icon__header-link' to='login'><i className='bx bx-user'></i></Link>
                      </li>
                    <li className='icon__header'>
                        <Link className='icon__header-link' to='cart'><i className='bx bxs-cart'></i></Link>
                    </li>
                    <li className='icon__header'>
                        <Link className='icon__header-link' to='purchases'><i className='bx bxs-archive'></i></Link>
                    </li>
                </ul>

                <div onClick={handleIsOpen} className={`nav__toggle ${isOpen && 'open'}`}>
                     <span></span>
                     <span></span>
                     <span></span>
                </div>
            </nav>
         
        </div>
       
    </header>
  )
}

export default Header
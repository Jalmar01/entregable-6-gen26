import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './styles/LoginPages.css'
import { Link } from "react-router-dom"


const LoginPages = () => {

const { register, handleSubmit, reset}= useForm()
const {loginUser} = useAuth()


const submit = data => {
const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
  loginUser(url, data)
   reset({
    email:'',
    password:''
  })
}

  return (
    
    <div className="loginpages__container">
        <form className="container__login" onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
            <div className="container__email">
                <label htmlFor="email" >email</label>
                <input {... register('email')} type="email" id="email" placeholder="example@gmail.com"/>
            </div>
            <div className="container__password">
                <label htmlFor="password" >password</label>
                <input {... register('password')} type="password" id="password" placeholder="Password"/>
            </div>
            <button className="login__btn">Login</button>
        <div className="login__send-register">
          <p>If you are not logged in, click here </p>
          <Link to='/register'>Register</Link>
        </div>
        </form>
    </div>
  )
}

export default LoginPages
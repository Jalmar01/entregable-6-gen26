import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './styles/LoginPages.css'


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
            <div className="container__email">
                <label htmlFor="email">email</label>
                <input {... register('email')} type="email" id="email"/>
            </div>
            <div className="container__password">
                <label htmlFor="password">password</label>
                <input {... register('password')} type="password" id="password"/>
            </div>
            <button className="login__btn">Login</button>
        </form>
    </div>
  )
}

export default LoginPages
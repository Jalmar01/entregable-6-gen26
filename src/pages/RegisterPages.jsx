import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './styles/RegisterPages.css'

const RegisterPages = () => {

const {register, handleSubmit, reset} = useForm()
const {createUser} = useAuth()

const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    createUser(url, data)
   reset({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    password:''
   })
}

  return (
    <div className="registerpages__container">
        
        <form className="container__form" onSubmit={handleSubmit(submit)}>
        <h2>Register</h2>
            <div className="container__value">
                <label htmlFor="first name">First name</label>
                <input {...register('firstName')} type="text" id="first name"/>
            </div>
            <div className="container__value">
                <label htmlFor="last name">Last name</label>
                <input  {...register('lastName')} type="text" id="last name"/>
            </div>
            <div className="container__value">
                <label htmlFor="email">Email</label>
                <input  {...register('email')}  type="email" id="email"/>
            </div>
            <div className="container__value">
                <label htmlFor="password">Password</label>
                <input  {...register('password')}  type="password" id="password"/>
            </div>
            <div className="container__value">
                <label htmlFor="phone">Phone</label>
                <input  {...register('phone')}  type="number" id="phone"/>
            </div>
            <button className="container__form-btn">Submit</button>
        </form>
    </div>
  )
}

export default RegisterPages
import axios from 'axios';
import Joi from 'joi';
import {useNavigate} from 'react-router-dom' 
import React , {useState} from 'react'
export default function Register() {

    let navigate = useNavigate()

    const [errorList, setErrorList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: 0,
        email: '',
        password: '',
    });

    function getUserData(e){
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }

    async function submitRegisterForm(e){
        e.preventDefault();
        setIsLoading(true)
        let validResponse = validatRegisterForm();
        
        if(validResponse.error)
        {
            setErrorList(validResponse.error.details);
            setIsLoading(false)
        }
        else
        {
            let {data} = await axios.post(`https://sticky-note-fe.vercel.app/signup`,user);
            if(data.message === 'success')
            {
                setIsLoading(false)
                navigate('/login');
            }
            else
            {
                setError(data.message);
                setIsLoading(false)
            }
        }

    }

    function validatRegisterForm(){
        let scheme = Joi.object({
            first_name: Joi.string().alphanum().min(4).max(10).required(),
            last_name: Joi.string().alphanum().min(4).max(10).required(),
            age: Joi.number().min(16).max(60).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[A-Za-z0-9]{3,16}$'))
        })
        return scheme.validate(user, {abortEarly:false})
    }

  return (
    <>
        <div className='mx-auto w-75'>
            <h2 className='mb-3'>Register Now</h2>
            {errorList.map((error , i) => i === 4 ?<div key={i} className='alert py-3 alert-danger'>Password In valid</div>:<div key={i} className='alert py-3 alert-danger'>{error.message}</div>) }
            {error? <div className='alert alert-danger'>{error}</div>:''}
            <form onSubmit={submitRegisterForm}>
                <label htmlFor="first_name">first_name :</label>
                <input onChange={getUserData} type="text" className='form-control my-2' placeholder='user_name' id='first_name' name='first_name' />

                <label htmlFor="last_name">last_name :</label>
                <input onChange={getUserData} type="text" className='form-control my-2' placeholder='last_name' id='uast_name' name='last_name' />

                <label htmlFor="age">age :</label>
                <input onChange={getUserData} type="number" className='form-control my-2' placeholder='age' id='age' name='age' />

                <label htmlFor="email">email :</label>
                <input onChange={getUserData} type="text" className='form-control my-2' placeholder='email' id='email' name='email' />
                
                <label htmlFor="password">password :</label>
                <input onChange={getUserData} type="password" className='form-control my-2' 
                placeholder='password' id='password' name='password' />
                <button type='submit' className="btn btn-outline-info py-2 px-4 my-2">
                {isLoading? <i className='fas fa-spinner fa-spin'></i> :'Register'}</button>
            </form>
        </div>
    </>
  )
}

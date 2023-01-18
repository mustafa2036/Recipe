import axios from 'axios';
import Joi from 'joi';
import {useNavigate} from 'react-router-dom' 
import React , {useState} from 'react'
export default function Login(props) {

    let navigate = useNavigate()

    const [errorList, setErrorList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    function getUserData(e){
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }

    async function submitLoginForm(e){
        e.preventDefault();
        setIsLoading(true)
        let validResponse = validatLoginForm();
        
        if(validResponse.error)
        {
            setErrorList(validResponse.error.details);
            setIsLoading(false)
        }
        else
        {
            let {data} = await axios.post(`https://sticky-note-fe.vercel.app/signin`,user);
            if(data.message === 'success')
            {
                setIsLoading(false);
                localStorage.setItem('userToken' , data.token);
                props.saveUserData();
                // navigato login
                navigate('/home');
            }
            else
            {
                setError(data.message);
                setIsLoading(false)
            }
        }

    }

    function validatLoginForm(){
        let scheme = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[A-Za-z0-9]{3,16}$'))
        })
        return scheme.validate(user, {abortEarly:false})
    }

  return (
    <>
        <div className='mx-auto w-75'>
            <h2 className='mb-3'>Login Now</h2>
            {errorList.map((error , i) => i === 1?<div key={i} className='alert py-3 alert-danger'>Password in Valid</div>:<div key={i} className='alert py-3 alert-danger'>{error.message}</div>) }
            {error? <div className='alert alert-danger'>{error}</div>:''}
            <form onSubmit={submitLoginForm}>
                <label htmlFor="email">email :</label>
                <input onChange={getUserData} type="text" className='form-control my-2' placeholder='email' id='email' name='email' />
                
                <label htmlFor="password">password :</label>
                <input onChange={getUserData} type="password" className='form-control my-2' 
                placeholder='password' id='password' name='password' />
                <button type='submit' className="btn btn-outline-info py-2 px-4 my-2">
                {isLoading? <i className='fas fa-spinner fa-spin'></i> :'Login'}</button>
            </form>
        </div>
    </>
  )
}

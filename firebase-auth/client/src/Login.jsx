import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {auth} from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Style.css'

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password)
            alert('User Successfully logged in')
            console.log('Account created')
        }
        catch(err){
            alert('Username or Password is incorrect')
             console.log(err)
        }
    }

    return(
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor='email'>
                    Email:
                        <input type='text' onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label htmlFor='password'>
                    Password:
                        <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <button type='submit'>Login</button>
                <p>Already registered?
                    <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
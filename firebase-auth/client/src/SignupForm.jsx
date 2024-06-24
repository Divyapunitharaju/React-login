// import React,{useState} from "react";
// import {Link} from 'react-router-dom';
// import {auth} from './firebase'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import './Style.css'

// function SignUpForm(){
//      const [email,setEmail]=useState('')
//      const [password,setPassword]=useState('')

//      const handleSubmit =async(e)=>{
//         e.preventDefault();
//         try{
//             await createUserWithEmailAndPassword(auth,email,password)
//             console.log('Account created')
//         }
//         catch(err){
//             console.log(err)

//         }
//      }
//     return(
//         <div className="signup-container">
//          <form className="signup-form" onSubmit={handleSubmit}>
//             <h2>Sign up</h2>
//             <label htmlFor="email">
//             Email:
//             <input type="text" onChange={(e)=>setEmail(e.target.value)} />
//             </label>
//             <label htmlFor="password">
//             Password:
//             <input type="password" onChange={(e)=>setPassword(e.target.value)} />
//             </label>
//             <button type="submit">Sign up</button>
//             <p>Already registered?
//             <Link to='/login'>Login</Link>
//             </p>
//          </form>

//         </div>
//     )
// }

// export default SignUpForm;
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {auth} from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Style.css'

function SignupForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            console.log('Account created')
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <label htmlFor='email'>
                    Email:
                        <input type='text' onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label htmlFor='password'>
                    Password:
                        <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <button type='submit'>Sign up</button>
                <p>Already registered?
                    <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    )
}

export default SignupForm;
import axios from 'axios';
import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';


function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:8001/signup',{email,password})
            .then(res => {
                if(res.data==="exist"){
                    alert('user already exists')
                }
                else if(res.data='notexist'){
                    //NavigationPreloadManager('/home')
                    navigate('/home',{state:{id:email}})
                }
            })
            .catch(e=>{
                alert('wrong details')
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
    }
    return(
        <div>
            <h1>Signup Page</h1>
            <form action="post">
                <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} /><br /><br />
                <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} /><br /><br />
                <input type="submit" onClick={handleSubmit} />
            </form>
            <br /><br />
            <p>OR</p>
            <br /><br />
            <Link to='/'>Login</Link>
        </div>

    )
}

export default Signup;
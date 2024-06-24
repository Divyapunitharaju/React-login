import {useLocation} from 'react-router-dom'

const Home=()=>{
    const location =useLocation();

    return(
        <div>
             Hello {location.state.id} and Welcome to the home page
        </div>
    )
}
export default Home
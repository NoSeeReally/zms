import '../App.css'
import { useNavigate } from 'react-router-dom';
interface CookieProp{
    setState:() => void;
}
export default function Cookies({setState}: CookieProp){
    const navigate = useNavigate();

    const termsHandler = () =>{
        setState();
        navigate('/terms');
    }
    
    return(
        <>
        <div className='cookie-overlay'>
            <div className='cookie-card'>
                <div className='cookie-card-title'>
                    <p>Cookies</p>
                    <p>We use cookies for a better experience.</p>
                    <p>Click Read More to know more</p>
                    <button className='cookie-card-button' onClick={setState}>Agree</button>
                    <button className='cookie-card-button' onClick={termsHandler}>Read More</button>

                </div>

            </div>
        </div>

        </>
    );
}
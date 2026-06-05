import { Link } from 'react-router-dom';
import '../App.css'
import home2 from '../assets/home2.png'
import lessons from '../assets/lessons.png'


export default function NavBar(){
    return(
       <>
            <div className='navBarContainer'>
                <div>
                    <Link className='navButton' to='/home'><img src={home2} alt="Home" className="navButton-icon"/></Link>
                    <Link className='navButton' to='/lessons'><img src={lessons} alt="Lesson" className='navButton-icon'/></Link>
                </div>
                

            </div>
       </>
    );

}
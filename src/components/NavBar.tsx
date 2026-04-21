import { Link } from 'react-router-dom';
import '../App.css'


export default function NavBar(){
    return(
       <>
            <div className='navBarContainer'>
                <div>
                    <Link className='navButton' to='/home'>Home</Link>
                    <Link className='navButton' to='/lessons'>Lessons</Link>
                    <Link className='navButton' to='/profile'>Profile</Link>
                </div>
                

            </div>
       </>
    );

}
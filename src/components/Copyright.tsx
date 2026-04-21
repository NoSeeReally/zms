import '../App.css'
import { Link } from 'react-router-dom';

export default function Copyright(){
    const year = new Date().getFullYear();
    return(
        <footer className="footerContainer">
            <nav className="footerLinks">
               <Link to="/policy">Privacy Policy</Link>
                <span>&nbsp;|&nbsp;</span>
                <Link to="/terms">Terms of Use</Link>
                <span>&nbsp;|&nbsp;</span>
                <Link to="/support">Support</Link>
                <span>&nbsp;|&nbsp;</span>
                <Link to="/aboutus">About Us</Link>
            </nav>
            <div className="footerCopyright">
                <span>&copy;&nbsp;</span>
                <span>{year}</span>
                <span>&nbsp;ZimAsul. All rights reserved.</span>
            </div>
        </footer>
    );
}
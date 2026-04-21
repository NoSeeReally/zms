import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Copyright from "./components/Copyright"
import Policy from "./pages/Policy";
import Terms from "./pages/Terms"
import Support from "./pages/Support";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Lesson from "./pages/Lesson";
import Profile from "./pages/Profile";


export default function App(){
    return(
       <BrowserRouter> 
            <div className="header">
                <Header />
                <NavBar />
            </div>
           

            
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/terms" element={<Terms/>}/>
                <Route path="/support" element={<Support/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="lessons" element={<Lesson/>}/>
                <Route path="profile" element={<Profile/>}/>
            </Routes>

            
            <Copyright />
        </BrowserRouter>
    );
}
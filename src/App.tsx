import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Copyright from "./components/Copyright"
import Policy from "./Policy";
import Terms from "./Terms"
import Support from "./Support";
import Home from "./Home";

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
            </Routes>

            
            <Copyright />
        </BrowserRouter>
    );
}
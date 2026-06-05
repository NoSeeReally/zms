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
import Cookies from "./components/Cookies";
import { useState } from "react";
import Arithmetic from "./components/lessons/Arithmetic";
import Algebra from "./components/lessons/Algebra";
import Algebra2 from "./components/lessons/Algebra2";
import Geometry from "./components/lessons/Geometry";
import PreAlgebra from "./components/lessons/PreAlgebra";
import StatisticsAndProbability from "./components/lessons/StatisticsAndProbability";
import Trigonometry from "./components/lessons/Trigonometry";


export default function App(){
    const [isVisible, setIsVisible] = useState<boolean>(true)

    const cookieSetter = () => {
        setIsVisible(false)
    }
    const cookieHandler = () => {
        if(isVisible)
        {
            return(
                <Cookies setState={cookieSetter}/>
            );
        }
    }
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
                <Route path="Arithmetic Review" element={<Arithmetic/>}/>
                <Route path="Pre-Algebra" element={<PreAlgebra/>}/>
                <Route path="Algebra 1" element={<Algebra/>}/>
                <Route path="Algebra 2" element={<Algebra2/>}/>
                <Route path="Geometry" element={<Geometry/>}/>
                <Route path="Trigonometry" element={<Trigonometry/>}/>
                <Route path="Stats & Probability" element={<StatisticsAndProbability/>}/>
                
                
            </Routes>
             <div className="body">

           </div>

            <div className="padding">
             {cookieHandler()}
           </div>
            <Copyright />
        </BrowserRouter>
    );
}
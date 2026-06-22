import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Integers from "./components/lessons/arithmeticSubLessons/Integers";
import Fractions from "./components/lessons/arithmeticSubLessons/Fractions";
import Decimals from "./components/lessons/arithmeticSubLessons/Decimals";
import Percentages from "./components/lessons/arithmeticSubLessons/Percentages";
import RatiosAndProportions from "./components/lessons/arithmeticSubLessons/RatiosAndProportions";
import OrderOfOperations from "./components/lessons/arithmeticSubLessons/OrderOfOperations";
import BasicExponents from "./components/lessons/arithmeticSubLessons/BasicExponents";
import SquareRoots from "./components/lessons/arithmeticSubLessons/SquareRoots";
import Variables from "./components/lessons/preAlgebraSubLessons/Variables";
import Expressions from "./components/lessons/preAlgebraSubLessons/Expressions";
import EvaluatingFormulas from "./components/lessons/preAlgebraSubLessons/EvaluatingFormulas";
import LikeTerms from "./components/lessons/preAlgebraSubLessons/LikeTerms";
import SimplifyingExpressions from "./components/lessons/preAlgebraSubLessons/SimplifyingExpressions";
import DistributiveProperty from "./components/lessons/preAlgebraSubLessons/DistributiveProperty";
import BasicEquations from "./components/lessons/preAlgebraSubLessons/BasicEquations";
import Inequalities from "./components/lessons/preAlgebraSubLessons/Inequalities";
import WordProblems from "./components/lessons/preAlgebraSubLessons/WordProblems";
import DomainAndRange from "./components/lessons/algebraSubLessons/DomainAndRange";
import ExponentRules from "./components/lessons/algebraSubLessons/ExponentRules";
import FactoringBasics from "./components/lessons/algebraSubLessons/FactoringBasics";
import FunctionsAndBasics from "./components/lessons/algebraSubLessons/FunctionsAndBasics";
import GraphingLines from "./components/lessons/algebraSubLessons/GraphingLines";
import LinearEquations from "./components/lessons/algebraSubLessons/LinearEquations";
import MultiStepEquations from "./components/lessons/algebraSubLessons/MultiStepEquations";
import Polynomials from "./components/lessons/algebraSubLessons/Polynomials";
import Quadratics from "./components/lessons/algebraSubLessons/Quadratics";
import Sequences from "./components/lessons/algebraSubLessons/Sequences";
import SlopeAndIntercept from "./components/lessons/algebraSubLessons/SlopeAndIntercept";
import SystemsOfEquatons from "./components/lessons/algebraSubLessons/SystemsOfEquations";
import AdvancedFactoring from "./components/lessons/algebra2SubLessons/AdvancedFactoring";
import CompletingTheSquare from "./components/lessons/algebra2SubLessons/CompletingTheSquare";
import ComplexNumbers from "./components/lessons/algebra2SubLessons/ComplexNumbers";
import ConicSections from "./components/lessons/algebra2SubLessons/ConicSections";
import ExponentialFunctions from "./components/lessons/algebra2SubLessons/ExponentialFunction";
import IntroductionToLogarithms from "./components/lessons/algebra2SubLessons/IntroductionToLogarithms"
import MatrixBasics from "./components/lessons/algebra2SubLessons/MatrixBasics"
import PolynomialFunctions from "./components/lessons/algebra2SubLessons/PolynomialFunctions"
import QuadraticEquations from "./components/lessons/algebra2SubLessons/QuadraticEquations"
import QuadraticFormula from "./components/lessons/algebra2SubLessons/QuadraticFormula"
import RadicalExpression from "./components/lessons/algebra2SubLessons/RadicalExpression"
import RationalExpression from "./components/lessons/algebra2SubLessons/RationalExpression"
















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
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/terms" element={<Terms/>}/>
                <Route path="/support" element={<Support/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="lessons" element={<Lesson/>}/>
                <Route path="Arithmetic Review" element={<Arithmetic/>}/>
                /**Route for lessons */
                <Route path="Pre-Algebra" element={<PreAlgebra/>}/>
                <Route path="Algebra 1" element={<Algebra/>}/>
                <Route path="Algebra 2" element={<Algebra2/>}/>
                <Route path="Geometry" element={<Geometry/>}/>
                <Route path="Trigonometry" element={<Trigonometry/>}/>
                <Route path="Stats & Probability" element={<StatisticsAndProbability/>}/>
                 /**Route for sub lessons */
                /**Arithmetic */
                <Route path="Integers" element={<Integers/>}/>
                <Route path="Fractions" element={<Fractions/>}/>
                <Route path="Decimals" element={<Decimals/>}/>
                <Route path="Percentages" element={<Percentages/>}/>
                <Route path="Ratios and Proportions" element={<RatiosAndProportions/>}/>
                <Route path="Order of Operations" element={<OrderOfOperations/>}/>
                <Route path="Basic Exponents" element={<BasicExponents/>}/>
                <Route path="Square Roots" element={<SquareRoots/>}/>
                /**Pre algebra */
                <Route path="Variables" element={<Variables/>}/>
                <Route path="Expressions" element={<Expressions/>}/>
                <Route path="Evaluating Formulas" element={<EvaluatingFormulas/>}/>
                <Route path="Like Terms" element={<LikeTerms/>}/>
                <Route path="Simplifying Expressions" element={<SimplifyingExpressions/>}/>
                <Route path="Distributive Property" element={<DistributiveProperty/>}/>
                <Route path="Basic Equations" element={<BasicEquations/>}/>
                <Route path="Inequalities" element={<Inequalities/>}/>
                <Route path="Word Problems" element={<WordProblems/>}/>
                /**Algebra 1 */
                <Route path="Domain And Range" element={<DomainAndRange/>}/>
                <Route path="Exponent Rules" element={<ExponentRules/>}/>
                <Route path="Factoring Basics" element={<FactoringBasics/>}/>
                <Route path="Functions And Basics" element={<FunctionsAndBasics/>}/>
                <Route path="Graphing Lines" element={<GraphingLines/>}/>
                <Route path="Linear Equations" element={<LinearEquations/>}/>
                <Route path="Multi-Step Equations" element={<MultiStepEquations/>}/>
                <Route path="Polynomials" element={<Polynomials/>}/>
                <Route path="Introduction to Quadratics" element={<Quadratics/>}/>
                <Route path="Sequences" element={<Sequences/>}/>
                <Route path="Slope and Intercepts" element={<SlopeAndIntercept/>}/>
                <Route path="Systems of Equations" element={<SystemsOfEquatons/>}/>
                /**Algebra 2 */
                <Route path="Advanced Factoring" element={<AdvancedFactoring/>}/>
                <Route path="Completing the Square" element={<CompletingTheSquare/>}/>
                <Route path="Complex Numbers" element={<ComplexNumbers/>}/>
                <Route path="Conic Sections" element={<ConicSections/>}/>
                <Route path="Exponential Function" element={<ExponentialFunctions/>}/>
                <Route path="Introduction to Logarithms" element={<IntroductionToLogarithms/>}/>
                <Route path="Matrices Basics" element={<MatrixBasics/>}/>
                <Route path="Polynomial Functions" element={<PolynomialFunctions/>}/>
                <Route path="Quadratic Equations" element={<QuadraticEquations/>}/>
                <Route path="Quadratic Formula" element={<QuadraticFormula/>}/>
                <Route path="Radical Expression" element={<RadicalExpression/>}/>
                <Route path="Rational Expression" element={<RationalExpression/>}/>
               
                {/* fallback: unknown paths -> home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            
           

            <div className="padding">
             {cookieHandler()}
             
           </div>
            <Copyright />
        </BrowserRouter>
    );
}
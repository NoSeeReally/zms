import SubLessonCard from "../SubLessonCard";
import back from '../../assets/back.png'
import { Link } from "react-router-dom";
export default function Algebra2(){
    const subLessons : Array<{title:string}>=[
        {title:"Quadratic Equations"},
        {title:"Advanced Factoring"},
        {title:"Completing the Square"},
        {title:"Quadratic Formula"},
        {title:"Radical Expression"},
        {title:"Rational Expression"},
        {title:"Complex Numbers"},
        {title:"Exponential Function"},
        {title:"Introduction to Logarithms"},
        {title:"Polynomial Functions"},
        {title:"Matrices Basics"},
        {title:"Conic Sections"}
    ]
    return(
        <>
            <div className="padding"></div>
           <div className="sublesson-header">
                <Link className="lesson-back-button" to="/lessons" aria-label="Back to Lessons">
                    <img className="lesson-back-icon" src={back} alt="" />
                </Link>
            </div>
            <div className="lesson-description">
               <b>Algebra 2</b>
               <br />
                    Expands on Algebra 1 with polynomials, quadratics, complex numbers, and advanced functions, deepening your algebraic toolkit.
            </div>
            <div className="Container">
                    {subLessons.map((lesson) => (
                    <SubLessonCard
                        key={lesson.title}
                        title={lesson.title}
                    />
                    ))}
            </div>
        </>
    );    
}
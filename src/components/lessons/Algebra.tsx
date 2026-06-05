import SubLessonCard from "../SubLessonCard";
import back from '../../assets/back.png'
import { Link } from "react-router-dom";
export default function Algebra(){
    const subLessons : Array<{title:string}>=[
        {title:"Linear Equations"},
        {title:"Multi-Step Equations"},
        {title:"Systems of Equations"},
        {title:"Graphing Lines"},
        {title:"Slope and Intercepts"},
        {title:"Functions and Basics"},
        {title:"Domain and Range"},
        {title:"Sequences"},
        {title:"Exponent Rules"},
        {title:"Polynomials"},
        {title:"Factoring Basics"},
        {title:"Introduction to Quadratics"},
        
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
                <b>Algebra 1</b>
                <br />
                    Explores variables, linear equations, inequalities, and functions the core language of mathematics you'll use in every level beyond.
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
import SubLessonCard from "../SubLessonCard";
import back from '../../assets/back.png'
import { Link } from "react-router-dom";
export default function PreAlgebra(){
    const subLessons : Array<{title:string}>=[
        {title:"Variables"},
        {title:"Expressions"},
        {title:"Evaluating Formulas"},
        {title:"Like Terms"},
        {title:"Simplifying Expressions"},
        {title:"Distributive Property"},
        {title:"Basic Equations"},
        {title:"Inequalities"},
        {title:"Word Problems"}
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
                <b>Pre-Algebra</b>
                <br />
                    bridges basic arithmetic and formal algebra introducing variables, expressions, equations, and number properties to prepare you for algebraic thinking.
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
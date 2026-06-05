import SubLessonCard from "../SubLessonCard";
import { Link } from "react-router-dom";
export default function Arithmetic(){
    const subLessons : Array<{title:string}>=[
        {title:"Integers"},
        {title:"Fractions"},
        {title:"Decimals"},
        {title:"Percentages"},
        {title:"Ratios and Proportions"},
        {title:"Order of Operations"},
        {title:"Basic Exponents"},
        {title:"Square Roots"},
    ]
    return(
        <>
            <div className="padding"></div>
            <div className="sublesson-header">
                <Link className="lesson-back-button" to="/lessons">Back to Lessons</Link>
            </div>
            <div className="lesson-description">
                <b>Arithmetic Review</b>
                    <br />
                    Builds the numerical foundation you need before tackling higher-level math covering integers, fractions, decimals, percentages, and more through interactive, guided practice.
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
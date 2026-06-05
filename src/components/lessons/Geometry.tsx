import SubLessonCard from "../SubLessonCard";
import { Link } from "react-router-dom";
export default function Geometry(){
    const subLessons : Array<{title:string}>=[
        {title:"Points, Lines, and Planes"},
        {title:"Angles"},
        {title:"Triangles"},
        {title:"Congruence and Similarity"},
        {title:"Perimeter and Area"},
        {title:"Surface area and volume"},
        {title:"Circles"},
        {title:"Coordinate Geometry"},
        {title:"Distance and Midpoint Formula"},
        {title:"Pythagorean Theorem"},
        {title:"Transformations"}
        
    ]
    return(
        <>
            <div className="padding"></div>
           <div className="sublesson-header">
                <Link className="lesson-back-button" to="/lessons">Back to Lessons</Link>
            </div>
            <div className="lesson-description">
               <b>Geometry</b>
               <br />
                    Covers shapes, angles, area, volume, and proofs, building spatial reasoning and logical thinking through visual mathematics.
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
import SubLessonCard from "../SubLessonCard";
import back from '../../assets/back.png'
import { Link } from "react-router-dom";
export default function Trigonometry(){
    const subLessons : Array<{title:string}>=[
        {title:"Right Triangle Trigonometry"},
        {title:"Sine, Cosine, Tangent"},
        {title:"Special Triangles"},
        {title:"Unit Circle"},
        {title:"Graphs of Trig Functions"},
        {title:"Inverse Trigonometric Functions"},
        {title:"Applications"},
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
               <b>Trigonometry</b>
               <br />
                    Studies the relationships between angles and sides of triangles, introducing sine, cosine, and tangent for real-world problem solving.
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
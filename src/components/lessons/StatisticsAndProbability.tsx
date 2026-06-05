import SubLessonCard from "../SubLessonCard";
import { Link } from "react-router-dom";
export default function Trigonometry(){
    const subLessons : Array<{title:string}>=[
        {title:"Mean, Median, Mode"},
        {title:"Range"},
        {title:"Intro to Standard Deviation"},
        {title:"Graphs and Charts"},
        {title:"Basic Probability"},
        {title:"Compound Probability"},
        {title:"Permuations and Combinations"},
        {title:"Data Interpretations"}
    ]
    return(
        <>
            <div className="padding"></div>
           <div className="sublesson-header">
                <Link className="lesson-back-button" to="/lessons">Back to Lessons</Link>
            </div>
            <div className="lesson-description">
                <b>Statistics and Probability</b>
                    <br />
                Teaches how to collect, analyze, and interpret data and how to measure the likelihood of events using mathematical reasoning.
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
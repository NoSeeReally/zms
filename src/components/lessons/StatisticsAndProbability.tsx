import SubLessonCard from "../SubLessonCard";
import back from '../../assets/back.png'
import { Link } from "react-router-dom";
export default function Trigonometry(){
    const subLessons : Array<{title:string}>=[
        {title:"Mean, Median, Mode"},
        {title:"Range"},
        {title:"Intro to Standard Deviation"},
        {title:"Graphs and Charts"},
        {title:"Basic Probability"},
        {title:"Compound Probability"},
        {title:"Permutations and Combinations"},
        {title:"Data Interpretations"}
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
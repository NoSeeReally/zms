import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const distanceAndMidpointFormulaLesson: LessonCard[] = [
    {
        type: "content",
        title: "Distance and Midpoint Formula",
        content: ``,
        
    },
     {
        type: "content",
        title: "Distance and Midpoint Formula",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Distance and Midpoint Formula",
        content: `` 
    },
    {
        type: "content",
        title: "Distance and Midpoint Formula",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Distance and Midpoint Formula",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Distance and Midpoint Formula",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Distance and Midpoint Formula",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Distance and Midpoint Formula",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Distance and Midpoint Formula",
        content: ``
        
    }
];

export default function DistanceAndMidpointFormula(){

    return(
        <>
           return <LessonRenderer lessonTitle="Distance and Midpoint Formula" cards={distanceAndMidpointFormulaLesson} returnPath="/Geometry" />;
        </>
    );
}
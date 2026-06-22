import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const quadraticEquationsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Quadratic Equations",
        content: ``,
        
    },
     {
        type: "content",
        title: "Quadratic Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Quadratic Equations",
        content: `` 
    },
    {
        type: "content",
        title: "Quadratic Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Quadratic Equations",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Quadratic Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Quadratic Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Quadratic Equations",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Quadratic Equations",
        content: ``
        
    }
];

export default function QuadraticEquations(){

    return(
        <>
           return <LessonRenderer lessonTitle="Quadratic Equations" cards={quadraticEquationsLesson} returnPath="/Algebra 2" />;
        </>
    );
}
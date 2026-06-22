import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const multiStepEquationLesson: LessonCard[] = [
    {
        type: "content",
        title: "Multi-Step Equations",
        content: ``,
        
    },
     {
        type: "content",
        title: "Multi-Step Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Multi-Step Equations",
        content: `` 
    },
    {
        type: "content",
        title: "Multi-Step Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Multi-Step Equations",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Multi-Step Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Multi-Step Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Multi-Step Equations",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Multi-Step Equations",
        content: ``
        
    }
];

export default function MultiStepEquations(){

    return(
        <>
           return <LessonRenderer lessonTitle=" Multi-Step Equations" cards={multiStepEquationLesson} returnPath="/Algebra 1" />;
        </>
    );
}
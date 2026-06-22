import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const basicEquationLesson: LessonCard[] = [
    {
        type: "content",
        title: "Basic Equations",
        content: ``,
        
    },
     {
        type: "content",
        title: "Basic Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Basic Equations",
        content: `` 
    },
    {
        type: "content",
        title: "Basic Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Basic Equations",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Basic Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Basic Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Basic Equations",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Basic Equations",
        content: ``
        
    }
];

export default function BasicEquations(){

    return(
        <>
           return <LessonRenderer lessonTitle="Basic Equations" cards={basicEquationLesson} returnPath="/Pre-Algebra" />;
        </>
    );
}
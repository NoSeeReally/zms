import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const linearEquationsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Linear Equations",
        content: ``,
        
    },
     {
        type: "content",
        title: "Linear Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Linear Equations",
        content: `` 
    },
    {
        type: "content",
        title: "Linear Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Linear Equations",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Linear Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Linear Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Linear Equations",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Linear Equations",
        content: ``
        
    }
];

export default function LinearEquations(){

    return(
        <>
           return <LessonRenderer lessonTitle="Linear Equations" cards={linearEquationsLesson} returnPath="/Algebra 1" />;
        </>
    );
}
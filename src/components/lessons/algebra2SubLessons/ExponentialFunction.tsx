import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const exponentialFunctionsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Exponential Function",
        content: ``,
        
    },
     {
        type: "content",
        title: "Exponential Function",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Exponential Function",
        content: `` 
    },
    {
        type: "content",
        title: "Exponential Function",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Exponential Function",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Exponential Function",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Exponential Function",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Exponential Function",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Exponential Function",
        content: ``
        
    }
];

export default function ExponentialFunction(){

    return(
        <>
           return <LessonRenderer lessonTitle="Exponential Function" cards={exponentialFunctionsLesson} returnPath="/Algebra 2" />;
        </>
    );
}
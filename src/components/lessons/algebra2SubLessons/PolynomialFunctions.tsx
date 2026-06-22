import LessonRenderer, { type LessonCard } from "../LessonRenderer";
const polynomialFunctionsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Polynomial Functions",
        content: ``,
        
    },
     {
        type: "content",
        title: "Polynomial Functions",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Polynomial Functions",
        content: `` 
    },
    {
        type: "content",
        title: "Polynomial Functions",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Polynomial Functions",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Polynomial Functions",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Polynomial Functions",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Polynomial Functions",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Polynomial Functions",
        content: ``
        
    }
];

export default function PolynomialFunctions(){

    return(
        <>
           return <LessonRenderer lessonTitle="Polyomial Function" cards={polynomialFunctionsLesson} returnPath="/Algebra 2" />;
        </>
    );
}
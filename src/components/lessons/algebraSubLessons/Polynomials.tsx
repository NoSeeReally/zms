import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const polynomialsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Polynomials",
        content: ``,
        
    },
     {
        type: "content",
        title: "Polynomials",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Polynomials",
        content: `` 
    },
    {
        type: "content",
        title: "Polynomials",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Polynomials",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Polynomials",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Polynomials",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Polynomials",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Polynomials",
        content: ``
        
    }
];

export default function Polynomials(){

    return(
        <>
           return <LessonRenderer lessonTitle="Polynomials" cards={polynomialsLesson} returnPath="/Algebra 1" />;
        </>
    );
}
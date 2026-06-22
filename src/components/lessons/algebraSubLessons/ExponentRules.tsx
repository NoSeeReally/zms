import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const exponentRulesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Exponent Rules",
        content: ``,
        
    },
     {
        type: "content",
        title: "Exponent Rules",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Exponent Rules",
        content: `` 
    },
    {
        type: "content",
        title: "Exponent Rules",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Exponent Rules",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Exponent Rules",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Exponent Rules",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Exponent Rules",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Exponent Rules",
        content: ``
        
    }
];

export default function ExponentRules(){

    return(
        <>
           return <LessonRenderer lessonTitle="Exponent Rules" cards={exponentRulesLesson} returnPath="/Algebra 1" />;
        </>
    );
}
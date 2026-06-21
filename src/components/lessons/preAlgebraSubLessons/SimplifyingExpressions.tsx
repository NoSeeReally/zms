import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const simplifyingExpressionLesson: LessonCard[] = [
    {
        type: "content",
        title: "Simplifying expression",
        content: ``,
        
    },
     {
        type: "content",
        title: "Simplifying expressions",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Simplifying expressions",
        content: `` 
    },
    {
        type: "content",
        title: "Simplifying expressions",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Simplifying expressions",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Simplifying expressions",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Simplifying expressions",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Simplifying expressions",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Simplifying expressions",
        content: ``
        
    }
];

export default function SimplifyingExpressions(){

    return(
        <>
           return <LessonRenderer lessonTitle="Like Terms" cards={simplifyingExpressionLesson} returnPath="/Pre-Algebra" />;
        </>
    );
}